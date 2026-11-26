import type { QuizBank } from '../types';

export const quizPmp55: QuizBank = {
  id: 'quiz-pmp-5-5',
  questions: [
    {
      scenario: 'قرار تغيير في النطاق يؤثر على الجدول والتكلفة والمخاطر معاً.',
      question: 'ما النهج الصحيح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحليل الأثر المتكامل قبل الاعتماد.',
          isCorrect: true,
          explanation: 'الإدارة المتكاملة تمنع تحسين جزء على حساب آخر.',
        },
        {
          text: 'اعتماد التغيير بناءً على النطاق فقط.',
          isCorrect: false,
          explanation: 'التأثيرات الجانبية ستظهر لاحقاً.',
        },
        {
          text: 'تنفيذه فوراً.',
          isCorrect: false,
          explanation: 'التنفيذ قبل التحليل يخالف التحكم بالتغيير.',
        },
        {
          text: 'تجاهل الأثر المالي.',
          isCorrect: false,
          explanation: 'الأثر المالي جزء أساسي من القرار.',
        },
      ],
    },
    {
      scenario: 'خطة المشروع تدمج الخطط الفرعية في وثيقة واحدة متسقة.',
      question: 'ما المقصود بخطة إدارة المشروع (Integrated plan)؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'دمج جميع الخطط الفرعية في مرجع متسق.',
          isCorrect: true,
          explanation: 'التكامل يمنع التعارض بين النطاق والجدول والتكلفة.',
        },
        {
          text: 'قائمة مهام الفريق فقط.',
          isCorrect: false,
          explanation: 'القائمة جزء صغير من الخطة.',
        },
        {
          text: 'جدول الموردين فقط.',
          isCorrect: false,
          explanation: 'الموردون جزء من المشتريات.',
        },
        {
          text: 'ميثاق المشروع فقط.',
          isCorrect: false,
          explanation: 'الميثاق يسبق الخطة ولا يغني عنها.',
        },
      ],
    },
    {
      scenario: 'تعليمات متعارضة تصدر من الراعي ومدير المشروع.',
      question: 'ما أفضل تفسير؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'يجب الرجوع إلى الحوكمة ومعايير القرار المعتمدة.',
          isCorrect: true,
          explanation: 'التكامل يحتاج وضوح سلطة القرار.',
        },
        {
          text: 'تنفيذ تعليمات الأعلى دائماً دون نقاش.',
          isCorrect: false,
          explanation: 'الحوكمة تنظم حتى قرارات الراعي.',
        },
        {
          text: 'اختيار الأسهل.',
          isCorrect: false,
          explanation: 'السهولة ليست معياراً.',
        },
        {
          text: 'إيقاف العمل.',
          isCorrect: false,
          explanation: 'الإيقاف ليس الحل الأول.',
        },
      ],
    },
    {
      scenario:
        'مدير مشروع يوازن بين مكسب قصير المدى وزيادة مخاطرة طويلة المدى.',
      question: 'ما القرار المهني؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تقييم الأثر الكلي مواءمته مع أهداف الأعمال.',
          isCorrect: true,
          explanation:
            'القرار المتكامل يوازن القيمة والمخاطر على المدى الطويل.',
        },
        {
          text: 'اختيار المكسب الفوري دائماً.',
          isCorrect: false,
          explanation: 'قد يخلق خسارة أكبر لاحقاً.',
        },
        {
          text: 'تجنب كل مخاطرة.',
          isCorrect: false,
          explanation: 'بعض المخاطر مقبولة ضمن إطار الحوكمة.',
        },
        {
          text: 'تأجيل القرار نهائياً.',
          isCorrect: false,
          explanation: 'التأجيل لا يحل التعارض.',
        },
      ],
    },
  ],
};

export default quizPmp55;
