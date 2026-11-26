import type { QuizBank } from '../types';

export const quizPmp82: QuizBank = {
  id: 'quiz-pmp-8-2',
  questions: [
    {
      scenario: 'النظام جاهز لكن المستخدمين النهائيين لم يتدربوا عليه.',
      question: 'ما جزء التسليم الذي ينقص؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الانتقال والتدريب (Transition and training).',
          isCorrect: true,
          explanation: 'التسليم الجيد يشمل التمكين وليس فقط تسليم الملفات.',
        },
        {
          text: 'تصميم النظام.',
          isCorrect: false,
          explanation:
            'التصميم اكتمل، لكن تسليم النظام دون تدريب لا يمكّن المستخدمين؛ الناقص هو الانتقال والتدريب.',
        },
        {
          text: 'تقدير التكلفة.',
          isCorrect: false,
          explanation: 'التقدير مرحلة سابقة.',
        },
        {
          text: 'إغلاق العقد.',
          isCorrect: false,
          explanation: 'إغلاق العقد لا يغني عن تمكين المستخدمين.',
        },
      ],
    },
    {
      scenario: 'العميل يطلب قائمة بالأصول المسلّمة وحالتها.',
      question: 'أي وثيقة تلبي ذلك؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'قائمة التسليم (Deliverables checklist).',
          isCorrect: true,
          explanation: 'توضح ما سُلّم وحالته ومالك الاستلام.',
        },
        {
          text: 'سجل المخاطر.',
          isCorrect: false,
          explanation:
            'سجل المخاطر يوثق التهديدات والفرص، لا الأصول المسلّمة وحالتها؛ قائمة التسليم هي الوثيقة المطلوبة.',
        },
        {
          text: 'مصفوفة RACI.',
          isCorrect: false,
          explanation:
            'مصفوفة RACI توزّع المسؤوليات والأدوار، لكنها لا تسرد الأصول المسلّمة؛ قائمة التسليم تلبي طلب العميل.',
        },
        {
          text: 'خطة الجودة.',
          isCorrect: false,
          explanation: 'تحدد المعايير لا قائمة الأصول.',
        },
      ],
    },
    {
      scenario: 'بعد التسليم ظهرت مشكلات تشغيلية تحتاج دعم الفريق.',
      question: 'ما الترتيب الأفضل؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'اتفاقية دعم واضحة مع مالك الفائدة وفترة انتقال محددة.',
          isCorrect: true,
          explanation: 'الدعم المنظم يحمي القيمة بعد التسليم.',
        },
        {
          text: 'إنهاء كل تواصل مع العميل.',
          isCorrect: false,
          explanation: 'القطع المفاجئ يضر بالتبني.',
        },
        {
          text: 'إعادة بناء النظام من الصفر.',
          isCorrect: false,
          explanation: 'إعادة البناء ليست الحل الأول.',
        },
        {
          text: 'تجاهل الشكاوى.',
          isCorrect: false,
          explanation: 'الشكاوى بيانات مهمة.',
        },
      ],
    },
    {
      scenario: 'القبول النهائي تأخر بسبب غياب معايير واضحة.',
      question: 'ما الدرس المستفاد؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحديد معايير القبول مبكراً ومراجعتها مع العميل.',
          isCorrect: true,
          explanation: 'وضوح المعايير يمنع النزاع عند الإغلاق.',
        },
        {
          text: 'تأجيل المعايير إلى الإغلاق.',
          isCorrect: false,
          explanation:
            'تأجيل معايير القبول إلى الإغلاق هو سبب النزاع؛ تحديدها مبكراً ومراجعتها مع العميل يمنع التأخير.',
        },
        {
          text: 'الاعتماد على رأي الفريق فقط.',
          isCorrect: false,
          explanation: 'العميل طرف أساسي في القبول.',
        },
        {
          text: 'إلغاء مراجعة العميل.',
          isCorrect: false,
          explanation: 'المراجعة جزء من التحقق.',
        },
      ],
    },
  ],
};

export default quizPmp82;
