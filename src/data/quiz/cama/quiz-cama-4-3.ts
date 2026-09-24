import type { QuizBank } from '../types';

export const quizCama43: QuizBank = {
  id: 'quiz-cama-4-3',
  questions: [
  {
    scenario: 'تراجع شركة تعدين مورديها السنويين: مورد يوصل قطع الغيار الحرجة بجودة ثابتة وموثوقية عالية، ومورد آخر يقدم أسعاراً منخفضة لكن تأخيرات متكررة تجبر الفرق على استبدال عاجل أحياناً.',
    scenarioEn: 'A mining company reviews its two annual suppliers: one delivers critical spare parts with consistent quality and high reliability, while another offers low prices but with frequent delays that sometimes force the teams into urgent replacement.',
    question: 'كيف تصنف الشركة مورديها وفق منهجية إدارة الموردين والتصنيف؟',
    questionEn: 'How should the company classify its suppliers according to the supplier management and classification methodology?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تصنيف المورد الأول استراتيجياً لعالي الموثوقية بجودة قطع حرجة، والمورد الثاني أضعف مستوى لعدم الالتزام بالوثوقية المطلوبة.',
        textEn: 'Rating the first supplier as strategic for high reliability and the quality of critical parts, and the second at a weaker level for failing to meet the required reliability.',
        isCorrect: true,
        explanation: 'تصنيف الموردين يشمل جودة التسليم وموثوقيته وأهمية القطعة، فالمورد الموثوق على قطع حرجة يُصنف استراتيجياً ويُعامل شراكة، والمنخفض التزاماً يُنزَّل مرتبته ويُقترب نقده.',
        explanationEn: 'Supplier classification covers delivery quality, its reliability, and the importance of the part; a reliable supplier of critical parts is rated strategic and treated as a partner, while the low-compliance one is downgraded and closely monitored.',
      },
      {
        text: 'تصنيف الموردين وفق سعر الوحدة فقط فيكون الثاني هو الأفضل.',
        textEn: 'Classifying the suppliers by unit price only, making the second the best.',
        isCorrect: false,
        explanation: 'السعر وحده لا يعكس أيضاً جودة التسليم وتأثير التوقف، والتصنيف السليم متعدد المعايير.',
        explanationEn: 'Price alone does not reflect delivery quality and the impact of stoppage; sound classification is multi-criteria.',
      },
      {
        text: 'الاكتفاء بالثقة الشخصية دون سجل أداء مبني على بيانات.',
        textEn: 'Relying on personal trust without a performance record built on data.',
        isCorrect: false,
        explanation: 'التصنيف الفعال يقوم على مقاييس أداء كمي وقت الالتزام وجودة التسليم لا الحدس.',
        explanationEn: 'Effective classification rests on quantitative performance measures of commitment time and delivery quality, not intuition.',
      },
      {
        text: 'اعتبار جميع الموردين متساويين ولا ميزة لأحد.',
        textEn: 'Considering all suppliers equal with no advantage to any of them.',
        isCorrect: false,
        explanation: 'معايير التصنيف تميز بين الموردين، فالمساواة تلغي أساس إدارة المخاطر في السلسلة.',
        explanationEn: 'Classification criteria distinguish between suppliers, so equality eliminates the basis of risk management in the chain.',
      }
    ]
  },
  {
    scenario: 'مصنع قطع غيار يحتفظ بمخزون كبير من القطع النادرة التي تكلف رأس المال زيادة كبيرة، بينما مخزون القطع الشائعة غير مكتمل ويسبب توقفات.',
    scenarioEn: 'A spare parts plant keeps a large stock of rare parts that tie up significant capital, while the stock of common parts is incomplete and causes stoppages.',
    question: 'ما المبدأ الصحيح لإدارة المخزون وقطع الغيار في هذا السياق؟',
    questionEn: 'What is the correct principle for inventory and spare parts management in this context?',
    difficulty: 'سهل',
    options: [
      {
        text: 'موازنة المخزون على أساس تنقين القطع: حرجتها وتكلفتها، بتأمين الحرجة النادرة وتحسين مستوى الشائعة المستنفدة.',
        textEn: 'Balancing the inventory on the basis of part filtering: their criticality and cost, securing the rare critical ones and improving the level of the depleted common parts.',
        isCorrect: true,
        explanation: 'إدارة المخزون بالتنقين ABC تحفظ رأس المال في قطع قليلة الحرجة مع ضمان توفر الشائعة المستنفدة، وموازنة أيضاً بين كلفة الاحتفاظ وكلفة النفاذ.',
        explanationEn: 'AC ABC-based inventory management preserves capital on few critical parts while ensuring the availability of the depleted common ones, and also balances between the holding cost and the stockout cost.',
      },
      {
        text: 'تقليل كل المخزون بلا تحليل حتى يختفي رأس المال المقيد.',
        textEn: 'Reducing all inventory without analysis until the tied-up capital disappears.',
        isCorrect: false,
        explanation: 'إفراغ المخزون كاملاً يعرّض الأصول الحرجة للتوقف لا موازنة محسوبة.',
        explanationEn: 'Emptying the whole inventory exposes the critical assets to stoppage; it is not a calculated balance.',
      },
      {
        text: 'تخزين كل القطع الممكنة دون حدود لضمان عدم النفاذ أبداً.',
        textEn: 'Storing every possible part without limits to guarantee that stockout never occurs.',
        isCorrect: false,
        explanation: 'التخزين اللامحدود يقيّد رأس المال ويرفع كلفة الاحتفاظ إلى ما يفوق قيمته.',
        explanationEn: 'Unlimited storage ties up capital and raises the holding cost beyond its value.',
      },
      {
        text: 'الاعتماد كلياً على للتوريد عند الطلب دون مخزون كأي قطع.',
        textEn: 'Relying entirely on supply on demand without stock for any part.',
        isCorrect: false,
        explanation: 'الاعتماد على التسليم الفوري غير واقعي للقطع النادرة طويلة زمن التوريد الحرجة أو الغائبة من السوق.',
        explanationEn: 'Relying on instant delivery is unrealistic for rare parts with long supply times, critical parts, or parts absent from the market.',
      }
    ]
  },
  {
    scenario: 'تتفاوض شركة تخزين غاز مع مورد عالمي على توريد صمامات أمان، وتقارن بين سعر التوريد المباشر وتكلفة الإجمالية للامتلاك احتساب الشحن والتخليص والتركيب والتدريب.',
    scenarioEn: 'A gas storage company negotiates with a global supplier for the supply of safety valves, and compares the direct supply price with the total cost of ownership, counting shipping, customs clearance, installation, and training.',
    question: 'ما مفهوم التسعير الذي تعتمده الشركة لاتخاذ قرار المشتريات الصائب؟',
    questionEn: 'What pricing concept does the company apply to make the right procurement decision?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'التكلفة الإجمالية للامتلاك (Total Cost of Ownership) التي تعكس سعر الشراء وما يتفرع عنه من كلف، لتحديد المورد الأفضل.',
        textEn: 'The Total Cost of Ownership, which reflects the purchase price and the costs derived from it, to determine the best supplier.',
        isCorrect: true,
        explanation: 'استراتيجيات المشتريات الذكية تقارن بين الموردين بالتكلفة الإجمالية للامتلاك لا بالسعر الظاهر فقط، فتشمل الشحن والتخليص والتركيب والتدريب والضمان.',
        explanationEn: 'Smart procurement strategies compare suppliers by the total cost of ownership rather than the apparent price only, including shipping, customs clearance, installation, training, and warranty.',
      },
      {
        text: 'سعر الوحدة المنشور في قائمة المورد دون إدراج أي كلف إضافية.',
        textEn: 'The unit price published in the supplier\u2019s list without including any additional costs.',
        isCorrect: false,
        explanation: 'السعر الظاهري وحده يخفي كلف التوريد والتركيب والتدريب التي تغير النتيجة النهائية.',
        explanationEn: 'The apparent price alone hides the supply, installation, and training costs that change the final outcome.',
      },
      {
        text: 'أدنى عرض سري يقدمه أي مورد مهما كانت شروطه.',
        textEn: 'The lowest sealed offer presented by any supplier whatever its terms.',
        isCorrect: false,
        explanation: 'المقارنة على السعر فقط تهمل الجودة والتوريد والتكلفة اللاحقة، وهو بخلاف منهجية التكلفة الكلية.',
        explanationEn: 'Comparing only on price neglects quality, supply, and the subsequent cost, contrary to the total cost methodology.',
      },
      {
        text: 'اختيار المورد الأغلى لضمان الجودة دون مقارنة.',
        textEn: 'Choosing the most expensive supplier to ensure quality without comparison.',
        isCorrect: false,
        explanation: 'السعر الأعلى لا يضمن تلقائياً أفضل قيمة؛ المقارنة تأخذ الكلفة الكلية والجودة معاً.',
        explanationEn: 'A higher price does not automatically guarantee the best value; the comparison takes the total cost and quality together.',
      }
    ]
  }
  ],
};