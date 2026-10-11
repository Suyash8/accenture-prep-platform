'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  Award, 
  CheckCircle2, 
  XCircle,
  Eye,
  Check,
  Zap,
  Timer,
  Sliders
} from 'lucide-react';

export interface MathOrderQuestionItem {
  id: number;
  expressions: string[];
  values: number[];
  orderMode: 'asc' | 'desc'; // 'asc': Lowest -> Highest (Accenture Official), 'desc': Highest -> Lowest
  explanation: string;
}

export const OFFICIAL_MATH_BUBBLES_QUESTIONS: MathOrderQuestionItem[] = [
  {
    "id": 1,
    "expressions": [
      "14 / 7",
      "13.5 - 6",
      "18 / 9"
    ],
    "values": [
      2,
      7.5,
      2
    ],
    "orderMode": "asc",
    "explanation": "14 / 7 = 2, 18 / 9 = 2, 13.5 - 6 = 7.5. Order: (14 / 7 or 18 / 9) -> (18 / 9 or 14 / 7) -> 13.5 - 6."
  },
  {
    "id": 2,
    "expressions": [
      "14 / 7",
      "2^2",
      "1 + 9"
    ],
    "values": [
      2,
      4,
      10
    ],
    "orderMode": "asc",
    "explanation": "14 / 7 = 2, 2^2 = 4, 1 + 9 = 10. Order: 14 / 7 (2) -> 2^2 (4) -> 1 + 9 (10)."
  },
  {
    "id": 3,
    "expressions": [
      "3 + 10",
      "10.5 - 2",
      "10 / 5"
    ],
    "values": [
      13,
      8.5,
      2
    ],
    "orderMode": "asc",
    "explanation": "10 / 5 = 2, 10.5 - 2 = 8.5, 3 + 10 = 13. Order: 10 / 5 (2) -> 10.5 - 2 (8.5) -> 3 + 10 (13)."
  },
  {
    "id": 4,
    "expressions": [
      "16 / 4",
      "18.5 - 10",
      "9 + 6"
    ],
    "values": [
      4,
      8.5,
      15
    ],
    "orderMode": "asc",
    "explanation": "16 / 4 = 4, 18.5 - 10 = 8.5, 9 + 6 = 15. Order: 16 / 4 (4) -> 18.5 - 10 (8.5) -> 9 + 6 (15)."
  },
  {
    "id": 5,
    "expressions": [
      "4^2",
      "17.5 - 14",
      "15 + 9"
    ],
    "values": [
      16,
      3.5,
      24
    ],
    "orderMode": "asc",
    "explanation": "17.5 - 14 = 3.5, 4^2 = 16, 15 + 9 = 24. Order: 17.5 - 14 (3.5) -> 4^2 (16) -> 15 + 9 (24)."
  },
  {
    "id": 6,
    "expressions": [
      "18 / 9",
      "23 * 2",
      "2 * 14"
    ],
    "values": [
      2,
      46,
      28
    ],
    "orderMode": "asc",
    "explanation": "18 / 9 = 2, 2 * 14 = 28, 23 * 2 = 46. Order: 18 / 9 (2) -> 2 * 14 (28) -> 23 * 2 (46)."
  },
  {
    "id": 7,
    "expressions": [
      "3^2",
      "11 + 2",
      "2^2"
    ],
    "values": [
      9,
      13,
      4
    ],
    "orderMode": "asc",
    "explanation": "2^2 = 4, 3^2 = 9, 11 + 2 = 13. Order: 2^2 (4) -> 3^2 (9) -> 11 + 2 (13)."
  },
  {
    "id": 8,
    "expressions": [
      "20 / 4",
      "3.5 * 3",
      "32 - 19.5"
    ],
    "values": [
      5,
      10.5,
      12.5
    ],
    "orderMode": "asc",
    "explanation": "20 / 4 = 5, 3.5 * 3 = 10.5, 32 - 19.5 = 12.5. Order: 20 / 4 -> 3.5 * 3 -> 32 - 19.5."
  },
  {
    "id": 9,
    "expressions": [
      "25 / 5",
      "4^2",
      "2.5 * 3"
    ],
    "values": [
      5,
      16,
      7.5
    ],
    "orderMode": "asc",
    "explanation": "25 / 5 = 5, 2.5 * 3 = 7.5, 4^2 = 16. Order: 25 / 5 (5) -> 2.5 * 3 (7.5) -> 4^2 (16)."
  },
  {
    "id": 10,
    "expressions": [
      "36 / 6",
      "3^3",
      "14.5 + 4.5"
    ],
    "values": [
      6,
      27,
      19
    ],
    "orderMode": "asc",
    "explanation": "36 / 6 = 6, 14.5 + 4.5 = 19, 3^3 = 27. Order: 36 / 6 (6) -> 14.5 + 4.5 (19) -> 3^3 (27)."
  },
  {
    "id": 11,
    "expressions": [
      "45 / 9",
      "2^4",
      "7 * 2.5"
    ],
    "values": [
      5,
      16,
      17.5
    ],
    "orderMode": "asc",
    "explanation": "45 / 9 = 5, 2^4 = 16, 7 * 2.5 = 17.5. Order: 45 / 9 -> 2^4 -> 7 * 2.5."
  },
  {
    "id": 12,
    "expressions": [
      "5^2",
      "48 / 8",
      "19.5 - 8"
    ],
    "values": [
      25,
      6,
      11.5
    ],
    "orderMode": "asc",
    "explanation": "48 / 8 = 6, 19.5 - 8 = 11.5, 5^2 = 25. Order: 48 / 8 -> 19.5 - 8 -> 5^2."
  },
  {
    "id": 13,
    "expressions": [
      "64 / 8",
      "3 * 11",
      "1.5 * 6"
    ],
    "values": [
      8,
      33,
      9
    ],
    "orderMode": "asc",
    "explanation": "64 / 8 = 8, 1.5 * 6 = 9, 3 * 11 = 33. Order: 64 / 8 -> 1.5 * 6 -> 3 * 11."
  },
  {
    "id": 14,
    "expressions": [
      "2^5",
      "81 / 9",
      "18.5 + 6.5"
    ],
    "values": [
      32,
      9,
      25
    ],
    "orderMode": "asc",
    "explanation": "81 / 9 = 9, 18.5 + 6.5 = 25, 2^5 = 32. Order: 81 / 9 -> 18.5 + 6.5 -> 2^5."
  },
  {
    "id": 15,
    "expressions": [
      "100 / 25",
      "4.5 * 4",
      "5^2 + 2"
    ],
    "values": [
      4,
      18,
      27
    ],
    "orderMode": "asc",
    "explanation": "100 / 25 = 4, 4.5 * 4 = 18, 5^2 + 2 = 27. Order: 100 / 25 -> 4.5 * 4 -> 5^2 + 2."
  },
  {
    "id": 16,
    "expressions": [
      "72 / 8",
      "3^3 - 5",
      "6.5 * 2"
    ],
    "values": [
      9,
      22,
      13
    ],
    "orderMode": "asc",
    "explanation": "72 / 8 = 9, 6.5 * 2 = 13, 3^3 - 5 = 22. Order: 72 / 8 -> 6.5 * 2 -> 3^3 - 5."
  },
  {
    "id": 17,
    "expressions": [
      "6^2",
      "56 / 7",
      "12.5 + 8.5"
    ],
    "values": [
      36,
      8,
      21
    ],
    "orderMode": "asc",
    "explanation": "56 / 7 = 8, 12.5 + 8.5 = 21, 6^2 = 36. Order: 56 / 7 -> 12.5 + 8.5 -> 6^2."
  },
  {
    "id": 18,
    "expressions": [
      "42 / 6",
      "2^3 + 1",
      "15.5 - 3.5"
    ],
    "values": [
      7,
      9,
      12
    ],
    "orderMode": "asc",
    "explanation": "42 / 6 = 7, 2^3 + 1 = 9, 15.5 - 3.5 = 12. Order: 42 / 6 -> 2^3 + 1 -> 15.5 - 3.5."
  },
  {
    "id": 19,
    "expressions": [
      "4^3 / 2",
      "90 / 10",
      "8.5 * 2"
    ],
    "values": [
      32,
      9,
      17
    ],
    "orderMode": "asc",
    "explanation": "90 / 10 = 9, 8.5 * 2 = 17, 4^3 / 2 = 32. Order: 90 / 10 -> 8.5 * 2 -> 4^3 / 2."
  },
  {
    "id": 20,
    "expressions": [
      "35 / 7",
      "3^2 * 2",
      "14.5 + 1.5"
    ],
    "values": [
      5,
      18,
      16
    ],
    "orderMode": "asc",
    "explanation": "35 / 7 = 5, 14.5 + 1.5 = 16, 3^2 * 2 = 18. Order: 35 / 7 -> 14.5 + 1.5 -> 3^2 * 2."
  },
  {
    "id": 21,
    "expressions": [
      "121 / 11",
      "2^5 - 10",
      "5.5 * 3"
    ],
    "values": [
      11,
      22,
      16.5
    ],
    "orderMode": "asc",
    "explanation": "121 / 11 = 11, 5.5 * 3 = 16.5, 2^5 - 10 = 22. Order: 121 / 11 -> 5.5 * 3 -> 2^5 - 10."
  },
  {
    "id": 22,
    "expressions": [
      "48 / 6",
      "4^2 + 3",
      "3.5 * 4"
    ],
    "values": [
      8,
      19,
      14
    ],
    "orderMode": "asc",
    "explanation": "48 / 6 = 8, 3.5 * 4 = 14, 4^2 + 3 = 19. Order: 48 / 6 -> 3.5 * 4 -> 4^2 + 3."
  },
  {
    "id": 23,
    "expressions": [
      "7^2 - 10",
      "63 / 9",
      "9.5 + 8.5"
    ],
    "values": [
      39,
      7,
      18
    ],
    "orderMode": "asc",
    "explanation": "63 / 9 = 7, 9.5 + 8.5 = 18, 7^2 - 10 = 39. Order: 63 / 9 -> 9.5 + 8.5 -> 7^2 - 10."
  },
  {
    "id": 24,
    "expressions": [
      "54 / 6",
      "2^4 + 5",
      "7.5 * 2"
    ],
    "values": [
      9,
      21,
      15
    ],
    "orderMode": "asc",
    "explanation": "54 / 6 = 9, 7.5 * 2 = 15, 2^4 + 5 = 21. Order: 54 / 6 -> 7.5 * 2 -> 2^4 + 5."
  },
  {
    "id": 25,
    "expressions": [
      "144 / 12",
      "5^2 - 4",
      "4.5 * 5"
    ],
    "values": [
      12,
      21,
      22.5
    ],
    "orderMode": "asc",
    "explanation": "144 / 12 = 12, 5^2 - 4 = 21, 4.5 * 5 = 22.5. Order: 144 / 12 -> 5^2 - 4 -> 4.5 * 5."
  }
];

export const MathOrderChallenge: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [clickedIndices, setClickedIndices] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [timeLeft, setTimeLeft] = useState(13); // Official budget 12-14s
  const [isFinished, setIsFinished] = useState(false);
  const [showSolutionModal, setShowSolutionModal] = useState(false);
  const [mode, setMode] = useState<'asc' | 'desc'>('asc'); // default asc (Lowest -> Highest)

  const currentQ = OFFICIAL_MATH_BUBBLES_QUESTIONS[currentIdx] || OFFICIAL_MATH_BUBBLES_QUESTIONS[0];

  // Compute expected index order based on mode
  const getExpectedIndices = () => {
    const indexed = currentQ.values.map((v, i) => ({ v, i }));
    indexed.sort((a, b) => (mode === 'asc' ? a.v - b.v : b.v - a.v));
    return indexed.map(item => item.i);
  };

  useEffect(() => {
    if (status !== 'idle' || isFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 13;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIdx, status, isFinished, mode]);

  const handleTimeout = () => {
    setStatus('wrong');
    setTimeout(() => {
      advanceNextQuestion();
    }, 800);
  };

  const handleCircleClick = (exprIndex: number) => {
    if (status !== 'idle' || clickedIndices.includes(exprIndex)) return;

    const nextSelection = [...clickedIndices, exprIndex];
    setClickedIndices(nextSelection);

    // Instant green feedback check for stage 1 click
    const expected = getExpectedIndices();
    const stepIdx = nextSelection.length - 1;
    
    // Check if the current value matches the expected value (allow ties)
    const clickedVal = currentQ.values[exprIndex];
    const expectedVal = currentQ.values[expected[stepIdx]];
    
    if (Math.abs(clickedVal - expectedVal) > 0.0001) {
      // Wrong click
      setStatus('wrong');
      setTimeout(() => {
        advanceNextQuestion();
      }, 700);
      return;
    }

    if (nextSelection.length === 3) {
      setStatus('correct');
      setScore((s) => s + 1);
      setTimeout(() => {
        advanceNextQuestion();
      }, 700);
    }
  };

  const advanceNextQuestion = () => {
    if (currentIdx + 1 < OFFICIAL_MATH_BUBBLES_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setClickedIndices([]);
      setStatus('idle');
      setTimeLeft(13);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setClickedIndices([]);
    setStatus('idle');
    setTimeLeft(13);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 text-slate-800 font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Curriculum
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-[#5b50e0] border border-indigo-200">
            Stage 2: Math Bubbles (Rapid Mental Sorting)
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-10 space-y-8 relative overflow-hidden">
        {/* Title & Instructions */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <Zap className="w-3.5 h-3.5" /> Official Rule: {mode === 'asc' ? 'Lowest ➔ Middle ➔ Highest' : 'Highest ➔ Middle ➔ Lowest'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Math Bubbles Mental Sort
          </h2>
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
            Click floating bubbles in strict numerical order: <strong>{mode === 'asc' ? 'Lowest ➔ Highest' : 'Highest ➔ Lowest'}</strong>. Correct selections highlight green immediately!
          </p>
          <div className="pt-2 flex justify-center gap-2">
            <button
              onClick={() => { setMode('asc'); handleRestart(); }}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                mode === 'asc' ? 'bg-[#5b50e0] text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Lowest ➔ Highest (Official Exam)
            </button>
            <button
              onClick={() => { setMode('desc'); handleRestart(); }}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                mode === 'desc' ? 'bg-[#5b50e0] text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Highest ➔ Lowest (Variant)
            </button>
          </div>
        </div>

        {/* Status Metrics Bar */}
        <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold">
          <div>
            <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold">Tier Level</span>
            <span className="text-slate-900 font-extrabold text-sm">
              Tier {currentIdx + 1} / {OFFICIAL_MATH_BUBBLES_QUESTIONS.length}
            </span>
          </div>
          <div>
            <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold">Mental Score</span>
            <span className="text-emerald-700 font-extrabold text-sm">{score} Correct</span>
          </div>
          <div>
            <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold">Time Budget</span>
            <span className={`font-mono font-extrabold text-sm ${timeLeft <= 3 ? 'text-rose-600 animate-pulse' : 'text-slate-900'}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        {/* Linear Timer Bar */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-1000 ${
              timeLeft <= 4 ? 'bg-rose-500' : 'bg-gradient-to-r from-indigo-500 to-purple-600'
            }`}
            style={{ width: `${(timeLeft / 13) * 100}%` }}
          />
        </div>

        {/* 3 Circular Floating Bubbles */}
        {!isFinished ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 max-w-2xl mx-auto">
            {currentQ.expressions.map((expr, i) => {
              const isSelected = clickedIndices.includes(i);
              const selectionOrder = clickedIndices.indexOf(i) + 1; // 1 (1st), 2 (2nd), 3 (3rd)

              let circleStyle = 'bg-white border-slate-300 text-slate-800 hover:border-emerald-500 hover:shadow-lg hover:-translate-y-1';

              if (status === 'correct') {
                circleStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-4 ring-emerald-300 scale-105';
              } else if (status === 'wrong') {
                circleStyle = 'bg-rose-50 border-rose-500 text-rose-900 ring-4 ring-rose-300 scale-95';
              } else if (isSelected) {
                // Immediate green highlight as specified in Accenture mechanics!
                circleStyle = 'bg-emerald-500 text-white border-emerald-600 ring-4 ring-emerald-300 shadow-md scale-105';
              }

              return (
                <button
                  key={i}
                  onClick={() => handleCircleClick(i)}
                  disabled={status !== 'idle' || isSelected}
                  className={`w-36 h-36 mx-auto rounded-full border-2 flex flex-col items-center justify-center transition-all p-3 text-center cursor-pointer relative shadow-sm ${circleStyle}`}
                >
                  {/* Selection Order Tag badge */}
                  {isSelected && (
                    <span className="absolute top-2 w-6 h-6 rounded-full bg-white text-emerald-800 text-[11px] font-black flex items-center justify-center shadow-xs">
                      #{selectionOrder}
                    </span>
                  )}
                  <span className="font-extrabold text-base sm:text-lg leading-tight tracking-tight">{expr}</span>
                  {(status !== 'idle' || isSelected) && (
                    <span className={`text-[11px] font-mono mt-1 ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                      = {Number(currentQ.values[i].toFixed(2))}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          /* Finished State */
          <div className="py-8 text-center space-y-4">
            <Award className="w-14 h-14 text-emerald-600 mx-auto" />
            <h3 className="text-2xl font-black text-slate-900">Tier Assessment Finished!</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              You scored <strong>{score} out of {OFFICIAL_MATH_BUBBLES_QUESTIONS.length}</strong> ({Math.round((score / OFFICIAL_MATH_BUBBLES_QUESTIONS.length) * 100)}%).
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-xl bg-[#5b50e0] text-white text-xs font-bold hover:bg-[#4f43d8] transition-colors shadow-md"
              >
                Replay Challenge
              </button>
              <button
                onClick={() => setShowSolutionModal(true)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                Review Step Walkthrough
              </button>
            </div>
          </div>
        )}

        {/* Footer Guidance */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
          <span>Tactic: Isolate division results first (2 or 4) as immediate lowest values!</span>
          <button
            onClick={() => setShowSolutionModal(true)}
            className="text-[#5b50e0] font-semibold hover:underline flex items-center gap-1"
          >
            <Eye className="w-3.5 h-3.5" /> View Walkthroughs
          </button>
        </div>
      </div>

      {/* Solution Sheet Modal */}
      {showSolutionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-sm font-bold text-slate-900">Section 2 Math Bubbles Walkthroughs</h3>
              <button
                onClick={() => setShowSolutionModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto space-y-3 pr-1 text-xs">
              {OFFICIAL_MATH_BUBBLES_QUESTIONS.map((q, idx) => (
                <div key={q.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-800 flex justify-between">
                    <span>Tier {idx + 1}: {q.expressions.join(' vs ')}</span>
                  </div>
                  <p className="text-slate-600 font-mono text-[11px]">{q.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
