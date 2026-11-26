import type { QuizBank } from '../types';

export const quizPmp64: QuizBank = {
  id: 'quiz-pmp-6-4',
  questions: [
    {
      scenario: 'عطل في معدات يوقف العمل يومياً ويحتاج قراراً فورياً.',
      question: 'أين يُسجَّل؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'سجل المشكلات (Issue log).',
          isCorrect: true,
          explanation: 'المشكلة حدثت وتحتاج مالكاً وموعد حل.',
        },
        {
          text: 'سجل المخاطر فقط.',
          isCorrect: false,
          explanation: 'سجل المخاطر للاحتمالات قبل الحدوث.',
        },
        {
          text: 'سجل الدروس.',
          isCorrect: false,
          explanation: 'الدروس تُكتب بعد الفهم والتأمل.',
        },
        {
          text: 'سجل التغييرات.',
          isCorrect: false,
          explanation: 'ليس كل مشكلة طلب تغيير.',
        },
      ],
    },
    {
      scenario: 'عائق خارج عن صلاحية الفريق يتكرر دون حل.',
      question: 'ما الإجراء؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التصعيد وفق مسار معروف مع توثيق الأثر.',
          isCorrect: true,
          explanation: 'التصعيد مبرر عندما تتجاوز المشكلة الصلاحية.',
        },
        {
          text: 'الاستمرار دون توثيق.',
          isCorrect: false,
          explanation: 'التوثيق يحمي القرار والمساءلة.',
        },
        {
          text: 'حل المشكلة بالقوة.',
          isCorrect: false,
          explanation: 'القوة ليست أداة حوكمة.',
        },
        {
          text: 'إلغاء المشروع.',
          isCorrect: false,
          explanation: 'مبالغة في رد الفعل.',
        },
      ],
    },
    {
      scenario: 'حل مؤقت يسمح باستمرار العمل لحين إصلاح السبب.',
      question: 'ما المصطلح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الحل المؤقت (Workaround).',
          isCorrect: true,
          explanation: 'يعالج العرض مؤقتاً ولا يلغي تحليل السبب الجذري.',
        },
        {
          text: 'إجراء تصحيحي نهائي.',
          isCorrect: false,
          explanation: 'الحل المؤقت ليس نهائياً.',
        },
        {
          text: 'تغيير نطاق.',
          isCorrect: false,
          explanation: 'لا يغير النطاق بالضرورة.',
        },
        {
          text: 'استجابة خطر.',
          isCorrect: false,
          explanation: 'هو تعامل مع مشكلة حدثت.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يخلط بين خطر محتمل ومشكلة حدثت بالفعل.',
      question: 'ما أثر هذا الخلط؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'يؤدي إلى تأخير المعالجة واختيار أدوات غير مناسبة.',
          isCorrect: true,
          explanation: 'الخطر يُحلل احتمالياً، والمشكلة تُدار تنفيذياً.',
        },
        {
          text: 'لا أثر له.',
          isCorrect: false,
          explanation: 'الخلط يضعف القرار.',
        },
        {
          text: 'يحسن الدقة.',
          isCorrect: false,
          explanation: 'العكس صحيح.',
        },
        {
          text: 'يغني عن السجلات.',
          isCorrect: false,
          explanation: 'السجلات أهم عند التمييز.',
        },
      ],
    },
  ],
};

export default quizPmp64;
