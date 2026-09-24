import type { QuizBank } from '../types';

export const quizCmrp31: QuizBank = {
  id: 'quiz-cmrp-3-1',
  questions: [
  {
    scenario: 'يتكون خط إنتاج تعبئة عصائر من 4 محطات متتالية: محطة الغسيل (تنتج 120 زجاجة/دقيقة)، محطة التعبئة (تنتج 80 زجاجة/دقيقة)، محطة التغطية (تنتج 110 زجاجة/دقيقة)، ومحطة التغليف الكرتوني (تنتج 130 زجاجة/دقيقة). قامت إدارة المصنع بشراء ماكينة غسيل جديدة متطورة لرفع طاقتها إلى 160 زجاجة/دقيقة بتكلفة 200 ألف دولار.',
    scenarioEn: 'A juice filling production line consists of 4 sequential stations: the washing station (produces 120 bottles/minute), the filling station (produces 80 bottles/minute), the capping station (produces 110 bottles/minute), and the carton packing station (produces 130 bottles/minute). Plant management bought a new advanced washing machine to raise its capacity to 160 bottles/minute at a cost of $200,000.',
    question: 'وفقاً لنظرية القيود (TOC) ودليل SMRP، ما هو التأثير الفعلي لماكينة الغسيل الجديدة على إنتاجية ومبيعات المصنع الإجمالية؟',
    questionEn: 'According to the Theory of Constraints (TOC) and the SMRP guide, what is the actual effect of the new washing machine on the plant\u2019s total productivity and sales?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'صفر؛ لن تزيد إنتاجية المصنع بزجاجة واحدة، بل ستؤدي فقط لتكدس الزجاجات الفارغة وتجميد رأس المال قبل محطة التعبئة؛ لأن محطة التعبئة هي نقطة الاختناق الحاكمة (80 زجاجة/دقيقة).',
        textEn: 'Zero; plant productivity will not increase by a single bottle, and it will only cause empty bottles to pile up and capital to freeze before the filling station, because the filling station is the governing bottleneck (80 bottles/minute).',
        isCorrect: true,
        explanation: 'وفقاً لـ TOC، طاقة أي خط إنتاج يحكمها أضعف جزء فيه (نقطة الاختناق). محطة التعبئة طاقتها 80 زجاجة/دقيقة، لذا فإن الإنتاج الإجمالي سيظل 80 زجاجة/دقيقة مهما بلغت سرعة الغسيل! أي استثمار في تحسين محطة غير خانقة هو هدر للمال ويخلق تكدساً للمخزون (WIP Inventory).',
        explanationEn: 'According to TOC, the capacity of any production line is governed by its weakest part (the bottleneck). The filling station has a capacity of 80 bottles/minute, so total output will remain 80 bottles/minute no matter how fast the washing machine is! Any investment in improving a non-constraining station is wasted money and creates inventory pile-up (WIP).',
      },
      {
        text: 'سترتفع إنتاجية المصنع فوراً إلى 160 زجاجة/دقيقة لأن المحطة الأولى هي التي تغذي بقية الخط.',
        textEn: 'Plant productivity will immediately rise to 160 bottles/minute because the first station feeds the rest of the line.',
        isCorrect: false,
        explanation: 'الخط بأكمله سيختنق عند محطة التعبئة ولن تخرج سوى 80 زجاجة.',
        explanationEn: 'The whole line will choke at the filling station and only 80 bottles will come out.',
      },
      {
        text: 'ستزيد الإنتاجية بنسبة 25% كمتوسط حسابي بين المحطات الأربع.',
        textEn: 'Productivity will increase by 25% as an arithmetic average between the four stations.',
        isCorrect: false,
        explanation: 'خطوط الإنتاج لا تعمل بالمتوسطات الحسابية بل بالحد الأدنى التتابعي.',
        explanationEn: 'Production lines do not work by arithmetic averages but by the sequential minimum.',
      },
      {
        text: 'يجب تقليل سرعة التغليف الكرتوني لتتساوى مع محطة الغسيل الجديدة.',
        textEn: 'The carton packing speed should be reduced to match the new washing station.',
        isCorrect: false,
        explanation: 'خفض سرعة التغليف سيزيد من تعطيل الخط بدون داعٍ.',
        explanationEn: 'Reducing packing speed will unnecessarily increase line disruption.',
      }
    ]
  },
  {
    scenario: 'سأل مدير الإنتاج مهندس الموثوقية: "لدينا ميزانية محدودة لتطبيق الصيانة التنبؤية المتقدمة بمجسات الاهتزاز والحرارة المتصلة لحظياً (Online CBM)، فأين يجب أن نوجه هذا الاستثمار أولاً لتعظيم العائد المالي للمصنع؟"',
    scenarioEn: 'The production manager asks the reliability engineer: "We have a limited budget for advanced predictive maintenance with online vibration and temperature sensors (online CBM). Where should we direct this investment first to maximize the plant\u2019s financial return?"',
    question: 'بصفتك مهندس CMRP، ما هو التوجيه الاستراتيجي الهندسي الصحيح وفق معايير SMRP؟',
    questionEn: 'As a CMRP engineer, what is the correct strategic engineering direction per SMRP standards?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'توجيه الاستثمار لمعدة نقطة الاختناق (Bottleneck Machine) أولاً؛ لأن أي دقيقة توقف في نقطة الاختناق تعني خسارة مباشرة لا يمكن تعويضها من إنتاج ومبيعات المصنع بالكامل.',
        textEn: 'Direct the investment to the bottleneck machine first; any minute of downtime at the bottleneck is a direct, irreversible loss from the whole plant\u2019s production and sales.',
        isCorrect: true,
        explanation: 'القاعدة المحورية لـ SMRP و TOC تنص على أن "قيمة وقت نقطة الاختناق تساوي قيمة مبيعات المصنع بأكمله". توقف المعدة الخانقة لساعة يعني فقدان ساعة إنتاج من المصنع كله، بينما توقف معدة تمتلك طاقة فائضة يمكن تعويضه بتشغيلها بنصف ساعة إضافية.',
        explanationEn: 'The pivotal SMRP and TOC rule states that "the value of bottleneck time equals the value of the entire plant\u2019s sales". One hour of stoppage at the constraining asset means losing one hour of production from the whole plant, while a stoppage at an asset with surplus capacity can be compensated by running it for an extra half hour.',
      },
      {
        text: 'توجيه الاستثمار للمعدة الأكبر حجماً ووزناً في المصنع بغض النظر عن موقعها.',
        textEn: 'Direct the investment to the largest, heaviest asset in the plant regardless of its location.',
        isCorrect: false,
        explanation: 'الحجم والوزن لا يعكسان الحرجية التشغيلية أو نقاط الاختناق.',
        explanationEn: 'Size and weight do not reflect operational criticality or bottlenecks.',
      },
      {
        text: 'توزيع الميزانية بالتساوي بنسبة مئوية متماثلة على جميع معدات المصنع دون تمييز.',
        textEn: 'Distribute the budget equally with a symmetric percentage across all plant assets without distinction.',
        isCorrect: false,
        explanation: 'التوزيع المتساوي يشتت الميزانية ولا يحمي عنق الزجاجة الإنتاجي.',
        explanationEn: 'Equal distribution spreads the budget thin and does not protect the production bottleneck.',
      },
      {
        text: 'توجيه الاستثمار للمعدات الأرخص سعراً لتركيب أكبر عدد ممكن من المجسات.',
        textEn: 'Direct the investment to the cheapest assets to install as many sensors as possible.',
        isCorrect: false,
        explanation: 'تركيب مجسات على معدات غير مؤثرة لا يضيف أي عائد مالي حقيقي للمنشأة.',
        explanationEn: 'Installing sensors on non-impactful assets adds no real financial return to the facility.',
      }
    ]
  },
  {
    scenario: 'في منهجية Drum-Buffer-Rope (DBR)، يصر فنيو الصيانة على تفكيك ماكينة التعبئة الخانقة لعمل صيانة وقائية كلما توفرت لديهم ساعة فراغ مفاجئة دون إبلاغ طاقم التشغيل.',
    scenarioEn: 'In the Drum-Buffer-Rope (DBR) methodology, maintenance technicians insist on disassembling the constraining filling machine for preventive maintenance whenever they get a sudden free hour, without notifying the operations crew.',
    question: 'ما هو الدور الحاسم لـ "المخزن المؤقت (Buffer)" في حماية نقطة الاختناق وفقاً لـ TOC؟',
    questionEn: 'What is the critical role of the "buffer" in protecting the bottleneck according to TOC?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'توفير مخزون زمني أو مادي آمن قبل نقطة الاختناق يضمن استمرارها في العمل بكامل طاقتها حتى لو تعطلت أي معدة تسبقها في الخط لفترة وجيزة.',
        textEn: 'Providing a safe time or material stock before the bottleneck ensures it keeps operating at full capacity even if any upstream line asset fails for a short period.',
        isCorrect: true,
        explanation: 'الـ Buffer (المخزن المؤقت) في TOC هو شبكة الأمان التي تحمي نقطة الاختناق من "الجوع (Starvation)". هدفه امتصاص أي توقف أو تذبذب في المحطات السابقة لكي لا تتوقف الماكينة الخانقة لثانية واحدة.',
        explanationEn: 'The buffer in TOC is the safety net that protects the bottleneck from "starvation". Its purpose is absorbing any stoppage or fluctuation in the upstream stations so the constraining machine does not stop for a single second.',
      },
      {
        text: 'تخزين أكبر كمية ممكنة من البضائع لتعبئة المستودعات ومضاعفة رأس المال المجمد.',
        textEn: 'Storing the largest possible quantity of goods to fill the warehouses and double the frozen capital.',
        isCorrect: false,
        explanation: 'TOC تحارب تكديس المخزون غير المبرر وتعتبره عبئاً تشغيلياً خاسراً.',
        explanationEn: 'TOC fights unjustified inventory pile-up and considers it a losing operational burden.',
      },
      {
        text: 'السماح للعمال بأخذ فترات راحة أطول دون إيقاف الآلات.',
        textEn: 'Allowing workers to take longer rest periods without stopping the machines.',
        isCorrect: false,
        explanation: 'الهدف تقني إنتاجي لحماية تدفق العمليات وليس لتمديد أوقات الراحة.',
        explanationEn: 'The goal is a technical production objective to protect process flow, not to extend rest periods.',
      },
      {
        text: 'استبدال مهام الصيانة الوقائية بمهام التخزين المؤقت.',
        textEn: 'Replacing preventive maintenance tasks with buffer-storage tasks.',
        isCorrect: false,
        explanation: 'المخزن المؤقت يدعم الصيانة ولا يلغي خططها المجدولة.',
        explanationEn: 'The buffer supports maintenance and does not cancel its scheduled plans.',
      }
    ]
  },
  {
    scenario: 'اقترح مشرف خط تجميع سيارات تشغيل جميع الروبوتات السابقة لنقطة الاختناق بأقصى سرعة ممكنة طوال الوردية بهدف تحقيق مؤشر كفاءة فردية 100% لكل عامل.',
    scenarioEn: 'A car assembly line supervisor proposed running all robots upstream of the bottleneck at maximum possible speed throughout the shift to achieve a 100% individual efficiency indicator for each worker.',
    question: 'ما هي النتيجة الحتمية لهذا القرار على تكاليف المصنع ومؤشرات موثوقية العمليات؟',
    questionEn: 'What is the inevitable consequence of this decision on plant costs and process reliability indicators?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تراكم هائل في مخزون الإنتاج تحت التشغيل (Work-in-Process - WIP)، زيادة تكاليف التخزين والتلف، وتدهور تدفق العمليات دون زيادة المبيعات بريال واحد.',
        textEn: 'A huge build-up of work-in-process (WIP), increased storage and damage costs, and degraded process flow without increasing sales by a single riyal.',
        isCorrect: true,
        explanation: 'تشغيل المحطات غير الخانقة بأسرع من طاقة الاختناق هو خطأ كارثي يحذر منه جولدرات و SMRP. يؤدي إلى تكدس مئات الأجزاء نصف المصنعة (WIP)، وصعوبة في الحركة، وتلف القطع، وتجميد السيولة المالية دون زيادة المبيعات النهائية.',
        explanationEn: 'Running the non-constraining stations faster than the bottleneck capacity is a catastrophic mistake warned against by Goldratt and SMRP. It leads to hundreds of semi-finished parts piling up (WIP), movement difficulties, part damage, and financial liquidity freeze without increasing final sales.',
      },
      {
        text: 'مضاعفة أرباح المصنع لأن كفاءة العمال الفردية ارتفعت إلى 100%.',
        textEn: 'Doubling the plant profits because individual worker efficiency rose to 100%.',
        isCorrect: false,
        explanation: 'الكفاءة الفردية للمحطات غير الخانقة هي سراب مالي خادع لا يحقق أرباحاً حقيقية.',
        explanationEn: 'The individual efficiency of non-constraining stations is a deceptive financial mirage that does not generate real profits.',
      },
      {
        text: 'انخفاض معدل استهلاك الكهرباء وتوقف الآلات عن العمل تلقائياً.',
        textEn: 'Lower electricity consumption and the machines stop automatically.',
        isCorrect: false,
        explanation: 'التشغيل الأقصى المستمر يستهلك طاقة إضافية ويزيد من إهلاك المعدات.',
        explanationEn: 'Continuous maximum operation consumes extra energy and increases equipment wear.',
      },
      {
        text: 'تحول نقطة الاختناق تلقائياً إلى أول محطة في الخط.',
        textEn: 'The bottleneck automatically moves to the first station of the line.',
        isCorrect: false,
        explanation: 'السرعة الزائدة لا تنقل الاختناق بل تفاقم التكدس أمامه.',
        explanationEn: 'Excess speed does not move the bottleneck but worsens the pile-up in front of it.',
      }
    ]
  },
  {
    scenario: 'بعد تطبيق حلول هندسية وصيانة دقيقة على ماكينة التعبئة الخانقة، ارتفعت طاقتها من 80 إلى 150 زجاجة/دقيقة، وأصبحت ماكينة التغطية (110 زجاجة/دقيقة) هي الأبطأ في الخط.',
    scenarioEn: 'After applying engineering solutions and precise maintenance to the constraining filling machine, its capacity rose from 80 to 150 bottles/minute, and the capping machine (110 bottles/minute) became the slowest in the line.',
    question: 'وفقاً للخطوة الخامسة من خطوات TOC الخمس (The 5 Focusing Steps)، ما هو الإجراء الإلزامي التالي لإدارة الموثوقية؟',
    questionEn: 'According to the fifth of the five TOC focusing steps, what is the next mandatory action for the reliability function?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'العودة إلى الخطوة الأولى وتحديد القيد الجديد (ماكينة التغطية) وتركيز جهود الصيانة والتحسين عليها، والتحذير من أن يتحول القصور الذاتي (Inertia) إلى قيد يعطل التطوير المستمر.',
        textEn: 'Return to step one, identify the new constraint (the capping machine), and focus the maintenance and improvement efforts on it, while warning that inertia may become a constraint that stalls continuous improvement.',
        isCorrect: true,
        explanation: 'الخطوة الخامسة لـ TOC تنص على: "إذا كُسر القيد، عد إلى الخطوة 1، ولا تدع القصور الذاتي يصبح القيد القادم". الاختناق ينتقل دائماً إلى المحطة الأقل طاقة تالياً (وهي ماكينة التغطية بـ 110)، وتنتقل معها أولويات الصيانة والاستثمار فوراً.',
        explanationEn: 'Step five of TOC states: "If the constraint is broken, return to step 1, and do not let inertia become the next constraint". The bottleneck always moves to the next lowest-capacity station (the capping machine at 110), and maintenance and investment priorities move with it immediately.',
      },
      {
        text: 'التوقف عن أي أعمال تطوير إضافية لأن المصنع حقق هدفه بالكامل.',
        textEn: 'Stop any further improvement work because the plant fully achieved its goal.',
        isCorrect: false,
        explanation: 'التحسين المستمر عملية دائمة لا تتوقف عند كسر قيد واحد.',
        explanationEn: 'Continuous improvement is an ongoing process that does not stop when one constraint is broken.',
      },
      {
        text: 'إعادة ماكينة التعبئة لسرعتها القديمة 80 زجاجة/دقيقة لمنع انتقال القيد.',
        textEn: 'Return the filling machine to its old speed of 80 bottles/minute to prevent the constraint moving.',
        isCorrect: false,
        explanation: 'قرار رجعي يخفض طاقة المصنع بدلاً من استثمار التحسين.',
        explanationEn: 'A regressive decision that lowers plant capacity instead of investing in the improvement.',
      },
      {
        text: 'إلغاء ماكينة التغطية والاستغناء عن تغطية الزجاجات.',
        textEn: 'Remove the capping machine and dispense with capping the bottles.',
        isCorrect: false,
        explanation: 'اقتراح مستحيل تشغيلياً يفسد جودة المنتج النهائي.',
        explanationEn: 'An operationally impossible proposal that ruins the final product quality.',
      }
    ]
  }

  ],
};