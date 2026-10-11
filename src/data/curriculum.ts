export interface CourseItem {
  id: string;
  title: string;
  type: 'quiz' | 'coding' | 'game' | 'document' | 'tracer' | 'sql' | 'frontend' | 'communication';
  durationMinutes: number;
  questionCount?: number;
  completed?: boolean;
  score?: number;
  sectionId?: string;
  codingProblemIndex?: number;
}

export interface CourseFolder {
  id: string;
  title: string;
  badge?: string;
  items: CourseItem[];
}

export const ACCENTURE_CURRICULUM: CourseFolder[] = [
  {
    id: 'full-mocks',
    title: 'Accenture Full Mock Tests (Exam Simulation)',
    badge: 'High Yield',
    items: [
      { id: 'mock-1', title: 'Accenture Full Length Simulation Mock 1 (Cognitive + Tech 90 Qs)', type: 'quiz', durationMinutes: 90, questionCount: 90 },
      { id: 'mock-2', title: 'Accenture Full Length Simulation Mock 2 (Latest Slot Pattern)', type: 'quiz', durationMinutes: 90, questionCount: 90 },
      { id: 'mock-pyq-2025', title: 'Accenture Recent Slot PYQ Test (20 Dec Slot Archive)', type: 'quiz', durationMinutes: 90, questionCount: 90 },
      { id: 'mock-technical-elimination', title: 'Stage 3 Elimination Mock: Technical MCQs & Pseudocode (45 Qs)', type: 'quiz', durationMinutes: 45, questionCount: 45, sectionId: 'pseudocode' },
    ],
  },
  {
    id: 'cognitive-round',
    title: 'Stage 2: Gamified Cognitive Assessments (3 Games)',
    badge: 'Elimination',
    items: [
      { id: 'game-math-order', title: 'Game 3: Math Bubbles (Mental Sorting: Lowest to Highest)', type: 'game', durationMinutes: 10 },
      { id: 'game-lock-key', title: 'Game 2: Lock & Key / The Hidden Path (Directional Memory Maze)', type: 'game', durationMinutes: 10 },
      { id: 'game-path-builder', title: 'Game 1: Space Path (Vector Grid / Pipeline Routing)', type: 'game', durationMinutes: 15 },
    ],
  },
  {
    id: 'technical-round',
    title: 'Stage 3: Technical MCQs & Pseudocode Tracing (45 Qs)',
    badge: 'Elimination',
    items: [
      { id: 'tech-mock-1', title: 'Pseudocode High-Weightage Bitwise & Branching Drill', type: 'quiz', durationMinutes: 20, questionCount: 18, sectionId: 'pseudocode' },
      { id: 'tech-tracer', title: 'Interactive Pseudocode Line-by-Line Stepper (with Errata Alert)', type: 'tracer', durationMinutes: 30 },
      { id: 'tech-mock-2', title: 'Common Applications & MS Office (Excel/Word Shortcuts)', type: 'quiz', durationMinutes: 10, questionCount: 12, sectionId: 'ms_office' },
      { id: 'tech-mock-3', title: 'Network Security, WPA3 & Cloud Shared Responsibility Drill', type: 'quiz', durationMinutes: 12, questionCount: 10, sectionId: 'networking_cloud' },
      { id: 'cog-mock-1', title: 'Critical Reasoning & Problem Solving Drill', type: 'quiz', durationMinutes: 20, questionCount: 18, sectionId: 'critical' },
      { id: 'cog-mock-2', title: 'Abstract Reasoning & Spatial Patterns Drill', type: 'quiz', durationMinutes: 15, questionCount: 15, sectionId: 'abstract' },
      { id: 'cog-mock-3', title: 'English Ability & Verbal Rules Drill', type: 'quiz', durationMinutes: 15, questionCount: 17, sectionId: 'english' },
    ],
  },
  {
    id: 'coding-round',
    title: 'Stage 4: Algorithmic Coding (Java, Python, C#)',
    badge: 'ASE vs AASE',
    items: [
      { id: 'code-prob-1', title: 'Problem 1: Sentence Containment', type: 'coding', durationMinutes: 25, codingProblemIndex: 0 },
      { id: 'code-prob-2', title: 'Problem 2: Fruit Frequency Difference', type: 'coding', durationMinutes: 20, codingProblemIndex: 1 },
      { id: 'code-prob-3', title: 'Problem 3: Asteroid Safe Zones (Armstrong Check)', type: 'coding', durationMinutes: 15, codingProblemIndex: 2 },
      { id: 'code-prob-4', title: 'Problem 4: Detective Reva (Primes in Range [L, R])', type: 'coding', durationMinutes: 25, codingProblemIndex: 3 },
      { id: 'code-prob-5', title: 'Problem 5: Spell Bee Championship (Count Vowels)', type: 'coding', durationMinutes: 10, codingProblemIndex: 4 },
      { id: 'code-prob-6', title: 'Rat Count House (Accenture Favorite PYQ)', type: 'coding', durationMinutes: 20, codingProblemIndex: 5 },
      { id: 'code-prob-7', title: 'Binary String Operations (A, B, C Logic)', type: 'coding', durationMinutes: 25, codingProblemIndex: 6 },
    ],
  },
  {
    id: 'technical-simulators',
    title: 'Stage 4: Technical Simulators (SQL & Front-End)',
    badge: 'Role Banding',
    items: [
      { id: 'sim-sql-runner', title: 'SQL Query Console: 9 Authentic Slot Queries & Multi-Table Joins', type: 'sql', durationMinutes: 30 },
      { id: 'sim-frontend-runner', title: 'Front-End Web Simulators: Headless DOM, Product Filter & Cart', type: 'frontend', durationMinutes: 30 },
    ],
  },
  {
    id: 'communication-stage',
    title: 'Stage 5: AI Voice Communication Assessment Guide',
    badge: 'Scheduled Later',
    items: [
      { id: 'item-communication-guide', title: 'Stage 5 Voice-Testing Platform Mechanics & Audio Simulation', type: 'communication', durationMinutes: 20 },
    ],
  },
  {
    id: 'remediation',
    title: 'Error Notebook & Telemetry',
    badge: 'Personal',
    items: [
      { id: 'item-mistakes', title: 'Mistake Vault & Targeted Re-test', type: 'document', durationMinutes: 15 },
      { id: 'item-analytics', title: 'Readiness Index & Cutoff Tracker', type: 'document', durationMinutes: 5 },
    ],
  },
];
