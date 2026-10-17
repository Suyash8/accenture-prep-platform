export type Coord = [number, number];
export type Wall = [number, number, number, number];

export interface MazeLevelConfig {
  gridSize: number;
  startPos: Coord;
  keyPositions: Coord[];
  doorPos: Coord;
  walls: Wall[];
}

export function isAdjacent(r1: number, c1: number, r2: number, c2: number): boolean {
  return (Math.abs(r1 - r2) === 1 && c1 === c2) || (Math.abs(c1 - c2) === 1 && r1 === r2);
}

function edgeKey(r1: number, c1: number, r2: number, c2: number): string {
  return `${r1},${c1}-${r2},${c2}`;
}

/**
 * BFS reachability check: can a player navigate from `from` to `to`
 * given the grid dimensions and placed walls?
 */
export function canReach(
  from: Coord,
  to: Coord,
  gridSize: number,
  walls: Wall[]
): boolean {
  const wallSet = new Set<string>();
  for (const [w1r, w1c, w2r, w2c] of walls) {
    wallSet.add(edgeKey(w1r, w1c, w2r, w2c));
    wallSet.add(edgeKey(w2r, w2c, w1r, w1c));
  }

  const queue: Coord[] = [from];
  const visited = new Set<string>([`${from[0]},${from[1]}`]);

  const deltas = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift()!;
    if (r === to[0] && c === to[1]) return true;

    for (const [dr, dc] of deltas) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= gridSize || nc < 0 || nc >= gridSize) continue;

      const visitKey = `${nr},${nc}`;
      if (visited.has(visitKey)) continue;

      // Check if blocked by wall
      if (wallSet.has(edgeKey(r, c, nr, nc))) continue;

      visited.add(visitKey);
      queue.push([nr, nc]);
    }
  }

  return false;
}

/**
 * Validates that every key and the final door are sequentially reachable from the start
 */
export function isMazeSolvable(level: MazeLevelConfig): boolean {
  const waypoints = [level.startPos, ...level.keyPositions, level.doorPos];
  for (let i = 0; i < waypoints.length - 1; i++) {
    if (!canReach(waypoints[i], waypoints[i + 1], level.gridSize, level.walls)) {
      return false;
    }
  }
  return true;
}

export function generateMazeLevel(
  gridSize: number,
  keyCountOrRng?: number | (() => number),
  maybeRng?: () => number
): MazeLevelConfig {
  let keyCount = gridSize === 3 ? 1 : gridSize === 4 ? 2 : 3;
  let rng: () => number = Math.random;

  if (typeof keyCountOrRng === 'number') {
    keyCount = keyCountOrRng;
    if (typeof maybeRng === 'function') {
      rng = maybeRng;
    }
  } else if (typeof keyCountOrRng === 'function') {
    rng = keyCountOrRng;
  }

  const startPos: Coord = [0, 0];
  const doorPos: Coord = [gridSize - 1, gridSize - 1];
  const keyPositions: Coord[] = [];

  while (keyPositions.length < keyCount) {
    const r = Math.floor(rng() * gridSize);
    const c = Math.floor(rng() * gridSize);
    const isStart = r === startPos[0] && c === startPos[1];
    const isDoor = r === doorPos[0] && c === doorPos[1];
    const isDuplicate = keyPositions.some(([kr, kc]) => kr === r && kc === c);

    if (!isStart && !isDoor && !isDuplicate) {
      keyPositions.push([r, c]);
    }
  }

  // Carve a guaranteed contiguous path through all waypoints
  const waypoints: Coord[] = [startPos, ...keyPositions, doorPos];
  const clearEdges = new Set<string>();

  for (let i = 0; i < waypoints.length - 1; i++) {
    let [currR, currC] = waypoints[i];
    const [targetR, targetC] = waypoints[i + 1];

    while (currR !== targetR || currC !== targetC) {
      const moveVertical = currR !== targetR && (currC === targetC || rng() > 0.5);
      const nextR = moveVertical ? (targetR > currR ? currR + 1 : currR - 1) : currR;
      const nextC = !moveVertical ? (targetC > currC ? currC + 1 : currC - 1) : currC;

      clearEdges.add(edgeKey(currR, currC, nextR, nextC));
      clearEdges.add(edgeKey(nextR, nextC, currR, currC));

      currR = nextR;
      currC = nextC;
    }
  }

  // Generate candidate walls that do NOT cross the guaranteed clear path
  const candidateWalls: Wall[] = [];
  const targetWallCount = gridSize === 3 ? 3 : gridSize === 4 ? 7 : 11;

  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      // Horizontal wall: (r, c) to (r+1, c)
      if (r + 1 < gridSize) {
        if (!clearEdges.has(edgeKey(r, c, r + 1, c))) {
          candidateWalls.push([r, c, r + 1, c]);
        }
      }
      // Vertical wall: (r, c) to (r, c+1)
      if (c + 1 < gridSize) {
        if (!clearEdges.has(edgeKey(r, c, r, c + 1))) {
          candidateWalls.push([r, c, r, c + 1]);
        }
      }
    }
  }

  // Shuffle candidate walls with rng
  const shuffledWalls = [...candidateWalls].sort(() => 0.5 - rng());
  const selectedWalls: Wall[] = [];

  for (const wall of shuffledWalls) {
    if (selectedWalls.length >= targetWallCount) break;

    // Test if adding this wall keeps the maze solvable
    const testWalls = [...selectedWalls, wall];
    const testLevel: MazeLevelConfig = {
      gridSize,
      startPos,
      keyPositions,
      doorPos,
      walls: testWalls,
    };

    if (isMazeSolvable(testLevel)) {
      selectedWalls.push(wall);
    }
  }

  return {
    gridSize,
    startPos,
    keyPositions,
    doorPos,
    walls: selectedWalls,
  };
}
