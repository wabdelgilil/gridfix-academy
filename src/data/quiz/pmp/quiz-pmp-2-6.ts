import type { QuizBank } from '../types';

export const quizPmp26: QuizBank = {
  id: 'quiz-pmp-2-6',
  questions: [
    {
      scenario: 'فريق موزع على ثلاث مدن ويلتقي في أوقات مختلفة.',
      question: 'أي اعتبار أساسي في خطة التواصل؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'اختيار الوسائل والتوقيت المناسبين لكل مجموعة.',
          isCorrect: true,
          explanation: 'التواصل الفعال يراعي الجمهور والوسيلة والتكرار.',
        },
        {
          text: 'استخدام نفس الوسيلة للجميع دون استثناء.',
          isCorrect: false,
          explanation: 'وسيلة واحدة قد لا تناسب الجميع.',
        },
        {
          text: 'إلغاء الاجتماعات نهائياً.',
          isCorrect: false,
          explanation: 'الاجتماعات مفيدة إذا كانت هادفة.',
        },
        {
          text: 'إرسال كل التفاصيل يومياً.',
          isCorrect: false,
          explanation: 'الإفراط يؤدي إلى إرهاق المعلومات.',
        },
      ],
    },
    {
      scenario: 'معرفة ضمنية داخل خبرة أحد الأعضاء ولم تُوثق.',
      question: 'أفضل طريقة لنقلها؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'جلسة نقل معرفة مع توثيق موجز في مستودع الدروس.',
          isCorrect: true,
          explanation: 'المعرفة الضمنية تنتقل بالمشاركة والتوثيق معاً.',
        },
        {
          text: 'الانتظار حتى الإغلاق فقط.',
          isCorrect: false,
          explanation: 'الانتظار يفقد المعرفة مع مغادرة الأشخاص.',
        },
        {
          text: 'إرسال رسالة عشوائية.',
          isCorrect: false,
          explanation: 'الرسالة العشوائية غير كافية.',
        },
        {
          text: 'اعتبارها غير مهمة.',
          isCorrect: false,
          explanation: 'المعرفة الخبرية أصل تنظيمي مهم.',
        },
      ],
    },
    {
      scenario: 'تقرير حالة يرسل أرقاماً كثيرة دون تفسير.',
      question: 'ما التحسين المطلوب؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'إضافة المعنى والقرارات المطلوبة والخطوات التالية.',
          isCorrect: true,
          explanation: 'التقرير الجيد يحول البيانات إلى معلومات قابلة للقرار.',
        },
        {
          text: 'زيادة عدد الجداول.',
          isCorrect: false,
          explanation: 'الجداول بلا معنى لا تحسن التقرير.',
        },
        {
          text: 'تقليل عدد المستلمين فقط.',
          isCorrect: false,
          explanation: 'تقليل المستلمين لا يعالج غياب التفسير.',
        },
        {
          text: 'إرساله مرة أسبوعياً بدلاً من يومياً.',
          isCorrect: false,
          explanation: 'التكرار ليس المشكلة الأساسية.',
        },
      ],
    },
    {
      scenario: ' disagree بين فريق المشروع والعميل حول فهم رسالة أُرسلت.',
      question: 'ما السبب المحتمل؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'غياب التحقق من الفهم حلقة التغذية الراجعة.',
          isCorrect: true,
          explanation: 'التواصل لا يكتمل إلا بتأكد وصول المعنى.',
        },
        {
          text: 'استخدام لغة عربية.',
          isCorrect: false,
          explanation: 'اللغة نفسها ليست المشكلة، بل غياب التأكد.',
        },
        {
          text: 'وجود اجتماعات كثيرة.',
          isCorrect: false,
          explanation: 'كثرة الاجتماعات ليست السبب بالضرورة.',
        },
        {
          text: 'اعتماد البريد الإلكتروني فقط.',
          isCorrect: false,
          explanation:
            'الوسيلة قد تكون جزءاً من المشكلة، لكن السبب الأعم هو غياب التغذية الراجعة.',
        },
      ],
    },
  ],
};

export default quizPmp26;
