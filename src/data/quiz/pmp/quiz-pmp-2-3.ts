import type { QuizBank } from '../types';

export const quizPmp23: QuizBank = {
  id: 'quiz-pmp-2-3',
  questions: [
    {
      scenario: 'خلاف بين عضوين حول الحل التقني، وكل منهما يملك حججاً قوية.',
      question: 'أي نمط إدارة صراع (Conflict resolution) يحقق أفضل نتيجة هنا؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التعاون (Collaborating).',
          isCorrect: true,
          explanation: 'التعاون يبحث حلاً يرضي الطرفين ويستفيد من الخبرات.',
        },
        {
          text: 'التجنب (Avoiding).',
          isCorrect: false,
          explanation: 'التجنب يؤجل المشكلة ولا يحلها.',
        },
        {
          text: 'الإخضاع (Smoothing).',
          isCorrect: false,
          explanation: 'الإخضاع يُظهر الخلاف أهمية أقل من حجمه.',
        },
        {
          text: 'المنافسة (Competing).',
          isCorrect: false,
          explanation: 'المنافسة تفرض رأي طرف على آخر.',
        },
      ],
    },
    {
      scenario: 'خلاف بسيط حول ترتيب مهام لا يستحق وقتاً طويلاً.',
      question: 'أي نمط قد يكون كافياً؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'الملاءمة (Compromising) أو الإخضاع حسب الموقف.',
          isCorrect: true,
          explanation: 'ليس كل خلاف يحتاج حلاً تعاونياً عميقاً.',
        },
        {
          text: 'التصعيد فوراً.',
          isCorrect: false,
          explanation: 'التصعيد قبل محاولة الحل لا يبرر.',
        },
        {
          text: 'تجاهل القرار نهائياً.',
          isCorrect: false,
          explanation: 'يجب اتخاذ قرار، حتى لو بسيط.',
        },
        {
          text: 'استبدال الفريق.',
          isCorrect: false,
          explanation: 'الاستبدال مبالغ فيه.',
        },
      ],
    },
    {
      scenario:
        'صراع يتعلق بتفسير عقد مع المورد ولا يدخل في صلاحية مدير المشروع.',
      question: 'ما الإجراء الصحيح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحليل الموقف ثم التصعيد وفق مسار محدد.',
          isCorrect: true,
          explanation: 'التصعيد وارد عندما يتجاوز القرار الصلاحية.',
        },
        {
          text: 'اتخاذ قرارنهائي منفرداً.',
          isCorrect: false,
          explanation: 'تجاوز الصلاحية يخالف الحوكمة.',
        },
        {
          text: 'الاستمرار في العمل دون حل.',
          isCorrect: false,
          explanation: 'الصراع سيؤثر على التسليم.',
        },
        {
          text: 'إلقاء اللوم علناً.',
          isCorrect: false,
          explanation: 'اللوم يزيد حدة الصراع.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يفصل بين الخلاف حول الأفكار والخلاف الشخصي.',
      question: 'لماذا هذا مهم؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'لأن خلاف الأفكار قد يكون مفيداً، بينما الخلاف الشخصي يضر الثقة.',
          isCorrect: true,
          explanation: 'الصراع البناء يحسن القرار، والصراع الشخصي يضر الفريق.',
        },
        {
          text: 'لأن كل خلاف يجب تجنبه.',
          isCorrect: false,
          explanation: 'بعض الخلافات صحية ومفيدة.',
        },
        {
          text: 'لأن الرأي الأعلى دائماً أصح.',
          isCorrect: false,
          explanation: 'الرتبة لا تضمن الصحة.',
        },
        {
          text: 'لأن الصمت هو الحل الأفضل.',
          isCorrect: false,
          explanation: 'الصمت يخفي المشكلة.',
        },
      ],
    },
  ],
};

export default quizPmp23;
