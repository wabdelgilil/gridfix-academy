import type { QuizBank } from '../types';

export const quizCama51: QuizBank = {
  id: 'quiz-cama-5-1',
  questions: [
  {
    scenario: 'تدرس شركة عقارية استبدال نظام تكييف مركزي بمشروع تحسين كلفة 500 ألف ريال، وتوقعت التدفقات النقدية الصافية السنوية عبر عشر سنوات بعد خصمها بمعدل العائد المطلوب.',
    scenarioEn: 'A real estate company is studying replacing a central air-conditioning system with an improvement project costing SAR 500,000, and it projected the annual net cash flows over ten years, discounted at the required rate of return.',
    question: 'ما المعنى الصحيح لصافي القيمة الحالية (NPV) الإيجابي لهذا المشروع؟',
    questionEn: 'What is the correct meaning of a positive Net Present Value (NPV) for this project?',
    difficulty: 'سهل',
    options: [
      {
        text: 'المشروع يضيف قيمة إيجابية بالأسعار المعادلة لليوم ويتجاوز العائد المطلوب، فيُقبل الاستثمار عادةً.',
        textEn: 'The project adds positive value in today\'s equivalent terms and exceeds the required return, so the investment is usually accepted.',
        isCorrect: true,
        explanation: 'NPV يحسب الفرق بين قيمة التدفقات المستقبلية المخصومة والاستثمار الحالي؛ وإيجابيته تعني أن العائد يتجاوز كلفة رأس المال والبديل المرفوض.',
        explanationEn: 'NPV calculates the difference between the discounted future cash flows and the current investment; a positive value means the return exceeds the cost of capital and the rejected alternative.',
      },
      {
        text: 'المشروع خاسر حتماً لأن الأرقام المخصومة أقل من الاسمية.',
        textEn: 'The project is a certain loss because the discounted figures are lower than the nominal ones.',
        isCorrect: false,
        explanation: 'الخصم يعيد التدفقات لقيمتها الحالية بمنطق زمني، والإيجابي صلاحه للقبول بالرغم من أنه بقي أقل من الاسمية.',
        explanationEn: 'Discounting restates flows at their present value by a time logic, and a positive result is suitable for acceptance even though it remained below the nominal value.',
      },
      {
        text: 'المشروع محايد تماماً ولا يوصى بقبوله ولا برفضه.',
        textEn: 'The project is completely neutral, and it is neither recommended to accept nor to reject it.',
        isCorrect: false,
        explanation: 'المحايد يعني NPV صفراً، والإيجابي يعني قيمة مضافة فعلية بعد العائد المطلوب.',
        explanationEn: 'Neutral means an NPV of zero, while positive means real added value beyond the required return.',
      },
      {
        text: 'يلزم مراجعة الأرقام لأن NPV الإيجابي خطأ في مثل هذه المشاريع.',
        textEn: 'The figures must be reviewed because a positive NPV is an error in such projects.',
        isCorrect: false,
        explanation: 'NPV الإيجابي ليس خطأً؛ بل نتيجة صحيحة لمشروع عائداته تفوق تكلفته المخصومة.',
        explanationEn: 'A positive NPV is not an error; it is a correct result for a project whose returns exceed its discounted cost.',
      }
    ]
  },
  {
    scenario: 'قارنت شركة إدارة مرافق بين مشروعين متنافسين على الميزانية: المشروع الأول أعطى معدل العائد الداخلي (IRR) عالياً لكنه بقيمة NPV أقل، والثاني أعطى NPV أعلى بمعدل IRR أدنى.',
    scenarioEn: 'A facility management company compared two projects competing for the budget: the first project gave a high Internal Rate of Return (IRR) but a lower NPV, and the second gave a higher NPV with a lower IRR.',
    question: 'كيف تحسم الشركة المفاضلة عند تعارض IRR وNPV؟',
    questionEn: 'How does the company settle the comparison when IRR and NPV conflict?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الاعتماد على NPV الأعلى لأنه يقيس القيمة المضافة الحقيقية للمنشأة بأرقام مطلقة.',
        textEn: 'Relying on the higher NPV because it measures the real added value to the organization in absolute numbers.',
        isCorrect: true,
        explanation: 'عند تعارض المؤشرين تتفوق قاعدة NPV لأنها توضح القيمة المطلقة المضافة بالمبلغ، بينما IRR يهتم بالنسبة فقط وقد يلوي قرار المقاييس المختلفة.',
        explanationEn: 'When the two indicators conflict, the NPV rule prevails because it shows the absolute value added in amount, while IRR considers the percentage only and may distort decisions of different scales.',
      },
      {
        text: 'الاعتماد على IRR الأعلى دائماً مهما كانت قيمته.',
        textEn: 'Relying on the higher IRR always, whatever its value.',
        isCorrect: false,
        explanation: 'IRR نسبة وليست مبلغاً؛ وقد تفوقه NPV قليلاً بمشروع أكبر، والقيمة المطلقة أدق للقرار.',
        explanationEn: 'IRR is a ratio, not an amount; a slightly lower NPV than IRR may be outweighed by a larger project, and the absolute value is more accurate for the decision.',
      },
      {
        text: 'الجمع بين قيمتي NPV وIRR للمشروعين دون قاعدة مفاضلة.',
        textEn: 'Combining the NPV and IRR values of the two projects without a comparison rule.',
        isCorrect: false,
        explanation: 'التوازن ليس جمعاً؛ عند التعارض قاعدة مهنية معتمدة تعطي مرجعية واضحة أعلى NPV.',
        explanationEn: 'Balance is not a sum; when they conflict, an adopted professional rule gives clear precedence to the higher NPV.',
      },
      {
        text: 'اختيار المشروع الأطول عمراً لأن له مستقبلاً أوسع دائماً.',
        textEn: 'Choosing the longer-lived project because it always has a broader future.',
        isCorrect: false,
        explanation: 'العمر الأطول بحد ذاته لا يعني أفضلية اقتصادية، والمفاضلة تستند النقدية المخصومة.',
        explanationEn: 'A longer life by itself does not mean economic superiority, and the comparison is based on discounted cash flows.',
      }
    ]
  },
  {
    scenario: 'عرضت إحدى الشركات مقترحاً بفترة استرداد (Payback) قصيرة جداً، مما أغرى اللجنة للموافقة سريعاً رغم أن التدفقات بعده تتدهور بشدة.',
    scenarioEn: 'A company presented a proposal with a very short payback period, which tempted the committee to approve it quickly even though the cash flows after it deteriorate sharply.',
    question: 'ما القيد الجوهري في الاعتماد على فترة الاسترداد وحدها كمقياس؟',
    questionEn: 'What is the essential limitation of relying on the payback period alone as a measure?',
    difficulty: 'صعب',
    options: [
      {
        text: 'فترة الاسترداد تتجاهل التدفقات النقدية الواقعة بعد استرداد رأس المال ولا تخصم قيمة النقد بمرور الزمن.',
        textEn: 'The payback period ignores the cash flows occurring after capital recovery and does not discount the value of money over time.',
        isCorrect: true,
        explanation: 'المقياس ينظر لمدة استرداد الأصل فقط فيهمل قيمة التدفقات اللاحقة والقيمة الزمنية للنقود، لذلك يجب استكماله بقياس NPV أو IRR للقرار الكامل.',
        explanationEn: 'The measure looks only at the asset recovery period, thus neglecting the value of later flows and the time value of money; therefore it must be supplemented with an NPV or IRR measure for the complete decision.',
      },
      {
        text: 'فترة الاسترداد تشمل بالضرورة كل تكاليف التشغيل المستقبلية.',
        textEn: 'The payback period necessarily includes all future operating costs.',
        isCorrect: false,
        explanation: 'فترة الاسترداد مصممة على التدفق الصافي وهي لا تحتسب عادة كامل التكاليف اللاحقة؛ لذا الاعتماد عليها وحده ناقص.',
        explanationEn: 'The payback period is designed on net flow and usually does not count the full later costs; relying on it alone is therefore incomplete.',
      },
      {
        text: 'فترة الاسترداد تعبر عن الربحية كاملة بعد خصم التضخم.',
        textEn: 'The payback period expresses full profitability after discounting inflation.',
        isCorrect: false,
        explanation: 'المقياس لا يخصم التضخم أو قيمة النقود الزمنية بالضرورة، وهو مقياس سرعة لا ربحية.',
        explanationEn: 'The measure does not necessarily discount inflation or the time value of money, and it is a measure of speed, not profitability.',
      },
      {
        text: 'فترة الاسترداد لا تعني شيئاً في المشاريع الحقيقية.',
        textEn: 'The payback period means nothing in real projects.',
        isCorrect: false,
        explanation: 'لها قيمة كمقياس سيولة وسرعة استرداد، لكن الإشارة عليها محصورة كلياً في القرار النهائي فهي بقياس استكمالي.',
        explanationEn: 'It has value as a measure of liquidity and recovery speed, but relying on it completely in the final decision is restricted; it is a complementary measure.',
      }
    ]
  }
  ],
};