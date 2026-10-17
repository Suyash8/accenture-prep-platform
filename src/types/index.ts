export type SectionId = 
  | 'english'
  | 'critical'
  | 'abstract'
  | 'quantitative'
  | 'ms_office'
  | 'pseudocode'
  | 'core_cs_dsa'
  | 'networking_cloud'
  | 'coding'
  | 'game_assessment';

export type CategoryType = 'Cognitive' | 'Technical' | 'Coding' | 'Games';

export interface TraceStep {
  step: number;
  line: number;
  description: string;
  variables: Record<string, string | number>;
  highlightOp?: string;
}

export interface Question {
  id: string;
  sectionId: SectionId;
  sectionTitle: string;
  category: CategoryType;
  title: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  traceSteps?: TraceStep[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tag: string;
  slotYear?: string;
}

export interface CodingProblem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium';
  timeMinutes: number;
  description: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string;
  sampleInput: string;
  sampleOutput: string;
  explanation: string;
  starterCode: {
    python: string;
    java: string;
    csharp?: string;
    cpp?: string;
  };
  solutionCode?: {
    python: string;
    java: string;
    csharp?: string;
    cpp?: string;
  };
  testCases: {
    input: string;
    expected: string;
    hidden?: boolean;
  }[];
}

export interface SectionMeta {
  id: SectionId;
  title: string;
  category: CategoryType;
  questionCount: number;
  recommendedMinutes: number;
  cutoffScore: number; // e.g. 60%
  description: string;
  iconName: string;
  color: string;
}

export interface MistakeRecord {
  qId: string;
  sectionId: string;
  firstMissed: number;
  lastMissed: number;
  misses: number;
  streakCorrect: number;
  resolved: boolean;
}

export interface UserMistake {
  questionId: string;
  timestamp: number;
  selectedOption: number;
  attemptsCount: number;
}

export interface ExamAttemptRecord {
  id: string;
  timestamp: number;
  title: string;
  totalQuestions: number;
  score: number;
  percent: number;
  timeSpentSeconds: number;
  isPassed: boolean;
  cognitiveScore: number;
  technicalScore: number;
  sectionScores: Record<string, { correct: number; total: number }>;
}
