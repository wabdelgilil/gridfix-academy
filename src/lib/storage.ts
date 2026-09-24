export interface ProgressState {
  completedLessons: string[];
  quizScores: Record<string, { score: number; total: number; completedAt: string }>;
  bookmarks: string[];
  lastLesson?: { courseId: string; lessonId: string; title: string; stationTitle: string; at: string };
  mockExam?: { percentage: number; pillarBreakdown: Record<string, number>; passed: boolean; at: string };
}

export const STORAGE_KEY = 'cfm-course-progress@v1';

export function storageKeyFor(course: string): string {
  return `${course}-course-progress@v1`;
}

const defaultState: ProgressState = {
  completedLessons: [],
  quizScores: {},
  bookmarks: [],
};

export function loadProgress(course: string = 'cfm'): ProgressState {
  try {
    const raw = localStorage.getItem(storageKeyFor(course));
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return { ...defaultState, ...parsed };
  } catch {
    return { ...defaultState };
  }
}

export function saveProgress(state: ProgressState, course: string = 'cfm'): void {
  localStorage.setItem(storageKeyFor(course), JSON.stringify(state));
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

export interface LastVisitedLesson {
  courseId: string;
  lessonId: string;
  lessonTitle: string;
  stationTitle: string;
  visitedAt: string;
}

const LAST_VISITED_KEY = 'cfm-last-visited-lesson';

export function getLastVisitedLesson(): LastVisitedLesson | null {
  try {
    const raw = localStorage.getItem(LAST_VISITED_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as LastVisitedLesson;
  } catch {
    return null;
  }
}

export function saveLastVisitedLesson(
  courseId: string,
  lessonId: string,
  lessonTitle: string,
  stationTitle: string,
): void {
  const data: LastVisitedLesson = {
    courseId,
    lessonId,
    lessonTitle,
    stationTitle,
    visitedAt: new Date().toISOString(),
  };
  localStorage.setItem(LAST_VISITED_KEY, JSON.stringify(data));
}

export function recordLastLesson(
  courseId: string,
  lessonId: string,
  title: string,
  stationTitle: string,
): void {
  saveLastVisitedLesson(courseId, lessonId, title, stationTitle);
}

export function setLastLesson(
  state: ProgressState,
  courseId: string,
  lessonId: string,
  title: string,
  stationTitle: string,
): ProgressState {
  return {
    ...state,
    lastLesson: { courseId, lessonId, title, stationTitle, at: new Date().toISOString() },
  };
}

export function getLastLesson(course: string): ProgressState['lastLesson'] {
  try {
    const raw = localStorage.getItem(storageKeyFor(course));
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return parsed.lastLesson;
  } catch {
    return undefined;
  }
}
