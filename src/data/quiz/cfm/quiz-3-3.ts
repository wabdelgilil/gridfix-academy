import type { QuizBank } from '../types';

export const quiz33: QuizBank = {
  id: 'quiz-3-3',
  questions: [
    {
      scenario: 'يريد مقارنة استبدال مبرد مكلف بأي "أرخص" الشراء لكن أعلى صيانة، وبالمقابل خيار أعلى سعراً بعمر أطول وتشغيل أقل.',
      scenarioEn: 'A manager wants to compare replacing a chiller: one option that is "cheaper" to buy but higher in maintenance, versus a higher-priced option with a longer life and lower operation.',
      question: 'ما المقياس الصحيح للفصل بينهما؟',
      questionEn: 'What is the correct metric to decide between them?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تكلفة دورة الحياة (LCC) شاملة الشراء والتشغيل والصيانة والاستبدال على أفق ثابت',
          textEn: 'Life-cycle cost (LCC) covering purchase, operation, maintenance, and replacement over a fixed horizon',
          isCorrect: true,
          explanation: 'LCC يجمع كل التكاليف بكل سنوات العمر للخيارين على أفق مشترك فتقارن عادلاً.',
          explanationEn: 'LCC sums all costs over the full life years of both options on a shared horizon, so the comparison is fair.',
        },
        {
          text: 'سعر الشراء فقط لأن الأقل شراءً هو الربح',
          textEn: 'Purchase price only, because the cheapest to buy is the profit',
          isCorrect: false,
          explanation: 'نظرة اليوم فقط تخفي أكل التشغيل الأعلى وعمر الأصل الأقصر.',
          explanationEn: 'A today-only view hides the higher operating consumption and the shorter asset life.',
        },
        {
          text: 'اختيار الاسم التجاري الأعرق بلا أرقام',
          textEn: 'Choose the more prestigious brand without numbers',
          isCorrect: false,
          explanation: 'الشهرة لا تعوض قراراً مبنياً على الوفر الفعلي بعد بيانات كاملة.',
          explanationEn: 'Reputation does not replace a decision based on actual savings after full data.',
        },
        {
          text: 'قرار المدير باللود المباشر دون تحليل',
          textEn: "The manager's direct decision without analysis",
          isCorrect: false,
          explanation: 'يعتمد القرار الإداري تجوز — لكن مع مبررات ومقارنات مالية أولاً.',
          explanationEn: 'Managerial authority is accepted — but with financial justifications and comparisons first.',
        },
      ],
    },
    {
      scenario: 'مشروع توفير طاقة بترقية إضاءة تكلف 400 ألف ويوفر 95 ألف سنوياً.',
      scenarioEn: 'An energy-saving project through a lighting upgrade costs 400,000 and saves 95,000 annually.',
      question: 'كيف تحسب استرداد الاستثمار البسيط أعواماً؟',
      questionEn: 'How do you calculate the simple investment payback in years?',
      difficulty: 'متوسط',
      options: [
        {
          text: '400/95 = نحو 4.2 سنة (وقت الاسترداد Payback)',
          textEn: '400/95 = about 4.2 years (the payback period)',
          isCorrect: true,
          explanation: 'قسّم الاستثمار على التوفير السنوي — بساطة تعطي مؤشراً أولياً قبل خصم الزمن والفوائد.',
          explanationEn: 'Divide the investment by the annual saving — a simple early indicator before discounting time and interest.',
        },
        {
          text: '95/400 = 24% فقط إبحد نسبة',
          textEn: '95/400 = 24% only, an inverted ratio',
          isCorrect: false,
          explanation: 'النسبة المعكوسة لا تعطيك وقت الاسترداد؛ الصيغة الصحيحة هي الاستثمار ÷ التوفير السنوي.',
          explanationEn: 'The inverted ratio does not give the payback period; the correct formula is investment ÷ annual saving.',
        },
        {
          text: '400+95 = 495 هو الاسترداد',
          textEn: '400+95 = 495 is the payback',
          isCorrect: false,
          explanation: 'الجمع لا يصف متى تعود الأموال، بل مجرد رقم مزدوج بلا معنى.',
          explanationEn: 'Addition does not describe when the money returns; it is just a meaningless doubled figure.',
        },
        {
          text: 'لا حاجة لقياس لأن الترقية قرار جيد دائماً',
          textEn: 'No measurement is needed because the upgrade is always a good decision',
          isCorrect: false,
          explanation: 'كل استثمار يقاس: التوفير مرصود ومحقّق على أرض الواقع بعد التنفيذ.',
          explanationEn: 'Every investment is measured: savings are monitored and realized on the ground after implementation.',
        },
      ],
    },
    {
      scenario: 'عرضان لمشروع إحلال: أ أعماره 6 سنوات وبـ LCC أقل على 12 سنة، وب أعماره 4 سنين وسعره أقل الآن.',
      scenarioEn: 'Two bids for a replacement project: A has a 6-year life with a lower LCC over 12 years, and B has a 4-year life with a lower price now.',
      question: 'ما قرارك المالي الأرشد؟',
      questionEn: 'What is your most sound financial decision?',
      difficulty: 'صعب',
      options: [
        {
          text: 'عرض أ لأن LCC على الأفق المشترك أقل رغم سعره الأعلى الآن',
          textEn: 'Bid A, because its LCC over the shared horizon is lower despite its higher price now',
          isCorrect: true,
          explanation: 'LCC على أفق موحد يضمن اتخاذ القرار للمخزر الأطوال زمنية بعين الأصول، لا نظرة اللقطة.',
          explanationEn: 'LCC over a unified horizon ensures taking the decision for the longer term with the asset in view, not a snapshot outlook.',
        },
        {
          text: 'عرض ب دائماً لأنه الأرخص هنا والآن',
          textEn: 'Bid B always, because it is the cheapest here and now',
          isCorrect: false,
          explanation: 'الأرخص اليوم قد يتطلب استبدالات أكثر على الأفق نفسه (3 مقابل 2) وتشغيلاً أعلى — فيفقد ميزته.',
          explanationEn: 'The cheapest today may require more replacements over the same horizon (3 vs 2) and higher operation — losing its advantage.',
        },
        {
          text: 'اعتماد القرار على الرأي المباشر لأن الأرقام مملة',
          textEn: 'Rely on a direct opinion because the numbers are boring',
          isCorrect: false,
          explanation: 'الأحكام المالية تُبنى بالأرقام؛ الرأي وحده لا يبرر إنفاقاً رأسمالياً.',
          explanationEn: 'Financial judgments are built on numbers; opinion alone does not justify capital spending.',
        },
        {
          text: 'اعتماد رأي مهندس ميداني وحده دون أرقام',
          textEn: "Rely on a field engineer's opinion alone without numbers",
          isCorrect: false,
          explanation: 'خبرة الميدان مهمة هنا كعامل إضافي، لكنها لا تلغي الحساب المالي أبداً.',
          explanationEn: 'Field expertise matters here as an additional factor, but it never replaces the financial calculation.',
        },
      ],
    },
  ],
};

export default quiz33;