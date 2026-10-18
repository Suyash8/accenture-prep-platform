import { describe, it, expect } from 'vitest';
import { 
  generateMathQuestion, 
  areRationalsEqual, 
  compareRationals, 
  makeRational, 
  isOrderLowestToHighest 
} from '../src/lib/games/mathOrder';
import { 
  generateMazeLevel, 
  isMazeSolvable 
} from '../src/lib/games/memoryMaze';
import { 
  generatePathPuzzle, 
  isPathPuzzleSolvable, 
  validatePath, 
  buildBlock 
} from '../src/lib/games/pathFinder';

describe('Math Order Challenge Game Fidelity', () => {
  it('guarantees exactly 3 strictly distinct bubbles across 500 questions', () => {
    for (let i = 1; i <= 500; i++) {
      const q = generateMathQuestion(i);
      expect(q.bubbles.length).toBe(3);
      expect(q.values.length).toBe(3);

      const [v1, v2, v3] = q.values;
      // Pairwise distinct (no ambiguous ties)
      expect(areRationalsEqual(v1, v2)).toBe(false);
      expect(areRationalsEqual(v2, v3)).toBe(false);
      expect(areRationalsEqual(v1, v3)).toBe(false);
    }
  });

  it('performs exact cross-multiplied comparisons for fractions', () => {
    // 1/3 vs 1/3 + 1e-16 (standard floats can fail equality or order)
    const r1 = makeRational(1, 3);
    const r2 = makeRational(2, 6);
    expect(areRationalsEqual(r1, r2)).toBe(true);

    const r3 = makeRational(10, 31); // ~0.32258
    const r4 = makeRational(1, 3);   // ~0.33333
    const r5 = makeRational(7, 20);  // 0.35
    expect(compareRationals(r3, r4)).toBe(-1);
    expect(compareRationals(r4, r5)).toBe(-1);
    expect(isOrderLowestToHighest(r3, r4, r5)).toBe(true);
    expect(isOrderLowestToHighest(r5, r4, r3)).toBe(false);
  });
});

describe('Memory Maze Game Fidelity & Reachability', () => {
  it('proves 100% solvability with BFS over 1,000 generated mazes for size 3x3', () => {
    for (let i = 0; i < 1000; i++) {
      const maze = generateMazeLevel(3);
      expect(isMazeSolvable(maze)).toBe(true);
    }
  });

  it('proves 100% solvability with BFS over 1,000 generated mazes for size 4x4', () => {
    for (let i = 0; i < 1000; i++) {
      const maze = generateMazeLevel(4);
      expect(isMazeSolvable(maze)).toBe(true);
    }
  });

  it('proves 100% solvability with BFS over 1,000 generated mazes for size 5x5', () => {
    for (let i = 0; i < 1000; i++) {
      const maze = generateMazeLevel(5);
      expect(isMazeSolvable(maze)).toBe(true);
    }
  });
});

describe('Path Finder (Grid Path Builder) Solvability & Loop Protection', () => {
  it('guarantees start (Rocket) and end (Earth) sit on center row of their blocks', () => {
    for (let size = 3; size <= 4; size++) {
      const puzzle = generatePathPuzzle(size);
      // Local row 1 is row % 3 === 1
      expect(puzzle.startCell.row % 3).toBe(1);
      expect(puzzle.endCell.row % 3).toBe(1);
    }
  });

  it('detects and terminates loops without infinite loops', () => {
    const puzzle = generatePathPuzzle(3);
    // Create an intentional 4-way loop block
    const loopBlocks = [
      buildBlock(0, 0, 'cross', 0, 0),
      buildBlock(0, 1, 'lshape', 1, 0),
    ];
    const res = validatePath(puzzle, loopBlocks);
    // Should terminate gracefully and not hang
    expect(typeof res.success).toBe('boolean');
  });

  it('proves generated path puzzles are solvable', () => {
    for (let i = 0; i < 50; i++) {
      const puzzle = generatePathPuzzle(3);
      expect(isPathPuzzleSolvable(puzzle)).toBe(true);
    }
  });
});
