import type { QuizBank } from '../types';

export const quizPmp32: QuizBank = {
  id: 'quiz-pmp-3-2',
  questions: [
    {
      scenario: 'بيان النطاق لا يذكر صراحةً ما الذي يستبعده المشروع.',
      question: 'ما المشكلة المتوقعة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'زيادة احتمال زحف النطاق (Scope creep).',
          isCorrect: true,
          explanation: 'بدون استبعادات واضحة يفترض الجميع إدراج أشياء مختلفة.',
        },
        {
          text: 'تحسن دقة التكلفة.',
          isCorrect: false,
          explanation: 'الغموض يزيد عدم دقة التكلفة.',
        },
        {
          text: 'تقليل عدد المخاطر.',
          isCorrect: false,
          explanation: 'الغموض يزيد المخاطر.',
        },
        {
          text: 'تسريع الاعتماد.',
          isCorrect: false,
          explanation: 'الاعتماد على نطاق غامض لا يسرّع شيئاً.',
        },
      ],
    },
    {
      scenario: 'بعد اعتماد النطاق طلب صاحب مصلحة إضافة ميزة.',
      question: 'ما الإجراء الصحيح؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تسجيل الطلب وتحليل أثره قبل اعتماده.',
          isCorrect: true,
          explanation: 'التحكم بالتغيير يحمي خط الأساس.',
        },
        {
          text: 'تنفيذه فوراً لأنه مفيد.',
          isCorrect: false,
          explanation: 'القيمة لا تبرر تجاوز العملية.',
        },
        {
          text: 'الرفض دون نقاش.',
          isCorrect: false,
          explanation:
            'الرفض دون نقاش يتجاهل قيمة محتملة للميزة؛ المطلوب تسجيل الطلب وتحليل أثره قبل اعتماده أو رفضه.',
        },
        {
          text: 'تأجيله إلى الإغلاق دون تسجيل.',
          isCorrect: false,
          explanation:
            'تأجيل الطلب إلى الإغلاق بلا تسجيل يفقده ويفقد أثره؛ سجّله الآن وحلّل تأثيره على النطاق.',
        },
      ],
    },
    {
      scenario:
        'يحتاج الفريق إلى معرفة معايير القبول (Acceptance criteria) قبل البناء.',
      question: 'أين تُوثَّق عادةً؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'في بيان النطاق ووثائق المتطلبات.',
          isCorrect: true,
          explanation: 'معايير القبول جزء من تعريف النطاق.',
        },
        {
          text: 'في جدول الرواتب.',
          isCorrect: false,
          explanation: 'الرواتب غير مرتبطة بمعايير القبول.',
        },
        {
          text: 'في عقد التأمين فقط.',
          isCorrect: false,
          explanation: 'العقد قد يشير إليها لكنها ليست حصراً فيه.',
        },
        {
          text: 'في جدول الحضور.',
          isCorrect: false,
          explanation: 'الحضور لا يحدد القبول.',
        },
      ],
    },
    {
      scenario: 'ظهر تضارب بين متطلبين معتمدين في مرحلة التخطيط.',
      question: 'ما أفضل معالجة؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحليل أثر التضارب ومواءمة أصحاب المصلحة قبل اعتماد النطاق.',
          isCorrect: true,
          explanation: 'حل التضارب مبكراً أرخص من تعديله بعد التنفيذ.',
        },
        {
          text: 'اختيار أحدهما بالقرعة.',
          isCorrect: false,
          explanation: 'القرار يحتاج مبرراً وتوافقاً.',
        },
        {
          text: 'تضمينهما معاً دون حل.',
          isCorrect: false,
          explanation: 'التضارب سيظهر أثناء التنفيذ.',
        },
        {
          text: 'حذفهما معاً.',
          isCorrect: false,
          explanation: 'الحذف يفقد متطلبات حقيقية.',
        },
      ],
    },
  ],
};

export default quizPmp32;
