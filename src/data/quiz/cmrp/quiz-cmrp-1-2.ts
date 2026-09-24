import type { QuizBank } from '../types';

export const quizCmrp12: QuizBank = {
  id: 'quiz-cmrp-1-2',
  questions: [
  {
    scenario: 'أظهرت دراسة هندسية لمروحة سحب دخان كبرى في مصنع أسمنت أن عيوب محاملها (Bearings) يمكن رصدها بواسطة أجهزة قياس الاهتزازات (Vibration Analysis) قبل 40 يوماً من حدوث الانهيار الوظيفي التام للمروحة.',
    scenarioEn: 'An engineering study of a large smoke extraction fan in a cement plant showed that its bearing defects can be detected by vibration analysis 40 days before the complete functional collapse of the fan.',
    question: 'وفقاً لمعايير SMRP وقواعد صيانة الاعتمادية (RCM)، ما هو الحد الأقصى لتردد جولات فحص الاهتزازات (Inspection Frequency) لضمان عدم حدوث الفشل دون اكتشافه؟',
    questionEn: 'According to SMRP standards and reliability-centered maintenance (RCM) rules, what is the maximum vibration inspection frequency to guarantee that failure does not occur undetected?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'مرة كل 20 يوماً (أو أقل)، تطبيقاً لقاعدة نصف الفاصل الزمني (P-F / 2).',
        textEn: 'Once every 20 days (or less), applying the half-interval rule (P-F / 2).',
        isCorrect: true,
        explanation: 'القاعدة الهندسية الصارمة لـ SMRP تنص على أن تردد الفحص يجب أن يكون (P-F ÷ 2) أو أقل. إذا كان الفاصل الزمني 40 يوماً وتم الفحص كل 20 يوماً، فمن المستحيل رياضياً أن يبدأ العطل وينهار الأصل بين جولتي فحص متتاليتين.',
        explanationEn: 'The strict SMRP engineering rule states that inspection frequency should be (P-F ÷ 2) or less. If the interval is 40 days and inspection is every 20 days, it is mathematically impossible for the failure to start and collapse between two consecutive inspection rounds.',
      },
      {
        text: 'مرة كل 40 يوماً بالضبط، تزامناً مع الفاصل الزمني الكامل P-F.',
        textEn: 'Exactly once every 40 days, in line with the full P-F interval.',
        isCorrect: false,
        explanation: 'إذا فحصت كل 40 يوماً، فقد يبدأ العطل في اليوم التالي للفحص، وبالتالي ستصل المعدة للانهيار الوظيفي في اليوم 41 قبل حلول موعد الجولة التالية!',
        explanationEn: 'If you inspect every 40 days, the failure may start the day after the inspection, and the equipment will reach functional collapse on day 41 before the next round arrives!',
      },
      {
        text: 'مرة كل 60 يوماً لتقليل تكلفة وقت الفنيين وساعات قياس الاهتزاز.',
        textEn: 'Once every 60 days to reduce the cost of technician time and vibration measurement hours.',
        isCorrect: false,
        explanation: 'تجاوز الفاصل الزمني P-F يجعل الفحص التنبؤي بلا فائدة تقريباً، لأن العطل سيبدأ وينهار في فترة الغياب الطويلة بين الفحوصات.',
        explanationEn: 'Exceeding the P-F interval makes predictive inspection almost useless, because the failure will start and collapse during the long absence between inspections.',
      },
      {
        text: 'مرة كل 5 أيام لضمان أقصى حماية ممكنة للمعدة.',
        textEn: 'Once every 5 days to ensure maximum possible equipment protection.',
        isCorrect: false,
        explanation: 'الفحص كل 5 أيام مجدٍ نظرياً لكنه غير مجدٍ اقتصادياً (Over-inspecting) ويستهلك وقت الكادر دون إضافة موثوقية إضافية مبررة هندسياً.',
        explanationEn: 'Inspection every 5 days is theoretically useful but not economically justified (over-inspecting); it consumes staff time without adding engineering-justified reliability.',
      }
    ]
  },
  {
    scenario: 'في وحدة تكسير هيدروجيني بمصفاة نفط، لاحظ المشغلون صوتاً غير طبيعي (Audible Grinding Noise) صادراً من مضخة تغذية رئيسية، واكتشفوا سخونة عالية عند ملامسة جسم المضخة باليد.',
    scenarioEn: 'In a hydrocracking unit at an oil refinery, operators noticed an abnormal audible grinding noise from a main feed pump and detected high heat when touching the pump body by hand.',
    question: 'استناداً لمنحنى P-F ومستويات الكشف التقني، أين تقع هذه الحالة على منحنى التدهور وما هو أثرها على تكلفة الإصلاح وخطر السلامة؟',
    questionEn: 'Based on the P-F curve and the technical detection levels, where does this case sit on the degradation curve and what is its impact on repair cost and safety risk?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'في المرحلة المتأخرة والحرجة جداً من منحنى P-F (قريبة جداً من النقطة F)؛ حيث تكون الحواس البشرية هي آخر ما يرصد العطل، وتكلفة الإصلاح تضاعفت إلى أضعاف باهظة مع خطر وشيك على السلامة.',
        textEn: 'In the very late, highly critical stage of the P-F curve (very close to Point F); human senses are the last to detect the failure, repair cost has multiplied to an extreme multiple, and a safety risk is imminent.',
        isCorrect: true,
        explanation: 'الحواس البشرية (السمع، الشم، اللمس) تقع في أسفل منحنى P-F قبل الانهيار الوظيفي بوقت وجيز جداً (ساعات أو أيام قليلة). في هذه المرحلة يكون التلف الميكانيكي قد انتشر للأجزاء المجاورة وتضاعفت تكلفة الإصلاح من 25 إلى 40 ضعفاً مقارنة بالكشف المبكر بالموجات فوق الصوتية أو الاهتزاز.',
        explanationEn: 'Human senses (hearing, smell, touch) sit at the bottom of the P-F curve, very shortly before functional collapse (hours or a few days). At this stage the mechanical damage has spread to adjacent parts and the repair cost has multiplied 25 to 40 times compared with early detection by ultrasound or vibration.',
      },
      {
        text: 'في المرحلة المبكرة (نقطة البداية P)، والمضخة لا تزال آمنة تماماً ويمكن تشغيلها لعدة أشهر إضافية.',
        textEn: 'In the early stage (start point P), and the pump is completely safe and can run for several more months.',
        isCorrect: false,
        explanation: 'السمع بالعين المجردة والحرارة الملموسة لا تظهران في بداية العطل بل في مراحله النهائية بعد تدمير المحامل وتلف العمود.',
        explanationEn: 'Audible noise and felt heat do not appear at the start of the failure but in its final stages after the bearings are destroyed and the shaft is damaged.',
      },
      {
        text: 'في منتصف منحنى P-F، ويمكن الاكتفاء بزيادة كمية الشحم لتبريد المضخة وخفض الصوت.',
        textEn: 'In the middle of the P-F curve, and increasing the grease amount suffices to cool the pump and reduce the noise.',
        isCorrect: false,
        explanation: 'التشحيم في هذه المرحلة لن يصلح المعدن التالف وقد يسبب انفجاراً أو اشتعالاً نتيجة الحرارة العالية.',
        explanationEn: 'Lubrication at this stage will not repair the damaged metal and may cause an explosion or ignition due to the high temperature.',
      },
      {
        text: 'المضخة تعمل في ظروف طبيعية ولا داعي لأي قلق.',
        textEn: 'The pump operates under normal conditions and there is no need for any concern.',
        isCorrect: false,
        explanation: 'الضوضاء والحرارة مؤشران خطيران على قرب الانهيار التام.',
        explanationEn: 'Noise and heat are two serious indicators of an approaching total collapse.',
      }
    ]
  },
  {
    scenario: 'اشترت إدارة المصنع جهاز تصوير حراري (Infrared Thermography) وجهاز فحص بالموجات فوق الصوتية (Ultrasound) وأجهزة قياس اهتزازات، لكن مدير الصيانة ينتظر أن تفشل المعدة تماماً لكي يبدأ الفنيون في التفتيش.',
    scenarioEn: 'Plant management bought an infrared thermography camera, an ultrasound inspection device, and vibration measuring instruments, but the maintenance manager waits for the equipment to fail completely before the technicians start inspecting.',
    question: 'ما هو المفهوم الجوهري الذي غاب عن إدارة الصيانة بخصوص القيمة الحقيقية للفاصل الزمني P-F؟',
    questionEn: 'What is the essential concept that maintenance management missed regarding the true value of the P-F interval?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الفاصل الزمني P-F هو "نافذة الإنذار المبكر" التي تمنح فريق التخطيط والجدولة الوقت الكافي لطلب قطع الغيار وتجهيز التصاريح وتنسيق التوقف بدون مفاجآت أو خسائر إنتاجية كارثية.',
        textEn: 'The P-F interval is the "early warning window" that gives the planning and scheduling team enough time to order spare parts, prepare permits, and coordinate the shutdown without surprises or catastrophic production losses.',
        isCorrect: true,
        explanation: 'الهدف من P-F Interval ليس مجرد رصد العطل، بل هو "شراء الوقت" (Buying Time). يسمح للشركة بالانتقال من الصيانة التفاعلية الطارئة إلى الصيانة المخططة المجدولة الهادئة بأقل تكلفة ودون تعطيل خط الإنتاج.',
        explanationEn: 'The goal of the P-F interval is not merely detecting the failure; it is "buying time". It allows the company to move from reactive emergency maintenance to calm, scheduled, planned maintenance at the lowest cost and without disrupting the production line.',
      },
      {
        text: 'أن الفاصل الزمني P-F يمنع حدوث العطل بشكل نهائي وتلقائي دون الحاجة لتدخل بشري.',
        textEn: 'The P-F interval prevents the failure completely and automatically without the need for human intervention.',
        isCorrect: false,
        explanation: 'المنحنى لا يمنع العطل بذاته، بل يعطيك مهلة للاستجابة المخططة قبل حدوث الفشل الوظيفي.',
        explanationEn: 'The curve does not prevent the failure by itself; it gives you a lead time for a planned response before the functional failure occurs.',
      },
      {
        text: 'أن جميع الأجهزة التنبؤية تكشف الأعطال في نفس اللحظة ونفس التردد الزمني.',
        textEn: 'All predictive instruments detect failures at the same moment and the same time frequency.',
        isCorrect: false,
        explanation: 'التقنيات تتدرج زمنياً؛ فالموجات فوق الصوتية تكشف قبل الاهتزازات، والاهتزازات تكشف قبل الحرارة، والحرارة قبل الصوت المسموع.',
        explanationEn: 'Techniques progress in time; ultrasound detects before vibration, vibration detects before heat, and heat before audible sound.',
      },
      {
        text: 'أن الفاصل الزمني P-F ثابت ولا يتغير بين نوع معدة وأخرى.',
        textEn: 'The P-F interval is constant and does not change from one asset type to another.',
        isCorrect: false,
        explanation: 'الفاصل الزمني يختلف بشدة باختلاف سرعة المعدة، الحِمل، ونمط الفشل (من دقائق في الصمامات إلى شهور في كراسي المحاور البطيئة).',
        explanationEn: 'The interval varies sharply with difference in equipment speed, load, and failure pattern (from minutes in valves to months in slow journal bearings).',
      }
    ]
  },
  {
    scenario: 'مهندس صيانة يراقب صندوق تروس (Gearbox) حرج، ويكتشف تقرير تحليل الزيت (Oil Analysis) زيادة مفاجئة في تركيز برادة الحديد الدقيقة، بينما لم تظهر أي قراءات اهتزازات غير طبيعية على الجهاز حتى الآن.',
    scenarioEn: 'A maintenance engineer monitors a critical gearbox and finds the oil analysis report showing a sudden increase in fine iron debris concentration, while no abnormal vibration readings have appeared on the machine yet.',
    question: 'كيف يفسر مهندس الموثوقية (CMRP) هذه النتيجة استناداً لترتيب تقنيات المراقبة المشروطة على منحنى P-F؟',
    questionEn: 'How does the reliability engineer (CMRP) interpret this result based on the ranking of condition-monitoring techniques on the P-F curve?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تحليل الزيوت وعينات البرادة (Wear Debris Analysis) يكشف التآكل الدقيق للأسنان قبل أن يتطور إلى اهتزازات ميكانيكية ديناميكية واسعة النطاق.',
        textEn: 'Oil analysis and wear debris analysis detect fine tooth wear before it develops into broad dynamic mechanical vibration.',
        isCorrect: true,
        explanation: 'في التطبيقات الميكانيكية الخاصة كصناديق التروس الكبيرة والأحمال العالية، يكشف تحليل برادة الزيت المجهري (Analytical Ferrography) وجسيمات الاحتكاك الدقيقة تآكل أسطح التروس في أعلى منحنى P-F بالتزامن مع الموجات فوق الصوتية، وقبل حدوث تشوه هندسي في الأسنان يولد اهتزازات ميكانيكية واسعة النطاق.',
        explanationEn: 'In special mechanical applications such as large gearboxes and high loads, analytical ferrography and fine friction particles detect gear surface wear high on the P-F curve in parallel with ultrasound, before geometric tooth deformation generates broad mechanical vibration.',
      },
      {
        text: 'جهاز تحليل الاهتزازات معطل حتماً ويجب استبداله فوراً.',
        textEn: 'The vibration analyzer is certainly faulty and must be replaced immediately.',
        isCorrect: false,
        explanation: 'جهاز الاهتزاز سليم، ولكنه يقع في مرحلة تالية لتحليل الزيت الدقيق في تدهور أسطح التروس.',
        explanationEn: 'The vibration instrument is fine, but it sits at a later stage than fine oil analysis in gear surface degradation.',
      },
      {
        text: 'يجب تجاهل تقرير الزيت والاعتماد فقط على أجهزة الاهتزاز لأنها المرجع الوحيد.',
        textEn: 'The oil report should be ignored and only vibration instruments should be relied upon as the single reference.',
        isCorrect: false,
        explanation: 'تجاهل تقرير الزيت يؤدي إلى تفاقم تآكل التروس حتى تنهار تماماً دون إنذار كافٍ.',
        explanationEn: 'Ignoring the oil report lets gear wear worsen until the gears collapse completely without sufficient warning.',
      },
      {
        text: 'صندوق التروس وصل بالفعل إلى نقطة الفشل الوظيفي F ويجب إيقافه خلال دقائق.',
        textEn: 'The gearbox has already reached Functional Failure Point F and must be stopped within minutes.',
        isCorrect: false,
        explanation: 'ظهور البرادة الأولية يعني أننا عند نقطة P وما زال لدينا متسع من الوقت للتخطيط والتصرف.',
        explanationEn: 'The initial debris appearance means we are at Point P and still have ample time to plan and act.',
      }
    ]
  },
  {
    scenario: 'أحد المصانع يمتلك نظام فحص اهتزازات يمر على المضخات كل شهرين، بينما معدل تدهور نوع معين من مضخات المواد الكيميائية من نقطة P إلى نقطة F يستغرق 3 أسابيع فقط.',
    scenarioEn: 'A plant runs a vibration inspection system that visits pumps every two months, while the degradation rate of a certain type of chemical pump from Point P to Point F takes only 3 weeks.',
    question: 'ما هي النتيجة الحتمية لهذا التعارض بين تردد الفحص والفاصل الزمني، وما هو القرار الهندسي السليم؟',
    questionEn: 'What is the inevitable consequence of this conflict between inspection frequency and the interval, and what is the sound engineering decision?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'ستفشل المضخات وتتوقف بشكل مفاجئ بين مواعيد الفحص دون أن يتمكن الفريق من التنبؤ بها؛ والحل هو زيادة وتيرة الفحص لتكون أسبوعياً (أقل من 3 أسابيع ÷ 2 = 10.5 أيام) أو تركيب مجسات مراقبة متصلة لحظياً (Online Continuous Monitoring).',
        textEn: 'The pumps will fail and stop suddenly between inspection dates without the team being able to predict them; the solution is to increase inspection frequency to weekly (less than 3 weeks ÷ 2 = 10.5 days) or install online continuous monitoring sensors.',
        isCorrect: true,
        explanation: 'إذا كان تردد الفحص (شهران = 60 يوماً) أطول بكثير من الفاصل الزمني P-F (21 يوماً)، فإن العطل سيبدأ وينتهي والمعدة ستنهار قبل أن يأتي موعد الزيارة التالية، مما يفقد الصيانة التنبؤية قيمتها تماماً.',
        explanationEn: 'If the inspection frequency (two months = 60 days) is much longer than the P-F interval (21 days), the failure will start and end and the asset will collapse before the next visit, completely losing the value of predictive maintenance.',
      },
      {
        text: 'ستستمر المضخات في العمل بأمان لأن الصيانة التنبؤية تحمي المعدة بمجرد قياسها لمرة واحدة.',
        textEn: 'The pumps will keep operating safely because predictive maintenance protects the asset with a single measurement.',
        isCorrect: false,
        explanation: 'القياس لمرة واحدة لا يحمي المعدة مستقبلاً؛ الفاصل الزمني هو الحاكم الأساسي.',
        explanationEn: 'A one-time measurement does not protect the asset in the future; the interval is the primary governing factor.',
      },
      {
        text: 'يجب تحويل المضخة إلى استراتيجية الصيانة حتى العطل (Run to Failure) وإلغاء فحص الاهتزاز نهائياً.',
        textEn: 'The pump should be switched to a run-to-failure strategy and vibration inspection should be cancelled entirely.',
        isCorrect: false,
        explanation: 'المضخات الكيميائية حرجة وتتضمن مخاطر سلامة وبيئة، ولا يجوز تركها تفشل عشوائياً.',
        explanationEn: 'Chemical pumps are critical and carry safety and environmental risks; they may not be left to fail randomly.',
      },
      {
        text: 'تقليل سرعة دوران المضخة إلى النصف لإطالة الفاصل الزمني P-F إلى 6 أشهر.',
        textEn: 'Halving the pump rotation speed to extend the P-F interval to 6 months.',
        isCorrect: false,
        explanation: 'تقليل سرعة المضخة يضر بالعملية الإنتاجية وتدفق السوائل وليس حلاً هندسياً لجدولة الصيانة.',
        explanationEn: 'Reducing pump speed harms the production process and fluid flow and is not an engineering solution for maintenance scheduling.',
      }
    ]
  }

  ],
};