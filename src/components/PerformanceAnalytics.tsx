'use client';

import React, { useState } from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  Clock, 
  ArrowLeft,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { getExamAttempts, getMistakes } from '../lib/storage';
import { ExamAttemptRecord } from '../types';

interface PerformanceAnalyticsProps {
  onBack: () => void;
  onOpenMistakes: () => void;
}

export const PerformanceAnalytics: React.FC<PerformanceAnalyticsProps> = ({ onBack, onOpenMistakes }) => {
  const [allAttempts] = useState<ExamAttemptRecord[]>(() => {
    if (typeof window === 'undefined') return [];
    return getExamAttempts();
  });
  const [mistakeCount] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const mistakes = getMistakes();
    return Object.keys(mistakes).length;
  });

  // Filter cognitive/technical exam attempts so SJT doesn't distort benchmarks
  const examAttempts = allAttempts.filter((a) => a.kind !== 'sjt');
  const sjtAttempts = allAttempts.filter((a) => a.kind === 'sjt');

  const totalAttempts = examAttempts.length;
  const passedCount = examAttempts.filter((a) => a.isPassed).length;
  const avgScore = totalAttempts > 0 
    ? Math.round(examAttempts.reduce((acc, a) => acc + a.percent, 0) / totalAttempts) 
    : 0;

  // Aggregate sectional mastery strictly from exam attempts
  const sectionAggregates: Record<string, { correct: number; total: number }> = {};
  examAttempts.forEach((att) => {
    Object.entries(att.sectionScores || {}).forEach(([sec, data]) => {
      if (!sectionAggregates[sec]) {
        sectionAggregates[sec] = { correct: 0, total: 0 };
      }
      sectionAggregates[sec].correct += data.correct;
      sectionAggregates[sec].total += data.total;
    });
  });

  // Calculate Accenture Readiness Score (0 to 100) based on actual cognitive/technical tests
  const readinessScore = Math.min(
    100,
    Math.round(
      (avgScore * 0.6) + 
      (Math.min(totalAttempts, 5) * 6) + 
      (mistakeCount === 0 && totalAttempts > 0 ? 10 : Math.max(0, 10 - mistakeCount * 2))
    )
  );

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
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
          Personal Telemetry & Intelligence
        </span>
      </div>

      {/* Main Readiness Gauge */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-purple-500/30 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
            <TrendingUp className="w-3.5 h-3.5" /> Predicted On-Campus Selection Probability
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Accenture Readiness Index: {readinessScore}%
          </h2>
          <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
            Calculated from your historical exam simulations, sectional cutoff clearances, and active error notebook backlog.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-950/80 border border-purple-900/40 min-w-[200px] text-center space-y-1">
          <span className="text-4xl font-black text-purple-400">{readinessScore}/100</span>
          <p className="text-xs font-semibold text-slate-400">
            {readinessScore >= 75 ? '🔥 High Probability Selection' : '⚠️ Continue Section Drills'}
          </p>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-xs text-slate-500 font-medium block">Simulations Taken</span>
          <span className="text-3xl font-bold text-white mt-1 block">{totalAttempts}</span>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-xs text-slate-500 font-medium block">Cutoffs Cleared</span>
          <span className="text-3xl font-bold text-emerald-400 mt-1 block">{passedCount}</span>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-xs text-slate-500 font-medium block">Average Accuracy</span>
          <span className="text-3xl font-bold text-purple-400 mt-1 block">{avgScore}%</span>
        </div>
        <div 
          onClick={onOpenMistakes}
          className="p-5 rounded-2xl bg-slate-900/60 border border-rose-500/30 cursor-pointer hover:bg-slate-900 transition-all group"
        >
          <span className="text-xs text-rose-400 font-semibold flex items-center justify-between">
            Mistake Vault <AlertTriangle className="w-3.5 h-3.5" />
          </span>
          <span className="text-3xl font-bold text-rose-300 mt-1 block group-hover:scale-105 transition-transform">
            {mistakeCount} Pending
          </span>
        </div>
      </div>

      {/* Aggregate Section Strength */}
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-purple-400" /> Topic Mastery & Weakness Detection
        </h3>

        {Object.keys(sectionAggregates).length === 0 ? (
          <p className="text-slate-500 text-xs py-4 text-center">
            Complete your first mock test or sectional drill to see topic mastery statistics.
          </p>
        ) : (
          <div className="space-y-4">
            {Object.entries(sectionAggregates).map(([section, data]) => {
              const pct = Math.round((data.correct / data.total) * 100);
              return (
                <div key={section} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">{section}</span>
                    <span className={pct >= 65 ? 'text-emerald-400' : 'text-amber-400'}>
                      {data.correct}/{data.total} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        pct >= 65
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                          : 'bg-gradient-to-r from-amber-500 to-rose-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Historical Attempts Log */}
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-400" /> Recent Exam History Log
        </h3>

        {allAttempts.length === 0 ? (
          <p className="text-slate-500 text-xs py-4 text-center">
            No mock tests recorded yet. Launch a full 90-minute simulation to start tracking.
          </p>
        ) : (
          <div className="divide-y divide-slate-800/80">
            {allAttempts.map((att) => {
              const dateStr = new Date(att.timestamp).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });
              const mins = Math.floor(att.timeSpentSeconds / 60);

              return (
                <div key={att.id} className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      {att.title}
                      {att.kind === 'sjt' ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Behavioral SJT
                        </span>
                      ) : (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          att.isPassed 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}>
                          {att.isPassed ? 'Cutoff Cleared' : 'Cutoff Missed'}
                        </span>
                      )}
                    </h4>
                    <span className="text-[11px] text-slate-500 mt-0.5 block flex items-center gap-2">
                      <Calendar className="w-3 h-3" /> {dateStr} • Duration: {mins} mins
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-black text-purple-300">{att.percent}%</span>
                    <span className="text-[11px] text-slate-500 block">
                      {att.score}/{att.totalQuestions} Correct
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
