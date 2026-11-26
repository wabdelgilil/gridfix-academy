import type { QuizBank } from '../types';

export const quizPmp43: QuizBank = {
  id: 'quiz-pmp-4-3',
  questions: [
    {
      scenario: 'المعلومات: PV=100، EV=80، AC=90.',
      question: 'ما قيمة CPI؟',
      difficulty: 'سهل',
      options: [
        {
          text: '0.89 تقريباً، أي تجاوز في التكلفة.',
          isCorrect: true,
          explanation:
            'CPI = EV ÷ AC = 80 ÷ 90 ≈ 0.89، وقيمة أقل من 1 تعني تجاوز التكلفة.',
        },
        {
          text: '1.25، أي وفور في التكلفة.',
          isCorrect: false,
          explanation: 'هذه ناتج AC ÷ EV، وهي معكوسة.',
        },
        {
          text: '0.80، أي تأخر في الجدول.',
          isCorrect: false,
          explanation: '0.80 هو SPI، وليس CPI.',
        },
        {
          text: '1.00، أي لا انحراف.',
          isCorrect: false,
          explanation: 'الأرقام لا تعطي CPI=1.',
        },
      ],
    },
    {
      scenario: 'SPI = 0.85 في تقرير الحالة.',
      question: 'ماذا يعني ذلك؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'العمل المنجز أقل من المخطط زمنياً.',
          isCorrect: true,
          explanation: 'SPI أقل من 1 يعني تأخر الجدول.',
        },
        {
          text: 'التكلفة أعلى من المخطط.',
          isCorrect: false,
          explanation: 'هذا ما يقيسه CPI لا SPI.',
        },
        {
          text: 'المشروع سينجح بالتأكيد.',
          isCorrect: false,
          explanation: 'المؤشر لا يضمن النتيجة.',
        },
        {
          text: 'لا حاجة لإجراء.',
          isCorrect: false,
          explanation: 'التأخر يستدعي تحليلاً وتصحيحاً.',
        },
      ],
    },
    {
      scenario:
        'مدير مشروع يحتاج تقدير التكلفة المتوقعة عند الإكمال بمعدل أداء حالي.',
      question: 'أي صيغة مناسبة؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'EAC = BAC ÷ CPI.',
          isCorrect: true,
          explanation: 'هذه صيغة شائعة عندما يستمر معدل الأداء الحالي.',
        },
        {
          text: 'EAC = BAC − EV.',
          isCorrect: false,
          explanation: 'هذه ليست الصيغة المطلوبة في هذا الافتراض.',
        },
        {
          text: 'EAC = AC فقط.',
          isCorrect: false,
          explanation: 'AC هو التكلفة الفعلية حتى الآن.',
        },
        {
          text: 'EAC = PV ÷ SPI.',
          isCorrect: false,
          explanation: 'هذه لا تحسب تكلفة الإكمال.',
        },
      ],
    },
    {
      scenario: 'TCPI أعلى من 1 بعد تجاوز تكلفة كبير.',
      question: 'ماذا يعني؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'مطلوب أداء تكلفة أفضل من المعدل السابق للوصول إلى الهدف.',
          isCorrect: true,
          explanation: 'TCPI يقيس كفاءة مطلوبة للمتبقي من العمل.',
        },
        {
          text: 'المشروع سينهي دون تجاوز تلقائياً.',
          isCorrect: false,
          explanation: 'العكس؛ يحتاج تحسيناً.',
        },
        {
          text: 'لا توجد حاجة لتغيير.',
          isCorrect: false,
          explanation: 'الرقم يشير إلى ضغط على الأداء.',
        },
        {
          text: 'يجب إلغاء خط الأساس.',
          isCorrect: false,
          explanation: 'خط الأساس لا يُلغى بمجرد TCPI مرتفع.',
        },
      ],
    },
  ],
};

export default quizPmp43;
