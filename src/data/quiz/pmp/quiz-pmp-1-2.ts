import type { QuizBank } from '../types';

export const quizPmp12: QuizBank = {
  id: 'quiz-pmp-1-2',
  questions: [
    {
      scenario: 'نظام جديد سُلّم وبدأ العمل به، لكن زمن دورة الخدمة لم ينخفض.',
      question: 'ما الفجوة في سلسلة القيمة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'المخرج (Output) وُجد، لكن النتيجة (Outcome) والفائدة (Benefit) لم تتحققا.',
          isCorrect: true,
          explanation: 'القيمة تظهر عندما يغيّر المخرج أداء الأعمال.',
        },
        {
          text: 'لا توجد فجوة؛ التسليم هو الغاية.',
          isCorrect: false,
          explanation: 'التسليم خطوة، وليس الغاية النهائية.',
        },
        {
          text: 'المشروع يجب أن يغلق فوراً.',
          isCorrect: false,
          explanation: 'الإغلاق دون تحليل الفجوة يهدر فرصة تحقيق القيمة.',
        },
        {
          text: 'يجب زيادة ميزانية التدريب فقط دون قياس.',
          isCorrect: false,
          explanation: 'التدريب قد يساعد، لكن القياس ضروري لمعرفة الأثر.',
        },
      ],
    },
    {
      scenario:
        'راعي المشروع يطلب مؤشراً يثبت تحسن تجربة العميل بعد ثلاثة أشهر.',
      question: 'ما أفضل مؤشر؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'معدل رضا العملاء بعد التنفيذ.',
          isCorrect: true,
          explanation: 'المؤشر يربط الفائدة بنتيجة أعمال قابلة للقياس.',
        },
        {
          text: 'عدد اجتماعات الفريق.',
          isCorrect: false,
          explanation: 'عدد الاجتماعات مؤشر نشاط لا أثر.',
        },
        {
          text: 'عدد أسطر الكود.',
          isCorrect: false,
          explanation: 'عدد الأسطر لا يقيس قيمة العميل.',
        },
        {
          text: 'حجم الميزانية المصروفة.',
          isCorrect: false,
          explanation: 'الإنفاق مؤشر مدخلات لا نتائج.',
        },
      ],
    },
    {
      scenario: 'الفائدة المتوقعة لم يحدد لها مالك واضح بعد التسليم.',
      question: 'ما الإجراء الصحيح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تعيين مالك فائدة (Benefit owner) وموعد قياس.',
          isCorrect: true,
          explanation: 'بدون مالك وموعد، تتحول الفائدة إلى رغبة غير متابعة.',
        },
        {
          text: 'تركها للفريق بعد الإغلاق.',
          isCorrect: false,
          explanation: 'الفريق يتفرق بعد الإغلاق، فتضيع المتابعة.',
        },
        {
          text: 'اعتبارها مسؤولية المورد.',
          isCorrect: false,
          explanation: 'المورد مسؤول عن التسليم لا عن تحقيق الأعمال.',
        },
        {
          text: 'حذف الفائدة من ميثاق المشروع.',
          isCorrect: false,
          explanation: 'الحذف يخفي المشكلة بدل حلها.',
        },
      ],
    },
    {
      scenario: 'بعد التسليم بستة أشهر ظهر أن الفائدة أقل من المستهدف.',
      question: 'ماذا يفعل مدير المشروع ضمن دوره؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'يساعد في تحليل الفجوة ويدعم خطة التصحيح مع مالك الفائدة.',
          isCorrect: true,
          explanation:
            'دوره يمتد إلى دعم التحقق، وإن كان التنفيذ التشغيلي لاحقاً.',
        },
        {
          text: 'يتجاهل الأمر لأن المشروع أُغلق.',
          isCorrect: false,
          explanation: 'إغلاق المشروع لا ينهي مسؤولية تحقق القيمة.',
        },
        {
          text: 'يُعيد فتح كل خط الأساس تلقائياً.',
          isCorrect: false,
          explanation: 'إعادة الفتح تحتاج قرار حوكمة، وليست تلقائية.',
        },
        {
          text: 'يُحمّل الفريق المسؤولية.',
          isCorrect: false,
          explanation: 'اللوم لا يحل فجوة القياس أو التنفيذ.',
        },
      ],
    },
  ],
};

export default quizPmp12;
