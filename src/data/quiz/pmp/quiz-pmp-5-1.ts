import type { QuizBank } from '../types';

export const quizPmp51: QuizBank = {
  id: 'quiz-pmp-5-1',
  questions: [
    {
      scenario: 'مشروع يحتاج مهارة نادرة لمدة أسبوعين فقط.',
      question: 'أي خيار أفضل؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تخطيط مصادر داخلية أو خارجية حسب التوافر والتكلفة.',
          isCorrect: true,
          explanation: 'تخطيط الموارد يوازن المهارة والوقت والتكلفة.',
        },
        {
          text: 'تعيين شخص دائم دون حاجة.',
          isCorrect: false,
          explanation: 'التعيين الدائم قد يكون مكلفاً وغير مبرر.',
        },
        {
          text: 'إلغاء النشاط.',
          isCorrect: false,
          explanation: 'إلغاء النشاط يغير النطاق دون مبرر.',
        },
        {
          text: 'تأجيله إلى ما بعد الإغلاق.',
          isCorrect: false,
          explanation: 'التأجيل يهدر القيمة.',
        },
      ],
    },
    {
      scenario: 'عضو في الفريق يعمل في مشروعين ويسجل وقتاً أكبر من المتاح.',
      question: 'أي أداة تكشف ذلك؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تقويم الموارد (Resource calendar).',
          isCorrect: true,
          explanation: 'التقويم يوضح التوافر والوقت المحجوز.',
        },
        {
          text: 'مصفوفة RACI.',
          isCorrect: false,
          explanation: 'تحدد الأدوار لا التوافر الزمني.',
        },
        {
          text: 'سجل المخاطر.',
          isCorrect: false,
          explanation: 'يوثق المخاطر لا الجداول الزمنية.',
        },
        {
          text: 'قائمة المشتريات.',
          isCorrect: false,
          explanation: 'مرتبطة بالموردين.',
        },
      ],
    },
    {
      scenario: 'تضارب في حجز خبير بين فريقين بالتتابع.',
      question: 'ما أول إجراء؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التنسيق مع أصحاب المصلحة لإعادة ترتيب الأولويات.',
          isCorrect: true,
          explanation: 'تخصيص الموارد قرار تعاوني ضمن القيود.',
        },
        {
          text: 'السماح لمن يطلب أولاً.',
          isCorrect: false,
          explanation: 'الأسبقية ليست معياراً مهنياً.',
        },
        {
          text: 'إيقاف أحد المشروعين نهائياً.',
          isCorrect: false,
          explanation: 'الإيقاف قرار جذري دون تحليل.',
        },
        {
          text: 'تجاهل التعارض.',
          isCorrect: false,
          explanation: 'التعارض سيؤثر على الجدول.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يوزع العمل حسب المهارات لا حسب الأسماء فقط.',
      question: 'ما المبدأ؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'الكفاءة والقدرة (Competency and capacity).',
          isCorrect: true,
          explanation: 'تخصيص العمل يراعي المهارة والسعة معاً.',
        },
        {
          text: 'الأقدمية فقط.',
          isCorrect: false,
          explanation: 'الأقدمية لا تعني ملاءمة المهارة.',
        },
        {
          text: 'القرب الجغرافي فقط.',
          isCorrect: false,
          explanation: 'القرب عامل واحد وليس المعيار الوحيد.',
        },
        {
          text: 'الصداقة.',
          isCorrect: false,
          explanation: 'المجاملة لا تخدم المشروع.',
        },
      ],
    },
  ],
};

export default quizPmp51;
