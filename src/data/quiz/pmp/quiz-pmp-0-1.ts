import type { QuizBank } from '../types';

export const quizPmp01: QuizBank = {
  id: 'quiz-pmp-0-1',
  questions: [
    {
      scenario:
        'شركة مرافق تنهي تركيب عدادات ذكية وتعتبر العمل منتهياً، بينما ينتظر المدير المالي انخفاض فقد المياه.',
      question: 'أي تعريف يطابق المشروع هنا؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'جهد مؤقت لإنتاج مخرج فريد (Project).',
          isCorrect: true,
          explanation:
            'المشروع مؤقت وله مخرج محدد، بخلاف التشغيل اليومي المستمر.',
        },
        {
          text: 'نشاط تشغيلي متكرر (Operations).',
          isCorrect: false,
          explanation:
            'العمليات مستمرة ومتكررة، بينما العدادات مشروع له بداية ونهاية.',
        },
        {
          text: 'محفظة أعمال (Portfolio).',
          isCorrect: false,
          explanation:
            'المحفظة مجموعة مشاريع وأعمال تُدار معاً لتحقيق أهداف استراتيجية.',
        },
        {
          text: 'سياسة حوكمة (Governance policy).',
          isCorrect: false,
          explanation: 'الحوكمة تنظّم القرارات، لكنها ليست تعريفاً للجهد نفسه.',
        },
      ],
    },
    {
      scenario: 'سلم الفريق النظام في الموعد، لكن معدل رضا العملاء لم يتحسن.',
      question: 'ما الفرق الذي يوضّح الموقف؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'المخرج (Output) سُلّم، لكن النتيجة (Outcome) لم تتحقق.',
          isCorrect: true,
          explanation:
            'التسليم لا يعني تحسن الأداء؛ النتيجة هي التغير الذي يحدثه المخرج.',
        },
        {
          text: 'لا فرق بين المخرج والنتيجة.',
          isCorrect: false,
          explanation: 'في PMP يوجد فرق جوهري بين تسليم المخرج وتحقيق الأثر.',
        },
        {
          text: 'المشروع فشل لأن الجدول تأخر.',
          isCorrect: false,
          explanation: 'الجدول لم يتأخر؛ المشكلة في غياب الأثر وليس في الوقت.',
        },
        {
          text: 'يجب إلغاء العقد فوراً.',
          isCorrect: false,
          explanation: 'الإلغاء ليس الإجراء الأول؛ يلزم تحليل سبب الفجوة أولاً.',
        },
      ],
    },
    {
      scenario:
        'مدير مشروع يريد معرفة المرحلة التي تنتقل فيها الفكرة من التخطيط إلى التنفيذ.',
      question: 'ما المقصود بدورة حياة المشروع (Project life cycle)؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'مسار البداية والتخطيط والتنفيذ والمراقبة والإغلاق.',
          isCorrect: true,
          explanation: 'دورة الحياة تصف ترتيب المراحل مهما كان النهج المستخدم.',
        },
        {
          text: 'قائمة بأسماء أعضاء الفريق فقط.',
          isCorrect: false,
          explanation: 'الفريق جزء من المشروع، لكنه ليس تعريفاً لدورة الحياة.',
        },
        {
          text: 'جدول المدفوعات الخاص بالموردين.',
          isCorrect: false,
          explanation: 'المدفوعات جزء من التكلفة لا من تعريف دورة الحياة.',
        },
        {
          text: 'سياسة الموارد البشرية في الشركة.',
          isCorrect: false,
          explanation: 'سياسة الموارد البشرية أوسع من مشروع واحد.',
        },
      ],
    },
    {
      scenario:
        'خلال التنفيذ ظهرت ملاحظة بأن النطاق والوقت والتكلفة والجودة تتأثر معاً.',
      question: 'ما المصطلح الذي يصف هذه القيود؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'القيود التنافسية (Competing constraints).',
          isCorrect: true,
          explanation: 'تغيير أحد القيود يؤثر في البقية، لذلك تُدار معاً.',
        },
        {
          text: 'مخاطر التشغيل (Operational risks).',
          isCorrect: false,
          explanation: 'هذه قيود تصميم وتخطيط، لا مجرد مخاطر تشغيل.',
        },
        {
          text: 'الامتثال التنظيمي (Compliance).',
          isCorrect: false,
          explanation: 'الامتثال يتعلق بالقوانين والمعايير، لا بقيود المشروع.',
        },
        {
          text: 'القيمة المستفادة (Benefits).',
          isCorrect: false,
          explanation: 'القيمة هي الأثر النهائي، لا القيود نفسها.',
        },
      ],
    },
  ],
};

export default quizPmp01;
