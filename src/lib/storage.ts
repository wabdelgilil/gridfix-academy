export interface ProgressState {
  completedLessons: string[];
  quizScores: Record<string, { score: number; total: number; completedAt: string }>;
  bookmarks: string[];
  mockExam?: { percentage: number; pillarBreakdown: Record<string, number>; passed: boolean; at: string };
}

export const STORAGE_KEY = 'cfm-course-progress@v1';

const defaultState: ProgressState = {
  completedLessons: [],
  quizScores: {},
  bookmarks: [],
};

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return { ...defaultState, ...parsed };
  } catch {
    return { ...defaultState };
  }
}

export function saveProgress(state: ProgressState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function isLessonComplete(state: ProgressState, lessonId: string): boolean {
  return state.completedLessons.includes(lessonId);
}

export function toggleLessonComplete(state: ProgressState, lessonId: string): ProgressState {
  const completed = isLessonComplete(state, lessonId);
  return {
    ...state,
    completedLessons: completed
      ? state.completedLessons.filter((id) => id !== lessonId)
      : [...state.completedLessons, lessonId],
  };
}

export function recordQuizScore(
  state: ProgressState,
  quizId: string,
  score: number,
  total: number,
): ProgressState {
  return {
    ...state,
    quizScores: {
      ...state.quizScores,
      [quizId]: { score, total, completedAt: new Date().toISOString() },
    },
  };
}