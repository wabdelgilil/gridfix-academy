import type { QuizBank } from '../types';

export const quizPmp14: QuizBank = {
  id: 'quiz-pmp-1-4',
  questions: [
    {
      scenario:
        'مشروع تطوير تطبيق بمتطلبات تتغير أسبوعياً ورغبة العميل في رؤية ميزات مبكرة.',
      question: 'أي نهج أنسب؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'رشيق (Agile) مع تسليم متكرر.',
          isCorrect: true,
          explanation: 'التكرار والتغيير المتكرر يناسبان البيئة غير المؤكدة.',
        },
        {
          text: 'تنبؤي كامل بخطة ثابتة.',
          isCorrect: false,
          explanation: 'الخطة الثابتة لا تستجيب للتغيير الأسبوعي.',
        },
        {
          text: 'إلغاء التخطيط.',
          isCorrect: false,
          explanation: 'الرشيق يخطط على مستويات متعددة، لا يلغي التخطيط.',
        },
        {
          text: 'عقد سعر ثابت شامل دون مرونة.',
          isCorrect: false,
          explanation: 'العقد الصارم لا يناسب المتطلبات المتغيرة.',
        },
      ],
    },
    {
      scenario:
        'مشروع يجمع متطلبات تنظيمية ثابتة مع واجهة مستخدم تتطور التجربة فيها باستمرار.',
      question: 'ما النهج الأفضل؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'هجين (Hybrid) يجمع تنبؤياً للامتثال ورشيقاً للتطوير.',
          isCorrect: true,
          explanation:
            'الهجين يستخدم عندما تختلف طبيعة الأجزاء داخل مشروع واحد.',
        },
        {
          text: 'تنبؤي فقط.',
          isCorrect: false,
          explanation: 'تنبؤي فقط لا يخدم تجربة المستخدم المتطورة.',
        },
        {
          text: 'رشيق فقط دون اعتبار الامتثال.',
          isCorrect: false,
          explanation: 'تجاهل الامتثال يخلق مخاطر تنظيمية.',
        },
        {
          text: 'اختيار عشوائي.',
          isCorrect: false,
          explanation: 'اختيار النهج قرار مقصود مبني على السياق.',
        },
      ],
    },
    {
      scenario:
        'مدير مشروع يقرر أداة تقدير ووتيرة 사회ية وطريقة توثيق مناسبة للفريق.',
      question: 'ما هذا القرار يسمى؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تخصيص (Tailoring).',
          isCorrect: true,
          explanation:
            'التخصيص هو اختيار الممارسات والأدوات بما يناسب سياق المشروع.',
        },
        {
          text: 'توحيد قسري (Standardization).',
          isCorrect: false,
          explanation: 'التوحيد يفرض نفس الأسلوب على كل المشاريع.',
        },
        {
          text: 'تصعيد (Escalation).',
          isCorrect: false,
          explanation: 'التصعيد نقل قرار لمستوى أعلى، وليس اختيار الممارسات.',
        },
        {
          text: 'تحقق الجودة (Validation).',
          isCorrect: false,
          explanation: 'التحقق يفحص المخرجات، لا يختار النهج.',
        },
      ],
    },
    {
      scenario: 'أي عبارة تصف الفرق الجوهري بين التنبؤي والرشيق؟',
      question: 'اختر الإجابة الأدق.',
      difficulty: 'صعب',
      options: [
        {
          text: 'التنبؤي يخطط مقدماً شاملاً، والرشيق يتكيف عبر دورات قصيرة.',
          isCorrect: true,
          explanation: 'الفرق في وتيرة التخطيط والتسليم والتكيف.',
        },
        {
          text: 'التنبؤي لا يستخدم الجداول.',
          isCorrect: false,
          explanation: 'التنبؤي يعتمد بقوة على الجداول.',
        },
        {
          text: 'الرشيق بلا أدوار أو مسؤوليات.',
          isCorrect: false,
          explanation: 'الرشيق له أدوار واضحة مثل Scrum Master وProduct Owner.',
        },
        {
          text: 'لا يوجد فرق عملي بينهما.',
          isCorrect: false,
          explanation: 'هناك فروق جوهرية في النهج والحكم.',
        },
      ],
    },
  ],
};

export default quizPmp14;
