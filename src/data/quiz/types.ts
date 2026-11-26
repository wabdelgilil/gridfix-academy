export type QuizDifficulty = 'سهل' | 'متوسط' | 'صعب';

export interface QuizOption {
  text: string;
  textEn?: string;
  isCorrect: boolean;
  explanation: string;
  explanationEn?: string;
}

export interface QuizQuestion {
  scenario: string;
  scenarioEn?: string;
  /** Shared multi-question case identifier; questions with the same id form one case set. */
  caseSetId?: string;
  /** Common stem shown for every question in a case set. */
  sharedStem?: string;
  sharedStemEn?: string;
  question: string;
  questionEn?: string;
  options: QuizOption[];
  difficulty: QuizDifficulty;
}

export interface QuizBank {
  id: string;
  questions: QuizQuestion[];
}

export const DIFFICULTY_EN: Record<QuizDifficulty, string> = {
  سهل: 'Easy',
  متوسط: 'Medium',
  صعب: 'Hard',
};
