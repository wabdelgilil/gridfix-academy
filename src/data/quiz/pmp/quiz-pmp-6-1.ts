import type { QuizBank } from '../types';

export const quizPmp61: QuizBank = {
  id: 'quiz-pmp-6-1',
  questions: [
    {
      scenario: 'فريق يجمع قائمة بالتهديدات والفرص المحتملة دون تقييم أولاً.',
      question: 'ما أول أداة مناسبة؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تحديد المخاطر (Identify risks) وتسجيلها في سجل المخاطر.',
          isCorrect: true,
          explanation: 'التحديد يسبق التحليل، والسجل يوثق كل خطر.',
        },
        {
          text: 'تخطيط الاستجابة مباشرة.',
          isCorrect: false,
          explanation: 'لا يمكن التخطيط قبل الفهم والتحليل.',
        },
        {
          text: 'إغلاق المشروع.',
          isCorrect: false,
          explanation: 'المخاطر جزء طبيعي من أي مشروع.',
        },
        {
          text: 'إخفاء القائمة.',
          isCorrect: false,
          explanation: 'الشفافية أساسية.',
        },
      ],
    },
    {
      scenario: 'خطر احتماله مرتفع وأثره كبير على الجدول.',
      question: 'أي أداة ترتيب تناسب ذلك؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مصفوفة الاحتمال والأثر (Probability-impact matrix).',
          isCorrect: true,
          explanation: 'ترتب المخاطر حسب الأولوية لتركيز الجهد.',
        },
        {
          text: 'مصفوفة RACI.',
          isCorrect: false,
          explanation: 'تحدد الأدوار لا أولوية المخاطر.',
        },
        {
          text: 'مخطط جانت.',
          isCorrect: false,
          explanation: 'يوضح الجدول لا المخاطر.',
        },
        {
          text: 'قائمة تحقق جودة.',
          isCorrect: false,
          explanation: 'تفحص المخرجات.',
        },
      ],
    },
    {
      scenario: 'خطر مالي متوقع قيمته 40 ألف دولار بطريقة احتمالية.',
      question: 'ما المقصود بالقيمة المتوقعة (EMV)؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'احتمال الحدوث مضروباً في الأثر المالي.',
          isCorrect: true,
          explanation: 'EMV يساعد على ترتيب المخاطر عند توفر أرقام.',
        },
        {
          text: 'التكلفة الأعلى ممكنة.',
          isCorrect: false,
          explanation: 'القيمة المتوقعة ليست أسوأ سيناريو.',
        },
        {
          text: 'الميزانية المتبقية.',
          isCorrect: false,
          explanation: 'الميزانية ليست احتمالاً مضروباً بالأثر.',
        },
        {
          text: 'احتياطي الطوارئ دائماً.',
          isCorrect: false,
          explanation: 'الاحتياطي يُبنى على تحليل المخاطر، لكنه ليس EMV.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد فحص نقاط القوة والضعف والفرص والتهديدات.',
      question: 'أي تقنية مناسبة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحليل SWOT.',
          isCorrect: true,
          explanation:
            'يفحص العوامل الداخلية والخارجية لاستخراج المخاطر والفرص.',
        },
        {
          text: 'تحليل PESTLE.',
          isCorrect: false,
          explanation: 'يفحص البيئة الخارجية الكلية، لا نقاط القوة الداخلية.',
        },
        {
          text: 'EVM.',
          isCorrect: false,
          explanation: 'يقيس أداء التكلفة والجدول.',
        },
        {
          text: 'RACI.',
          isCorrect: false,
          explanation: 'يحدد الأدوار.',
        },
      ],
    },
  ],
};

export default quizPmp61;
