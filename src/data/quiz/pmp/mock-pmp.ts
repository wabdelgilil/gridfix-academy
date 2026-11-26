import type { QuizBank } from '../types';
import { quizPmp01 } from './quiz-pmp-0-1';
import { quizPmp02 } from './quiz-pmp-0-2';
import { quizPmp03 } from './quiz-pmp-0-3';
import { quizPmp04 } from './quiz-pmp-0-4';
import { quizPmp05 } from './quiz-pmp-0-5';
import { quizPmp11 } from './quiz-pmp-1-1';
import { quizPmp12 } from './quiz-pmp-1-2';
import { quizPmp15 } from './quiz-pmp-1-5';
import { quizPmp21 } from './quiz-pmp-2-1';
import { quizPmp22 } from './quiz-pmp-2-2';
import { quizPmp23 } from './quiz-pmp-2-3';
import { quizPmp24 } from './quiz-pmp-2-4';
import { quizPmp25 } from './quiz-pmp-2-5';
import { quizPmp26 } from './quiz-pmp-2-6';
import { quizPmp31 } from './quiz-pmp-3-1';
import { quizPmp32 } from './quiz-pmp-3-2';
import { quizPmp33 } from './quiz-pmp-3-3';
import { quizPmp34 } from './quiz-pmp-3-4';
import { quizPmp41 } from './quiz-pmp-4-1';
import { quizPmp42 } from './quiz-pmp-4-2';
import { quizPmp43 } from './quiz-pmp-4-3';
import { quizPmp44 } from './quiz-pmp-4-4';
import { quizPmp51 } from './quiz-pmp-5-1';
import { quizPmp52 } from './quiz-pmp-5-2';
import { quizPmp53 } from './quiz-pmp-5-3';
import { quizPmp61 } from './quiz-pmp-6-1';
import { quizPmp62 } from './quiz-pmp-6-2';
import { quizPmp63 } from './quiz-pmp-6-3';
import { quizPmp64 } from './quiz-pmp-6-4';
import { quizPmp71 } from './quiz-pmp-7-1';
import { quizPmp72 } from './quiz-pmp-7-2';
import { quizPmp73 } from './quiz-pmp-7-3';
import { quizPmp74 } from './quiz-pmp-7-4';
import { quizPmp75 } from './quiz-pmp-7-5';
import { quizPmp81 } from './quiz-pmp-8-1';
import { quizPmp83 } from './quiz-pmp-8-3';
import { quizPmp84 } from './quiz-pmp-8-4';
import { quizPmp91 } from './quiz-pmp-9-1';
import { quizPmp92 } from './quiz-pmp-9-2';
import { quizPmp93 } from './quiz-pmp-9-3';
import { quizPmp94 } from './quiz-pmp-9-4';
import { quizPmp95 } from './quiz-pmp-9-5';
import { quizPmp96 } from './quiz-pmp-9-6';
import { quizPmp101 } from './quiz-pmp-10-1';
import { quizPmp102 } from './quiz-pmp-10-2';
import { quizPmp105 } from './quiz-pmp-10-5';

export interface MockPmpQuestion {
  scenario: string;
  scenarioEn?: string;
  question: string;
  questionEn?: string;
  difficulty: 'سهل' | 'متوسط' | 'صعب';
  options: {
    text: string;
    textEn?: string;
    isCorrect: boolean;
    explanation: string;
    explanationEn?: string;
  }[];
  domain: number;
}

export const mockPmpDomains: Record<number, string> = {
  1: 'الأفراد (People) — 33%',
  2: 'العمليات (Process) — 41%',
  3: 'بيئة الأعمال (Business Environment) — 26%',
};

export const mockPmpDomainsEn: Record<number, string> = {
  1: 'People — 33%',
  2: 'Process — 41%',
  3: 'Business Environment — 26%',
};

interface Source {
  bank: QuizBank;
  domain: number;
  take?: number;
}

const sources: Source[] = [
  // People — 14 full banks (56) + 3 from the closing/lessons bank = 59 questions.
  { bank: quizPmp11, domain: 1 },
  { bank: quizPmp12, domain: 1 },
  { bank: quizPmp15, domain: 1 },
  { bank: quizPmp21, domain: 1 },
  { bank: quizPmp22, domain: 1 },
  { bank: quizPmp23, domain: 1 },
  { bank: quizPmp24, domain: 1 },
  { bank: quizPmp25, domain: 1 },
  { bank: quizPmp26, domain: 1 },
  { bank: quizPmp93, domain: 1 },
  { bank: quizPmp101, domain: 1 },
  { bank: quizPmp102, domain: 1 },
  { bank: quizPmp105, domain: 1 },
  { bank: quizPmp03, domain: 1 },
  { bank: quizPmp83, domain: 1, take: 3 },

  // Process — 18 full banks (72) + 2 from the change-control bank = 74 questions.
  { bank: quizPmp31, domain: 2 },
  { bank: quizPmp32, domain: 2 },
  { bank: quizPmp33, domain: 2 },
  { bank: quizPmp34, domain: 2 },
  { bank: quizPmp41, domain: 2 },
  { bank: quizPmp42, domain: 2 },
  { bank: quizPmp43, domain: 2 },
  { bank: quizPmp44, domain: 2 },
  { bank: quizPmp51, domain: 2 },
  { bank: quizPmp52, domain: 2 },
  { bank: quizPmp53, domain: 2 },
  { bank: quizPmp61, domain: 2 },
  { bank: quizPmp62, domain: 2 },
  { bank: quizPmp63, domain: 2 },
  { bank: quizPmp64, domain: 2 },
  { bank: quizPmp71, domain: 2 },
  { bank: quizPmp72, domain: 2 },
  { bank: quizPmp73, domain: 2 },
  { bank: quizPmp74, domain: 2, take: 2 },

  // Business Environment — 11 full banks (44) + 3 from the PMP basics bank = 47 questions.
  { bank: quizPmp91, domain: 3 },
  { bank: quizPmp92, domain: 3 },
  { bank: quizPmp81, domain: 3 },
  { bank: quizPmp94, domain: 3 },
  { bank: quizPmp95, domain: 3 },
  { bank: quizPmp96, domain: 3 },
  { bank: quizPmp02, domain: 3 },
  { bank: quizPmp04, domain: 3 },
  { bank: quizPmp05, domain: 3 },
  { bank: quizPmp84, domain: 3 },
  { bank: quizPmp75, domain: 3 },
  { bank: quizPmp01, domain: 3, take: 3 },
];

function buildQuestions(): MockPmpQuestion[] {
  const questions: MockPmpQuestion[] = [];
  for (const source of sources) {
    const limit = source.take ?? source.bank.questions.length;
    for (const question of source.bank.questions.slice(0, limit)) {
      questions.push({ ...question, domain: source.domain });
    }
  }
  return questions;
}

export const mockPmpQuestions: MockPmpQuestion[] = buildQuestions();
