'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Edit3, 
  X, 
  Trash2 
} from 'lucide-react';

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
      try {
        // Safe evaluation for basic arithmetic
        const sanitized = calcInput.replace(/[^0-9+\-*/().]/g, '');
        // eslint-disable-next-line no-eval
        const res = Function(`'use strict'; return (${sanitized})`)();
        setCalcResult(String(res));
      } catch (e) {
        setCalcResult('Error');
      }
    } else {
      setCalcInput((prev) => prev + val);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-2xl shadow-purple-600/50 transition-all border border-purple-400/30"
      >
        <Edit3 className="w-4 h-4" /> Exam Scratchpad & Calc
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-slate-100 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between p-3.5 bg-slate-950 border-b border-slate-800">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('scratchpad')}
            className={`text-xs font-bold px-3 py-1 rounded-xl transition-all ${
              activeTab === 'scratchpad'
                ? 'bg-purple-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Scratchpad
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`text-xs font-bold px-3 py-1 rounded-xl transition-all ${
              activeTab === 'calculator'
                ? 'bg-purple-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Calculator
          </button>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 flex-1">
        {activeTab === 'scratchpad' ? (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px] text-slate-400">
              <span>Rough Work / Variable Traces</span>
              <button
                onClick={() => setNotes('')}
                className="text-rose-400 hover:text-rose-300 flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" /> Clear
              </button>
            </div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Jot down loop variables, binary conversions, or elimination notes here..."
              className="w-full h-56 bg-slate-950 rounded-2xl p-3 border border-slate-800 text-xs font-mono text-purple-200 focus:outline-none focus:border-purple-500 resize-none shadow-inner"
              spellCheck={false}
            />
          </div>
        ) : (
          <div className="space-y-3">
            {/* Calculator Display */}
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-right font-mono">
              <div className="text-xs text-slate-500 h-4">{calcInput || '0'}</div>
              <div className="text-xl font-bold text-white mt-1">{calcResult || '0'}</div>
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-4 gap-2 text-xs font-mono">
              {['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '%', '='].map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleCalcClick(btn)}
                  className={`p-2.5 rounded-xl font-bold transition-all ${
                    btn === '='
                      ? 'bg-purple-600 text-white col-span-1 shadow-md'
                      : btn === 'C'
                      ? 'bg-rose-900/60 text-rose-300 border border-rose-800'
                      : ['/', '*', '-', '+'].includes(btn)
                      ? 'bg-slate-800 text-purple-400 border border-slate-700'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
