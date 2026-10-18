import { describe, it, expect, beforeEach } from 'vitest';
import { 
  recordResult, 
  getMistakeRecords, 
  pruneMistakes 
} from '../src/lib/storage';

describe('Mistake Tracker & 2-Streak Resolution Rule', () => {
  let memoryStore: Record<string, string> = {};

  beforeEach(() => {
    memoryStore = {};
    const mockStorage = {
      getItem: (key: string) => memoryStore[key] ?? null,
      setItem: (key: string, value: string) => { memoryStore[key] = String(value); },
      removeItem: (key: string) => { delete memoryStore[key]; },
      clear: () => { memoryStore = {}; },
    };
    // @ts-expect-error mock window and localStorage
    globalThis.window = {} as unknown;
    // @ts-expect-error mock localStorage
    globalThis.localStorage = mockStorage;
  });

  it('records an incorrect attempt as an active mistake with streak 0', () => {
    recordResult('pseudo-001', 'pseudocode', false);
    const records = getMistakeRecords();
    expect(records['pseudo-001']).toBeDefined();
    expect(records['pseudo-001'].misses).toBe(1);
    expect(records['pseudo-001'].streakCorrect).toBe(0);
    expect(records['pseudo-001'].resolved).toBe(false);
  });

  it('resolves a mistake only after 2 consecutive correct re-test answers', () => {
    // 1st miss
    recordResult('pseudo-001', 'pseudocode', false);
    expect(getMistakeRecords()['pseudo-001'].resolved).toBe(false);

    // 1st correct answer -> streak = 1, still unresolved
    recordResult('pseudo-001', 'pseudocode', true);
    expect(getMistakeRecords()['pseudo-001'].streakCorrect).toBe(1);
    expect(getMistakeRecords()['pseudo-001'].resolved).toBe(false);

    // 2nd correct answer -> streak = 2, automatically resolves!
    recordResult('pseudo-001', 'pseudocode', true);
    expect(getMistakeRecords()['pseudo-001'].streakCorrect).toBe(2);
    expect(getMistakeRecords()['pseudo-001'].resolved).toBe(true);
  });

  it('resets streak and un-resolves when answered wrong', () => {
    recordResult('pseudo-001', 'pseudocode', false);
    recordResult('pseudo-001', 'pseudocode', true);
    recordResult('pseudo-001', 'pseudocode', true);
    expect(getMistakeRecords()['pseudo-001'].resolved).toBe(true);

    // Wrong answer later resets streak and re-opens the mistake
    recordResult('pseudo-001', 'pseudocode', false);
    const record = getMistakeRecords()['pseudo-001'];
    expect(record.streakCorrect).toBe(0);
    expect(record.misses).toBe(2);
    expect(record.resolved).toBe(false);
  });

  it('prunes IDs that do not exist in question pool', () => {
    recordResult('valid-1', 'section', false);
    recordResult('stale-deleted-999', 'section', false);

    const validSet = new Set(['valid-1']);
    pruneMistakes(validSet);

    const records = getMistakeRecords();
    expect(records['valid-1']).toBeDefined();
    expect(records['stale-deleted-999']).toBeUndefined();
  });
});
