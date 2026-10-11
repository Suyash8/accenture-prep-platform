import { ExamAttemptRecord, UserMistake } from '../types';

const MISTAKES_KEY = 'accenture_prep_mistakes';
const ATTEMPTS_KEY = 'accenture_prep_attempts';
const BOOKMARKS_KEY = 'accenture_prep_bookmarks';

export const getMistakes = (): Record<string, UserMistake> => {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(MISTAKES_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to get mistakes from localStorage', e);
    return {};
  }
};

export const saveMistake = (questionId: string, selectedOption: number) => {
  if (typeof window === 'undefined') return;
  try {
    const mistakes = getMistakes();
    const existing = mistakes[questionId];
    mistakes[questionId] = {
      questionId,
      timestamp: Date.now(),
      selectedOption,
      attemptsCount: existing ? existing.attemptsCount + 1 : 1,
    };
    localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakes));
  } catch (e) {
    console.error('Failed to save mistake', e);
  }
};

export const resolveMistake = (questionId: string) => {
  if (typeof window === 'undefined') return;
  try {
    const mistakes = getMistakes();
    if (mistakes[questionId]) {
      delete mistakes[questionId];
      localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakes));
    }
  } catch (e) {
    console.error('Failed to resolve mistake', e);
  }
};

export const getExamAttempts = (): ExamAttemptRecord[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(ATTEMPTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const saveExamAttempt = (attempt: ExamAttemptRecord) => {
  if (typeof window === 'undefined') return;
  try {
    const attempts = getExamAttempts();
    attempts.unshift(attempt);
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts.slice(0, 30))); // Keep last 30
  } catch (e) {
    console.error('Failed to save exam attempt', e);
  }
};

export const getBookmarks = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(BOOKMARKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const toggleBookmark = (questionId: string): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const bookmarks = getBookmarks();
    const index = bookmarks.indexOf(questionId);
    let isBookmarked = false;
    if (index >= 0) {
      bookmarks.splice(index, 1);
    } else {
      bookmarks.push(questionId);
      isBookmarked = true;
    }
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    return isBookmarked;
  } catch (e) {
    return false;
  }
};
