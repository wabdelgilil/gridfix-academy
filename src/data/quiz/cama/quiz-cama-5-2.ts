import type { QuizBank } from '../types';

export const quizCama52: QuizBank = {
  id: 'quiz-cama-5-2',
  questions: [
  {
    scenario: 'قارنت شركة طيران في مشروع شراء طائرات بين صنعين مختلفين: أحدهما أرخص في سعر الشراء لكن استهلاكه للوقود أعلى وتكلفة صيانته مرتفعة، والآخر أعلى سعراً لكن بتشغيل وصيانة أكثر اقتصادية.',
    scenarioEn: 'In an aircraft purchase project, an airline compared two different manufacturers: one is cheaper in purchase price but has higher fuel consumption and high maintenance cost, and the other is more expensive but with more economical operation and maintenance.',
    question: 'لماذا تعتمد الشركة تحليل تكلفة دورة الحياة (LCC) في قرارها بدلاً من سعر الشراء؟',
    questionEn: 'Why does the company rely on Life Cycle Costing (LCC) in its decision instead of the purchase price?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'لأن تكلفة دورة الحياة تجمع كلفة الاقتناء والتشغيل والصيانة والإيقاف المخصومة معاً لتكشف الصنف الأرخص إجمالاً.',
        textEn: 'Because life cycle cost combines the discounted acquisition, operation, maintenance, and disposal costs together to reveal which manufacturer is cheaper overall.',
        isCorrect: true,
        explanation: 'LCC يوحّد نظرة الاقتناء والتشغيل والصيانة والتفكيك على مدى العمر كلياً بالخصم الزمني، ليميز التكلفة المجمعة الحقيقية لا السعر المبدئي فقط.',
        explanationEn: 'LCC unifies the view of acquisition, operation, maintenance, and dismantling over the whole life with time discounting, to distinguish the true combined cost rather than the initial price only.',
      },
      {
        text: 'لأنها تسمح باختيار الأرخص في رأسمال الشركة مهما كلف تشغيله.',
        textEn: 'Because it allows choosing the cheapest in the company\'s capital whatever its operation costs.',
        isCorrect: false,
        explanation: 'قرار LCC يوزن كل الكلف عبر العمر، فاختيار الأرخص سعراً والأغلى تشغيلاً خلاف لما يقدمه التحليل.',
        explanationEn: 'The LCC decision weighs all costs over the life, so choosing the cheapest in price and the most expensive to operate contradicts what the analysis provides.',
      },
      {
        text: 'لأنها تعوض كل فارق السعر بأرقام صفرية دائماً.',
        textEn: 'Because it always offsets every price difference with zero figures.',
        isCorrect: false,
        explanation: 'التحليل يكشف قيمة خلافية حقيقية لا يعوّض بكافة الفروق صفراً؛ النتيجة تختلف من حالة لأخرى.',
        explanationEn: 'The analysis reveals a genuine differential value and does not offset all differences with zeroes; the result varies from one case to another.',
      },
      {
        text: 'لتبرير شراء الصنف الأرخص بلا تقييم بيانات التشغيل.',
        textEn: 'To justify buying the cheaper manufacturer without evaluating operating data.',
        isCorrect: false,
        explanation: 'LCC منهجية تحليل بيانات صارمة لا أداة تبرير القرار المسبق.',
        explanationEn: 'LCC is a rigorous data-analysis methodology, not a tool for justifying a pre-decided choice.',
      }
    ]
  },
  {
    scenario: 'قدم مستشار لشركة معادن مقترح استبدال معدات، وجُمعت الأرقام دون خصم التدفقات النقدية المستقبلية لمدة عشرين عاماً، واعتُبرت بنفس قيمتها الحالية.',
    scenarioEn: 'A consultant presented a proposal to replace equipment to a metals company, and the figures were collected without discounting future cash flows over twenty years, treating them as if they had the same present value.',
    question: 'ما الخلل المنهجي في هذا التحليل حسب مفهوم القيمة الزمنية للنقود؟',
    questionEn: 'What is the methodological flaw in this analysis according to the concept of the time value of money?',
    difficulty: 'سهل',
    options: [
      {
        text: 'التدفقات المستقبلية تُعاد لقيمتها الحالية بالخصم بمعدل مناسب، وعدم الخصم يضخم قيمة البعيد ويصدر قراراً غير واقعي.',
        textEn: 'Future flows are restated at their present value by discounting at an appropriate rate, and failure to discount inflates the value of the distant and issues an unrealistic decision.',
        isCorrect: true,
        explanation: 'مبدأ القيمة الزمنية يقرر أن ريالاً اليوم أغلى من ريال الغد؛ لذا تُخصم التدفقات المستقبلية لمعدل مناسب، واهمال الخصم يشوه مفاضلة المشاريع الاقتصادية تماماً.',
        explanationEn: 'The time value principle determines that a riyal today is worth more than a riyal tomorrow; future flows are therefore discounted at an appropriate rate, and ignoring discounting completely distorts the comparison of economic projects.',
      },
      {
        text: 'الخصم إجراء محاسبي اختياري تطبقه الشركات أحياناً لا قاعدة.',
        textEn: 'Discounting is an optional accounting procedure that companies sometimes apply, not a rule.',
        isCorrect: false,
        explanation: 'الخصم قاعدة منهجية راسخة في تقييم الاستثمار، وليس خياراً محاسبياً متروكاً.',
        explanationEn: 'Discounting is a firmly established methodological rule in investment evaluation, not a discretionary accounting choice.',
      },
      {
        text: 'التدفقات كلها تُجمع بسعر اليوم دون أي اعتبار للزمن.',
        textEn: 'All the flows are summed at today\'s price without any regard for time.',
        isCorrect: false,
        explanation: 'ذلك هو الخطأ بعينه الذي يقوم عليه السيناريو؛ القيمة الحالية تتطلب الخصم لا الجمع الاسمي.',
        explanationEn: 'That is exactly the error on which the scenario is based; present value requires discounting, not nominal summation.',
      },
      {
        text: 'التضخم لا أثر للعشرين عاماً على قيمة النقود.',
        textEn: 'Inflation has no effect over twenty years on the value of money.',
        isCorrect: false,
        explanation: 'التضخم وتكلفة الفرصة يغيران قيمة النقود بمرور الوقت؛ إهمالهما يشوش القرارات الطويلة الأجل.',
        explanationEn: 'Inflation and opportunity cost change the value of money over time; neglecting them confuses long-term decisions.',
      }
    ]
  },
  {
    scenario: 'أُجريت دراسة هندسة القيمة (Value Engineering) على منشأة صناعية، وتوصلت إلى تقليل مكونات غير ضرورية في التصميم دون خفض الوظيفة الأساسية للمنشأة مع خفض الكلفة.',
    scenarioEn: 'A Value Engineering study was conducted on an industrial facility and concluded by reducing unnecessary components in the design without lowering the facility\'s essential function, while reducing cost.',
    question: 'ما جوهر تحليل هندسة القيمة في هذه الحالة؟',
    questionEn: 'What is the essence of the Value Engineering analysis in this case?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'استعادة أو خفض الكلفة بمراجعة الوظائف والمواصفات دون الإخلال بالأداء الأساسي للاصل.',
        textEn: 'Recovering or reducing cost by reviewing the functions and specifications without impairing the asset\'s essential performance.',
        isCorrect: true,
        explanation: 'هندسة القيمة تركز على توازن الوظيفة والكلفة، فتحذف المبالغ غير الضروري وتدعم الوظائف الحرجة بقيمة أفضل للكلفة الواحدة.',
        explanationEn: 'Value Engineering focuses on balancing function and cost, removing what is unnecessarily excessive and supporting critical functions with better value per unit of cost.',
      },
      {
        text: 'خفض سعر الاقتناء مهما تأثرت جودة التصميم الأساسية.',
        textEn: 'Reducing the acquisition price no matter how the core design quality is affected.',
        isCorrect: false,
        explanation: 'الإخلال بالأداء الأساسي بنيوي نقض نقل هندسة القيمة، فالمبدأ توازن لا تخفيض النوعية.',
        explanationEn: 'Impairing the essential performance structurally contradicts the transfer of Value Engineering; the principle is balance, not cutting quality.',
      },
      {
        text: 'رفع تكاليف التصميم لتحسين كل المواصفات بلا مقارنة.',
        textEn: 'Raising design costs to improve all the specifications without comparison.',
        isCorrect: false,
        explanation: 'هندسة القيمة تعني ضبط الكلفة والوظيفة لا التضخم غير المحسوب.',
        explanationEn: 'Value Engineering means controlling cost and function, not uncalculated inflation.',
      },
      {
        text: 'تطبيق التحليل مرة فقط قبل الاقتناء دون النظر لدورة الحياة.',
        textEn: 'Applying the analysis only once before acquisition without looking at the life cycle.',
        isCorrect: false,
        explanation: 'هندسة القيمة منهجية تطبق عبر المراحل، إعادة استثماريتها الأكبر مع تكلفة الدورة وليس مرحلة الشراء فقط.',
        explanationEn: 'Value Engineering is a methodology applied across the stages; its greatest return on investment is with the life cycle cost, not the purchase stage only.',
      }
    ]
  }
  ],
};