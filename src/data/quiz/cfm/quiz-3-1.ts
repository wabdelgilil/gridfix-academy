import type { QuizBank } from '../types';

export const quiz31: QuizBank = {
  id: 'quiz-3-1',
  questions: [
    {
      scenario: 'الإدارة طلبت منك تأمين الميزانية التشغيلية السنوية (Opex) لقسم المرافق، وتظهر لديك ثلاثة بنود متداخلة.',
      scenarioEn: 'Management asks you to secure the annual operating budget (Opex) for the facilities department, and you have three overlapping line items.',
      question: 'أيها يُصنّف ضمن الميزانية التشغيلية الصحيحة؟',
      questionEn: 'Which one is correctly classified as part of the operating budget?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مرافق واتصالات، نظافة، عقود صيانة تشغيلية، وتدريب الفريق',
          textEn: 'Utilities and communications, cleaning, operating maintenance contracts, and team training',
          isCorrect: true,
          explanation: 'Opex كل ما يخص تشغيل اليومي يستمر سنة بعد سنة: مرافق، عقود، تدريب، خدمات.',
          explanationEn: 'Opex is everything related to daily operation that continues year after year: utilities, contracts, training, and services.',
        },
        {
          text: 'استبدال مبرد مركزي رئيسي',
          textEn: 'Replacing a major central chiller',
          isCorrect: false,
          explanation: 'الإحلال الكبرى للأصول الأساسية يُصنّف CapEx (استثمار رأسمالي) لا تشغيلي.',
          explanationEn: 'Major replacement of core assets is classified as CapEx (capital investment), not operating.',
        },
        {
          text: 'شراء أرض جديدة لمشروع مستقبلي',
          textEn: 'Buying new land for a future project',
          isCorrect: false,
          explanation: 'الاستحواذ العقاري مشروع رأسمالي منفصل خارج ميزانية التشغيل الجارية.',
          explanationEn: 'Property acquisition is a separate capital project outside the ongoing operating budget.',
        },
        {
          text: 'توزيع أرباح للمستثمرين',
          textEn: 'Distributing dividends to investors',
          isCorrect: false,
          explanation: 'توزيع الأرباح في الميزانية المالية العامة وليست في نفقات تشغيل المنشأة.',
          explanationEn: 'Dividend distribution belongs in the general financial statements, not in facility operating expenses.',
        },
      ],
    },
    {
      scenario: 'خصصت الميزانية 4 بنود بنسب 40/30/20/10 وكانت نسبة الاحتياطي 10%.',
      scenarioEn: 'A budget allocates 4 line items at ratios 40/30/20/10 with a contingency ratio of 10%.',
      question: 'ما المبدأ المالي السليم عند مراجعة هذا التوزيع؟',
      questionEn: 'What is the sound financial principle when reviewing this allocation?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'أن يظل الاحتياطي عند 10-15% لتغطية الطوارئ غير المتوقعة',
          textEn: 'Keep the contingency at 10–15% to cover unforeseen emergencies',
          isCorrect: true,
          explanation: 'الاحتياطي حماية من الانقطاعات والانهيارات؛ الصفر يعني أداءً هشاً عند أول مفاجأة.',
          explanationEn: 'The reserve protects against outages and failures; zero means fragile performance at the first surprise.',
        },
        {
          text: 'خفض الاحتياطي للصفر وزيادة التشغيلية',
          textEn: 'Reduce the reserve to zero and increase the operating lines',
          isCorrect: false,
          explanation: 'تشغيلية أعلى بلا حماية = عرضة لأزمة مالية عند عطل كبير مفاجئ.',
          explanationEn: 'Higher operating lines without protection means exposure to a financial crisis at a sudden major failure.',
        },
        {
          text: 'تخصيص كل الميزانية لبند واحد حتى نهايته',
          textEn: 'Allocate the entire budget to a single line item',
          isCorrect: false,
          explanation: 'التركيز الأحادي يخلف خدمة منشأة غير متوازنة ومخاطر في باقي البنود.',
          explanationEn: 'Single-line focus leaves an unbalanced facility service and risks in the remaining lines.',
        },
        {
          text: 'عدم وجود حاجة للميزانيات أصلاً لأن الصيانة تُدار يومياً',
          textEn: 'Budgets are unnecessary because maintenance is managed daily',
          isCorrect: false,
          explanation: 'الميزانية أداة تخطيط ومساءلة؛ غيابها يعني قرارات مرتجلة بلا أرقام.',
          explanationEn: 'The budget is a planning and accountability tool; its absence means improvised decisions without numbers.',
        },
      ],
    },
    {
      scenario: 'الطلب من مدير المنشأة إعداد ميزانية CapEx للخمس سنوات القادمة لحصص استبدال الأصول.',
      scenarioEn: 'The facility manager is asked to prepare a CapEx budget for the next five years for asset replacement shares.',
      question: 'ما المدخل الأصح لإعدادها؟',
      questionEn: 'What is the most correct input for preparing it?',
      difficulty: 'صعب',
      options: [
        {
          text: 'جدول أعمال الأصول (نظام) + خطة التجديد الرأسمالي + تكاليف الاستبدال المتوقعة',
          textEn: 'An asset age register (system) + capital renewal plan + expected replacement costs',
          isCorrect: true,
          explanation: 'CapEx الجيدة تبدأ من بيانات الأصول وحالتها وتوقعات استبدالها، لا من رغبات شعورية.',
          explanationEn: 'Good CapEx starts from asset data, condition, and replacement forecasts, not from emotional wishes.',
        },
        {
          text: 'تقريبي سنوي ثابت يساوي ميزانية السنة الحالية دائماً',
          textEn: "A fixed annual estimate always equal to the current year's budget",
          isCorrect: false,
          explanation: 'النسخ التلقائي يجهل وقت الحاجة الحقيقية ونضج حالة الأصول.',
          explanationEn: 'Automatic copying ignores the real timing of the need and the maturity of asset condition.',
        },
        {
          text: 'طلب المقاولين الدائمين فقط',
          textEn: 'Only asking the standing contractors',
          isCorrect: false,
          explanation: 'الخبراء يدعمون التقدير، لكن مصدر القرار بيانات الأصول والحسابات.',
          explanationEn: 'Experts support the estimate, but the source of the decision is asset data and calculations.',
        },
        {
          text: 'توجيه كل الأموال لترقية أثاث فقط',
          textEn: 'Direct all funds to furniture upgrades only',
          isCorrect: false,
          explanation: 'أولويات الإحلال تتبع الحرجية والظروف، لا الصدفة الجمالية.',
          explanationEn: 'Replacement priorities follow criticality and conditions, not aesthetic chance.',
        },
      ],
    },
  ],
};

export default quiz31;