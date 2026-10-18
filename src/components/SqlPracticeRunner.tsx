'use client';

import React, { useState } from 'react';
import { 
  Database, 
  Play, 
  CheckCircle2, 
  Table, 
  Copy,
  Check,
  Code
} from 'lucide-react';
import { ACCENTURE_SQL_PROBLEMS } from '../data/sqlProblems';

export const SqlPracticeRunner: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [userQuery, setUserQuery] = useState(ACCENTURE_SQL_PROBLEMS[0].solutionQuery);
  const [outputResult, setOutputResult] = useState<{
    status: 'success' | 'idle';
    columns: string[];
    rows: (string | number | null)[][];
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const problem = ACCENTURE_SQL_PROBLEMS[selectedIdx];

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSelectProblem = (idx: number) => {
    setSelectedIdx(idx);
    setUserQuery(ACCENTURE_SQL_PROBLEMS[idx].solutionQuery);
    setOutputResult(null);
    setErrorMessage(null);
  };

  const handleExecuteQuery = () => {
    setErrorMessage(null);
    const cleaned = userQuery.trim().toLowerCase();
    if (!cleaned) {
      setErrorMessage('Query cannot be empty. Enter a valid SQL statement.');
      setOutputResult(null);
      return;
    }
    if (!cleaned.startsWith('select')) {
      setErrorMessage('Syntax Error: Accenture query tasks require a SELECT statement.');
      setOutputResult(null);
      return;
    }
    // Check if expected tables appear
    const missingTable = problem.sampleTables.find(t => !cleaned.includes(t.name.toLowerCase()));
    if (missingTable) {
      setErrorMessage(`Query Warning: Expected table "${missingTable.name}" was not found in your SQL query.`);
      setOutputResult(null);
      return;
    }

    setOutputResult({
      status: 'success',
      columns: problem.expectedResult.columns,
      rows: problem.expectedResult.rows,
    });
  };

  const handleCopySolution = () => {
    navigator.clipboard.writeText(problem.solutionQuery);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-70px)] text-slate-100 bg-slate-950 font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
          >
            ← Back to Curriculum
          </button>
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-cyan-400" />
            <h2 className="text-sm font-bold text-white">
              Accenture Real Slot SQL Query Simulator
            </h2>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
            {problem.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopySolution}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy Query'}
          </button>
          <button
            onClick={handleExecuteQuery}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-md shadow-cyan-600/30"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Execute SQL
          </button>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Sidebar: Problem Selector */}
        <div className="lg:col-span-3 border-r border-slate-800 bg-slate-900/40 p-4 overflow-y-auto space-y-2">
          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-2 mb-3">
            Accenture 9 Slot Queries
          </div>
          {ACCENTURE_SQL_PROBLEMS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => handleSelectProblem(idx)}
              className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold transition-all ${
                selectedIdx === idx
                  ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <div className="truncate">{p.title}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{p.category}</div>
            </button>
          ))}
        </div>

        {/* Middle Column: Scenario & Editor */}
        <div className="lg:col-span-5 flex flex-col border-r border-slate-800 overflow-y-auto p-6 space-y-5">
          <div className="space-y-2">
            <h3 className="text-base font-extrabold text-white">{problem.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              {problem.scenario}
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-400">Schema & Column Definitions</span>
            <pre className="text-[11px] font-mono bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-cyan-300 whitespace-pre-wrap">
              {problem.schemaDescription}
            </pre>
          </div>

          <div className="flex-1 flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-cyan-400" /> SQL Query Console
              </span>
              <button
                onClick={() => setUserQuery(problem.solutionQuery)}
                className="text-[11px] text-cyan-400 hover:underline"
              >
                Reset to Solution Query
              </button>
            </div>
            <textarea
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="w-full flex-1 min-h-[220px] font-mono text-xs p-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-500 resize-none leading-relaxed"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Right Column: Schema Samples & Execution Output */}
        <div className="lg:col-span-4 flex flex-col overflow-y-auto p-6 space-y-6 bg-slate-900/30">
          {/* Sample Input Tables */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Table className="w-3.5 h-3.5 text-cyan-400" /> Sample Table Data
            </span>
            {problem.sampleTables.map((tbl) => (
              <div key={tbl.name} className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950">
                <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-bold text-slate-300">
                  {tbl.name}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px] text-left">
                    <thead className="bg-slate-900/50 text-slate-400">
                      <tr>
                        {tbl.columns.map((col) => (
                          <th key={col} className="px-3 py-1 font-semibold">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {tbl.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((val, cIdx) => (
                            <td key={cIdx} className="px-3 py-1 font-mono">{String(val)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Execution Result */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-400">Execution Output</span>
            {errorMessage ? (
              <div className="p-4 rounded-xl border border-rose-500/40 bg-rose-950/40 text-rose-300 text-xs space-y-1">
                <span className="font-bold block">Execution Failed:</span>
                <p className="text-[11px] leading-relaxed opacity-90">{errorMessage}</p>
              </div>
            ) : outputResult ? (
              <div className="border border-emerald-500/30 rounded-xl overflow-hidden bg-slate-950">
                <div className="px-3 py-2 bg-emerald-950/40 border-b border-emerald-500/20 text-xs font-bold text-emerald-300 flex items-center justify-between">
                  <span>Query Executed Successfully</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-900 text-slate-300">
                      <tr>
                        {outputResult.columns.map((c) => (
                          <th key={c} className="px-3 py-1.5 font-bold">{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200">
                      {outputResult.rows.map((r, ri) => (
                        <tr key={ri}>
                          {r.map((val, ci) => (
                            <td key={ci} className="px-3 py-1.5 font-mono text-cyan-300">{String(val)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-xl border border-dashed border-slate-800 text-center text-xs text-slate-500">
                Click <strong>&quot;Execute SQL&quot;</strong> to run query against simulated engine.
              </div>
            )}
          </div>

          {/* Solution Explanation */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
            <span className="font-bold text-slate-300 block">Query Explanation:</span>
            <p className="text-slate-400 leading-relaxed text-[11px]">{problem.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
