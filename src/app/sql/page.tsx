'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SqlPracticeRunner } from '@/components/SqlPracticeRunner';

export default function SqlPage() {
  const router = useRouter();

  return (
    <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
      <div className="mb-4">
        <Link 
          href="/" 
          className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
        >
          ← Back to Dashboard
        </Link>
      </div>

      <SqlPracticeRunner onBack={() => router.push('/')} />
    </main>
  );
}
