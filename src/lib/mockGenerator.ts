import { ACCENTURE_QUESTIONS } from '../data/questions';
import { Question } from '../types';

export interface MockSection {
  id: string;
  title: string;
  count: number;
  minutes: number;
}

export interface MockPlan {
  id: string;
  title: string;
  description: string;
  sections: MockSection[];
  negativeMarking: number; // 0 for Accenture standard campus test
  seed?: string | number;
}

export interface GeneratedMockSection extends MockSection {
  questions: Question[];
}

export interface GeneratedMock {
  id: string;
  title: string;
  description: string;
  sections: GeneratedMockSection[];
  questions: Question[];
  durationMinutes: number;
  negativeMarking: number;
  seed: string | number;
}

/**
 * Deterministic seedable RNG (Mulberry32)
 */
export function createSeededRng(seed: string | number = Date.now()): () => number {
  let s = typeof seed === 'number' ? seed : 0;
  if (typeof seed === 'string') {
    for (let i = 0; i < seed.length; i++) {
      s = (Math.imul(31, s) + seed.charCodeAt(i)) | 0;
    }
  }
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Fisher-Yates array shuffle using an injectable RNG
 */
export function shuffleArray<T>(array: T[], rng: () => number = Math.random): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Samples N random distinct questions from a pool
 */
export function sampleQuestions(
  pool: Question[],
  count: number,
  rng: () => number = Math.random
): Question[] {
  const shuffled = shuffleArray(pool, rng);
  return shuffled.slice(0, count);
}

/**
 * Core mock builder: constructs sections from a blueprint plan.
 * Throws explicit descriptive error if pool has insufficient questions.
 */
export function buildMock(
  plan: MockPlan,
  pool: Question[] = ACCENTURE_QUESTIONS,
  seed: string | number = Date.now()
): GeneratedMock {
  const rng = createSeededRng(seed);
  const generatedSections: GeneratedMockSection[] = [];
  const allQuestions: Question[] = [];

  for (const section of plan.sections) {
    const available = pool.filter((q) => q.sectionId === section.id);
    if (available.length < section.count) {
      throw new Error(
        `Section "${section.id}" (${section.title}) requires ${section.count} questions, but only ${available.length} questions are available in the question bank.`
      );
    }

    const selected = sampleQuestions(available, section.count, rng);
    generatedSections.push({
      ...section,
      questions: selected,
    });
    allQuestions.push(...selected);
  }

  const totalMinutes = plan.sections.reduce((acc, s) => acc + s.minutes, 0);

  return {
    id: `${plan.id}_${seed}`,
    title: plan.title,
    description: plan.description,
    sections: generatedSections,
    questions: allQuestions,
    durationMinutes: totalMinutes,
    negativeMarking: plan.negativeMarking ?? 0,
    seed,
  };
}

/**
 * Standard 90-Question Accenture Campus Recruitment Mock Plan
 */
export const FULL_MOCK_PLAN: MockPlan = {
  id: 'full_mock',
  title: 'Accenture Full Mock Simulation',
  description: 'Stage 3 Integrated Assessment: Cognitive & Technical (90 Questions • 90 Minutes)',
  negativeMarking: 0,
  sections: [
    { id: 'critical', title: 'Critical Reasoning & Problem Solving', count: 15, minutes: 15 },
    { id: 'quantitative', title: 'Quantitative Aptitude', count: 15, minutes: 15 },
    { id: 'abstract', title: 'Abstract Reasoning', count: 12, minutes: 12 },
    { id: 'english', title: 'English Ability', count: 15, minutes: 15 },
    { id: 'pseudocode', title: 'Pseudocode Execution', count: 15, minutes: 15 },
    { id: 'core_cs_dsa', title: 'Core CS, OOP & Data Structures', count: 10, minutes: 10 },
    { id: 'ms_office', title: 'MS Office & Common Applications', count: 5, minutes: 5 },
    { id: 'networking_cloud', title: 'Network Security & Cloud', count: 3, minutes: 3 },
  ],
};

/**
 * Standard 45-Question Technical & Pseudocode Elimination Mock Plan
 */
export const TECHNICAL_ELIMINATION_PLAN: MockPlan = {
  id: 'tech_elimination',
  title: 'Stage 3 Elimination Mock',
  description: 'Technical Elimination Assessment (45 Questions • 45 Minutes)',
  negativeMarking: 0,
  sections: [
    { id: 'pseudocode', title: 'Pseudocode Execution', count: 15, minutes: 15 },
    { id: 'core_cs_dsa', title: 'Core CS, OOP & Data Structures', count: 15, minutes: 15 },
    { id: 'ms_office', title: 'MS Office & Common Applications', count: 8, minutes: 8 },
    { id: 'networking_cloud', title: 'Network Security & Cloud', count: 7, minutes: 7 },
  ],
};

export function generateFullMock(
  title: string = 'Accenture Full Mock Simulation',
  seed: string | number = Date.now()
): {
  questions: Question[];
  title: string;
  durationMinutes: number;
  mock: GeneratedMock;
} {
  const mock = buildMock({ ...FULL_MOCK_PLAN, title }, ACCENTURE_QUESTIONS, seed);
  return {
    questions: mock.questions,
    title: mock.title,
    durationMinutes: mock.durationMinutes,
    mock,
  };
}

export function generateTechnicalEliminationMock(
  title: string = 'Stage 3 Elimination Mock',
  seed: string | number = Date.now()
): {
  questions: Question[];
  title: string;
  durationMinutes: number;
  mock: GeneratedMock;
} {
  const mock = buildMock({ ...TECHNICAL_ELIMINATION_PLAN, title }, ACCENTURE_QUESTIONS, seed);
  return {
    questions: mock.questions,
    title: mock.title,
    durationMinutes: mock.durationMinutes,
    mock,
  };
}

/**
 * Generates a targeted Sectional Drill.
 * Throws explicit error on shortfall; never silently substitutes unrelated questions.
 */
export function generateSectionalDrill(
  sectionId: string,
  count: number,
  title: string,
  durationMinutes: number,
  seed: string | number = Date.now()
): {
  questions: Question[];
  title: string;
  durationMinutes: number;
} {
  const pool = ACCENTURE_QUESTIONS.filter((q) => q.sectionId === sectionId);
  if (pool.length === 0) {
    throw new Error(`Cannot generate sectional drill: No questions available for section "${sectionId}".`);
  }
  if (pool.length < count) {
    throw new Error(
      `Cannot generate drill: requested ${count} questions but section "${sectionId}" only contains ${pool.length} questions.`
    );
  }

  const rng = createSeededRng(seed);
  const selected = sampleQuestions(pool, count, rng);

  return {
    questions: selected,
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
  title: string = 'Custom Adaptive Mock',
  seed: string | number = Date.now()
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
    throw new Error(`No questions matching specified filters (${sections.join(', ')} [${difficulty}]).`);
  }

  const rng = createSeededRng(seed);
  const actualCount = Math.min(count, pool.length);
  const selected = sampleQuestions(pool, actualCount, rng);
  const duration = Math.max(10, Math.round(selected.length * 1.0)); // 1 min per Q

  return {
    questions: selected,
    title,
    durationMinutes: duration,
  };
}
