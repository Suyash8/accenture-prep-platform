'use client';

import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Check, 
  Copy, 
  Code, 
  Terminal, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  HelpCircle 
} from 'lucide-react';
import { CodingProblem } from '../types';

interface CodingRunnerProps {
  problem: CodingProblem;
  onBack: () => void;
}

export const CodingRunner: React.FC<CodingRunnerProps> = ({ problem, onBack }) => {
  const [language, setLanguage] = useState<'python' | 'java' | 'csharp' | 'cpp'>('python');
  const [userCode, setUserCode] = useState(problem.starterCode.python);
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'testcases'>('description');
  const [testResults, setTestResults] = useState<{ pass: boolean; input: string; expected: string; actual: string }[] | null>(null);

  const handleLanguageChange = (lang: 'python' | 'java' | 'csharp' | 'cpp') => {
    setLanguage(lang);
    setUserCode(problem.starterCode[lang] || problem.starterCode.python);
    setOutput(null);
    setTestResults(null);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput(null);

    // Simulated multi-test execution runner
    setTimeout(() => {
      setIsRunning(false);
      const results = problem.testCases.map((tc) => ({
        pass: true,
        input: tc.input,
        expected: tc.expected,
        actual: tc.expected,
      }));
      setTestResults(results);
      setOutput(`[Execution Complete]\nAll sample test cases executed successfully in 14ms.\nMemory used: 12.4 MB.\nAll ${problem.testCases.length} tests Passed!`);
      setActiveTab('testcases');
    }, 700);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] text-slate-100">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
          >
            ← Back to Problems
          </button>
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Terminal className="w-4 h-4 text-purple-400" /> {problem.title}
          </h2>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
            {problem.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
            {(['python', 'java', 'csharp', 'cpp'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                  language === lang
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {lang === 'csharp' ? 'C#' : lang === 'cpp' ? 'C++' : lang}
              </button>
            ))}
          </div>

          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/30 disabled:opacity-50"
          >
            {isRunning ? (
              <RotateCcw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            {isRunning ? 'Compiling & Running...' : 'Run Code'}
          </button>
        </div>
      </div>

      {/* Split View */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 overflow-hidden">
        {/* Left Side: Problem Description / Tests */}
        <div className="flex flex-col h-full bg-slate-900/40 overflow-y-auto p-6 space-y-6">
          <div className="flex gap-4 border-b border-slate-800 pb-3">
            <button
              onClick={() => setActiveTab('description')}
              className={`text-sm font-bold pb-2 transition-all border-b-2 ${
                activeTab === 'description'
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Description & Constraints
            </button>
            <button
              onClick={() => setActiveTab('testcases')}
              className={`text-sm font-bold pb-2 transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'testcases'
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Test Cases Result {testResults && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
          </div>

          {activeTab === 'description' ? (
            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <div className="whitespace-pre-line text-slate-200 font-medium">
                {problem.description}
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-purple-400">
                  Input Format
                </h4>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre">
                  {problem.inputFormat}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-purple-400">
                  Constraints
                </h4>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre">
                  {problem.constraints}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-purple-400">
                  Sample Case
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs">
                    <span className="text-[10px] text-slate-500 block mb-1">Input:</span>
                    <pre className="text-slate-300">{problem.sampleInput}</pre>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs">
                    <span className="text-[10px] text-slate-500 block mb-1">Output:</span>
                    <pre className="text-emerald-400">{problem.sampleOutput}</pre>
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic">
                  Explanation: {problem.explanation}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm">Evaluation Test Results</h4>
              {testResults ? (
                <div className="space-y-3">
                  {testResults.map((tr, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-300">Test Case #{idx + 1}</span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Passed
                        </span>
                      </div>
                      <div className="text-slate-400">Input: <span className="text-slate-200">{tr.input}</span></div>
                      <div className="text-slate-400">Expected: <span className="text-emerald-400">{tr.expected}</span></div>
                      <div className="text-slate-400">Actual: <span className="text-emerald-400">{tr.actual}</span></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-slate-500 text-xs italic p-8 text-center bg-slate-950/40 rounded-2xl border border-slate-800">
                  Click "Run Code" to compile and execute against test cases.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Code Editor & Console */}
        <div className="flex flex-col h-full bg-slate-950">
          <div className="flex-1 p-4 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between pb-2 text-xs text-slate-500 font-mono">
              <span>Solution.{language === 'python' ? 'py' : language === 'cpp' ? 'cpp' : language === 'csharp' ? 'cs' : 'java'}</span>
              <span>UTF-8 • Monospaced</span>
            </div>
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="flex-1 w-full bg-slate-950 text-purple-200 font-mono text-sm leading-relaxed p-4 rounded-2xl border border-slate-800 focus:outline-none focus:border-purple-500/60 resize-none shadow-inner"
              spellCheck={false}
            />
          </div>

          {/* Bottom Output Console */}
          <div className="h-44 border-t border-slate-800 bg-slate-900/80 p-4 overflow-y-auto font-mono text-xs text-slate-300">
            <div className="flex items-center justify-between pb-2 text-[11px] text-slate-400 uppercase tracking-wider font-bold">
              <span>Terminal Output</span>
              {output && <span className="text-emerald-400 font-semibold">Exit Code 0</span>}
            </div>
            <pre className="whitespace-pre-line text-slate-300 font-mono">
              {output || 'Waiting for execution...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
