import { ExamAttemptRecord, MistakeRecord, UserMistake } from '../types';

const STORAGE_VERSION = 1;
const PREFIX = `ap:v${STORAGE_VERSION}:`;

// Legacy keys for migration
const LEGACY_MISTAKES_KEY = 'accenture_prep_mistakes';
const LEGACY_ATTEMPTS_KEY = 'accenture_prep_attempts';
const LEGACY_BOOKMARKS_KEY = 'accenture_prep_bookmarks';
const MIGRATION_DONE_KEY = `ap:v${STORAGE_VERSION}:migrated`;

export function load<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(`${PREFIX}${key}`);
    return raw !== null ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function save<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
  } catch (err) {
    console.warn(`Failed to save to localStorage key "${PREFIX}${key}":`, err);
  }
}

export function remove(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(`${PREFIX}${key}`);
  } catch {
    // ignore
  }
}

// Perform a one-time migration from unversioned keys if present
function runMigrationIfNeeded() {
  if (typeof window === 'undefined') return;
  try {
    if (localStorage.getItem(MIGRATION_DONE_KEY)) return;

    // Migrate mistakes
    const oldMistakesRaw = localStorage.getItem(LEGACY_MISTAKES_KEY);
    if (oldMistakesRaw) {
      const oldMistakes = JSON.parse(oldMistakesRaw) as Record<string, UserMistake>;
      const newMistakes: Record<string, MistakeRecord> = {};
      const now = Date.now();
      for (const [id, m] of Object.entries(oldMistakes)) {
        newMistakes[id] = {
          qId: id,
          sectionId: 'general',
          firstMissed: m.timestamp || now,
          lastMissed: m.timestamp || now,
          misses: m.attemptsCount || 1,
          streakCorrect: 0,
          resolved: false,
        };
      }
      save('mistakes', newMistakes);
    }

    // Migrate attempts
    const oldAttemptsRaw = localStorage.getItem(LEGACY_ATTEMPTS_KEY);
    if (oldAttemptsRaw) {
      const oldAttempts = JSON.parse(oldAttemptsRaw) as ExamAttemptRecord[];
      save('attempts', oldAttempts);
    }

    // Migrate bookmarks
    const oldBookmarksRaw = localStorage.getItem(LEGACY_BOOKMARKS_KEY);
    if (oldBookmarksRaw) {
      const oldBookmarks = JSON.parse(oldBookmarksRaw) as string[];
      save('bookmarks', oldBookmarks);
    }

    localStorage.setItem(MIGRATION_DONE_KEY, 'true');
  } catch (e) {
    console.error('Storage migration error:', e);
  }
}

// Run immediately on client load
if (typeof window !== 'undefined') {
  runMigrationIfNeeded();
}

/* ==================== MISTAKE TRACKING ==================== */

export const getMistakeRecords = (): Record<string, MistakeRecord> => {
  return load<Record<string, MistakeRecord>>('mistakes', {});
};

/**
 * Record a question attempt result:
 * - If incorrect: increments misses, resets streakCorrect, un-resolves (resolved = false)
 * - If correct: increments streakCorrect. Resolves after 2 consecutive correct answers!
 */
export const recordResult = (qId: string, sectionId: string, isCorrect: boolean): void => {
  const mistakes = getMistakeRecords();
  const existing = mistakes[qId];
  const now = Date.now();

  if (!isCorrect) {
    mistakes[qId] = {
      qId,
      sectionId: existing?.sectionId || sectionId || 'general',
      firstMissed: existing?.firstMissed || now,
      lastMissed: now,
      misses: (existing?.misses || 0) + 1,
      streakCorrect: 0,
      resolved: false,
    };
  } else if (existing) {
    const nextStreak = (existing.streakCorrect || 0) + 1;
    mistakes[qId] = {
      ...existing,
      streakCorrect: nextStreak,
      resolved: nextStreak >= 2 ? true : existing.resolved,
    };
  }

  save('mistakes', mistakes);
};

export const resolveMistakeManually = (qId: string): void => {
  const mistakes = getMistakeRecords();
  if (mistakes[qId]) {
    mistakes[qId].resolved = true;
    mistakes[qId].streakCorrect = Math.max(mistakes[qId].streakCorrect, 2);
    save('mistakes', mistakes);
  }
};

export const unresolveMistake = (qId: string): void => {
  const mistakes = getMistakeRecords();
  if (mistakes[qId]) {
    mistakes[qId].resolved = false;
    mistakes[qId].streakCorrect = 0;
    save('mistakes', mistakes);
  }
};

export const pruneMistakes = (validQuestionIds: Set<string>): void => {
  const mistakes = getMistakeRecords();
  let changed = false;
  for (const qId of Object.keys(mistakes)) {
    if (!validQuestionIds.has(qId)) {
      delete mistakes[qId];
      changed = true;
    }
  }
  if (changed) {
    save('mistakes', mistakes);
  }
};

// Backward-compatible wrappers for existing components
export const getMistakes = (): Record<string, UserMistake> => {
  const records = getMistakeRecords();
  const compat: Record<string, UserMistake> = {};
  for (const [id, rec] of Object.entries(records)) {
    if (!rec.resolved) {
      compat[id] = {
        questionId: rec.qId,
        timestamp: rec.lastMissed,
        selectedOption: 0,
        attemptsCount: rec.misses,
      };
    }
  }
  return compat;
};

export const saveMistake = (questionId: string, _selectedOption: number = 0, sectionId: string = 'general'): void => {
  recordResult(questionId, sectionId, false);
};

export const resolveMistake = (questionId: string): void => {
  resolveMistakeManually(questionId);
};

/* ==================== EXAM ATTEMPTS ==================== */

export const getExamAttempts = (): ExamAttemptRecord[] => {
  return load<ExamAttemptRecord[]>('attempts', []);
};

export const saveExamAttempt = (attempt: ExamAttemptRecord): void => {
  const attempts = getExamAttempts();
  attempts.unshift(attempt);
  save('attempts', attempts.slice(0, 30)); // Keep last 30
};

/* ==================== BOOKMARKS ==================== */

export const getBookmarks = (): string[] => {
  return load<string[]>('bookmarks', []);
};

export const toggleBookmark = (questionId: string): boolean => {
  const bookmarks = getBookmarks();
  const index = bookmarks.indexOf(questionId);
  let isBookmarked = false;
  if (index >= 0) {
    bookmarks.splice(index, 1);
  } else {
    bookmarks.push(questionId);
    isBookmarked = true;
  }
  save('bookmarks', bookmarks);
  return isBookmarked;
};

/* ==================== SJT PERSISTENCE ==================== */

export interface SjtProgressState {
  attemptId: string;
  answers: Record<string, number>;
  startedAt: number;
  lastActiveIndex?: number;
  completed?: boolean;
}

export const getSjtState = (): SjtProgressState | null => {
  return load<SjtProgressState | null>('sjt_active', null);
};

export const saveSjtState = (state: SjtProgressState): void => {
  save('sjt_active', state);
};

export const clearSjtState = (): void => {
  remove('sjt_active');
};

/* ==================== STAGE 4 CODING PERSISTENCE ==================== */

export interface CodingSessionState {
  startedAt: number;
  durationSeconds: number;
}

export const getCodingSession = (): CodingSessionState => {
  const session = load<CodingSessionState | null>('coding_session', null);
  const now = Date.now();
  if (!session || (now - session.startedAt) > 45 * 60 * 1000) {
    const fresh = { startedAt: now, durationSeconds: 45 * 60 };
    save('coding_session', fresh);
    return fresh;
  }
  return session;
};

export const resetCodingSession = (): CodingSessionState => {
  const fresh = { startedAt: Date.now(), durationSeconds: 45 * 60 };
  save('coding_session', fresh);
  return fresh;
};

export const getCodingDraft = (problemId: string, language: string): string | null => {
  return load<string | null>(`draft:${problemId}:${language}`, null);
};

export const saveCodingDraft = (problemId: string, language: string, code: string): void => {
  save(`draft:${problemId}:${language}`, code);
};

/* ==================== GAME BEST SCORES ==================== */

export interface GameScoreRecord {
  gameId: string;
  bestScore: number;
  totalPossible: number;
  timestamp: number;
}

export const getGameBestScore = (gameId: string): GameScoreRecord | null => {
  return load<GameScoreRecord | null>(`game_score:${gameId}`, null);
};

export const saveGameScore = (gameId: string, score: number, total: number): void => {
  const current = getGameBestScore(gameId);
  if (!current || score > current.bestScore) {
    save(`game_score:${gameId}`, {
      gameId,
      bestScore: score,
      totalPossible: total,
      timestamp: Date.now(),
    });
  }
};

