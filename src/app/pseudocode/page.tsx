'use client';

import React from 'react';
import Link from 'next/link';
import { PseudocodeTracer } from '@/components/PseudocodeTracer';

export default function PseudocodePage() {
  return (
    <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div className="space-y-1">
        <Link href="/" className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Pseudocode Execution Tracer
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Trace variables line-by-line through bitwise operations, conditional logic, and nested loops matching Accenture Stage 3 questions.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-xs">
        <PseudocodeTracer />
      </div>
    </main>
  );
}
