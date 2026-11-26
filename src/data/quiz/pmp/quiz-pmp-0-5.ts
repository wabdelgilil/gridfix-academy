import type { QuizBank } from '../types';

export const quizPmp05: QuizBank = {
  id: 'quiz-pmp-0-5',
  questions: [
    {
      scenario:
        'دارس يقرأ PMBOK 8 ويتساءل عن أهم ما يميزه عن الإصدارات السابقة.',
      question: 'ما التركيز الأساسي في PMBOK 8؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'القيمة وتخصيص النهج (Tailoring) والممارسات الأدائية.',
          isCorrect: true,
          explanation:
            'الإصدار الثامن يركز على ما يحقق القيمة وكيفية تكييف الممارسات.',
        },
        {
          text: 'حفظ تسع مناطق معرفية بالترتيب.',
          isCorrect: false,
          explanation: 'الترتيب التقليدي لم يعد هو بوصة الدراسة.',
        },
        {
          text: 'تطبيق التنبؤي في كل مشروع.',
          isCorrect: false,
          explanation: 'التخصيص يقتضي اختيار النهج المناسب.',
        },
        {
          text: 'إلغاء دور أصحاب المصلحة.',
          isCorrect: false,
          explanation: 'أصحاب المصلحة محوريون في الإصدار الثامن.',
        },
      ],
    },
    {
      scenario: 'فريق يعمل في بيئة عالية التغيير ومتطلبات غير مستقرة.',
      question: 'أي نهج يوصي به PMI؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تخصيص (Tailoring) الممارسات حسب سياق المشروع.',
          isCorrect: true,
          explanation: 'لا يوجد نهج واحد يناسب كل المشاريع.',
        },
        {
          text: 'فرض التنبؤي دون استثناء.',
          isCorrect: false,
          explanation: 'التنبؤي لا يناسب كل السياقات.',
        },
        {
          text: 'إلغاء التخطيط تماماً.',
          isCorrect: false,
          explanation: 'التخطيط موجود حتى في الرشيق، لكنه متكرر ومتناسب.',
        },
        {
          text: 'اعتماد رأي أعلى رتبة دون تحليل.',
          isCorrect: false,
          explanation: 'القرار يعتمد على سياق المشروع لا على الرتبة.',
        },
      ],
    },
    {
      scenario: 'دارس يريد دليلاً رشيقاً رسمياً يواكب PMP.',
      question: 'ما المرجع الرسمي الذي يوصي به PMI؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'دليل ممارسات Agile (Agile Practice Guide).',
          isCorrect: true,
          explanation: 'يُعد المرجع الرسمي لفهم الرشيق ضمن منظومة PMI.',
        },
        {
          text: 'كتاب رشيق غير معتمد.',
          isCorrect: false,
          explanation: 'المصادر غير المعتمدة قد تخلط المفاهيم.',
        },
        {
          text: 'دليل CMMS الخاص بالصيانة.',
          isCorrect: false,
          explanation: 'هذا مرجع مجال مختلف تماماً.',
        },
        {
          text: 'ميثاق المشروع وحده.',
          isCorrect: false,
          explanation: 'الميثاق لا يشرح ممارسات Agile.',
        },
      ],
    },
    {
      scenario: 'خطة دراسة تعتمد على قراءة صفحات PMBOK دون تطبيق.',
      question: 'ما التعديل الأفضل؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحويل كل مهمة ECO إلى سيناريو عملي وكويز.',
          isCorrect: true,
          explanation: 'الامتحان يقيس التطبيق، لا استرجاع النصوص.',
        },
        {
          text: 'زيادة عدد الصفحات المقروءة يومياً.',
          isCorrect: false,
          explanation: 'الكمية وحدها لا تبني حكم الامتحان.',
        },
        {
          text: 'حفظ تعريفات المصطلحات فقط.',
          isCorrect: false,
          explanation: 'التعريفات جزء صغير من المهارة المطلوبة.',
        },
        {
          text: 'تأجيل التطبيق إلى بعد الامتحان.',
          isCorrect: false,
          explanation: 'التطبيق أثناء الدراسة هو ما يرسّخ الفهم.',
        },
      ],
    },
  ],
};

export default quizPmp05;
