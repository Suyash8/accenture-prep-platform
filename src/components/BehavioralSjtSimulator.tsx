'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  ArrowLeft, 
  Award, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Zap, 
  Target, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ACCENTURE_SJT_QUESTIONS, SjtQuestion } from '../data/sjtQuestions';

export const BehavioralSjtSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = ACCENTURE_SJT_QUESTIONS[currentIndex];

  const handleSelectOption = (score: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: score,
    }));
  };

  const handleNext = () => {
    if (currentIndex < ACCENTURE_SJT_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
  };

  // Metrics computation
  const totalQuestions = ACCENTURE_SJT_QUESTIONS.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  // Calculate consistency score
  // Check pairs: if answer A has high score and pair B also has high score (because options are scored positively for good behavior),
  // they are consistent.
  let consistencyMatches = 0;
  let totalPairs = 0;

  ACCENTURE_SJT_QUESTIONS.forEach((q) => {
    if (q.consistencyPairId && selectedAnswers[q.id] !== undefined && selectedAnswers[q.consistencyPairId] !== undefined) {
      totalPairs += 0.5; // Each pair counted once
      const scoreA = selectedAnswers[q.id];
      const scoreB = selectedAnswers[q.consistencyPairId];
      // Both high (>=3) or both low (<=2) means consistent stance
      if ((scoreA >= 3 && scoreB >= 3) || (scoreA <= 2 && scoreB <= 2)) {
        consistencyMatches += 0.5;
      }
    }
  });

  const consistencyRate = totalPairs > 0 ? Math.round((consistencyMatches / totalPairs) * 100) : 100;

  // Competency breakdown
  const competencies: Record<string, { total: number; max: number }> = {
    'Collaboration': { total: 0, max: 0 },
    'Client Centricity': { total: 0, max: 0 },
    'Agility & Growth': { total: 0, max: 0 },
    'Integrity & Ownership': { total: 0, max: 0 },
  };

  ACCENTURE_SJT_QUESTIONS.forEach((q) => {
    competencies[q.competency].max += 4;
    if (selectedAnswers[q.id] !== undefined) {
      competencies[q.competency].total += selectedAnswers[q.id];
    }
  });

  const overallScore = Object.values(selectedAnswers).reduce((a, b) => a + b, 0);
  const maxPossibleScore = totalQuestions * 4;
  const percentage = Math.round((overallScore / maxPossibleScore) * 100);

  if (isCompleted) {
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-8 text-slate-100 font-sans">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
              Stage 1: Complete
            </span>
            <button
              onClick={handleRestart}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/30 font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake SJT
            </button>
          </div>
        </div>

        {/* Hero Score Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-950/80 via-purple-950/40 to-black border border-purple-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Accenture Behavioral Profile Diagnostic
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Situational Judgment Index: {percentage}%
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {consistencyRate >= 80
                  ? 'Strong Behavioral Consistency Verified. You demonstrated steady alignment with Accenture Core Values across both direct and inverted workplace dilemmas.'
                  : 'Noticeable Inconsistencies Detected. Some answers showed conflicting stances across paired scenarios. HirePro algorithms flag variance above 25%.'}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Consistency Matrix</span>
                <span className={`text-2xl font-black ${consistencyRate >= 80 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {consistencyRate}%
                </span>
                <span className="text-[10px] text-slate-500 block">HirePro Target &gt; 75%</span>
              </div>
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Overall Fit</span>
                <span className="text-2xl font-black text-purple-400">
                  {percentage >= 70 ? 'Tier 1' : 'Calibrating'}
                </span>
                <span className="text-[10px] text-slate-500 block">Culture Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Competency 4-Pillar Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(competencies).map(([name, data]) => {
            const pct = Math.round((data.total / data.max) * 100);
            return (
              <div key={name} className="p-5 rounded-2xl bg-[#0e111a] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">{name}</span>
                  <span className="text-xs font-mono font-bold text-purple-400">{pct}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400">
                  {pct >= 75 ? 'Optimal alignment with client delivery.' : 'Review escalation protocols & feedback loops.'}
                </p>
              </div>
            );
          })}
        </div>

        {/* Question by Question Review */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-purple-400" /> Scenario-by-Scenario Evaluation & Rationale
          </h3>
          <div className="space-y-3">
            {ACCENTURE_SJT_QUESTIONS.map((q, idx) => {
              const userScore = selectedAnswers[q.id] ?? 0;
              const isGood = userScore >= 3;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-[#0e111a] border border-white/10 space-y-3 text-xs"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                          {q.competency}
                        </span>
                        {q.consistencyPairId && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-semibold">
                            Paired Consistency Check
                          </span>
                        )}
                      </div>
                      <p className="font-semibold text-slate-200 text-sm">
                        Q{idx + 1}. {q.scenario}
                      </p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 ${
                      isGood ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      Score: {userScore}/4
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-slate-300 leading-relaxed">
                    <span className="font-bold text-purple-300 block mb-1">Accenture Strategy Rationale:</span>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active Questionnaire Screen
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-slate-100 font-sans min-h-[calc(100vh-100px)] flex flex-col justify-between">
      {/* Top Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
          </button>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-400">
              Scenario {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Stage 1: Behavioral SJT
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Scenario Card */}
      <div className="flex-1 flex flex-col justify-center space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0e111a] border border-white/10 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Competency: {currentQ.competency}
            </span>
            {currentQ.consistencyPairId && (
              <span className="text-[10px] text-slate-400 italic">
                * Evaluates consistency with paired situational dilemmas
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentQ.scenario}
          </h3>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedAnswers[currentQ.id] === opt.score;
            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.score)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-600/10'
                    : 'bg-[#0e111a]/80 border-white/10 text-slate-300 hover:bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                    isSelected ? 'bg-purple-500 text-white' : 'bg-white/10 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-xs sm:text-sm leading-relaxed">{opt.label}</span>
                </div>
                {isSelected && <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-xs text-slate-500">
          Answer honestly to demonstrate workplace decision-making and consistency.
        </span>
        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentQ.id] === undefined}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/30 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          {currentIndex < totalQuestions - 1 ? (
            <>
              Next Scenario <ChevronRight className="w-4 h-4" />
            </>
          ) : (
            <>
              Complete SJT Assessment <Award className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
