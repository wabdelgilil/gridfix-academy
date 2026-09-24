import type { QuizBank } from '../types';

export const quiz91: QuizBank = {
  id: 'quiz-9-1',
  questions: [
    {
      scenario: 'مدير جديد يعرض لوحة مؤشرات تعرض 47 مقياساً على شاشة واحدة، فيشعر القادة بالتشويش بدل الوضوح.',
      scenarioEn: 'A new manager presents a dashboard showing 47 metrics on a single screen, and leaders feel confusion instead of clarity.',
      question: 'ما المبدأ الصحيح الذي يصلح هذه اللوحة؟',
      questionEn: 'What correct principle fixes this dashboard?',
      difficulty: 'سهل',
      options: [
        {
          text: 'مؤشرات قليلة صادقة تختار لارتباطها المباشر بأهداف المنشأة، وتُفصل لوحات فرعية لتفاصيل التشغيل',
          textEn: 'A few honest KPIs chosen for their direct link to facility goals, with separate sub-dashboards for operational details',
          isCorrect: true,
          explanation: 'التركيز مبدأ: كل مؤشر زائد يسرق الاهتمام من القليل الحاسم، والتفاصيل تذهب للوحة التطبيق لا للقيادة.',
          explanationEn: 'Focus is a principle: every extra KPI steals attention from the few decisive ones, and details go to the operational dashboard, not to leadership.',
        },
        {
          text: 'عدد المؤشرات يعكس الجدية مهما كثرت الأرقام',
          textEn: 'The number of metrics reflects seriousness no matter how many numbers there are',
          isCorrect: false,
          explanation: 'الجدية في إدارة قلة صادقة؛ التنوع المفرط يحجب الأثر الحقيقي ولا يزيد الوضوح.',
          explanationEn: 'Seriousness lies in managing a few honest ones; excessive variety hides the real impact and does not add clarity.',
        },
        {
          text: 'مراعاة كل فريق بمقياس واحد على الأقل إلزام',
          textEn: 'It is mandatory to give each team at least one metric',
          isCorrect: false,
          explanation: 'اللوحة خدمة قرار لا تصويت فرق؛ المؤشر لا يستحق مكانه ما لم يمثل هدفاً ذات قيمة.',
          explanationEn: 'A dashboard serves decisions, not a team vote; a metric does not deserve its place unless it represents a valuable goal.',
        },
        {
          text: 'استبدال القياس بأرقام الحدس والتوقعات الأسهل',
          textEn: 'Replace measurement with the easier numbers of intuition and expectations',
          isCorrect: false,
          explanation: 'تخمين الأرقام يقطع الثقة والقرار؛ صدق المصدر والقابلية للتدقيق شرطا أي مؤشر.',
          explanationEn: 'Guessing numbers destroys trust and decisions; source integrity and auditability are conditions of any metric.',
        },
      ],
    },
    {
      scenario: 'ارتفع مؤشر كلفة الصيانة للقدم المربع 20% هذا الشهر، وکانت مؤشرات الإنجاز والرضا ثابتة.',
      scenarioEn: 'The maintenance cost per square foot KPI rose 20% this month, while completion and satisfaction indicators remained stable.',
      question: 'ما الخطوة الأرجح الصالحة قبل إصدار حكم متسرع؟',
      questionEn: 'What is the most likely sound step before issuing a hasty judgment?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحليل السبب: هل دفعة أعمال استثنائية أم انحراف حقيقي؟ ثم القرار ببيانات لا بانطباع الشهر واحد',
          textEn: 'Analyze the cause: is it an exceptional batch of work or a real deviation? Then decide with data, not a one-month impression',
          isCorrect: true,
          explanation: 'القاعدة فرق الاتجاه عن الحادث؛ قراءة واحدة لا تكفي، وتفصيل السبب يمنع قراراً خاطئاً.',
          explanationEn: 'The rule is to distinguish the trend from the incident; a single reading is not enough, and detailing the cause prevents a wrong decision.',
        },
        {
          text: 'عقد الأمر مؤكد وإلغاء جميع برامج الصيانة الوقائية فوراً',
          textEn: 'Consider it confirmed and cancel all preventive maintenance programs immediately',
          isCorrect: false,
          explanation: 'إلغاء الوقائية يضاعف المشاكل على المدى الطويل؛ الحكم المبكر يزيد الخطر ولا يعالجه.',
          explanationEn: 'Canceling preventive maintenance multiplies long-term problems; an early verdict increases the risk rather than fixing it.',
        },
        {
          text: 'التنحى: إخفاء المؤشر الفاشل عن تقرير القيادة',
          textEn: 'Disappear it: hide the failing metric from the leadership report',
          isCorrect: false,
          explanation: 'الإخفاء من أخطر ممارسات الإدارة؛ المؤشر الشبحي يمنع التصحيح المبكر ويدمر المصداقية.',
          explanationEn: 'Hiding is one of the most dangerous management practices; a ghost metric prevents early correction and destroys credibility.',
        },
        {
          text: 'رفع سعر العقد فوراً لتعويض الزيادة مهما كانت الأسباب',
          textEn: 'Immediately raise the contract price to offset the increase whatever the causes',
          isCorrect: false,
          explanation: 'الرفع يقرر بلا تشخيص؛ الأسباب التشغيلية تُعالج أولاً وقرارات الأسعار آخر الحسبان.',
          explanationEn: 'Raising decides without diagnosis; operational causes are addressed first and pricing decisions come last.',
        },
      ],
    },
    {
      scenario: 'فريق يصوغ مؤشراً طموحاً «رضا لا يقل عن 10/10 دائماً» بدون تعريف أو تواتر أو مسؤول.',
      scenarioEn: 'A team formulates an ambitious KPI of "satisfaction never below 10/10" without a definition, frequency, or owner.',
      question: 'ما الذي ينتقده مدقق أداء متمرس في هذا الصياغة تحديداً؟',
      questionEn: 'What would an experienced performance auditor criticize specifically in this formulation?',
      difficulty: 'صعب',
      options: [
        {
          text: 'غياب مكونات المؤشر الكاملة: تعريف القياس، الأفق، العينة، المسؤول، ومسار التصحيح',
          textEn: 'The absence of the complete KPI components: measurement definition, time horizon, sample, owner, and corrective path',
          isCorrect: true,
          explanation: 'المؤشر الحقيقي يُسأل عنه: ماذا نقيس وبماذا وكيف ومتى ومن يقف خلفه وما بعد القياس البارد.',
          explanationEn: 'A real metric answers: what we measure, how, when, who owns it, and what follows the raw measurement.',
        },
        {
          text: 'اختيار «الرضا» ظاهر لأنه لا يقاس بالأرقام أبداً',
          textEn: 'Choose "satisfaction" just because it is never measurable in numbers',
          isCorrect: false,
          explanation: 'الرضا يقاس باستطلاعات منهجية ذهبية معروفة؛ العيب في الصياغة الناقصة لا في احتمال الموضوع.',
          explanationEn: 'Satisfaction is measured through recognized, methodical surveys; the flaw is in the incomplete formulation, not in the feasibility of the topic.',
        },
        {
          text: 'الاكتفاء بمؤشر واحد متعدد المستخدمين يكفي كل الحالات',
          textEn: 'A single multi-purpose metric suffices for all cases',
          isCorrect: false,
          explanation: 'المؤشر الواحد لا يغطي إلا بعداً واحداً، ومجموعة قليلة موزونة أفضل من حجر واحد.',
          explanationEn: 'A single metric covers only one dimension, and a small balanced set is better than a single stone.',
        },
        {
          text: 'تلك الصياغة مثالية تماماً ولا يحتاجها نسبة تحسين',
          textEn: 'That formulation is perfectly fine and needs no improvement ratio',
          isCorrect: false,
          explanation: 'المؤشر بلا أفق وقياس لا يدار ولا يتحكم به؛ النسبة العليا الدائمة غير مأمونة البقاء.',
          explanationEn: 'A metric without a horizon and measurement cannot be managed or controlled; a permanent ceiling ratio is not sustainable.',
        },
      ],
    },
  ],
};