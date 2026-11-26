import type { QuizBank } from '../types';

export const quizPmp62: QuizBank = {
  id: 'quiz-pmp-6-2',
  questions: [
    {
      scenario: 'خطر تقني يمكن تجنبه بتغيير التصميم تماماً.',
      question: 'أي استجابة مناسبة؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'التجنّب (Avoid).',
          isCorrect: true,
          explanation: 'إزالة سبب الخطر تماماً، ولو بتغيير النهج.',
        },
        {
          text: 'التخفيف (Mitigate).',
          isCorrect: false,
          explanation: 'التخفيف يقلل الاحتمال أو الأثر دون إزالته.',
        },
        {
          text: 'النقل (Transfer).',
          isCorrect: false,
          explanation: 'النقل يحول الأثر لطرف ثالث.',
        },
        {
          text: 'القبول (Accept).',
          isCorrect: false,
          explanation: 'القبول يترك الخطر دون إجراء استباقي.',
        },
      ],
    },
    {
      scenario: 'خطر قانوني يمكن تحويله إلى شركة تأمين.',
      question: 'ما الاستجابة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'النقل (Transfer).',
          isCorrect: true,
          explanation: 'التأمين أو العقد ينقل الأثر المالي لطرف ثالث.',
        },
        {
          text: 'الاستغلال (Exploit).',
          isCorrect: false,
          explanation: 'الاستغلال للفرص لا للتهديدات.',
        },
        {
          text: 'المشاركة (Share).',
          isCorrect: false,
          explanation: 'المشاركة توزع الملكية مع شريك، وليست تأميناً.',
        },
        {
          text: 'التجنّب.',
          isCorrect: false,
          explanation: 'تجنب الخطر القانوني قد يكون مستحيلاً.',
        },
      ],
    },
    {
      scenario: 'فرصة جديدة يمكن تعظيم احتمال حدوثها بإضافة مورد خبير.',
      question: 'أي استجابة للفرصة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الاستغلال (Exploit).',
          isCorrect: true,
          explanation: 'الاستغلال يهدف لضمان تحقيق الفرصة.',
        },
        {
          text: 'التخفيف.',
          isCorrect: false,
          explanation: 'التخفيف للتهديدات.',
        },
        {
          text: 'التجنّب.',
          isCorrect: false,
          explanation: 'التجنّب للتهديدات.',
        },
        {
          text: 'القبول.',
          isCorrect: false,
          explanation: 'القبول لا يسعى لتعظيم الفرصة.',
        },
      ],
    },
    {
      scenario: 'خطر صغير تكلفة معالجته أكبر من أثره.',
      question: 'ما الاستجابة المنطقية؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'القبول (Accept) مع مراقبته.',
          isCorrect: true,
          explanation: 'قد يكون acceptance هو الخيار الأقتصادي مع سجل مراقبة.',
        },
        {
          text: 'التخفيف بأي ثمن.',
          isCorrect: false,
          explanation: 'التكلفة قد تتجاوز الفائدة.',
        },
        {
          text: 'النقل دائماً.',
          isCorrect: false,
          explanation: 'النقل له تكلفته أيضاً.',
        },
        {
          text: 'حذفه من السجل.',
          isCorrect: false,
          explanation: 'يجب إبقاؤه ظاهراً ولو بقرار قبول.',
        },
      ],
    },
  ],
};

export default quizPmp62;
