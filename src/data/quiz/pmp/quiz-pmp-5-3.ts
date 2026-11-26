import type { QuizBank } from '../types';

export const quizPmp53: QuizBank = {
  id: 'quiz-pmp-5-3',
  questions: [
    {
      scenario: 'الفريق يجري مراجعة مبكرة للنماذج لمنع العيوب.',
      question: 'أي نوع تكلفة جودة (CoQ) هذا؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تكلفة الوقاية (Prevention cost).',
          isCorrect: true,
          explanation: 'الوقاية تمنع العيوب قبل حدوثها.',
        },
        {
          text: 'تكلفة التقييم (Appraisal cost).',
          isCorrect: false,
          explanation: 'التقييم يفحص ما أُنتج.',
        },
        {
          text: 'فشل داخلي.',
          isCorrect: false,
          explanation: 'الفشل الداخلي يحدث قبل تسليم العميل.',
        },
        {
          text: 'فشل خارجي.',
          isCorrect: false,
          explanation: 'الفشل الخارجي يحدث بعد التسليم.',
        },
      ],
    },
    {
      scenario: 'عميل اكتشف عيباً بعد التسليم وتكلفة الإصلاح والشكوى مرتفعة.',
      question: 'أي تكلفة جودة؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'فشل خارجي (External failure).',
          isCorrect: true,
          explanation: 'العيب اكتشفه العميل بعد التسليم.',
        },
        {
          text: 'وقاية.',
          isCorrect: false,
          explanation: 'الوقاية تسبق الإنتاج.',
        },
        {
          text: 'تقييم.',
          isCorrect: false,
          explanation: 'التقييم داخلي قبل التسليم.',
        },
        {
          text: 'فشل داخلي.',
          isCorrect: false,
          explanation: 'الفشل الداخلي يُكتشف داخل المؤسسة.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يوازن بين تكلفة الوقاية وتكلفة الفشل.',
      question: 'ما الهدف؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تقليل التكلفة الإجمالية للجودة.',
          isCorrect: true,
          explanation: 'الاستثمار في الوقاية غالباً أرخص من إصلاح الفشل.',
        },
        {
          text: 'إلغاء جميع الفحوص.',
          isCorrect: false,
          explanation: 'إلغاء الفحوص يزيد الفشل.',
        },
        {
          text: 'زيادة الفحوص بلا حدود.',
          isCorrect: false,
          explanation: 'الفحص المفرط قد يكون أغلى من العيب.',
        },
        {
          text: 'تحميل العميل التكلفة.',
          isCorrect: false,
          explanation: 'تحميل التكلفة لا يحسن الجودة.',
        },
      ],
    },
    {
      scenario: 'قرار بزيادة تدريب الفريق على المعايير قبل التنفيذ.',
      question: 'أي فائدة متوقعة؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تقليل العيوب وإعادة العمل.',
          isCorrect: true,
          explanation: 'التدريب الوقائي يرفع جودة الأداء من البداية.',
        },
        {
          text: 'زيادة عدد الاجتماعات.',
          isCorrect: false,
          explanation: 'التدريب ليس اجتماعاً روتينياً.',
        },
        {
          text: 'إلغاء خط الأساس.',
          isCorrect: false,
          explanation: 'لا علاقة لذلك بخط الأساس.',
        },
        {
          text: 'تأخير المشروع بالتأكيد.',
          isCorrect: false,
          explanation: 'قد يوفر وقتاً بتجنب إعادة العمل.',
        },
      ],
    },
  ],
};

export default quizPmp53;
