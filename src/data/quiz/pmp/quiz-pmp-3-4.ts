import type { QuizBank } from '../types';

export const quizPmp34: QuizBank = {
  id: 'quiz-pmp-3-4',
  questions: [
    {
      scenario: 'الفريق أنجز حزمة عمل (Work package) لكن العميل لم يقبله بعد.',
      question: 'ما الفرق بين التحقق والتحكم في النطاق؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التحقق يفحص صحة المخرج، والتحكم يفحص قبوله وخط الأساس.',
          isCorrect: true,
          explanation: 'Validation وControl يخدمان غايتين متكاملتين.',
        },
        {
          text: 'لا فرق بينهما.',
          isCorrect: false,
          explanation:
            'الحوكمة تحدد السلطة والقرارات، والإدارة تنفذ العمل؛ اعتبارهما متطابقين يمحو الفرق بين الإشراف والتنفيذ.',
        },
        {
          text: 'التحقق يتم دائماً في الإغلاق فقط.',
          isCorrect: false,
          explanation: 'التحقق يتم أثناء التنفيذ أيضاً.',
        },
        {
          text: 'التحكم يعني زيادة النطاق.',
          isCorrect: false,
          explanation: 'التحكم يمنع التعديل غير المنضبط.',
        },
      ],
    },
    {
      scenario: 'معاينة منتج أظهرت انحرافاً عن معايير القبول.',
      question: 'ما الإجراء الأول؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'توثيق الانحراف وتحليل سببه.',
          isCorrect: true,
          explanation: 'الفهم يسبق قرار التصحيح أو التغيير.',
        },
        {
          text: 'إخفاء الانحراف حتى يكتمل التسليم.',
          isCorrect: false,
          explanation: 'الإخفاء يضر بالجودة والثقة.',
        },
        {
          text: 'تغيير معيار القبول فوراً.',
          isCorrect: false,
          explanation: 'تغيير المعيار يحتاج تحليلاً واعتماداً.',
        },
        {
          text: 'إيقاف المشروع نهائياً.',
          isCorrect: false,
          explanation: 'الانحراف لا يعني الإلغاء.',
        },
      ],
    },
    {
      scenario:
        'انحراف بسيط لا يؤثر على الخط الأساسي ولكنه يحتاج تصحيحاً داخلياً.',
      question: 'ما المسار الأنسب؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'اتخاذ إجراء تصحيحي داخل الفريق وتوثيقه.',
          isCorrect: true,
          explanation: 'ليس كل تصحيح يحتاج طلب تغيير رسمي.',
        },
        {
          text: 'إحالة كل شيء إلى لجنة التغيير.',
          isCorrect: false,
          explanation: 'الإحالة المفرطة تهدر الوقت.',
        },
        {
          text: 'تجاهل الانحراف.',
          isCorrect: false,
          explanation:
            'تجاهل الانحراف الصغير يتراكم حتى يمس الخط الأساس؛ الأفضل معالجته داخل الفريق وتوثيقه مبكراً.',
        },
        {
          text: 'تعديل خط الأساس دون سجل.',
          isCorrect: false,
          explanation: 'تعديل الخط الأساس يحتاج اعتماداً.',
        },
      ],
    },
    {
      scenario: 'عميل طلب إضافة عنصر إضافي أثناء الإغلاق دون طلب رسمي.',
      question: 'ماذا يفعل مدير المشروع؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'يوضح أن الطلب جديد ويخضع لعملية التحكم بالتغيير.',
          isCorrect: true,
          explanation: 'الإغلاق لا يلغي متطلبات التحكم بالتغيير.',
        },
        {
          text: 'ينفّذه لأن العميل طلبه.',
          isCorrect: false,
          explanation: 'التنفيذ غير المنضبط يضر بالإغلاق.',
        },
        {
          text: 'يرفضه دون توضيح.',
          isCorrect: false,
          explanation: 'التوضيح جزء من إدارة التوقعات.',
        },
        {
          text: 'يؤجله إلى مشروع آخر دون تسجيل.',
          isCorrect: false,
          explanation: 'التسجيل يحفظ الطلب ويفتح قناة صحيحة.',
        },
      ],
    },
  ],
};

export default quizPmp34;
