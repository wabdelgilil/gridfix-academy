import type { QuizBank } from '../types';

export const quizPmp22: QuizBank = {
  id: 'quiz-pmp-2-2',
  questions: [
    {
      scenario: 'فريق جديد بدأ بالعمل بتردد واعتماد كبير على مدير المشروع.',
      question: 'أي مرحلة من مراحل تطور الفريق (Tuckman) يمر بها؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'التشكيل (Forming).',
          isCorrect: true,
          explanation: 'في التشكيل يعتمد الأعضاء على التوجيه ويختبرون الأدوار.',
        },
        {
          text: 'الأداء (Performing).',
          isCorrect: false,
          explanation: 'الأداء مرحلة لاحقة يتميز بالاستقلالية.',
        },
        {
          text: 'الإغلاق (Adjourning).',
          isCorrect: false,
          explanation: 'الإغلاق تحدث عند انتهاء المشروع.',
        },
        {
          text: 'الصراع (Storming).',
          isCorrect: false,
          explanation: 'الصراع يتميز بظهور الخلافات لا مجرد التردد.',
        },
      ],
    },
    {
      scenario: 'يحتاج الفريق إلى توضيح من يقوم بكل نشاط ومن يُبلَّغ فقط.',
      question: 'أي أداة تناسب ذلك؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مصفوفة RACI.',
          isCorrect: true,
          explanation:
            'تحدد المسؤول (R) والمساءل (A) والمستشار (C) والمُبلَّغ (I).',
        },
        {
          text: 'مصفوفة مخاطر.',
          isCorrect: false,
          explanation: 'المصفوفة تقيس الاحتمال والأثر، لا الأدوار.',
        },
        {
          text: 'سجل تغييرات.',
          isCorrect: false,
          explanation: 'السجل يوثق طلبات التغيير.',
        },
        {
          text: 'قائمة تحقق جودة.',
          isCorrect: false,
          explanation: 'تستخدم لفحص مخرجات الجودة.',
        },
      ],
    },
    {
      scenario: 'أداء أحد الأعضاء انخفض بعد تغيير دوره دون نقاش.',
      question: 'ما أول إجراء؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مناقشة الأسباب وتوضيح التوقعات باحترام.',
          isCorrect: true,
          explanation: 'فهم السبب يسبق أي إجراء تصحيحي.',
        },
        {
          text: ' نقله فوراً من الفريق.',
          isCorrect: false,
          explanation: 'الإبعاد قبل الفهم لا يحل المشكلة.',
        },
        {
          text: 'تجاهل الأمر حتى نهاية المشروع.',
          isCorrect: false,
          explanation: 'التجاهل يفاقم الأثر على الفريق.',
        },
        {
          text: 'إرسال إنذار رسمي دون حوار.',
          isCorrect: false,
          explanation: 'الإنذار دون نقاش لا يعالج السبب.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد رفع دافعية فريق يعمل عن بُعد.',
      question: 'أي أسلوب يعتمد على نظرية التحفيز؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'ربط العمل بالمعنى والاعتراف والاستقلالية.',
          isCorrect: true,
          explanation: 'الدافعية الداخلية تنمو عندما يرى الفريق الأثر ويُقدَّر.',
        },
        {
          text: 'زيادة عدد التقارير اليومية فقط.',
          isCorrect: false,
          explanation: 'الإبلاغ المفرط قد يقلل الثقة.',
        },
        {
          text: 'تجاهل ردود الفعل.',
          isCorrect: false,
          explanation: 'التجاهل يقتل الدافعية.',
        },
        {
          text: 'فرض ساعات عمل إضافية.',
          isCorrect: false,
          explanation: 'الإجهاد لا يبني التزاماً مستداماً.',
        },
      ],
    },
  ],
};

export default quizPmp22;
