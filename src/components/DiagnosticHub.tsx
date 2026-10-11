'use client';

import React, { useState } from 'react';
import { 
  Binary, 
  Network, 
  FileSpreadsheet, 
  HelpCircle, 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Sliders,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';

export const DiagnosticHub: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'bitwise' | 'networking' | 'excel' | 'sjt'>('bitwise');

  // Bitwise Playground states
  const [valA, setValA] = useState(12);
  const [valB, setValB] = useState(5);

  // Binary representations
  const toBin8 = (n: number) => (n >>> 0).toString(2).padStart(8, '0');

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 text-slate-100 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Curriculum
        </button>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
          Accenture High-Yield Topic Diagnostic Hub
        </span>
      </div>

      {/* Hero Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-950/80 via-purple-950/40 to-black border border-purple-500/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Deep Mastery Modules
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            High-Weightage Elimination Concepts
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Targeted visual mechanics for the 4 most commonly failed question types: Bitwise Operator Logic, OSI & WPA3 Networking, Excel Matrix Functions, and Situational Judgment Test (SJT) patterns.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={() => setActiveTab('bitwise')}
          className={`p-4 rounded-2xl border text-left transition-all ${
            activeTab === 'bitwise'
              ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg'
              : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
          }`}
        >
          <Binary className="w-5 h-5 text-purple-400 mb-1.5" />
          <div className="text-xs font-bold">Bitwise Operator Lab</div>
          <div className="text-[10px] text-slate-400">^, &, |, &lt;&lt;, &gt;&gt; Real-Time Tracing</div>
        </button>

        <button
          onClick={() => setActiveTab('networking')}
          className={`p-4 rounded-2xl border text-left transition-all ${
            activeTab === 'networking'
              ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg'
              : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
          }`}
        >
          <Network className="w-5 h-5 text-blue-400 mb-1.5" />
          <div className="text-xs font-bold">OSI, WPA3 & Cloud</div>
          <div className="text-[10px] text-slate-400">7-Layer, DNS/DHCP, SAE Security</div>
        </button>

        <button
          onClick={() => setActiveTab('excel')}
          className={`p-4 rounded-2xl border text-left transition-all ${
            activeTab === 'excel'
              ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-lg'
              : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
          }`}
        >
          <FileSpreadsheet className="w-5 h-5 text-emerald-400 mb-1.5" />
          <div className="text-xs font-bold">MS Office & Excel</div>
          <div className="text-[10px] text-slate-400">VLOOKUP, INDEX-MATCH, Shortcuts</div>
        </button>

        <button
          onClick={() => setActiveTab('sjt')}
          className={`p-4 rounded-2xl border text-left transition-all ${
            activeTab === 'sjt'
              ? 'bg-amber-600/20 border-amber-500 text-white shadow-lg'
              : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
          }`}
        >
          <HelpCircle className="w-5 h-5 text-amber-400 mb-1.5" />
          <div className="text-xs font-bold">Stage 1 Behavioral SJT</div>
          <div className="text-[10px] text-slate-400">Workplace Consistency Rules</div>
        </button>
      </div>

      {/* Tab 1: Bitwise Lab */}
      {activeTab === 'bitwise' && (
        <div className="p-6 rounded-3xl bg-[#0d1017] border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Binary className="w-5 h-5 text-purple-400" /> Interactive Bitwise Calculation Lab
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Test any two integers to observe binary alignment and bitwise operations tested in Accenture pseudocodes.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <label className="text-[10px] text-slate-400 block font-bold">Value A</label>
                <input
                  type="number"
                  value={valA}
                  onChange={(e) => setValA(Number(e.target.value))}
                  className="w-20 px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 text-xs font-mono font-bold text-purple-300"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-400 block font-bold">Value B</label>
                <input
                  type="number"
                  value={valB}
                  onChange={(e) => setValB(Number(e.target.value))}
                  className="w-20 px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 text-xs font-mono font-bold text-sky-300"
                />
              </div>
            </div>
          </div>

          {/* Operation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* XOR */}
            <div className="p-4 rounded-2xl bg-black/40 border border-purple-500/30 space-y-2">
              <span className="text-xs font-bold text-purple-400 block">XOR (A ^ B)</span>
              <div className="text-2xl font-black font-mono text-white">{valA ^ valB}</div>
              <div className="text-[11px] font-mono text-slate-400">Binary: {toBin8(valA ^ valB)}</div>
              <p className="text-[10px] text-slate-500">Output 1 when bits differ. Note: 7 ^ 2 = 5 (platform errata is 0).</p>
            </div>

            {/* AND */}
            <div className="p-4 rounded-2xl bg-black/40 border border-blue-500/30 space-y-2">
              <span className="text-xs font-bold text-blue-400 block">AND (A & B)</span>
              <div className="text-2xl font-black font-mono text-white">{valA & valB}</div>
              <div className="text-[11px] font-mono text-slate-400">Binary: {toBin8(valA & valB)}</div>
              <p className="text-[10px] text-slate-500">Output 1 only when both bits are 1.</p>
            </div>

            {/* OR */}
            <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-2">
              <span className="text-xs font-bold text-emerald-400 block">OR (A | B)</span>
              <div className="text-2xl font-black font-mono text-white">{valA | valB}</div>
              <div className="text-[11px] font-mono text-slate-400">Binary: {toBin8(valA | valB)}</div>
              <p className="text-[10px] text-slate-500">Output 1 if either bit is 1.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Networking */}
      {activeTab === 'networking' && (
        <div className="p-6 rounded-3xl bg-[#0d1017] border border-white/10 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Network className="w-5 h-5 text-blue-400" /> OSI 7-Layer & Security Protocols Cheat Reference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <h4 className="font-bold text-blue-300">OSI Transport vs Network Layer</h4>
              <p className="text-slate-400 leading-relaxed">
                <strong>Layer 4 (Transport):</strong> Reliable in-order delivery, flow control, TCP (ports 80, 443), UDP (DNS 53).<br />
                <strong>Layer 3 (Network):</strong> IP addressing, packet routing, ICMP ping.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <h4 className="font-bold text-blue-300">Wireless & Cloud Model</h4>
              <p className="text-slate-400 leading-relaxed">
                <strong>WPA3 SAE:</strong> Simultaneous Authentication of Equals blocks offline password attacks.<br />
                <strong>Shared Responsibility:</strong> Cloud Provider secures physical DC/hypervisor; Customer secures application code & encryption.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Excel */}
      {activeTab === 'excel' && (
        <div className="p-6 rounded-3xl bg-[#0d1017] border border-white/10 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-emerald-400" /> MS Excel Key Formulas & Keyboard Shortcuts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
              <span className="font-bold text-emerald-300 block">Select Entire Column</span>
              <div className="font-mono text-sm font-black text-white">Ctrl + Space</div>
              <p className="text-[11px] text-slate-400">Instantly highlights the entire vertical column.</p>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
              <span className="font-bold text-emerald-300 block">Select Entire Row</span>
              <div className="font-mono text-sm font-black text-white">Shift + Space</div>
              <p className="text-[11px] text-slate-400">Instantly highlights the active row.</p>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
              <span className="font-bold text-emerald-300 block">Word Insert Date</span>
              <div className="font-mono text-sm font-black text-white">Alt + Shift + D</div>
              <p className="text-[11px] text-slate-400">Inserts current date field (Alt+Shift+T for time).</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: SJT */}
      {activeTab === 'sjt' && (
        <div className="p-6 rounded-3xl bg-[#0d1017] border border-white/10 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" /> Stage 1: Behavioral Situational Judgment Test (SJT) Guide
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
            Non-elimination round (~50–54 questions in 20 minutes). Evaluates workplace integrity, client centricity, and response consistency across inverted scenarios.
          </p>
          <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/30 text-xs space-y-2">
            <span className="font-bold text-amber-300 block">Core Consistency Principle:</span>
            <p className="text-slate-300">
              When encountering duplicate workplace dilemmas with rephrased wording, always prioritize:
              <strong> 1. Open communication with team leads</strong>, <strong> 2. Immediate remediation before client escalation</strong>, and <strong> 3. Accountability over shifting blame</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
