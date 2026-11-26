import type { QuizBank } from '../types';

export const quizPmp84: QuizBank = {
  id: 'quiz-pmp-8-4',
  questions: [
    {
      scenario: 'المشروع أغلق لكن الفائدة المتوقعة لم تظهر بعد ثلاثة أشهر.',
      question: 'من المسؤول عن المتابعة غالباً؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مالك الفائدة (Benefit owner) مع دعم من الراعي.',
          isCorrect: true,
          explanation: 'الفوائد تُدار بعد التسليم من قبل الأعمال.',
        },
        {
          text: 'المورد الخارجي.',
          isCorrect: false,
          explanation: 'المورد سلم المخرج ولا يملك نتيجة الأعمال.',
        },
        {
          text: 'الفريق المؤقت.',
          isCorrect: false,
          explanation: 'الفريق يتفرق بعد الإغلاق.',
        },
        {
          text: 'لا أحد؛ انتهى المشروع.',
          isCorrect: false,
          explanation: 'هذا هو السبب الشائع لضياع القيمة.',
        },
      ],
    },
    {
      scenario: 'مؤشر الفائدة لا يمكن قياسه لأن التعريف غامض.',
      question: 'ما الحل؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تعريف المؤشر وخط الأساس وموعد القياس بوضوح.',
          isCorrect: true,
          explanation: 'القياس يبدأ بتعريف قابل للملاحظة.',
        },
        {
          text: 'الافتراض أن الفائدة تحققت.',
          isCorrect: false,
          explanation: 'الافتراض لا يغني عن الدليل.',
        },
        {
          text: 'حذف المؤشر.',
          isCorrect: false,
          explanation:
            'حذف المؤشر يخفي الفجوة بدل قياسها؛ التعريف الواضح وخط الأساس وموعد القياس تجعله قابلاً للملاحظة.',
        },
        {
          text: 'زيادة ميزانية المشروع.',
          isCorrect: false,
          explanation: 'الميزانية لا تحل غموض التعريف.',
        },
      ],
    },
    {
      scenario: 'التبني لدى المستخدمين منخفض رغم جودة النظام.',
      question: 'أي إجراء يساعد على تحقق الفائدة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'معالجة مقاومة التغيير بالتدريب والتواصل ودعم الإدارة.',
          isCorrect: true,
          explanation: 'الفائدة تتطلب تبنياً سلوكيا لا تسليماً تقنياً فقط.',
        },
        {
          text: 'تطوير ميزات إضافية دون تحليل.',
          isCorrect: false,
          explanation: 'المشكلة في التبني لا في الميزات بالضرورة.',
        },
        {
          text: 'إغلاق ملف المشروع.',
          isCorrect: false,
          explanation: 'الإغلاق لا يحل التبني.',
        },
        {
          text: 'تغيير المورد.',
          isCorrect: false,
          explanation: 'المورد ليس السبب غالباً.',
        },
      ],
    },
    {
      scenario: 'تقرير القيمة يظهر فجوة بين المستهدف والمحقق.',
      question: 'ما أفضل عرض للأصحاب المصلحة؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'عرض الفجوة وأسبابها وخطة تصحيح بمالك وموعد.',
          isCorrect: true,
          explanation: 'التقرير المهني يحدد الفجوة ويقترح المسار.',
        },
        {
          text: 'عرض الأرقام فقط.',
          isCorrect: false,
          explanation: 'الأرقام دون تحليل لا تدعم القرار.',
        },
        {
          text: 'إخفاء الفجوة.',
          isCorrect: false,
          explanation:
            'إخفاء الفجوة يمنع القرار الصحيح؛ عرضها مع الأسباب وخطة تصحيح بمالك وموعد هو التصرف المهني.',
        },
        {
          text: 'تغيير المستهدف دون مبرر.',
          isCorrect: false,
          explanation: 'تعديل الهدف يخفي الفجوة.',
        },
      ],
    },
  ],
};

export default quizPmp84;
