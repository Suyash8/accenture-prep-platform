'use client';

import React, { useState } from 'react';
import { 
  Sliders, 
  ArrowLeft, 
  Play, 
  Sparkles, 
  Clock, 
  FileQuestion, 
  CheckCircle2, 
  Target,
  Zap
} from 'lucide-react';
import { ACCENTURE_QUESTIONS } from '../data/questions';
import { Question } from '../types';

interface CustomMockGeneratorProps {
  onBack: () => void;
  onLaunchMock: (questions: Question[], title: string, durationMinutes: number) => void;
}

export const CustomMockGenerator: React.FC<CustomMockGeneratorProps> = ({ onBack, onLaunchMock }) => {
  const [questionCount, setQuestionCount] = useState<number>(30);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');
  const [selectedSections, setSelectedSections] = useState<string[]>([
    'pseudocode',
    'ms_office',
    'networking_cloud',
    'critical',
    'abstract',
    'english',
  ]);
  const [targetCutoff, setTargetCutoff] = useState<number>(65);

  const toggleSection = (sId: string) => {
    setSelectedSections((prev) =>
      prev.includes(sId) ? prev.filter((id) => id !== sId) : [...prev, sId]
    );
  };

  const handleGenerateAndStart = () => {
    let pool = ACCENTURE_QUESTIONS.filter((q) => selectedSections.includes(q.sectionId));
    if (selectedDifficulty !== 'All') {
      pool = pool.filter((q) => q.difficulty === selectedDifficulty);
    }
    // If pool is small, take whatever is available or shuffle
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const finalSet = shuffled.slice(0, questionCount);

    const questionsToUse = finalSet.length > 0 ? finalSet : ACCENTURE_QUESTIONS.slice(0, questionCount);
    const durationMinutes = Math.max(10, Math.round(questionsToUse.length * 1.0)); // 1 min per Q

    onLaunchMock(
      questionsToUse,
      `Custom Adaptive Mock (${questionsToUse.length} Qs • ${targetCutoff}% Target)`,
      durationMinutes
    );
  };

  const availableSections = [
    { id: 'pseudocode', name: 'Pseudocode Execution', color: 'text-purple-400' },
    { id: 'ms_office', name: 'Common Apps & MS Office', color: 'text-emerald-400' },
    { id: 'networking_cloud', name: 'Networking & Cloud', color: 'text-blue-400' },
    { id: 'critical', name: 'Critical Reasoning', color: 'text-amber-400' },
    { id: 'abstract', name: 'Abstract Reasoning', color: 'text-pink-400' },
    { id: 'english', name: 'English Ability', color: 'text-indigo-400' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 text-slate-100 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
        </button>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          Personal Adaptive Exam Configurator
        </span>
      </div>

      {/* Main Settings Card */}
      <div className="p-8 rounded-3xl bg-[#0d1017] border border-white/10 space-y-8">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Sliders className="w-6 h-6 text-purple-400" />
            Configure Custom Adaptive Mock Test
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Build tailored drill sessions to target weak sections, test specific difficulty bands, and practice time discipline.
          </p>
        </div>

        {/* Question Count Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-300">Question Volume</span>
            <span className="text-purple-400 text-sm font-mono">{questionCount} Questions ({questionCount} mins)</span>
          </div>
          <input
            type="range"
            min={10}
            max={60}
            step={5}
            value={questionCount}
            onChange={(e) => setQuestionCount(Number(e.target.value))}
            className="w-full accent-purple-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>10 Qs (Rapid Sprint)</span>
            <span>30 Qs (Half Mock)</span>
            <span>60 Qs (Standard Drill)</span>
          </div>
        </div>

        {/* Difficulty Filter */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-300 block">Difficulty Filter</span>
          <div className="grid grid-cols-4 gap-2">
            {(['All', 'Easy', 'Medium', 'Hard'] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                  selectedDifficulty === diff
                    ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                    : 'bg-black/40 border-white/10 text-slate-400 hover:bg-white/5'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Section Checklist */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-300 block">Include Specific Sections</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {availableSections.map((sec) => {
              const active = selectedSections.includes(sec.id);
              return (
                <div
                  key={sec.id}
                  onClick={() => toggleSection(sec.id)}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    active
                      ? 'bg-white/10 border-purple-500/50 text-white shadow-xs'
                      : 'bg-black/30 border-white/5 text-slate-500 hover:bg-white/5'
                  }`}
                >
                  <span className={`text-xs font-bold ${active ? sec.color : 'text-slate-400'}`}>
                    {sec.name}
                  </span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                    active ? 'bg-purple-600 border-purple-500 text-white' : 'border-slate-700'
                  }`}>
                    {active && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Target Cutoff */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-300">Target Passing Benchmark</span>
            <span className="text-emerald-400 text-sm font-mono">{targetCutoff}% Cutoff</span>
          </div>
          <input
            type="range"
            min={50}
            max={85}
            step={5}
            value={targetCutoff}
            onChange={(e) => setTargetCutoff(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        {/* Start Button */}
        <button
          onClick={handleGenerateAndStart}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
        >
          <Play className="w-4 h-4 fill-current" /> Launch Tailored Mock Test Now
        </button>
      </div>
    </div>
  );
};
