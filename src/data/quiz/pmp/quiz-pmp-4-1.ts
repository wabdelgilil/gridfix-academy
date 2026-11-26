import type { QuizBank } from '../types';

export const quizPmp41: QuizBank = {
  id: 'quiz-pmp-4-1',
  questions: [
    {
      scenario: 'شبكة المشروع تحتوي على مسار أطول من بقية المسارات.',
      question: 'ما اسم هذا المسار؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'المسار الحرج (Critical path).',
          isCorrect: true,
          explanation: 'أطول مسار يحدد أقصر مدة ممكنة للمشروع.',
        },
        {
          text: 'المسار الاحتياطي.',
          isCorrect: false,
          explanation: 'الاحتياطي زمن وليس مساراً.',
        },
        {
          text: 'مسار المورد.',
          isCorrect: false,
          explanation: 'ليس مصطلحاً في الجدولة.',
        },
        {
          text: 'خط الأساس للتكلفة.',
          isCorrect: false,
          explanation: 'خط الأساس للتكلفة منفصل عن الشبكة.',
        },
      ],
    },
    {
      scenario: 'نشاط يمكن تأخيره يوماً دون تأخير المشروع.',
      question: 'ما المصطلح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الزمن الاحتياطي (Float).',
          isCorrect: true,
          explanation:
            'الزمن الاحتياطي هو مقدار التأخير المسموح قبل تأثيره على المسار الحرج.',
        },
        {
          text: 'الزمن الحرج.',
          isCorrect: false,
          explanation: 'الزمن الحرج لا يملك مرونة.',
        },
        {
          text: 'المدة المقدرة.',
          isCorrect: false,
          explanation: 'المدةهي زمن النشاط نفسه.',
        },
        {
          text: 'التبعة (Dependency).',
          isCorrect: false,
          explanation: 'التبعة علاقة بين الأنشطة.',
        },
      ],
    },
    {
      scenario:
        'مدير مشروع يحتاج تقليل المدة بإضافة موارد إلى أنشطة المسار الحرج.',
      question: 'أي أسلوب يستخدم؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الضغط (Crashing).',
          isCorrect: true,
          explanation: 'يضيف موارد لتقليل المدة مع زيادة التكلفة غالباً.',
        },
        {
          text: 'التنعيم (Fast tracking).',
          isCorrect: false,
          explanation:
            'التنعيم يعني تنفيذ أنشطة بالتوازي، لا إضافة موارد بالضرورة.',
        },
        {
          text: 'تغيير النطاق.',
          isCorrect: false,
          explanation: 'تغيير النطاق ليس أسلوب ضغط للجدول.',
        },
        {
          text: 'زيادة الاجتماعات.',
          isCorrect: false,
          explanation: 'الاجتماعات لا تختصر المسار الحرج.',
        },
      ],
    },
    {
      scenario: 'نشاطان يعتمدان على بعضهما بعلاقة "ينتهي قبل أن يبدأ".',
      question: 'أي نوع تبعة (Dependency) هذا؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تبعة إلزامية (Mandatory dependency).',
          isCorrect: true,
          explanation: 'التبعة الإلزامية مفروضة بطبيعة العمل.',
        },
        {
          text: 'تبعة اختيارية.',
          isCorrect: false,
          explanation: 'الاختيارية مبنية على تفضيل الفريق.',
        },
        {
          text: 'تبعة خارجية.',
          isCorrect: false,
          explanation: 'الخارجية مرتبطة بطرف خارج المشروع.',
        },
        {
          text: 'تبعة داخلية فقط.',
          isCorrect: false,
          explanation: 'داخلية وصف عام، لكن المثال يحدد الإلزامية.',
        },
      ],
    },
  ],
};

export default quizPmp41;
