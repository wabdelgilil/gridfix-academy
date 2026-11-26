import type { QuizBank } from '../types';

export const quizPmp61: QuizBank = {
  id: 'quiz-pmp-6-1',
  questions: [
    {
      scenario: 'فريق يجمع قائمة بالتهديدات والفرص المحتملة دون تقييم أولاً.',
      question: 'ما أول أداة مناسبة؟',
      difficulty: 'سهل',
      caseSetId: 'case-pmp-6-1-risk-register',
      sharedStem:
        'مشروع توريد نظام يعمل في بيئة مضطربة، وفريقه يبني سجل مخاطر أولياً قبل تحديد الاستجابات.\n\nمقتطف من السجل:\n\n| الخطر | الاحتمال | الأثر | القيمة المتوقعة |\n| --- | --- | --- | --- |\n| تأخر المورد | 0.6 | 20 يوماً | 12 يوماً |\n| تقلب السعر | 0.5 | 40 ألف دولار | 20 ألف دولار |\n\nتُطرح الأسئلة الأربعة التالية على هذه الحالة نفسها: حدد الأداة المناسبة لكل مرحلة من التحديد والترتيب والتكميم والتحليل.',
      sharedStemEn:
        'A system procurement project in a volatile environment; the team is building an initial risk register before planning responses.\n\nRegister extract:\n\n| Risk | Probability | Impact | Expected value |\n| --- | --- | --- | --- |\n| Supplier delay | 0.6 | 20 days | 12 days |\n| Price fluctuation | 0.5 | $40k | $20k |\n\nThe following four questions use the same case: choose the right tool for identification, ranking, quantification, and analysis.',
      options: [
        {
          text: 'تحديد المخاطر (Identify risks) وتسجيلها في سجل المخاطر.',
          isCorrect: true,
          explanation: 'التحديد يسبق التحليل، والسجل يوثق كل خطر.',
        },
        {
          text: 'تخطيط الاستجابة مباشرة.',
          isCorrect: false,
          explanation: 'لا يمكن التخطيط قبل الفهم والتحليل.',
        },
        {
          text: 'إغلاق المشروع.',
          isCorrect: false,
          explanation: 'المخاطر جزء طبيعي من أي مشروع.',
        },
        {
          text: 'إخفاء القائمة.',
          isCorrect: false,
          explanation:
            'إخفاء القائمة يخالف الشفافية ويمنع التحليل؛ خطوة البداية تحديد المخاطر وتسجيلها في السجل.',
        },
      ],
    },
    {
      scenario: 'خطر احتماله مرتفع وأثره كبير على الجدول.',
      question: 'أي أداة ترتيب تناسب ذلك؟',
      difficulty: 'متوسط',
      caseSetId: 'case-pmp-6-1-risk-register',
      sharedStem:
        'مشروع توريد نظام يعمل في بيئة مضطربة، وفريقه يبني سجل مخاطر أولياً قبل تحديد الاستجابات.\n\nمقتطف من السجل:\n\n| الخطر | الاحتمال | الأثر | القيمة المتوقعة |\n| --- | --- | --- | --- |\n| تأخر المورد | 0.6 | 20 يوماً | 12 يوماً |\n| تقلب السعر | 0.5 | 40 ألف دولار | 20 ألف دولار |\n\nتُطرح الأسئلة الأربعة التالية على هذه الحالة نفسها: حدد الأداة المناسبة لكل مرحلة من التحديد والترتيب والتكميم والتحليل.',
      sharedStemEn:
        'A system procurement project in a volatile environment; the team is building an initial risk register before planning responses.\n\nRegister extract:\n\n| Risk | Probability | Impact | Expected value |\n| --- | --- | --- | --- |\n| Supplier delay | 0.6 | 20 days | 12 days |\n| Price fluctuation | 0.5 | $40k | $20k |\n\nThe following four questions use the same case: choose the right tool for identification, ranking, quantification, and analysis.',
      options: [
        {
          text: 'مصفوفة الاحتمال والأثر (Probability-impact matrix).',
          isCorrect: true,
          explanation: 'ترتب المخاطر حسب الأولوية لتركيز الجهد.',
        },
        {
          text: 'مصفوفة RACI.',
          isCorrect: false,
          explanation: 'تحدد الأدوار لا أولوية المخاطر.',
        },
        {
          text: 'مخطط جانت.',
          isCorrect: false,
          explanation: 'يوضح الجدول لا المخاطر.',
        },
        {
          text: 'قائمة تحقق جودة.',
          isCorrect: false,
          explanation:
            'قائمة تحقق الجودة تفحص مطابقة المخرجات للمعايير، لا ترتيب المخاطر؛ الترتيب يتم بمصفوفة الاحتمال والأثر.',
        },
      ],
    },
    {
      scenario: 'خطر مالي متوقع قيمته 40 ألف دولار بطريقة احتمالية.',
      question: 'ما المقصود بالقيمة المتوقعة (EMV)؟',
      difficulty: 'صعب',
      caseSetId: 'case-pmp-6-1-risk-register',
      sharedStem:
        'مشروع توريد نظام يعمل في بيئة مضطربة، وفريقه يبني سجل مخاطر أولياً قبل تحديد الاستجابات.\n\nمقتطف من السجل:\n\n| الخطر | الاحتمال | الأثر | القيمة المتوقعة |\n| --- | --- | --- | --- |\n| تأخر المورد | 0.6 | 20 يوماً | 12 يوماً |\n| تقلب السعر | 0.5 | 40 ألف دولار | 20 ألف دولار |\n\nتُطرح الأسئلة الأربعة التالية على هذه الحالة نفسها: حدد الأداة المناسبة لكل مرحلة من التحديد والترتيب والتكميم والتحليل.',
      sharedStemEn:
        'A system procurement project in a volatile environment; the team is building an initial risk register before planning responses.\n\nRegister extract:\n\n| Risk | Probability | Impact | Expected value |\n| --- | --- | --- | --- |\n| Supplier delay | 0.6 | 20 days | 12 days |\n| Price fluctuation | 0.5 | $40k | $20k |\n\nThe following four questions use the same case: choose the right tool for identification, ranking, quantification, and analysis.',
      options: [
        {
          text: 'احتمال الحدوث مضروباً في الأثر المالي.',
          isCorrect: true,
          explanation: 'EMV يساعد على ترتيب المخاطر عند توفر أرقام.',
        },
        {
          text: 'التكلفة الأعلى ممكنة.',
          isCorrect: false,
          explanation: 'القيمة المتوقعة ليست أسوأ سيناريو.',
        },
        {
          text: 'الميزانية المتبقية.',
          isCorrect: false,
          explanation: 'الميزانية ليست احتمالاً مضروباً بالأثر.',
        },
        {
          text: 'احتياطي الطوارئ دائماً.',
          isCorrect: false,
          explanation: 'الاحتياطي يُبنى على تحليل المخاطر، لكنه ليس EMV.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد فحص نقاط القوة والضعف والفرص والتهديدات.',
      question: 'أي تقنية مناسبة؟',
      difficulty: 'متوسط',
      caseSetId: 'case-pmp-6-1-risk-register',
      sharedStem:
        'مشروع توريد نظام يعمل في بيئة مضطربة، وفريقه يبني سجل مخاطر أولياً قبل تحديد الاستجابات.\n\nمقتطف من السجل:\n\n| الخطر | الاحتمال | الأثر | القيمة المتوقعة |\n| --- | --- | --- | --- |\n| تأخر المورد | 0.6 | 20 يوماً | 12 يوماً |\n| تقلب السعر | 0.5 | 40 ألف دولار | 20 ألف دولار |\n\nتُطرح الأسئلة الأربعة التالية على هذه الحالة نفسها: حدد الأداة المناسبة لكل مرحلة من التحديد والترتيب والتكميم والتحليل.',
      sharedStemEn:
        'A system procurement project in a volatile environment; the team is building an initial risk register before planning responses.\n\nRegister extract:\n\n| Risk | Probability | Impact | Expected value |\n| --- | --- | --- | --- |\n| Supplier delay | 0.6 | 20 days | 12 days |\n| Price fluctuation | 0.5 | $40k | $20k |\n\nThe following four questions use the same case: choose the right tool for identification, ranking, quantification, and analysis.',
      options: [
        {
          text: 'تحليل SWOT.',
          isCorrect: true,
          explanation:
            'يفحص العوامل الداخلية والخارجية لاستخراج المخاطر والفرص.',
        },
        {
          text: 'تحليل PESTLE.',
          isCorrect: false,
          explanation: 'يفحص البيئة الخارجية الكلية، لا نقاط القوة الداخلية.',
        },
        {
          text: 'EVM.',
          isCorrect: false,
          explanation:
            'EVM يقيس الانحراف في التكلفة والجدول، لا نقاط القوة والضعف؛ تحليل SWOT هو الأداة المناسبة هنا.',
        },
        {
          text: 'RACI.',
          isCorrect: false,
          explanation:
            'RACI يحدد من المسؤول والمستشار والمُبلَّغ، لكنه لا يفحص نقاط القوة والضعف؛ تلك مهمة SWOT.',
        },
      ],
    },
  ],
};

export default quizPmp61;
