'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ArrowLeft, Shuffle } from 'lucide-react';

export interface MathQuestion {
  id: number;
  bubbles: string[];
}

// Procedural dynamic math question generator creating realistic Accenture-style expressions
function generateRandomQuestion(tier: number): MathQuestion {
  // Types of operations calibrated by tier difficulty
  const operations = [
    // Simple Addition/Subtraction
    () => {
      const a = Math.floor(Math.random() * 15) + 2;
      const b = Math.floor(Math.random() * 12) + 1;
      return Math.random() > 0.5 ? `${a}+${b}` : `${a + b}-${b}`;
    },
    // Multiplication
    () => {
      const a = Math.floor(Math.random() * 9) + 2;
      const b = Math.floor(Math.random() * 8) + 2;
      return `${a}×${b}`;
    },
    // Exact integer division
    () => {
      const divisor = Math.floor(Math.random() * 8) + 2;
      const quotient = Math.floor(Math.random() * 12) + 2;
      return `${divisor * quotient}÷${divisor}`;
    },
    // Exponent / Powers
    () => {
      const base = Math.floor(Math.random() * 5) + 2; // 2, 3, 4, 5, 6
      const exp = base <= 3 ? Math.floor(Math.random() * 3) + 2 : 2; // up to 3^4 or 6^2
      return `${base}^${exp}`;
    },
    // Single number
    () => {
      return `${Math.floor(Math.random() * 25) + 2}`;
    },
  ];

  const expressions: string[] = [];
  const values: number[] = [];

  while (expressions.length < 3) {
    const op = operations[Math.floor(Math.random() * operations.length)];
    const expr = op();
    const val = evaluateExpression(expr);
    // ensure no identical numerical values to avoid ambiguous sort ties
    if (!values.includes(val)) {
      expressions.push(expr);
      values.push(val);
    }
  }

  return {
    id: tier,
    bubbles: expressions,
  };
}

// 3 Triplet position layout variations (randomized per question)
const BUBBLE_LAYOUT_VARIATIONS = [
  // Triangle pointing down
  [
    { top: '35%', left: '30%' },
    { top: '35%', left: '70%' },
    { top: '72%', left: '50%' },
  ],
  // Triangle pointing up
  [
    { top: '32%', left: '50%' },
    { top: '68%', left: '30%' },
    { top: '68%', left: '70%' },
  ],
  // Arc / Linear distributed
  [
    { top: '48%', left: '22%' },
    { top: '32%', left: '50%' },
    { top: '48%', left: '78%' },
  ],
];

function evaluateExpression(expr: string): number {
  let clean = expr
    .trim()
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-');
  clean = clean.replace(/(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/g, (_, base, exp) =>
    String(Math.pow(Number(base), Number(exp)))
  );
  if (!/^[\d+\-*/().\s]+$/.test(clean)) return 0;
  try {
    const val = Function(`"use strict"; return (${clean})`)();
    return Number.isFinite(val) ? val : 0;
  } catch {
    return 0;
  }
}

function CircularTimer({ seconds, totalSeconds, onExpire }: { seconds: number; totalSeconds: number; onExpire: () => void }) {
  const isUrgent = seconds <= 5;
  const pct = totalSeconds > 0 ? (seconds / totalSeconds) * 100 : 0;
  const circumference = 2 * Math.PI * 22;

  useEffect(() => {
    if (seconds <= 0) onExpire();
  }, [seconds, onExpire]);

  return (
    <div className="relative flex size-14 shrink-0 items-center justify-center">
      <svg width="56" height="56" className="-rotate-90" aria-hidden="true">
        <circle cx="28" cy="28" r={22} fill="none" stroke="#e5e5e5" strokeWidth="4" />
        <circle
          cx="28"
          cy="28"
          r={22}
          fill="none"
          stroke={isUrgent ? "#dc2626" : "#525252"}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (pct / 100) * circumference}
          strokeLinecap="round"
        />
      </svg>
      <span className={`absolute inset-0 flex items-center justify-center text-lg font-semibold tabular-nums ${isUrgent ? 'text-red-600' : 'text-neutral-800'}`}>
        {seconds}
      </span>
    </div>
  );
}

export const MathOrderChallenge: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [questionCount] = useState(25);
  // Initial fallback questions for deterministic SSR prerendering
  const [questions, setQuestions] = useState<MathQuestion[]>([
    {
      id: 1,
      bubbles: ['12+8', '5×3', '30-6'],
    },
  ]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [state, setState] = useState<'ready' | 'playing' | 'feedback' | 'finished'>('ready');
  const [feedbackType, setFeedbackType] = useState<'correct' | 'wrong' | null>(null);

  // Position variation index for the current question
  const [layoutVariant, setLayoutVariant] = useState(0);

  const stateRef = useRef(state);
  stateRef.current = state;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const regenerateQuestions = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const newQs = Array.from({ length: questionCount }, (_, i) => generateRandomQuestion(i + 1));
    setQuestions(newQs);
    setCurrentIdx(0);
    setSelectedIndices([]);
    setTimeLeft(15);
    setCorrect(0);
    setWrong(0);
    setFeedbackType(null);
    setLayoutVariant(Math.floor(Math.random() * BUBBLE_LAYOUT_VARIATIONS.length));
    setState('playing');
  }, [questionCount]);

  // Generate randomized questions on mount (client-only)
  useEffect(() => {
    regenerateQuestions();
  }, [regenerateQuestions]);

  const currentQ = questions[currentIdx] || questions[0];

  // Shuffle bubble order when displaying so lowest is never guaranteed to be at any fixed slot
  const shuffledBubbles = useMemo(() => {
    const items = currentQ.bubbles.map((expr, originalIndex) => ({
      expr,
      originalIndex,
      val: evaluateExpression(expr),
    }));
    // deterministic permutation using question id & currentIdx to avoid Math.random() in render phase
    const permPatterns = [
      [1, 0, 2],
      [2, 0, 1],
      [0, 2, 1],
      [1, 2, 0],
      [2, 1, 0],
      [0, 1, 2],
    ];
    const pattern = permPatterns[(currentQ.id + currentIdx) % permPatterns.length];
    return pattern.map((idx) => items[idx % items.length]);
  }, [currentQ, currentIdx]);

  const handleResult = useCallback((isCorrect: boolean) => {
    if (stateRef.current !== 'playing') return;
    setState('feedback');
    setFeedbackType(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) setCorrect((c) => c + 1);
    else setWrong((w) => w + 1);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFeedbackType(null);
      setSelectedIndices([]);
      setTimeLeft(15);
      setLayoutVariant(Math.floor(Math.random() * BUBBLE_LAYOUT_VARIATIONS.length));
      if (currentIdx >= questions.length - 1) {
        setState('finished');
      } else {
        setCurrentIdx((i) => i + 1);
        setState('playing');
      }
    }, 900);
  }, [currentIdx, questions.length]);

  const handleTimeout = useCallback(() => {
    handleResult(false);
  }, [handleResult]);

  useEffect(() => {
    if (state !== 'playing' || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [state, timeLeft]);

  const handleBubbleClick = (slotIdx: number) => {
    if (state !== 'playing') return;
    if (selectedIndices.includes(slotIdx)) {
      setSelectedIndices((prev) => prev.filter((i) => i !== slotIdx));
      return;
    }
    if (selectedIndices.length >= 3) return;

    const nextSelected = [...selectedIndices, slotIdx];
    setSelectedIndices(nextSelected);

    if (nextSelected.length === 3) {
      const vals = nextSelected.map((i) => shuffledBubbles[i].val);
      handleResult(vals[0] <= vals[1] && vals[1] <= vals[2]);
    }
  };

  const borderClass =
    feedbackType === 'correct'
      ? 'border-[#22c55e] border-4'
      : feedbackType === 'wrong'
      ? 'border-[#ef4444] border-4'
      : 'border-2 border-white';

  const total = questions.length;
  const scorePct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const currentPositions = BUBBLE_LAYOUT_VARIATIONS[layoutVariant];

  return (
    <div className="w-full bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-sans p-4 sm:p-6 flex flex-col transition-colors">
      {/* Top Header & Variant Selector Bar */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xs cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Games
        </button>

        <button
          onClick={regenerateQuestions}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs cursor-pointer transition-all"
        >
          <Shuffle className="w-3.5 h-3.5 text-indigo-500" /> Randomize New Set
        </button>
      </div>

      {/* Main Game Stage Container */}
      <div className="max-w-4xl w-full mx-auto flex-1 flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg overflow-hidden relative">
        {/* Helper Note Banner */}
        <div className="rounded-t-xl border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 px-4 py-3 text-center text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          You can deselect a bubble by clicking on it again. However, you will automatically advance to the next question after the third bubble is selected.
        </div>

        {/* Ready Screen */}
        {state === 'ready' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
              Quick-Fire Math — Randomized Dynamic Assessment
            </h2>
            <p className="text-sm text-neutral-600">
              {total} questions • 15 seconds each
            </p>
            <p className="text-sm text-neutral-700 max-w-md font-medium">
              Select the bubbles in order from the <strong>LOWEST</strong> to the <strong>HIGHEST</strong> value.
            </p>
            <button
              onClick={() => setState('playing')}
              className="mt-6 px-10 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer transition-colors"
            >
              Start
            </button>
          </div>
        )}

        {/* Playing or Feedback Screen */}
        {(state === 'playing' || state === 'feedback') && (
          <div className="flex-1 flex flex-col p-4 sm:p-6 relative min-h-[460px]">
            {/* Inner Gray Canvas */}
            <div className="relative flex-1 min-h-[380px] rounded-xl border-2 border-neutral-600 bg-[#f0f0f0] overflow-hidden">
              {shuffledBubbles.map((item, slotIdx) => {
                const orderIdx = selectedIndices.indexOf(slotIdx);
                const isSelected = orderIdx >= 0;
                const isFeedback = state === 'feedback';
                const pos = currentPositions[slotIdx];

                return (
                  <button
                    key={`${currentIdx}-${slotIdx}`}
                    type="button"
                    disabled={state === 'feedback'}
                    onClick={() => handleBubbleClick(slotIdx)}
                    className={`absolute flex size-[clamp(140px,min(24vw,26vh),210px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center text-lg sm:text-xl font-medium transition-all cursor-pointer select-none shadow-md ${
                      isFeedback
                        ? `bg-[#d0d0d0] text-neutral-800 ${borderClass}`
                        : isSelected
                        ? 'border-2 border-white bg-[#333333] text-white scale-105'
                        : 'border-2 border-white bg-[#d0d0d0] text-neutral-800 hover:bg-[#bdbdbd]'
                    }`}
                    style={{ top: pos.top, left: pos.left }}
                  >
                    <span className="px-2 leading-tight">
                      {item.expr
                        .replace(/([+\-×÷^])/g, ' $1 ')
                        .replace(/\s+/g, ' ')
                        .trim()}
                    </span>

                    {isSelected && !isFeedback && (
                      <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-900 shadow">
                        {orderIdx + 1}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Progress & Timer Row */}
            <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4 px-2">
              <CircularTimer seconds={timeLeft} totalSeconds={15} onExpire={handleTimeout} />

              <div className="text-center">
                <span className="text-xs uppercase font-bold text-neutral-400 block tracking-wider">Progress</span>
                <span className="text-sm font-bold text-neutral-800">
                  Question {currentIdx + 1} of {total}
                </span>
              </div>

              <div className="text-right">
                <span className="text-xs uppercase font-bold text-neutral-400 block tracking-wider">Score</span>
                <span className="text-sm font-bold text-emerald-600">
                  {correct} Correct
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Finished Results Screen */}
        {state === 'finished' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-lg space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">Results</h3>

              <div className="space-y-2 text-left text-neutral-700 text-sm border-y border-neutral-100 py-4">
                <p className="flex justify-between">
                  <span>Correct:</span>
                  <strong className="text-neutral-900">{correct} / {total}</strong>
                </p>
                <p className="flex justify-between">
                  <span>Wrong:</span>
                  <strong className="text-neutral-900">{wrong} / {total}</strong>
                </p>
                <p className="flex justify-between text-base pt-1">
                  <span>Score:</span>
                  <strong className="text-neutral-900 font-extrabold">{scorePct}%</strong>
                </p>
              </div>

              <button
                onClick={regenerateQuestions}
                className="w-full py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer transition-colors"
              >
                Try Again With New Random Set
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
