import type { QuizBank } from '../types';

export const quizPmp96: QuizBank = {
  id: 'quiz-pmp-9-6',
  questions: [
    {
      scenario:
        'فريق يستخدم نموذج ذكاء اصطناعي لتوليد تقديرات دون مراجعة بيانات التدريب.',
      question: 'ما الخطر الأساسي؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'جودة البيانات والتحيز قد ينتجان قرارات مضللة.',
          isCorrect: true,
          explanation: 'الذكاء الاصطناعي يحتاج حوكمة ومراجعة بشرية.',
        },
        {
          text: 'الذكاء الاصطناعي دقيق دائماً.',
          isCorrect: false,
          explanation: 'الأداء يعتمد على البيانات والسياق.',
        },
        {
          text: 'لا حاجة للتوثيق.',
          isCorrect: false,
          explanation: 'التوثيق مهم للمساءلة.',
        },
        {
          text: 'يجب إلغاء التقديرات تماماً.',
          isCorrect: false,
          explanation: 'الحل هو الحوكمة لا الإلغاء.',
        },
      ],
    },
    {
      scenario: 'قرار آلي يؤثر على أصحاب مصلحة دون تفسير.',
      question: 'ما المبدأ المهني؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'الشفافية وقابلية التفسير والمراجعة البشرية.',
          isCorrect: true,
          explanation: 'القرارات المؤثرة تحتاج تبريراً ومساءلة.',
        },
        {
          text: 'قبول القرار دون سؤال.',
          isCorrect: false,
          explanation: 'القبول الأعمى يخالف المسؤولية.',
        },
        {
          text: 'إخفاء طريقة العمل.',
          isCorrect: false,
          explanation: 'الإخفاء يضر بالثقة.',
        },
        {
          text: 'تحميل المسؤولية للأداة فقط.',
          isCorrect: false,
          explanation: 'الأداة لا تملك المسؤولية.',
        },
      ],
    },
    {
      scenario: 'مشروع يهدف إلى خفض الانبعاثات وقياس الأثر البيئي.',
      question: 'أي إطار يصف ذلك؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الاستدامة (Sustainability) ضمن معايير ESG.',
          isCorrect: true,
          explanation: 'ESG يغطي الأثر البيئي والاجتماعي والحوكمة.',
        },
        {
          text: 'الربح وحده.',
          isCorrect: false,
          explanation: 'الربح لا يقيس الأثر البيئي.',
        },
        {
          text: 'الامتثال فقط.',
          isCorrect: false,
          explanation: 'الامتثال جزء، لكن ESG أوسع.',
        },
        {
          text: 'الجودة الداخلية فقط.',
          isCorrect: false,
          explanation: 'الجودة لا تغطي الأثر البيئي.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد دمج الاستدامة في قرار المصادر.',
      question: 'ما الذي يضيفه؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تقييم الأثر البيئي والاجتماعي مع التكلفة والجودة.',
          isCorrect: true,
          explanation: 'القرار المستدام يوازن القيم الثلاث معاً.',
        },
        {
          text: 'اختيار أقل سعر فقط.',
          isCorrect: false,
          explanation: 'السعر وحده قد يخفي أثراً بيئياً.',
        },
        {
          text: 'إضافة شعار أخضر دون قياس.',
          isCorrect: false,
          explanation: 'الشعار لا يصنع استدامة.',
        },
        {
          text: 'تأجيل الأثر إلى ما بعد الإغلاق.',
          isCorrect: false,
          explanation: 'الأثر يجب أن يُقاس أثناء القرار.',
        },
      ],
    },
  ],
};

export default quizPmp96;
