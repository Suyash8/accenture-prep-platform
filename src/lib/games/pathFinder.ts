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

const TRANSITIONS: Record<string, { shape: ShapeType; rot: number; flip: number }[]> = {
  'left->right': [
    { shape: 'straight', rot: 0, flip: 0 },
    { shape: 'straight', rot: 2, flip: 1 },
    { shape: 'tshape', rot: 0, flip: 0 },
    { shape: 'cross', rot: 0, flip: 0 },
  ],
  'left->bottom': [
    { shape: 'lshape', rot: 0, flip: 0 },
    { shape: 'cross', rot: 3, flip: 1 },
  ],
  'left->top': [
    { shape: 'lshape', rot: 2, flip: 1 },
    { shape: 'cross', rot: 3, flip: 0 },
  ],
  'top->bottom': [
    { shape: 'straight', rot: 1, flip: 0 },
    { shape: 'straight', rot: 3, flip: 1 },
    { shape: 'tshape', rot: 1, flip: 0 },
    { shape: 'cross', rot: 1, flip: 0 },
  ],
  'top->right': [
    { shape: 'cross', rot: 0, flip: 0 },
  ],
  'bottom->top': [
    { shape: 'straight', rot: 1, flip: 1 },
    { shape: 'straight', rot: 3, flip: 0 },
    { shape: 'tshape', rot: 1, flip: 1 },
    { shape: 'cross', rot: 1, flip: 1 },
  ],
  'bottom->right': [
    { shape: 'cross', rot: 2, flip: 1 },
  ],
};

export function createSeededRng(seed: number): () => number {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * Procedural generation with guaranteed solvability across matrix blocks
 */
export function generatePathPuzzle(
  blocksCount: number = 3,
  rng?: () => number
): PathPuzzle {
  const actualRng = rng || createSeededRng(blocksCount * 99991 + 104729);
  let walk: {
    path: { r: number; c: number; entry: string; exit?: string }[];
    startRow: number;
    endRow: number;
  } | null = null;

  for (let attempt = 0; attempt < 100; attempt++) {
    let r = Math.floor(actualRng() * blocksCount);
    let c = 0;
    const path: { r: number; c: number; entry: string; exit?: string }[] = [{ r, c, entry: 'left' }];
    const visited = new Set<string>([`${r},${c}`]);
    let ok = true;

    while (c < blocksCount - 1) {
      const moves: { dr: number; dc: number; exit: string; nextEntry: string }[] = [];
      if (!visited.has(`${r},${c + 1}`)) {
        moves.push({ dr: 0, dc: 1, exit: 'right', nextEntry: 'left' });
      }
      if (r + 1 < blocksCount && !visited.has(`${r + 1},${c}`)) {
        moves.push({ dr: 1, dc: 0, exit: 'bottom', nextEntry: 'top' });
      }
      if (r - 1 >= 0 && !visited.has(`${r - 1},${c}`)) {
        moves.push({ dr: -1, dc: 0, exit: 'top', nextEntry: 'bottom' });
      }

      const validMoves = moves.filter((m) => {
        const transKey = `${path[path.length - 1].entry}->${m.exit}`;
        return Boolean(TRANSITIONS[transKey]);
      });

      if (validMoves.length === 0) {
        ok = false;
        break;
      }

      const move = validMoves[Math.floor(actualRng() * validMoves.length)];
      path[path.length - 1].exit = move.exit;
      r += move.dr;
      c += move.dc;
      visited.add(`${r},${c}`);
      path.push({ r, c, entry: move.nextEntry });
    }

    if (!ok) continue;

    const last = path[path.length - 1];
    last.exit = 'right';
    if (!TRANSITIONS[`${last.entry}->right`]) continue;

    walk = { path, startRow: path[0].r, endRow: path[path.length - 1].r };
    break;
  }

  // Fallback straight path if search attempts fail
  if (!walk) {
    const pRow = Math.floor(blocksCount / 2);
    walk = {
      path: Array.from({ length: blocksCount }, (_, c) => ({
        r: pRow,
        c,
        entry: 'left',
        exit: 'right',
      })),
      startRow: pRow,
      endRow: pRow,
    };
  }

  const startCell = { row: walk.startRow * 3 + 1, col: 0 };
  const endCell = { row: walk.endRow * 3 + 1, col: blocksCount * 3 - 1 };

  const solutionState: Record<string, { rotate: number; flip: number }> = {};
  const blockMap = new Map<string, { shape: ShapeType; solRotate: number; solFlip: number }>();

  for (const step of walk.path) {
    const transKey = `${step.entry}->${step.exit}`;
    const options = TRANSITIONS[transKey] || TRANSITIONS['left->right'];
    const chosen = options[Math.floor(actualRng() * options.length)];
    solutionState[`${step.r},${step.c}`] = { rotate: chosen.rot, flip: chosen.flip };
    blockMap.set(`${step.r},${step.c}`, {
      shape: chosen.shape,
      solRotate: chosen.rot,
      solFlip: chosen.flip,
    });
  }

  const blocks: Block[] = [];
  const ALL_SHAPES: ShapeType[] = ['straight', 'lshape', 'tshape', 'cross'];

  for (let r = 0; r < blocksCount; r++) {
    for (let c = 0; c < blocksCount; c++) {
      const key = `${r},${c}`;
      const onPath = blockMap.get(key);
      const shape = onPath ? onPath.shape : ALL_SHAPES[Math.floor(actualRng() * ALL_SHAPES.length)];

      if (!onPath) {
        solutionState[key] = { rotate: 0, flip: 0 };
      }

      // Scramble starting orientation
      const scrambledRotate = Math.floor(actualRng() * 4);
      const scrambledFlip = Math.floor(actualRng() * 2);

      blocks.push(buildBlock(r, c, shape, scrambledRotate, scrambledFlip));
    }
  }

  return {
    id: `puzzle_${blocksCount}x${blocksCount}_seed${Math.floor(actualRng() * 100000)}`,
    gridSize: blocksCount * 3,
    blocksCount,
    blocks,
    solutionState,
    startCell,
    endCell,
    timeLimit: 240,
    minMoves: walk.path.length * 2,
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
