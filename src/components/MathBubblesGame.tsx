'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Award, Zap, Timer, CheckCircle2, ArrowLeft } from 'lucide-react';

interface GameProps {
  onBack: () => void;
}

export const MathBubblesGame: React.FC<GameProps> = ({ onBack }) => {
  const [target, setTarget] = useState(15);
  const [bubbles, setBubbles] = useState<number[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Generate game round
  const generateRound = () => {
    const newTarget = Math.floor(Math.random() * 20) + 10; // Target between 10 and 30
    // Guarantee at least one valid 2 or 3-bubble combination
    const p1 = Math.floor(Math.random() * (newTarget - 3)) + 1;
    const p2 = newTarget - p1;
    const distractors = Array.from({ length: 6 }, () => Math.floor(Math.random() * 15) + 1);
    const roundBubbles = [p1, p2, ...distractors].sort(() => Math.random() - 0.5);

    setTarget(newTarget);
    setBubbles(roundBubbles);
    setSelectedIndices([]);
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(45);
    setIsPlaying(true);
    setGameOver(false);
    generateRound();
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsPlaying(false);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleBubbleClick = (index: number) => {
    if (!isPlaying) return;
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
      return;
    }

    const nextSelection = [...selectedIndices, index];
    const currentSum = nextSelection.reduce((acc, curr) => acc + bubbles[curr], 0);

    if (currentSum === target) {
      setScore((s) => s + 10);
      generateRound();
    } else if (currentSum > target) {
      // Exceeded target: flash penalty & clear
      setSelectedIndices([]);
    } else {
      setSelectedIndices(nextSelection);
    }
  };

  const currentSum = selectedIndices.reduce((acc, idx) => acc + bubbles[idx], 0);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 text-slate-100">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
        </button>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
          Accenture Game-Based Assessment Simulator
        </span>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 text-center space-y-6 backdrop-blur-md">
        <div>
          <h2 className="text-2xl font-black text-white">Math Bubbles: Speed & Working Memory</h2>
          <p className="text-slate-400 text-xs mt-1">
            Pop bubbles whose values sum EXACTLY to the Target Number. Tested in Accenture Stage 0.
          </p>
        </div>

        {/* Dashboard Header */}
        <div className="flex justify-around items-center p-4 bg-slate-950/80 rounded-2xl border border-slate-800">
          <div>
            <span className="text-xs text-slate-500 uppercase font-bold block">Target</span>
            <span className="text-4xl font-black text-amber-400">{target}</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase font-bold block">Current Sum</span>
            <span className={`text-3xl font-black ${currentSum === target ? 'text-emerald-400' : 'text-purple-300'}`}>
              {currentSum}
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase font-bold block">Score</span>
            <span className="text-3xl font-black text-white">{score}</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase font-bold block">Time</span>
            <span className={`text-2xl font-mono font-bold ${timeLeft < 10 ? 'text-rose-400 animate-pulse' : 'text-slate-300'}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        {!isPlaying && !gameOver && (
          <div className="py-8 space-y-4">
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Test your speed under pressure. Select numbers that add up to the target as fast as possible.
            </p>
            <button
              onClick={startGame}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
            >
              Start Game (45s)
            </button>
          </div>
        )}

        {gameOver && (
          <div className="py-8 space-y-4">
            <Award className="w-12 h-12 text-amber-400 mx-auto" />
            <h3 className="text-2xl font-black text-white">Round Completed!</h3>
            <p className="text-purple-300 text-sm font-semibold">
              Final Score: {score} points ({Math.round(score / 10)} rounds cleared)
            </p>
            <button
              onClick={startGame}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all shadow-md"
            >
              Play Again
            </button>
          </div>
        )}

        {isPlaying && (
          <div className="grid grid-cols-4 gap-4 py-4 max-w-md mx-auto">
            {bubbles.map((val, idx) => {
              const isSelected = selectedIndices.includes(idx);
              return (
                <button
                  key={idx}
                  onClick={() => handleBubbleClick(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full font-black text-xl flex items-center justify-center transition-all transform active:scale-95 shadow-md ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-300 scale-105'
                      : 'bg-slate-800 text-purple-200 hover:bg-purple-600/30 border border-slate-700'
                  }`}
                >
                  {val}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
