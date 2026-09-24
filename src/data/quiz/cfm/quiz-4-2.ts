import type { QuizBank } from '../types';

export const quiz42: QuizBank = {
  id: 'quiz-4-2',
  questions: [
    {
      scenario: 'أظهر مسح ذهنية أن 60% من الموظفين يرون المنشأة "جميلة لكن غير مريحة" بسبب الضوضاء والعشوائية في الفضاء المشترك.',
      scenarioEn: 'A mindset survey shows that 60% of employees see the facility as "beautiful but uncomfortable" because of noise and disorder in the shared space.',
      question: 'كيف يربط مدير المنشأة الرفاهية بمتغيراته القابلة للإدارة؟',
      questionEn: 'How does the facility manager connect well-being to the variables under their control?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'إشراك الفريق في قياس العوامل (ضوضاء، إضاءة، مساحات) لوضع تحسينات قابلة للقياس',
          textEn: 'Engage the team in measuring the factors (noise, lighting, spaces) to establish measurable improvements',
          isCorrect: true,
          explanation: 'الرفاهية ممراتها ملموسة وقابلة للقياس — المشاركة في القياس تصنع قبول الحلول.',
          explanationEn: 'Well-being has tangible, measurable pathways — participation in measurement builds acceptance of solutions.',
        },
        {
          text: 'إلغاء الفضاء المشترك لأن الشكوى منه',
          textEn: 'Remove the shared space because it is the source of the complaint',
          isCorrect: false,
          explanation: 'إزالة المكان لا تعالج الضوضاء بل تُحول المشكلة إلى مكان آخر.',
          explanationEn: 'Removing the place does not treat the noise; it moves the problem elsewhere.',
        },
        {
          text: 'الاعتماد على آراء القادة وحدهم دون بيانات',
          textEn: 'Rely only on leaders\u2019 opinions without data',
          isCorrect: false,
          explanation: 'انطباع القيادة لا يمثل الحالة الكلية للفريق.',
          explanationEn: 'Leadership impressions do not represent the overall condition of the team.',
        },
        {
          text: 'قول "الرفاهية مسؤولية الموارد البشرية" والتوقف',
          textEn: 'Say "well-being is HR\u2019s responsibility" and stop',
          isCorrect: false,
          explanation: 'الرفاهية تنسيقية بين الأقسام؛ مدير المنشأة يملك أدوات البيئة الحقيقية.',
          explanationEn: 'Well-being is cross-departmental; the facility manager holds the real environmental tools.',
        },
      ],
    },
    {
      scenario: 'أظهرت البيانات أن فرقاً معيناً أعلت إنتاجيته بعد تحسين الإضاءة والضوضاء في مساحته، وطلب المهندس توسيعها لباقي الطوابق.',
      scenarioEn: 'Data shows a particular team raised its productivity after improving lighting and noise in its space, and the engineer asks to roll it out to the remaining floors.',
      question: 'ما الخطوة الرشيقة قبل التعميم؟',
      questionEn: 'What is the agile step before rolling out?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تعميم التجربة على شريحة أوسع مع قياس قبل/بعد وثائقياً ثم اتخاذ القرار',
          textEn: 'Roll the pilot out to a wider slice with documented before/after measurement, then decide',
          isCorrect: true,
          explanation: 'تحسين مقياس صغير تُصدَّق قبل التوسع: قياس أثر حقيقي يبرر الاستثمار الشامل.',
          explanationEn: 'A small-scale improvement is validated before scaling: measuring real impact justifies the full investment.',
        },
        {
          text: 'التعميم الفوري لأن التجربة نجحت في فصل واحد',
          textEn: 'Roll out immediately because the pilot succeeded in one department',
          isCorrect: false,
          explanation: 'نتيجة وحدة قد لا تعمّم — ظروف الوجيه الأخرى تختلف والعينة صغيرة.',
          explanationEn: 'A single unit\u2019s result may not generalize — other departments differ and the sample is small.',
        },
        {
          text: 'إيقاف الفكرة لأنها تشجع "غير معتادين"',
          textEn: 'Stop the idea because it encourages "unconventional" people',
          isCorrect: false,
          explanation: 'إيقاف تحسين مُثبت بمبرر وهمي يضيع قيمة قابلة للقياس.',
          explanationEn: 'Stopping a proven improvement on a false pretext wastes measurable value.',
        },
        {
          text: 'تطبيقه خفية دون معلومات تحسبا للاعتراض',
          textEn: 'Apply it covertly without information to avoid objections',
          isCorrect: false,
          explanation: 'التحسين الشفاف بالمشاركة يبني ثقة؛ السرية تولد المقاومة.',
          explanationEn: 'Transparent improvement with participation builds trust; secrecy breeds resistance.',
        },
      ],
    },
    {
      scenario: 'تحتاج قياس "مفهوم أن المبنى يخدم الناس" لبرنامج إدارة مرافق ناجح (قياس بعدي للمشاريع البيئية).',
      scenarioEn: 'You need to measure "the concept that the building serves people" for a successful facility management program (post-project measurement of environmental initiatives).',
      question: 'ما اتصال المؤشر الأقوى بهذا القياس؟',
      questionEn: 'Which indicator link is strongest for this measurement?',
      difficulty: 'صعب',
      options: [
        {
          text: 'الربط بين تحسينات البيئة (ضوضاء/إضاءة/مساحة) والمؤشرات التشغيلية والرضا والإنتاج',
          textEn: 'Link environmental improvements (noise/lighting/space) to operational KPIs, satisfaction, and output',
          isCorrect: true,
          explanation: 'القرار يُقر بالبيانات المربوطة: تحسين البيئة + رضا + إنتاج = مبرر استثماري كامل.',
          explanationEn: 'Decisions are made on linked data: environment improvement + satisfaction + output = a complete investment case.',
        },
        {
          text: 'سؤال واحد عاطفي "هل تحب المبنى؟" فقط',
          textEn: 'A single emotional question, "Do you love the building?" only',
          isCorrect: false,
          explanation: 'الانطباع المقطوع لا يعطي إشارة تنفيذية قابلة للتعقب للتغييرات.',
          explanationEn: 'A clipped impression gives no actionable, trackable signal for changes.',
        },
        {
          text: 'الاكتفاء بمقارنة جيران المبنى مالياً',
          textEn: 'Rely only on comparing neighboring buildings financially',
          isCorrect: false,
          explanation: 'قيمة الاستثمار الداخلي لا تُشتق من المقارنة الخارجية وحدها.',
          explanationEn: 'Internal investment value is not derived from external comparison alone.',
        },
        {
          text: 'قفل الملف لفراغ أدوات القياس',
          textEn: 'Close the file due to a lack of measurement tools',
          isCorrect: false,
          explanation: 'القياس أعمق من الأداة؛ البيانات الحالية بالمؤشرات توضح أكثر من التوقف.',
          explanationEn: 'Measurement is deeper than the tool; current indicator data clarifies more than stopping.',
        },
      ],
    },
  ],
};

export default quiz42;