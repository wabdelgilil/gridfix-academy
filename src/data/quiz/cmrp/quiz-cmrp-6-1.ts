import type { QuizBank } from '../types';

export const quizCmrp61: QuizBank = {
  id: 'quiz-cmrp-6-1',
  questions: [
  {
    scenario: 'في مراجعة الميزانية السنوية، أبلغ المدير المالي (CFO) مدير الصيانة بقرار خفض ميزانية الصيانة بنسبة 25% فوراً لتوفير النقدية، قائلاً: "قسم الصيانة هو مجرد مركز تكلفة يستنزف أرباح الشركة ولا يقدم أي إيرادات ملموسة".',
    scenarioEn: 'In the annual budget review, the CFO informed the maintenance manager of a decision to cut the maintenance budget by 25% immediately to save cash, saying: "The maintenance department is just a cost center draining the company\'s profits and delivering no tangible revenue".',
    question: 'بصفتك مهندس اعتمادية معتمد (CMRP)، كيف تصيغ خطة إدارة الأصول الاستراتيجية (SAMP) للدفاع عن الميزانية وفقاً لفلسفة SMRP ومعيار ISO 55000؟',
    questionEn: 'As a certified reliability engineer (CMRP), how do you formulate the Strategic Asset Management Plan (SAMP) to defend the budget per SMRP philosophy and ISO 55000?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الموافقة على الخفض فوراً وخفض كميات الزيوت والشحوم ووقف تدريب الفنيين لتفادي الصدام مع المدير المالي.',
        textEn: 'Agree to the cut immediately and reduce lubricant and grease quantities and stop technician training to avoid clashing with the CFO.',
        isCorrect: false,
        explanation: 'الخفض العشوائي يؤدي إلى انهيار الأصول خلال أشهر ويرفع تكاليف الطوارئ أضعافاً.',
        explanationEn: 'Arbitrary cuts lead to asset collapse within months and multiply emergency costs.',
      },
      {
        text: 'ربط ميزانية الصيانة بالقيمة المالية والأرباح المحققة: إيضاح أن كل دولار ينفق على الصيانة الاستباقية يضمن إتاحة خط الإنتاج لتحقيق أرباح مبيعات بملايين الدولارات، وتبيان أن خفض الميزانية بنسبة 25% سيزيد التوقفات غير المخططة بنسبة 40% ويكبد الشركة خسائر تفوق بكثير الوفر الشكلي الصغير.',
        textEn: 'Link the maintenance budget to financial value and realized profits: clarify that every dollar spent on proactive maintenance ensures production line availability to earn millions in sales profits, and show that cutting the budget by 25% will raise unplanned downtime by 40% and cost the company losses far exceeding the small cosmetic saving.',
        isCorrect: true,
        explanation: 'الركيزة الأولى لامتحان CMRP (إدارة الأعمال والإدارة العليا) تركز على تحويل الصيانة من "Cost Center" إلى "Value Driver". المدير المالي يتحدث لغة الأرقام والربحية؛ لذا يجب تقديم مصفوفة تربط الإنفاق على استراتيجيات الصيانة بمعدل العائد وتكلفة الفرصة البديلة للتوقفات غير المخططة، تماشياً مع معيار ISO 55000.',
        explanationEn: 'The first CMRP exam pillar (business management and senior management) focuses on shifting maintenance from a "Cost Center" to a "Value Driver". The CFO speaks the language of numbers and profitability; so a matrix must be presented linking spending on maintenance strategies to the return rate and the opportunity cost of unplanned downtime, in line with ISO 55000.',
      },
      {
        text: 'إخبار المدير المالي بأن الصيانة شأن هندسي بحت لا يحق للإدارة المالية التدخل فيه أو مناقشته.',
        textEn: 'Tell the CFO that maintenance is a purely engineering matter that the financial department has no right to intervene in or discuss.',
        isCorrect: false,
        explanation: 'هذا الانفصال والتعالي الإداري هو السبب وراء عزل قسم الصيانة وخفض ميزانياته.',
        explanationEn: 'This administrative separation and arrogance is the cause behind isolating the maintenance department and cutting its budgets.',
      },
      {
        text: 'طلب شراء أحدث البرمجيات والأنظمة دون تقديم أي مبرر اقتصادي أو دراسة جدوى استثمارية.',
        textEn: 'Request buying the latest software and systems without providing any economic justification or investment feasibility study.',
        isCorrect: false,
        explanation: 'شراء التكنولوجيا دون تبرير مالي يعزز فكرة أن الصيانة تهدر أموال الشركة دون عائد.',
        explanationEn: 'Buying technology without financial justification reinforces the idea that maintenance wastes company money without return.',
      }
    ]
  },
  {
    scenario: 'طرحت شركة أدوية مناقصة لشراء خط تعبئة جديد. تقدم موردان: المورد (أ) عرض ماكينة بسعر شراء 500,000 دولار، وتكلفة صيانة سنوية متوقعة 120,000 دولار. المورد (ب) عرض ماكينة ذات تصميم فائق الاعتمادية وسهل الصيانة بسعر 800,000 دولار، ولكن تكلفة صيانتها وقطع غيارها السنوية 30,000 دولار فقط. العمر الافتراضي المتوقع للخطين 10 سنوات.',
    scenarioEn: 'A pharmaceutical company tendered for a new packaging line. Two suppliers bid: Supplier (A) offered a machine at a purchase price of $500,000 with an expected annual maintenance cost of $120,000. Supplier (B) offered a highly reliable, easy-to-maintain machine at $800,000, but its annual maintenance and spare parts cost is only $30,000. The expected service life of both lines is 10 years.',
    question: 'بناءً على تحليل تكلفة دورة الحياة (Life Cycle Cost - LCC)، أي الخيارين يحقق القيمة المالية الأكبر للشركة وبفارق كم؟',
    questionEn: 'Based on Life Cycle Cost (LCC) analysis, which option delivers the greater financial value to the company and by what difference?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الخيار (ب) هو الأوفر؛ لأن تكلفة دورة حياته الإجمالية هي 1,100,000 دولار مقابل 1,700,000 دولار للخيار (أ)، محققاً وفراً صافياً قدره 600,000 دولار رغم ارتفاع سعر شرائه الأولي.',
        textEn: 'Option (B) is cheaper; its total life cycle cost is $1,100,000 versus $1,700,000 for option (A), achieving a net saving of $600,000 despite its higher initial purchase price.',
        isCorrect: true,
        explanation: 'حساب LCC الدقيق عبر 10 سنوات:\nالماكينة أ: 500,000 + (10 × 120,000) = 1,700,000 دولار.\nالماكينة ب: 800,000 + (10 × 30,000) = 1,100,000 دولار.\nالخيار (ب) يوفر 600,000 دولار بالكامل! هذا هو جوهر SMRP في أن تكلفة الشراء المبدئية (CapEx) لا تشكل سوى جزء بسيط من تكلفة الأصل الحقيقية (OpEx).',
        explanationEn: 'The precise LCC calculation over 10 years:\nMachine A: 500,000 + (10 × 120,000) = $1,700,000.\nMachine B: 800,000 + (10 × 30,000) = $1,100,000.\nOption (B) saves $600,000 in full! This is the essence of SMRP: the initial purchase cost (CapEx) is only a small part of the asset\'s real cost (OpEx).',
      },
      {
        text: 'الخيار (أ) هو الأفضل دائماً؛ لأن قسم المشتريات يجب أن يختار دائماً العرض الأقل سعراً في المناقصة لتوفير سيولة فورية 300 ألف دولار.',
        textEn: 'Option (A) is always best; procurement must always pick the lowest-priced bid in the tender to save $300,000 in immediate cash.',
        isCorrect: false,
        explanation: 'اختيار العرض الأرخص شراءً هو الفخ القاتل الذي يكبّد المصانع ملايين الدولارات في التشغيل والصيانة الرديئة لاحقاً.',
        explanationEn: 'Picking the cheapest-to-buy offer is the deadly trap that costs plants millions in poor operation and maintenance later.',
      },
      {
        text: 'الخياران متساويان تماماً لأن تكلفة التشغيل لا علاقة لها بجودة التصميم والاعتمادية.',
        textEn: 'The two options are completely equal because operating cost has nothing to do with design quality and reliability.',
        isCorrect: false,
        explanation: 'حسابات LCC تثبت وجود فارق ضخم يبلغ 600 ألف دولار.',
        explanationEn: 'LCC calculations prove a huge difference of $600,000.',
      },
      {
        text: 'إلغاء المناقصة بالكامل واستئجار عمال يدويين لتعبئة الأدوية باليد.',
        textEn: 'Cancel the tender entirely and hire manual workers to fill the medicines by hand.',
        isCorrect: false,
        explanation: 'خيار غير واقعي وغير اقتصادي في الصناعات الدوائية الحديثة.',
        explanationEn: 'An unrealistic and uneconomic option in modern pharmaceutical industries.',
      }
    ]
  },
  {
    scenario: 'تبلغ قيمة الاستبدال الإجمالية التقديرية (Estimated Replacement Value - ERV) لمصنع بتروكيماويات 500 مليون دولار. في نهاية العام، بلغت نفقات الصيانة الإجمالية (شاملة العمالة والمواد والمقاولين) 40 مليون دولار.',
    scenarioEn: 'The total Estimated Replacement Value (ERV) of a petrochemical plant is $500 million. At year end, total maintenance expenses (including labor, materials, and contractors) reached $40 million.',
    question: 'وفقاً لمقاييس ومؤشرات SMRP المعتمدة، ما هي نسبة تكلفة الصيانة إلى قيمة الأصل الاستبدالية (Maintenance Cost % of ERV)، وكيف تقيّم هذا الأداء مقارنة بالمعدلات العالمية (World-Class)؟',
    questionEn: 'Per the adopted SMRP metrics and indicators, what is the Maintenance Cost % of ERV, and how do you rate this performance against world-class benchmarks?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'النسبة تبلغ 8%؛ وهي نسبة مرتفعة جداً وتدل على ثقافة رد فعل مفرطة وهدر مالي، حيث تتراوح المعدلات العالمية الممتازة (World-Class) بين 2% إلى 3% فقط من قيمة ERV.',
        textEn: 'The ratio is 8%; very high, indicating an over-reactive culture and financial waste, given that world-class benchmarks range between only 2% and 3% of ERV.',
        isCorrect: true,
        explanation: 'القانون القياسي المعتمد لـ SMRP Metric 5.1.1:\nMaintenance Cost as a % of RAV/ERV = (Total Maintenance Cost / Total Plant ERV) × 100\n= (40M / 500M) × 100 = 8%.\nالمعدل العالمي للشركات الرائدة يتراوح بين 2% و 3% كحد أقصى. نسبة 8% تعني أن المصنع ينفق نحو 3 إلى 4 أضعاف المعدل العالمي بسبب الأعطال المتكررة وكثرة قطع الغيار الطارئة والعمل الإضافي.',
        explanationEn: 'The standard formula for SMRP Metric 5.1.1:\nMaintenance Cost as a % of RAV/ERV = (Total Maintenance Cost / Total Plant ERV) × 100\n= (40M / 500M) × 100 = 8%.\nThe world-class rate for leading companies ranges between 2% and 3% at most. An 8% ratio means the plant spends about 3 to 4 times the world-class rate due to recurring failures, excessive expedited spares, and overtime.',
      },
      {
        text: 'النسبة هي 12.5% وتعتبر مثالية وممتازة وتدل على أن المصنع يولي الصيانة اهتماماً فائقاً.',
        textEn: 'The ratio is 12.5% and is considered ideal and excellent, showing the plant gives maintenance outstanding attention.',
        isCorrect: false,
        explanation: 'حساب رياضي خاطئ، والإنفاق المفرط ليس دليلاً على الكفاءة بل على كثرة الكوارث.',
        explanationEn: 'A wrong mathematical calculation, and excessive spending is not evidence of efficiency but of numerous disasters.',
      },
      {
        text: 'النسبة تبلغ 0.8% وهي أفضل نسبة مسجلة في العالم.',
        textEn: 'The ratio is 0.8% and it is the best ratio ever recorded in the world.',
        isCorrect: false,
        explanation: 'خطأ حسابي (النسبة هي 8% وليست 0.8%).',
        explanationEn: 'A calculation error (the ratio is 8%, not 0.8%).',
      },
      {
        text: 'مؤشر ERV لا علاقة له بالصيانة ولا يعترف به في اختبار CMRP.',
        textEn: 'The ERV indicator has no relation to maintenance and is not recognized in the CMRP exam.',
        isCorrect: false,
        explanation: 'مؤشر الصيانة كنسبة من ERV هو أحد أشهر مؤشرات SMRP وأكثرها وروداً في أسئلة الامتحان.',
        explanationEn: 'Maintenance as a % of ERV is one of the most famous SMRP indicators and one of the most frequent in exam questions.',
      }
    ]
  },
  {
    scenario: 'صاغ مهندس الصيانة هدفاً لقسمه للعام القادم نصه: "نسعى جاهدين لتحسين أداء قسم الصيانة وإرضاء إدارة الإنتاج بأقصى ما نستطيع". رفض مدير الاعتمادية (CMRP) هذا الهدف وطلب إعادة صياغته.',
    scenarioEn: 'A maintenance engineer drafted a goal for his department for the coming year: "We strive to improve maintenance department performance and satisfy production management as much as we can". The reliability manager (CMRP) rejected this goal and asked to rewrite it.',
    question: 'ما هو العيب الرئيسي في هذا الهدف وفقاً لمعايير الأهداف الذكية (SMART Objectives)، وكيف تكون صياغته الهندسية الاحترافية السليمة؟',
    questionEn: 'What is the main defect in this goal per SMART Objectives criteria, and what is its proper professional engineering wording?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الهدف عام وفضفاض وغير قابل للقياس وخالٍ من إطار زمني (ليس SMART)؛ والصياغة السليمة: "خفض نسبة ساعات التوقف غير المخطط لخط التعبئة 1 من 6% إلى أقل من 2.5% بنهاية الربع الرابع من عام 2026".',
        textEn: 'The goal is generic, vague, unmeasurable, and has no time frame (not SMART); the proper wording: "reduce the unplanned downtime hours ratio on packaging line 1 from 6% to below 2.5% by the end of Q4 2026".',
        isCorrect: true,
        explanation: 'الأهداف الاستراتيجية في معايير SMRP و ISO 55000 يجب أن تكون SMART:\n1. Specific: حدد خط التعبئة 1.\n2. Measurable: من 6% إلى 2.5%.\n3. Achievable & Relevant: التوقف غير المخطط يؤثر مباشرة على الإنتاجية.\n4. Time-bound: بنهاية الربع الرابع 2026.\nالعبارات الإنشائية مثل "نسعى جاهدين ونبذل قصارى جهدنا" لا مكان لها في الإدارة الهندسية المحترفة.',
        explanationEn: 'Strategic goals in SMRP and ISO 55000 standards must be SMART:\n1. Specific: identify packaging line 1.\n2. Measurable: from 6% to 2.5%.\n3. Achievable & Relevant: unplanned downtime directly affects productivity.\n4. Time-bound: by the end of Q4 2026.\nRhetorical phrases like "we strive hard and do our best" have no place in professional engineering management.',
      },
      {
        text: 'الهدف ممتاز جداً ولا يحتاج لأي تعديل لأن إرضاء الإنتاج هو المطلب الوحيد.',
        textEn: 'The goal is excellent and needs no adjustment because satisfying production is the only requirement.',
        isCorrect: false,
        explanation: 'الهدف الفضفاض يستحيل قياسه أو محاسبة المسؤولين عنه.',
        explanationEn: 'A vague goal is impossible to measure or hold anyone accountable for.',
      },
      {
        text: 'العيب الوحيد هو عدم كتابة الهدف باللغة الإنجليزية.',
        textEn: 'The only defect is that the goal was not written in English.',
        isCorrect: false,
        explanation: 'اللغة ليست المشكلة؛ الخلل في غياب الأرقام والزمن والمستهدف القياسي.',
        explanationEn: 'Language is not the problem; the defect lies in the absence of numbers, time, and a measurable target.',
      },
      {
        text: 'يجب إلغاء كافة أهداف الصيانة لأن الأعطال قدرية ولا يمكن التنبؤ بها إطلاقاً.',
        textEn: 'All maintenance goals should be cancelled because failures are fate and cannot be predicted at all.',
        isCorrect: false,
        explanation: 'هذا هو جوهر الفكر التفاعلي القديم الذي تكافحه منهجية الموثوقية الحديثة.',
        explanationEn: 'This is the essence of the old reactive thinking that modern reliability methodology fights.',
      }
    ]
  }

  ],
};