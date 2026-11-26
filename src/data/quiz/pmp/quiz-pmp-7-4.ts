import type { QuizBank } from '../types';

export const quizPmp74: QuizBank = {
  id: 'quiz-pmp-7-4',
  questions: [
    {
      scenario: 'فريق يقيس عدد الاجتماعات ويعتبره دليلاً على تقدم المشروع.',
      question: 'ما المشكلة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'هذا مؤشر نشاط لا مؤشر أداء أو قيمة.',
          isCorrect: true,
          explanation: 'المؤشر الجيد يرتبط بالنتيجة والقرار.',
        },
        {
          text: 'لا مشكلة؛ كل مؤشر مقبول.',
          isCorrect: false,
          explanation:
            'عدد الاجتماعات مؤشر نشاط لا أداء؛ المؤشر المفيد يرتبط بالنتيجة ويدعم قراراً، لا بعدد اللقاءات.',
        },
        {
          text: 'المشروع يسير بشكل مثالي.',
          isCorrect: false,
          explanation: 'الاجتماعات لا تثبت التقدم.',
        },
        {
          text: 'يجب إلغاء كل الاجتماعات.',
          isCorrect: false,
          explanation: 'المشكلة في القياس لا في الاجتماع نفسه.',
        },
      ],
    },
    {
      scenario: 'مؤشر يقيس احتمال تأخر لاحق قبل ظهوره في النتائج.',
      question: 'أي نوع مؤشر؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'مؤشر رائد (Leading indicator).',
          isCorrect: true,
          explanation: 'ينبئ بالأداء المستقبلي ويسمح بالتدخل المبكر.',
        },
        {
          text: 'مؤشر متأخر (Lagging indicator).',
          isCorrect: false,
          explanation: 'يعكس نتيجة حدثت بالفعل.',
        },
        {
          text: 'مؤشر مالي فقط.',
          isCorrect: false,
          explanation: 'المؤشرات الرائدة قد تكون تشغيلية.',
        },
        {
          text: 'مؤشر شكلي.',
          isCorrect: false,
          explanation: 'المؤشر الرائد له قيمة قرارية.',
        },
      ],
    },
    {
      scenario: 'رغم تحسن مؤشر سرعة الفريق تراجع رضا العميل.',
      question: 'ماذا يدل ذلك؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'المؤشر لا يربط الإنتاجية بالقيمة، ويحتاج مراجعة.',
          isCorrect: true,
          explanation: 'السرعة دون قيمة قد تعني إنتاجاً غير مفيد.',
        },
        {
          text: 'السرعة دائماً إيجابية.',
          isCorrect: false,
          explanation: 'السرعة وحدها ليست غاية.',
        },
        {
          text: 'العميل مخطئ دائماً.',
          isCorrect: false,
          explanation: 'رضا العميل إشارة مهمة.',
        },
        {
          text: 'لا حاجة لتغيير.',
          isCorrect: false,
          explanation: 'الفجوة تستدعي تحليلاً.',
        },
      ],
    },
    {
      scenario: 'لوحة مؤشرات تعرض أرقاماً كثيرة دون إجراءات مقترحة.',
      question: 'ما التحسين؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'ربط كل مؤشر بعتبة وإجراء ومالك واضح.',
          isCorrect: true,
          explanation: 'المؤشر يصبح مفيداً عندما يحفز قراراً.',
        },
        {
          text: 'زيادة عدد الأرقام.',
          isCorrect: false,
          explanation:
            'زيادة الأرقام لا تحسن اللوحة؛ التحسين يأتي بربط كل مؤشر بعتبة وإجراء ومالك واضح.',
        },
        {
          text: 'تقليل عدد الاجتماعات فقط.',
          isCorrect: false,
          explanation: 'ليست المشكلة الأساسية.',
        },
        {
          text: 'إخفاء المؤشرات السيئة.',
          isCorrect: false,
          explanation:
            'إخفاء المؤشرات السيئة يضلل أصحاب المصلحة؛ الشفافية مع خطة تصحيح بمالك وموعد هي المعالجة المهنية.',
        },
      ],
    },
  ],
};

export default quizPmp74;
