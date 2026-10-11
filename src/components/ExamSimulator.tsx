'use client';

import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Flag, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  AlertCircle,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { Question } from '../types';
import { TestResults } from './TestResults';
import { ExamScratchpad } from './ExamScratchpad';

interface ExamSimulatorProps {
  questions: Question[];
  title: string;
  durationMinutes: number;
  onExit: () => void;
}

export const ExamSimulator: React.FC<ExamSimulatorProps> = ({
  questions,
  title,
  durationMinutes,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState(durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const currentQ = questions[currentIndex];
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isTimeCritical = timeRemaining < 300; // < 5 mins

  const handleSelectOption = (index: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: index,
    }));
  };

  const handleClearSelection = () => {
    setSelectedAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const toggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id],
    }));
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const flaggedCount = Object.values(flaggedQuestions).filter(Boolean).length;

  if (isSubmitted) {
    return (
      <TestResults
        questions={questions}
        selectedAnswers={selectedAnswers}
        timeSpentSeconds={durationMinutes * 60 - timeRemaining}
        onRetake={() => {
          setSelectedAnswers({});
          setFlaggedQuestions({});
          setTimeRemaining(durationMinutes * 60);
          setCurrentIndex(0);
          setIsSubmitted(false);
        }}
        onGoHome={onExit}
      />
    );
  }

  return (
    <div className="flex flex-col min-h-screen text-slate-100">
      {/* Top Test Header (Non-overlapping, high contrast) */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 sm:px-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
            {title}
          </h2>
          <p className="text-xs text-slate-400">
            {currentQ.sectionTitle} • Question {currentIndex + 1} of {questions.length}
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Timer Display */}
          <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono text-sm font-bold ${
            isTimeCritical 
              ? 'bg-rose-950/60 text-rose-300 border-rose-500/50 animate-pulse' 
              : 'bg-slate-800/80 text-purple-300 border-slate-700'
          }`}>
            <Clock className="w-4 h-4 text-purple-400" />
            <span>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-purple-600/30"
          >
            <Send className="w-3.5 h-3.5" /> Submit Assessment
          </button>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Question Pane (3 cols) */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-6 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="space-y-6">
            {/* Question Header & Meta */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {currentQ.tag}
                </span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                  currentQ.difficulty === 'Easy' ? 'text-emerald-400 bg-emerald-500/10' :
                  currentQ.difficulty === 'Medium' ? 'text-amber-400 bg-amber-500/10' :
                  'text-rose-400 bg-rose-500/10'
                }`}>
                  {currentQ.difficulty}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFlag}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    flaggedQuestions[currentQ.id]
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  {flaggedQuestions[currentQ.id] ? 'Marked for Review' : 'Mark for Review'}
                </button>
                {selectedAnswers[currentQ.id] !== undefined && (
                  <button
                    onClick={handleClearSelection}
                    className="text-xs text-slate-400 hover:text-rose-400 px-2 py-1.5 transition-colors"
                  >
                    Clear Response
                  </button>
                )}
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white whitespace-pre-line leading-relaxed">
                {currentQ.title}
              </h3>

              {/* Code Snippet Box (Formatted, syntax highlighted style, crisp font) */}
              {currentQ.codeSnippet && (
                <div className="relative group rounded-2xl bg-slate-950 border border-purple-900/30 p-5 overflow-x-auto shadow-inner">
                  <div className="absolute top-3 right-4 text-[10px] font-mono text-purple-400/60 uppercase">
                    Pseudocode
                  </div>
                  <pre className="font-mono text-sm sm:text-base text-purple-200 leading-relaxed font-medium">
                    {currentQ.codeSnippet}
                  </pre>
                </div>
              )}
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentQ.id] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-600/10'
                        : 'bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                      isSelected
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base pt-0.5 leading-snug">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-800/80">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <span className="text-xs text-slate-500 font-medium">
              {currentIndex + 1} / {questions.length}
            </span>

            <button
              onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
              disabled={currentIndex === questions.length - 1}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-purple-600/20"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Question Palette (1 col) */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-5">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Question Palette
              </h4>
              <span className="text-xs text-purple-400 font-semibold">
                {answeredCount}/{questions.length} answered
              </span>
            </div>

            {/* Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-purple-600" /> Answered ({answeredCount})
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700" /> Unanswered ({questions.length - answeredCount})
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-500" /> Review ({flaggedCount})
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded ring-2 ring-purple-400" /> Current
              </div>
            </div>

            {/* Grid of Question Numbers */}
            <div className="grid grid-cols-5 gap-2.5 pt-2">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = selectedAnswers[q.id] !== undefined;
                const isFlagged = flaggedQuestions[q.id];

                let bgClass = 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-slate-200';
                if (isFlagged && isAnswered) {
                  bgClass = 'bg-amber-600 text-white font-bold ring-2 ring-purple-400';
                } else if (isFlagged) {
                  bgClass = 'bg-amber-500/80 text-white font-bold';
                } else if (isAnswered) {
                  bgClass = 'bg-purple-600 text-white font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-10 rounded-xl text-xs font-semibold transition-all relative ${bgClass} ${
                      isCurrent ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-105' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Exam Tips Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/30 to-slate-900/40 border border-purple-800/30 text-xs text-slate-400 space-y-2">
            <p className="font-bold text-purple-300 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Accenture Test Strategy:
            </p>
            <ul className="space-y-1 list-disc list-inside text-slate-400 leading-relaxed">
              <li>No negative marking in Round 1 — attempt every question.</li>
              <li>Clear sectional cutoffs first (Pseudocode + MS Office).</li>
              <li>Spend no more than 60 seconds per bitwise pseudocode.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 text-purple-400">
              <AlertCircle className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-black text-white">Submit Assessment?</h3>
                <p className="text-xs text-slate-400">Are you sure you want to finish the exam?</p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-sm space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span>Total Questions:</span>
                <span className="font-bold text-white">{questions.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Answered:</span>
                <span className="font-bold text-emerald-400">{answeredCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Unanswered:</span>
                <span className="font-bold text-amber-400">{questions.length - answeredCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Marked for Review:</span>
                <span className="font-bold text-purple-400">{flaggedCount}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-all"
              >
                Continue Test
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  setIsSubmitted(true);
                }}
                className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/30"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* On-Screen Exam Calculator & Scratchpad */}
      <ExamScratchpad />
    </div>
  );
};
