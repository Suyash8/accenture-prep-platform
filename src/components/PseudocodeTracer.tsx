'use client';

import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Binary, 
  Cpu, 
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ACCENTURE_QUESTIONS } from '../data/questions';
import { Question } from '../types';

export const PseudocodeTracer: React.FC = () => {
  const pseudocodeQuestions = ACCENTURE_QUESTIONS.filter(
    (q) => q.sectionId === 'pseudocode' && q.traceSteps && q.traceSteps.length > 0
  );

  const [selectedQIndex, setSelectedQIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [bitwiseHelperValA, setBitwiseHelperValA] = useState<number>(7);
  const [bitwiseHelperValB, setBitwiseHelperValB] = useState<number>(3);

  const DEFAULT_PSEUDOCODE_QUESTION: Question = {
    id: 'pseudo-default-1',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'Bitwise Logic Tracing',
    codeSnippet: 'Integer a, b, c\nSet a = 4, b = 7\nc = (a & b) + (a ^ b)\nPrint c',
    options: ['7', '11', '8', '3'],
    correctIndex: 0,
    explanation: 'a = 4 (0100), b = 7 (0111). (a & b) = 4. (a ^ b) = 3. 4 + 3 = 7.',
    difficulty: 'Easy',
    tag: 'Bitwise',
    traceSteps: [
      {
        step: 1,
        line: 1,
        description: 'Integer a, b, c: Declares variables a, b, and c in memory.',
        variables: { a: 'undefined', b: 'undefined', c: 'undefined' },
      },
      {
        step: 2,
        line: 2,
        description: 'Set a = 4, b = 7: Assigns 4 (0100_2) to a and 7 (0111_2) to b.',
        variables: { a: 4, b: 7, c: 'undefined' },
      },
      {
        step: 3,
        line: 3,
        description: 'c = (a & b) + (a ^ b): Bitwise AND (4 & 7 = 4), XOR (4 ^ 7 = 3). Sum = 7.',
        variables: { a: 4, b: 7, c: 7 },
      },
      {
        step: 4,
        line: 4,
        description: 'Print c: Outputs final value 7.',
        variables: { a: 4, b: 7, c: 7 },
      },
    ],
  };

  const currentQ: Question = pseudocodeQuestions[selectedQIndex] || DEFAULT_PSEUDOCODE_QUESTION;
  const steps = currentQ?.traceSteps || DEFAULT_PSEUDOCODE_QUESTION.traceSteps || [];
  const activeStep = steps[currentStepIndex] || steps[0];

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-6">
      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 border border-purple-500/30 backdrop-blur-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
            <Cpu className="w-3.5 h-3.5" /> Interactive Execution Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Pseudocode Step-by-Step Tracer
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Step line-by-line through Accenture's trickiest bitwise & recursion problems. Watch variable registers, call stacks, and branching logic mutate in real-time.
          </p>
        </div>
      </div>

      {/* Question Selector Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
        {pseudocodeQuestions.map((q, idx) => (
          <button
            key={q.id}
            onClick={() => {
              setSelectedQIndex(idx);
              setCurrentStepIndex(0);
            }}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition-all border ${
              selectedQIndex === idx
                ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-600/20'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Problem #{idx + 1}: {q.tag}
          </button>
        ))}
      </div>

      {/* Main Dual-Pane Tracer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Code Snippet Box (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Binary className="w-4 h-4 text-purple-400" /> Source Pseudocode
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-semibold">
                Step {currentStepIndex + 1} of {steps.length}
              </span>
            </div>

            <p className="text-xs text-slate-300 font-medium">
              {currentQ.title}
            </p>

            {/* Code Block with line numbering */}
            <div className="rounded-2xl bg-slate-950 border border-purple-900/40 p-5 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner space-y-1">
              {currentQ.codeSnippet?.split('\n').map((line, lIdx) => {
                const lineNum = lIdx + 1;
                const isLineActive = activeStep?.line === lineNum;
                return (
                  <div
                    key={lIdx}
                    className={`flex items-start gap-4 px-3 py-1 rounded-lg transition-all ${
                      isLineActive
                        ? 'bg-purple-600/30 text-white font-bold border-l-4 border-purple-400'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-[11px] text-slate-600 w-5 select-none text-right shrink-0">
                      {lineNum}
                    </span>
                    <span className={isLineActive ? 'text-purple-200' : 'text-slate-300'}>
                      {line}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevStep}
                disabled={currentStepIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" /> Prev Step
              </button>
              <button
                onClick={handleNextStep}
                disabled={currentStepIndex === steps.length - 1}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-purple-600/30"
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Variable Register & Step Explanation (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Step Detail Card */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Step Explanation
            </h4>
            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-800/40 text-slate-200 text-sm font-medium leading-relaxed">
              {activeStep?.description}
            </div>

            {/* Variable Table */}
            <div>
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Variable Register State
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {Object.entries(activeStep?.variables || {}).map(([varName, val]) => (
                  <div
                    key={varName}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-center"
                  >
                    <span className="text-[10px] text-slate-500 font-mono uppercase">{varName}</span>
                    <span className="text-base font-bold font-mono text-emerald-400 mt-0.5">
                      {String(val)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* On-Demand Bitwise Calculator Tool */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Binary className="w-3.5 h-3.5" /> Real-time Bitwise Assistant
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-slate-400 block mb-1">Operand A</label>
                <input
                  type="number"
                  value={bitwiseHelperValA}
                  onChange={(e) => setBitwiseHelperValA(Number(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-purple-500"
                />
                <span className="text-[10px] font-mono text-purple-400 block mt-1">
                  Bin: {(bitwiseHelperValA >>> 0).toString(2)}
                </span>
              </div>
              <div>
                <label className="text-[10px] text-slate-400 block mb-1">Operand B</label>
                <input
                  type="number"
                  value={bitwiseHelperValB}
                  onChange={(e) => setBitwiseHelperValB(Number(e.target.value) || 0)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-purple-500"
                />
                <span className="text-[10px] font-mono text-purple-400 block mt-1">
                  Bin: {(bitwiseHelperValB >>> 0).toString(2)}
                </span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 block">A ^ B (XOR)</span>
                <span className="font-bold text-white text-sm">
                  {bitwiseHelperValA ^ bitwiseHelperValB}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 block">A & B (AND)</span>
                <span className="font-bold text-white text-sm">
                  {bitwiseHelperValA & bitwiseHelperValB}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 block">A | B (OR)</span>
                <span className="font-bold text-white text-sm">
                  {bitwiseHelperValA | bitwiseHelperValB}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
