import type { QuizBank } from '../types';

export const quizPmp02: QuizBank = {
  id: 'quiz-pmp-0-2',
  questions: [
    {
      scenario:
        'مهندس لديه خمس سنوات خبرة تشغيلية لكنه لم يوثّق قيادته لمشاريع التحسين.',
      question: 'ما المطلوب لإثبات أهلية PMP؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'توثيق خبرة قيادة المشاريع بالأدوار والتواريخ والنتائج.',
          isCorrect: true,
          explanation:
            'PMI يطلب خبرة في قيادة مشاريع، لا مجرد الحضور التشغيلي.',
        },
        {
          text: 'إرسال شهادة عمل عامة دون تفاصيل.',
          isCorrect: false,
          explanation:
            'الشهادة العامة لا تثبت أدوار المشروع ولا نطاق المسؤولية.',
        },
        {
          text: 'اجتياز اختبار داخلي في الشركة.',
          isCorrect: false,
          explanation: 'الاختبار الداخلي لا يُغني عن متطلبات PMI.',
        },
        {
          text: 'تقديم عدد ساعات التدريب فقط.',
          isCorrect: false,
          explanation: 'التدريب شرط منفصل عن شرط الخبرة العملية.',
        },
      ],
    },
    {
      scenario:
        'متقدم حاصل على شهادة جامعية ويريد معرفة عدد أشهر الخبرة المطلوبة.',
      question: 'كم شهراً من خبرة قيادة المشاريع مطلوب مع شهادة جامعية؟',
      difficulty: 'سهل',
      options: [
        {
          text: '36 شهراً.',
          isCorrect: true,
          explanation: 'مع شهادة جامعية تكفي 36 شهراً من خبرة قيادة المشاريع.',
        },
        {
          text: '60 شهراً.',
          isCorrect: false,
          explanation: '60 شهراً مطلوبة لمن لا يحمل شهادة جامعية.',
        },
        {
          text: '24 شهراً.',
          isCorrect: false,
          explanation: '24 شهراً أقل من الحد المطلوب وفق متطلبات PMI.',
        },
        {
          text: '12 شهراً.',
          isCorrect: false,
          explanation: 'سنة واحدة لا تكفي لطلب PMP.',
        },
      ],
    },
    {
      scenario: 'متقدم يملك 35 ساعة تدريب من مزود غير معتمد.',
      question: 'هل تُحتسب هذه الساعات؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'لا؛ يجب أن تكون الساعات من مزود معتمد.',
          isCorrect: true,
          explanation:
            'ساعات التواصل (Contact hours) موثّقة بشهادات مزود معتمد.',
        },
        {
          text: 'نعم؛ أي تدريب في إدارة المشاريع يُحتسب.',
          isCorrect: false,
          explanation: 'المصدر المعتمد شرط أساسي لقبول الساعات.',
        },
        {
          text: 'نعم إذا كانت الدورات مجانية.',
          isCorrect: false,
          explanation: 'السعر لا علاقة له بالاعتماد.',
        },
        {
          text: 'لا؛ يجب أن تكون 70 ساعة.',
          isCorrect: false,
          explanation: 'الحد الأدنى 35 ساعة، لكن من مزود معتمد.',
        },
      ],
    },
    {
      scenario: 'بعد تقديم الطلب أُبلغ المتقدم أن طلبه سيخضع لمراجعة عشوائية.',
      question: 'ما المقصود بالمراجعة (Audit)؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تحقق من صحة الأدلة المقدمة.',
          isCorrect: true,
          explanation:
            'المراجعة قد تطلب وصف الأدوار والتواريخ وشهادات التدريب.',
        },
        {
          text: 'امتحان إضافي قبل PMP.',
          isCorrect: false,
          explanation: 'المراجعة إجراء إداري على الطلب، وليس امتحاناً.',
        },
        {
          text: 'رفض تلقائي للطلب.',
          isCorrect: false,
          explanation: 'المراجعة لا تعني الرفض؛ بل طلب إثبات إضافي.',
        },
        {
          text: 'تحديث لشروط الدفع فقط.',
          isCorrect: false,
          explanation: 'المراجعة مرتبطة بالأهلية لا بالدفع.',
        },
      ],
    },
  ],
};

export default quizPmp02;
