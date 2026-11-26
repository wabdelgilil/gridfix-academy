import type { QuizBank } from '../types';

export const quizPmp31: QuizBank = {
  id: 'quiz-pmp-3-1',
  questions: [
    {
      scenario:
        'عميل يذكر رغبات متفرقة ومدير مشروع يحتاج متطلبات قابلة للقياس.',
      question: 'ما أول خطوة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'استخدام تقنيات استجلاء المتطلبات (Elicitation) وتوثيقها.',
          isCorrect: true,
          explanation: 'الاستماع والتحليل يحوّلان الرغبات إلى متطلبات واضحة.',
        },
        {
          text: 'كتابة المتطلبات كما قيلت دون سؤال.',
          isCorrect: false,
          explanation: 'الغموض سيظهر لاحقاً كتغيير مكلف.',
        },
        {
          text: 'البدء بالتصميم فوراً.',
          isCorrect: false,
          explanation: 'التصميم قبل وضوح المتطلبات يسبب إعادة عمل.',
        },
        {
          text: 'تجاهل الرغبات غير الرسمية.',
          isCorrect: false,
          explanation: 'قد تحمل قيمة حقيقية تستحق التحليل.',
        },
      ],
    },
    {
      scenario:
        'مدير مشروع يريد التأكد من أن كل متطلب يقابله عنصر في التصميم والاختبار.',
      question: 'أي أداة تناسب ذلك؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'مصفوفة تتبع المتطلبات (Requirements traceability matrix).',
          isCorrect: true,
          explanation: 'تتابع المتطلب من المصدر حتى التسليم والاختبار.',
        },
        {
          text: 'مصفوفة RACI.',
          isCorrect: false,
          explanation: 'تحدد الأدوار لا التتبع.',
        },
        {
          text: 'سجل المخاطر.',
          isCorrect: false,
          explanation:
            'سجل المخاطر يوثّق التهديدات والفرص لا المتطلبات؛ تتبع المتطلب حتى الاختبار يتم بمصفوفة التتبع.',
        },
        {
          text: 'خط الأساس للتكلفة.',
          isCorrect: false,
          explanation:
            'خط الأساس للتكلفة يضبط الميزانية ويقيس الانحراف المالي، بينما المطلوب هنا تتبع المتطلب من مصدره إلى الاختبار.',
        },
      ],
    },
    {
      scenario:
        'فريق يحلل حزمة عمل (Work package) إلى مكونات أصغر قبل التقدير.',
      question: 'ما النتيجة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'هيكل تفكيك العمل (WBS) وفق قاعدة 100%.',
          isCorrect: true,
          explanation: 'WBS يجمع كل عمل المشروع ولا يضيف عملاً خارجياً.',
        },
        {
          text: 'قائمة المخاطر.',
          isCorrect: false,
          explanation:
            'قائمة المخاطر تسجّل التهديدات والفرص، أما تفكيك حزمة العمل إلى مكونات فهو نتيجة هيكل تفكيك العمل (WBS).',
        },
        {
          text: 'جدول المدفوعات.',
          isCorrect: false,
          explanation: 'الجدول المالي منفصل.',
        },
        {
          text: 'ميثاق المشروع.',
          isCorrect: false,
          explanation:
            'الميثاق يأذن بالمشروع ويسبق التخطيط، لكن تفكيك حزمة العمل إلى مكونات ينتج WBS وفق قاعدة 100%.',
        },
      ],
    },
    {
      scenario: 'ظهر عنصر عمل لا يمثل أي متطلب معتمد.',
      question: 'ماذا يفعل مدير المشروع؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'التحقق منه؛ فإن لم يكن مبرراً يُستبعد أو يُعتمد رسمياً.',
          isCorrect: true,
          explanation: 'قاعدة 100% تمنع إضافة عمل دون غاية.',
        },
        {
          text: 'إضافته دون تحليل لأن الفريق اقترحه.',
          isCorrect: false,
          explanation: 'الاقتراح لا يُغني عن التبرير والاعتماد.',
        },
        {
          text: 'تجاهل قاعدة 100%.',
          isCorrect: false,
          explanation: 'القاعدة أساسية لضبط النطاق.',
        },
        {
          text: 'إيقاف المشروع.',
          isCorrect: false,
          explanation:
            'إيقاف المشروع رد جذري على عنصر عمل غير مبرر؛ الصحيح التحقق ثم الاستبعاد أو الاعتماد الرسمي.',
        },
      ],
    },
  ],
};

export default quizPmp31;
