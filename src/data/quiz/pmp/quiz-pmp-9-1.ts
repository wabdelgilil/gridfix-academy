import type { QuizBank } from '../types';

export const quizPmp91: QuizBank = {
  id: 'quiz-pmp-9-1',
  questions: [
    {
      scenario: 'مشروع يتخطى صلاحية مدير المشروع ويحتاج قرار توجيهياً.',
      question: 'أين يُرفع القرار؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'إلى الراعي أو اللجنة التوجيهية وفق مصفوفة الحوكمة.',
          isCorrect: true,
          explanation: 'الحوكمة تحدد مستوى القرار ومسار التصعيد.',
        },
        {
          text: 'إلى أي موظف متاح.',
          isCorrect: false,
          explanation: 'العشوائية تخالف الحوكمة.',
        },
        {
          text: 'إلى المورد.',
          isCorrect: false,
          explanation: 'المورد لا يملك سلطة الأعمال.',
        },
        {
          text: 'لا يُرفع.',
          isCorrect: false,
          explanation: 'تجاوز الصلاحية يحتاج معالجة.',
        },
      ],
    },
    {
      scenario: 'حوكمة المشروع تختلف عن إدارة المشروع.',
      question: 'ما الفرق الجوهري؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الحوكمة تحدد السلطة والقرارات، والإدارة تنفذ العمل.',
          isCorrect: true,
          explanation: 'الحوكمة إشراف وتوجيه، والإدارة تنفيذ وتسليم.',
        },
        {
          text: 'لا فرق بينهما.',
          isCorrect: false,
          explanation: 'الفرق مهم في الامتحان.',
        },
        {
          text: 'الحوكمة تعني كتابة التقارير فقط.',
          isCorrect: false,
          explanation: 'التقارير جزء صغير.',
        },
        {
          text: 'الإدارة تعني مراقبة الجودة فقط.',
          isCorrect: false,
          explanation: 'الإدارة أوسع.',
        },
      ],
    },
    {
      scenario: 'قرار له أثر استراتيجي لكنه لا يعود بالنفع على المشروع وحده.',
      question: 'ما المعيار الأفضل؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'مواءمته مع أهداف المؤسسة ومحفظة الأعمال.',
          isCorrect: true,
          explanation: 'الحوكمة تربط القرار بالمستوى الأوسع.',
        },
        {
          text: 'مصلحة المشروع وحدها.',
          isCorrect: false,
          explanation: 'المشروع جزء من منظومة أكبر.',
        },
        {
          text: 'رأي أعلى رتبة فقط.',
          isCorrect: false,
          explanation: 'الرتبة جزء من الحوكمة لكنها ليست المعيار الوحيد.',
        },
        {
          text: 'السرعة في القرار.',
          isCorrect: false,
          explanation: 'السرعة مهمة لكن المواءمة أهم.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يحتاج معرفة من يوافق على تغيير الخط الأساس.',
      question: 'أين يجد ذلك؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'في خطة الحوكمة ووثائق السلطة.',
          isCorrect: true,
          explanation: 'تحدد الوثائق حدود الصلاحيات ومسارات الاعتماد.',
        },
        {
          text: 'في جدول الرواتب.',
          isCorrect: false,
          explanation: 'الرواتب غير مرتبطة بالسلطة.',
        },
        {
          text: 'في سجل المخاطر فقط.',
          isCorrect: false,
          explanation: 'السجل لا يحدد الصلاحيات.',
        },
        {
          text: 'في شعار المؤسسة.',
          isCorrect: false,
          explanation: 'الشعار لا يحدد القرار.',
        },
      ],
    },
  ],
};

export default quizPmp91;
