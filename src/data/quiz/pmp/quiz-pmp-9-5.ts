import type { QuizBank } from '../types';

export const quizPmp95: QuizBank = {
  id: 'quiz-pmp-9-5',
  questions: [
    {
      scenario: 'تغير في أسعار الفائدة يؤثر على تكلفة تمويل المشروع.',
      question: 'أي عامل في تحليل PESTLE؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'الاقتصادي (Economic).',
          isCorrect: true,
          explanation: 'أسعار الفائدة والاقتصاد الكلي جزء من العامل الاقتصادي.',
        },
        {
          text: 'السياسي.',
          isCorrect: false,
          explanation: 'السياسي يتعلق بالحكومات والسياسات.',
        },
        {
          text: 'التقني.',
          isCorrect: false,
          explanation: 'التقني يتعلق بالتكنولوجيا.',
        },
        {
          text: 'القانوني.',
          isCorrect: false,
          explanation: 'القانوني يتعلق بالتشريعات.',
        },
      ],
    },
    {
      scenario: 'قانون جديد يفرض متطلبات أمان على المنتج.',
      question: 'أي عامل؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'القانوني (Legal).',
          isCorrect: true,
          explanation: 'التشريعات والقوانين الملزمة تقع تحت العامل القانوني.',
        },
        {
          text: 'الاجتماعي.',
          isCorrect: false,
          explanation: 'الاجتماعي يتعلق بالقيم والتركيبة السكانية.',
        },
        {
          text: 'البيئي.',
          isCorrect: false,
          explanation: 'البيئي يتعلق بالمناخ والموارد.',
        },
        {
          text: 'الاقتصادي.',
          isCorrect: false,
          explanation: 'الاقتصادي يتعلق بالأسعار والتمويل.',
        },
      ],
    },
    {
      scenario:
        'تغير في قيم المجتمع وتفضيلات المستخدمين يؤثر على تصميم الخدمة.',
      question: 'أي عامل؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الاجتماعي (Social).',
          isCorrect: true,
          explanation: 'القيم والاتجاهات الثقافية جزء من العامل الاجتماعي.',
        },
        {
          text: 'التقني.',
          isCorrect: false,
          explanation: 'التقني ليس قيماً اجتماعية.',
        },
        {
          text: 'السياسي.',
          isCorrect: false,
          explanation: 'السياسي ليس تفضيلات المستخدمين.',
        },
        {
          text: 'القانوني.',
          isCorrect: false,
          explanation: 'القانوني ملزم، لا مجرد تفضيل.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يستخدم PESTLE في بداية المشروع.',
      question: 'ما الهدف؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'فهم البيئة الخارجية وآثارها على المشروع.',
          isCorrect: true,
          explanation: 'التحليل يكشف فرصاً ومخاطر خارجية مبكراً.',
        },
        {
          text: 'تقدير تكلفة الأنشطة.',
          isCorrect: false,
          explanation: 'التقدير أداة أخرى.',
        },
        {
          text: 'تحديد أدوار الفريق.',
          isCorrect: false,
          explanation: 'RACI أداة الأدوار.',
        },
        {
          text: 'إغلاق العقود.',
          isCorrect: false,
          explanation: 'الإغلاق التعاقدي منفصل.',
        },
      ],
    },
  ],
};

export default quizPmp95;
