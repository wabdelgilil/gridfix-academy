import type { QuizBank } from '../types';

export const quizPmp24: QuizBank = {
  id: 'quiz-pmp-2-4',
  questions: [
    {
      scenario: 'أصحاب مصلحة ذوو سلطة عالية واهتمام منخفض بالتفاصيل.',
      question: 'كيف يُدارون وفق مصفوفة القوة والاهتمام؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'إرضاؤهم (Keep satisfied) بإبلاغ موجز ومواءمة مستمرة.',
          isCorrect: true,
          explanation: 'السلطة العالية تحتاج اهتماماً دون إغراق بالتفاصيل.',
        },
        {
          text: 'إشراكهم في كل تفصيل.',
          isCorrect: false,
          explanation: 'الاهتمام منخفض، فالتفاصيل غير مرحب بها.',
        },
        {
          text: 'تجاهلهم تماماً.',
          isCorrect: false,
          explanation: 'سلطتهم العالية تجعل تجاهلهم خطيراً.',
        },
        {
          text: 'طلب موافقتهم على كل مهمة.',
          isCorrect: false,
          explanation: 'هذا يبطئ التنفيذ بلا داع.',
        },
      ],
    },
    {
      scenario: 'صاحب مصلحة قوي يعارض المشروع بسبب معلومة غير مكتملة.',
      question: 'ما أول إجراء؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'الاستماع لاهتمامه وتزويده بالمعلومات الصحيحة.',
          isCorrect: true,
          explanation: 'الفهم يسبق المحاولة لإقناعه.',
        },
        {
          text: 'تجنبه وعدم دعوته للاجتماعات.',
          isCorrect: false,
          explanation: 'التجنب يزيد المقاومة.',
        },
        {
          text: 'إخبار الراعي دون فهم السبب.',
          isCorrect: false,
          explanation: 'المطلوب فهم اهتمام صاحب المصلحة أولاً.',
        },
        {
          text: 'تغيير نطاق المشروع فوراً.',
          isCorrect: false,
          explanation: 'تغيير النطاق دون تحليل ليس الحل الأول.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد معرفة من يؤثر على القرار ومن يتأثر به.',
      question: 'أي أداة تساعد على ذلك؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'سجل أصحاب المصلحة (Stakeholder register).',
          isCorrect: true,
          explanation: 'السجل يوثق الأدوار والاهتمامات والتأثير.',
        },
        {
          text: 'سجل المخاطر.',
          isCorrect: false,
          explanation: 'السجل يركز على التهديدات والفرص.',
        },
        {
          text: 'قائمة المواد.',
          isCorrect: false,
          explanation: 'القائمة مرتبطة بالمشتريات.',
        },
        {
          text: 'مخطط جانت.',
          isCorrect: false,
          explanation: 'المخطط يوضح الجدول.',
        },
      ],
    },
    {
      scenario: 'تعارض بين مطالب عميل ومتطلبات جهة تنظيمية.',
      question: 'ما المبدأ الحاكم؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'مواءمة أصحاب المصلحة مع أهداف الأعمال والامتثال أولاً.',
          isCorrect: true,
          explanation: 'المطالب تُوازن ضمن الحوكمة والقيود التنظيمية.',
        },
        {
          text: 'تنفيذ طلب العميل دائماً.',
          isCorrect: false,
          explanation: 'طلب العميل لا يتجاوز الامتثال.',
        },
        {
          text: 'تنفيذ طلب الجهة التنظيمية دون نقاش مع العميل.',
          isCorrect: false,
          explanation: 'التواصل مع العميل ضروري لإدارة التوقعات.',
        },
        {
          text: 'تأجيل القرار إلى الإغلاق.',
          isCorrect: false,
          explanation: 'التأجيل يترك التعارض دون حل.',
        },
      ],
    },
  ],
};

export default quizPmp24;
