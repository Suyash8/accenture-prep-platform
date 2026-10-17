import { describe, it, expect } from 'vitest';
import { 
  buildMock, 
  generateSectionalDrill, 
  FULL_MOCK_PLAN, 
  createSeededRng 
} from '../src/lib/mockGenerator';
import { ACCENTURE_QUESTIONS } from '../src/data/questions';

describe('Mock Generator Engine', () => {
  it('builds full 90-question mock matching section count specifications', () => {
    const mock = buildMock(FULL_MOCK_PLAN, ACCENTURE_QUESTIONS, 12345);
    expect(mock.questions.length).toBe(90);
    expect(mock.sections.length).toBe(8);

    const sectionMap = new Map(mock.sections.map((s) => [s.id, s]));
    expect(sectionMap.get('critical')?.questions.length).toBe(15);
    expect(sectionMap.get('quantitative')?.questions.length).toBe(15);
    expect(sectionMap.get('abstract')?.questions.length).toBe(12);
    expect(sectionMap.get('english')?.questions.length).toBe(15);
    expect(sectionMap.get('pseudocode')?.questions.length).toBe(15);
    expect(sectionMap.get('core_cs_dsa')?.questions.length).toBe(10);
    expect(sectionMap.get('ms_office')?.questions.length).toBe(5);
    expect(sectionMap.get('networking_cloud')?.questions.length).toBe(3);
  });

  it('throws an explicit error when pool is too short for a section', () => {
    const invalidPlan = {
      id: 'short_plan',
      title: 'Short Plan',
      description: 'Test',
      negativeMarking: 0,
      sections: [{ id: 'pseudocode', title: 'Pseudocode', count: 9999, minutes: 10 }],
    };

    expect(() => buildMock(invalidPlan, ACCENTURE_QUESTIONS)).toThrowError(
      /requires 9999 questions, but only \d+ questions are available/
    );
  });

  it('produces identical questions with same seed and distinct with different seeds', () => {
    const mockA = buildMock(FULL_MOCK_PLAN, ACCENTURE_QUESTIONS, 'seed_abc_123');
    const mockB = buildMock(FULL_MOCK_PLAN, ACCENTURE_QUESTIONS, 'seed_abc_123');
    const mockC = buildMock(FULL_MOCK_PLAN, ACCENTURE_QUESTIONS, 'seed_xyz_999');

    expect(mockA.questions.map((q) => q.id)).toEqual(mockB.questions.map((q) => q.id));
    expect(mockA.questions.map((q) => q.id)).not.toEqual(mockC.questions.map((q) => q.id));
  });

  it('throws in generateSectionalDrill on shortfall instead of silently returning random questions', () => {
    expect(() =>
      generateSectionalDrill('nonexistent_section', 10, 'Drill', 10)
    ).toThrowError(/Cannot generate sectional drill: No questions available/);

    expect(() =>
      generateSectionalDrill('ms_office', 9999, 'Big Office Drill', 10)
    ).toThrowError(/requested 9999 questions but section "ms_office" only contains/);
  });
});
