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
 * Breakdown strictly calibrated to HirePro / CoCubes specifications:
 * - Critical Reasoning: 18 Qs
 * - Abstract Reasoning: 15 Qs
 * - English Ability: 17 Qs
 * - Pseudocode: 18 Qs
 * - MS Office & Applications: 12 Qs
 * - Network Security & Cloud: 10 Qs
 * Total = 90 Questions
 */
export function generateFullMock(title: string = 'Accenture Full Mock Simulation'): {
  questions: Question[];
  title: string;
  durationMinutes: number;
} {
  const critical = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'critical'),
    18
  );
  const abstract = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'abstract'),
    15
  );
  const english = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'english'),
    17
  );
  const pseudocode = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'pseudocode'),
    18
  );
  const msOffice = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'ms_office'),
    12
  );
  const netCloud = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'networking_cloud'),
    10
  );

  const combined = shuffleArray([
    ...critical,
    ...abstract,
    ...english,
    ...pseudocode,
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
 * - Pseudocode: 18 Qs
 * - MS Office: 15 Qs
 * - Network Security & Cloud: 12 Qs
 * Total = 45 Questions (45 Minutes)
 */
export function generateTechnicalEliminationMock(title: string = 'Stage 3 Elimination Mock'): {
  questions: Question[];
  title: string;
  durationMinutes: number;
} {
  const pseudocode = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'pseudocode'),
    18
  );
  const msOffice = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'ms_office'),
    15
  );
  const netCloud = sampleQuestions(
    ACCENTURE_QUESTIONS.filter((q) => q.sectionId === 'networking_cloud'),
    12
  );

  const combined = shuffleArray([...pseudocode, ...msOffice, ...netCloud]);

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
