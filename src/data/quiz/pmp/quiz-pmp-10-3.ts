import type { QuizBank } from '../types';

export const quizPmp103: QuizBank = {
  id: 'quiz-pmp-10-3',
  questions: [
    {
      scenario: 'لوحة عمل تحتوي على عدد كبير من المهام قيد التنفيذ.',
      question: 'أي مبدأ Kanban يتم خرقه؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحديد العمل قيد التنفيذ (WIP limit).',
          isCorrect: true,
          explanation: 'تحديد WIP يمنع التراكم ويحسن التدفق.',
        },
        {
          text: 'السحب (Pull).',
          isCorrect: false,
          explanation: 'السحب يتعلق ببدء العمل عند توفر سعة.',
        },
        {
          text: 'الشفافية.',
          isCorrect: false,
          explanation: 'اللوحة شفافة، لكن المشكلة في الحدود.',
        },
        {
          text: 'التكرار الزمني.',
          isCorrect: false,
          explanation: 'ليس مرتبطاً بعدد المهام.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد معرفة الوقت من طلب الميزة حتى تسليمها.',
      question: 'أي مقياس مناسب؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'زمن الدورة (Cycle time) أو زمن الانتقال (Lead time).',
          isCorrect: true,
          explanation:
            'يزمن الانتقال من الطلب إلى التسليم، ودورة التنفيذ جزء منه.',
        },
        {
          text: 'السرعة (Velocity).',
          isCorrect: false,
          explanation: 'السرعة تقيس العمل لكل سبرنت.',
        },
        {
          text: 'CPI.',
          isCorrect: false,
          explanation:
            'CPI يقيس كفاءة التكلفة في نهج تنبؤي، لا زمن الانتقال؛ المطلوب Lead time أو Cycle time.',
        },
        {
          text: 'RACI.',
          isCorrect: false,
          explanation:
            'RACI يحدد من يفعل ماذا تجاه الميزة، لكنه لا يقيس الزمن من الطلب حتى التسليم؛ استخدم Lead time.',
        },
      ],
    },
    {
      scenario: 'تراكم المهام أمام محطة اختبار بينما التطوير يعمل بكامل طاقته.',
      question: 'ما القرار؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'معالجة عنق الزجاجة وتعديل WIP قبل إضافة عمل جديد.',
          isCorrect: true,
          explanation: 'تحسين التدفق يسبق زيادة الإنتاج.',
        },
        {
          text: 'إضافة مهام أكثر للتطوير.',
          isCorrect: false,
          explanation:
            'إضافة مهام للتطوير تزيد التراكم أمام الاختبار وتطيل زمن الانتقال؛ معالجة العنق وتعديل WIP أولاً.',
        },
        {
          text: 'تجاهل العنق.',
          isCorrect: false,
          explanation:
            'تجاهل العنق يؤخر التسليم مهما زاد الإنتاج؛ تحسين التدفق عند محطة الاختبار هو القرار الأسرع.',
        },
        {
          text: 'إنهاء المشروع.',
          isCorrect: false,
          explanation:
            'إنهاء المشروع مبالغة في رد فعل على تراكم مؤقت؛ العنق يُعالج بتعديل WIP وتوازن التدفق.',
        },
      ],
    },
    {
      scenario: 'فريق يبدأ مهمة جديدة فقط عندما تتحرر مساحة في اللوحة.',
      question: 'ما النظام؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'نظام السحب (Pull system).',
          isCorrect: true,
          explanation: 'العمل يُسحب عند توفر السعة، لا يُدفع بالقوة.',
        },
        {
          text: 'نظام الدفع (Push).',
          isCorrect: false,
          explanation: 'الدفع يفرض العمل بغض النظر عن السعة.',
        },
        {
          text: 'التنبؤي الصارم.',
          isCorrect: false,
          explanation: 'ليس مرتبطاً باللوحة.',
        },
        {
          text: 'الإدارة الدقيقة.',
          isCorrect: false,
          explanation: 'السحب يمنح الفريق تحكماً.',
        },
      ],
    },
  ],
};

export default quizPmp103;
