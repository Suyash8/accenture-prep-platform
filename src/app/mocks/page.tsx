'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ACCENTURE_CURRICULUM } from '@/data/curriculum';
import { ACCENTURE_QUESTIONS } from '@/data/questions';
import { ProfessionalTestPlayer } from '@/components/ProfessionalTestPlayer';
import { 
  generateFullMock, 
  generateTechnicalEliminationMock, 
  generateSectionalDrill, 
  sampleQuestions 
} from '@/lib/mockGenerator';
import { Question } from '@/types';
import { Play, Clock } from 'lucide-react';

export default function MocksPage() {
  const [activeTest, setActiveTest] = useState<{
    title: string;
    questions: Question[];
    durationMinutes: number;
    sections?: { id: string; title: string; count: number; minutes: number }[];
  } | null>(null);

  const mockFolder = ACCENTURE_CURRICULUM.find((f) => f.id === 'full-mocks');

  const DRILL_SECTION_MAP: Record<string, { sectionId: string; count: number; minutes: number }> = {
    'sec-pseudo': { sectionId: 'pseudocode', count: 20, minutes: 25 },
    'sec-net': { sectionId: 'networking_cloud', count: 15, minutes: 20 },
    'sec-english': { sectionId: 'english', count: 15, minutes: 20 },
    'sec-quant': { sectionId: 'quantitative', count: 20, minutes: 25 },
    'sec-critical': { sectionId: 'critical', count: 20, minutes: 20 },
    'sec-abstract': { sectionId: 'abstract', count: 15, minutes: 15 },
    'sec-core': { sectionId: 'core_cs_dsa', count: 15, minutes: 15 },
    'sec-office': { sectionId: 'ms_office', count: 15, minutes: 15 },
  };

  const startTest = (id: string, title: string, duration?: number) => {
    let testData;
    if (DRILL_SECTION_MAP[id]) {
      const cfg = DRILL_SECTION_MAP[id];
      testData = generateSectionalDrill(cfg.sectionId, cfg.count, title, duration || cfg.minutes, `${id}-${Date.now()}`);
    } else if (id === 'mock-1') {
      testData = generateFullMock(title, 'accenture-national-mock-1');
    } else if (id === 'mock-2') {
      testData = generateFullMock(title, 'accenture-national-mock-2');
    } else if (id === 'mock-pyq-2025') {
      testData = generateFullMock(title, 'accenture-pyq-2025-slot');
    } else if (id === 'mock-technical-elimination') {
      testData = generateTechnicalEliminationMock(title, 'accenture-tech-elimination-seed');
    } else {
      testData = generateFullMock(title, `${id}-${Date.now()}`);
    }

    const sections = 'mock' in testData && testData.mock && typeof testData.mock === 'object' && 'sections' in testData.mock
      ? (testData.mock as { sections: { id: string; title: string; count: number; minutes: number }[] }).sections
      : undefined;

    setActiveTest({
      title: testData.title,
      questions: testData.questions,
      durationMinutes: testData.durationMinutes,
      sections,
    });
  };

  if (activeTest) {
    return (
      <ProfessionalTestPlayer
        questions={activeTest.questions}
        testTitle={activeTest.title}
        durationMinutes={activeTest.durationMinutes}
        sections={activeTest.sections}
        onExit={() => setActiveTest(null)}
      />
    );
  }

  return (
    <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div className="space-y-1">
        <Link href="/" className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
          ← Back to Overview
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Practice Tests & Mocks
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Timed full-length mock exams and sectional drills matching the official Accenture exam timing and negative-marking rules.
        </p>
      </div>

      {/* Full Mocks */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Full-Length Mock Tests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(mockFolder?.items || []).map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800">
                    Full Mock
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" /> {item.durationMinutes} mins
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.questionCount || 90} Questions • Cognitive + Technical combined
                </p>
              </div>

              <button
                onClick={() => startTest(item.id, item.title, item.durationMinutes)}
                className="w-full py-2.5 rounded-lg bg-slate-900 dark:bg-purple-600 hover:bg-slate-800 dark:hover:bg-purple-700 text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Start Test
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sectional Drills */}
      <div className="space-y-4 pt-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Sectional Practice Drills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: 'sec-pseudo', title: 'Pseudocode 20-Question Drill', count: 20, time: 25 },
            { id: 'sec-net', title: 'Networking & Cloud Security Drill', count: 15, time: 20 },
            { id: 'sec-english', title: 'English Ability & Comprehension', count: 15, time: 20 },
          ].map((drill) => (
            <div
              key={drill.id}
              className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-3"
            >
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{drill.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {drill.count} Qs • {drill.time} mins
                </p>
              </div>
              <button
                onClick={() => startTest(drill.id, drill.title, drill.time)}
                className="py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold cursor-pointer transition-colors"
              >
                Start Drill →
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
