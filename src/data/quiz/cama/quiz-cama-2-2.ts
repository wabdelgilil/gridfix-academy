import type { QuizBank } from '../types';

export const quizCama22: QuizBank = {
  id: 'quiz-cama-2-2',
  questions: [
  {
    scenario: 'تعمل شركة طيران على خطة خمسية لأسطولها، وتريد تحديد الطلب على أسطول الطائرات وما هي الرحلات والوجهات المطلوبة وما يتطلبه ذلك من قدرات صيانة.',
    scenarioEn: 'An airline is working on a five-year plan for its fleet and wants to determine the demand on the aircraft fleet, which flights and destinations are required, and what maintenance capabilities that requires.',
    question: 'ما الأصل في تحديد "الطلب على الأصول" (Asset Demand) في منهجية التخطيط الاستراتيجي؟',
    questionEn: 'What is the principle in defining "asset demand" in the strategic planning methodology?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الطلب يُشتق من خطط النشاط المؤسسي والأهداف التجارية، وليس من قائمة الأصول الحالية.',
        textEn: 'Demand is derived from the organizational activity plans and business objectives, and not from the list of current assets.',
        isCorrect: true,
        explanation: 'المنهجية تبدأ من متطلبات الأعمال والنمو المستهدف لتحديد ما تحتاجه المنشأة من أصول وقدرات، ثم يُقارن ذلك بالأصول القائمة لتحديد الفجوة.',
        explanationEn: 'The methodology starts from business requirements and targeted growth to determine what assets and capabilities the organization needs, then compares that with the existing assets to identify the gap.',
      },
      {
        text: 'الطلب يُحسب من عدد الأصول الموجودة مسبقاً في حظيرة الصيانة.',
        textEn: 'Demand is calculated from the number of assets already present in the maintenance hangar.',
        isCorrect: false,
        explanation: 'الأصول الحالية تعبّر عن الوضع الراهن، والطلب يحدد الوضع المطلوب مستقبلاً بناء على أهداف المنظمة.',
        explanationEn: 'The current assets express the present state, and demand defines the future required state based on the organization\u2019s objectives.',
      },
      {
        text: 'الطلب يعادل ميزانية الصيانة السنوية المقترحة من القسم الفني.',
        textEn: 'Demand equals the annual maintenance budget proposed by the technical department.',
        isCorrect: false,
        explanation: 'الميزانية أداة مالية لاحقة، والطلب يُحدد المحتوى الفني المطلوب قبل ترجمته إلى نفقات.',
        explanationEn: 'The budget is a subsequent financial tool, and demand defines the required technical content before it is translated into expenditure.',
      },
      {
        text: 'الطلب ثابت مسبقاً في المعايير الدولية ولا يختلف من منشأة لأخرى.',
        textEn: 'Demand is predetermined in international standards and does not vary from one organization to another.',
        isCorrect: false,
        explanation: 'الطلب خاص بسياق كل منشأة وأهدافها، لا قيمة ثابتة قياسية موحدة.',
        explanationEn: 'Demand is specific to each organization\u2019s context and objectives, not a fixed uniform standard value.',
      }
    ]
  },
  {
    scenario: 'تخطط شركة صناعية للمشروبات لاستغلال قدرات خطوط التعبئة في العام القادم، وتقارن بين خيارين للتوسعة: خط جديد كامل، أو استغلال الطاقات الخاملة في الأوقات الموسمية.',
    scenarioEn: 'A beverage manufacturing company plans to exploit the capacities of its filling lines next year and compares two expansion options: a complete new line, or using the idle capacities during seasonal periods.',
    question: 'أي أسلوب يعكس بشكل صحيح "التخطيط المبني على المخاطر" (Risk-Based Planning) في هذه المقارنة؟',
    questionEn: 'Which approach correctly reflects "risk-based planning" in this comparison?',
    difficulty: 'صعب',
    options: [
      {
        text: 'اختيار الخيار الذي يوازن بين تكلفة التوسعة واحتمال انخفاض الطلب الموسمي وأثر ذلك على رأس المال.',
        textEn: 'Choosing the option that balances the expansion cost, the probability of seasonal demand decline, and the impact of that on capital.',
        isCorrect: true,
        explanation: 'التخطيط المبني على المخاطر يقيّم سيناريوهات الطلب باحتمالاتها وأثرها المالي، ويختار ما يحقق التوازن الأمثل بين الكلفة والمخاطرة، لا الخيار الأرخص فحسب.',
        explanationEn: 'Risk-based planning evaluates demand scenarios by their probabilities and financial impact, and chooses what achieves the optimal balance between cost and risk, not just the cheapest option.',
      },
      {
        text: 'اختيار الخط الأرخص في تكلفة الشراء بغض النظر عن الموسمية.',
        textEn: 'Choosing the line that is cheapest in purchase cost regardless of seasonality.',
        isCorrect: false,
        explanation: 'الإغفال عن احتمال الطلب يهمل عنصر المخاطر الجوهري في قرار التخطيط.',
        explanationEn: 'Overlooking the demand probability neglects the essential risk element in the planning decision.',
      },
      {
        text: 'تجاهل سيناريوهات الطلب والاكتفاء بالأرقام التاريخية الثابتة.',
        textEn: 'Ignoring the demand scenarios and being satisfied with the fixed historical figures.',
        isCorrect: false,
        explanation: 'الأرقام التاريخية وحدها لا تصمد أمام تحولات السوق، والتخطيط المبني على المخاطر يستشرف سيناريوهات متعددة.',
        explanationEn: 'Historical figures alone do not hold up against market shifts, and risk-based planning anticipates multiple scenarios.',
      },
      {
        text: 'اعتماد قرار واحد نمطي يناسب كل السيناريوهات دون تمايز.',
        textEn: 'Adopting a single standard decision that fits all scenarios without differentiation.',
        isCorrect: false,
        explanation: 'الأسلوب المرن القائم على المخاطر يتمايز بين الحالات وفق احتمالها وأثرها.',
        explanationEn: 'The flexible risk-based approach differentiates between situations according to their probability and impact.',
      }
    ]
  },
  {
    scenario: 'ترغب مدينة جامعية في ربط دورة التخطيط الاستراتيجي لإدارة أصول المباني والمرافق بدورة التخطيط العام لجامعتها، بحيث تترجم أهداف الجامعة إلى خطط أصول.',
    scenarioEn: 'A university city wants to link the strategic planning cycle for managing the assets of buildings and facilities with the general planning cycle of its university, so that the university objectives are translated into asset plans.',
    question: 'ما الترتيب الصحيح في دورة التخطيط الاستراتيجي لإدارة الأصول؟',
    questionEn: 'What is the correct order in the strategic planning cycle for asset management?',
    difficulty: 'سهل',
    options: [
      {
        text: 'أهداف المنظمة ← توقعات الطلب على الأصول ← خطة إدارة الأصول ← تخصيص الموارد ← المراجعة والتحديث.',
        textEn: 'Organization objectives ← asset demand forecasts ← asset management plan ← resource allocation ← review and update.',
        isCorrect: true,
        explanation: 'تبدأ الدورة من أهداف النشاط المؤسسي ثم تحدد الطلب ثم تبني الخطة وتخصص الموارد وتخضع للمراجعة الدورية، فينسجم التخطيط الاستراتيجي العام مع خطط الأصول.',
        explanationEn: 'The cycle starts from the organizational activity objectives, then defines demand, then builds the plan, allocates resources, and undergoes periodic review, keeping the general strategic planning aligned with the asset plans.',
      },
      {
        text: 'قائمة الأصول الحالية ← الميزانية ← الأهداف، دون مراجعة دورية.',
        textEn: 'Current asset list ← budget ← objectives, without periodic review.',
        isCorrect: false,
        explanation: 'البدء من الأرشيف المالي دون اشتقاق الطلب من الأهداف يجعل الخطة تلقائية لا استراتيجية.',
        explanationEn: 'Starting from the financial archive without deriving demand from objectives makes the plan automatic, not strategic.',
      },
      {
        text: 'خطة إدارة الأصول أولاً ثم تُفرض عليها أهداف المنظمة لاحقاً.',
        textEn: 'The asset management plan first, then the organization objectives are imposed on it later.',
        isCorrect: false,
        explanation: 'الاتجاه صعودي من أهداف الأعمال إلى خطة الأصول، وليس العكس.',
        explanationEn: 'The direction is upward from business objectives to the asset plan, not the reverse.',
      },
      {
        text: 'المراجعة تتم مرة واحدة في نهاية الدورة ولا تعاد.',
        textEn: 'The review is done once at the end of the cycle and is not repeated.',
        isCorrect: false,
        explanation: 'الدورة مستمرة دورياً، والمراجعة والتحديث عنصر أصيل يتكرر كل دورة.',
        explanationEn: 'The cycle continues periodically, and review and update are an essential element repeated every cycle.',
      }
    ]
  }
  ],
};

export default quizCama22;