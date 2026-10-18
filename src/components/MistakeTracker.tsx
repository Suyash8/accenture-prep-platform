'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  AlertTriangle, 
  RotateCcw, 
  CheckCircle2, 
  BookOpen, 
  ArrowLeft,
  Sparkles,
  HelpCircle,
  Play,
  Filter,
  Check,
  Undo2
} from 'lucide-react';
import { 
  getMistakeRecords, 
  resolveMistakeManually, 
  unresolveMistake, 
  pruneMistakes 
} from '../lib/storage';
import { ACCENTURE_QUESTIONS } from '../data/questions';
import { Question, MistakeRecord } from '../types';

interface MistakeTrackerProps {
  onBack: () => void;
  onPracticeMistakes: (questions: Question[]) => void;
}

export const MistakeTracker: React.FC<MistakeTrackerProps> = ({ onBack, onPracticeMistakes }) => {
  const [mistakesMap, setMistakesMap] = useState<Record<string, MistakeRecord>>(() => {
    if (typeof window === 'undefined') return {};
    const validIds = new Set(ACCENTURE_QUESTIONS.map((q) => q.id));
    pruneMistakes(validIds);
    return getMistakeRecords();
  });
  const [activeTab, setActiveTab] = useState<'unresolved' | 'resolved' | 'all'>('unresolved');
  const [selectedSection, setSelectedSection] = useState<string>('all');

  const validQuestionMap = useMemo(() => {
    return new Map(ACCENTURE_QUESTIONS.map((q) => [q.id, q]));
  }, []);

  const refreshMistakes = () => {
    // Prune invalid IDs
    const validIds = new Set(ACCENTURE_QUESTIONS.map((q) => q.id));
    pruneMistakes(validIds);
    setMistakesMap(getMistakeRecords());
  };

  const handleToggleResolve = (qId: string, currentResolved: boolean) => {
    if (currentResolved) {
      unresolveMistake(qId);
    } else {
      resolveMistakeManually(qId);
    }
    refreshMistakes();
  };

  // Group and filter records
  const allRecords = Object.values(mistakesMap);
  const unresolvedRecords = allRecords.filter((m) => !m.resolved);
  const resolvedRecords = allRecords.filter((m) => m.resolved);

  // Available sections present in current mistakes
  const availableSections = useMemo(() => {
    const sections = new Set<string>();
    for (const m of allRecords) {
      const q = validQuestionMap.get(m.qId);
      if (q) sections.add(q.sectionId);
    }
    return Array.from(sections);
  }, [allRecords, validQuestionMap]);

  // Filter based on activeTab and selectedSection
  const displayedQuestions = useMemo(() => {
    let targetRecords =
      activeTab === 'unresolved'
        ? unresolvedRecords
        : activeTab === 'resolved'
        ? resolvedRecords
        : allRecords;

    if (selectedSection !== 'all') {
      targetRecords = targetRecords.filter((m) => {
        const q = validQuestionMap.get(m.qId);
        return q && q.sectionId === selectedSection;
      });
    }

    return targetRecords
      .map((m) => ({
        question: validQuestionMap.get(m.qId)!,
        record: m,
      }))
      .filter((item) => Boolean(item.question));
  }, [activeTab, selectedSection, unresolvedRecords, resolvedRecords, allRecords, validQuestionMap]);

  const questionsForReTest = useMemo(() => {
    return displayedQuestions.map((item) => item.question);
  }, [displayedQuestions]);

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Targeted Mistake Drill
          </span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
            Error Notebook & Re-test
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl leading-relaxed">
            Missed questions from full mocks and practice tests are saved here. Questions are automatically marked resolved after answering correctly twice in a row.
          </p>
        </div>

        {questionsForReTest.length > 0 && (
          <button
            onClick={() => onPracticeMistakes(questionsForReTest)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs cursor-pointer transition-colors shrink-0 shadow-xs"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Start Re-test ({questionsForReTest.length})
          </button>
        )}
      </div>

      {/* Tabs and Filters Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-700 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('unresolved')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'unresolved'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            Active Mistakes ({unresolvedRecords.length})
          </button>
          <button
            onClick={() => setActiveTab('resolved')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'resolved'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            Mastered ({resolvedRecords.length})
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'all'
                ? 'bg-slate-800 dark:bg-slate-700 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            All Logged ({allRecords.length})
          </button>
        </div>

        {availableSections.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 text-[11px] font-medium">Section:</span>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium"
            >
              <option value="all">All Sections ({allRecords.length})</option>
              {availableSections.map((secId) => (
                <option key={secId} value={secId}>
                  {secId}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Empty State */}
      {displayedQuestions.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            {activeTab === 'unresolved' ? 'Your Error Notebook is Clean' : 'No Questions Found'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            {activeTab === 'unresolved'
              ? 'Great job! You have mastered all logged questions or have no pending mistakes.'
              : 'Try selecting a different tab or taking a practice test from the Tests page.'}
          </p>
        </div>
      ) : (
        /* Questions List */
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span>{displayedQuestions.length} Questions Displayed</span>
            <span className="text-[11px] text-slate-400">Streak of 2 correct resolves automatically</span>
          </div>

          <div className="space-y-3">
            {displayedQuestions.map(({ question: q, record }) => {
              const isResolved = record.resolved;
              const streak = record.streakCorrect || 0;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-xl bg-white dark:bg-slate-800/80 border transition-all space-y-3 ${
                    isResolved
                      ? 'border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/10'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                          {q.sectionTitle}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {q.tag}
                        </span>
                        {isResolved ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            <CheckCircle2 className="w-3 h-3" /> Mastered
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                            Streak: {streak}/2 Correct
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400">
                          Total Misses: {record.misses}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-1">
                        {q.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => handleToggleResolve(q.id, isResolved)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors shrink-0 ${
                        isResolved
                          ? 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
                          : 'border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100'
                      }`}
                    >
                      {isResolved ? (
                        <>
                          <Undo2 className="w-3 h-3" /> Re-open
                        </>
                      ) : (
                        <>
                          <Check className="w-3 h-3" /> Mark Resolved
                        </>
                      )}
                    </button>
                  </div>

                  {q.codeSnippet && (
                    <div className="p-3.5 bg-slate-900 dark:bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre overflow-x-auto shadow-inner">
                      {q.codeSnippet}
                    </div>
                  )}

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, oIdx) => {
                      const isCorrect = oIdx === q.correctIndex;
                      return (
                        <div
                          key={oIdx}
                          className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                            isCorrect
                              ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 font-medium'
                              : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <span className="font-bold text-[10px] w-4 text-center">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="line-clamp-2">{opt}</span>
                          {isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 ml-auto shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    <strong className="text-slate-900 dark:text-white block">Step-by-Step Solution:</strong>
                    <p className="whitespace-pre-line leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
