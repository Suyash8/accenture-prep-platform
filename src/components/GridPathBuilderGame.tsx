'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ArrowLeft, RefreshCw, Repeat, Check, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';

export type ArrowDir =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'upright'
  | 'downright'
  | 'downleft'
  | 'upleft'
  | null;

export type ShapeType = 'straight' | 'lshape' | 'tshape' | 'plus';

export interface BlockCell {
  row: number;
  col: number;
  isDark: boolean;
  arrow: ArrowDir;
}

export interface Block {
  id: string;
  blockRow: number;
  blockCol: number;
  shapeType: ShapeType;
  rotateState: number;
  flipState: number;
  cells: BlockCell[];
}

export interface PathPuzzle {
  id: string;
  gridSize: number;
  blocks: Block[];
  startCell: { row: number; col: number };
  endCell: { row: number; col: number };
  timeLimit: number;
  minMoves: number;
}

// Direction rotations and vectors (BuildUForward exact)
const ROTATION_MAP: Record<string, ArrowDir> = {
  right: 'down',
  down: 'left',
  left: 'up',
  up: 'right',
  upright: 'downright',
  downright: 'downleft',
  downleft: 'upleft',
  upleft: 'upright',
};

const DIR_VECTORS: Record<string, [number, number]> = {
  right: [0, 1],
  left: [0, -1],
  up: [-1, 0],
  down: [1, 0],
};

const CORNER_REDIRECT: Record<string, Record<string, ArrowDir>> = {
  downright: { right: 'down', down: 'right' },
  upright: { right: 'up', up: 'right' },
  downleft: { left: 'down', down: 'left' },
  upleft: { left: 'up', up: 'left' },
};

function rotateDir(dir: ArrowDir, count: number): ArrowDir {
  if (!dir) return null;
  let curr = dir;
  const turns = ((count % 4) + 4) % 4;
  for (let i = 0; i < turns; i++) {
    curr = ROTATION_MAP[curr] || curr;
  }
  return curr;
}

function rotateLocalPos(r: number, c: number, count: number) {
  let row = r;
  let col = c;
  const turns = ((count % 4) + 4) % 4;
  for (let i = 0; i < turns; i++) {
    const nextR = col;
    const nextC = 2 - row;
    row = nextR;
    col = nextC;
  }
  return { localRow: row, localCol: col };
}

// Shape Catalog
const SHAPES: Record<ShapeType, { cells: { localRow: number; localCol: number; arrow: ArrowDir }[] }[]> = {
  straight: [
    { cells: [{ localRow: 1, localCol: 0, arrow: 'right' }, { localRow: 1, localCol: 1, arrow: 'right' }, { localRow: 1, localCol: 2, arrow: 'right' }] },
    { cells: [{ localRow: 1, localCol: 0, arrow: 'left' }, { localRow: 1, localCol: 1, arrow: 'left' }, { localRow: 1, localCol: 2, arrow: 'left' }] },
  ],
  lshape: [
    { cells: [{ localRow: 1, localCol: 0, arrow: 'right' }, { localRow: 1, localCol: 1, arrow: 'downright' }, { localRow: 2, localCol: 1, arrow: 'down' }] },
    { cells: [{ localRow: 1, localCol: 0, arrow: 'left' }, { localRow: 1, localCol: 1, arrow: 'upleft' }, { localRow: 2, localCol: 1, arrow: 'up' }] },
  ],
  tshape: [
    { cells: [{ localRow: 0, localCol: 1, arrow: 'up' }, { localRow: 1, localCol: 0, arrow: null }, { localRow: 1, localCol: 1, arrow: 'upleft' }, { localRow: 1, localCol: 2, arrow: 'left' }] },
    { cells: [{ localRow: 0, localCol: 1, arrow: 'up' }, { localRow: 1, localCol: 0, arrow: 'right' }, { localRow: 1, localCol: 1, arrow: 'upright' }, { localRow: 1, localCol: 2, arrow: null }] },
    { cells: [{ localRow: 0, localCol: 1, arrow: null }, { localRow: 1, localCol: 0, arrow: 'right' }, { localRow: 1, localCol: 1, arrow: 'right' }, { localRow: 1, localCol: 2, arrow: 'right' }] },
    { cells: [{ localRow: 0, localCol: 1, arrow: 'down' }, { localRow: 1, localCol: 0, arrow: null }, { localRow: 1, localCol: 1, arrow: 'downright' }, { localRow: 1, localCol: 2, arrow: 'right' }] },
    { cells: [{ localRow: 0, localCol: 1, arrow: 'down' }, { localRow: 1, localCol: 0, arrow: 'left' }, { localRow: 1, localCol: 1, arrow: 'downleft' }, { localRow: 1, localCol: 2, arrow: null }] },
    { cells: [{ localRow: 0, localCol: 1, arrow: null }, { localRow: 1, localCol: 0, arrow: 'left' }, { localRow: 1, localCol: 1, arrow: 'left' }, { localRow: 1, localCol: 2, arrow: 'left' }] },
  ],
  plus: [
    { cells: [{ localRow: 0, localCol: 1, arrow: 'up' }, { localRow: 1, localCol: 0, arrow: null }, { localRow: 1, localCol: 1, arrow: 'up' }, { localRow: 1, localCol: 2, arrow: null }, { localRow: 2, localCol: 1, arrow: 'up' }] },
    { cells: [{ localRow: 0, localCol: 1, arrow: 'up' }, { localRow: 1, localCol: 0, arrow: 'right' }, { localRow: 1, localCol: 1, arrow: 'upright' }, { localRow: 1, localCol: 2, arrow: null }, { localRow: 2, localCol: 1, arrow: null }] },
    { cells: [{ localRow: 0, localCol: 1, arrow: null }, { localRow: 1, localCol: 0, arrow: 'right' }, { localRow: 1, localCol: 1, arrow: 'right' }, { localRow: 1, localCol: 2, arrow: 'right' }, { localRow: 2, localCol: 1, arrow: null }] },
  ],
};

function buildBlock(
  blockRow: number,
  blockCol: number,
  shapeType: ShapeType,
  rotateState: number = 0,
  flipState: number = 0
): Block {
  const variants = SHAPES[shapeType];
  const safeFlip = ((flipState % variants.length) + variants.length) % variants.length;
  const baseVariant = variants[safeFlip];

  const transformedCells = baseVariant.cells.map(({ localRow, localCol, arrow }) => {
    const pos = rotateLocalPos(localRow, localCol, rotateState);
    return {
      localRow: pos.localRow,
      localCol: pos.localCol,
      arrow: rotateDir(arrow, rotateState),
    };
  });

  const cellMap = new Map(transformedCells.map((c) => [`${c.localRow},${c.localCol}`, c.arrow]));
  const fullCells: BlockCell[] = [];

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const isDark = cellMap.has(`${r},${c}`);
      fullCells.push({
        row: blockRow * 3 + r,
        col: blockCol * 3 + c,
        isDark,
        arrow: isDark ? cellMap.get(`${r},${c}`) || null : null,
      });
    }
  }

  return {
    id: `block_${blockRow}_${blockCol}`,
    blockRow,
    blockCol,
    shapeType,
    rotateState: ((rotateState % 4) + 4) % 4,
    flipState: safeFlip,
    cells: fullCells,
  };
}

// Procedural dynamic puzzle generator ensuring guaranteed solvability with randomized starting rotations & entry/exit points
function generateProceduralPathPuzzle(matrixBlocksCount: number): PathPuzzle {
  const shapes: ShapeType[] = ['straight', 'lshape', 'tshape', 'plus'];
  const blocks: Block[] = [];

  // Randomize start block row along the leftmost column (col 0) and end block row along the rightmost column
  const startBlockRow = Math.floor(Math.random() * matrixBlocksCount);
  const endBlockRow = Math.floor(Math.random() * matrixBlocksCount);

  // The Rocket and Earth enter/exit directly through the center row of their 3x3 block:
  // For block at blockRow, localRow = 1 -> row = blockRow * 3 + 1
  const startCell = { row: startBlockRow * 3 + 1, col: 0 };
  const endCell = { row: endBlockRow * 3 + 1, col: matrixBlocksCount * 3 - 1 };

  // First create a clean solved configuration along a random continuous route from start block to end block
  const pathBlocks = new Set<string>();
  let curBR = startBlockRow;
  let curBC = 0;
  pathBlocks.add(`${curBR},${curBC}`);

  while (curBC < matrixBlocksCount - 1 || curBR !== endBlockRow) {
    if (curBC === matrixBlocksCount - 1) {
      curBR += curBR < endBlockRow ? 1 : -1;
    } else if (curBR === endBlockRow) {
      curBC += 1;
    } else {
      if (Math.random() > 0.4) curBC += 1;
      else curBR += curBR < endBlockRow ? 1 : -1;
    }
    pathBlocks.add(`${curBR},${curBC}`);
  }

  // Populate blocks with randomized shape variants and scramble initial rotation (0, 1, 2, 3) & flip states
  for (let r = 0; r < matrixBlocksCount; r++) {
    for (let c = 0; c < matrixBlocksCount; c++) {
      const isPath = pathBlocks.has(`${r},${c}`);
      const shape = isPath
        ? shapes[Math.floor(Math.random() * shapes.length)]
        : shapes[(r + c) % shapes.length];

      // Scramble starting rotation & flip to challenge the candidate
      const scrambledRotate = Math.floor(Math.random() * 4);
      const scrambledFlip = Math.floor(Math.random() * 3);

      blocks.push(buildBlock(r, c, shape, scrambledRotate, scrambledFlip));
    }
  }

  return {
    id: `puzzle_${matrixBlocksCount}x${matrixBlocksCount}_${Date.now()}`,
    gridSize: matrixBlocksCount * 3,
    blocks,
    startCell,
    endCell,
    timeLimit: 240,
    minMoves: matrixBlocksCount * 4,
  };
}

// Validator algorithm (Exact from BuildUForward 88529)
function validatePath(puzzle: PathPuzzle, blocks: Block[]) {
  const cellMap = new Map<string, BlockCell>();
  for (const b of blocks) {
    for (const c of b.cells) {
      cellMap.set(`${c.row},${c.col}`, c);
    }
  }

  const { gridSize, startCell, endCell } = puzzle;
  const path: { row: number; col: number }[] = [];
  const visited = new Set<string>();

  // Center entry of the starting block
  let curr = { ...startCell };
  let dir: ArrowDir = 'right';
  const maxSteps = gridSize * gridSize + 4;

  for (let step = 0; step < maxSteps; step++) {
    const key = `${curr.row},${curr.col}`;
    if (visited.has(key)) break;
    visited.add(key);
    path.push({ ...curr });

    // Reached the center cell of the destination block (endCell)
    if (curr.row === endCell.row && curr.col === endCell.col) {
      return { valid: true, path };
    }

    const cell = cellMap.get(key);
    if (!cell?.isDark || !cell.arrow) break;

    const cardinal = new Set(['up', 'down', 'left', 'right']);
    let nextDir: ArrowDir = null;

    if (cardinal.has(cell.arrow)) {
      nextDir = cell.arrow;
    } else if (CORNER_REDIRECT[cell.arrow] && dir && CORNER_REDIRECT[cell.arrow][dir]) {
      nextDir = CORNER_REDIRECT[cell.arrow][dir];
    } else {
      break;
    }

    dir = nextDir;
    if (!nextDir) break;
    const vec = DIR_VECTORS[nextDir];
    if (!vec) break;

    const nextPos = { row: curr.row + vec[0], col: curr.col + vec[1] };
    if (nextPos.row < 0 || nextPos.row >= gridSize || nextPos.col < 0 || nextPos.col >= gridSize) {
      // Reached past the right edge exiting directly at the destination block center row
      if (nextPos.col === gridSize && nextPos.row === endCell.row) {
        path.push(endCell);
        return { valid: true, path };
      }
      break;
    }

    curr = nextPos;
  }

  return { valid: false, path };
}

const INSTRUCTION_SLIDES = [
  "This practice exercise will provide you with instructions and practice items for a task designed to measure Image rotation ability.\n\nPlease take the time to read the instructions carefully and use the practice items to familiarize yourself with the task.",
  "Your goal is to create a path from the icon on the left to the icon on the right by rotating the tiles and changing the arrow directions. You should try to generate a path in the least number of moves.",
  "Tap/click on a tile to select it.",
  "Tap/click ↻ to rotate the tile clockwise.",
  "Tap/click ⇄ to change the direction of route.",
  "Arrow directions can point left, right, up, down, and around any angles of the tile path.",
  "Once the route is complete, select ✓. If you have successfully created a path, the task is complete. If you have not successfully created a path, you will be able to try again.",
  "Your goal is to create a valid path in the least number of moves. You do not need to rush. However, if you have been unable to find a valid path within the time limit, you will progress automatically to the next question.\n\nA timer is located at the bottom of the screen to indicate time remaining.",
  "The practice exercise will have 1 grid to solve.\n\nYou should take this opportunity to practice how to rotate and change arrow directions for all types of tile patterns.",
];

export const GridPathBuilderGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [matrixSize, setMatrixSize] = useState<number>(3); // 3 (9x9), 4 (12x12), 5 (15x15)

  // Generate dynamic procedurally randomized path puzzle
  const [puzzle, setPuzzle] = useState<PathPuzzle>(() => generateProceduralPathPuzzle(3));

  const [gameState, setGameState] = useState<'instructions' | 'playing' | 'results'>('instructions');
  const [instructionSlide, setInstructionSlide] = useState(0);

  const [blocks, setBlocks] = useState<Block[]>(puzzle.blocks);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>('block_0_0');
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(240);
  const [pathHighlight, setPathHighlight] = useState<{ row: number; col: number }[]>([]);
  const [shake, setShake] = useState(false);

  const handleRegeneratePuzzle = useCallback((size: number) => {
    const newPuz = generateProceduralPathPuzzle(size);
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

    if (result.valid) {
      setTimeout(() => {
        setGameState('results');
      }, 700);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }, [puzzle, blocks, gameState]);

  const cellPx = puzzle.gridSize === 9 ? 44 : puzzle.gridSize === 12 ? 34 : 28;
  const boardSizePx = puzzle.gridSize * cellPx;

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-neutral-900 font-sans p-4 sm:p-8 flex flex-col">
      {/* Top Header & Variant Selector Bar */}
      <div className="max-w-4xl w-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 text-xs font-semibold text-neutral-700 shadow-xs cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Assessment Hub
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
                    ? 'border-neutral-900 bg-neutral-900 text-white shadow-xs'
                    : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500 hover:text-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}

          <button
            onClick={() => handleRegeneratePuzzle(matrixSize)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-xs font-bold text-neutral-800 shadow-xs cursor-pointer transition-all ml-1"
          >
            <Shuffle className="w-3.5 h-3.5 text-cyan-600" /> Randomize
          </button>
        </div>
      </div>

      {/* Main Game Stage Container */}
      <div className="max-w-4xl w-full mx-auto flex-1 flex flex-col rounded-xl border border-neutral-300 bg-white shadow-lg overflow-hidden relative min-h-[540px]">
        {/* Instruction Slide Modal */}
        {gameState === 'instructions' && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/25 p-4">
            <div className="relative w-full max-w-lg rounded-xl border border-gray-300 bg-white p-8 shadow-2xl">
              {instructionSlide > 0 && (
                <button
                  type="button"
                  onClick={() => setInstructionSlide((s) => s - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded p-2 text-gray-400 hover:bg-gray-100 cursor-pointer"
                >
                  <ChevronLeft className="size-6" />
                </button>
              )}

              {instructionSlide < INSTRUCTION_SLIDES.length - 1 && (
                <button
                  type="button"
                  onClick={() => setInstructionSlide((s) => s + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-2 text-gray-400 hover:bg-gray-100 cursor-pointer"
                >
                  <ChevronRight className="size-6" />
                </button>
              )}

              <p className="px-8 text-center text-sm leading-relaxed text-neutral-800 min-h-[72px] flex items-center justify-center whitespace-pre-line">
                {INSTRUCTION_SLIDES[instructionSlide]}
              </p>

              <div className="mt-6 flex justify-center gap-1.5">
                {INSTRUCTION_SLIDES.map((_, idx) => (
                  <span
                    key={idx}
                    className={`size-2 rounded-full border border-neutral-400 transition-colors ${
                      idx === instructionSlide ? 'bg-neutral-800' : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>

              {instructionSlide === INSTRUCTION_SLIDES.length - 1 && (
                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setGameState('playing')}
                    className="rounded-lg bg-neutral-900 px-10 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-neutral-700 cursor-pointer transition-colors"
                  >
                    Start
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Results Screen */}
        {gameState === 'results' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-lg space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">Well done!</h3>
              <p className="text-sm text-neutral-600">You completed the path finder assessment.</p>

              <div className="space-y-2 text-left text-neutral-700 text-sm border-y border-neutral-100 py-4">
                <p className="flex justify-between">
                  <span>Total moves:</span>
                  <strong className="text-neutral-900 font-bold">{moves}</strong>
                </p>
                <p className="flex justify-between">
                  <span>Time remaining:</span>
                  <strong className="text-neutral-900 font-mono font-bold">{timeLeft}s</strong>
                </p>
              </div>

              <button
                onClick={() => {
                  handleRegeneratePuzzle(matrixSize);
                  setGameState('playing');
                }}
                className="w-full py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer transition-colors"
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

              {/* Grid Box */}
              <div
                className="overflow-hidden rounded-xl border-[3px] border-neutral-700 bg-white shadow-xl relative"
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
                        className={`flex items-center justify-center border border-gray-300 transition-colors select-none ${
                          isDark ? 'bg-[#757575] text-white' : 'bg-white'
                        } ${isHighlighted ? 'bg-[#9e9e9e]' : ''} ${
                          isSelected && isDark ? 'ring-2 ring-inset ring-yellow-400' : ''
                        } ${isRightBlockEdge ? 'border-r-2 border-r-gray-500' : ''} ${
                          isBottomBlockEdge ? 'border-b-2 border-b-gray-500' : ''
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

            {/* Exact BuildUForward Control Buttons Bar */}
            <div className="mt-8 flex w-full max-w-md items-center justify-center gap-4">
              {/* Circular Timer */}
              <div className="relative flex size-12 shrink-0 items-center justify-center">
                <svg width="48" height="48" className="-rotate-90">
                  <circle cx="24" cy="24" r={18} fill="none" stroke="#e5e5e5" strokeWidth="3" />
                  <circle
                    cx="24"
                    cy="24"
                    r={18}
                    fill="none"
                    stroke={timeLeft <= 60 ? "#dc2626" : "#525252"}
                    strokeWidth="3"
                    strokeDasharray={2 * Math.PI * 18}
                    strokeDashoffset={2 * Math.PI * 18 - (timeLeft / 240) * 2 * Math.PI * 18}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold tabular-nums">
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Rotate ↻ Button */}
              <button
                type="button"
                onClick={handleRotate}
                disabled={!selectedBlockId}
                className="flex size-12 items-center justify-center rounded-xl bg-[#333] text-white hover:bg-[#555] active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-40"
                title="Rotate block clockwise"
              >
                <RefreshCw className="size-5" />
              </button>

              {/* Flip ⇄ Button */}
              <button
                type="button"
                onClick={handleFlip}
                disabled={!selectedBlockId}
                className="flex size-12 items-center justify-center rounded-xl bg-[#333] text-white hover:bg-[#555] active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-40"
                title="Change route direction"
              >
                <Repeat className="size-5" />
              </button>

              {/* Submit ✓ Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="flex size-12 items-center justify-center rounded-xl bg-[#333] text-white hover:bg-[#555] active:scale-95 transition-all shadow-md cursor-pointer"
                title="Submit path"
              >
                <Check className="size-5" />
              </button>
            </div>

            <p className="mt-4 text-xs font-semibold text-neutral-500">
              Total Moves: <strong className="text-neutral-900">{moves}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
