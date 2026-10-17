import { describe, it, expect } from 'vitest';
import { ACCENTURE_SJT_ITEMS } from '../src/data/sjtQuestions';

describe('SJT Dataset & Consistency Pair Integrity', () => {
  it('contains exactly 50 authentic scenario questions', () => {
    expect(ACCENTURE_SJT_ITEMS.length).toBe(50);
  });

  it('has at least 10 reciprocal pairs (20 paired items)', () => {
    const itemMap = new Map(ACCENTURE_SJT_ITEMS.map((item) => [item.id, item]));
    const pairedItems = ACCENTURE_SJT_ITEMS.filter((item) => Boolean(item.pair));
    expect(pairedItems.length).toBeGreaterThanOrEqual(20);

    for (const item of pairedItems) {
      const pairId = item.pair!.id;
      const partner = itemMap.get(pairId);

      // Partner must exist
      expect(partner).toBeDefined();

      // Pair must be reciprocal: partner.pair.id === item.id
      expect(partner?.pair).toBeDefined();
      expect(partner?.pair?.id).toBe(item.id);

      // Must share the exact same competency
      expect(partner?.competency).toBe(item.competency);
    }
  });

  it('ensures all items have 4 options with scores in range 0-4', () => {
    for (const item of ACCENTURE_SJT_ITEMS) {
      expect(item.options.length).toBe(4);
      const scores = item.options.map((o) => o.score);
      for (const s of scores) {
        expect([0, 1, 2, 3, 4]).toContain(s);
      }
      // Highest desirability is score 4
      expect(Math.max(...scores)).toBe(4);
    }
  });

  it('covers all 4 competencies with balanced distribution', () => {
    const counts: Record<string, number> = {};
    for (const item of ACCENTURE_SJT_ITEMS) {
      counts[item.competency] = (counts[item.competency] || 0) + 1;
    }
    expect(counts['Client Centricity']).toBeGreaterThanOrEqual(12);
    expect(counts['Collaboration']).toBeGreaterThanOrEqual(12);
    expect(counts['Agility & Growth']).toBeGreaterThanOrEqual(12);
    expect(counts['Integrity & Ownership']).toBeGreaterThanOrEqual(12);
  });
});
