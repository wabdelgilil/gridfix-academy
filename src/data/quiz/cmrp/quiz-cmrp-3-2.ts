import type { QuizBank } from '../types';

export const quizCmrp32: QuizBank = {
  id: 'quiz-cmrp-3-2',
  questions: [
  {
    scenario: 'ماكينة تعبئة تعمل في وردية مدتها 8 ساعات (480 دقيقة). كان وقت الإنتاج المخطط 450 دقيقة (بعد استبعاد 30 دقيقة لوجبة الغداء). تعرضت الماكينة لأعطال وأزمنة ضبط بلغت 90 دقيقة. سرعة الماكينة القياسية 2 قطعة/دقيقة، وأنتجت 600 قطعة إجمالاً، وُجد من بينها 30 قطعة معيبة تالفة.',
    scenarioEn: 'A packaging machine operates on an 8-hour shift (480 minutes). Planned production time was 450 minutes (after excluding 30 minutes for lunch). The machine experienced breakdowns and adjustment times totaling 90 minutes. Its standard speed is 2 parts/minute, and it produced 600 parts in total, of which 30 were found defective.',
    question: 'ما هي قيمة كفاءة المعدات الكلية (OEE) لهذه الماكينة وفقاً للمنهجية الحسابية المعتمدة لـ SMRP؟',
    questionEn: 'What is the Overall Equipment Effectiveness (OEE) value for this machine per the calculation methodology adopted by SMRP?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'OEE = 63.3% ناتجة عن: الإتاحة A = 80%، الأداء P = 83.3%، والجودة Q = 95%.',
        textEn: 'OEE = 63.3% resulting from: Availability A = 80%, Performance P = 83.3%, and Quality Q = 95%.',
        isCorrect: true,
        explanation: 'الحساب الهندسي الدقيق:\n1. الإتاحة A = وقت التشغيل (450 - 90 = 360 دقيقة) ÷ الوقت المخطط (450 دقيقة) = 0.80 (80%).\n2. الأداء P = الإنتاج الفعلي (600 قطعة) ÷ الطاقة القصوى لوقت التشغيل (360 دقيقة × 2 قطعة = 720 قطعة) = 600 ÷ 720 = 0.833 (83.3%).\n3. الجودة Q = القطع السليمة (600 - 30 = 570) ÷ إجمالي القطع (600) = 0.95 (95%).\n4. OEE = 0.80 × 0.833 × 0.95 = 0.633 (63.3%).',
        explanationEn: 'The precise engineering calculation:\n1. Availability A = operating time (450 - 90 = 360 minutes) ÷ planned time (450 minutes) = 0.80 (80%).\n2. Performance P = actual output (600 parts) ÷ maximum capacity for operating time (360 minutes × 2 parts = 720 parts) = 600 ÷ 720 = 0.833 (83.3%).\n3. Quality Q = good parts (600 - 30 = 570) ÷ total parts (600) = 0.95 (95%).\n4. OEE = 0.80 × 0.833 × 0.95 = 0.633 (63.3%).',
      },
      {
        text: 'OEE = 85% كمتوسط حسابي تقريبي.',
        textEn: 'OEE = 85% as a rough arithmetic average.',
        isCorrect: false,
        explanation: 'OEE تحسب بالضرب المتتالي وليس بالمتوسط الحسابي.',
        explanationEn: 'OEE is calculated by serial multiplication, not by the arithmetic average.',
      },
      {
        text: 'OEE = 75% مع إهمال القطع المعيبة لأنها قابلة لإعادة التدوير.',
        textEn: 'OEE = 75% while ignoring defective parts because they can be recycled.',
        isCorrect: false,
        explanation: 'القطع المعيبة تعتبر خسارة جودة مباشرة حتى لو أعيد تدويرها.',
        explanationEn: 'Defective parts are a direct quality loss even if recycled.',
      },
      {
        text: 'OEE = 95% اعتماداً على عامل الجودة فقط.',
        textEn: 'OEE = 95% based on the quality factor alone.',
        isCorrect: false,
        explanation: 'الجودة وحدها لا تعبر عن كفاءة المعدة وتتجاهل الإتاحة والأداء.',
        explanationEn: 'Quality alone does not express machine effectiveness and ignores availability and performance.',
      }
    ]
  },
  {
    scenario: 'افتخر مدير مصنع بأن ماكينته حققت نسبة إتاحة A = 95%، ونسبة جودة Q = 98%، ولكن OEE الإجمالي كان منخفضاً جداً (58%).',
    scenarioEn: 'A plant manager boasted that his machine achieved an availability of A = 95% and a quality of Q = 98%, yet the overall OEE was very low (58%).',
    question: 'ما هو المكون المسؤول عن هذا التدهور وما هي الخسائر الفيزيائية المرجحة في الماكينة؟',
    questionEn: 'Which component is responsible for this degradation, and what physical losses are the likely cause in the machine?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'معدل الأداء والسرعة (Performance Rate - P) حيث انخفض إلى نحو 62%؛ والأسباب المرجحة هي التوقفات الصغيرة العابرة (Minor Idling/Stops) أو تشغيل الماكينة بسرعة أبطأ من سرعتها التصميمية خوفاً من تعطلها.',
        textEn: 'The performance and speed rate (Performance Rate - P), which dropped to about 62%; the likely causes are minor transient idling/stops or running the machine slower than its design speed for fear of failure.',
        isCorrect: true,
        explanation: 'إذا كانت الإتاحة 95% والجودة 98% وكان OEE الإجمالي 58%، فإن عامل الأداء = 0.58 ÷ (0.95 × 0.98) = 62.3%! هذا يعني أن الماكينة تعمل لساعات طويلة ولكن بسرعة بطيئة وتتوقف لعشرات المرات لدقائق معدودة غير مسجلة (Micro-stoppages).',
        explanationEn: 'If availability is 95% and quality is 98% and the overall OEE is 58%, then the performance factor = 0.58 ÷ (0.95 × 0.98) = 62.3%! This means the machine runs for long hours but at a slow speed and stops dozens of times for a few unrecorded minutes (micro-stoppages).',
      },
      {
        text: 'عامل الجودة هو المسؤول حتماً ويجب استبدال خامات الإنتاج.',
        textEn: 'The quality factor is definitely responsible, and production raw materials must be replaced.',
        isCorrect: false,
        explanation: 'الجودة 98% وهي نسبة ممتازة جداً وليست سبب التدهور.',
        explanationEn: 'Quality is 98%, an excellent ratio, and is not the cause of degradation.',
      },
      {
        text: 'السبب هو احتساب وقت وجبة الغداء ضمن التوقفات غير المخططة.',
        textEn: 'The cause is counting lunch time among unplanned stoppages.',
        isCorrect: false,
        explanation: 'وقت الغداء يستبعد من الوقت المخطط ولا يخفض الأداء.',
        explanationEn: 'Lunch time is excluded from planned time and does not lower performance.',
      },
      {
        text: 'الماكينة تعمل بكفاءة 100% ولا توجد أي مشكلة على الإطلاق.',
        textEn: 'The machine operates at 100% efficiency and there is no problem at all.',
        isCorrect: false,
        explanation: 'OEE بنسبة 58% تعني ضياع أكثر من 40% من الطاقة الإنتاجية للماكينة!',
        explanationEn: 'An OEE of 58% means more than 40% of the machine\'s production capacity is lost!',
      }
    ]
  },
  {
    scenario: 'في مراجعة الخسائر الست الكبرى (Six Big Losses) في مصنع بلاستيك، تبين أن ماكينة الحقن تتوقف لمدة 4 ساعات عند كل عملية تغيير للقالب لتصنيع منتج جديد (Changeover / Mold Setup).',
    scenarioEn: 'In a Six Big Losses review at a plastics plant, it was found that the injection machine stops for 4 hours at every mold change to produce a new product (changeover / mold setup).',
    question: 'إلى أي من عوامل OEE الثلاثة تنتمي هذه الخسارة، وما هي المنهجية الصناعية العالمية المعتمدة لتقليصها؟',
    questionEn: 'Which of the three OEE factors does this loss belong to, and what is the industry-accepted methodology to reduce it?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تنتمي لخسائر الإتاحة (Availability Loss) تحت بند أزمنة الضبط والتجهيز (Setup & Adjustment)؛ والمنهجية العالمية لتقليصها هي تقنية التبديل السريع للقوالب (SMED - Single Minute Exchange of Die).',
        textEn: 'It belongs to availability losses under setup and adjustment; the world methodology to reduce it is the Single Minute Exchange of Die (SMED) technique.',
        isCorrect: true,
        explanation: 'أزمنة التجهيز والضبط (Setup/Changeover) تقتطع مباشرة من وقت تشغيل الماكينة وبالتالي تخص عامل الإتاحة (Availability). الحل المعتمد في التصنيع الرشيق و SMRP هو تطبيق منهجية SMED (تبديل القالب في زمن أقل من 10 دقائق) عبر تحويل المهام الداخلية إلى مهام خارجية مسبقة التجهيز.',
        explanationEn: 'Setup/changeover times are deducted directly from machine operating time and therefore belong to the availability factor. The solution adopted in Lean manufacturing and SMRP is applying SMED (mold change in under 10 minutes) by converting internal tasks into pre-prepared external tasks.',
      },
      {
        text: 'تنتمي لخسائر الجودة (Quality Loss) ويتم حلها بزيادة درجة حرارة القالب.',
        textEn: 'It belongs to quality losses and is solved by raising the mold temperature.',
        isCorrect: false,
        explanation: 'زمن التبديل توقف زمني ميكانيكي وليس عيباً في جودة المنتج.',
        explanationEn: 'Changeover time is a mechanical time stoppage, not a product quality defect.',
      },
      {
        text: 'تنتمي لخسائر الأداء وتُحل بإلغاء تغيير القوالب وتصنيع منتج واحد للأبد.',
        textEn: 'It belongs to performance losses and is solved by eliminating mold changes and making one product forever.',
        isCorrect: false,
        explanation: 'تغيير المنتجات متطلب تجاري للسوق ولا يمكن إلغاؤه بل تسريعه.',
        explanationEn: 'Product changeover is a commercial market requirement that cannot be eliminated but can be accelerated.',
      },
      {
        text: 'خسارة طبيعية لا يمكن تحسينها أو تقليلها في المصانع.',
        textEn: 'A natural loss that cannot be improved or reduced in plants.',
        isCorrect: false,
        explanation: 'تقنية SMED نجحت عالمياً في تقليص أزمنة التبديل من ساعات إلى دقائق.',
        explanationEn: 'SMED has succeeded worldwide in cutting changeover times from hours to minutes.',
      }
    ]
  },
  {
    scenario: 'ما هي معايير النخبة العالمية (World-Class OEE) المعترف بها في جمعية SMRP ومعهد صيانة المصانع الياباني (JIPM)؟',
    scenarioEn: 'What are the world-class OEE criteria recognized by the SMRP Society and the Japan Institute of Plant Maintenance (JIPM)?',
    question: 'ما هي القيم المستهدفة لعوامل OEE التي تميز المصانع ذات الكفاءة العالمية؟',
    questionEn: 'What are the target values of the OEE factors that distinguish plants with world-class efficiency?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'إتاحة (Availability) ≥ 90%، أداء (Performance) ≥ 95%، جودة (Quality) ≥ 99.9%، مما ينتج OEE إجمالي ≥ 85%.',
        textEn: 'Availability ≥ 90%, Performance ≥ 95%, Quality ≥ 99.9%, yielding an overall OEE ≥ 85%.',
        isCorrect: true,
        explanation: 'المعيار العالمي المعتمد في اختبارات CMRP وفي الصناعة العالمية هو: الإتاحة 90%، الأداء 95%، والجودة 99.9%، وحاصل ضربها يعطي OEE قدره 85% أو أكثر. يعتبر أي مصنع يحقق OEE ≥ 85% من فئة المستوى العالمي (World-Class Manufacturing).',
        explanationEn: 'The world benchmark adopted in CMRP exams and global industry is: availability 90%, performance 95%, and quality 99.9%, whose product gives an OEE of 85% or more. Any plant achieving OEE ≥ 85% is considered world-class manufacturing.',
      },
      {
        text: 'إتاحة 100%، أداء 100%، وجودة 100% بنسبة OEE تبلغ 100% بالضبط.',
        textEn: 'Availability 100%, Performance 100%, and Quality 100%, with an OEE of exactly 100%.',
        isCorrect: false,
        explanation: 'تحقيق 100% مستحيل فيزيائياً وعملياً على أرض الواقع الصناعي.',
        explanationEn: 'Achieving 100% is physically and practically impossible in real industrial operations.',
      },
      {
        text: 'OEE إجمالي يبلغ 50% فقط لجميع الصناعات.',
        textEn: 'An overall OEE of only 50% for all industries.',
        isCorrect: false,
        explanation: 'نسبة 50% تعتبر متواضعة وتعكس هدراً تشغيلياً كبيراً.',
        explanationEn: 'A 50% ratio is modest and reflects significant operational waste.',
      },
      {
        text: 'الجودة 50% والأداء 50% والإتاحة 50%.',
        textEn: 'Quality 50%, Performance 50%, and Availability 50%.',
        isCorrect: false,
        explanation: 'أرقام متدنية للغاية تعني إفلاس المصنع وخروجه من المنافسة.',
        explanationEn: 'Extremely low figures mean the plant goes bankrupt and drops out of competition.',
      }
    ]
  },
  {
    scenario: 'اكتشف مهندس موثوقية أن مشغلي خط التعبئة يقومون بتسجيل الماكينة على أنها "تعمل" طوال الوقت، بينما تقوم حساسات الحزام بإيقاف الماكينة لمدة 15 إلى 30 ثانية كل بضع دقائق بسبب انحشار خفيف للكرتون يتم حله يدوياً باليد.',
    scenarioEn: 'A reliability engineer discovered that operators of the packaging line record the machine as "running" all the time, while belt sensors stop the machine for 15 to 30 seconds every few minutes due to a light carton jam cleared by hand.',
    question: 'وفقاً لتصنيف الخسائر الست في OEE، كيف يُصنف هذا الهدر الخفي وما هو أثره؟',
    questionEn: 'Per the Six Big Losses classification in OEE, how is this hidden waste classified and what is its impact?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'يُصنف كـ "توقفات دقيقة وفترات خمول عابرة (Minor Stoppages / Idling)"، وتُعد العدو الخفي الأكبر لعامل الأداء (P)، ويجب رصدها عبر مسجلات الحساسات الآلية ووضع حلول ميكانيكية لمنع الانحشار.',
        textEn: 'It is classified as minor stoppages/idling, the biggest hidden enemy of the performance factor (P), and must be detected through automatic sensor recorders with mechanical solutions to prevent jamming.',
        isCorrect: true,
        explanation: 'التوقفات الصغيرة (Minor Stops < 5 minutes) غالباً ما تهمل ولا تسجل في دفاتر المشغلين، ولكن تكرارها لعشرات المرات يسرق 2 إلى 3 ساعات من طاقة اليوم! هذا هو الاستنزاف الكلاسيكي لعامل الأداء في OEE.',
        explanationEn: 'Minor stops (under 5 minutes) are often neglected and not logged in operator records, but repeating them dozens of times steals 2 to 3 hours from the day\'s capacity! This is the classic drain on the OEE performance factor.',
      },
      {
        text: 'يُصنف كعطل كارثي للسلامة ويتطلب إخلاء المصنع فوراً.',
        textEn: 'It is classified as a catastrophic safety failure requiring immediate plant evacuation.',
        isCorrect: false,
        explanation: 'الانحشار الخفيف ليس كارثة سلامة بل هدر كفاءة تشغيلي.',
        explanationEn: 'A light jam is not a safety catastrophe but an operational efficiency waste.',
      },
      {
        text: 'يُصنف كخسارة في عامل الجودة ويتم استبعاد الكراتين الصالحة.',
        textEn: 'It is classified as a quality-factor loss, and good cartons are discarded.',
        isCorrect: false,
        explanation: 'توقف الماكينة يخص الأداء والسرعة ولا يخص جودة المنتج.',
        explanationEn: 'Machine stoppage concerns performance and speed, not product quality.',
      },
      {
        text: 'هذا سلوك طبيعي في جميع المصانع ولا يعتبر خسارة إطلاقاً.',
        textEn: 'This is natural behavior in all plants and is not a loss at all.',
        isCorrect: false,
        explanation: 'استبعاد هذه التوقفات يحرم المصنع من 15% إلى 20% من طاقته الإنتاجية الضائعة.',
        explanationEn: 'Ignoring these stoppages robs the plant of 15% to 20% of its lost production capacity.',
      }
    ]
  }

  ],
};