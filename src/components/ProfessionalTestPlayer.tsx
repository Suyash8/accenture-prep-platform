'use client';

import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  HelpCircle, 
  AlertTriangle, 
  ChevronRight, 
  ChevronLeft, 
  Send, 
  Bookmark,
  CheckCircle2,
  X,
  Edit3,
  RotateCcw
} from 'lucide-react';
import { Question } from '../types';
import { TestResults } from './TestResults';
import { ExamScratchpad } from './ExamScratchpad';

interface ProfessionalTestPlayerProps {
  questions: Question[];
  testTitle: string;
  durationMinutes: number;
  onExit: () => void;
}

export const ProfessionalTestPlayer: React.FC<ProfessionalTestPlayerProps> = ({
  questions,
  testTitle,
  durationMinutes,
  onExit,
}) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Record<string, boolean>>({ [questions[0]?.id]: true });
  const [timeRemaining, setTimeRemaining] = useState(durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(true);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (!hasStarted || isSubmitted) return;
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
  }, [hasStarted, isSubmitted]);

  // Mark question as visited when changing index
  useEffect(() => {
    if (questions[currentIndex]) {
      setVisitedQuestions((prev) => ({
        ...prev,
        [questions[currentIndex].id]: true,
      }));
    }
  }, [currentIndex, questions]);

  const currentQ = questions[currentIndex] || questions[0];
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Counts for palette
  const answeredCount = Object.keys(selectedAnswers).length;
  const markedCount = Object.values(markedForReview).filter(Boolean).length;
  const notAnsweredCount = Object.keys(visitedQuestions).length - answeredCount;
  const notVisitedCount = questions.length - Object.keys(visitedQuestions).length;

  const handleSelectOption = (idx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: idx }));
  };

  const handleClearResponse = () => {
    setSelectedAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleToggleMarkForReview = () => {
    setMarkedForReview((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }));
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleSaveAndNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-800 p-6">
        <TestResults
          questions={questions}
          selectedAnswers={selectedAnswers}
          timeSpentSeconds={durationMinutes * 60 - timeRemaining}
          testTitle={testTitle}
          onRetake={() => {
            setSelectedAnswers({});
            setMarkedForReview({});
            setVisitedQuestions({ [questions[0]?.id]: true });
            setTimeRemaining(durationMinutes * 60);
            setCurrentIndex(0);
            setIsSubmitted(false);
          }}
          onGoHome={onExit}
        />
      </div>
    );
  }

  // 1. INSTRUCTIONS SCREEN (Exact replica of Accenture testing entry screen)
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-[#f3f4f6] flex flex-col justify-between font-sans">
        {/* Top Header */}
        <header className="bg-[#1e2029] text-white px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-wide">{testTitle}</span>
          </div>
          <button
            onClick={onExit}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            ✕ Exit Test
          </button>
        </header>

        {/* Instructions Body */}
        <main className="max-w-4xl w-full mx-auto p-6 sm:p-10 bg-white shadow-sm border border-slate-200 rounded-xl my-6 flex-1 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-xl font-bold text-slate-900">General Instructions</h1>
            <p className="text-xs text-slate-500 mt-1">
              Please read the instructions carefully before starting the assessment.
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
            <p>1. Total duration of this examination is <strong>{durationMinutes} minutes</strong>.</p>
            <p>2. The clock will be set at the server. The countdown timer at the top displays time remaining.</p>
            <p>3. Each correct answer carries <strong>1.00 Mark</strong>. There is <strong>NO negative marking</strong>.</p>
            <p>4. You must clear both Cognitive and Technical sectional thresholds to qualify for Round 2.</p>
          </div>

          {/* Palette Legend */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Question Palette Symbol Legend
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-slate-200 text-slate-700 font-bold rounded flex items-center justify-center text-xs">1</span>
                <span>You have not visited the question yet.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-[#e11d48] text-white font-bold rounded flex items-center justify-center text-xs">3</span>
                <span>You have not answered the question.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-[#16a34a] text-white font-bold rounded flex items-center justify-center text-xs">5</span>
                <span>You have answered the question.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-[#7c3aed] text-white font-bold rounded-full flex items-center justify-center text-xs">7</span>
                <span>Marked for review (Will not be evaluated if unanswered).</span>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Sticky Start Button */}
        <div className="bg-white border-t border-slate-200 p-4 sticky bottom-0 text-center">
          <button
            onClick={() => setHasStarted(true)}
            className="w-full max-w-md mx-auto py-3 bg-[#1e295d] hover:bg-[#161f47] text-white text-sm font-bold rounded-lg transition-all shadow-md"
          >
            Start Assessment
          </button>
        </div>
      </div>
    );
  }

  // 2. LIVE TEST PLAYER INTERFACE (Exact Graphy / Wheebox Player layout)
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col justify-between font-sans text-slate-800 select-none">
      {/* Top Dark Header */}
      <header className="bg-[#1e2029] text-white px-6 py-3 flex items-center justify-between z-30">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-bold tracking-wide">{testTitle}</h2>
          <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
            {currentQ.sectionTitle}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 font-mono bg-black/40 px-3 py-1 rounded border border-slate-700 text-amber-300 font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>Time Left: {timeFormatted}</span>
          </div>
          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-3 py-1 bg-[#e11d48] hover:bg-rose-700 text-white font-bold rounded text-xs transition-colors"
          >
            End Test
          </button>
        </div>
      </header>

      {/* Subheader: Marking Scheme */}
      <div className="bg-white border-b border-slate-200 px-6 py-2 flex items-center justify-between text-xs text-slate-600">
        <span className="font-semibold text-slate-800">
          Question No. {currentIndex + 1} of {questions.length}
        </span>
        <div className="flex items-center gap-4">
          <span>Marks for correct: <strong className="text-emerald-600">+1.00</strong></span>
          <span>Negative marking: <strong className="text-slate-700">0.00</strong></span>
        </div>
      </div>

      {/* Main Body (Split into Left Question Pane + Right Palette) */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Question Pane */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-white border-r border-slate-200 flex flex-col justify-between">
          <div className="space-y-6 max-w-4xl">
            {/* Question Text */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
                {currentQ.title}
              </h3>

              {/* Pseudocode Box if present */}
              {currentQ.codeSnippet && (
                <div className="p-4 rounded-lg bg-[#0f172a] text-purple-200 font-mono text-xs sm:text-sm border border-slate-800 overflow-x-auto whitespace-pre leading-relaxed shadow-inner">
                  {currentQ.codeSnippet}
                </div>
              )}
            </div>

            {/* Radio Options */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQ.id] === idx;
                return (
                  <label
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`flex items-start gap-3 p-3.5 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#5b50e0] bg-indigo-50/50 text-[#1e1b4b] font-medium'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQ.id}`}
                      checked={isSelected}
                      onChange={() => handleSelectOption(idx)}
                      className="mt-0.5 accent-[#5b50e0] w-4 h-4"
                    />
                    <span className="flex-1 leading-snug">{option}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Palette Drawer */}
        <aside
          className={`w-72 sm:w-80 bg-white border-l border-slate-200 flex flex-col justify-between transition-all duration-300 z-20 ${
            isPaletteOpen ? 'mr-0' : '-mr-72 sm:-mr-80'
          }`}
        >
          {/* User & Palette Summary */}
          <div className="p-4 border-b border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Question Palette
              </span>
              <button
                onClick={() => setIsPaletteOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xs sm:hidden"
              >
                ✕
              </button>
            </div>

            {/* Status Counter Pills */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium">
                Answered: <strong>{answeredCount}</strong>
              </div>
              <div className="p-2 rounded bg-rose-50 border border-rose-200 text-rose-800 font-medium">
                Not Answered: <strong>{notAnsweredCount}</strong>
              </div>
              <div className="p-2 rounded bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                Not Visited: <strong>{notVisitedCount}</strong>
              </div>
              <div className="p-2 rounded bg-purple-50 border border-purple-200 text-purple-800 font-medium">
                Marked: <strong>{markedCount}</strong>
              </div>
            </div>
          </div>

          {/* 4-Column Number Grid */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-4 gap-2.5">
              {questions.map((q, qIdx) => {
                const isCurrent = qIdx === currentIndex;
                const isAns = selectedAnswers[q.id] !== undefined;
                const isMarked = markedForReview[q.id];
                const isVisited = visitedQuestions[q.id];

                let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200'; // Not visited
                if (isMarked) {
                  btnClass = 'bg-[#7c3aed] text-white font-bold rounded-full'; // Marked
                } else if (isAns) {
                  btnClass = 'bg-[#16a34a] text-white font-bold'; // Answered
                } else if (isVisited) {
                  btnClass = 'bg-[#e11d48] text-white font-bold'; // Visited not answered
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(qIdx)}
                    className={`h-9 rounded text-xs font-semibold transition-all ${btnClass} ${
                      isCurrent ? 'ring-2 ring-indigo-600 ring-offset-2' : ''
                    }`}
                  >
                    {qIdx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Toggle Tab Button for Palette */}
        <button
          onClick={() => setIsPaletteOpen((prev) => !prev)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1e295d] text-white py-3 px-1 rounded-l text-xs font-bold shadow-md z-30"
          title="Toggle Question Palette"
        >
          {isPaletteOpen ? '›' : '‹'}
        </button>
      </div>

      {/* Bottom Fixed Action Controls Bar */}
      <footer className="bg-white border-t border-slate-200 px-6 py-3 flex flex-wrap items-center justify-between gap-3 z-30">
        {/* Left Side: Secondary Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold disabled:opacity-40"
          >
            Previous
          </button>
          <button
            onClick={handleClearResponse}
            className="px-4 py-2 rounded border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
          >
            Clear
          </button>
          <button
            onClick={handleToggleMarkForReview}
            className="px-4 py-2 rounded border border-purple-300 text-purple-700 hover:bg-purple-50 text-xs font-semibold"
          >
            {markedForReview[currentQ.id] ? 'Unmark Review' : 'Mark for Review & Next'}
          </button>
        </div>

        {/* Right Side: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleSaveAndNext}
            className="px-6 py-2.5 rounded bg-[#5b50e0] hover:bg-[#4f43d8] text-white text-xs font-bold transition-all shadow-sm"
          >
            Save & Next
          </button>
          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-6 py-2.5 rounded bg-[#1e295d] hover:bg-[#161f47] text-white text-xs font-bold transition-all shadow-sm"
          >
            Submit Test
          </button>
        </div>
      </footer>

      {/* Scratchpad & Calculator */}
      <ExamScratchpad />

      {/* Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-6 space-y-5 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Confirm Submission</h3>
            <div className="bg-slate-50 p-4 rounded-lg space-y-2 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>Total Questions:</span>
                <strong>{questions.length}</strong>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Answered:</span>
                <strong>{answeredCount}</strong>
              </div>
              <div className="flex justify-between text-rose-700">
                <span>Not Answered:</span>
                <strong>{notAnsweredCount}</strong>
              </div>
              <div className="flex justify-between text-purple-700">
                <span>Marked for Review:</span>
                <strong>{markedCount}</strong>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2.5 rounded border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                Resume Test
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  setIsSubmitted(true);
                }}
                className="flex-1 py-2.5 rounded bg-[#1e295d] hover:bg-[#161f47] text-white text-xs font-bold"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
