import type { QuizBank } from '../types';

export const quizPmp101: QuizBank = {
  id: 'quiz-pmp-10-1',
  questions: [
    {
      scenario: 'متطلبات مشروع تتغير باستمرار والعميل يريد ملاحظات كل أسبوعين.',
      question: 'أي مبدأ رشيق (Agile principle) ينطبق؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التكيف مع التغيير والتسليم المتكرر.',
          isCorrect: true,
          explanation: 'الرشيق يفضل الاستجابة للتغيير على اتباع خطة جامدة.',
        },
        {
          text: 'الالتزام الصارم بالخطة الأصلية.',
          isCorrect: false,
          explanation: 'هذا نهج تنبؤي.',
        },
        {
          text: 'تأجيل الملاحظات للإغلاق.',
          isCorrect: false,
          explanation: 'التغذية الراجعة المبكرة جوهر الرشيق.',
        },
        {
          text: 'إلغاء مراجعة المتطلبات.',
          isCorrect: false,
          explanation: 'المراجعة جزء من التكيف.',
        },
      ],
    },
    {
      scenario: 'الفريق يقرر بنفسه كيفية توزيع المهام داخل السبرنت.',
      question: 'ما المقصود بالفريق المنظم ذاتياً (Self-organizing)؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'الفريق يملك قرار كيفية التنفيذ ضمن الحدود المتفق عليها.',
          isCorrect: true,
          explanation: 'الاستقلالية تزيد الملكية والمسؤولية.',
        },
        {
          text: 'غياب أي أدوار.',
          isCorrect: false,
          explanation: 'الأدوار موجودة لكنها لا تُفرض تفصيلياً.',
        },
        {
          text: 'قرار مدير المشروع في كل خطوة.',
          isCorrect: false,
          explanation: 'هذا إدارة دقيقة لا رشيق.',
        },
        {
          text: 'إلغاء التخطيط.',
          isCorrect: false,
          explanation: 'التخطيط موجود على مستوى السبرنت.',
        },
      ],
    },
    {
      scenario: 'عميل مشارك مع الفريق طوال المشروع وليس فقط عند الاستلام.',
      question: 'أي قيمة رشيقية يطبّق؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تعاون العميل طوال المشروع (Customer collaboration).',
          isCorrect: true,
          explanation: 'التعاون المستمر يقلل سوء الفهم ويزيد القيمة.',
        },
        {
          text: 'التفاوض العقاري فقط.',
          isCorrect: false,
          explanation: 'التفاوض لا يغني عن التعاون.',
        },
        {
          text: 'تسليم متأخر شامل.',
          isCorrect: false,
          explanation: 'التسليم المتأخر يفقد التغذية الراجعة.',
        },
        {
          text: 'توثيق رسمي مفرط.',
          isCorrect: false,
          explanation: 'الرشيق يفضل التفاعل المفيد.',
        },
      ],
    },
    {
      scenario: 'فريق رشيق يسأل عن أفضل طريقة لتحسين العمل كل أسبوعين.',
      question: 'أي ممارسة تناسب ذلك؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'مراجعة بأثر رجعي (Retrospective) وتحسينات صغيرة.',
          isCorrect: true,
          explanation: 'المراجعة الدورية تصنع تحسيناً مستمراً.',
        },
        {
          text: 'زيادة عدد الاجتماعات فقط.',
          isCorrect: false,
          explanation: 'العدد لا يصنع تحسيناً.',
        },
        {
          text: 'تغيير أعضاء الفريق كل أسبوع.',
          isCorrect: false,
          explanation: 'الاستقرار مهم للتعلم.',
        },
        {
          text: 'إلغاء المراجعة.',
          isCorrect: false,
          explanation: 'المراجعة جوهر التحسين.',
        },
      ],
    },
  ],
};

export default quizPmp101;
