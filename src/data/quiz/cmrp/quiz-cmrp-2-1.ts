import type { QuizBank } from '../types';

export const quizCmrp21: QuizBank = {
  id: 'quiz-cmrp-2-1',
  questions: [
  {
    scenario: 'تولى مهندس موثوقية جديد إدارة مصنع للبتروكيماويات، ولاحظ أن فريق الصيانة يتعامل مع جميع محركات المصنع الـ 800 بنفس القدر من الاهتمام ونفس وتيرة الفحص الوقائي الأسبوعي دون أي تمييز بين محرك لمضخة حريق ومحرك لمروحة تهوية في المخزن.',
    scenarioEn: 'A new reliability engineer takes over a petrochemical plant and notices that the maintenance team treats all 800 plant motors with the same level of attention and the same weekly preventive inspection frequency, with no distinction between a fire pump motor and a warehouse ventilation fan motor.',
    question: 'وفقاً لمنهجية SMRP، ما هي الخطوة الأساسية الأولى التي يجب على المهندس تنفيذها لإعادة توجيه موارد الصيانة بالشكل الصحيح؟',
    questionEn: 'According to SMRP methodology, what is the essential first step the engineer must perform to redirect maintenance resources correctly?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'إجراء تحليل شامل لحرجية الأصول (Asset Criticality Analysis - ACA) لتصنيف المعدات إلى فئات (A, B, C) وتركيز جهود الموثوقية والميزانية على المعدات الأكثر تأثيراً على السلامة والإنتاج.',
        textEn: 'Conduct a comprehensive asset criticality analysis (ACA) to classify equipment into tiers (A, B, C) and focus reliability efforts and budget on the assets with the highest impact on safety and production.',
        isCorrect: true,
        explanation: 'تحليل الحرجية (ACA) هو الأساس الذي تُبنى عليه كل قرارات الصيانة في SMRP. من المستحيل والمكلف جداً صيانة كل الأصول بنفس الدرجة. تصنيف الأصول يضمن توجيه جهود الصيانة الوقائية والتنبؤية لأصول الفئة A (الحرجة)، مع تقليل الإنفاق على أصول الفئة C (غير الحرجة).',
        explanationEn: 'Criticality analysis (ACA) is the foundation on which all SMRP maintenance decisions are built. Maintaining every asset at the same level is impossible and very costly. Asset classification ensures preventive and predictive maintenance efforts are directed to tier A (critical) assets while reducing spending on tier C (non-critical) assets.',
      },
      {
        text: 'مضاعفة عدد الفنيين وتكثيف ساعات العمل الإضافي لتغطية جميع المحركات الـ 800 بشكل متساوٍ.',
        textEn: 'Double the number of technicians and intensify overtime hours to cover all 800 motors equally.',
        isCorrect: false,
        explanation: 'هذا حل مكلف جداً ويهدر موارد الشركة ويخالف مبدأ الكفاءة الاقتصادية وإدارة الأصول.',
        explanationEn: 'This is a very costly solution that wastes company resources and violates the principles of economic efficiency and asset management.',
      },
      {
        text: 'إلغاء الصيانة الوقائية لجميع المحركات والاعتماد فقط على الإصلاح بعد العطل لخفض التكاليف فوراً.',
        textEn: 'Cancel preventive maintenance for all motors and rely only on repair after failure to cut costs immediately.',
        isCorrect: false,
        explanation: 'إلغاء الصيانة سيؤدي إلى كوارث تشغيلية وتعطل مضخات الحريق والمعدات الحيوية.',
        explanationEn: 'Cancelling maintenance will lead to operational disasters and failures of fire pumps and critical equipment.',
      },
      {
        text: 'تصنيف المحركات حسب قدرتها الكهربائية بالكيلووات فقط بغض النظر عن موقعها أو وظيفتها في خط الإنتاج.',
        textEn: 'Classify the motors only by their electrical capacity in kilowatts, regardless of their location or function in the production line.',
        isCorrect: false,
        explanation: 'الحجم أو القدرة الكهربائية لا يعكسان الحرجية؛ فمحرك صغير بقدرة 5 كيلووات قد يكون في نقطة اختناق حرجة يوقف مصنعاً بأكمله، بينما محرك 200 كيلووات قد يمتلك بديلاً احتياطياً بنسبة 100%!',
        explanationEn: 'Size or electrical capacity does not reflect criticality; a small 5 kW motor may sit at a critical bottleneck that stops an entire plant, while a 200 kW motor may have 100% installed standby!',
      }
    ]
  },
  {
    scenario: 'خلال ورشة عمل لتحديد حرجية معدات محطة غاز طبيعي، دار خلاف حاد بين مدير الإنتاج ومدير السلامة حول كيفية وزن معايير عواقب الفشل (Consequences) في مصفوفة المخاطر.',
    scenarioEn: 'During a workshop to determine the criticality of natural gas station equipment, a sharp disagreement arose between the production manager and the safety manager over how to weight the failure consequence criteria in the risk matrix.',
    question: 'بصفتك مهندس موثوقية معتمد (CMRP)، ما هو المبدأ الحاكم والمعتمد في معايير الاعتمادية لتسلسل أولوية عواقب الفشل؟',
    questionEn: 'As a certified reliability engineer (CMRP), what is the governing and adopted principle in reliability standards for ranking failure consequence priorities?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'السلامة والصحة المهنية والبيئة (EHS) دائماً تأتي في المرتبة الأولى غير القابلة للتفاوض، تليها خسائر الإنتاج وتوقف العمليات، ثم تكلفة الصيانة المباشرة.',
        textEn: 'Environment, Health, and Safety (EHS) always comes first and is non-negotiable, followed by production losses and operations stoppage, then direct maintenance cost.',
        isCorrect: true,
        explanation: 'في معايير SMRP و RCM (معيار SAE JA1011)، لا يمكن لأي عائد مالي أو إنتاجي أن يعلو على حماية الأرواح والبيئة. أي عطل له أثر سلبي على السلامة أو البيئة يصنف تلقائياً في أعلى درجات الحرجية (الفئة A) وتكون له الأولوية القصوى.',
        explanationEn: 'In SMRP and RCM standards (SAE JA1011), no financial or production return can override the protection of lives and the environment. Any failure with a negative safety or environmental impact is automatically classified at the highest criticality (tier A) and given top priority.',
      },
      {
        text: 'الخسارة المالية والإنتاجية هي الأهم دائماً لأن الشركة تهدف للربح فقط.',
        textEn: 'Financial and production loss is always the most important because the company aims only for profit.',
        isCorrect: false,
        explanation: 'إهمال السلامة من أجل الإنتاج يسبب حوادث كارثية وخسائر بشرية وقانونية تفوق أرباح المصنع بأضعاف.',
        explanationEn: 'Neglecting safety for production causes catastrophic accidents and human and legal losses far exceeding the plant\u2019s profits.',
      },
      {
        text: 'تكلفة قطعة الغيار وسهولة شراؤها هي المعيار الوحيد لتحديد الحرجية.',
        textEn: 'The spare part cost and ease of purchase are the only criteria for determining criticality.',
        isCorrect: false,
        explanation: 'تكلفة قطع الغيار جزء ثانوي جداً من عواقب الفشل ولا تعبر عن أثر توقف المعدة.',
        explanationEn: 'Spare part cost is a very minor part of failure consequences and does not reflect the impact of asset downtime.',
      },
      {
        text: 'يتم احتساب متوسط حسابي متساوٍ بين جميع المعايير دون أي تمييز بين السلامة والإنتاج.',
        textEn: 'An equal arithmetic average is computed across all criteria with no distinction between safety and production.',
        isCorrect: false,
        explanation: 'السلامة ليست مجرد رقم في معادلة حسابية، بل لها أولوية قاطعة تجعل الأصل حرجاً حتى لو كان احتماله نادراً.',
        explanationEn: 'Safety is not merely a number in an arithmetic equation; it has an absolute priority that makes the asset critical even if its probability is rare.',
      }
    ]
  },
  {
    scenario: 'يمتلك مصنع لتعبئة الأغذية مضختين متطابقتين لمياه التبريد: المضخة (1) تعمل بمفردها لتغذية خط البسترة الحرج بدون أي بديل، بينما المضخة (2) تعمل في برج التبريد العام ويوجد بجوارها مضخة بديلة جاهزة للعمل فوراً (100% Installed Standby / Redundancy).',
    scenarioEn: 'A food packaging plant has two identical cooling water pumps: pump (1) works alone feeding the critical pasteurization line with no backup, while pump (2) works on the general cooling tower with a standby pump beside it ready to run immediately (100% installed standby / redundancy).',
    question: 'كيف يؤثر وجودُ المعدة البديلة (Redundancy) على تصنيف حرجية المضخة (2) مقارنة بالمضخة (1)؟',
    questionEn: 'How does the presence of redundant equipment affect the criticality classification of pump (2) compared with pump (1)?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'وجود المضخة البديلة يخفض عواقب الفشل التشغيلي للمضخة (2) بدرجة كبيرة، مما يجعلها فئة أقل حرجية (فئة B أو C) مقارنة بالمضخة (1) التي تمثل نقطة فشل مفردة (Single Point of Failure - فئة A).',
        textEn: 'The standby pump greatly lowers the operational failure consequences of pump (2), making it a less critical tier (B or C) compared with pump (1), which is a single point of failure (tier A).',
        isCorrect: true,
        explanation: 'الازدواجية والأنظمة البديلة (Redundancy) تمتص صدمة الفشل وتمنع توقف الإنتاج، وبالتالي تنخفض عواقب العطل التشغيلي بشكل حاسم، مما ينزل بحرجية المعدة في مصفوفة المخاطر.',
        explanationEn: 'Redundancy and standby systems absorb the failure shock and prevent production stoppage, so the operational consequences of the failure drop decisively, lowering the asset\u2019s criticality on the risk matrix.',
      },
      {
        text: 'لا يؤثر إطلاقاً، فالمضختان متطابقتان من نفس الموديل والصانع وبالتالي لهما نفس الحرجية حتماً.',
        textEn: 'It has no effect at all; the two pumps are identical in model and manufacturer, so they necessarily have the same criticality.',
        isCorrect: false,
        explanation: 'الحرجية ليست صفة لصيقة بالمعدة الميكانيكية بل بوظيفتها وسياق تشغيلها (Operating Context).',
        explanationEn: 'Criticality is not a property attached to the mechanical asset but to its function and operating context.',
      },
      {
        text: 'وجود البديل يرفع من حرجية المضخة (2) لأنها تتطلب صيانة مضختين بدلاً من واحدة.',
        textEn: 'Having the backup raises pump (2) criticality because it requires maintaining two pumps instead of one.',
        isCorrect: false,
        explanation: 'هذا يرفع عبء الصيانة قليلاً لكنه يخفض حرجية المنظومة الإنتاجية بشكل كبير.',
        explanationEn: 'This slightly raises the maintenance burden but greatly lowers the criticality of the production system.',
      },
      {
        text: 'يجب إلغاء المضخة البديلة لتوفير تكلفة الصيانة ورفع حرجية الخط.',
        textEn: 'The standby pump should be removed to save maintenance cost and raise the line\u2019s criticality.',
        isCorrect: false,
        explanation: 'اقتراح كارثي يزيل شبكة الأمان عن خط التبريد.',
        explanationEn: 'A catastrophic proposal that removes the safety net from the cooling line.',
      }
    ]
  },
  {
    scenario: 'في مستودع قطع الغيار بمصنع صلب، يرغب مدير المشتريات في خفض المخزون، ويسأل مهندس الموثوقية عن المعيار الهندسي المعتمد لتخزين المحركات والصمامات باهظة الثمن كقطع غيار حرجة (Insurance / Critical Spares).',
    scenarioEn: 'In the spare parts warehouse of a steel plant, the purchasing manager wants to reduce inventory and asks the reliability engineer about the adopted engineering criterion for storing expensive motors and valves as insurance / critical spares.',
    question: 'وفقاً لنتائج مصفوفة الحرجية، ما هي الأصول التي يُبرر تخزين قطع غيار مخصصة لها في المستودع؟',
    questionEn: 'According to the criticality matrix results, which assets justify storing dedicated spare parts in the warehouse?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'أصول الفئة A (الحرجة جداً) ذات المهلة الزمنية الطويلة للتوريد (Long Lead Time) والتي يسبب غياب قطع غيارها توقفاً طويلاً أو كارثة بيئية، بغض النظر عن سعرها.',
        textEn: 'Tier A (highly critical) assets with a long supply lead time whose missing spares would cause prolonged downtime or an environmental catastrophe, regardless of their price.',
        isCorrect: true,
        explanation: 'سياسة قطع الغيار ترتبط مباشرة بتحليل الحرجية (Criticality-Based Spares). أصول الفئة A التي لا يمكن الحصول على بديل لها محلياً في ساعات معدودة يجب تأمين قطع غيارها كقطع تأمينية (Insurance Spares) لحماية المنشأة.',
        explanationEn: 'Spares policy is directly linked to criticality analysis (criticality-based spares). Tier A assets for which no replacement can be obtained locally within a few hours must have their spare parts secured as insurance spares to protect the facility.',
      },
      {
        text: 'أصول الفئة C فقط لأن قطع غيارها رخيصة وسهلة الشراء.',
        textEn: 'Tier C assets only, because their spares are cheap and easy to buy.',
        isCorrect: false,
        explanation: 'أصول الفئة C لا تتطلب تخزيناً مفرطاً لأن فشلها غير مؤثر ويمكن شراؤها عند الحاجة.',
        explanationEn: 'Tier C assets do not require excessive storage because their failure is non-critical and can be purchased on demand.',
      },
      {
        text: 'تخزين قطع غيار لجميع المعدات بلا استثناء بنسبة 100%.',
        textEn: 'Store spare parts for all equipment without exception at 100%.',
        isCorrect: false,
        explanation: 'تجميد لرأس المال وعبء مالي هائل يرفضه فكر إدارة الأعمال والاستثمار في SMRP.',
        explanationEn: 'A capital freeze and a huge financial burden rejected by the business and investment thinking of SMRP.',
      },
      {
        text: 'القطع التي تفشل بمعدل يومي فقط دون النظر لأثر المعدة على الإنتاج.',
        textEn: 'Parts that fail on a daily basis only, regardless of the asset impact on production.',
        isCorrect: false,
        explanation: 'القطع ذات الأعطال اليومية تحتاج حلولاً جذرية RCA لمنع فشلها، وليس مجرد تكديسها في المستودع.',
        explanationEn: 'Parts with daily failures need radical RCA solutions to prevent their failure, not just stockpiling them in the warehouse.',
      }
    ]
  },
  {
    scenario: 'سأل فني صيانة مهندس الموثوقية: "إذا كان أمر العمل يخص مضخة فئة C غير حرجة، فهل يعني هذا أن أولوية أمر العمل في الـ CMMS ستكون منخفضة دائماً ولن يتم إصلاحها؟"',
    scenarioEn: 'A maintenance technician asks the reliability engineer: "If a work order concerns a non-critical tier C pump, does that mean the work order priority in the CMMS will always be low and it will never be repaired?"',
    question: 'ما هو التمييز العلمي الدقيق لـ CMRP بين "حرجية الأصل (Asset Criticality)" و "أولوية أمر العمل (Work Order Priority)"؟',
    questionEn: 'What is the precise scientific distinction in CMRP between "asset criticality" and "work order priority"?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'حرجية الأصل ثابتة تعبر عن أهمية المعدة في المصنع، بينما أولوية أمر العمل ديناميكية تتحدد بضرب حرجية الأصل في درجة إلحاح العطل اللحظي (Urgency)، وقد يصبح أمر العمل لمعدة فئة C عاجلاً إذا تسرب منها زيت يسبب خطر انزلاق فوري للفنيين.',
        textEn: 'Asset criticality is static and expresses the asset\u2019s importance in the plant, while work order priority is dynamic, determined by multiplying asset criticality by the momentary failure urgency; a work order on a tier C asset can become urgent if oil leaking from it poses an immediate slip hazard to technicians.',
        isCorrect: true,
        explanation: 'هذا تمييز جوهري في فكر SMRP (مصفوفة RIME). الحرجية تعبر عن أهمية الأصل (Asset Importance)، بينما أولوية أمر العمل تعبر عن (أهمية الأصل × درجة إلحاح المشكلة Urgency). خطر سلامة مفاجئ على معدة غير حرجة يرفع أولوية أمر العمل فورياً.',
        explanationEn: 'This is a fundamental distinction in SMRP thinking (the RIME matrix). Criticality expresses asset importance, while work order priority expresses (asset importance × problem urgency). A sudden safety hazard on a non-critical asset instantly raises the work order priority.',
      },
      {
        text: 'حرجية الأصل وأولوية أمر العمل هما نفس الشيء بالضبط ولا يوجد أي فارق بينهما.',
        textEn: 'Asset criticality and work order priority are exactly the same thing with no difference between them.',
        isCorrect: false,
        explanation: 'خلط شائع في المصانع غير الاحترافية يسبب فوضى في جدولة الأعمال.',
        explanationEn: 'A common confusion in non-professional plants that causes chaos in work scheduling.',
      },
      {
        text: 'أوامر العمل للمعدات فئة C يتم إهمالها نهائياً ولا تنفذ أبداً.',
        textEn: 'Work orders for tier C equipment are completely neglected and never executed.',
        isCorrect: false,
        explanation: 'تنفذ في فترات الهدوء وتجمع في جداول الصيانة الدورية دون تعطيل الأعمال الحرجة.',
        explanationEn: 'They are executed in quiet periods and grouped into periodic maintenance schedules without disrupting critical work.',
      },
      {
        text: 'أولوية أمر الشغل يحددها المشغل الأقوى صوتاً أو مدير الإنتاج فقط.',
        textEn: 'Work order priority is determined only by the loudest-voiced operator or the production manager.',
        isCorrect: false,
        explanation: 'ظاهرة "Loudest Voice" هي علامة على بيئة صيانة متخلفة تحاربها معايير SMRP.',
        explanationEn: 'The "loudest voice" phenomenon is a sign of a backward maintenance environment that SMRP standards fight against.',
      }
    ]
  }

  ],
};