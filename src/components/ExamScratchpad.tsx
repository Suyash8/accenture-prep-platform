'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Edit3, 
  X, 
  Trash2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function safeEvaluate(expr: string): string {
  const sanitized = expr.replace(/[^0-9+\-*/().\s]/g, '');
  if (!sanitized) return '';
  // Tokenize and evaluate safely with simple recursive-descent parser without eval/Function
  try {
    const tokens = sanitized.match(/\d+(?:\.\d+)?|[+\-*/()]/g) || [];
    let pos = 0;

    function parsePrimary(): number {
      const token = tokens[pos++];
      if (!token) throw new Error('Unexpected end of expression');
      if (token === '(') {
        const val = parseExpr();
        if (tokens[pos++] !== ')') throw new Error('Missing closing parenthesis');
        return val;
      }
      if (token === '-') {
        return -parsePrimary();
      }
      const num = Number(token);
      if (Number.isNaN(num)) throw new Error(`Invalid token: ${token}`);
      return num;
    }

    function parseFactor(): number {
      let val = parsePrimary();
      while (pos < tokens.length && (tokens[pos] === '*' || tokens[pos] === '/')) {
        const op = tokens[pos++];
        const next = parsePrimary();
        if (op === '*') val *= next;
        else if (op === '/') {
          if (next === 0) throw new Error('Division by zero');
          val /= next;
        }
      }
      return val;
    }

    function parseExpr(): number {
      let val = parseFactor();
      while (pos < tokens.length && (tokens[pos] === '+' || tokens[pos] === '-')) {
        const op = tokens[pos++];
        const next = parseFactor();
        if (op === '+') val += next;
        else if (op === '-') val -= next;
      }
      return val;
    }

    const result = parseExpr();
    if (pos < tokens.length) throw new Error('Extra tokens');
    return String(Math.round(result * 100000) / 100000);
  } catch {
    return 'Error';
  }
}

export const ExamScratchpad: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'scratchpad' | 'calculator'>('scratchpad');
  const [notes, setNotes] = useState('');
  
  // Calculator state
  const [calcInput, setCalcInput] = useState('');
  const [calcResult, setCalcResult] = useState('');

  const handleCalcClick = (val: string) => {
    if (val === 'C') {
      setCalcInput('');
      setCalcResult('');
    } else if (val === '=') {
      setCalcResult(safeEvaluate(calcInput));
    } else {
      setCalcInput((prev) => prev + val);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
        aria-label="Open Exam Scratchpad & Calculator"
      >
        <Edit3 className="w-4 h-4" /> Scratchpad & Calc
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden flex flex-col text-slate-800 dark:text-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="flex gap-1.5">
          <button
            onClick={() => setActiveTab('scratchpad')}
            className={`text-xs font-semibold px-3 py-1 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'scratchpad'
                ? 'bg-purple-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Scratchpad
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`text-xs font-semibold px-3 py-1 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-purple-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Calculator
          </button>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-md cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Scratchpad Body */}
      {activeTab === 'scratchpad' && (
        <div className="p-3 flex flex-col h-64">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Jot down calculations, rough variables, or elimination notes here during the test..."
            className="flex-1 w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs font-mono text-slate-800 dark:text-slate-200 resize-none focus:outline-hidden focus:border-purple-500"
          />
          <div className="flex justify-between items-center mt-2 text-xs">
            <span className="text-slate-400">Persists during your test session</span>
            <button
              onClick={() => setNotes('')}
              className="text-slate-400 hover:text-rose-500 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear
            </button>
          </div>
        </div>
      )}

      {/* Calculator Body */}
      {activeTab === 'calculator' && (
        <div className="p-3 space-y-2">
          {/* Display */}
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-right">
            <div className="text-xs font-mono text-slate-400 h-4 overflow-hidden">
              {calcInput || '0'}
            </div>
            <div className="text-lg font-mono font-bold text-slate-900 dark:text-white h-6 overflow-hidden">
              {calcResult || '= 0'}
            </div>
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-4 gap-1.5 font-mono text-xs">
            {['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((key) => (
              <button
                key={key}
                onClick={() => handleCalcClick(key)}
                className={`py-2 rounded-lg font-bold transition-colors cursor-pointer ${
                  key === '='
                    ? 'col-span-2 bg-purple-600 hover:bg-purple-700 text-white'
                    : key === 'C'
                    ? 'bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                    : ['/', '*', '-', '+'].includes(key)
                    ? 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-purple-600 dark:text-purple-400 border border-slate-200 dark:border-slate-700'
                    : 'bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
