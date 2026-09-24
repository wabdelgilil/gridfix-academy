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