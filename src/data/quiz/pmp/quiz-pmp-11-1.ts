import type { QuizBank } from '../types';

export const quizPmp111: QuizBank = {
  id: 'quiz-pmp-11-1',
  questions: [
    {
      scenario: 'متدرب يبدأ محاكي PMP ويريد إدارة وقته عبر 180 سؤالاً.',
      question: 'أي خطة مناسبة؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'الالتزام بوتيرة تقارب 73 ثانية للسؤال مع فترتي راحة.',
          isCorrect: true,
          explanation: 'التخطيط الزمني يمنع استنفاد الوقت قبل النهاية.',
        },
        {
          text: 'الإجابة سريعاً دون قراءة السيناريو.',
          isCorrect: false,
          explanation: 'الأسئلة تعتمد على الموقف.',
        },
        {
          text: 'قضاء دقيقتين في كل سؤال.',
          isCorrect: false,
          explanation: 'يتجاوز الوقت المتاح.',
        },
        {
          text: 'تخطي الأسئلة الصعبة دون تعليم.',
          isCorrect: false,
          explanation: 'التعليم يساعد على العودة إليها.',
        },
      ],
    },
    {
      scenario: 'متدرب ترك علامة على سؤال صعب ويريد العودة لاحقاً.',
      question: 'ما الأفضل؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'إكمال الدورة ثم مراجعة الأسئلة المعلَّمة ضمن الوقت المتبقي.',
          isCorrect: true,
          explanation: 'التعليم يمنع التعثر ويحافظ على التقدم.',
        },
        {
          text: 'البقاء أمامه حتى بلوغ الإجابة.',
          isCorrect: false,
          explanation: 'يهدر وقتاً قد يحتاجه لأسئلة أسهل.',
        },
        {
          text: 'حذف العلامة ونسيانه.',
          isCorrect: false,
          explanation: 'يفقد فرصة مراجعة مهمة.',
        },
        {
          text: 'إنهاء المحاكي فوراً.',
          isCorrect: false,
          explanation: 'المراجعة جزء من الاستراتيجية.',
        },
      ],
    },
    {
      scenario: 'نتيجة المحاكي أظهرت ضعفاً في مجال الأفراد (People).',
      question: 'ما أول خطوة في التحسين؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحليل أسئلة المجال وتحديد المفاهيم التي أخطأ فيها المتدرب.',
          isCorrect: true,
          explanation: 'التشخيص يسبق خطة الدراسة.',
        },
        {
          text: 'إعادة المحاكي فوراً دون دراسة.',
          isCorrect: false,
          explanation: 'التكرار دون تصحيح لا يحسن الفهم.',
        },
        {
          text: 'تغيير ترتيب الأسئلة فقط.',
          isCorrect: false,
          explanation: 'الترتيب لا يعالج الضعف.',
        },
        {
          text: 'التركيز على الحفظ العام.',
          isCorrect: false,
          explanation: 'التحليل أدق.',
        },
      ],
    },
    {
      scenario: 'متدرب يشعر بالإرهاق في منتصف المحاكي.',
      question: 'ما الإجراء المهني؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'استخدام فترة الراحة المخططة لاستعادة التركيز.',
          isCorrect: true,
          explanation: 'الراحة المحسوبة تحافظ على جودة القرار.',
        },
        {
          text: 'الاستمرار دون توقف مهما كان الحال.',
          isCorrect: false,
          explanation: 'الإرهاق يضعف الأداء.',
        },
        {
          text: 'إلغاء المحاكي.',
          isCorrect: false,
          explanation: 'الإلغاء يفقد فرصة التدرب.',
        },
        {
          text: 'تقليل عدد الأسئلة.',
          isCorrect: false,
          explanation: 'عدد الأسئلة ثابت في المحاكي.',
        },
      ],
    },
  ],
};

export default quizPmp111;
