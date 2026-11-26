import type { QuizBank } from '../types';

export const quizPmp105: QuizBank = {
  id: 'quiz-pmp-10-5',
  questions: [
    {
      scenario: 'فريق يناقش السرعة (Velocity) كأداة تخطيط.',
      question: 'ما الاستخدام الصحيح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'متوسط العمل المنجز في السبرنتات السابقة للتخطيط المستقبلي.',
          isCorrect: true,
          explanation: 'السرعة أداة تقدير داخلية للفريق.',
        },
        {
          text: 'مقارنة أداء الفرق المختلفة.',
          isCorrect: false,
          explanation: 'السرعة ليست أداة مقارنة بين الفرق.',
        },
        {
          text: ' مؤشر مالي خارجي.',
          isCorrect: false,
          explanation: 'السرعة ليست مقياساً مالياً.',
        },
        {
          text: 'ضمان جودة المنتج.',
          isCorrect: false,
          explanation: 'الجودة تقاس بمعايير أخرى.',
        },
      ],
    },
    {
      scenario: 'رسم burndown يظهر خطاً مستوياً رغم مرور نصف السبرنت.',
      question: 'ماذا يعني؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'لا يتم إنجاز العمل بالوتيرة المتوقعة.',
          isCorrect: true,
          explanation: 'الخط المستوي يعني بطء في استهلاك العمل المتبقي.',
        },
        {
          text: 'المشروع مكتمل.',
          isCorrect: false,
          explanation: 'الانحدار إلى الصفر هو الاكتمال.',
        },
        {
          text: 'الجودة ممتازة.',
          isCorrect: false,
          explanation: 'الرسم لا يقيس الجودة.',
        },
        {
          text: 'لا حاجة للإجراء.',
          isCorrect: false,
          explanation: 'الوتيرة تستدعي المراجعة.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد مقياساً يكشف طول انتقال الفكرة إلى التسليم.',
      question: 'أي مقياس؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'Lead time.',
          isCorrect: true,
          explanation: 'يقيس الزمن من الطلب حتى التسليم.',
        },
        {
          text: 'Velocity.',
          isCorrect: false,
          explanation: 'يقيس حجم العمل لكل سبرنت.',
        },
        {
          text: 'SPI.',
          isCorrect: false,
          explanation: 'يقيس أداء الجدول التنبؤي.',
        },
        {
          text: 'RACI.',
          isCorrect: false,
          explanation:
            'RACI يحدد الأدوار لا الزمن؛ قياس طول انتقال الفكرة إلى التسليم يتم بـ Lead time.',
        },
      ],
    },
    {
      scenario: 'الفريق يستخدم متوسط زمن الدورة لتقليل التأخير.',
      question: 'ما الفائدة؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'كشف الاختناقات وتحسين تدفق العمل تدريجياً.',
          isCorrect: true,
          explanation: 'القياس يوجه التحسين بدل التخمين.',
        },
        {
          text: 'زيادة عدد الاجتماعات.',
          isCorrect: false,
          explanation: 'القياس لا يعني الاجتماعات.',
        },
        {
          text: 'إلغاء الجودة.',
          isCorrect: false,
          explanation: 'تقليل الزمن لا يكون على حساب الجودة.',
        },
        {
          text: 'تجاهل التبعيات.',
          isCorrect: false,
          explanation: 'التبعيات جزء من التحليل.',
        },
      ],
    },
  ],
};

export default quizPmp105;
