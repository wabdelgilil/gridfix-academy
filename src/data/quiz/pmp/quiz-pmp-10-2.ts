import type { QuizBank } from '../types';

export const quizPmp102: QuizBank = {
  id: 'quiz-pmp-10-2',
  questions: [
    {
      scenario: 'فريق يسأل عن الشخص المسؤول عن ترتيب قائمة العمل.',
      question: 'من يقوم بذلك في Scrum؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'مالك المنتج (Product Owner).',
          isCorrect: true,
          explanation: 'يملك قيمة النظام ويولي مهام سجل المنتج.',
        },
        {
          text: 'مدير المشروع التقليدي.',
          isCorrect: false,
          explanation: 'الدور مختلف في Scrum.',
        },
        {
          text: 'المورد الخارجي.',
          isCorrect: false,
          explanation: 'المورد ليس مسؤولاً عن قيمة المنتج.',
        },
        {
          text: 'أي عضو يصل أولاً.',
          isCorrect: false,
          explanation: 'الأسبقية لا تحدد الأولوية.',
        },
      ],
    },
    {
      scenario: 'الفريق يواجه عائقاً متكرراً من إدارة أخرى.',
      question: 'من يساعد في إزالته في Scrum؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'ماستر السبرنت (Scrum Master).',
          isCorrect: true,
          explanation: 'يزيل العوائق ويساعد الفريق على تطبيق Scrum.',
        },
        {
          text: 'مالك المنتج وحده.',
          isCorrect: false,
          explanation: 'مالك المنتج يركز على القيمة.',
        },
        {
          text: 'العميل مباشرة.',
          isCorrect: false,
          explanation: 'العميل شريك، لكن إزالة العوائق دور Scrum Master.',
        },
        {
          text: 'المحاسب.',
          isCorrect: false,
          explanation:
            'المحاسب ليس دوراً في إزالة عوائق Scrum؛ ماستر السبرنت هو من يساعد الفريق على إزالة العائق المتكرر.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يسأل عن مدة السبرنت (Sprint).',
      question: 'ما الوصف الصحيح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'فترة زمنية ثابتة قصيرة تُنتج فيها قيمة قابلة للاستخدام.',
          isCorrect: true,
          explanation: 'السبرنت إطار زمني منتظم لا يتغير أثناء التنفيذ.',
        },
        {
          text: 'فترة مفتوحة تنتهي عند رغبة العميل.',
          isCorrect: false,
          explanation: 'المدة ثابتة ومحددة مسبقاً.',
        },
        {
          text: 'اجتماع يومي.',
          isCorrect: false,
          explanation: 'الاجتماع اليومي حدث داخل السبرنت.',
        },
        {
          text: 'مرحلة إغلاق المشروع.',
          isCorrect: false,
          explanation: 'السبرنت يتكرر طوال المشروع.',
        },
      ],
    },
    {
      scenario:
        'فريق أنجز العمل لكن مراجعة السبرنت أظهرت أن جزءاً منه لم يكن مقبولاً.',
      question: 'ما الإجراء؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'فهم سبب عدم القبول وتعديل تعريف الإنجاز والعمل التالي.',
          isCorrect: true,
          explanation: 'القيمة تُقاس بالقبول لا بإتمام المهام.',
        },
        {
          text: 'بدء سبرنت جديد دون نقاش.',
          isCorrect: false,
          explanation: 'تكرار الخطأ دون مراجعة لا يفيد.',
        },
        {
          text: 'إلغاء مراجعة السبرنت.',
          isCorrect: false,
          explanation: 'المراجعة تكشف الفجوة.',
        },
        {
          text: 'زيادة عدد المهام.',
          isCorrect: false,
          explanation: 'العدد لا يعالج الجودة.',
        },
      ],
    },
  ],
};

export default quizPmp102;
