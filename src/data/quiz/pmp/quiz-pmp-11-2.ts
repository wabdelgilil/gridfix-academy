import type { QuizBank } from '../types';

export const quizPmp112: QuizBank = {
  id: 'quiz-pmp-11-2',
  questions: [
    {
      scenario:
        'تقرير تشخيصي يظهر تبايناً بين أداء العمليات وأداء بيئة الأعمال.',
      question: 'ما أفضل خطة تحسين؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تخصيص وقت إضافي للمجال الأضعف مع أمثلة تطبيقية.',
          isCorrect: true,
          explanation: 'التحسين يستهدف الفجوة لا مجرد زيادة الساعات.',
        },
        {
          text: 'دراسة كل المجالات بالتساوي دون أولوية.',
          isCorrect: false,
          explanation: 'التساوي يهدر وقتاً في نقاط القوة.',
        },
        {
          text: 'التركيز على مجال واحد تماماً.',
          isCorrect: false,
          explanation: 'التوازن مطلوب، لكن مع أولوية.',
        },
        {
          text: 'إلغاء المراجعة.',
          isCorrect: false,
          explanation: 'المراجعة جوهر التحسين.',
        },
      ],
    },
    {
      scenario: 'المتدرب يعرف المصطلحات لكنه يخطئ في أسئلة المواقف.',
      question: 'ما التعديل المطلوب؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحويل كل مفهوم إلى سيناريو عملي مع شرح سبب الخيار.',
          isCorrect: true,
          explanation: 'الامتحان يقيس الحكم في السياق.',
        },
        {
          text: 'زيادة حفظ التعريفات.',
          isCorrect: false,
          explanation: 'الحفظ لا يعالج تطبيق الموقف.',
        },
        {
          text: 'تقليل عدد الأسئلة.',
          isCorrect: false,
          explanation: 'التطبيق أهم من العدد.',
        },
        {
          text: 'تجنب أسئلة المواقف.',
          isCorrect: false,
          explanation: 'هي جوهر الامتحان.',
        },
      ],
    },
    {
      scenario: 'خطة التحسين تحتوي على أهداف عامة مثل "سأدرس أكثر".',
      question: 'ما المشكلة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الهدف غير قابل للقياس ولا يحدد مجالاً أو أسبوعاً.',
          isCorrect: true,
          explanation: 'الخطة الجيدة تحدد ماذا ومتى وكيف نقيس.',
        },
        {
          text: 'لا مشكلة؛ النية كافية.',
          isCorrect: false,
          explanation: 'النية وحدها لا تصنع تحسيناً.',
        },
        {
          text: 'الهدف كبير جداً.',
          isCorrect: false,
          explanation: 'المشكلة في الغموض لا في الحجم.',
        },
        {
          text: 'يجب إلغاء الخطة.',
          isCorrect: false,
          explanation: 'التطوير أفضل.',
        },
      ],
    },
    {
      scenario: 'بعد خطة تحسين أسبوعية ارتفع أداء المتدرب في المحاكي الثاني.',
      question: 'ما الاستفادة القصوى؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تثبيت ما نجح وتحديث الخطة للمجال التالي الأضعف.',
          isCorrect: true,
          explanation: 'التحسين دورة مستمرة لا حدث واحد.',
        },
        {
          text: 'التوقف عن الدراسة.',
          isCorrect: false,
          explanation: 'التوقف يفقد الزخم.',
        },
        {
          text: 'اعتباره نتيجة نهائية.',
          isCorrect: false,
          explanation: 'المحاكي أداة تشخيص.',
        },
        {
          text: 'تكرار نفس الخطة دون تقييم.',
          isCorrect: false,
          explanation: 'التقييم يوجه التعديل.',
        },
      ],
    },
  ],
};

export default quizPmp112;
