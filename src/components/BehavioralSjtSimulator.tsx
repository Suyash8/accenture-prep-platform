'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  ArrowLeft, 
  TrendingUp, 
  ChevronRight,
  ChevronLeft,
  Clock,
  Filter,
  Check,
  AlertCircle
} from 'lucide-react';
import { ACCENTURE_SJT_ITEMS, Competency, SjtItem } from '../data/sjtQuestions';
import { 
  getSjtState, 
  saveSjtState, 
  clearSjtState, 
  saveExamAttempt 
} from '../lib/storage';

function seededShuffle<T>(arr: T[], seed: string): T[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    h = (Math.imul(48271, h) + 1) | 0;
    const j = Math.abs(h) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

interface BehavioralSjtSimulatorProps {
  onBack: () => void;
}

export const BehavioralSjtSimulator: React.FC<BehavioralSjtSimulatorProps> = ({ onBack }) => {
  const [initialState] = useState(() => {
    if (typeof window === 'undefined') {
      return { attemptId: 'sjt_init', answers: {}, currentIndex: 0, timeSpent: 0 };
    }
    const saved = getSjtState();
    if (saved && saved.answers && !saved.completed) {
      const elapsed = Math.floor((Date.now() - saved.startedAt) / 1000);
      return {
        attemptId: saved.attemptId,
        answers: saved.answers,
        currentIndex: saved.lastActiveIndex ?? 0,
        timeSpent: elapsed > 0 ? elapsed : 0,
      };
    }
    const newId = `sjt_${Date.now()}`;
    saveSjtState({
      attemptId: newId,
      answers: {},
      startedAt: Date.now(),
      lastActiveIndex: 0,
      completed: false,
    });
    return { attemptId: newId, answers: {}, currentIndex: 0, timeSpent: 0 };
  });

  const [attemptId, setAttemptId] = useState<string>(initialState.attemptId);
  const [currentIndex, setCurrentIndex] = useState(initialState.currentIndex);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(initialState.answers);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showIncompleteWarning, setShowIncompleteWarning] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'All' | Competency>('All');
  const [sortLowestFirst, setSortLowestFirst] = useState(false);
  const [timeSpent, setTimeSpent] = useState(initialState.timeSpent);

  // Timer ticker
  useEffect(() => {
    if (isCompleted) return;
    const interval = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCompleted]);

  const items = ACCENTURE_SJT_ITEMS;
  const totalQuestions = items.length;
  const currentQ = items[currentIndex];

  // Seeded shuffled options for current question
  const displayedOptions = useMemo(() => {
    if (!currentQ || !attemptId) return currentQ?.options || [];
    return seededShuffle(currentQ.options, `${attemptId}:${currentQ.id}`);
  }, [currentQ, attemptId]);

  const handleSelectOption = useCallback((score: number) => {
    const updated = {
      ...selectedAnswers,
      [currentQ.id]: score,
    };
    setSelectedAnswers(updated);
    saveSjtState({
      attemptId,
      answers: updated,
      startedAt: Date.now() - timeSpent * 1000,
      lastActiveIndex: currentIndex,
      completed: false,
    });
  }, [selectedAnswers, currentQ.id, attemptId, timeSpent, currentIndex]);

  const finalizeAssessment = useCallback(() => {
    setIsCompleted(true);
    setShowIncompleteWarning(false);
    saveSjtState({
      attemptId,
      answers: selectedAnswers,
      startedAt: Date.now() - timeSpent * 1000,
      lastActiveIndex: currentIndex,
      completed: true,
    });

    // Record attempt
    const rawScore = Object.values(selectedAnswers).reduce((a, b) => a + b, 0);
    const maxScore = totalQuestions * 4;
    const pct = Math.round((rawScore / maxScore) * 100);

    saveExamAttempt({
      id: attemptId,
      timestamp: Date.now(),
      title: 'Stage 1: Behavioral Situational Judgement Test',
      totalQuestions,
      score: rawScore,
      percent: pct,
      timeSpentSeconds: timeSpent,
      isPassed: pct >= 65,
      cognitiveScore: pct,
      technicalScore: 0,
      sectionScores: {
        'Behavioral SJT': {
          correct: Math.round(rawScore / 4),
          total: totalQuestions,
        },
      },
    });
  }, [attemptId, selectedAnswers, timeSpent, currentIndex, totalQuestions]);

  const checkFinish = useCallback(() => {
    const answeredCount = Object.keys(selectedAnswers).length;
    if (answeredCount < totalQuestions) {
      setShowIncompleteWarning(true);
    } else {
      finalizeAssessment();
    }
  }, [selectedAnswers, totalQuestions, finalizeAssessment]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      saveSjtState({
        attemptId,
        answers: selectedAnswers,
        startedAt: Date.now() - timeSpent * 1000,
        lastActiveIndex: nextIdx,
        completed: false,
      });
    } else {
      checkFinish();
    }
  }, [currentIndex, totalQuestions, attemptId, selectedAnswers, timeSpent, checkFinish]);

  const handleRestart = () => {
    clearSjtState();
    const newId = `sjt_${Date.now()}`;
    setAttemptId(newId);
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setTimeSpent(0);
  };

  // ==========================================
  // CONSISTENCY ALGORITHM (Section 3.3 Spec)
  // ==========================================
  const consistencyStats = useMemo(() => {
    const seen = new Set<string>();
    let answered = 0;
    let consistent = 0;

    for (const q of items) {
      if (!q.pair) continue;
      const key = [q.id, q.pair.id].sort().join('|');
      if (seen.has(key)) continue;
      seen.add(key);

      const a = selectedAnswers[q.id];
      const b = selectedAnswers[q.pair.id];
      if (a === undefined || b === undefined) continue;

      answered++;
      // Score represents desirability on both (inverted pair asks if refusal/blame is acceptable, option scores reflect desirability)
      if (Math.abs(a - b) <= 1) {
        consistent++;
      }
    }

    const rate = answered === 0 ? null : Math.round((consistent / answered) * 100);
    return { answered, consistent, rate };
  }, [items, selectedAnswers]);

  // Competency breakdown
  const competencyBreakdown = useMemo(() => {
    const map: Record<Competency, { total: number; max: number; count: number }> = {
      'Collaboration': { total: 0, max: 0, count: 0 },
      'Client Centricity': { total: 0, max: 0, count: 0 },
      'Agility & Growth': { total: 0, max: 0, count: 0 },
      'Integrity & Ownership': { total: 0, max: 0, count: 0 },
    };

    items.forEach((q) => {
      map[q.competency].count += 1;
      map[q.competency].max += 4;
      if (selectedAnswers[q.id] !== undefined) {
        map[q.competency].total += selectedAnswers[q.id];
      }
    });

    return map;
  }, [items, selectedAnswers]);

  const answeredCount = Object.keys(selectedAnswers).length;
  const overallScore = Object.values(selectedAnswers).reduce((a, b) => a + b, 0);
  const maxPossibleScore = totalQuestions * 4;
  const percentage = Math.round((overallScore / maxPossibleScore) * 100);

  // Review list filtering and sorting
  const reviewItems = useMemo(() => {
    let list = items.map((q, originalIndex) => ({
      ...q,
      originalIndex,
      userScore: selectedAnswers[q.id],
    }));

    if (reviewFilter !== 'All') {
      list = list.filter((q) => q.competency === reviewFilter);
    }

    if (sortLowestFirst) {
      list.sort((a, b) => (a.userScore ?? -1) - (b.userScore ?? -1));
    }

    return list;
  }, [items, selectedAnswers, reviewFilter, sortLowestFirst]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!currentQ) return null;

  // COMPLETED REVIEW SCREEN
  if (isCompleted) {
    return (
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/80 pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-semibold">
              Stage 1: Completed ({formatTime(timeSpent)})
            </span>
            <button
              onClick={handleRestart}
              className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake SJT
            </button>
          </div>
        </div>

        {/* Score Card Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Overall Desirability Score
            </span>
            <span className="text-3xl font-black text-purple-600 dark:text-purple-400">
              {percentage}%
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {overallScore} / {maxPossibleScore} Points ({answeredCount}/{totalQuestions} Answered)
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Behavioral Consistency Check
            </span>
            <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400">
              {consistencyStats.rate !== null ? `${consistencyStats.rate}%` : 'N/A'}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {consistencyStats.rate !== null
                ? `${consistencyStats.consistent} of ${consistencyStats.answered} Pairs Aligned`
                : 'Need at least 1 paired set answered'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Accenture Benchmark Status
            </span>
            <span className={`text-2xl font-bold mt-1 block ${
              percentage >= 75 && (consistencyStats.rate === null || consistencyStats.rate >= 80)
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-amber-600 dark:text-amber-400'
            }`}>
              {percentage >= 75 && (consistencyStats.rate === null || consistencyStats.rate >= 80)
                ? 'Ready for Stage 2'
                : 'Review Low-Score Traits'}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Target: &gt;75% Desirability & &gt;80% Consistency
            </p>
          </div>
        </div>

        {/* Competencies Breakdown */}
        <div className="p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Competency Performance Breakdown
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {(Object.entries(competencyBreakdown) as [Competency, { total: number; max: number; count: number }][]).map(([name, data]) => {
              const pct = data.max > 0 ? Math.round((data.total / data.max) * 100) : 0;
              return (
                <div key={name} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">{name}</span>
                    <span className="font-mono font-bold text-purple-600 dark:text-purple-400">{pct}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {data.total} / {data.max} pts ({data.count} items)
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Question Review List with Filters */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-700 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Comprehensive Scenario Review ({reviewItems.length} Scenarios)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Full review of all 50 questions with official Accenture leadership rationales.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap text-xs">
              <select
                value={reviewFilter}
                onChange={(e) => setReviewFilter(e.target.value as 'All' | Competency)}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                <option value="All">All Competencies</option>
                <option value="Client Centricity">Client Centricity</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Agility & Growth">Agility & Growth</option>
                <option value="Integrity & Ownership">Integrity & Ownership</option>
              </select>

              <button
                onClick={() => setSortLowestFirst((prev) => !prev)}
                className={`px-3 py-1.5 rounded-lg border font-semibold transition-colors cursor-pointer ${
                  sortLowestFirst
                    ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                }`}
              >
                {sortLowestFirst ? 'Lowest Score First' : 'Default Order'}
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {reviewItems.map((q) => {
              const userScore = q.userScore;
              const hasAnswered = userScore !== undefined;
              const isGood = (userScore ?? 0) >= 3;

              return (
                <div
                  key={q.id}
                  className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 text-xs"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block text-sm">
                        Scenario {q.originalIndex + 1}: {q.scenario}
                      </span>
                      <span className="text-slate-500 text-[11px] mt-0.5 block">
                        Competency: {q.competency} {q.pair && '• Paired Item'}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded text-xs font-bold shrink-0 ${
                      !hasAnswered
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'
                        : isGood
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                        : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                    }`}>
                      {hasAnswered ? `${userScore}/4 Points` : 'Skipped'}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-100 dark:border-slate-700/60 leading-relaxed">
                    <strong className="text-purple-700 dark:text-purple-400">Accenture Rationale: </strong>
                    {q.rationale}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ACTIVE QUESTION SCREEN
  const currentAnswer = selectedAnswers[currentQ.id];

  return (
    <div className="space-y-6">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700/80 pb-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </button>

        <div className="flex items-center gap-3 text-xs">
          <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {formatTime(timeSpent)}
          </span>
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {answeredCount} / {totalQuestions} answered
          </span>
          <button
            onClick={checkFinish}
            className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold transition-colors cursor-pointer text-xs"
          >
            Review & Finish
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
          <span>Question {currentIndex + 1} of {totalQuestions}</span>
          <span>{Math.round(((currentIndex + 1) / totalQuestions) * 100)}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div
            className="h-full bg-purple-600 rounded-full transition-all duration-200"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Incomplete Warning Modal */}
      {showIncompleteWarning && (
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start justify-between gap-3 text-xs text-amber-900 dark:text-amber-200">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">You have {totalQuestions - answeredCount} unanswered scenarios.</p>
              <p className="mt-0.5 text-amber-800 dark:text-amber-300">
                In the real Accenture assessment, every item is evaluated for persona consistency. Are you sure you want to finalize now?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowIncompleteWarning(false)}
              className="px-3 py-1 rounded-md border border-amber-300 dark:border-amber-700 bg-white dark:bg-slate-800 font-semibold cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={finalizeAssessment}
              className="px-3 py-1 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-bold cursor-pointer"
            >
              Finish Anyway
            </button>
          </div>
        </div>
      )}

      {/* Main Scenario Card */}
      <div className="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            {currentQ.competency}
          </span>
          {currentQ.pair && (
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Consistency Assessment Item
            </span>
          )}
        </div>

        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
          {currentQ.scenario}
        </h2>

        {/* Options List (Seeded Shuffled so not best-first) */}
        <div className="space-y-2.5 pt-2">
          {displayedOptions.map((opt, oIdx) => {
            const isSelected = currentAnswer === opt.score;
            return (
              <button
                key={opt.id || oIdx}
                type="button"
                onClick={() => handleSelectOption(opt.score)}
                className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-purple-600 bg-purple-50/70 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 ring-1 ring-purple-600'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                }`}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setCurrentIndex((idx) => Math.max(0, idx - 1))}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition-colors"
        >
          Previous Scenario
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentIndex((idx) => Math.min(totalQuestions - 1, idx + 1))}
            disabled={currentIndex === totalQuestions - 1}
            className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Skip
          </button>

          <button
            onClick={handleNext}
            className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold cursor-pointer transition-colors shadow-xs"
          >
            {currentIndex === totalQuestions - 1 ? 'Finish Assessment' : 'Next Scenario'}
          </button>
        </div>
      </div>
    </div>
  );
};
