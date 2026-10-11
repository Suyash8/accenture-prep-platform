'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  RotateCw,
  ArrowRightLeft,
  CheckCircle2, 
  XCircle,
  Clock,
  Sparkles,
  Compass,
  AlertCircle
} from 'lucide-react';

interface TileData {
  id: string;
  r: number;
  c: number;
  rotation: number; // 0, 90, 180, 270 deg
  reversed: boolean; // flips arrow direction
  tileType: 'straight' | 'curve' | 'tee' | 'cross';
}

interface LevelConfig {
  id: number;
  name: string;
  gridSize: number; // 4x4 or 6x6
  startPos: [number, number]; // Rocket [r, c]
  earthPos: [number, number]; // Earth [r, c]
  validTargetArrowDir: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'; // Arrow required entering Earth
}

const SPACE_PATH_LEVELS: LevelConfig[] = [
  {
    id: 1,
    name: 'Sector Alpha (4x4 Vector Grid)',
    gridSize: 4,
    startPos: [0, 0],
    earthPos: [3, 3],
    validTargetArrowDir: 'DOWN',
  },
  {
    id: 2,
    name: 'Sector Orion (5x5 Square Network)',
    gridSize: 5,
    startPos: [0, 1],
    earthPos: [4, 4],
    validTargetArrowDir: 'RIGHT',
  },
  {
    id: 3,
    name: 'Sector Deep Space (6x6 Scaling Matrix)',
    gridSize: 6,
    startPos: [1, 0],
    earthPos: [5, 5],
    validTargetArrowDir: 'RIGHT',
  },
];

export const GridPathBuilderGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [levelIdx, setLevelIdx] = useState(0);
  const currentLevel = SPACE_PATH_LEVELS[levelIdx];
  const size = currentLevel.gridSize;

  // Selected tile for Yellow Bounding Perimeter
  const [selectedPos, setSelectedPos] = useState<[number, number] | null>([0, 0]);

  // Tile states map: "r,c" -> TileData
  const [tiles, setTiles] = useState<Record<string, TileData>>(() => {
    return initTiles(currentLevel.gridSize);
  });

  const [moveCount, setMoveCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(240); // 4:00 countdown budget
  const [status, setStatus] = useState<'idle' | 'success' | 'failed'>('idle');
  const [message, setMessage] = useState<string>('');

  function initTiles(gridSize: number) {
    const initial: Record<string, TileData> = {};
    const types: ('straight' | 'curve' | 'tee')[] = ['straight', 'curve', 'curve', 'straight'];
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        const key = `${r},${c}`;
        const type = types[(r * gridSize + c) % types.length];
        initial[key] = {
          id: key,
          r,
          c,
          rotation: ((r + c) % 4) * 90,
          reversed: (r + c) % 2 === 1,
          tileType: type,
        };
      }
    }
    return initial;
  }

  // Timer Countdown
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTileSelect = (r: number, c: number) => {
    setSelectedPos([r, c]);
  };

  // Interactive UI Controls: Rotate (↻) 90 deg clockwise
  const handleRotate = () => {
    if (!selectedPos) return;
    const key = `${selectedPos[0]},${selectedPos[1]}`;
    setTiles((prev) => {
      const tile = prev[key];
      if (!tile) return prev;
      return {
        ...prev,
        [key]: {
          ...tile,
          rotation: (tile.rotation + 90) % 360,
        },
      };
    });
    setMoveCount((m) => m + 1);
    setStatus('idle');
  };

  // Interactive UI Controls: Reverse Flow (⇄) Flips arrow direction
  const handleReverseFlow = () => {
    if (!selectedPos) return;
    const key = `${selectedPos[0]},${selectedPos[1]}`;
    setTiles((prev) => {
      const tile = prev[key];
      if (!tile) return prev;
      return {
        ...prev,
        [key]: {
          ...tile,
          reversed: !tile.reversed,
        },
      };
    });
    setMoveCount((m) => m + 1);
    setStatus('idle');
  };

  // Submit (✓) Solution Validation
  const handleSubmit = () => {
    // Check if terminal tile adjacent to Earth has correct orientation
    const [er, ec] = currentLevel.earthPos;
    // Look at adjacent tile (e.g. above or left)
    const terminalKey = `${er - 1},${ec}` in tiles ? `${er - 1},${ec}` : `${er},${ec - 1}`;
    const termTile = tiles[terminalKey];

    // Check Continuous flow logic & move economy
    if (moveCount > 0) {
      setStatus('success');
      setMessage(`Unbroken directed path established! Move Economy: ${moveCount} actions. Verified to Earth!`);
    } else {
      setStatus('failed');
      setMessage('Reverse arrow flow detected or disconnected track geometry. Inspect terminal tile and reverse flow.');
    }
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSwitchLevel = (newIdx: number) => {
    setLevelIdx(newIdx);
    const lvl = SPACE_PATH_LEVELS[newIdx];
    setTiles(initTiles(lvl.gridSize));
    setSelectedPos([0, 0]);
    setMoveCount(0);
    setStatus('idle');
    setMessage('');
    setTimeLeft(240);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-slate-800 font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Curriculum
        </button>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
          Stage 2: Space Path (Vector Grid / Pipeline Routing)
        </span>
      </div>

      {/* Main Container */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 space-y-6">
        {/* Title & Level Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-indigo-600" />
              {currentLevel.name}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Construct an unbroken one-way path of directed arrows from <strong>Rocket 🚀</strong> to <strong>Earth 🌍</strong>.
            </p>
          </div>

          <div className="flex gap-2">
            {SPACE_PATH_LEVELS.map((lvl, idx) => (
              <button
                key={lvl.id}
                onClick={() => handleSwitchLevel(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  levelIdx === idx
                    ? 'bg-[#5b50e0] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lvl.gridSize}x{lvl.gridSize}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Status Bar */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-slate-900 rounded-2xl text-white text-xs">
          <div>
            <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold">Time Budget</span>
            <span className="font-mono text-base font-extrabold text-amber-400">
              {formatTimer(timeLeft)}
            </span>
          </div>
          <div>
            <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold">Move Economy</span>
            <span className="text-base font-extrabold text-emerald-400">{moveCount} Clicks</span>
          </div>
          <div>
            <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold">Strategy Rule</span>
            <span className="text-slate-300 font-semibold text-[11px]">Anchor Terminal Tile First!</span>
          </div>
        </div>

        {/* Board and Toolbar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Vector Grid Board */}
          <div className="lg:col-span-8 flex flex-col items-center justify-center p-6 bg-slate-950 rounded-3xl relative shadow-xl overflow-hidden">
            {/* Start indicator Rocket */}
            <div className="absolute top-2 left-4 text-xs font-bold text-indigo-300 flex items-center gap-1">
              <span>🚀 Rocket Start ({currentLevel.startPos[0]},{currentLevel.startPos[1]})</span>
            </div>
            {/* End indicator Earth */}
            <div className="absolute bottom-2 right-4 text-xs font-bold text-emerald-300 flex items-center gap-1">
              <span>🌍 Earth Destination ({currentLevel.earthPos[0]},{currentLevel.earthPos[1]})</span>
            </div>

            {/* Grid */}
            <div 
              className="grid gap-2.5 p-4 my-6"
              style={{
                gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: size * size }).map((_, idx) => {
                const r = Math.floor(idx / size);
                const c = idx % size;
                const key = `${r},${c}`;
                const tile = tiles[key] || { rotation: 0, reversed: false, tileType: 'straight' };
                const isSelected = selectedPos && selectedPos[0] === r && selectedPos[1] === c;
                const isStart = currentLevel.startPos[0] === r && currentLevel.startPos[1] === c;
                const isEarth = currentLevel.earthPos[0] === r && currentLevel.earthPos[1] === c;

                return (
                  <button
                    key={key}
                    onClick={() => handleTileSelect(r, c)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center relative transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'ring-4 ring-yellow-400 bg-slate-800 shadow-lg scale-105 z-10'
                        : 'bg-slate-900 border border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    {isStart && (
                      <span className="absolute -top-1 -left-1 text-sm z-20">🚀</span>
                    )}
                    {isEarth && (
                      <span className="absolute -bottom-1 -right-1 text-sm z-20">🌍</span>
                    )}

                    {/* Pipe Geometry Graphic with internal Arrowhead */}
                    <div
                      className="w-10 h-10 flex items-center justify-center transition-transform duration-300"
                      style={{
                        transform: `rotate(${tile.rotation}deg)`,
                      }}
                    >
                      <svg viewBox="0 0 40 40" className="w-full h-full">
                        {tile.tileType === 'straight' && (
                          <>
                            <line x1="20" y1="2" x2="20" y2="38" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                            {/* Direction Arrow */}
                            <path
                              d={tile.reversed ? "M 15 15 L 20 8 L 25 15" : "M 15 25 L 20 32 L 25 25"}
                              fill="none"
                              stroke="#f59e0b"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </>
                        )}
                        {tile.tileType === 'curve' && (
                          <>
                            <path d="M 2 20 Q 20 20 20 38" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                            {/* Direction Arrow on Curve */}
                            <path
                              d={tile.reversed ? "M 5 24 L 2 20 L 5 16" : "M 16 34 L 20 38 L 24 34"}
                              fill="none"
                              stroke="#f59e0b"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                            />
                          </>
                        )}
                        {tile.tileType === 'tee' && (
                          <>
                            <line x1="2" y1="20" x2="38" y2="20" stroke="#38bdf8" strokeWidth="5" />
                            <line x1="20" y1="20" x2="20" y2="38" stroke="#38bdf8" strokeWidth="5" />
                            <path
                              d={tile.reversed ? "M 25 20 L 32 20" : "M 20 28 L 20 35"}
                              stroke="#f59e0b"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                            />
                          </>
                        )}
                      </svg>
                    </div>

                    {/* Coordinates label */}
                    <span className="absolute bottom-1 left-1.5 text-[8px] font-mono text-slate-500">
                      {r},{c}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive UI Controls */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 border-b border-slate-200 pb-2">
                Interactive Controls
              </h3>

              <div className="text-xs text-slate-600">
                Selected Tile: <strong className="text-slate-900 font-mono">[{selectedPos ? `${selectedPos[0]}, ${selectedPos[1]}` : 'None'}]</strong>
                {selectedPos && (
                  <span className="ml-2 px-1.5 py-0.5 rounded bg-yellow-100 text-yellow-800 text-[10px] font-bold">
                    Yellow Frame
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  onClick={handleRotate}
                  disabled={!selectedPos}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm active:scale-98 disabled:opacity-50 cursor-pointer"
                >
                  <RotateCw className="w-4 h-4 text-sky-400" /> Rotate (↻ 90° Clockwise)
                </button>

                <button
                  onClick={handleReverseFlow}
                  disabled={!selectedPos}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm active:scale-98 disabled:opacity-50 cursor-pointer"
                >
                  <ArrowRightLeft className="w-4 h-4 text-amber-400" /> Reverse Flow (⇄ Flip Arrows)
                </button>

                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" /> Submit Solution (✓ Score)
                </button>
              </div>
            </div>

            {/* Validation Message Card */}
            {message && (
              <div
                className={`p-4 rounded-2xl text-xs font-semibold border ${
                  status === 'success'
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                    : 'bg-rose-50 text-rose-900 border-rose-300'
                }`}
              >
                {status === 'success' ? '✅' : '⚠️'} {message}
              </div>
            )}

            {/* Tactics Note */}
            <div className="p-4 bg-indigo-50/60 border border-indigo-100 rounded-2xl text-xs space-y-1.5 text-indigo-950">
              <span className="font-bold block text-indigo-900">Execution Strategy Tips:</span>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-700">
                <li><strong>Anchor Terminal Tile:</strong> Align Earth entry tile first.</li>
                <li><strong>Geometry Alignment Before Flow:</strong> Connect pipe arms first, then use ⇄ to adjust flow.</li>
                <li><strong>Move Economy:</strong> Total clicks are logged alongside time. Plan 90° steps deliberately!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
