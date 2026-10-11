export interface CourseItem {
  id: string;
  title: string;
  type: 'quiz' | 'coding' | 'game' | 'document' | 'tracer' | 'sql' | 'frontend' | 'communication' | 'diagnostic' | 'custom_mock' | 'sjt';
  durationMinutes: number;
  questionCount?: number;
  completed?: boolean;
  score?: number;
  sectionId?: string;
  codingProblemIndex?: number;
  stageBadge?: string;
}

export interface CourseFolder {
  id: string;
  title: string;
  stageNumber?: string;
  badge?: string;
  description?: string;
  items: CourseItem[];
}

export const ACCENTURE_CURRICULUM: CourseFolder[] = [
  {
    id: 'stage-1-sjt',
    title: 'Stage 1: Behavioral Profile Assessment (SJT)',
    stageNumber: 'STAGE 1',
    badge: 'Mandatory • ~20 Mins',
    description: 'Workplace Situational Judgment, Consistency Rules & Decision Matrix',
    items: [
      { id: 'item-sjt-sim', title: 'Behavioral SJT Simulator (Paired Consistency & Culture Fit)', type: 'sjt', durationMinutes: 20, questionCount: 50, stageBadge: 'Stage 1' },
      { id: 'item-diagnostic-sjt', title: 'SJT Decision Guide & Consistency Principles Matrix', type: 'diagnostic', durationMinutes: 15, stageBadge: 'Stage 1' },
    ],
  },
  {
    id: 'cognitive-round',
    title: 'Stage 2: Gamified Cognitive Assessments (3 Games)',
    stageNumber: 'STAGE 2',
    badge: 'Elimination Round',
    description: 'Mental calculation speed, vector pipeline orientation & working memory retention',
    items: [
      { id: 'game-math-order', title: 'Game 3: Math Bubbles (Rapid Mental Sorting: Lowest to Highest)', type: 'game', durationMinutes: 10, stageBadge: 'Stage 2' },
      { id: 'game-path-builder', title: 'Game 1: Space Path (Vector Grid / Pipeline Routing 4x4 to 6x6)', type: 'game', durationMinutes: 15, stageBadge: 'Stage 2' },
      { id: 'game-lock-key', title: 'Game 2: Lock & Key / The Hidden Path (Directional Doors Fog-of-War)', type: 'game', durationMinutes: 12, stageBadge: 'Stage 2' },
    ],
  },
  {
    id: 'technical-round',
    title: 'Stage 3: Technical MCQs & Pseudocode Tracing (45 Qs)',
    stageNumber: 'STAGE 3',
    badge: 'Elimination Round',
    description: '45 Questions in 45 Minutes • Core CS, Cloud, Networking, MS Office & Bitwise Pseudocode',
    items: [
      { id: 'mock-technical-elimination', title: 'Stage 3 Full Elimination Mock: 45 MCQs in 45 Mins', type: 'quiz', durationMinutes: 45, questionCount: 45, sectionId: 'pseudocode', stageBadge: 'Stage 3' },
      { id: 'tech-tracer', title: 'Interactive Pseudocode Line-by-Line Stepper (with Errata Alert 38 vs 28)', type: 'tracer', durationMinutes: 30, stageBadge: 'Stage 3' },
      { id: 'item-diagnostic-hub', title: 'Topic Diagnostic Hub: Bitwise, Networking, MS Excel & Cloud Lab', type: 'diagnostic', durationMinutes: 25, stageBadge: 'Stage 3' },
      { id: 'tech-mock-1', title: 'Bitwise Loop Accumulator & Operator Precedence Drill', type: 'quiz', durationMinutes: 20, questionCount: 18, sectionId: 'pseudocode', stageBadge: 'Stage 3' },
      { id: 'cs-mock-1', title: 'Core CS, Data Structures & OOP Concepts Drill', type: 'quiz', durationMinutes: 15, questionCount: 15, sectionId: 'core_cs_dsa', stageBadge: 'Stage 3' },
      { id: 'quant-mock-1', title: 'Quantitative Aptitude & Numerical Ability Drill', type: 'quiz', durationMinutes: 20, questionCount: 20, sectionId: 'quantitative', stageBadge: 'Stage 3' },
      { id: 'tech-mock-2', title: 'Common Applications & MS Office (Excel & Word Shortcuts)', type: 'quiz', durationMinutes: 10, questionCount: 12, sectionId: 'ms_office', stageBadge: 'Stage 3' },
      { id: 'tech-mock-3', title: 'Network Security, WPA3 SAE & Cloud Shared Responsibility Drill', type: 'quiz', durationMinutes: 12, questionCount: 10, sectionId: 'networking_cloud', stageBadge: 'Stage 3' },
      { id: 'cog-mock-1', title: 'Critical Reasoning & Problem Solving Drill', type: 'quiz', durationMinutes: 20, questionCount: 18, sectionId: 'critical', stageBadge: 'Stage 3' },
      { id: 'cog-mock-2', title: 'Abstract Reasoning & Spatial Matrix Patterns Drill', type: 'quiz', durationMinutes: 15, questionCount: 15, sectionId: 'abstract', stageBadge: 'Stage 3' },
      { id: 'cog-mock-3', title: 'English Ability & Verbal Grammar Rules Drill', type: 'quiz', durationMinutes: 15, questionCount: 17, sectionId: 'english', stageBadge: 'Stage 3' },
    ],
  },
  {
    id: 'coding-round',
    title: 'Stage 4: Algorithmic Coding (Java, Python, C#, C++)',
    stageNumber: 'STAGE 4',
    badge: 'ASE vs AASE Role Banding',
    description: '20 Authentic Problems with real compiler test harness & Monaco editor',
    items: [
      { id: 'code-prob-1', title: 'Problem 1: Sentence Containment', type: 'coding', durationMinutes: 25, codingProblemIndex: 0, stageBadge: 'Strings' },
      { id: 'code-prob-2', title: 'Problem 2: Fruit Frequency Difference', type: 'coding', durationMinutes: 20, codingProblemIndex: 1, stageBadge: 'Hash Map' },
      { id: 'code-prob-3', title: 'Problem 3: Asteroid Safe Zones (Armstrong Check)', type: 'coding', durationMinutes: 15, codingProblemIndex: 2, stageBadge: 'Math' },
      { id: 'code-prob-4', title: 'Problem 4: LargeSmallSum (Second Largest & Smallest)', type: 'coding', durationMinutes: 20, codingProblemIndex: 3, stageBadge: 'Arrays' },
      { id: 'code-prob-5', title: 'Problem 5: Product of Smallest Pair', type: 'coding', durationMinutes: 15, codingProblemIndex: 4, stageBadge: 'Arrays' },
      { id: 'code-prob-6', title: 'Problem 6: Difference of Sum (Divisibility)', type: 'coding', durationMinutes: 15, codingProblemIndex: 5, stageBadge: 'Math' },
      { id: 'code-prob-7', title: 'Problem 7: Move Hyphens to Front', type: 'coding', durationMinutes: 15, codingProblemIndex: 6, stageBadge: 'Strings' },
      { id: 'code-prob-8', title: 'Problem 8: Number of Carries', type: 'coding', durationMinutes: 15, codingProblemIndex: 7, stageBadge: 'Math' },
      { id: 'code-prob-9', title: 'Problem 9: Automorphic Number Check', type: 'coding', durationMinutes: 15, codingProblemIndex: 8, stageBadge: 'Math' },
      { id: 'code-prob-10', title: 'Problem 10: Maximum Element and Its Index', type: 'coding', durationMinutes: 10, codingProblemIndex: 9, stageBadge: 'Arrays' },
      { id: 'code-prob-11', title: 'Problem 11: Superior Elements (Leaders in Array)', type: 'coding', durationMinutes: 20, codingProblemIndex: 10, stageBadge: 'Arrays' },
      { id: 'code-prob-12', title: 'Problem 12: Password Checker Validator', type: 'coding', durationMinutes: 15, codingProblemIndex: 11, stageBadge: 'Strings' },
      { id: 'code-prob-13', title: 'Problem 13: Single Unique Element (XOR)', type: 'coding', durationMinutes: 15, codingProblemIndex: 12, stageBadge: 'Bitwise' },
      { id: 'code-prob-14', title: 'Problem 14: Maximum Subarray Sum (Kadane)', type: 'coding', durationMinutes: 20, codingProblemIndex: 13, stageBadge: 'DP / Greedy' },
      { id: 'code-prob-15', title: 'Problem 15: Majority Element (> n/2)', type: 'coding', durationMinutes: 15, codingProblemIndex: 14, stageBadge: 'Arrays' },
      { id: 'code-prob-16', title: 'Problem 16: Reverse Words in Sentence', type: 'coding', durationMinutes: 15, codingProblemIndex: 15, stageBadge: 'Strings' },
      { id: 'code-prob-17', title: 'Problem 17: Rat Count House (PYQ Favorite)', type: 'coding', durationMinutes: 20, codingProblemIndex: 16, stageBadge: 'Greedy' },
      { id: 'code-prob-18', title: 'Problem 18: Binary String Operations (A, B, C)', type: 'coding', durationMinutes: 20, codingProblemIndex: 17, stageBadge: 'Bitwise' },
      { id: 'code-prob-19', title: 'Problem 19: Equilibrium Index in Array', type: 'coding', durationMinutes: 20, codingProblemIndex: 18, stageBadge: 'Prefix Sum' },
      { id: 'code-prob-20', title: 'Problem 20: Two Sum Target Pair', type: 'coding', durationMinutes: 15, codingProblemIndex: 19, stageBadge: 'Hash Map' },
    ],
  },
  {
    id: 'technical-simulators',
    title: 'Stage 4: Technical Simulators (SQL & Front-End)',
    stageNumber: 'STAGE 4',
    badge: 'Role Differentiation',
    description: '9 Multi-table SQL joins & headless browser DOM test assertion engines',
    items: [
      { id: 'sim-sql-runner', title: 'SQL Query Console: 9 Authentic Slot Queries & Multi-Table Joins', type: 'sql', durationMinutes: 30, stageBadge: 'Stage 4' },
      { id: 'sim-frontend-runner', title: 'Front-End Web Simulators: Product Search Filter, Cart & Star Rating', type: 'frontend', durationMinutes: 30, stageBadge: 'Stage 4' },
    ],
  },
  {
    id: 'communication-stage',
    title: 'Stage 5: AI Voice Communication Assessment',
    stageNumber: 'STAGE 5',
    badge: 'Scheduled Later',
    description: 'AI Speech Platform Replica: Reading Aloud, Listen & Repeat, Sentence Builds & Story Retell',
    items: [
      { id: 'item-communication-guide', title: 'Stage 5 Voice-Testing Platform Simulator (Audio Prompts & Timer)', type: 'communication', durationMinutes: 20, stageBadge: 'Stage 5' },
    ],
  },
  {
    id: 'full-mocks',
    title: 'Comprehensive Adaptive Mock Tests',
    stageNumber: 'SIMULATION',
    badge: 'HirePro Replicas',
    description: 'Full-length 90-question simulations calibrated to 65% sectional cutoffs',
    items: [
      { id: 'item-custom-mock', title: 'Custom Adaptive Mock Generator (Volume, Difficulty & Cutoffs)', type: 'custom_mock', durationMinutes: 45, stageBadge: 'Custom' },
      { id: 'mock-1', title: 'Accenture Full Length Simulation Mock 1 (Cognitive + Tech 90 Qs)', type: 'quiz', durationMinutes: 90, questionCount: 90, stageBadge: 'Full Mock' },
      { id: 'mock-2', title: 'Accenture Full Length Simulation Mock 2 (Latest Slot Pattern)', type: 'quiz', durationMinutes: 90, questionCount: 90, stageBadge: 'Full Mock' },
      { id: 'mock-pyq-2025', title: 'Accenture Recent Slot PYQ Test (20 Dec Slot Archive)', type: 'quiz', durationMinutes: 90, questionCount: 90, stageBadge: 'Slot PYQ' },
    ],
  },
  {
    id: 'remediation',
    title: 'Error Notebook & Telemetry Diagnostics',
    stageNumber: 'ANALYTICS',
    badge: 'Remediation',
    description: 'Targeted re-testing of flagged mistakes and HirePro sectional cutoff readiness',
    items: [
      { id: 'item-mistakes', title: 'Mistake Vault & Instant Targeted Re-test', type: 'document', durationMinutes: 15, stageBadge: 'Mistakes' },
      { id: 'item-analytics', title: 'HirePro Readiness Index & Cutoff Tracker', type: 'document', durationMinutes: 5, stageBadge: 'Telemetry' },
    ],
  },
];
