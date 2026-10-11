import { ACCENTURE_QUESTIONS } from '../data/questions';
import { Question } from '../types';

/**
 * Fisher-Yates array shuffle helper
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Samples N random distinct questions from a filtered question set
 */
export function sampleQuestions(pool: Question[], count: number): Question[] {
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Generates an authentic 90-Question Full Length Accenture Mock Test
 * Comprehensive coverage across Cognitive, Technical, Core CS & Quantitative:
 * - Critical Reasoning: 15 Qs
 * - Quantitative Aptitude & Maths: 15 Qs
 * - Abstract Reasoning: 12 Qs
 * - English Ability: 15 Qs
 * - Pseudocode Execution: 15 Qs
 * - Core CS, OOP & Data Structures: 10 Qs
 * - MS Office & Applications: 5 Qs
 * - Network Security & Cloud: 3 Qs
 * Total = 90 Questions (90 Minutes)
 */
export function generateFullMock(title: string = 'Accenture Full Mock Simulation'): {
  questions: Question[];
  title: string;
  durationMinutes: number;
} {
  const critical = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'critical'),
    15
  );
  const quantitative = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'quantitative'),
    15
  );
  const abstract = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'abstract'),
    12
  );
  const english = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'english'),
    15
  );
  const pseudocode = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'pseudocode'),
    15
  );
  const coreCs = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'core_cs_dsa'),
    10
  );
  const msOffice = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'ms_office'),
    5
  );
  const netCloud = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'networking_cloud'),
    3
  );

  const combined = shuffleArray([
    ...critical,
    ...quantitative,
    ...abstract,
    ...english,
    ...pseudocode,
    ...coreCs,
    ...msOffice,
    ...netCloud,
  ]);

  return {
    questions: combined,
    title,
    durationMinutes: 90,
  };
}

/**
 * Generates an authentic 45-Question Technical & Pseudocode Elimination Mock
 * Breakdown:
 * - Pseudocode Execution: 15 Qs
 * - Core CS, OOP & Data Structures: 15 Qs
 * - MS Office & Common Applications: 8 Qs
 * - Network Security & Cloud: 7 Qs
 * Total = 45 Questions (45 Minutes)
 */
export function generateTechnicalEliminationMock(title: string = 'Stage 3 Elimination Mock'): {
  questions: Question[];
  title: string;
  durationMinutes: number;
} {
  const pseudocode = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'pseudocode'),
    15
  );
  const coreCs = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'core_cs_dsa'),
    15
  );
  const msOffice = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'ms_office'),
    8
  );
  const netCloud = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'networking_cloud'),
    7
  );

  const combined = shuffleArray([...pseudocode, ...coreCs, ...msOffice, ...netCloud]);

  return {
    questions: combined,
    title,
    durationMinutes: 45,
  };
}

/**
 * Generates a targeted Sectional Drill with N randomly sampled questions
 */
export function generateSectionalDrill(
  sectionId: string,
  count: number,
  title: string,
  durationMinutes: number
): {
  questions: Question[];
  title: string;
  durationMinutes: number;
} {
  const pool = ACCENTURE_QUESTIONS.filter((q) => q.sectionId === sectionId);
  const selected = sampleQuestions(pool, count);

  return {
    questions: selected.length > 0 ? selected : sampleQuestions(ACCENTURE_QUESTIONS, count),
    title,
    durationMinutes,
  };
}

/**
 * Generates a customized adaptive mock test from user specifications
 */
export function generateCustomAdaptiveMock(
  count: number,
  sections: string[],
  difficulty: 'All' | 'Easy' | 'Medium' | 'Hard',
  title: string = 'Custom Adaptive Mock'
): {
  questions: Question[];
  title: string;
  durationMinutes: number;
} {
  let pool = ACCENTURE_QUESTIONS.filter((q) => sections.includes(q.sectionId));
  if (difficulty !== 'All') {
    pool = pool.filter((q) => q.difficulty === difficulty);
  }

  if (pool.length === 0) {
    pool = ACCENTURE_QUESTIONS;
  }

  const selected = sampleQuestions(pool, count);
  const duration = Math.max(10, Math.round(selected.length * 1.0)); // 1 min per Q

  return {
    questions: selected,
    title,
    durationMinutes: duration,
  };
}
