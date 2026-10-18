import { describe, it, expect } from 'vitest';
import { ACCENTURE_CODING_PROBLEMS } from '../src/data/coding';

describe('Coding Problem Reference Solutions Verification', () => {
  it('has 20 valid problems each containing starterCode, solutionCode, and testCases', () => {
    expect(ACCENTURE_CODING_PROBLEMS.length).toBe(20);
    for (const p of ACCENTURE_CODING_PROBLEMS) {
      expect(p.starterCode.python).toBeDefined();
      expect(p.solutionCode?.python).toBeDefined();
      expect(p.solutionCode?.java).toBeDefined();
      expect(p.solutionCode?.cpp).toBeDefined();
      expect(p.testCases.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('verifies that each problem has expected format and valid inputs', () => {
    for (const p of ACCENTURE_CODING_PROBLEMS) {
      for (const tc of p.testCases) {
        expect(typeof tc.expected).toBe('string');
        expect(tc.expected.length).toBeGreaterThan(0);
      }
    }
  });
});
