import type { QuizBank } from '../types';

export const quizCmrp24: QuizBank = {
  id: 'quiz-cmrp-2-4',
  questions: [
  {
    scenario: 'أجرى مهندس موثوقية تحليلاً إحصائياً لبيانات أعطال مجموعة من المضخات الهيدروليكية باستخدام توزيع ويبول، ووجد أن قيمة معامل الشكل بيتا تساوي (Beta = 0.65).',
    scenarioEn: 'A reliability engineer statistically analyzed the failure data of a group of hydraulic pumps using the Weibull distribution and found the shape parameter beta value equal to (Beta = 0.65).',
    question: 'ما هو التفسير الهندسي لهذه القيمة وفقاً لمعايير SMRP، وما هو القرار الصحيح لاستراتيجية الصيانة؟',
    questionEn: 'What is the engineering interpretation of this value per SMRP standards, and what is the correct maintenance strategy decision?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الأعطال تتبع مرحلة "وفيات الرضع (Infant Mortality)" الناتجة عن أخطاء التركيب أو جودة قطع الغيار؛ والحل هو تحسين جودة التدشين والفحص ومنع التدخلات الميكانيكية المتكررة، وليس عمل صيانة وقائية بالوقت.',
        textEn: 'The failures follow the "infant mortality" stage resulting from installation errors or spare part quality; the solution is improving commissioning and inspection quality and preventing repeated mechanical interventions, not time-based preventive maintenance.',
        isCorrect: true,
        explanation: 'عندما تكون قيمة بيتا أقل من 1 (Beta < 1.0)، فهذا مؤشر قاطع على أن معدل الفشل ينخفض مع مرور الوقت (Infant Mortality / Early Failure). الأسباب الشائعة هي عيوب التصنيع، أخطاء التركيب، أو التلوث أثناء التجميع. فرض صيانة وقائية دورية بالوقت سيزيد الطين بلة بإعادة المعدة لنقطة البداية!',
        explanationEn: 'When beta is less than 1 (Beta < 1.0), this is a decisive indicator that the failure rate decreases over time (infant mortality / early failure). Common causes are manufacturing defects, installation errors, or contamination during assembly. Imposing periodic time-based preventive maintenance will make things worse by returning the asset to the starting point!',
      },
      {
        text: 'الأعطال تتبع مرحلة التآكل والتقادم الطبيعي (Wear-out)، ويجب تقليل الفترات بين العمرات الدورية.',
        textEn: 'The failures follow the natural wear-out stage, and the intervals between periodic overhauls must be reduced.',
        isCorrect: false,
        explanation: 'مرحلة التآكل تتطلب أن تكون بيتا أكبر من 1 بكثير (Beta > 1.0).',
        explanationEn: 'The wear-out stage requires beta to be much greater than 1 (Beta > 1.0).',
      },
      {
        text: 'المضخات تعمل بموثوقية كاملة 100% ولا تحتاج لأي متابعة.',
        textEn: 'The pumps operate at 100% full reliability and need no monitoring at all.',
        isCorrect: false,
        explanation: 'بيتا 0.65 تعني وجود أعطال مبكرة متكررة تحتاج لضبط الجودة.',
        explanationEn: 'Beta 0.65 means recurring early failures needing quality control.',
      },
      {
        text: 'يجب زيادة سرعة دوران المضخة بنسبة 35% لرفع قيمة بيتا إلى 1.',
        textEn: 'The pump rotation speed must be increased by 35% to raise the beta value to 1.',
        isCorrect: false,
        explanation: 'معامل بيتا هو رقم إحصائي لا علاقة له بزيادة سرعة الدوران الميكانيكية.',
        explanationEn: 'Beta is a statistical number unrelated to increasing the mechanical rotation speed.',
      }
    ]
  },
  {
    scenario: 'أظهر تحليل ويبول لصمامات تحكم إلكترونية أن قيمة معامل الشكل (Beta = 1.05) تقريباً. اقترح رئيس قسم الصيانة جدولة استبدال وقائي لجميع الصمامات كل 6 أشهر.',
    scenarioEn: 'A Weibull analysis of electronic control valves showed the shape parameter value (Beta = 1.05) approximately. The maintenance department head proposed scheduling preventive replacement of all valves every 6 months.',
    question: 'كيف يقيّم مهندس الموثوقية (CMRP) هذا المقترح استناداً لخصائص توزيع ويبول؟',
    questionEn: 'How does the reliability engineer (CMRP) evaluate this proposal based on the Weibull distribution characteristics?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'مقترح غير مجدٍ اقتصادياً وهندسياً؛ لأن بيتا القريبة من 1 (Beta ≈ 1.0) تعني أن معدل الفشل عشوائي تماماً وثابت مع الزمن (Exponential Distribution)، والاستبدال المجدول بالوقت لن يقلل من احتمالية الفشل بل يهدر الميزانية.',
        textEn: 'An economically and engineering-ineffective proposal; beta close to 1 (Beta ≈ 1.0) means the failure rate is completely random and constant over time (exponential distribution), and time-scheduled replacement will not reduce the failure probability but waste the budget.',
        isCorrect: true,
        explanation: 'عندما تكون بيتا تساوي 1 تقريباً (Beta = 1.0)، يكون معدل الفشل ثابتاً (Constant Failure Rate) كالأعطال العشوائية للدوائر الإلكترونية. احتمالية عطل الصمام الجديد في الغد مطابقة لاحتمالية عطل صمام يعمل منذ عام. التكتيك المناسب هو المراقبة المشروطة CBM أو التشغيل حتى العطل RTF، وليس الصيانة الوقائية بالزمن.',
        explanationEn: 'When beta is approximately equal to 1 (Beta = 1.0), the failure rate is constant, like the random failures of electronic circuits. The probability of a new valve failing tomorrow equals the probability of a valve working for a year failing. The appropriate tactic is condition-based monitoring (CBM) or run-to-failure (RTF), not time-based preventive maintenance.',
      },
      {
        text: 'مقترح ممتاز لأن تغيير الصمامات كل 6 أشهر يضمن عدم تعطلها نهائياً.',
        textEn: 'An excellent proposal because replacing the valves every 6 months guarantees they never fail.',
        isCorrect: false,
        explanation: 'الصمامات العشوائية قد تفشل بعد 3 أيام من الاستبدال الجديد تماماً كما تفشل القديمة.',
        explanationEn: 'Random valves may fail 3 days after new replacement just as the old ones fail.',
      },
      {
        text: 'يجب استبدال الصمامات كل شهر بدلاً من 6 أشهر.',
        textEn: 'The valves should be replaced every month instead of 6 months.',
        isCorrect: false,
        explanation: 'مضاعفة الاستبدال تهدر قطع الغيار دون أي فائدة اعتمادية.',
        explanationEn: 'Doubling replacement wastes spare parts without any reliability benefit.',
      },
      {
        text: 'بيتا = 1 تعني أن الصمامات لا تفشل إطلاقاً.',
        textEn: 'Beta = 1 means the valves never fail at all.',
        isCorrect: false,
        explanation: 'بيتا = 1 تعني معدل فشل ثابت (معدل سنوي ثابت) وليس انعدام الأعطال.',
        explanationEn: 'Beta = 1 means a constant failure rate (a fixed annual rate), not the absence of failures.',
      }
    ]
  },
  {
    scenario: 'أظهرت دراسة ويبول لبطانات فرامل سيور الفحم في محطة طاقة أن معامل الشكل يساوي (Beta = 3.8)، مع عمر مميز (Eta = 5000 ساعة تشغيل).',
    scenarioEn: 'A Weibull study of coal conveyor brake linings at a power station showed the shape parameter equal to (Beta = 3.8), with a characteristic life (Eta = 5000 operating hours).',
    question: 'ما هو التكتيك الأمثل للصيانة في هذه الحالة لضمان أعلى موثوقية بأقل تكلفة؟',
    questionEn: 'What is the optimal maintenance tactic in this case to ensure the highest reliability at the lowest cost?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تطبيق الصيانة الوقائية المجدولة بالزمن (Time-Based Replacement) قبل بلوغ نقطة التآكل؛ لأن بيتا أكبر من 3 تعني تآكلاً ميكانيكياً متوقعاً وشديد الانضباط يتبع التوزيع الطبيعي (Normal Distribution).',
        textEn: 'Apply time-based scheduled preventive replacement before reaching the wear-out point; beta greater than 3 means an expected, tightly disciplined mechanical wear-out following the normal distribution.',
        isCorrect: true,
        explanation: 'عندما تكون بيتا أكبر من 2 وتصل لـ 3.5 إلى 4، يماثل ويبول التوزيع الطبيعي الغاوسي (Gaussian/Normal Distribution)، حيث يوجد عمر افتراضي محدد تهترئ عنده القطعة حتماً (Wear-out). هنا فقط تنجح الصيانة الوقائية بالوقت (Scheduled Overhaul/Discard) بجدولة الاستبدال قبل وصول القطعة لمنطقة الفشل المحتوم.',
        explanationEn: 'When beta is greater than 2 and reaches 3.5 to 4, Weibull resembles the normal (Gaussian) distribution, where a definite service life exists at which the part inevitably wears out. Only here does time-based preventive maintenance (scheduled overhaul/discard) succeed by scheduling replacement before the part reaches the inevitable failure zone.',
      },
      {
        text: 'ترك البطانات لتعمل حتى تنكسر وتتوقف تماماً (Run to Failure).',
        textEn: 'Leave the linings to run until they break and stop completely (run to failure).',
        isCorrect: false,
        explanation: 'تركها تفشل عشوائياً يعطل سيور الفحم ويوقف المحطة ويدمر الأقراص الحديدية المجاورة.',
        explanationEn: 'Leaving them to fail randomly stops the coal conveyors, shuts down the station, and destroys the adjacent iron discs.',
      },
      {
        text: 'إعادة تصميم البطانات لتصنع من البلاستيك الخفيف.',
        textEn: 'Redesign the linings to be made of light plastic.',
        isCorrect: false,
        explanation: 'البلاستيك لا يتحمل احتكاك الفرامل العنيف وسيذوب فورياً.',
        explanationEn: 'Plastic cannot withstand the violent brake friction and will melt immediately.',
      },
      {
        text: 'تجاهل قيمة بيتا لأنها رقم نظري لا يفيد في الميدان.',
        textEn: 'Ignore the beta value because it is a theoretical number useless in the field.',
        isCorrect: false,
        explanation: 'تحليل ويبول هو أساس تحديد مهام الصيانة الوقائية في كبرى الشركات العالمية.',
        explanationEn: 'Weibull analysis is the basis for determining preventive maintenance tasks in the largest global companies.',
      }
    ]
  },
  {
    scenario: 'عملت مضخة بترولية لمدة 8000 ساعة تشغيل خلال العام، وتعرضت لـ 4 أعطال مفاجئة استغرقت زمناً إجمالياً للإصلاح قدره 40 ساعة.',
    scenarioEn: 'An oil pump operated for 8000 operating hours during the year and experienced 4 sudden failures that took a total repair time of 40 hours.',
    question: 'ما هي قيمة متوسط الوقت بين الأعطال (MTBF)، ومتوسط وقت الإصلاح (MTTR)، ونسبة الإتاحة الذاتية (Inherent Availability) لهذه المضخة؟',
    questionEn: 'What are the values of the Mean Time Between Failures (MTBF), Mean Time To Repair (MTTR), and inherent availability of this pump?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'MTBF = 2000 ساعة، MTTR = 10 ساعات، والإتاحة الذاتية Ai = 99.5%.',
        textEn: 'MTBF = 2000 hours, MTTR = 10 hours, and inherent availability Ai = 99.5%.',
        isCorrect: true,
        explanation: 'الحساب الهندسي الدقيق:\n1. MTBF = 8000 ساعة ÷ 4 أعطال = 2000 ساعة.\n2. MTTR = 40 ساعة إصلاح ÷ 4 أعطال = 10 ساعات.\n3. الإتاحة الذاتية Ai = MTBF ÷ (MTBF + MTTR) = 2000 ÷ (2000 + 10) = 2000 ÷ 2010 = 99.5%.',
        explanationEn: 'The precise engineering calculation:\n1. MTBF = 8000 hours ÷ 4 failures = 2000 hours.\n2. MTTR = 40 repair hours ÷ 4 failures = 10 hours.\n3. Inherent availability Ai = MTBF ÷ (MTBF + MTTR) = 2000 ÷ (2000 + 10) = 2000 ÷ 2010 = 99.5%.',
      },
      {
        text: 'MTBF = 8000 ساعة، MTTR = 40 ساعة، والإتاحة = 80%.',
        textEn: 'MTBF = 8000 hours, MTTR = 40 hours, and availability = 80%.',
        isCorrect: false,
        explanation: 'لم يتم القسمة على عدد الأعطال لحساب المتوسط.',
        explanationEn: 'No division by the number of failures was done to calculate the average.',
      },
      {
        text: 'MTBF = 400 ساعة، MTTR = 4 ساعات، والإتاحة = 90%.',
        textEn: 'MTBF = 400 hours, MTTR = 4 hours, and availability = 90%.',
        isCorrect: false,
        explanation: 'أرقام وحسابات خاطئة لا تطابق المعطيات.',
        explanationEn: 'Wrong numbers and calculations that do not match the given data.',
      },
      {
        text: 'لا يمكن حساب الإتاحة إلا إذا كانت المضخة تعمل بدون توقف لمدة 10 سنوات.',
        textEn: 'Availability cannot be calculated unless the pump operates without stoppage for 10 years.',
        isCorrect: false,
        explanation: 'معايير SMRP تطبق هذه المعادلات سنوياً وشهرياً لمراقبة أداء الأصول.',
        explanationEn: 'SMRP standards apply these equations annually and monthly to monitor asset performance.',
      }
    ]
  },
  {
    scenario: 'أحد مديري المصانع يرغب في تحسين نسبة الإتاحة (Availability) لخط التعبئة الرئيسي، ويسأل مهندس الموثوقية: "هل نركز على زيادة MTBF أم تقليل MTTR؟"',
    scenarioEn: 'A plant manager wants to improve the availability ratio of the main packaging line and asks the reliability engineer: "Do we focus on increasing MTBF or reducing MTTR?"',
    question: 'وفقاً لمنهجية SMRP، ما هي الإجابة الهندسية الأكثر دقة وشمولاً؟',
    questionEn: 'According to SMRP methodology, what is the most precise and comprehensive engineering answer?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'كلاهما ضروري ومتكامل؛ زيادة MTBF تتحقق بالموثوقية والصيانة الاستباقية لمنع تكرار العطل، بينما تقليل MTTR يتحقق بقابلية الصيانة (Maintainability) والتخطيط المسبق لحزم العمل وتوفر قطع الغيار وتدريب الفنيين.',
        textEn: 'Both are necessary and complementary; increasing MTBF is achieved through reliability and proactive maintenance that prevents failure recurrence, while reducing MTTR is achieved through maintainability, advance work-package planning, spare parts availability, and technician training.',
        isCorrect: true,
        explanation: 'الإتاحة معادلة ذات شقين (MTBF و MTTR). الموثوقية تبقي المعدة تعمل وقتاً أطول (زيادة MTBF)، بينما احترافية إدارة العمل والتخطيط والجدولة تجعل الإصلاح أسرع وأكفأ عند وقوع العطل (تقليل MTTR). كلاهما يرفع الإتاحة التشغيلية لأعلى مستوى.',
        explanationEn: 'Availability is a two-sided equation (MTBF and MTTR). Reliability keeps the asset running longer (increasing MTBF), while professional work management, planning, and scheduling make the repair faster and more efficient when the failure occurs (reducing MTTR). Both raise operational availability to the highest level.',
      },
      {
        text: 'التركيز فقط على MTTR وجعل الفنيين يركضون بسرعة أكبر في الورشة.',
        textEn: 'Focus only on MTTR and make the technicians run faster in the workshop.',
        isCorrect: false,
        explanation: 'السرعة العشوائية تسبب حوادث سلامة وتزيد من أخطاء التركيب.',
        explanationEn: 'Random speed causes safety accidents and increases installation errors.',
      },
      {
        text: 'التركيز فقط على MTBF وتجاهل زمن الإصلاح تماماً حتى لو استغرق شهوراً.',
        textEn: 'Focus only on MTBF and completely ignore repair time even if it takes months.',
        isCorrect: false,
        explanation: 'إذا استغرق الإصلاح وقتاً طويلاً فإن الإتاحة ستنهار وتتوقف أرباح المصنع.',
        explanationEn: 'If the repair takes a long time, availability collapses and the plant profits stop.',
      },
      {
        text: 'إلغاء قياس كلا المؤشرين والاعتماد على عدد ساعات العمل الإضافي للفنيين.',
        textEn: 'Cancel measuring both indicators and rely on the number of technicians\u2019 overtime hours.',
        isCorrect: false,
        explanation: 'ساعات العمل الإضافي مؤشر تكلفة وليس مؤشر موثوقية أو إتاحة أصول.',
        explanationEn: 'Overtime hours are a cost indicator, not a reliability or asset availability indicator.',
      }
    ]
  }

  ],
};