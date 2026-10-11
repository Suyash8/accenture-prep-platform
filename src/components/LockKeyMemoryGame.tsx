'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  Key, 
  DoorClosed, 
  Award, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  AlertCircle,
  HelpCircle,
  Footprints
} from 'lucide-react';

interface HiddenMazeLevel {
  level: number;
  name: string;
  gridSize: number; // 3x3 to 6x6
  keysRequired: number; // Level 6 has 2 keys
  startPos: [number, number];
  doorPos: [number, number];
  keyPositions: [number, number][];
  // Hidden walls (X): "r,c"
  hiddenWalls: string[];
  // Directional doors: entered from invalid angle triggers instant teleport reset to start
  // e.g., cell "1,1" cannot be entered by moving "DOWN" from (0,1)
  directionalDoors: Record<string, string[]>; // "r,c" -> forbidden incoming directions ['DOWN']
  hasColorSwitches?: boolean;
}

const OFFICIAL_MAZE_LEVELS: HiddenMazeLevel[] = [
  {
    level: 1,
    name: 'Fog Chamber 1 (3x3)',
    gridSize: 3,
    keysRequired: 1,
    startPos: [0, 0],
    doorPos: [2, 2],
    keyPositions: [[0, 2]],
    hiddenWalls: ['1,1'],
    directionalDoors: {
      '0,2': ['LEFT'], // cannot enter key from left directly! Must approach from below
    },
  },
  {
    level: 2,
    name: 'Fog Chamber 2 (3x3)',
    gridSize: 3,
    keysRequired: 1,
    startPos: [0, 0],
    doorPos: [2, 0],
    keyPositions: [[2, 2]],
    hiddenWalls: ['1,0', '1,2'],
    directionalDoors: {
      '2,0': ['UP'], // approach door from side
    },
  },
  {
    level: 3,
    name: 'Shadow Maze 3 (4x4)',
    gridSize: 4,
    keysRequired: 1,
    startPos: [0, 0],
    doorPos: [3, 3],
    keyPositions: [[1, 3]],
    hiddenWalls: ['1,1', '2,2'],
    directionalDoors: {
      '1,3': ['LEFT'],
    },
  },
  {
    level: 4,
    name: 'Shadow Maze 4 (4x4)',
    gridSize: 4,
    keysRequired: 1,
    startPos: [0, 0],
    doorPos: [3, 0],
    keyPositions: [[0, 3]],
    hiddenWalls: ['2,1', '0,2'],
    directionalDoors: {
      '3,0': ['UP'],
    },
  },
  {
    level: 5,
    name: 'Deep Crypt 5 (5x5)',
    gridSize: 5,
    keysRequired: 1,
    startPos: [0, 0],
    doorPos: [4, 4],
    keyPositions: [[0, 4]],
    hiddenWalls: ['1,2', '2,3', '3,1'],
    directionalDoors: {
      '4,4': ['LEFT'],
    },
  },
  {
    level: 6,
    name: 'Master Vault 6 (6x6 Dual-Key)',
    gridSize: 6,
    keysRequired: 2, // Official rule: Level 6 introduces 2 keys!
    startPos: [0, 0],
    doorPos: [5, 5],
    keyPositions: [[0, 5], [5, 0]],
    hiddenWalls: ['1,1', '2,4', '4,2', '3,3'],
    directionalDoors: {
      '5,5': ['UP', 'LEFT'], // Must approach door from specific side
    },
  },
];

export const LockKeyMemoryGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const currentLevel = OFFICIAL_MAZE_LEVELS[currentLevelIdx] || OFFICIAL_MAZE_LEVELS[0];

  const [playerPos, setPlayerPos] = useState<[number, number]>(currentLevel.startPos);
  const [collectedKeys, setCollectedKeys] = useState<number[]>([]);
  const [revealedWalls, setRevealedWalls] = useState<string[]>([]);
  const [visitedCells, setVisitedCells] = useState<string[]>([`${currentLevel.startPos[0]},${currentLevel.startPos[1]}`]);
  const [stepCount, setStepCount] = useState(0);
  const [doorLockAlert, setDoorLockAlert] = useState(false);
  const [wallHitAlert, setWallHitAlert] = useState(false);
  const [levelPassed, setLevelPassed] = useState(false);

  const resetCurrentLevel = () => {
    setPlayerPos(currentLevel.startPos);
    setCollectedKeys([]);
    setStepCount(0);
    setDoorLockAlert(false);
    setWallHitAlert(false);
    setLevelPassed(false);
  };

  const handleMove = (dr: number, dc: number, dirName: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') => {
    if (levelPassed) return;

    const [r, c] = playerPos;
    const nr = r + dr;
    const nc = c + dc;

    // Check Boundary
    if (nr < 0 || nr >= currentLevel.gridSize || nc < 0 || nc >= currentLevel.gridSize) {
      return;
    }

    const targetKey = `${nr},${nc}`;

    // 1. Check Hidden Walls (X):
    // Stepping into an invisible obstacle halts movement, keeps avatar in current cell, flags cell on grid
    if (currentLevel.hiddenWalls.includes(targetKey)) {
      if (!revealedWalls.includes(targetKey)) {
        setRevealedWalls((prev) => [...prev, targetKey]);
      }
      setWallHitAlert(true);
      setTimeout(() => setWallHitAlert(false), 800);
      return;
    }

    // 2. Check Directional Doors:
    // Moving into cell from invalid direction triggers "Door Locked in this direction! Resetting..." and instantly returns to start
    const forbiddenDirs = currentLevel.directionalDoors[targetKey];
    if (forbiddenDirs && forbiddenDirs.includes(dirName)) {
      setDoorLockAlert(true);
      setTimeout(() => {
        setPlayerPos(currentLevel.startPos);
        setCollectedKeys([]);
        setDoorLockAlert(false);
      }, 900);
      return;
    }

    // Valid Step
    const newPos: [number, number] = [nr, nc];
    setPlayerPos(newPos);
    setStepCount((s) => s + 1);
    setVisitedCells((prev) => (prev.includes(targetKey) ? prev : [...prev, targetKey]));

    // Check Key Collection
    currentLevel.keyPositions.forEach((kPos, idx) => {
      if (kPos[0] === nr && kPos[1] === nc && !collectedKeys.includes(idx)) {
        setCollectedKeys((prev) => [...prev, idx]);
      }
    });

    // Check Exit Door
    if (nr === currentLevel.doorPos[0] && nc === currentLevel.doorPos[1]) {
      // Must collect ALL keys
      const totalCollected = collectedKeys.length + (
        currentLevel.keyPositions.some((kPos, idx) => kPos[0] === nr && kPos[1] === nc && !collectedKeys.includes(idx)) ? 1 : 0
      );
      if (totalCollected >= currentLevel.keysRequired) {
        setLevelPassed(true);
      }
    }
  };

  const handleNextLevel = () => {
    if (currentLevelIdx + 1 < OFFICIAL_MAZE_LEVELS.length) {
      const nextIdx = currentLevelIdx + 1;
      setCurrentLevelIdx(nextIdx);
      const nextLvl = OFFICIAL_MAZE_LEVELS[nextIdx];
      setPlayerPos(nextLvl.startPos);
      setCollectedKeys([]);
      setRevealedWalls([]);
      setVisitedCells([`${nextLvl.startPos[0]},${nextLvl.startPos[1]}`]);
      setStepCount(0);
      setLevelPassed(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 text-slate-800 font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Curriculum
        </button>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Stage 2: Lock & Key / The Hidden Path (Directional Memory Maze)
        </span>
      </div>

      {/* Main Container */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Level {currentLevel.level}: {currentLevel.name}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Collect <strong>{currentLevel.keysRequired} Key{currentLevel.keysRequired > 1 ? 's' : ''} (🔑)</strong>, navigate concealed fog-of-war tiles, and escape through the Exit Door (🚪).
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {OFFICIAL_MAZE_LEVELS.map((lvl, idx) => (
              <button
                key={lvl.level}
                onClick={() => {
                  setCurrentLevelIdx(idx);
                  setPlayerPos(lvl.startPos);
                  setCollectedKeys([]);
                  setRevealedWalls([]);
                  setVisitedCells([`${lvl.startPos[0]},${lvl.startPos[1]}`]);
                  setStepCount(0);
                  setLevelPassed(false);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  currentLevelIdx === idx
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                L{lvl.level}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Status Bar */}
        <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold">
          <div>
            <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold">Keys Collected</span>
            <span className="text-emerald-700 font-extrabold text-sm">
              {collectedKeys.length} / {currentLevel.keysRequired} 🔑
            </span>
          </div>
          <div>
            <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold">Total Steps</span>
            <span className="text-slate-900 font-extrabold text-sm">{stepCount}</span>
          </div>
          <div>
            <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold">Revealed Walls (X)</span>
            <span className="text-rose-600 font-extrabold text-sm">{revealedWalls.length}</span>
          </div>
          <button
            onClick={resetCurrentLevel}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Level
          </button>
        </div>

        {/* Failure Alerts */}
        {doorLockAlert && (
          <div className="p-3.5 bg-rose-50 border border-rose-300 text-rose-800 text-xs font-bold rounded-2xl text-center flex items-center justify-center gap-2 animate-pulse">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            Door Locked in this direction! Resetting avatar to Start...
          </div>
        )}

        {wallHitAlert && (
          <div className="p-3 bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold rounded-2xl text-center flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            Hidden Wall (X) detected! Movement halted; wall revealed.
          </div>
        )}

        {levelPassed && (
          <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold rounded-2xl text-center space-y-2">
            <p className="text-sm font-extrabold">🎉 Stage Level {currentLevel.level} Cleared!</p>
            {currentLevelIdx + 1 < OFFICIAL_MAZE_LEVELS.length ? (
              <button
                onClick={handleNextLevel}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-xs shadow-md"
              >
                Advance to Level {currentLevelIdx + 2} →
              </button>
            ) : (
              <p className="text-slate-600">Mastered all 6 Fog-of-War Memory Chambers!</p>
            )}
          </div>
        )}

        {/* Board & Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Fog Grid Board */}
          <div className="md:col-span-8 flex justify-center">
            <div 
              className="grid gap-2 p-4 bg-slate-950 rounded-3xl shadow-xl border border-slate-800"
              style={{
                gridTemplateColumns: `repeat(${currentLevel.gridSize}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: currentLevel.gridSize * currentLevel.gridSize }).map((_, idx) => {
                const r = Math.floor(idx / currentLevel.gridSize);
                const c = idx % currentLevel.gridSize;
                const cellKey = `${r},${c}`;

                const isPlayer = playerPos[0] === r && playerPos[1] === c;
                const isDoor = currentLevel.doorPos[0] === r && currentLevel.doorPos[1] === c;
                const keyIndex = currentLevel.keyPositions.findIndex((k) => k[0] === r && k[1] === c);
                const hasKey = keyIndex >= 0 && !collectedKeys.includes(keyIndex);
                const isRevealedWall = revealedWalls.includes(cellKey);
                const isVisited = visitedCells.includes(cellKey);

                return (
                  <div
                    key={cellKey}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold transition-all relative ${
                      isPlayer
                        ? 'bg-indigo-600 text-white shadow-lg ring-4 ring-indigo-400 scale-105 z-10'
                        : isRevealedWall
                        ? 'bg-rose-950/80 border border-rose-600 text-rose-400'
                        : isDoor
                        ? 'bg-amber-900/60 border border-amber-500 text-amber-300'
                        : hasKey
                        ? 'bg-emerald-950/60 border border-emerald-500 text-emerald-300'
                        : isVisited
                        ? 'bg-slate-800/80 border border-slate-700 text-slate-400'
                        : 'bg-slate-900 border border-slate-800 text-slate-600'
                    }`}
                  >
                    {isPlayer ? (
                      <span>👤</span>
                    ) : isRevealedWall ? (
                      <span className="font-mono font-black text-rose-400">X</span>
                    ) : isDoor ? (
                      <span>🚪</span>
                    ) : hasKey ? (
                      <span>🔑</span>
                    ) : isVisited ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    ) : (
                      <span className="text-xs text-slate-600 font-mono">?</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* D-Pad Controller */}
          <div className="md:col-span-4 flex flex-col items-center justify-center space-y-4">
            <span className="text-xs font-bold text-slate-700">Directional Controls (Orthogonal Only)</span>
            <div className="grid grid-cols-3 gap-2 w-36">
              <div></div>
              <button
                onClick={() => handleMove(-1, 0, 'UP')}
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center active:scale-95 shadow-sm"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              <div></div>

              <button
                onClick={() => handleMove(0, -1, 'LEFT')}
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center active:scale-95 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="w-11 h-11 flex items-center justify-center text-xs font-bold text-slate-400">
                MOVE
              </div>
              <button
                onClick={() => handleMove(0, 1, 'RIGHT')}
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center active:scale-95 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div></div>
              <button
                onClick={() => handleMove(1, 0, 'DOWN')}
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center active:scale-95 shadow-sm"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
              <div></div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 space-y-1 w-full">
              <p><strong>Directional Recovery:</strong> When a door locks and resets you, try entering the cell from an alternate adjacent side!</p>
              <p><strong>Zero Collisions:</strong> Avoid colliding into revealed <strong>X</strong> walls to preserve memory score.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
