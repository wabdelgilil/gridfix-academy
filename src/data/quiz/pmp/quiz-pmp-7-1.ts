import type { QuizBank } from '../types';

export const quizPmp71: QuizBank = {
  id: 'quiz-pmp-7-1',
  questions: [
    {
      scenario: 'الفريق بدأ تنفيذ حزم العمل وفق الخطة المعتمدة.',
      question: 'ما دور مدير المشروع في هذه اللحظة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'توجيه العمل وإزالة العوائق وضمان الالتزام بالعمليات.',
          isCorrect: true,
          explanation: 'التنفيذ المباشر وإدارة العمل تشمل الدعم والرقابة.',
        },
        {
          text: 'إيقاف العمل وانتظار تعليمات عليا.',
          isCorrect: false,
          explanation: 'الخطة معتمدة والفريق يحتاج التوجيه.',
        },
        {
          text: 'تسليم المخرجات دون توثيق.',
          isCorrect: false,
          explanation: 'التوثيق جزء من التنفيذ.',
        },
        {
          text: 'تجنب التواصل مع الفريق.',
          isCorrect: false,
          explanation: 'التواصل أساسي.',
        },
      ],
    },
    {
      scenario: 'ظهرت صعوبة في فهم تعليمات عمل أثناء التنفيذ.',
      question: 'ما أول إجراء؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'توضيح التعليمات والتأكد من فهم الفريق.',
          isCorrect: true,
          explanation: 'الفهم يسبق التصحيح.',
        },
        {
          text: 'إصدار أمر جديد دون نقاش.',
          isCorrect: false,
          explanation: 'الأمر لا يضمن الفهم.',
        },
        {
          text: 'تغيير مدير المشروع.',
          isCorrect: false,
          explanation: 'ليست المشكلة في الأشخاص بالضرورة.',
        },
        {
          text: 'تأجيل العمل.',
          isCorrect: false,
          explanation: 'التوضيح أسرع من التأجيل.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد ضمان تطابق التنفيذ مع معايير الجودة.',
      question: 'ما الذي يفعله؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تطبيق العمليات المعتمدة ومراقبة المخرجات.',
          isCorrect: true,
          explanation: 'التنفيذ الجيد يجمع بين العملية والمنتج.',
        },
        {
          text: 'زيادة عدد التقارير فقط.',
          isCorrect: false,
          explanation: 'التقارير لا تضمن الجودة.',
        },
        {
          text: 'إلغاء المراجعات.',
          isCorrect: false,
          explanation: 'المراجعات تحمي الجودة.',
        },
        {
          text: 'الاعتماد على الخبرة الشخصية فقط.',
          isCorrect: false,
          explanation: 'الخبرة مهمة لكن المعايير أهم.',
        },
      ],
    },
    {
      scenario: 'عمل جديد ظهر أثناء التنفيذ ولم يكن في النطاق.',
      question: 'ما المسار؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تسجيله وتحليل أثره قبل اعتماده.',
          isCorrect: true,
          explanation: 'التنفيذ لا يلغي التحكم بالتغيير.',
        },
        {
          text: 'تنفيذه لأنه يبدو صغيراً.',
          isCorrect: false,
          explanation: 'الصغر لا يبرر تجاوز العملية.',
        },
        {
          text: 'تجاهله نهائياً.',
          isCorrect: false,
          explanation: 'التسجيل يحفظ القرار.',
        },
        {
          text: 'إضافته إلى التقرير دون إجراء.',
          isCorrect: false,
          explanation: 'التقرير وحده لا يعالج الطلب.',
        },
      ],
    },
  ],
};

export default quizPmp71;
