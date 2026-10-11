'use client';

import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Award, 
  Footprints, 
  ArrowLeft, 
  Eye, 
  Sparkles,
  CheckCircle2,
  XCircle
} from 'lucide-react';

interface GameProps {
  onBack: () => void;
}

const GRID_SIZE = 4; // 4x4 Grid

export const PathFinderGame: React.FC<GameProps> = ({ onBack }) => {
  const [path, setPath] = useState<number[]>([]);
  const [userStepIndex, setUserStepIndex] = useState(0);
  const [showingPath, setShowingPath] = useState(false);
  const [gameState, setGameState] = useState<'idle' | 'memorizing' | 'walking' | 'success' | 'failed'>('idle');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  // Generate a continuous random path of length = level + 3
  const generatePath = (lvl: number) => {
    const pathLen = Math.min(lvl + 3, 10);
    const newPath: number[] = [];
    let currentCell = Math.floor(Math.random() * GRID_SIZE); // start in top row (0..3)
    newPath.push(currentCell);

    for (let i = 1; i < pathLen; i++) {
      const row = Math.floor(currentCell / GRID_SIZE);
      const col = currentCell % GRID_SIZE;
      const neighbors: number[] = [];

      // Valid adjacent moves (up, down, left, right)
      if (row > 0) neighbors.push(currentCell - GRID_SIZE);
      if (row < GRID_SIZE - 1) neighbors.push(currentCell + GRID_SIZE);
      if (col > 0) neighbors.push(currentCell - 1);
      if (col < GRID_SIZE - 1) neighbors.push(currentCell + 1);

      // Filter out immediate previous cell
      const valid = neighbors.filter((n) => !newPath.includes(n));
      if (valid.length === 0) break;
      const nextCell = valid[Math.floor(Math.random() * valid.length)];
      newPath.push(nextCell);
      currentCell = nextCell;
    }

    setPath(newPath);
    setUserStepIndex(0);
    setGameState('memorizing');
    setShowingPath(true);

    // Hide path after 2.5 seconds to test working memory
    setTimeout(() => {
      setShowingPath(false);
      setGameState('walking');
    }, 2800);
  };

  const handleStartGame = () => {
    setLevel(1);
    setScore(0);
    generatePath(1);
  };

  const handleCellClick = (cellIndex: number) => {
    if (gameState !== 'walking') return;

    if (cellIndex === path[userStepIndex]) {
      // Correct step
      const nextStep = userStepIndex + 1;
      setUserStepIndex(nextStep);

      if (nextStep === path.length) {
        // Cleared level!
        setScore((s) => s + level * 20);
        setGameState('success');
      }
    } else {
      // Stepped on wrong tile!
      setGameState('failed');
    }
  };

  const handleNextLevel = () => {
    const nextLvl = level + 1;
    setLevel(nextLvl);
    generatePath(nextLvl);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 text-slate-100">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
        </button>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
          Accenture Stage 0 Simulator
        </span>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 text-center space-y-6 backdrop-blur-md">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center justify-center gap-2">
            <Footprints className="w-6 h-6 text-cyan-400" /> Grid Path Finder
          </h2>
          <p className="text-slate-400 text-xs mt-1">
            Memorize the glowing path sequence, then retrace it step-by-step from memory.
          </p>
        </div>

        {/* Dashboard Status */}
        <div className="flex justify-around items-center p-4 bg-slate-950/80 rounded-2xl border border-slate-800">
          <div>
            <span className="text-xs text-slate-500 uppercase font-bold block">Level</span>
            <span className="text-3xl font-black text-cyan-400">{level}</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase font-bold block">Steps</span>
            <span className="text-3xl font-black text-purple-300">
              {gameState === 'walking' ? `${userStepIndex} / ${path.length}` : path.length}
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase font-bold block">Score</span>
            <span className="text-3xl font-black text-white">{score}</span>
          </div>
        </div>

        {gameState === 'idle' && (
          <div className="py-6 space-y-4">
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              Accenture uses grid navigation to evaluate executive function and spatial recall. Memorize the path before it disappears!
            </p>
            <button
              onClick={handleStartGame}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20"
            >
              Start Level 1
            </button>
          </div>
        )}

        {gameState === 'memorizing' && (
          <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider animate-pulse flex items-center justify-center gap-2">
            <Eye className="w-4 h-4" /> Memorize the glowing path...
          </div>
        )}

        {gameState === 'walking' && (
          <div className="text-purple-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
            Retrace the path step-by-step!
          </div>
        )}

        {gameState === 'success' && (
          <div className="py-4 space-y-3">
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-lg">
              <CheckCircle2 className="w-6 h-6" /> Level {level} Cleared!
            </div>
            <button
              onClick={handleNextLevel}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase transition-all shadow-md"
            >
              Next Level →
            </button>
          </div>
        )}

        {gameState === 'failed' && (
          <div className="py-4 space-y-3">
            <div className="flex items-center justify-center gap-2 text-rose-400 font-bold text-lg">
              <XCircle className="w-6 h-6" /> Wrong Step!
            </div>
            <button
              onClick={handleStartGame}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase transition-all shadow-md"
            >
              Try Again
            </button>
          </div>
        )}

        {/* 4x4 Grid Board */}
        {(gameState === 'memorizing' || gameState === 'walking' || gameState === 'success' || gameState === 'failed') && (
          <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto p-4 bg-slate-950 rounded-3xl border border-slate-800">
            {Array.from({ length: 16 }).map((_, cellIdx) => {
              const isPathTile = path.includes(cellIdx);
              const pathOrder = path.indexOf(cellIdx);
              const isStepped = path.slice(0, userStepIndex).includes(cellIdx);

              let tileClass = 'bg-slate-900 border-slate-800 hover:border-slate-700';

              if (showingPath && isPathTile) {
                tileClass = 'bg-cyan-500 text-slate-950 font-black shadow-lg shadow-cyan-500/50 scale-105 border-cyan-400';
              } else if (isStepped) {
                tileClass = 'bg-emerald-500 text-slate-950 font-black border-emerald-400 shadow-md shadow-emerald-500/30';
              }

              return (
                <button
                  key={cellIdx}
                  onClick={() => handleCellClick(cellIdx)}
                  disabled={showingPath || gameState !== 'walking'}
                  className={`w-16 h-16 rounded-2xl border text-sm font-bold flex items-center justify-center transition-all ${tileClass}`}
                >
                  {showingPath && isPathTile ? pathOrder + 1 : isStepped ? '✓' : ''}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
