import type { QuizBank } from '../types';

export const quizPmp81: QuizBank = {
  id: 'quiz-pmp-8-1',
  questions: [
    {
      scenario: 'اقتراب نهاية المشروع وفريق يحتاج معرفة خطوات الإغلاق الرسمية.',
      question: 'ما أول نشاط عادةً؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الحصول على القبول النهائي للمخرجات.',
          isCorrect: true,
          explanation: 'الإغلاق يبدأ بتأكيد استيفاء المتطلبات واعتماد التسليم.',
        },
        {
          text: 'توزيع مكافآت فورية.',
          isCorrect: false,
          explanation: 'المكافآت ليست خطوة إغلاق رسمية.',
        },
        {
          text: 'حذف الوثائق.',
          isCorrect: false,
          explanation: 'الأرشفة جزء من الإغلاق.',
        },
        {
          text: 'بدء مشروع جديد فوراً.',
          isCorrect: false,
          explanation: 'لا يلغي ذلك إغلاق الحالي.',
        },
      ],
    },
    {
      scenario: 'عقد المورد لم يُغلق رغم تسليم العمل.',
      question: 'ما المطلوب؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'إغلاق العقد رسمياً وتوثيق أي مطالبات متبقية.',
          isCorrect: true,
          explanation: 'الإغلاق التعاقدي يمنع التزامات لاحقة غير واضحة.',
        },
        {
          text: 'اعتباره مغلقاً تلقائياً.',
          isCorrect: false,
          explanation: 'الاعتماد الرسمي مطلوب.',
        },
        {
          text: 'تجاهل المطالبات.',
          isCorrect: false,
          explanation: 'المطالبات تحتاج تسوية موثقة.',
        },
        {
          text: 'زيادة مدة العقد دون سبب.',
          isCorrect: false,
          explanation: 'التمديد دون مبرر يخلق تكلفة.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد حفظ الدروس والوثائق للاستخدام المستقبلي.',
      question: 'ما الإجراء؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'أرشفة الوثائق وتحديث مستودع الدروس المستفادة.',
          isCorrect: true,
          explanation: 'الأرشقة تحفظ المعرفة وتدعم التحسين.',
        },
        {
          text: 'حذف الملفات لتوفير المساحة.',
          isCorrect: false,
          explanation: 'يضيع الأصل المعرفي.',
        },
        {
          text: 'تخزينها لدى أفراد فقط.',
          isCorrect: false,
          explanation: 'الفقدان محتمل عند المغادرة.',
        },
        {
          text: 'تأجيل الأرشفة إلى مشروع لاحق.',
          isCorrect: false,
          explanation: 'الإغلاق هو الوقت المناسب.',
        },
      ],
    },
    {
      scenario: 'بعض أعضاء الفريق ما زالوا يؤدون مهام بعد تاريخ الإغلاق.',
      question: 'ما الإجراء الصحيح؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحديد المهام المتبقية ومالكها وتاريخ إنهائها قبل الإغلاق.',
          isCorrect: true,
          explanation:
            'الإغلاق لا يعلن إلا بعد استكمال الالتزامات أو تحويلها رسمياً.',
        },
        {
          text: 'إعلان الإغلاق فوراً.',
          isCorrect: false,
          explanation: 'المهام المتبقية ستصبح خارج السيطرة.',
        },
        {
          text: 'إلغاء المهام دون قرار.',
          isCorrect: false,
          explanation: 'الإلغاء يحتاج تحليلاً واعتماداً.',
        },
        {
          text: 'تركها دون توثيق.',
          isCorrect: false,
          explanation: 'التوثيق يحمي الجميع.',
        },
      ],
    },
  ],
};

export default quizPmp81;
