'use client';

import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { 
  Play, 
  RotateCcw, 
  Terminal, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ArrowLeft,
  EyeOff,
  Check,
  AlertCircle
} from 'lucide-react';
import { CodingProblem } from '../types';
import { 
  getCodingSession, 
  resetCodingSession, 
  getCodingDraft, 
  saveCodingDraft 
} from '../lib/storage';

interface CodingRunnerProps {
  problem: CodingProblem;
  onBack: () => void;
}

interface TestCaseResult {
  pass: boolean;
  input: string;
  expected: string;
  actual: string;
  hidden?: boolean;
}

export const CodingRunner: React.FC<CodingRunnerProps> = ({ problem, onBack }) => {
  const [language, setLanguage] = useState<'python' | 'java' | 'cpp'>('python');
  const [userCode, setUserCode] = useState(() => {
    const saved = getCodingDraft(problem.id, 'python');
    return saved || problem.starterCode.python;
  });
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'testcases'>('description');
  const [testResults, setTestResults] = useState<TestCaseResult[] | null>(null);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(() => {
    if (typeof window === 'undefined') return 45 * 60;
    const session = getCodingSession();
    const elapsed = Math.floor((Date.now() - session.startedAt) / 1000);
    return Math.max(0, session.durationSeconds - elapsed);
  });

  // Shared Stage 4 45-minute countdown session
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemainingSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLanguageChange = (lang: 'python' | 'java' | 'cpp') => {
    setLanguage(lang);
    const saved = getCodingDraft(problem.id, lang);
    setUserCode(saved || problem.starterCode[lang] || problem.starterCode.python);
    setOutput(null);
    setTestResults(null);
  };

  const handleCodeChange = (val: string | undefined) => {
    const code = val || '';
    setUserCode(code);
    saveCodingDraft(problem.id, language, code);
  };

  const handleResetToStarter = () => {
    const starter = problem.starterCode[language] || problem.starterCode.python;
    setUserCode(starter);
    saveCodingDraft(problem.id, language, starter);
    setOutput(null);
    setTestResults(null);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    try {
      const res = await fetch('/api/run-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          code: userCode,
          problemId: problem.id,
          testCases: problem.testCases?.filter((tc) => !tc.hidden),
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: 'Execution request failed' }));
        setIsRunning(false);
        setTestResults(null);
        setOutput(`Execution Error (Status ${res.status}):\n${errorData.error || 'Execution failed.'}`);
        setActiveTab('testcases');
        return;
      }

      const data = await res.json();
      setIsRunning(false);

      if (data.results) {
        setTestResults(data.results);
        setOutput(data.output || 'Execution finished.');
      } else {
        setOutput(data.error || 'Execution encountered an unexpected issue.');
      }
      setActiveTab('testcases');
    } catch {
      setIsRunning(false);
      setTestResults(null);
      setOutput('Could not reach the execution service. Nothing was evaluated.');
      setActiveTab('testcases');
    }
  };

  const minutes = Math.floor(timeRemainingSeconds / 60);
  const seconds = timeRemainingSeconds % 60;
  const timerFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const monacoLanguage = language === 'cpp' ? 'cpp' : language;

  return (
    <div className="flex flex-col h-[calc(100vh-70px)] text-slate-100 bg-slate-950 font-sans">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800 gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-xs px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 inline mr-1" /> Problems
          </button>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-purple-400" />
            <h2 className="text-sm font-bold text-white">
              {problem.title}
            </h2>
          </div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {problem.difficulty}
          </span>
        </div>

        {/* Stage 4 Shared 45-Min Timer & Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-amber-400">
            <Clock className="w-3.5 h-3.5" />
            <span>Stage 4 Session: {timerFormatted}</span>
          </div>

          {/* Language Selector */}
          <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
            {(['python', 'java', 'cpp'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`px-3 py-1 rounded text-xs font-semibold uppercase transition-colors cursor-pointer ${
                  language === lang
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {lang === 'cpp' ? 'C++' : lang}
              </button>
            ))}
          </div>

          <button
            onClick={handleResetToStarter}
            title="Reset code to initial boilerplate"
            className="p-2 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors cursor-pointer disabled:opacity-50 shadow-xs"
          >
            {isRunning ? (
              <RotateCcw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            {isRunning ? 'Compiling & Running...' : 'Run Test Cases'}
          </button>
        </div>
      </div>

      {/* Split View */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Side: Problem Description / Tests */}
        <div className="lg:col-span-5 flex flex-col h-full bg-slate-900 border-r border-slate-800 overflow-y-auto p-5 space-y-5">
          <div className="flex gap-4 border-b border-slate-800 pb-2.5">
            <button
              onClick={() => setActiveTab('description')}
              className={`text-xs font-bold pb-1.5 transition-colors border-b-2 cursor-pointer ${
                activeTab === 'description'
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Description & Constraints
            </button>
            <button
              onClick={() => setActiveTab('testcases')}
              className={`text-xs font-bold pb-1.5 transition-colors border-b-2 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'testcases'
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Test Results {testResults && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
          </div>

          {activeTab === 'description' ? (
            <div className="space-y-5 text-xs text-slate-300 leading-relaxed">
              <div className="whitespace-pre-line text-slate-200 font-medium bg-slate-950 p-4 rounded-xl border border-slate-800">
                {problem.description}
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider">
                  Input Format
                </h4>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre">
                  {problem.inputFormat}
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider">
                  Output Format
                </h4>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre">
                  {problem.outputFormat}
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider">
                  Constraints
                </h4>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre">
                  {problem.constraints}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider">
                  Sample Test Case
                </h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-[11px] text-slate-500 font-bold block mb-1">Input</span>
                    <pre className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                      {problem.sampleInput}
                    </pre>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-bold block mb-1">Expected Output</span>
                    <pre className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto">
                      {problem.sampleOutput}
                    </pre>
                  </div>
                  {problem.explanation && (
                    <p className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 text-slate-400 text-xs">
                      <strong>Explanation:</strong> {problem.explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {output && (
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Execution Output
                  </span>
                  <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
                    {output}
                  </pre>
                </div>
              )}

              {testResults && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Detailed Test Results ({testResults.filter((r) => r.pass).length}/{testResults.length} Passed)
                  </span>

                  <div className="space-y-2.5">
                    {testResults.map((tc, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border space-y-2 ${
                          tc.pass
                            ? 'bg-emerald-950/20 border-emerald-800/60'
                            : 'bg-rose-950/20 border-rose-800/60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs flex items-center gap-1.5 text-white">
                            {tc.hidden ? (
                              <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                            ) : null}
                            Test Case {idx + 1} {tc.hidden ? '(Hidden)' : '(Sample)'}
                          </span>
                          <span
                            className={`text-xs font-bold flex items-center gap-1 ${
                              tc.pass ? 'text-emerald-400' : 'text-rose-400'
                            }`}
                          >
                            {tc.pass ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5" /> Passed
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3.5 h-3.5" /> Failed
                              </>
                            )}
                          </span>
                        </div>

                        {!tc.hidden ? (
                          <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                            <div>
                              <span className="text-[10px] text-slate-500 uppercase block">Input</span>
                              <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300 text-xs whitespace-pre overflow-x-auto">
                                {tc.input}
                              </div>
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-500 uppercase block">Expected</span>
                              <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-emerald-400 text-xs whitespace-pre overflow-x-auto">
                                {tc.expected}
                              </div>
                            </div>
                            <div className="col-span-2">
                              <span className="text-[10px] text-slate-500 uppercase block">Your Output</span>
                              <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-200 text-xs whitespace-pre overflow-x-auto">
                                {tc.actual}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p className="text-xs text-slate-400 italic">
                            Hidden test cases evaluate edge conditions (e.g. boundaries, empty inputs, large scales).
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Monaco Code Editor */}
        <div className="lg:col-span-7 flex flex-col h-full bg-slate-950 overflow-hidden">
          <div className="flex-1 w-full h-full">
            <Editor
              height="100%"
              language={monacoLanguage}
              theme="vs-dark"
              value={userCode}
              onChange={handleCodeChange}
              options={{
                minimap: { enabled: false },
                fontSize: 13,
                fontFamily: 'var(--font-mono), monospace',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 4,
                lineNumbers: 'on',
                renderWhitespace: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
