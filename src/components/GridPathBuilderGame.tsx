'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, RefreshCw, Repeat, Check, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';
import {
  generatePathPuzzle,
  validatePath,
  buildBlock,
  Block,
  PathPuzzle,
} from '@/lib/games/pathFinder';
import { saveGameScore } from '@/lib/storage';

const INSTRUCTION_SLIDES = [
  "This practice exercise will provide you with instructions and practice items for a task designed to measure Image rotation ability.\n\nPlease take the time to read the instructions carefully and use the practice items to familiarize yourself with the task.",
  "Your goal is to create a path from the icon on the left to the icon on the right by rotating the tiles and changing the arrow directions. You should try to generate a path in the least number of moves.",
  "Tap/click on a tile to select it.",
  "Tap/click ↻ to rotate the tile clockwise.",
  "Tap/click ⇄ to change the direction of route (flip).",
  "Arrow directions can point left, right, up, down, and around any angles of the tile path.",
  "Once the route is complete, select ✓. If you have successfully created a path, the task is complete. If you have not successfully created a path, you will be able to try again.",
  "Your goal is to create a valid path in the least number of moves. You do not need to rush. However, if you have been unable to find a valid path within the time limit, you will progress automatically to the next question.\n\nA timer is located at the bottom of the screen to indicate time remaining.",
  "The practice exercise will have 1 grid to solve.\n\nYou should take this opportunity to practice how to rotate and change arrow directions for all types of tile patterns.",
];

export const GridPathBuilderGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [matrixSize, setMatrixSize] = useState<number>(3); // 3 (9x9), 4 (12x12), 5 (15x15)

  // Initial puzzle created lazily
  const [puzzle, setPuzzle] = useState<PathPuzzle>(() => generatePathPuzzle(3));

  const [gameState, setGameState] = useState<'instructions' | 'playing' | 'results'>('instructions');
  const [instructionSlide, setInstructionSlide] = useState(0);

  const [blocks, setBlocks] = useState<Block[]>(() => puzzle.blocks);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(() => puzzle.blocks[0]?.id || 'block_0_0');
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(240);
  const [pathHighlight, setPathHighlight] = useState<{ row: number; col: number }[]>([]);
  const [shake, setShake] = useState(false);

  const handleRegeneratePuzzle = useCallback((size: number) => {
    const newPuz = generatePathPuzzle(size);
    setPuzzle(newPuz);
    setBlocks(newPuz.blocks);
    setSelectedBlockId(newPuz.blocks[0]?.id || 'block_0_0');
    setMoves(0);
    setTimeLeft(240);
    setPathHighlight([]);
    setShake(false);
  }, []);

  const handleSwitchMatrix = (size: number) => {
    setMatrixSize(size);
    handleRegeneratePuzzle(size);
  };

  // Timer Countdown
  useEffect(() => {
    if (gameState !== 'playing' || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState, timeLeft]);

  const handleRotate = useCallback(() => {
    if (!selectedBlockId || gameState !== 'playing') return;
    setBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== selectedBlockId) return b;
        return buildBlock(b.blockRow, b.blockCol, b.shapeType, b.rotateState + 1, b.flipState);
      })
    );
    setMoves((m) => m + 1);
  }, [selectedBlockId, gameState]);

  const handleFlip = useCallback(() => {
    if (!selectedBlockId || gameState !== 'playing') return;
    setBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== selectedBlockId) return b;
        return buildBlock(b.blockRow, b.blockCol, b.shapeType, b.rotateState, b.flipState + 1);
      })
    );
    setMoves((m) => m + 1);
  }, [selectedBlockId, gameState]);

  const handleSubmit = useCallback(() => {
    if (gameState !== 'playing') return;
    const result = validatePath(puzzle, blocks);
    setPathHighlight(result.path);

    if (result.success) {
      setTimeout(() => {
        setGameState('results');
        saveGameScore('grid-path', Math.max(10, 100 - moves * 2), 100);
      }, 700);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }, [puzzle, blocks, gameState, moves]);

  const cellPx = puzzle.gridSize === 9 ? 44 : puzzle.gridSize === 12 ? 34 : 28;
  const boardSizePx = puzzle.gridSize * cellPx;

  return (
    <div className="w-full bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-sans p-4 sm:p-6 flex flex-col transition-colors min-h-screen">
      {/* Top Header & Variant Selector Bar */}
      <div className="max-w-4xl w-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xs cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Games
        </button>

        {/* Practice Variant Tabs + Randomizer */}
        <div className="flex flex-wrap items-center gap-2" role="tablist">
          {[
            { size: 3, label: '3×3 Block Matrix' },
            { size: 4, label: '4×4 Block Matrix' },
            { size: 5, label: '5×5 Deep Space' },
          ].map((tab) => {
            const isActive = matrixSize === tab.size;
            return (
              <button
                key={tab.size}
                type="button"
                onClick={() => handleSwitchMatrix(tab.size)}
                className={`rounded-full border px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'border-slate-900 dark:border-purple-500 bg-slate-900 dark:bg-purple-600 text-white shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                {tab.label}
              </button>
            );
          })}

          <button
            onClick={() => handleRegeneratePuzzle(matrixSize)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs cursor-pointer transition-all ml-1"
          >
            <Shuffle className="w-3.5 h-3.5 text-amber-500" /> Randomize
          </button>
        </div>
      </div>

      {/* Main Game Stage Container */}
      <div className="max-w-4xl w-full mx-auto flex-1 flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg overflow-hidden relative min-h-[540px]">
        {/* Instruction Modal Overlay */}
        {gameState === 'instructions' && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
            <div className="relative w-full max-w-lg rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-2xl">
              {instructionSlide > 0 && (
                <button
                  type="button"
                  onClick={() => setInstructionSlide((s) => s - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
                >
                  <ChevronLeft className="size-6" />
                </button>
              )}

              {instructionSlide < INSTRUCTION_SLIDES.length - 1 && (
                <button
                  type="button"
                  onClick={() => setInstructionSlide((s) => s + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
                >
                  <ChevronRight className="size-6" />
                </button>
              )}

              <p className="whitespace-pre-line px-8 text-center text-sm leading-relaxed text-slate-800 dark:text-slate-200 min-h-[110px] flex items-center justify-center">
                {INSTRUCTION_SLIDES[instructionSlide]}
              </p>

              <div className="mt-6 flex justify-center gap-1.5">
                {INSTRUCTION_SLIDES.map((_, idx) => (
                  <span
                    key={idx}
                    className={`size-2 rounded-full border border-slate-400 transition-colors ${
                      idx === instructionSlide ? 'bg-slate-900 dark:bg-white' : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>

              {instructionSlide === INSTRUCTION_SLIDES.length - 1 && (
                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setGameState('playing')}
                    className="rounded-lg bg-slate-900 dark:bg-indigo-600 px-10 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-slate-800 dark:hover:bg-indigo-500 cursor-pointer transition-colors"
                  >
                    Start Game
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Results Screen */}
        {gameState === 'results' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-full max-w-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 text-center shadow-lg space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Well done!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">You completed the path finder assessment.</p>

              <div className="space-y-2 text-left text-slate-700 dark:text-slate-300 text-sm border-y border-slate-100 dark:border-slate-700 py-4">
                <p className="flex justify-between">
                  <span>Total moves:</span>
                  <strong className="text-slate-900 dark:text-white font-bold">{moves}</strong>
                </p>
                <p className="flex justify-between">
                  <span>Time remaining:</span>
                  <strong className="text-slate-900 dark:text-white font-mono font-bold">{timeLeft}s</strong>
                </p>
              </div>

              <button
                onClick={() => {
                  handleRegeneratePuzzle(matrixSize);
                  setGameState('playing');
                }}
                className="w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer transition-colors"
              >
                Play New Random Puzzle
              </button>
            </div>
          </div>
        )}

        {/* Game Board Stage */}
        {gameState === 'playing' && (
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <div className={`relative flex items-center justify-center gap-4 ${shake ? 'animate-bounce' : ''}`}>
              {/* Rocket Left Icon positioned centered on its 3x3 block */}
              <div
                className="absolute -left-12 flex items-center justify-center text-3xl transition-all duration-300 pointer-events-none select-none"
                style={{
                  top: `${(Math.floor(puzzle.startCell.row / 3) * 3 + 1) * cellPx + (cellPx / 2) - 18}px`,
                }}
                title={`Start Block (Row ${Math.floor(puzzle.startCell.row / 3) + 1})`}
              >
                🚀
              </div>

              {/* Grid Box with .game-surface */}
              <div
                className="game-surface overflow-hidden rounded-xl border-2 border-slate-400 dark:border-slate-600 shadow-xl relative"
                style={{ width: boardSizePx, height: boardSizePx }}
              >
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: `repeat(${puzzle.gridSize}, ${cellPx}px)`,
                    gridTemplateRows: `repeat(${puzzle.gridSize}, ${cellPx}px)`,
                  }}
                >
                  {Array.from({ length: puzzle.gridSize * puzzle.gridSize }).map((_, idx) => {
                    const r = Math.floor(idx / puzzle.gridSize);
                    const c = idx % puzzle.gridSize;
                    const blockR = Math.floor(r / 3);
                    const blockC = Math.floor(c / 3);
                    const blockId = `block_${blockR}_${blockC}`;
                    const block = blocks.find((b) => b.id === blockId);
                    const cell = block?.cells.find((cell) => cell.row === r && cell.col === c);

                    const isSelected = selectedBlockId === blockId;
                    const isDark = cell?.isDark || false;
                    const isHighlighted = pathHighlight.some((p) => p.row === r && p.col === c);

                    // Block borders
                    const isRightBlockEdge = (c + 1) % 3 === 0 && c !== puzzle.gridSize - 1;
                    const isBottomBlockEdge = (r + 1) % 3 === 0 && r !== puzzle.gridSize - 1;

                    return (
                      <button
                        key={`${r}-${c}`}
                        type="button"
                        onClick={() => setSelectedBlockId(blockId)}
                        className={`flex items-center justify-center border border-slate-200 dark:border-slate-700/60 transition-colors select-none ${
                          isDark ? 'bg-slate-600 dark:bg-slate-700 text-white' : 'bg-white dark:bg-slate-900/60'
                        } ${isHighlighted ? 'bg-indigo-600 dark:bg-indigo-500 text-white' : ''} ${
                          isSelected && isDark ? 'ring-2 ring-inset ring-amber-400' : ''
                        } ${isRightBlockEdge ? 'border-r-2 border-r-slate-400 dark:border-r-slate-500' : ''} ${
                          isBottomBlockEdge ? 'border-b-2 border-b-slate-400 dark:border-b-slate-500' : ''
                        }`}
                        style={{ width: cellPx, height: cellPx }}
                      >
                        {isDark && cell?.arrow && (
                          <span
                            className="inline-block text-xs font-bold leading-none select-none transition-transform"
                            style={{
                              transform:
                                cell.arrow === 'right'
                                  ? 'rotate(0deg)'
                                  : cell.arrow === 'down'
                                  ? 'rotate(90deg)'
                                  : cell.arrow === 'left'
                                  ? 'rotate(180deg)'
                                  : cell.arrow === 'up'
                                  ? 'rotate(270deg)'
                                  : cell.arrow === 'downright'
                                  ? 'rotate(45deg)'
                                  : cell.arrow === 'downleft'
                                  ? 'rotate(135deg)'
                                  : cell.arrow === 'upleft'
                                  ? 'rotate(-135deg)'
                                  : 'rotate(-45deg)',
                            }}
                          >
                            ➜
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Earth Destination Right Icon positioned centered on its 3x3 block */}
              <div
                className="absolute -right-12 flex items-center justify-center text-3xl transition-all duration-300 pointer-events-none select-none"
                style={{
                  top: `${(Math.floor(puzzle.endCell.row / 3) * 3 + 1) * cellPx + (cellPx / 2) - 18}px`,
                }}
                title={`Goal Block (Row ${Math.floor(puzzle.endCell.row / 3) + 1})`}
              >
                🌍
              </div>
            </div>

            {/* Controls Bar */}
            <div className="mt-8 flex w-full max-w-md items-center justify-center gap-4">
              {/* Circular Timer */}
              <div className="relative flex size-12 shrink-0 items-center justify-center">
                <svg width="48" height="48" className="-rotate-90">
                  <circle cx="24" cy="24" r={18} fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-700" strokeWidth="3" />
                  <circle
                    cx="24"
                    cy="24"
                    r={18}
                    fill="none"
                    stroke={timeLeft <= 60 ? '#dc2626' : 'currentColor'}
                    className={timeLeft <= 60 ? 'text-red-600' : 'text-slate-700 dark:text-slate-300'}
                    strokeWidth="3"
                    strokeDasharray={2 * Math.PI * 18}
                    strokeDashoffset={2 * Math.PI * 18 - (timeLeft / 240) * (2 * Math.PI * 18)}
                    strokeLinecap="round"
                  />
                </svg>
                <span className={`absolute inset-0 flex items-center justify-center text-xs font-semibold tabular-nums ${timeLeft <= 60 ? 'text-red-600' : 'text-slate-800 dark:text-slate-200'}`}>
                  {timeLeft}
                </span>
              </div>

              {/* Rotate Button */}
              <button
                type="button"
                onClick={handleRotate}
                disabled={!selectedBlockId}
                className="flex size-14 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-md transition-all hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 disabled:opacity-40 cursor-pointer"
                title="Rotate Clockwise (↻)"
              >
                <RefreshCw className="size-6 text-slate-700 dark:text-slate-200" />
              </button>

              {/* Flip Button */}
              <button
                type="button"
                onClick={handleFlip}
                disabled={!selectedBlockId}
                className="flex size-14 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-md transition-all hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 disabled:opacity-40 cursor-pointer"
                title="Change Route Direction (⇄)"
              >
                <Repeat className="size-6 text-slate-700 dark:text-slate-200" />
              </button>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="flex size-14 items-center justify-center rounded-xl border-2 border-emerald-600 bg-emerald-600 text-white shadow-md transition-all hover:bg-emerald-700 active:scale-95 cursor-pointer"
                title="Submit & Validate Path (✓)"
              >
                <Check className="size-7 stroke-[3]" />
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              Moves: <span className="font-semibold text-slate-800 dark:text-slate-200">{moves}</span> • Target: ≤{puzzle.minMoves} moves
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
