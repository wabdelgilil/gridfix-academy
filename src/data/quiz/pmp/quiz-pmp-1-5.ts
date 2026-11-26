import type { QuizBank } from '../types';

export const quizPmp15: QuizBank = {
  id: 'quiz-pmp-1-5',
  questions: [
    {
      scenario: 'ظهر قرار يتجاوز صلاحية مدير المشروع وله أثر مالي كبير.',
      question: 'ما المسار الصحيح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'اتباع مسار التصعيد (Escalation) المعروف في خطة الحوكمة.',
          isCorrect: true,
          explanation: 'الحوكمة تحدد من يملك القرار وكيف يُرفع إليه.',
        },
        {
          text: 'تنفيذ القرار ثم إبلاغ لاحقاً.',
          isCorrect: false,
          explanation: 'التنفيذ قبل الاعتماد يخالف الحوكمة.',
        },
        {
          text: 'سؤال المورد الخارجي.',
          isCorrect: false,
          explanation: 'المورد لا يملك سلطة قرار الأعمال.',
        },
        {
          text: 'تجاهل القرار.',
          isCorrect: false,
          explanation: 'التجاهل يترك المخاطرة دون معالجة.',
        },
      ],
    },
    {
      scenario: 'لجنة توجيهية (Steering Committee) تجتمع لمراجعة تقدم المشروع.',
      question: 'ما دورها الأساسي؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تقديم الإشراف واتخاذ قرارات مستوى الأعمال.',
          isCorrect: true,
          explanation: 'اللجنة توائم المشروع مع الأهداف الأوسع.',
        },
        {
          text: 'كتابة كل حزم العمل.',
          isCorrect: false,
          explanation: 'هذا دور الفريق وتخطيط المشروع.',
        },
        {
          text: 'تنفيذ اختبارات الجودة.',
          isCorrect: false,
          explanation: 'هذا دور ضمان/مراقبة الجودة.',
        },
        {
          text: 'توقيع العقود مع الموردين دائماً.',
          isCorrect: false,
          explanation: 'قد تشارك، لكن دورها أوسع من التوقيع.',
        },
      ],
    },
    {
      scenario: 'دور الراعي ومدير المشروع يتداخلان في ذهن الفريق.',
      question: 'أي فريق صحيح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الراعي يملك الأعمال والقرار، ومدير المشروع يقود التنفيذ.',
          isCorrect: true,
          explanation: 'الفصل الواضح يمنع الالتباس في المسؤولية.',
        },
        {
          text: 'كلاهما يؤدي نفس الأدوار.',
          isCorrect: false,
          explanation: 'الأدوار متمايزة رغم التكامل.',
        },
        {
          text: 'مدير المشروع يملك قرار الاستراتيجية.',
          isCorrect: false,
          explanation: 'الاستراتيجية للراعي والحوكمة.',
        },
        {
          text: 'الراعي يدير الجداول اليومية.',
          isCorrect: false,
          explanation: 'الجدول اليومي مسؤولية مدير المشروع والفريق.',
        },
      ],
    },
    {
      scenario: 'المشروع يعمل في مؤسسة ذات مستويات موافقة متعددة.',
      question: 'ما أثر ذلك على التخطيط؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'يجب تضمين زمن الموافقات وأصحاب القرار في الخطة.',
          isCorrect: true,
          explanation: 'تجاهل زمن الحوكمة يخلق تأخيراً غير متوقع.',
        },
        {
          text: 'لا أثر له على الإطلاق.',
          isCorrect: false,
          explanation: 'له أثر مباشر على الجدول والمخاطر.',
        },
        {
          text: 'يُلغي الحاجة إلى سجل أصحاب المصلحة.',
          isCorrect: false,
          explanation: 'بل يزيد أهمية السجل.',
        },
        {
          text: 'يعني أن المشروع سيفشل حتماً.',
          isCorrect: false,
          explanation: 'يعني فقط الحاجة لتخطيط أفضل.',
        },
      ],
    },
  ],
};

export default quizPmp15;
