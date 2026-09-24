import type { QuizBank } from '../types';

export const quiz43: QuizBank = {
  id: 'quiz-4-3',
  questions: [
    {
      scenario: 'لوحظ في غرفة خوادم ارتفاع مستوى ثاني أكسيد الكربون وتزايد شكاوى "صباح الرؤوس الثقيلة" بين شاغلي الطابق المجاور.',
      scenarioEn: 'A rising carbon dioxide level is observed in a server room, along with growing "heavy-head mornings" complaints among the occupants of the adjacent floor.',
      question: 'ما أول إجراء للتشخيص الصحيح؟',
      questionEn: 'What is the first action for a correct diagnosis?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'قياس حسي مباشر: CO₂ + رطوبة + حرارة ومقارنتها بالمرجع ثم فحص التهوية',
          textEn: 'Direct sensing: CO₂ + humidity + temperature, compare to the reference, then check ventilation',
          isCorrect: true,
          explanation: 'التشخيص يبدأ بقياس فعلي مقابل معايير (وما فوق 1000 ppm مؤشر انخفاض التهوية).',
          explanationEn: 'Diagnosis starts with real measurement against standards (values above 1000 ppm indicate reduced ventilation).',
        },
        {
          text: 'استبدال نظام التكييف فوراً دون قياس',
          textEn: 'Immediately replace the HVAC system without measuring',
          isCorrect: false,
          explanation: 'الاستبدال العمياء يهدر رأسمال وقد لا يعالج جذر ضعف التهوية.',
          explanationEn: 'Blind replacement wastes capital and may not address the root of poor ventilation.',
        },
        {
          text: 'غلق النوافذ نهائياً',
          textEn: 'Close the windows permanently',
          isCorrect: false,
          explanation: 'من دائرة العكس: نقص الهواء النقي هو المشكلة لا زيادته.',
          explanationEn: 'From the reversal circle: a shortage of fresh air is the problem, not an excess of it.',
        },
        {
          text: 'افتراض أن الشكاوى جراء ظروف شخصية بحتة',
          textEn: 'Assume the complaints are due to purely personal circumstances',
          isCorrect: false,
          explanation: 'قياس بسيط يكشف الحقيقة — متغيرات البيئة الحقيقية لا تُختزل في انطباعات.',
          explanationEn: 'A simple measurement reveals the truth — real environmental variables are not reduced to impressions.',
        },
      ],
    },
    {
      scenario: 'القياس أظهر رطوبة نسبية 75% في منطقة تخزين وظهر عزل بقع رطوبة على الجدران.',
      scenarioEn: 'Measurement shows 75% relative humidity in a storage area, and moisture stains appear on the walls.',
      question: 'ما القرار الأعلى أولوية؟',
      questionEn: 'What is the highest-priority decision?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'معالجة مصدر الرطوبة وضبط التهوية قبل أي تجميل، ورصد مستمر',
          textEn: 'Treat the moisture source and adjust ventilation before any cosmetic work, with continuous monitoring',
          isCorrect: true,
          explanation: 'الرطوبة فوق 60% تعزز العفن وغيرها من المشكلات الصحية — الجذر أولاً.',
          explanationEn: 'Moisture above 60% fosters mold and other health problems — the root comes first.',
        },
        {
          text: 'طلاء الجدران لإخفاء البقع',
          textEn: 'Paint the walls to hide the stains',
          isCorrect: false,
          explanation: 'الطلاء يخفي العرض ويترك الرطوبة تنمو خلفه ويضاعف الأثر.',
          explanationEn: 'Painting hides the symptom and lets moisture grow behind it, multiplying the effect.',
        },
        {
          text: 'إغلاق المنطقة والتوقف عند ذلك',
          textEn: 'Close the area and stop there',
          isCorrect: false,
          explanation: 'الإغلاق يعالج الكشف لا السبب؛ المشكلة تعود عند أي فتح.',
          explanationEn: 'Closing treats detection, not the cause; the problem returns at any reopening.',
        },
        {
          text: 'نقل مواد فقط بلا تجهيز تقني',
          textEn: 'Only move materials with no technical preparation',
          isCorrect: false,
          explanation: 'أصول المنشأة تنتقل بعبء الرطوبة ذاته إن بقي مصدرها.',
          explanationEn: 'Facility assets move with the same moisture burden while its source remains.',
        },
      ],
    },
    {
      scenario: 'على مدى 3 سنوات، حُسّنت التهوية وحُدّثت الأنظمة، وتحسنت مؤشرات IEQ في المباني الرئيسية.',
      scenarioEn: 'Over three years, ventilation was improved, systems were updated, and IEQ indicators improved in the main buildings.',
      question: 'ما قمة إثبات الأثر الذي يبني حالة الاستثمار القادمة؟',
      questionEn: 'What is the strongest proof of impact that builds the next investment case?',
      difficulty: 'صعب',
      options: [
        {
          text: 'دراسة أثر: IEQ المحسن مقابل رضا ومؤشرات صحية وإنتاجية قبل/بعد',
          textEn: 'An impact study: improved IEQ versus satisfaction and health and productivity indicators before/after',
          isCorrect: true,
          explanation: 'الربط بين البيئة والأثر التشغيلي يحوّل الـ IEQ من "بند رفاهية" إلى استثمار محسوب.',
          explanationEn: 'Linking the environment to operational impact turns IEQ from a "well-being line item" into a calculated investment.',
        },
        {
          text: 'عرض صور وتحسين الجمال فقط',
          textEn: 'Simply showing pictures and cosmetic improvement only',
          isCorrect: false,
          explanation: 'الصور تسجل الحنين ولا عدد فيها للقرار.',
          explanationEn: 'Pictures record nostalgia and offer no numbers for a decision.',
        },
        {
          text: 'الاعتماد على شهادات مصنعي الأنظمة وحدها',
          textEn: 'Rely only on the certificates of the system manufacturers',
          isCorrect: false,
          explanation: 'شهادة المصنّع تصف الجهاز؛ الأثر بشاغله يقاس في المنشأة.',
          explanationEn: 'A manufacturer certificate describes the equipment; the impact on its occupants is measured in the facility.',
        },
        {
          text: 'الانتقال للمشروع التالي دون توثيق',
          textEn: 'Move to the next project without documentation',
          isCorrect: false,
          explanation: 'بدون توثيق الأثر تُتخذ قرارات مستقبلية بلا مبرر مما يخطر التمويل.',
          explanationEn: 'Without documenting impact, future decisions are made without justification, endangering funding.',
        },
      ],
    },
  ],
};

export default quiz43;