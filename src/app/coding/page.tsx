'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ACCENTURE_CODING_PROBLEMS } from '@/data/coding';
import { CodingRunner } from '@/components/CodingRunner';
import { Code, ArrowLeft } from 'lucide-react';

export default function CodingPage() {
  const [selectedProblemIndex, setSelectedProblemIndex] = useState<number | null>(null);

  if (selectedProblemIndex !== null) {
    const problem = ACCENTURE_CODING_PROBLEMS[selectedProblemIndex];
    return (
      <div className="w-full flex-1 flex flex-col bg-slate-900 text-slate-100">
        <div className="border-b border-slate-800 px-4 py-2.5 flex items-center justify-between bg-slate-950">
          <button
            onClick={() => setSelectedProblemIndex(null)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 border border-slate-700 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Problem List
          </button>
          <span className="text-xs font-bold text-white">
            {problem.title} • {problem.difficulty}
          </span>
        </div>
        <div className="flex-1">
          <CodingRunner
            problem={problem}
            onBack={() => setSelectedProblemIndex(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div className="space-y-1">
        <Link href="/" className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Coding Assessment Problems
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Accenture Stage 4 provides 2 problems to complete in 45 minutes. Select any problem below to solve with the live test runner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ACCENTURE_CODING_PROBLEMS.map((prob, idx) => (
          <div
            key={prob.id}
            onClick={() => setSelectedProblemIndex(idx)}
            className="p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-400">
                  Problem {idx + 1}
                </span>
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    prob.difficulty === 'Easy'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : prob.difficulty === 'Medium'
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                  }`}
                >
                  {prob.difficulty}
                </span>
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {prob.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {prob.description}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">
                {prob.testCases?.length || 2} Test Cases
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Open Editor →
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
