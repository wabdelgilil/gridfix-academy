import type { QuizBank } from '../types';

export const quizPmp93: QuizBank = {
  id: 'quiz-pmp-9-3',
  questions: [
    {
      scenario: 'المستخدمون يقاومون النظام الجديد بحجة أن العمل القديم كافٍ.',
      question: 'ما أول إجراء؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'فهم أسباب المقاومة وإشراكهم في التغيير.',
          isCorrect: true,
          explanation: 'التغيير يبدأ بالاستماع ثم التدخل المناسب.',
        },
        {
          text: 'فرض النظام دون نقاش.',
          isCorrect: false,
          explanation: 'الفرض يزيد المقاومة.',
        },
        {
          text: 'إلغاء التدريب.',
          isCorrect: false,
          explanation: 'التدريب جزء من التكيّف.',
        },
        {
          text: 'تغيير العقود.',
          isCorrect: false,
          explanation: 'العقود ليست أداة التغيير السلوكي.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد قياس جاهزية المؤسسة للتغيير.',
      question: 'أي أداة مناسبة؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تقييم جاهزية التغيير (Change readiness assessment).',
          isCorrect: true,
          explanation: 'التقييم يكشف الفجوة في الثقافة والمهارات والدعم.',
        },
        {
          text: 'مصفوفة مخاطر.',
          isCorrect: false,
          explanation: 'تقيس الاحتمال والأثر.',
        },
        {
          text: 'EVM.',
          isCorrect: false,
          explanation: 'يقيس أداء التكلفة والجدول.',
        },
        {
          text: 'قائمة تحقق الجودة.',
          isCorrect: false,
          explanation: 'تفحص المخرجات.',
        },
      ],
    },
    {
      scenario: 'الإدارة العليا لا تظهر دعماً واضحاً لمبادرة التغيير.',
      question: 'ما الأثر المتوقع؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'ضعف التبني وتراجع الزخم لدى الفريق.',
          isCorrect: true,
          explanation: 'رعاية القيادة عامل حاسم في نجاح التغيير.',
        },
        {
          text: 'لا أثر لها.',
          isCorrect: false,
          explanation: 'للقيادة أثر مباشر.',
        },
        {
          text: 'تحسن تلقائي في الأداء.',
          isCorrect: false,
          explanation: 'العكس غالباً.',
        },
        {
          text: 'انخفاض الحاجة للتواصل.',
          isCorrect: false,
          explanation: 'الحاجة للتواصل تزيد.',
        },
      ],
    },
    {
      scenario: 'بعد التغيير عاد الموظفون إلى الطرق القديمة تدريجياً.',
      question: 'ما الإجراء؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تثبيت التغيير بالمؤشرات والتدريب والمكافآت ومعالجة الحواجز.',
          isCorrect: true,
          explanation: 'الاستدامة تتطلب تثبيتاً بعد التبني الأولي.',
        },
        {
          text: 'اعتباره فشلاً نهائياً.',
          isCorrect: false,
          explanation: 'الانتكاس جزء طبيعي ويمكن معالجته.',
        },
        {
          text: 'إلغاء المؤشرات.',
          isCorrect: false,
          explanation: 'المؤشرات تساعد على الرصد.',
        },
        {
          text: 'تغيير النظام مجدداً دون تحليل.',
          isCorrect: false,
          explanation: 'التحليل يسبق أي تعديل.',
        },
      ],
    },
  ],
};

export default quizPmp93;
