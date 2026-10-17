'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CommunicationGuideSimulator } from '@/components/CommunicationGuideSimulator';

export default function CommunicationPage() {
  const router = useRouter();

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div className="space-y-1">
        <Link href="/" className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Communication Assessment Practice
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Prepare for Stage 5: Read aloud, repeat sentences, conversational questions, and short story retellings.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-xs">
        <CommunicationGuideSimulator onBack={() => router.push('/')} />
      </div>
    </main>
  );
}
