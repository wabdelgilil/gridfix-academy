import type { QuizBank } from '../types';

export const quizPmp94: QuizBank = {
  id: 'quiz-pmp-9-4',
  questions: [
    {
      scenario: 'الفريق يراجع عملية بشكل متكرر ويطبق تحسينات صغيرة دورية.',
      question: 'أي إطار يصف ذلك؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'PDCA (Plan-Do-Check-Act).',
          isCorrect: true,
          explanation: 'دورة التخطيط والتنفيذ والفحص والتحسين.',
        },
        {
          text: 'Critical path.',
          isCorrect: false,
          explanation:
            'Critical path يحدد أطول سلسلة أنشطة وتاريخ الإنجاز، لا دورات التحسين المتكررة؛ PDCA هو الإطار هنا.',
        },
        {
          text: 'EVM.',
          isCorrect: false,
          explanation:
            'EVM يقارن المخطط بالفعلي من تكلفة وجدول، ولا يصف تحسيناً دورياً؛ المطلوب دورة PDCA.',
        },
        {
          text: 'RACI.',
          isCorrect: false,
          explanation:
            'RACI يحدد الأدوار والمسؤوليات فقط، بينما التحسينات الصغيرة الدورية توصف بدورة PDCA.',
        },
      ],
    },
    {
      scenario: 'تحسين مقترح سيتطلب وقتاً إضافياً قصيراً لكنه يقلل إعادة العمل.',
      question: 'كيف يُتخذ القرار؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'بمقارنة التكلفة والفائدة والأثر على المشروع.',
          isCorrect: true,
          explanation: 'التحسين المستمر يوازن العائد مع الكلفة.',
        },
        {
          text: 'رفض كل تحسين.',
          isCorrect: false,
          explanation: 'التحسين جزء من الثقافة المتكيفة.',
        },
        {
          text: 'تنفيذه دون تقدير.',
          isCorrect: false,
          explanation: 'التقدير يمنع مفاجآت التكلفة.',
        },
        {
          text: 'تأجيله إلى الإغلاق دائماً.',
          isCorrect: false,
          explanation: 'بعض التحسينات يجب أن تكون فورية.',
        },
      ],
    },
    {
      scenario: 'الدروس المستفادة مخزنة لكن لا أحد يستخدمها.',
      question: 'ما المشكلة؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'غياب آلية لمراجعتها وتحويلها إلى إجراءات.',
          isCorrect: true,
          explanation: 'المعرفة لا تتحسن إلا إذا استُخدمت.',
        },
        {
          text: 'لا مشكلة؛ التخزين يكفي.',
          isCorrect: false,
          explanation: 'التخزين وحده لا يصنع تحسيناً.',
        },
        {
          text: 'يجب حذفها.',
          isCorrect: false,
          explanation:
            'حذف الدروس يضيع المعرفة المكتسبة؛ المشكلة غياب آلية مراجعة وتحويلها إلى إجراءات قابلة للتطبيق.',
        },
        {
          text: 'يجب زيادة عدد الدروس.',
          isCorrect: false,
          explanation: 'العدد لا يحل غياب التطبيق.',
        },
      ],
    },
    {
      scenario:
        'مدير مشروع يريد تحسين عملية التقدير بناءً على بيانات مشاريع سابقة.',
      question: 'ما الخطوة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحليل الانحرافات السابقة وتحديث قاعدة البيانات المعيارية.',
          isCorrect: true,
          explanation: 'البيانات التاريخية تحسن دقة التقدير.',
        },
        {
          text: 'الاستمرار بالتخمين.',
          isCorrect: false,
          explanation: 'التخمين لا يبني تحسيناً.',
        },
        {
          text: 'تجاهل المشاريع السابقة.',
          isCorrect: false,
          explanation: 'الخبرة السابقة أصل مهم.',
        },
        {
          text: 'تغيير المقاييس دون سبب.',
          isCorrect: false,
          explanation: 'التغيير يحتاج مبرراً.',
        },
      ],
    },
  ],
};

export default quizPmp94;
