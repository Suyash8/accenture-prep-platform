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

export type ShapeType = 'straight' | 'lshape' | 'tshape' | 'cross';

export interface BlockCell {
  row: number;
  col: number;
  localRow: number;
  localCol: number;
  arrow: ArrowDir;
  isDark: boolean;
}

export interface Block {
  id: string;
  blockRow: number;
  blockCol: number;
  shapeType: ShapeType;
  rotateState: number; // 0, 1, 2, 3 (each is 90 deg clockwise)
  flipState: number;   // 0: normal, 1: horizontal flip
  cells: BlockCell[];
}

export interface PathPuzzle {
  id: string;
  gridSize: number;       // e.g. 9 for 3x3 blocks, 12 for 4x4 blocks
  blocksCount: number;    // e.g. 3 or 4
  blocks: Block[];
  solutionState: Record<string, { rotate: number; flip: number }>;
  startCell: { row: number; col: number };
  endCell: { row: number; col: number };
  timeLimit: number;
  minMoves: number;
}

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

const FLIP_H_MAP: Record<string, ArrowDir> = {
  right: 'left',
  left: 'right',
  up: 'up',
  down: 'down',
  upright: 'upleft',
  upleft: 'upright',
  downright: 'downleft',
  downleft: 'downright',
};

export function rotateDir(dir: ArrowDir, count: number): ArrowDir {
  if (!dir) return null;
  let curr = dir;
  const turns = ((count % 4) + 4) % 4;
  for (let i = 0; i < turns; i++) {
    curr = ROTATION_MAP[curr] || curr;
  }
  return curr;
}

export function flipDir(dir: ArrowDir, flipState: number): ArrowDir {
  if (!dir || flipState % 2 === 0) return dir;
  return FLIP_H_MAP[dir] || dir;
}

export function transformLocalPos(
  r: number,
  c: number,
  rotateState: number,
  flipState: number
): { localRow: number; localCol: number } {
  let row = r;
  let col = c;

  // Horizontal flip
  if (flipState % 2 !== 0) {
    col = 2 - col;
  }

  // Clockwise rotations
  const turns = ((rotateState % 4) + 4) % 4;
  for (let i = 0; i < turns; i++) {
    const nextR = col;
    const nextC = 2 - row;
    row = nextR;
    col = nextC;
  }

  return { localRow: row, localCol: col };
}

// Canonical shape definitions defined in 3x3 local space (center row 1, center col 1)
const CANONICAL_SHAPES: Record<ShapeType, { localRow: number; localCol: number; arrow: ArrowDir }[]> = {
  straight: [
    { localRow: 1, localCol: 0, arrow: 'right' },
    { localRow: 1, localCol: 1, arrow: 'right' },
    { localRow: 1, localCol: 2, arrow: 'right' },
  ],
  lshape: [
    { localRow: 1, localCol: 0, arrow: 'right' },
    { localRow: 1, localCol: 1, arrow: 'downright' },
    { localRow: 2, localCol: 1, arrow: 'down' },
  ],
  tshape: [
    { localRow: 1, localCol: 0, arrow: 'right' },
    { localRow: 1, localCol: 1, arrow: 'right' },
    { localRow: 1, localCol: 2, arrow: 'right' },
    { localRow: 2, localCol: 1, arrow: 'down' },
  ],
  cross: [
    { localRow: 1, localCol: 0, arrow: 'right' },
    { localRow: 1, localCol: 1, arrow: 'right' },
    { localRow: 1, localCol: 2, arrow: 'right' },
    { localRow: 0, localCol: 1, arrow: 'down' },
    { localRow: 2, localCol: 1, arrow: 'down' },
  ],
};

export function buildBlock(
  blockRow: number,
  blockCol: number,
  shapeType: ShapeType,
  rotateState: number = 0,
  flipState: number = 0
): Block {
  const canonical = CANONICAL_SHAPES[shapeType];
  const cells: BlockCell[] = [];

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      let matchedArrow: ArrowDir = null;

      for (const base of canonical) {
        const trans = transformLocalPos(base.localRow, base.localCol, rotateState, flipState);
        if (trans.localRow === r && trans.localCol === c) {
          const dirAfterFlip = flipDir(base.arrow, flipState);
          matchedArrow = rotateDir(dirAfterFlip, rotateState);
          break;
        }
      }

      cells.push({
        row: blockRow * 3 + r,
        col: blockCol * 3 + c,
        localRow: r,
        localCol: c,
        arrow: matchedArrow,
        isDark: matchedArrow !== null,
      });
    }
  }

  return {
    id: `block_${blockRow}_${blockCol}`,
    blockRow,
    blockCol,
    shapeType,
    rotateState,
    flipState,
    cells,
  };
}

const CORNER_REDIRECT: Record<string, Record<string, ArrowDir>> = {
  downright: { right: 'down', up: 'right' },
  upright: { right: 'up', down: 'right' },
  downleft: { left: 'down', up: 'left' },
  upleft: { left: 'up', down: 'left' },
};

const STEP_DELTA: Record<string, [number, number]> = {
  right: [0, 1],
  left: [0, -1],
  up: [-1, 0],
  down: [1, 0],
};

/**
 * Validates whether the active block orientations form a continuous valid path from startCell to endCell
 */
export function validatePath(
  puzzle: PathPuzzle,
  blocks: Block[]
): { success: boolean; path: { row: number; col: number }[] } {
  const cellMap = new Map<string, BlockCell>();
  for (const b of blocks) {
    for (const c of b.cells) {
      cellMap.set(`${c.row},${c.col}`, c);
    }
  }

  const { startCell, endCell, gridSize } = puzzle;
  const path: { row: number; col: number }[] = [];
  const visited = new Set<string>();

  let curr = { ...startCell };
  let dir: ArrowDir = 'right';
  const maxSteps = gridSize * gridSize + 10;

  for (let step = 0; step < maxSteps; step++) {
    const key = `${curr.row},${curr.col}`;
    if (visited.has(key)) {
      // Loop detected
      break;
    }
    visited.add(key);
    path.push({ ...curr });

    // Success if reaching destination Earth
    if (curr.row === endCell.row && curr.col === endCell.col) {
      return { success: true, path };
    }

    const currentCell = cellMap.get(key);
    if (!currentCell || !currentCell.arrow) {
      // Dead end without arrow
      break;
    }

    const arrow = currentCell.arrow;
    let nextDir: ArrowDir = dir;

    if (CORNER_REDIRECT[arrow]) {
      nextDir = CORNER_REDIRECT[arrow][dir] || arrow;
    } else if (arrow === 'right' || arrow === 'left' || arrow === 'up' || arrow === 'down') {
      nextDir = arrow;
    }

    const delta = STEP_DELTA[nextDir || ''];
    if (!delta) break;

    const nextRow = curr.row + delta[0];
    const nextCol = curr.col + delta[1];

    if (nextRow < 0 || nextRow >= gridSize || nextCol < 0 || nextCol >= gridSize) {
      // Out of bounds
      break;
    }

    curr = { row: nextRow, col: nextCol };
    dir = nextDir;
  }

  return { success: false, path };
}

/**
 * Procedural generation with guaranteed solvability
 */
export function generatePathPuzzle(
  blocksCount: number = 3,
  rng: () => number = Math.random
): PathPuzzle {
  // Center row block for start and end
  const pathRow = Math.floor(blocksCount / 2);
  const startCell = { row: pathRow * 3 + 1, col: 0 };
  const endCell = { row: pathRow * 3 + 1, col: blocksCount * 3 - 1 };

  const solutionState: Record<string, { rotate: number; flip: number }> = {};
  const blocks: Block[] = [];

  for (let r = 0; r < blocksCount; r++) {
    for (let c = 0; c < blocksCount; c++) {
      const isPath = r === pathRow;
      const shape: ShapeType = isPath ? 'straight' : 'lshape';

      // On path row, rotate = 0, flip = 0 connects straight through center row from left to right!
      const solRotate = 0;
      const solFlip = 0;
      solutionState[`${r},${c}`] = { rotate: solRotate, flip: solFlip };

      // Scramble starting orientation
      const scrambledRotate = Math.floor(rng() * 4);
      const scrambledFlip = Math.floor(rng() * 2);

      blocks.push(buildBlock(r, c, shape, scrambledRotate, scrambledFlip));
    }
  }

  return {
    id: `puzzle_${blocksCount}x${blocksCount}_${Date.now()}`,
    gridSize: blocksCount * 3,
    blocksCount,
    blocks,
    solutionState,
    startCell,
    endCell,
    timeLimit: 240,
    minMoves: blocksCount * 3,
  };
}

/**
 * Validates that the puzzle's solutionState configuration achieves success = true
 */
export function isPathPuzzleSolvable(puzzle: PathPuzzle): boolean {
  const solutionBlocks = puzzle.blocks.map((b) => {
    const sol = puzzle.solutionState[`${b.blockRow},${b.blockCol}`] || { rotate: 0, flip: 0 };
    return buildBlock(b.blockRow, b.blockCol, b.shapeType, sol.rotate, sol.flip);
  });
  const res = validatePath(puzzle, solutionBlocks);
  return res.success;
}
