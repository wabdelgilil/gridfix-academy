import type { QuizBank } from '../types';

export const quizPmp13: QuizBank = {
  id: 'quiz-pmp-1-3',
  questions: [
    {
      scenario:
        'مشروع إنشاء مبنى يعتمد على مراحل متسلسلة واعتمادات رسمية عند كل مرحلة.',
      question: 'أي نهج يناسب غالباً؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'النهج التنبؤي (Predictive).',
          isCorrect: true,
          explanation: 'عند وضوح المتطلبات وأثر التغيير مرتفع يناسب التنبؤي.',
        },
        {
          text: 'الرشيق الخالص (Agile).',
          isCorrect: false,
          explanation: 'الرشيق أنسب للتغيير المتكرر وتسليم القيمة على دفعات.',
        },
        {
          text: 'عدم التخطيط.',
          isCorrect: false,
          explanation: 'غياب التخطيط يضر بمشروع ذي قيود تنظيمية.',
        },
        {
          text: 'الهجين دون سبب.',
          isCorrect: false,
          explanation: 'الهجين يُختار لسبب، لا افتراضياً.',
        },
      ],
    },
    {
      scenario: 'تم اعتماد خط أساس النطاق والجدول والتكلفة.',
      question: 'ما أثر ذلك على التغييرات اللاحقة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تخضع التغييرات لتحليل الأثر والاعتماد قبل التنفيذ.',
          isCorrect: true,
          explanation: 'الخط الأساسي يحمي الخطة ويمنع التعديل العشوائي.',
        },
        {
          text: 'يُمنع أي تغيير نهائياً.',
          isCorrect: false,
          explanation: 'التغيير مسموح لكن عبر عملية التحكم بالتغيير.',
        },
        {
          text: 'يمكن تغييره شفهياً في الاجتماع.',
          isCorrect: false,
          explanation: 'الشفوية لا توفر سجلاً ولا حماية للخط الأساسي.',
        },
        {
          text: 'يُحدَّث تلقائياً كل أسبوع.',
          isCorrect: false,
          explanation: 'التحديث التلقائي يلغي معنى الخط الأساسي.',
        },
      ],
    },
    {
      scenario:
        'في نهاية مرحلة التصميم يعقد الاجتماع لمراجعة المخرجات قبل الانتقال.',
      question: 'ما اسم هذه النقطة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'بوابة مرحلة (Phase gate).',
          isCorrect: true,
          explanation: 'بوابة المرحلة تقرر الاستمرار أو التعديل أو الإيقاف.',
        },
        {
          text: 'سبرنت (Sprint).',
          isCorrect: false,
          explanation: 'السبرنت وحدة زمنية في Scrum، لا بوابة تنبؤية.',
        },
        {
          text: 'سجل مخاطر.',
          isCorrect: false,
          explanation: 'السجل يوثق المخاطر، لا قرار الانتقال.',
        },
        {
          text: 'ميثاق المشروع.',
          isCorrect: false,
          explanation: 'الميثاق يُعد في البداية، لا عند نهاية مرحلة.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد تقليل مدة المشروع دون تغيير النطاق.',
      question: 'أي أسلوب يناسب ذلك؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'ضغط الجدول (Crashing) أو التنفيذ المتوازي حسب الملاءمة.',
          isCorrect: true,
          explanation: 'Compression يقلل المدة مع دراسة التكلفة والمخاطر.',
        },
        {
          text: 'حذف اختبارات الجودة.',
          isCorrect: false,
          explanation: 'حذف الجودة يزيد المخاطر ولا يحل المشكلة أمانةً.',
        },
        {
          text: 'تغيير معايير القبول فقط.',
          isCorrect: false,
          explanation: 'تغيير المعايير دون مبرر يضر بالمخرج.',
        },
        {
          text: 'إضافة عدد أكبر من الاجتماعات.',
          isCorrect: false,
          explanation: 'الاجتماعات الإضافية لا تضغط المسار الحرج بالضرورة.',
        },
      ],
    },
  ],
};

export default quizPmp13;
