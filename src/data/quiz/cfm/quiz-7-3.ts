import type { QuizBank } from '../types';

export const quiz73: QuizBank = {
  id: 'quiz-7-3',
  questions: [
    {
      scenario: 'شكاوى متكررة من حساسية العيون والصداع في مبنى مكتبي حديث افتتح قبل أشهر.',
      scenarioEn: 'Repeated complaints of eye irritation and headaches in a modern office building opened a few months ago.',
      question: 'ما المصادر الأساسية التي يجب فحصها أولاً عند تشخيص تدهور جودة الهواء الداخلي (IAQ)؟',
      questionEn: 'Which primary sources should be examined first when diagnosing deteriorating indoor air quality (IAQ)?',
      difficulty: 'سهل',
      options: [
        {
          text: 'مواد البناء والمفروشات ذات الانبعاثات العالية (VOC)، وجودة التهوية، ومنتجات التنظيف والأجهزة المكتبية',
          textEn: 'The building materials and furnishings with high emissions (VOCs), the ventilation quality, and the cleaning products and office equipment',
          isCorrect: true,
          explanation: 'مصادر IAQ شائعة وقريبة: ما تخرجه المواد والأثاث والتنظيف والأجهزة؛ فإذا ساءت نوعية الهواء بدأ الفحص من الداخل القريب لا من تعديلات بعيدة.',
          explanationEn: 'The sources of IAQ problems are common and close: what materials, furniture, cleaning, and equipment emit; when air quality worsens, the examination starts from the nearby interior, not from distant modifications.',
        },
        {
          text: 'الاعتماد على المتوسط الحراري العام للمبنى دون قياس أي ملوث',
          textEn: 'Rely on the building\u2019s general thermal average without measuring any pollutant',
          isCorrect: false,
          explanation: 'المتوسط وحدَه لا يكشف ملوثات الهواء — القياس المباشر للملوثات والتهوية هو الأداة.',
          explanationEn: 'The average alone does not reveal the air pollutants — the direct measurement of the pollutants and ventilation is the tool.',
        },
        {
          text: 'تهوية مقصورة طوارئ تفتح مرة كل ستة أشهر فقط',
          textEn: 'An emergency-only ventilation that opens once every six months',
          isCorrect: false,
          explanation: 'التهوية إجراء يومي متواصل، لا حدث دوري بعيد — نظامها يراجع عند كل مبنى بحجم إشغاله.',
          explanationEn: 'Ventilation is a continuous daily process, not a remote periodic event — its system is reviewed for every building according to its occupancy.',
        },
        {
          text: 'إلقاء اللوم على الموظفين وإعطاءهم إجازات طويلة بشكل متكرر',
          textEn: 'Blame the employees and give them frequent long leaves',
          isCorrect: false,
          explanation: 'معالجة الشكوى تبدأ بالتشخيص الهندسي لا بتوزيع المسؤوليات خارج النظام.',
          explanationEn: 'Handling the complaint begins with engineering diagnosis, not with assigning responsibility outside the system.',
        },
      ],
    },
    {
      scenario: 'في غرفة اجتماعات مزدحمة بلغ قياس ثاني أكسيد الكربون مستوى مرتفعاً خلال ساعة، ويعود للانخفاض بعد الخروج.',
      scenarioEn: 'In a crowded meeting room, the carbon dioxide reading reached a high level within an hour and returns to a low level after leaving.',
      question: 'ما الإجراء الأصح مع هذه القراءة المتكررة؟',
      questionEn: 'What is the correct action for this recurring reading?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'زيادة تدفق الهواء الخارجي وضبط التهوية وفق معدلات الإشغال، ومتابعة القياس بعد التعديل',
          textEn: 'Increase the outdoor-air flow, adjust the ventilation to the occupancy rates, and follow up the measurement after the adjustment',
          isCorrect: true,
          explanation: 'ارتفاع CO₂ مع الإشغال مؤشر تهوية غير كافية — الحل ضبط التهوية (والمعيار المرجعي ASHRAE 62.1) ثم إعادة القياس.',
          explanationEn: 'Rising CO₂ under occupancy indicates insufficient ventilation — the solution is to adjust the ventilation (per the reference standard ASHRAE 62.1) and then re-measure.',
        },
        {
          text: 'تقليل عدد الحاضرين في الغرفة لا أكثر',
          textEn: 'Reduce the number of people in the room, nothing more',
          isCorrect: false,
          explanation: 'تخفيف الإشغال يخفف الأعراض لا يعالج الجذر؛ تصحيح نظام التهوية هو الأصل ويصحبه إعادة قياس.',
          explanationEn: 'Reducing the occupancy relieves the symptoms but does not cure the root; correcting the ventilation system is the essence, accompanied by re-measurement.',
        },
        {
          text: 'إحكام إغلاق النوافذ وزيادة التدفئة لتحسين الانبعاثات',
          textEn: 'Seal the windows tightly and increase the heating to improve the emissions',
          isCorrect: false,
          explanation: 'عكس المقصود تماماً في الحالة المدروسة؛ والتهوية الخارجية تنمي التخفيف لا الاحتباس.',
          explanationEn: 'The exact opposite of what the studied case calls for; outdoor ventilation enables dilution, not containment.',
        },
        {
          text: 'اعتبار القراءة طبيعية لأنها تنخفض بعد مغادرة الحاضرين',
          textEn: 'Consider the reading normal because it decreases after the attendees leave',
          isCorrect: false,
          explanation: 'انخفاضها بعد الإشغال دليل ارتباطها بتهوية غير كافية تحت الحمل، والتكرار يعالج لا يستهان به.',
          explanationEn: 'Its decrease after occupancy proves it is tied to insufficient ventilation under load, and the recurrence must be treated, not dismissed.',
        },
      ],
    },
    {
      scenario: 'كُلّف المبنى كمنطقة حديثة تجديد، وشكاوى العيون والصداع بدأت بعد تركيب أرضيات وجدران ومفروشات جديدة.',
      scenarioEn: 'The building was renovated as a recently renewed area, and the eye and headache complaints began after installing new floors, walls, and furnishings.',
      question: 'ما الإجراء الأكثر فعالية في شروط المباني الجديدة لضمان صحة إشغالها؟',
      questionEn: 'What is the most effective measure for new buildings to ensure healthy occupancy?',
      difficulty: 'صعب',
      options: [
        {
          text: 'اختيار مواد منخفضة الانبعاث (Low-VOC) من المصدر، وإجراء تفجير المبنى (Flush-Out) بتهوية مكثفة قبل دخول الشاغلين',
          textEn: 'Choose low-emission (low-VOC) materials at the source and run a building flush-out with intensive ventilation before the occupants move in',
          isCorrect: true,
          explanation: 'أفضل ممارسة مزدوجة: منع الملوث من المنشأ (المواد منخفضة الانبعاث) ثم تخفيف ما بقي بتفجير المبنى قبل الإشغال.',
          explanationEn: 'The best dual practice: prevent the pollutant at its origin (low-emission materials), then dilute what remains via the flush-out before occupancy.',
        },
        {
          text: 'الاكتفاء بفتح النوافذ أياماً قليلة بعد افتتاح المبنى واعتبار المشكلة منتهية',
          textEn: 'Just open the windows for a few days after opening the building and consider the problem over',
          isCorrect: false,
          explanation: 'تفجير المبنى يجري بتهوية مكثفة مقاسة بكمية هواء كافية ومعايير زمنية محددة قبل الإشغال، لا بفتح نوافذ قليلة الأيام.',
          explanationEn: 'The flush-out is conducted with intensive, measured ventilation with sufficient air volume and specified time criteria before occupancy, not by opening the windows for a few days.',
        },
        {
          text: 'تعليق معطّرات صناعية وزيادة التهوية الداخلية المغلقة فحسب',
          textEn: 'Hang air fresheners and merely increase the closed-loop internal ventilation',
          isCorrect: false,
          explanation: 'المعطّر يضيف ملوثات قد تفاقم الظروف — ولمعالجة الانبعاثات الجديدة يسبق تنظيفها أي معطر.',
          explanationEn: 'The freshener adds pollutants that may worsen the conditions — treating the new emissions precedes any freshener.',
        },
        {
          text: 'إزالة المفروشات الجديدة واستخدام المفروشات القديمة فقط دون مراجعة مصدر الشكوى',
          textEn: 'Remove the new furnishings and use only the old ones without reviewing the complaint source',
          isCorrect: false,
          explanation: 'الحل هندسي شامل (مواد + تهوية + قياس) لا يشتق من تفحص مفروش دون قراءة النظام.',
          explanationEn: 'The solution is comprehensive engineering (materials + ventilation + measurement), not derived from inspecting a piece of furniture without reading the system.',
        },
      ],
    },
  ],
};