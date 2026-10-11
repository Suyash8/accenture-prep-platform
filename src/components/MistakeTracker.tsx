'use client';

import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  RotateCcw, 
  CheckCircle2, 
  Trash2, 
  ChevronRight, 
  BookOpen, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { getMistakes, resolveMistake } from '../lib/storage';
import { ACCENTURE_QUESTIONS } from '../data/questions';
import { Question } from '../types';

interface MistakeTrackerProps {
  onBack: () => void;
  onPracticeMistakes: (questions: Question[]) => void;
}

export const MistakeTracker: React.FC<MistakeTrackerProps> = ({ onBack, onPracticeMistakes }) => {
  const [mistakesMap, setMistakesMap] = useState<Record<string, { attemptsCount: number; timestamp: number }>>({});

  useEffect(() => {
    setMistakesMap(getMistakes());
  }, []);

  const failedQuestionIds = Object.keys(mistakesMap);
  const failedQuestions = ACCENTURE_QUESTIONS.filter((q) => failedQuestionIds.includes(q.id));

  const handleResolve = (qId: string) => {
    resolveMistake(qId);
    setMistakesMap(getMistakes());
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-6 text-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
        </button>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
          Smart Remediation Engine
        </span>
      </div>

      <div className="p-8 rounded-3xl bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950 border border-rose-500/30 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-black text-white flex items-center gap-2">
            <AlertTriangle className="w-8 h-8 text-rose-400" /> Error Notebook & Mistake Vault
          </h2>
          <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
            Every question you miss during tests is logged here automatically. Master these exact concepts to guarantee you don't repeat mistakes during the actual Accenture drive.
          </p>
        </div>

        {failedQuestions.length > 0 && (
          <button
            onClick={() => onPracticeMistakes(failedQuestions)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition-all shrink-0"
          >
            <RotateCcw className="w-4 h-4" /> Re-test {failedQuestions.length} Missed Questions
          </button>
        )}
      </div>

      {failedQuestions.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h3 className="text-xl font-bold text-white">Your Error Notebook is Clean!</h3>
          <p className="text-slate-400 text-xs max-w-md mx-auto">
            Take a full-length mock or section test. Any questions you get wrong will be captured here with targeted solutions and trace tables.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Logged Deficiencies ({failedQuestions.length})
            </h3>
          </div>

          {failedQuestions.map((q) => {
            const mistakeInfo = mistakesMap[q.id];
            return (
              <div
                key={q.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {q.sectionTitle}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {q.tag}
                    </span>
                    {mistakeInfo && (
                      <span className="text-[11px] text-rose-400 font-medium">
                        Failed {mistakeInfo.attemptsCount} time{mistakeInfo.attemptsCount > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleResolve(q.id)}
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-emerald-400 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Mark Resolved
                  </button>
                </div>

                <h4 className="text-base font-semibold text-white whitespace-pre-line">
                  {q.title}
                </h4>

                {q.codeSnippet && (
                  <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-purple-200 overflow-x-auto">
                    {q.codeSnippet}
                  </pre>
                )}

                <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-900/40 text-xs text-slate-300 space-y-1.5">
                  <span className="font-bold text-purple-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Correct Answer: Option {String.fromCharCode(65 + q.correctIndex)} ({q.options[q.correctIndex]})
                  </span>
                  <p className="text-slate-400 whitespace-pre-line leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
