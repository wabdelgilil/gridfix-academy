export interface QuizOption {
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizQuestion {
  scenario: string;
  question: string;
  options: QuizOption[];
  difficulty: 'سهل' | 'متوسط' | 'صعب';
}

export interface QuizBank {
  id: string;
  questions: QuizQuestion[];
}