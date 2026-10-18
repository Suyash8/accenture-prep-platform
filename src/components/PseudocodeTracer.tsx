'use client';

import React, { useState } from 'react';
import { 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Calculator
} from 'lucide-react';
import { Question, TraceStep } from '../types';

// Curated authentic Accenture pseudocode problems with full line-by-line trace steps
const TRACEABLE_PSEUDOCODE_PROBLEMS: (Question & { traceSteps: TraceStep[] })[] = [
  {
    id: 'trace-1',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'Bitwise Precedence & Evaluation',
    tag: 'Bitwise AND / OR',
    difficulty: 'Easy',
    codeSnippet: `Integer p, q, r
Set p = 4, q = 9, r = 5
q = (12 + 8) & q
p = p + q
Print p + q + r`,
    options: ['13', '10', '7', '9'],
    correctIndex: 3,
    explanation: '12 + 8 = 20. 20 (0b10100) & 9 (0b01001) = 0. So q becomes 0. p = 4 + 0 = 4. Final output: 4 + 0 + 5 = 9.',
    traceSteps: [
      {
        step: 1,
        line: 1,
        description: 'Declare integer registers p, q, and r in local memory stack.',
        variables: { p: '—', q: '—', r: '—' },
      },
      {
        step: 2,
        line: 2,
        description: 'Initialize variables: p = 4, q = 9 (0b1001), and r = 5 (0b0101).',
        variables: { p: 4, q: 9, r: 5 },
      },
      {
        step: 3,
        line: 3,
        description: 'Evaluate parenthesis first: 12 + 8 = 20 (0b10100). Bitwise AND with q (9): 20 & 9 = 0. q is updated to 0.',
        variables: { p: 4, q: 0, r: 5 },
        highlightOp: '20 & 9 = 0',
      },
      {
        step: 4,
        line: 4,
        description: 'Update p = p + q = 4 + 0 = 4.',
        variables: { p: 4, q: 0, r: 5 },
      },
      {
        step: 5,
        line: 5,
        description: 'Print output: p + q + r = 4 + 0 + 5 = 9.',
        variables: { p: 4, q: 0, r: 5, output: 9 },
      },
    ],
  },
  {
    id: 'trace-2',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'Conditional Branching & Bitwise XOR',
    tag: 'If-Else & XOR',
    difficulty: 'Medium',
    codeSnippet: `Integer a, b, c
Set a = 6, b = 3, c = 0
if ((a ^ b) > 4)
    c = a & b
else
    c = a | b
End if
Print c + a`,
    options: ['8', '11', '7', '9'],
    correctIndex: 0,
    explanation: 'a ^ b = 6 ^ 3 = (0110 ^ 0011) = 0101 (5). Since 5 > 4 is TRUE, the if branch executes: c = a & b = 6 & 3 = 2. Print c + a = 2 + 6 = 8.',
    traceSteps: [
      {
        step: 1,
        line: 1,
        description: 'Declare integer registers a, b, and c.',
        variables: { a: '—', b: '—', c: '—' },
      },
      {
        step: 2,
        line: 2,
        description: 'Initialize registers: a = 6 (0b0110), b = 3 (0b0011), c = 0.',
        variables: { a: 6, b: 3, c: 0 },
      },
      {
        step: 3,
        line: 3,
        description: 'Test condition: a ^ b = 6 ^ 3 = 5 (0b0101). Check if 5 > 4: TRUE. Branch into THEN block.',
        variables: { a: 6, b: 3, c: 0, condition: '5 > 4 (TRUE)' },
      },
      {
        step: 4,
        line: 4,
        description: 'Execute true branch: c = a & b = 6 & 3 = (0b0110 & 0b0011) = 2. c is updated to 2.',
        variables: { a: 6, b: 3, c: 2 },
        highlightOp: '6 & 3 = 2',
      },
      {
        step: 5,
        line: 7,
        description: 'Skip the else block and exit condition. Prepare print statement.',
        variables: { a: 6, b: 3, c: 2 },
      },
      {
        step: 6,
        line: 8,
        description: 'Print c + a = 2 + 6 = 8.',
        variables: { a: 6, b: 3, c: 2, output: 8 },
      },
    ],
  },
  {
    id: 'trace-3',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'Nested Loop Accumulator',
    tag: 'Loops & Modulo',
    difficulty: 'Medium',
    codeSnippet: `Integer i, j, sum
Set sum = 0
for i = 1 to 3
    for j = 1 to 2
        sum = sum + (i * j)
    End for
End for
Print sum`,
    options: ['15', '18', '12', '24'],
    correctIndex: 1,
    explanation: 'i=1: j=1 -> +1, j=2 -> +2 (sum=3). i=2: j=1 -> +2, j=2 -> +4 (sum=9). i=3: j=1 -> +3, j=2 -> +6 (sum=18). Total sum = 18.',
    traceSteps: [
      {
        step: 1,
        line: 1,
        description: 'Allocate variables i, j, sum.',
        variables: { i: '—', j: '—', sum: '—' },
      },
      {
        step: 2,
        line: 2,
        description: 'Initialize sum to 0.',
        variables: { i: '—', j: '—', sum: 0 },
      },
      {
        step: 3,
        line: 3,
        description: 'Outer loop starts: i = 1.',
        variables: { i: 1, j: '—', sum: 0 },
      },
      {
        step: 4,
        line: 5,
        description: 'i=1, j=1: sum = sum + (1 * 1) = 0 + 1 = 1.',
        variables: { i: 1, j: 1, sum: 1 },
      },
      {
        step: 5,
        line: 5,
        description: 'i=1, j=2: sum = sum + (1 * 2) = 1 + 2 = 3. Inner loop completes for i=1.',
        variables: { i: 1, j: 2, sum: 3 },
      },
      {
        step: 6,
        line: 3,
        description: 'Outer loop advances: i = 2.',
        variables: { i: 2, j: '—', sum: 3 },
      },
      {
        step: 7,
        line: 5,
        description: 'i=2, j=1: sum = sum + (2 * 1) = 3 + 2 = 5.',
        variables: { i: 2, j: 1, sum: 5 },
      },
      {
        step: 8,
        line: 5,
        description: 'i=2, j=2: sum = sum + (2 * 2) = 5 + 4 = 9. Inner loop completes for i=2.',
        variables: { i: 2, j: 2, sum: 9 },
      },
      {
        step: 9,
        line: 3,
        description: 'Outer loop advances: i = 3 (final iteration).',
        variables: { i: 3, j: '—', sum: 9 },
      },
      {
        step: 10,
        line: 5,
        description: 'i=3, j=1: sum = sum + (3 * 1) = 9 + 3 = 12.',
        variables: { i: 3, j: 1, sum: 12 },
      },
      {
        step: 11,
        line: 5,
        description: 'i=3, j=2: sum = sum + (3 * 2) = 12 + 6 = 18. Loops complete.',
        variables: { i: 3, j: 2, sum: 18 },
      },
      {
        step: 12,
        line: 9,
        description: 'Print final sum: 18.',
        variables: { i: 3, j: 2, sum: 18, output: 18 },
      },
    ],
  },
  {
    id: 'trace-4',
    sectionId: 'pseudocode',
    sectionTitle: 'Pseudocode Execution',
    category: 'Technical',
    title: 'Bitwise Shift & Modulo Operation',
    tag: 'Shift & Modulo',
    difficulty: 'Hard',
    codeSnippet: `Integer x, y, res
Set x = 12, y = 2
res = (x >> y) + (x mod 5)
res = res ^ 3
Print res`,
    options: ['6', '5', '4', '7'],
    correctIndex: 0,
    explanation: 'x >> y = 12 >> 2 = 3. x mod 5 = 12 % 5 = 2. res = 3 + 2 = 5. Then res ^ 3 = 5 ^ 3 = (0b101 ^ 0b011) = 0b110 = 6.',
    traceSteps: [
      {
        step: 1,
        line: 1,
        description: 'Declare integer registers x, y, and res.',
        variables: { x: '—', y: '—', res: '—' },
      },
      {
        step: 2,
        line: 2,
        description: 'Assign initial values: x = 12 (0b1100), y = 2.',
        variables: { x: 12, y: 2, res: '—' },
      },
      {
        step: 3,
        line: 3,
        description: 'Right shift: 12 >> 2 = floor(12 / 4) = 3. Modulo: 12 mod 5 = 2. res = 3 + 2 = 5.',
        variables: { x: 12, y: 2, res: 5 },
        highlightOp: '12 >> 2 = 3, 12 % 5 = 2',
      },
      {
        step: 4,
        line: 4,
        description: 'Bitwise XOR with 3: 5 ^ 3 = (0b101 ^ 0b011) = 0b110 = 6. res is updated to 6.',
        variables: { x: 12, y: 2, res: 6 },
        highlightOp: '5 ^ 3 = 6',
      },
      {
        step: 5,
        line: 5,
        description: 'Print final res: 6.',
        variables: { x: 12, y: 2, res: 6, output: 6 },
      },
    ],
  },
];

export const PseudocodeTracer: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  // Bitwise helper calculator state
  const [valA, setValA] = useState(12);
  const [valB, setValB] = useState(8);

  const problem = TRACEABLE_PSEUDOCODE_PROBLEMS[selectedIdx];
  const steps = problem.traceSteps;
  const currentStep = steps[currentStepIdx] || steps[0];

  const handleNext = () => {
    if (currentStepIdx < steps.length - 1) {
      setCurrentStepIdx((s) => s + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx((s) => s - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIdx(0);
  };

  return (
    <div className="space-y-6">
      {/* Problem Selection Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-700/80 pb-4">
        {TRACEABLE_PSEUDOCODE_PROBLEMS.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => {
              setSelectedIdx(idx);
              setCurrentStepIdx(0);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
              selectedIdx === idx
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Problem {idx + 1}: {p.tag}
          </button>
        ))}
      </div>

      {/* Main Dual-Pane Tracer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Pane: Code & Stepper */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {problem.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Difficulty: {problem.difficulty} • Step {currentStepIdx + 1} of {steps.length}
              </p>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              {problem.tag}
            </span>
          </div>

          {/* Line-Numbered Code Block */}
          <div className="rounded-xl bg-slate-900 dark:bg-slate-950 border border-slate-800 p-4 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner space-y-1">
            {(problem.codeSnippet || '').split('\n').map((codeLine, lIdx) => {
              const lineNum = lIdx + 1;
              const isCurrent = currentStep.line === lineNum;
              return (
                <div
                  key={lIdx}
                  className={`flex items-center gap-3 px-2 py-1 rounded transition-colors ${
                    isCurrent
                      ? 'bg-purple-600/30 text-white font-bold border-l-2 border-purple-400'
                      : 'text-slate-400'
                  }`}
                >
                  <span className="text-slate-600 w-4 select-none text-right text-xs">
                    {lineNum}
                  </span>
                  <span className={isCurrent ? 'text-purple-200' : 'text-slate-300'}>
                    {codeLine}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-semibold cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentStepIdx === 0}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentStepIdx === steps.length - 1}
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition-colors shadow-xs"
              >
                Next Step <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Pane: State & Explanation */}
        <div className="lg:col-span-5 space-y-4">
          {/* Explanation Box */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              Current Step Action
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {currentStep.description}
            </p>
            {currentStep.highlightOp && (
              <div className="pt-1">
                <span className="inline-block text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-700">
                  {currentStep.highlightOp}
                </span>
              </div>
            )}
          </div>

          {/* Variables Register */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Variable Register Values
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(currentStep.variables).map(([name, val]) => (
                <div
                  key={name}
                  className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center"
                >
                  <span className="text-[10px] font-bold text-slate-400 font-mono uppercase block">
                    {name}
                  </span>
                  <span className="text-sm font-bold font-mono text-purple-600 dark:text-purple-400">
                    {String(val)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Real Bitwise Calculator Tool */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" /> Bitwise Evaluation Helper
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="text-[10px] text-slate-500 block mb-0.5">Value A</label>
                <input
                  type="number"
                  value={valA}
                  onChange={(e) => setValA(Number(e.target.value) || 0)}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 font-mono text-slate-800 dark:text-slate-200 text-xs"
                />
                <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                  {(valA >>> 0).toString(2).padStart(8, '0')}
                </span>
              </div>
              <div>
                <label className="text-[10px] text-slate-500 block mb-0.5">Value B</label>
                <input
                  type="number"
                  value={valB}
                  onChange={(e) => setValB(Number(e.target.value) || 0)}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 font-mono text-slate-800 dark:text-slate-200 text-xs"
                />
                <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                  {(valB >>> 0).toString(2).padStart(8, '0')}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 grid grid-cols-3 gap-1.5 text-center text-xs">
              <div className="p-1.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 block font-mono">A & B</span>
                <span className="font-bold text-slate-800 dark:text-white font-mono">{valA & valB}</span>
              </div>
              <div className="p-1.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 block font-mono">A | B</span>
                <span className="font-bold text-slate-800 dark:text-white font-mono">{valA | valB}</span>
              </div>
              <div className="p-1.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-400 block font-mono">A ^ B</span>
                <span className="font-bold text-slate-800 dark:text-white font-mono">{valA ^ valB}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
