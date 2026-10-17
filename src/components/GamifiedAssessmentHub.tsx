'use client';

import React from 'react';
import { 
  Play, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Zap,
  Brain,
  Compass
} from 'lucide-react';

interface GamifiedHubProps {
  onPlayGame: (gameId: 'quick-fire-math' | 'memory-maze' | 'path-finder') => void;
}

export const GamifiedAssessmentHub: React.FC<GamifiedHubProps> = ({ onPlayGame }) => {
  return (
    <div className="space-y-12 py-4">
      {/* Hero Banner modeled on BuildUForward */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#131627] to-[#0c0e18] p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Accenture 2026 Gamified Hiring Assessment Suite
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Accenture Gamified Assessment — Free Practice
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Accenture uses gamified assessment rounds instead of traditional cognitive aptitude tests. Practice the real interactive games — <strong>Memory Maze</strong>, <strong>Quick-Fire Math</strong>, and <strong>Path Finder</strong> — completely free with zero signup required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 12 Interactive Variants
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Exact Board Mechanics
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant Gameplay (No Signup)
            </span>
          </div>
        </div>
      </div>

      {/* 3 Dedicated Game Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Game 1: Memory Maze */}
        <div className="bg-[#101322] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Working Memory</span>
                <span className="text-emerald-400 font-mono">4 Variants</span>
              </div>
              <h3 className="text-xl font-black text-white mt-1 group-hover:text-emerald-300 transition-colors">
                Memory Maze
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Move between boxes in a grid containing invisible walls. Each time you hit a wall, you bounce back to the beginning. Collect the key(s) and reach the door in minimum attempts!
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Practice Sets:</span>
                <span className="font-semibold text-white">Find the Key, Practice 2, 4×4 Grid, 4×4 Two Keys</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Timer Budget:</span>
                <span className="font-semibold text-emerald-400">4:00 Minutes</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => onPlayGame('memory-maze')}
              className="w-full py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 shadow-lg cursor-pointer transition-all"
            >
              <Play className="w-4 h-4 fill-current" /> Practice Free →
            </button>
          </div>
        </div>

        {/* Game 2: Quick-Fire Math */}
        <div className="bg-[#101322] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Cognitive Speed</span>
                <span className="text-indigo-400 font-mono">3 Sets (75 Qs)</span>
              </div>
              <h3 className="text-xl font-black text-white mt-1 group-hover:text-indigo-300 transition-colors">
                Quick-Fire Math (Bubble Math)
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Click 3 floating bubbles in strict numerical order from <strong>LOWEST to HIGHEST</strong> value before the 15-second timer runs out. Deselect by clicking again.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Practice Sets:</span>
                <span className="font-semibold text-white">Speed Techniques, Practice 2, Practice 3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Timer Budget:</span>
                <span className="font-semibold text-indigo-300">15s / Question</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => onPlayGame('quick-fire-math')}
              className="w-full py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 shadow-lg cursor-pointer transition-all"
            >
              <Play className="w-4 h-4 fill-current" /> Practice Free →
            </button>
          </div>
        </div>

        {/* Game 3: Path Finder */}
        <div className="bg-[#101322] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Spatial Orientation</span>
                <span className="text-cyan-400 font-mono">3 Matrix Sizes</span>
              </div>
              <h3 className="text-xl font-black text-white mt-1 group-hover:text-cyan-300 transition-colors">
                Path Finder (Space Path)
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Connect the Rocket (left) to the Earth (right) across a multi-block grid. Select 3×3 blocks to rotate clockwise (↻) or flip direction (⇄), then submit (✓) to validate.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Practice Sets:</span>
                <span className="font-semibold text-white">3×3 (9×9), 4×4 (12×12), 5×5 (15×15)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Timer Budget:</span>
                <span className="font-semibold text-cyan-300">4:00 Minutes</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => onPlayGame('path-finder')}
              className="w-full py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 shadow-lg cursor-pointer transition-all"
            >
              <Play className="w-4 h-4 fill-current" /> Practice Free →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
