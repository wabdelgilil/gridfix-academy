import type { QuizBank } from '../types';

export const quizPmp54: QuizBank = {
  id: 'quiz-pmp-5-4',
  questions: [
    {
      scenario: 'مراجعة تلتزم فيها الفريق باتباع عملية موثقة وتحسينها.',
      question: 'ما المقصود بضمان الجودة (QA)؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'فحص العمليات لزيادة الثقة في تحقيق الجودة.',
          isCorrect: true,
          explanation: 'QA يركز على العملية، لا على منتج واحد.',
        },
        {
          text: 'فحص المنتج النهائي فقط.',
          isCorrect: false,
          explanation: 'هذا مراقبة الجودة QC.',
        },
        {
          text: 'إرسال عيب للعميل.',
          isCorrect: false,
          explanation: 'ليس ضماناً.',
        },
        {
          text: 'تغيير معايير الجودة.',
          isCorrect: false,
          explanation: 'QA لا يغير المعايير عشوائياً.',
        },
      ],
    },
    {
      scenario: 'فحص مخرج قبل تسليمه للتأكد من مطابقته للمعايير.',
      question: 'ما المقصود بمراقبة الجودة (QC)؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'فحص المخرجات والتحقق من الخلو من العيوب.',
          isCorrect: true,
          explanation: 'QC يركز على المنتج نفسه.',
        },
        {
          text: 'تحسين العملية.',
          isCorrect: false,
          explanation: 'تحسين العملية دور QA.',
        },
        {
          text: 'توقيع العقد.',
          isCorrect: false,
          explanation: 'التوقيع جزء من المشتريات.',
        },
        {
          text: 'تقدير التكلفة.',
          isCorrect: false,
          explanation: 'التقدير جزء من التخطيط.',
        },
      ],
    },
    {
      scenario: 'ظهر عيب متكرر رغم فحص المنتجات.',
      question: 'ما الإجراء الجذري؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحليل السبب الجذري وتحسين العملية.',
          isCorrect: true,
          explanation: 'تكرار العيب يشير إلى خلل في العملية لا في فحص فقط.',
        },
        {
          text: 'زيادة عدد الفاحصين فقط.',
          isCorrect: false,
          explanation: 'الفحص الإضافي لا يزيل السبب.',
        },
        {
          text: 'تجاهل العيب.',
          isCorrect: false,
          explanation: 'التجاهل يفاقم المشكلة.',
        },
        {
          text: 'تغيير العميل.',
          isCorrect: false,
          explanation: 'العميل ليس مصدر العيب بالضرورة.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد توثيق معايير الجودة وكيفية قياسها.',
      question: 'أين يفعل ذلك؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'في خطة إدارة الجودة.',
          isCorrect: true,
          explanation: 'الخطة تحدد المعايير والأدوات والمسؤوليات.',
        },
        {
          text: 'في جدول الحضور.',
          isCorrect: false,
          explanation: 'الحضور لا يحدد الجودة.',
        },
        {
          text: 'في سجل المخاطر فقط.',
          isCorrect: false,
          explanation: 'السجل يوثق المخاطر لا معايير الجودة.',
        },
        {
          text: 'في ميثاق المشروع فقط.',
          isCorrect: false,
          explanation: 'الميثاق أسبق وأعم.',
        },
      ],
    },
  ],
};

export default quizPmp54;
