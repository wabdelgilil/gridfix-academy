import type { QuizBank } from '../types';

export const quizCama41: QuizBank = {
  id: 'quiz-cama-4-1',
  questions: [
  {
    scenario: 'بدأت سلسلة مستشفيات مشروع بناء جناح جديد، وتناقش لجنة المشتريات بين عرضين: أحدهما بسعر اقتصادي لكن تجهيزاته غير قياسية، والآخر أغلى لكنه متوافق مع نظام إدارة الأصول الحالي للصيانة والتدريب.',
    scenarioEn: 'A hospital chain started a project to build a new wing, and the procurement committee is debating between two offers: one at an economical price but with non-standard equipment, and another more expensive but compatible with the current asset management system for maintenance and training.',
    question: 'ما القرار الأنسب وفق مبدأ "التكلفة الحقيقية تبدأ قبل الشراء"؟',
    questionEn: 'What is the most appropriate decision according to the principle that "the real cost starts before purchase"?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'اعتماد العرض المتوافق مع نظام الإدارة الحالي لأن تكلفة دورة الحياة تشمل التشغيل والصيانة والتدريب لا سعر الشراء فقط.',
        textEn: 'Adopting the offer compatible with the current management system because the life cycle cost includes operation, maintenance, and training, not only the purchase price.',
        isCorrect: true,
        explanation: 'التكلفة الحقيقية تمتد عبر دورة الحياة بأكملها؛ التوافق مع الأنظمة الحالية يعني قطع غيار وتدريباً وموثوقية أفضل على المدى البعيد.',
        explanationEn: 'The real cost extends across the entire life cycle; compatibility with the existing systems means better spare parts, training, and reliability in the long run.',
      },
      {
        text: 'اعتماد العرض الأرخص دائماً لأن الميزانية هي المرجع الوحيد.',
        textEn: 'Always adopting the cheaper offer because the budget is the only reference.',
        isCorrect: false,
        explanation: 'النظر لسعر الشراء فقط يخفي تكاليف الصيانة وقطع الغيار والإيقافات اللاحقة التي قد تتجاوز الوفور الأولي.',
        explanationEn: 'Looking only at the purchase price hides the maintenance, spare part, and subsequent stoppage costs that may exceed the initial saving.',
      },
      {
        text: 'تأجيل الشراء بلا بديل مقبول للانتظار حتى ينخفض السعر.',
        textEn: 'Postponing the purchase with no acceptable alternative, waiting until the price drops.',
        isCorrect: false,
        explanation: 'التأجيل قد يفاقم مخاطر التشغيل والتضخم، والقرار الواجب تقييم دورة الحياة وليس التسويف.',
        explanationEn: 'Postponement may worsen operational and inflation risks; the required decision is a life cycle evaluation, not procrastination.',
      },
      {
        text: 'الإبقاء على العرض الأرخص مع شراء عقود ضمان إضافية طويلة دون شرط.',
        textEn: 'Keeping the cheaper offer while purchasing additional long warranty contracts without any condition.',
        isCorrect: false,
        explanation: 'الضمان يقلل مخاطر العطل لكنه لا يعالج عدم التوافق مع البنية التحتية وقطع الغيار والتدريب.',
        explanationEn: 'Warranty reduces the failure risk but does not address the incompatibility with the infrastructure, spare parts, and training.',
      }
    ]
  },
  {
    scenario: 'تعمل شركة محطات تحلية على استلام محطة جديدة من المقاول، وتلاحظ أن الوثائق المقدمة ناقصة: لا يوجد سجل متكامل لقطع الغيار، ولا دلائل تدريب المشغلين، ولا بيانات الضمان النهائية.',
    scenarioEn: 'A desalination plants company is receiving a new plant from the contractor and notices that the provided documents are incomplete: there is no integrated spare parts register, no operator training guides, and no final warranty data.',
    question: 'ما الإجراء الصحيح في مرحلة التسليم والاستلام (Handover)؟',
    questionEn: 'What is the correct action during the handover stage?',
    difficulty: 'سهل',
    options: [
      {
        text: 'استكمال وثائق الأصول وبيانات الضمان والتدريب قبل اعتماد المحطة في سجل الأصول وبدء العدادات الزمنية للضمان.',
        textEn: 'Completing the asset documents, warranty data, and training before approving the plant in the asset register and starting the warranty time counters.',
        isCorrect: true,
        explanation: 'الاستلام الكامل يتطلب اكتمال المعلومات الفنية والتشغيلية ووثائق الضمان والتدريب، حتى تدخل الأصول في سجل إدارة الأصول بقاعدة بيانات سليمة.',
        explanationEn: 'Full acceptance requires complete technical and operational information and the warranty and training documents, so the assets enter the asset management register with a sound data base.',
      },
      {
        text: 'اعتماد المحطة فوراً مهما نقصت الوثائق لضمان استمرار الإنتاج.',
        textEn: 'Approving the plant immediately no matter how incomplete the documents, to ensure production continuity.',
        isCorrect: false,
        explanation: 'اعتماد أصول بملفات ناقصة يورث مشاكل قطع الغيار والتشغيل وتحصيل الضمانات مستقبلاً.',
        explanationEn: 'Approving assets with incomplete files bequeaths spare parts, operation, and warranty collection problems in the future.',
      },
      {
        text: 'رفض المحطة كاملة والعودة للمكافاة مقابل إعادة التركيب من الصفر.',
        textEn: 'Rejecting the plant entirely and resorting to arbitration in exchange for reinstalling it from scratch.',
        isCorrect: false,
        explanation: 'العيوب في التوثيق قابل للاستكمال بحزمة استلام واحتفاظ بالضمانات، ولا يستدعي رفض المشروع كاملاً.',
        explanationEn: 'Documentation defects can be completed through an acceptance package while retaining the warranties, and do not call for rejecting the whole project.',
      },
      {
        text: 'تسليم المحطة لشركة خارجية لإعداد وثائق بديلة دون التعامل مع المقاول.',
        textEn: 'Handing the plant to an external company to prepare alternative documents without dealing with the contractor.',
        isCorrect: false,
        explanation: 'بدل الخبرة في الاستلام هي إلزام المقاول واستيفاء ما نقص حسب العقد، وليس الاستعانة بجهة موازية تخلط المسؤولية.',
        explanationEn: 'The acceptance expertise is to oblige the contractor and complete what is missing under the contract, not to use a parallel party that muddies responsibility.',
      }
    ]
  },
  {
    scenario: 'صُمم مخزن تبريد كبير في خط إنتاج ثلاجات، لكن بعد التشغيل بدأت الأعطال المتكررة في الضاغط الذي وُضع في مكان يصعب الوصول إليه للصيانة وتتطلب إزالة أجزاء كبيرة.',
    scenarioEn: 'A large cold storage was designed in a refrigerator production line, but after operation recurring failures began in the compressor that was placed in a location hard to reach for maintenance, requiring the removal of large parts.',
    question: 'أي قرار هندسي كان سيمنع هذه المشكلة في مرحلة التصميم؟',
    questionEn: 'Which engineering decision would have prevented this problem at the design stage?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تصميم الأصل بحيث تكون مكوناته حرجة سهلة الوصول للفحص والاستبدال دون تفكيك واسع.',
        textEn: 'Designing the asset so that its critical components are easily accessible for inspection and replacement without extensive dismantling.',
        isCorrect: true,
        explanation: 'التصميم لقابلية الصيانة (Design for Maintainability) يجعل الوصول إلى المكونات الحرجة سهلاً، فيقلل زمن الإصلاح وكلفته ويحسن الاعتمادية.',
        explanationEn: 'Design for maintainability makes access to the critical components easy, reducing repair time and cost and improving reliability.',
      },
      {
        text: 'اختيار مكونات أكبر حجماً دائماً دون مراعاة إمكانية الوصول.',
        textEn: 'Always choosing larger components without considering accessibility.',
        isCorrect: false,
        explanation: 'الحجم الكبير ليس مقياساً للموثوقية، والقضية هي موقع المكون وإمكانية صيانته.',
        explanationEn: 'Large size is not a measure of reliability; the issue is the component\u2019s location and its maintainability.',
      },
      {
        text: 'تأجيل كل قرارات التصميم لمرحلة التشغيل.',
        textEn: 'Postponing all design decisions to the operation stage.',
        isCorrect: false,
        explanation: 'قرارات التصميم تؤثر في التكلفة والاعتمادية من البداية، وتأجيلها يرفع كلفة ما بعد التشغيل.',
        explanationEn: 'Design decisions affect cost and reliability from the beginning, and postponing them raises the post-operation cost.',
      },
      {
        text: 'مراعاة سعر الشراء فقط عند اختيار المكونات.',
        textEn: 'Considering only the purchase price when selecting the components.',
        isCorrect: false,
        explanation: 'إغفال إمكانية الوصول والصيانة عند الاختيار ينتج عنه عيوب تشغيلية مرتفعة التكلفة.',
        explanationEn: 'Ignoring accessibility and maintainability in selection produces operational defects of high cost.',
      }
    ]
  }
  ],
};