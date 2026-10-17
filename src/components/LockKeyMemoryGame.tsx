'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';
import {
  generateMazeLevel,
  MazeLevelConfig,
  Wall,
  isAdjacent,
} from '@/lib/games/memoryMaze';
import { saveGameScore } from '@/lib/storage';

const INSTRUCTION_SLIDES = [
  "In this exercise, you must move between boxes in a grid that contains a maze of invisible walls. You can navigate up, down, left or right, but NOT diagonally. You can also navigate back over the path you have taken.",
  "Each time you hit a wall, you will be returned back to the beginning of the maze and must start over. The walls do not move, but you must remember where they are located.",
  "Your goal is to collect the key and reach the door in the least number of attempts. You must collect the key before you can enter the door.",
  "You do not need to rush. However, if you have been unable to solve the maze within the time limit, you will progress automatically to the next maze. A timer is located at the bottom of the screen to indicate time remaining.",
  "The practice exercise will have 1 maze. Press the START button to begin.",
];

function WallLine({ wall, gridSize }: { wall: Wall; gridSize: number }) {
  const [r1, c1, r2, c2] = wall;
  const isHorizontal = r1 !== r2;
  const maxR = isHorizontal ? Math.max(r1, r2) : r1;
  const minC = isHorizontal ? c1 : Math.min(c1, c2);

  return (
    <div
      className="pointer-events-none absolute z-30 bg-red-500 shadow-md transition-opacity"
      style={
        isHorizontal
          ? {
              left: `${(minC / gridSize) * 100}%`,
              top: `${(maxR / gridSize) * 100}%`,
              width: `${100 / gridSize}%`,
              height: '4px',
              transform: 'translateY(-2px)',
            }
          : {
              left: `${((minC + 1) / gridSize) * 100}%`,
              top: `${(maxR / gridSize) * 100}%`,
              width: '4px',
              height: `${100 / gridSize}%`,
              transform: 'translateX(-2px)',
            }
      }
    />
  );
}

function CircularTimer({ seconds, totalSeconds, onExpire }: { seconds: number; totalSeconds: number; onExpire: () => void }) {
  const isUrgent = seconds <= 30;
  const pct = totalSeconds > 0 ? (seconds / totalSeconds) * 100 : 0;
  const circumference = 2 * Math.PI * 22;

  useEffect(() => {
    if (seconds <= 0) onExpire();
  }, [seconds, onExpire]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formatted = `${mins}:${secs.toString().padStart(2, '0')}`;

  return (
    <div className="relative flex size-14 shrink-0 items-center justify-center">
      <svg width="56" height="56" className="-rotate-90" aria-hidden="true">
        <circle cx="28" cy="28" r={22} fill="none" stroke="currentColor" className="text-slate-200 dark:text-slate-700" strokeWidth="4" />
        <circle
          cx="28"
          cy="28"
          r={22}
          fill="none"
          stroke={isUrgent ? '#dc2626' : 'currentColor'}
          className={isUrgent ? 'text-red-600' : 'text-slate-700 dark:text-slate-300'}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (pct / 100) * circumference}
          strokeLinecap="round"
        />
      </svg>
      <span className={`absolute inset-0 flex items-center justify-center text-xs font-semibold tabular-nums ${isUrgent ? 'text-red-600' : 'text-slate-800 dark:text-slate-200'}`}>
        {formatted}
      </span>
    </div>
  );
}

export const LockKeyMemoryGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [variant, setVariant] = useState<'3x3-1' | '3x3-2' | '4x4-1' | '4x4-2' | '5x5-1'>('3x3-1');

  // Deterministic fallback maze definition for SSR prerendering
  const [levelConfig, setLevelConfig] = useState<MazeLevelConfig>({
    gridSize: 3,
    startPos: [0, 0],
    doorPos: [2, 2],
    keyPositions: [[0, 2]],
    walls: [
      [0, 1, 1, 1],
      [1, 1, 2, 1],
    ],
  });

  const [gameState, setGameState] = useState<'instructions' | 'playing' | 'finished'>('instructions');
  const [instructionSlide, setInstructionSlide] = useState(0);

  const [playerPos, setPlayerPos] = useState<[number, number]>([0, 0]);
  const [collectedKeys, setCollectedKeys] = useState<Set<string>>(new Set());
  const [attempts, setAttempts] = useState(0);
  const [timeLeft, setTimeLeft] = useState(240);
  const [hitWall, setHitWall] = useState<Wall | null>(null);
  const [isWin, setIsWin] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);

  const wallTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const regenerateMaze = useCallback((size: number, keys: number, toPlaying: boolean = false) => {
    if (wallTimeoutRef.current) clearTimeout(wallTimeoutRef.current);
    const newLvl = generateMazeLevel(size, keys);
    setLevelConfig(newLvl);
    setPlayerPos(newLvl.startPos);
    setCollectedKeys(new Set());
    setAttempts(0);
    setTimeLeft(240);
    setHitWall(null);
    setIsWin(false);
    setTimeTaken(0);
    setGameState(toPlaying ? 'playing' : 'instructions');
  }, []);

  // Client-side initial randomization
  useEffect(() => {
    regenerateMaze(3, 1, false);
    return () => {
      if (wallTimeoutRef.current) clearTimeout(wallTimeoutRef.current);
    };
  }, [regenerateMaze]);

  const handleVariantSwitch = (v: '3x3-1' | '3x3-2' | '4x4-1' | '4x4-2' | '5x5-1') => {
    setVariant(v);
    const size = v.startsWith('3x3') ? 3 : v.startsWith('4x4') ? 4 : 5;
    const keys = v.endsWith('-2') ? 2 : 1;
    regenerateMaze(size, keys, false);
  };

  // Timer Countdown
  useEffect(() => {
    if (gameState !== 'playing' || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState, timeLeft]);

  const handleExpire = useCallback(() => {
    if (gameState === 'playing') {
      setIsWin(false);
      setTimeTaken(240 - timeLeft);
      setGameState('finished');
    }
  }, [gameState, timeLeft]);

  const handleStep = useCallback((r: number, c: number) => {
    if (gameState !== 'playing') return;
    const [pr, pc] = playerPos;
    if (!isAdjacent(pr, pc, r, c)) return;

    // Check Wall Collision
    const isBlocked = levelConfig.walls.some(
      ([w1r, w1c, w2r, w2c]) =>
        (w1r === pr && w1c === pc && w2r === r && w2c === c) ||
        (w1r === r && w1c === c && w2r === pr && w2c === pc)
    );

    if (isBlocked) {
      setHitWall([pr, pc, r, c]);
      if (wallTimeoutRef.current) clearTimeout(wallTimeoutRef.current);
      wallTimeoutRef.current = setTimeout(() => setHitWall(null), 800);
      setPlayerPos(levelConfig.startPos);
      setCollectedKeys(new Set());
      setAttempts((a) => a + 1);
      return;
    }

    // Door check without all keys
    const isDoor = r === levelConfig.doorPos[0] && c === levelConfig.doorPos[1];
    const allKeysCollected = collectedKeys.size >= levelConfig.keyPositions.length;
    if (isDoor && !allKeysCollected) {
      setHitWall([pr, pc, r, c]);
      if (wallTimeoutRef.current) clearTimeout(wallTimeoutRef.current);
      wallTimeoutRef.current = setTimeout(() => setHitWall(null), 800);
      setPlayerPos(levelConfig.startPos);
      setCollectedKeys(new Set());
      setAttempts((a) => a + 1);
      return;
    }

    // Move Player
    setPlayerPos([r, c]);

    // Check Key Pickup
    const isKeyTile = levelConfig.keyPositions.some(([kr, kc]) => kr === r && kc === c);
    const updatedKeys = new Set(collectedKeys);
    if (isKeyTile) {
      updatedKeys.add(`${r},${c}`);
      setCollectedKeys(updatedKeys);
    }

    // Check Win
    if (isDoor && updatedKeys.size >= levelConfig.keyPositions.length) {
      const duration = 240 - timeLeft;
      setTimeTaken(duration);
      setIsWin(true);
      setGameState('finished');
      saveGameScore('memory-maze', Math.max(10, 100 - attempts * 5), 100);
    }
  }, [gameState, playerPos, levelConfig, collectedKeys, timeLeft, attempts]);

  const requiredKeysCount = levelConfig.keyPositions.length;
  const keysLabel = requiredKeysCount === 1 ? '1 KEY' : `${requiredKeysCount} KEYS`;

  const dpadDirections = [
    { dr: -1, dc: 0, pos: 'top', icon: ChevronUp, offset: '-top-9 left-1/2 -translate-x-1/2' },
    { dr: 1, dc: 0, pos: 'bottom', icon: ChevronDown, offset: '-bottom-9 left-1/2 -translate-x-1/2' },
    { dr: 0, dc: -1, pos: 'left', icon: ChevronLeft, offset: '-left-9 top-1/2 -translate-y-1/2' },
    { dr: 0, dc: 1, pos: 'right', icon: ChevronRight, offset: '-right-9 top-1/2 -translate-y-1/2' },
  ];

  const cellSize = levelConfig.gridSize >= 5 ? 'minmax(58px, 11vmin)' : levelConfig.gridSize >= 4 ? 'minmax(72px, 15vmin)' : 'minmax(100px, 22vmin)';

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
            { id: '3x3-1', label: '3×3 (1 Key)' },
            { id: '3x3-2', label: '3×3 (2 Keys)' },
            { id: '4x4-1', label: '4×4 (1 Key)' },
            { id: '4x4-2', label: '4×4 (2 Keys)' },
            { id: '5x5-1', label: '5×5 Maze' },
          ].map((v) => {
            const isActive = variant === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => handleVariantSwitch(v.id as any)}
                className={`rounded-full border px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'border-slate-900 dark:border-purple-500 bg-slate-900 dark:bg-purple-600 text-white shadow-xs'
                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                {v.label}
              </button>
            );
          })}

          <button
            onClick={() => {
              const size = variant.startsWith('3x3') ? 3 : variant.startsWith('4x4') ? 4 : 5;
              const keys = variant.endsWith('-2') ? 2 : 1;
              regenerateMaze(size, keys, true);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-xs cursor-pointer transition-all ml-1"
          >
            <Shuffle className="w-3.5 h-3.5 text-emerald-500" /> Randomize
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl w-full mx-auto flex-1 flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg overflow-hidden relative min-h-[520px]">
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

              <p className="px-8 text-center text-sm leading-relaxed text-slate-800 dark:text-slate-200 min-h-[72px] flex items-center justify-center">
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

        {/* Finished Modal Screen */}
        {gameState === 'finished' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-full max-w-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 text-center shadow-lg space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isWin ? 'Maze Solved!' : "Time's Up!"}
              </h3>

              <div className="space-y-2 text-left text-slate-700 dark:text-slate-300 text-sm border-y border-slate-100 dark:border-slate-700 py-4">
                <p className="flex justify-between">
                  <span>Attempts:</span>
                  <strong className="text-slate-900 dark:text-white font-bold">{attempts}</strong>
                </p>
                <p className="flex justify-between">
                  <span>Time taken:</span>
                  <strong className="text-slate-900 dark:text-white font-mono font-bold">
                    {Math.floor(timeTaken / 60)}:{(timeTaken % 60).toString().padStart(2, '0')}
                  </strong>
                </p>
              </div>

              <button
                onClick={() => {
                  const size = variant.startsWith('3x3') ? 3 : variant.startsWith('4x4') ? 4 : 5;
                  const keys = variant.endsWith('-2') ? 2 : 1;
                  regenerateMaze(size, keys, true);
                }}
                className="w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer transition-colors"
              >
                Play New Random Maze
              </button>
            </div>
          </div>
        )}

        {/* Board & Player Screen */}
        {gameState === 'playing' && (
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="relative">
              {/* Outer Board Box with game-surface */}
              <div className="game-surface relative overflow-hidden rounded-xl border-2 border-slate-400 dark:border-slate-600 shadow-xl">
                <div
                  className="relative grid"
                  style={{
                    gridTemplateColumns: `repeat(${levelConfig.gridSize}, ${cellSize})`,
                    gridTemplateRows: `repeat(${levelConfig.gridSize}, ${cellSize})`,
                  }}
                >
                  {Array.from({ length: levelConfig.gridSize * levelConfig.gridSize }).map((_, idx) => {
                    const r = Math.floor(idx / levelConfig.gridSize);
                    const c = idx % levelConfig.gridSize;
                    const isPlayer = r === playerPos[0] && c === playerPos[1];
                    const isDoor = r === levelConfig.doorPos[0] && c === levelConfig.doorPos[1];
                    const hasKey =
                      levelConfig.keyPositions.some(([kr, kc]) => kr === r && kc === c) &&
                      !collectedKeys.has(`${r},${c}`);
                    const isMovable = isAdjacent(playerPos[0], playerPos[1], r, c) && !isPlayer;
                    const allKeys = collectedKeys.size >= requiredKeysCount;

                    return (
                      <div
                        key={`${r}-${c}`}
                        role={isMovable ? 'button' : undefined}
                        onClick={() => isMovable && handleStep(r, c)}
                        className={`relative flex items-center justify-center border border-slate-200 dark:border-slate-700/80 text-3xl transition-colors select-none ${
                          isPlayer
                            ? 'bg-slate-900 dark:bg-indigo-900 text-white'
                            : isDoor
                            ? allKeys
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                            : 'bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800/80'
                        } ${isMovable ? 'cursor-pointer ring-2 ring-inset ring-transparent hover:ring-indigo-400' : ''}`}
                      >
                        {hasKey && (
                          <span className="text-4xl sm:text-5xl" aria-hidden="true">
                            🔑
                          </span>
                        )}

                        {isDoor && (
                          <span className={`text-4xl sm:text-5xl ${!allKeys ? 'opacity-40' : ''}`} aria-hidden="true">
                            🚪
                          </span>
                        )}

                        {isPlayer && (
                          <>
                            <span className="text-4xl sm:text-5xl" aria-label="You">
                              🚶
                            </span>

                            {/* Direction arrow pads */}
                            {dpadDirections.map((d) => {
                              const targetR = r + d.dr;
                              const targetC = c + d.dc;
                              if (
                                targetR < 0 ||
                                targetR >= levelConfig.gridSize ||
                                targetC < 0 ||
                                targetC >= levelConfig.gridSize
                              ) {
                                return null;
                              }
                              const Icon = d.icon;
                              return (
                                <button
                                  key={d.pos}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleStep(targetR, targetC);
                                  }}
                                  className={`absolute z-10 flex size-8 items-center justify-center rounded-md border border-slate-400 dark:border-slate-600 bg-slate-800 dark:bg-slate-700 text-slate-200 shadow-md transition-colors hover:bg-slate-700 dark:hover:bg-slate-600 hover:text-white cursor-pointer ${d.offset}`}
                                >
                                  <Icon className="size-5 stroke-[2.5]" />
                                </button>
                              );
                            })}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Red Wall collision line animation */}
                {hitWall && <WallLine wall={hitWall} gridSize={levelConfig.gridSize} />}
              </div>
            </div>

            {/* Keys Status Feedback */}
            {collectedKeys.size > 0 && (
              <p className="mt-4 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {collectedKeys.size >= requiredKeysCount
                  ? requiredKeysCount === 1
                    ? 'Key collected ✓'
                    : `All ${requiredKeysCount} keys collected ✓`
                  : `Keys collected: ${collectedKeys.size}/${requiredKeysCount}`}
              </p>
            )}

            {/* Bottom Progress Bar & Timer */}
            <div className="mt-6 flex w-full max-w-xl flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-700 pt-4 px-2">
              <CircularTimer seconds={timeLeft} totalSeconds={240} onExpire={handleExpire} />

              <p className="text-center text-xs font-medium text-slate-600 dark:text-slate-400">
                Collect <strong className="text-slate-900 dark:text-white">{keysLabel}</strong> then get to the{' '}
                <strong className="text-slate-900 dark:text-white">DOOR</strong>
              </p>

              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Attempts: <span className="tabular-nums font-bold text-slate-900 dark:text-white">{attempts}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
