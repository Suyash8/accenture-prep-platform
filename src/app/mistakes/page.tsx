'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MistakeTracker } from '@/components/MistakeTracker';
import { ProfessionalTestPlayer } from '@/components/ProfessionalTestPlayer';
import { Question } from '@/types';

export default function MistakesPage() {
  const [retestQuestions, setRetestQuestions] = useState<Question[] | null>(null);

  if (retestQuestions) {
    return (
      <ProfessionalTestPlayer
        questions={retestQuestions}
        testTitle="Error Notebook Targeted Re-test"
        durationMinutes={Math.max(10, retestQuestions.length * 2)}
        onExit={() => setRetestQuestions(null)}
      />
    );
  }

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div className="space-y-1">
        <Link href="/" className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Error Notebook
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Review questions you missed during practice tests and practice targeted drills to reinforce weak topics.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-xs">
        <MistakeTracker
          onBack={() => {}}
          onPracticeMistakes={(qs) => setRetestQuestions(qs)}
        />
      </div>
    </main>
  );
}
