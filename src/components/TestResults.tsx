'use client';

import React, { useEffect, useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  BookOpen,
  Zap,
  Check,
  ChevronRight,
  Bookmark
} from 'lucide-react';
import { Question } from '../types';
import { saveMistake, resolveMistake, saveExamAttempt, toggleBookmark, getBookmarks } from '../lib/storage';

interface TestResultsProps {
  questions: Question[];
  selectedAnswers: Record<string, number>;
  timeSpentSeconds: number;
  testTitle?: string;
  onRetake: () => void;
  onGoHome: () => void;
}

export const TestResults: React.FC<TestResultsProps> = ({
  questions,
  selectedAnswers,
  timeSpentSeconds,
  testTitle = 'Accenture Assessment',
  onRetake,
  onGoHome,
}) => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;
  let cognitiveCorrect = 0;
  let cognitiveTotal = 0;
  let technicalCorrect = 0;
  let technicalTotal = 0;

  const sectionPerformance: Record<string, { total: number; correct: number }> = {};

  questions.forEach((q) => {
    if (!sectionPerformance[q.sectionTitle]) {
      sectionPerformance[q.sectionTitle] = { total: 0, correct: 0 };
    }
    sectionPerformance[q.sectionTitle].total += 1;

    if (q.category === 'Cognitive') cognitiveTotal += 1;
    if (q.category === 'Technical') technicalTotal += 1;

    const chosen = selectedAnswers[q.id];
    if (chosen === undefined) {
      unattemptedCount += 1;
    } else if (chosen === q.correctIndex) {
      correctCount += 1;
      sectionPerformance[q.sectionTitle].correct += 1;
      if (q.category === 'Cognitive') cognitiveCorrect += 1;
      if (q.category === 'Technical') technicalCorrect += 1;
      // Mark as resolved if previously in mistake tracker
      resolveMistake(q.id);
    } else {
      wrongCount += 1;
      // Automatically log into user mistake vault
      saveMistake(q.id, chosen);
    }
  });

  const totalQuestions = questions.length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);
  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  
  // Cutoffs: Accenture requires >=60% in Cognitive AND Technical
  const cogPass = cognitiveTotal === 0 || (cognitiveCorrect / cognitiveTotal) >= 0.6;
  const techPass = technicalTotal === 0 || (technicalCorrect / technicalTotal) >= 0.6;
  const isPass = cogPass && techPass && scorePercent >= 65;

  // Save attempt to historical records
  useEffect(() => {
    saveExamAttempt({
      id: `attempt-${Date.now()}`,
      timestamp: Date.now(),
      title: testTitle,
      totalQuestions,
      score: correctCount,
      percent: scorePercent,
      timeSpentSeconds,
      isPassed: isPass,
      cognitiveScore: cognitiveCorrect,
      technicalScore: technicalCorrect,
      sectionScores: sectionPerformance,
    });
  }, []);

  const handleToggleBookmark = (qId: string) => {
    toggleBookmark(qId);
    setBookmarks(getBookmarks());
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6">
      {/* Banner */}
      <div className={`p-8 rounded-3xl border ${isPass ? 'bg-gradient-to-br from-emerald-950/60 to-slate-900 border-emerald-500/30' : 'bg-gradient-to-br from-rose-950/60 to-slate-900 border-rose-500/30'} backdrop-blur-xl relative overflow-hidden`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/90">
              <Award className="w-3.5 h-3.5" /> Accenture 2026 Evaluation Matrix
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              {isPass ? '🎉 Cleared Accenture Cutoffs!' : '⚠️ Cutoff Threshold Not Met'}
            </h1>
            <p className="text-slate-300 text-sm max-w-lg">
              {isPass 
                ? 'Both Cognitive & Technical sectional cutoffs cleared. You would be automatically routed to Round 2 (Coding) in the live drive.'
                : 'Accenture imposes individual cutoffs on Cognitive and Technical sections. Failed questions have been automatically logged into your Error Notebook.'}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-slate-900/80 rounded-2xl border border-white/10 min-w-[160px] text-center shadow-2xl">
            <span className="text-5xl font-black text-white">{scorePercent}%</span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">Accuracy Score</span>
            <span className="text-xs text-purple-400 font-medium mt-2">{correctCount} of {totalQuestions} Correct</span>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-1">
            <CheckCircle2 className="w-4 h-4" /> Correct
          </div>
          <p className="text-2xl font-bold text-white">{correctCount}</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold mb-1">
            <XCircle className="w-4 h-4" /> Incorrect (Logged)
          </div>
          <p className="text-2xl font-bold text-white">{wrongCount}</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-1">
            <BookOpen className="w-4 h-4" /> Unanswered
          </div>
          <p className="text-2xl font-bold text-white">{unattemptedCount}</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold mb-1">
            <Clock className="w-4 h-4" /> Time Spent
          </div>
          <p className="text-2xl font-bold text-white">{minutes}m {seconds}s</p>
        </div>
      </div>

      {/* Section Performance Bar */}
      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-purple-400" /> Section-wise Strength & Cutoff Radar
        </h3>
        <div className="space-y-4">
          {Object.entries(sectionPerformance).map(([section, data]) => {
            const pct = Math.round((data.correct / data.total) * 100);
            return (
              <div key={section} className="space-y-1.5">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-200">{section}</span>
                  <span className={pct >= 60 ? 'text-emerald-400' : 'text-amber-400'}>
                    {data.correct}/{data.total} ({pct}%) • {pct >= 60 ? 'Cutoff Cleared' : 'Needs Work'}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${pct >= 60 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-amber-500 to-rose-500'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-between items-center pt-2">
        <button
          onClick={onRetake}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg shadow-purple-600/30"
        >
          <RotateCcw className="w-4 h-4" /> Retake Test
        </button>
        <button
          onClick={onGoHome}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-all border border-slate-700"
        >
          Return to Dashboard <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Solutions */}
      <div className="space-y-6 pt-6 border-t border-slate-800">
        <h3 className="text-2xl font-black text-white">Comprehensive Question Solutions & Traces</h3>
        {questions.map((q, idx) => {
          const userChoice = selectedAnswers[q.id];
          const isCorrect = userChoice === q.correctIndex;
          const isSkipped = userChoice === undefined;
          const isBookmarked = bookmarks.includes(q.id);

          return (
            <div 
              key={q.id}
              className={`p-6 rounded-2xl border transition-all ${
                isCorrect 
                  ? 'bg-slate-900/40 border-emerald-500/30' 
                  : isSkipped 
                  ? 'bg-slate-900/40 border-slate-800' 
                  : 'bg-slate-900/40 border-rose-500/30'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                  Question {idx + 1} • {q.sectionTitle} {q.slotYear ? `(${q.slotYear})` : ''}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleBookmark(q.id)}
                    className={`p-1.5 rounded-lg border text-xs transition-colors ${
                      isBookmarked
                        ? 'bg-purple-600 text-white border-purple-500'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                    title="Bookmark Question"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1.5 ${
                    isCorrect 
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800' 
                      : isSkipped 
                      ? 'bg-slate-800 text-slate-400' 
                      : 'bg-rose-950/80 text-rose-400 border border-rose-800'
                  }`}>
                    {isCorrect && <Check className="w-3.5 h-3.5" />}
                    {isCorrect ? 'Correct' : isSkipped ? 'Unanswered' : 'Incorrect'}
                  </span>
                </div>
              </div>

              <h4 className="text-base font-semibold text-white whitespace-pre-line mb-3">
                {q.title}
              </h4>

              {q.codeSnippet && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-sm text-purple-200 mb-4 whitespace-pre overflow-x-auto">
                  {q.codeSnippet}
                </div>
              )}

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {q.options.map((opt, optIdx) => {
                  const isUserSelection = userChoice === optIdx;
                  const isCorrectOption = optIdx === q.correctIndex;

                  let borderClass = 'border-slate-800/80 bg-slate-900/30 text-slate-300';
                  if (isCorrectOption) {
                    borderClass = 'border-emerald-500/60 bg-emerald-950/30 text-emerald-200 font-semibold';
                  } else if (isUserSelection && !isCorrectOption) {
                    borderClass = 'border-rose-500/60 bg-rose-950/30 text-rose-300 font-semibold';
                  }

                  return (
                    <div 
                      key={optIdx} 
                      className={`p-3 rounded-xl border text-sm flex items-start gap-2.5 ${borderClass}`}
                    >
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 bg-slate-800 text-slate-300">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {isCorrectOption && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                      {isUserSelection && !isCorrectOption && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/30 text-slate-200 text-sm space-y-2">
                <p className="font-bold text-purple-300 flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4" /> Explanation:
                </p>
                <div className="whitespace-pre-line text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {q.explanation}
                </div>
              </div>

              {/* Variable Trace Matrix */}
              {q.traceSteps && q.traceSteps.length > 0 && (
                <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-indigo-900/40">
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                    Variable State Trace Table:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono text-slate-300">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-500">
                          <th className="pb-2">Step</th>
                          <th className="pb-2">Execution Logic</th>
                          <th className="pb-2">Variables in Scope</th>
                        </tr>
                      </thead>
                      <tbody>
                        {q.traceSteps.map((st) => (
                          <tr key={st.step} className="border-b border-slate-900/50">
                            <td className="py-2 text-purple-400 font-bold">{st.step}</td>
                            <td className="py-2 text-slate-300">{st.description}</td>
                            <td className="py-2 text-emerald-400">
                              {JSON.stringify(st.variables).replace(/[{}"]/g, '')}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
