import type { QuizBank } from '../types';

export const quizPmp52: QuizBank = {
  id: 'quiz-pmp-5-2',
  questions: [
    {
      scenario: 'مدير مشروع يقرر بين تطوير مكون داخلياً أو شراؤه.',
      question: 'ما أهم معايير القرار؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الكفاءة الأساسية والتكلفة والوقت والمخاطر.',
          isCorrect: true,
          explanation: 'قرار اصنع أم اشترِ (Make or buy) يوازن عدة عوامل.',
        },
        {
          text: 'رأي أعلى رتبة فقط.',
          isCorrect: false,
          explanation: 'الرتبة لا تغني عن التحليل.',
        },
        {
          text: 'السعر الأقل دائماً.',
          isCorrect: false,
          explanation: 'السعر وحده قد يخفي مخاطر الجودة.',
        },
        {
          text: 'العادة السابقة.',
          isCorrect: false,
          explanation: 'العادة لا تناسب كل مشروع.',
        },
      ],
    },
    {
      scenario:
        'عقد يتطلب من المورد تحمل مخاطر تجاوز التكلفة ضمن سعر متفق عليه.',
      question: 'أي نوع عقد؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'سعر ثابت (Fixed price).',
          isCorrect: true,
          explanation: 'المورد يتحمل مخاطر التكلفة في العقد الثابت.',
        },
        {
          text: 'الزمن والمواد (Time and materials).',
          isCorrect: false,
          explanation: 'هذا ينقل جزءاً من مخاطر التكلفة للعميل.',
        },
        {
          text: 'التكلفة المضافة (Cost plus).',
          isCorrect: false,
          explanation: 'العميل يتحمل التكلفة في هذا النوع.',
        },
        {
          text: 'عقد الخدمات الداخلي.',
          isCorrect: false,
          explanation: 'ليس نوعاً تعاقدياً خارجياً هنا.',
        },
      ],
    },
    {
      scenario: 'مورد متأخر في التسليم ويؤثر على المسار الحرج.',
      question: 'ما أول إجراء؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مراجعة العقد والتواصل مع المورد وتحليل الأثر.',
          isCorrect: true,
          explanation:
            'العقد يحدد الحقوق والالتزامات، والتحليل يحدد الاستجابة.',
        },
        {
          text: 'تغيير المورد فوراً.',
          isCorrect: false,
          explanation: 'الاستبدال قرار متأخر يحتاج تقييماً.',
        },
        {
          text: 'تجاهل التأخير.',
          isCorrect: false,
          explanation: 'التأخير سيؤثر على المشروع.',
        },
        {
          text: 'دفع مبلغ إضافي دون سبب.',
          isCorrect: false,
          explanation: 'الدفع دون مبرر يخالف العقد.',
        },
      ],
    },
    {
      scenario: 'معايير اختيار المورد تشمل السعر والخبرة والجودة والقدرة.',
      question: 'ما أفضل أداة لترتيبها؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'مصفوفة تقييم مرجحة (Weighted scoring).',
          isCorrect: true,
          explanation: 'توزن المعايير حسب أهميتها لتقليل التحيز.',
        },
        {
          text: 'الاختيار عشوائياً.',
          isCorrect: false,
          explanation: 'العشوائية لا تخدم الشفافية.',
        },
        {
          text: 'أقل عرض فقط.',
          isCorrect: false,
          explanation: 'أقل عرض قد لا يلبي الجودة.',
        },
        {
          text: 'القرار بالقرعة.',
          isCorrect: false,
          explanation: 'القرعة لا توثق المعايير.',
        },
      ],
    },
  ],
};

export default quizPmp52;
