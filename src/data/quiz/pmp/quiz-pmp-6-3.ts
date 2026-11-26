import type { QuizBank } from '../types';

export const quizPmp63: QuizBank = {
  id: 'quiz-pmp-6-3',
  questions: [
    {
      scenario: 'خطر سابق تحقق وأصبح يؤثر على الجدول.',
      question: 'كيف يُصنَّف الآن؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مشكلة (Issue) وتُسجَّل في سجل المشكلات.',
          isCorrect: true,
          explanation: 'الخطر حدث، فانتقل من الاحتمال إلى الواقع.',
        },
        {
          text: 'يبقى خطراً فقط.',
          isCorrect: false,
          explanation: 'بعد حدوثه يصبح مشكلة.',
        },
        {
          text: 'فرصة.',
          isCorrect: false,
          explanation: 'الأثر سلبي، فليس فرصة.',
        },
        {
          text: 'طلب تغيير تلقائياً.',
          isCorrect: false,
          explanation: 'ليس كل issue طلب تغيير.',
        },
      ],
    },
    {
      scenario: 'سجل المخاطر لا يُحدَّث منذ أسبوعين رغم ظهور محفزات جديدة.',
      question: 'ما الإجراء الصحيح؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تحديث السجل بانتظام في مراجعات المخاطر.',
          isCorrect: true,
          explanation: 'السجل حيّ ويعكس المحفزات والمالك والحالة.',
        },
        {
          text: 'الانتظار حتى الإغلاق.',
          isCorrect: false,
          explanation: 'التحديث المتأخر يفقد القيمة.',
        },
        {
          text: 'حذف المحفزات.',
          isCorrect: false,
          explanation: 'المحفزات جزء من المعلومات المفيدة.',
        },
        {
          text: 'الاكتفاء بالذاكرة.',
          isCorrect: false,
          explanation: 'التوثيق أهم من الذاكرة.',
        },
      ],
    },
    {
      scenario: 'بعد تطبيق استجابة بقي خطر متبقٍّ متوسط.',
      question: 'ما المصطلح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الخطر المتبقي (Residual risk).',
          isCorrect: true,
          explanation: 'ما يبقى بعد الاستجابة يحتاج مراقبة.',
        },
        {
          text: 'الخطر الكامن (Latent risk).',
          isCorrect: false,
          explanation: 'ليس المصطلح المستخدم هنا.',
        },
        {
          text: 'الخطر الثانوي (Secondary risk).',
          isCorrect: false,
          explanation: 'الخطر الثانوي ناتج عن الاستجابة نفسها.',
        },
        {
          text: 'المشكلة.',
          isCorrect: false,
          explanation: 'المشكلة حدثت، أما الخطر المتبقي فاحتمالي.',
        },
      ],
    },
    {
      scenario: 'استجابة الخطر أنشأت خطراً جديداً في الجدول.',
      question: 'ما المصطلح؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'خطر ثانوي (Secondary risk).',
          isCorrect: true,
          explanation: 'يظهر نتيجة تطبيق الاستجابة، ويحتاج تحديداً وتحليلاً.',
        },
        {
          text: 'خطر متبقي.',
          isCorrect: false,
          explanation: 'المتبقي هو ما بقي من الخطر الأصلي.',
        },
        {
          text: 'مشكلة.',
          isCorrect: false,
          explanation: 'لم يحدث بعد.',
        },
        {
          text: 'احتياطي.',
          isCorrect: false,
          explanation: 'الاحتياطي مخصص وليس خطراً.',
        },
      ],
    },
  ],
};

export default quizPmp63;
