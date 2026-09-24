import type { QuizBank } from '../types';

export const quizCmrp11: QuizBank = {
  id: 'quiz-cmrp-1-1',
  questions: [
  {
    scenario: 'تولى مهندس موثوقية جديد إدارة مصنع للبتروكيماويات، ولاحظ أن مدير الصيانة التقليدي يفرض جدولاً صارماً لاستبدال محامل (Bearings) المضخات الدوارة كل 6 أشهر كإجراء وقائي دوري (Time-Based PM)، رغم أن سجلات المصنع تُظهر أن 60% من أعطال المضخات تحدث خلال الأسبوعين الأولين بعد عملية الاستبدال.',
    scenarioEn: 'A new reliability engineer takes over a petrochemical plant and notices that the traditional maintenance manager imposes a strict schedule of replacing the rotating pumps\u2019 bearings every 6 months as periodic preventive maintenance (time-based PM), even though plant records show that 60% of pump failures occur within the first two weeks after replacement.',
    question: 'وفقاً لنتائج دراسة نولان وهيب (Nowlan & Heap) المعتمدة في منهج CMRP، ما هو التفسير العلمي الصحيح لهذه الظاهرة وما هو الإجراء الأنسب؟',
    questionEn: 'According to the Nowlan & Heap study findings adopted in the CMRP framework, what is the correct scientific explanation of this phenomenon and the best action?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'المحامل تتبع النمط F (وفيات الرضع)، وتفكيك الماكينة واستبدال القطع السليمة أدخل عيوباً بشرية جديدة (Human-Induced Failures)؛ والحل هو الانتقال للمراقبة المشروطة CBM بفحص الاهتزازات.',
        textEn: 'The bearings follow pattern F (infant mortality); disassembling the machine and replacing healthy parts introduced new human-induced failures; the solution is to move to CBM with vibration inspection.',
        isCorrect: true,
        explanation: 'النمط F يمثل 68% من سلوك المعدات، حيث ترتفع احتمالية الفشل بشدة بعد التدخل البشري والتركيب بسبب عيوب المحاذاة أو التزييت الخاطئ. التدخل الزمني الوقائي يضر بالمعدة بدلاً من حمايتها.',
        explanationEn: 'Pattern F represents 68% of equipment behavior, where failure probability rises sharply after human intervention and installation due to misalignment or wrong lubrication defects. Time-based preventive intervention harms the equipment instead of protecting it.',
      },
      {
        text: 'المحامل تتبع منحنى حوض الاستحمام (النمط A)، ويجب تقليل فترة الاستبدال من 6 أشهر إلى 3 أشهر لتفادي دخول منطقة التآكل.',
        textEn: 'The bearings follow the bathtub curve (pattern A), and the replacement interval should be reduced from 6 months to 3 months to avoid entering the wear-out zone.',
        isCorrect: false,
        explanation: 'النمط A لا يمثل سوى 4% من المعدات. تقليل الفترة لـ 3 أشهر سيزيد من وتيرة تفكيك الماكينة وبالتالي يضاعف من معدل أعطال وفيات الرضع!',
        explanationEn: 'Pattern A represents only 4% of equipment. Reducing the interval to 3 months will increase the frequency of machine disassembly and thus double the infant-mortality failure rate!',
      },
      {
        text: 'المشكلة تكمن في انخفاض جودة المحامل المشتراة، ويجب تغيير المورّد مع الاستمرار في نفس جدول الاستبدال الوقائي كل 6 أشهر.',
        textEn: 'The problem lies in the low quality of the purchased bearings, and the supplier should be changed while keeping the same 6-month preventive replacement schedule.',
        isCorrect: false,
        explanation: 'حتى مع أعلى المحامل جودة في العالم، إذا تم استبدالها دورياً بدون داعٍ، فإن أخطاء المحاذاة والتركيب والتزييت المفرط ستتسبب في أعطال مبكرة.',
        explanationEn: 'Even with the highest-quality bearings in the world, if they are replaced periodically without need, misalignment, installation, and over-greasing errors will cause early failures.',
      },
      {
        text: 'يجب زيادة فترات تزييت وتشحيم المحامل أثناء التشغيل لتأخير الوصول إلى نقطة الفشل.',
        textEn: 'The bearing lubrication and greasing intervals during operation should be increased to delay reaching the failure point.',
        isCorrect: false,
        explanation: 'التشحيم المفرط (Over-greasing) هو أحد الأسباب الرئيسية لانهيار المحامل. الحل الجذري هو تغيير استراتيجية الصيانة من الاستبدال بالزمن إلى الصيانة المشروطة CBM.',
        explanationEn: 'Over-greasing is one of the main causes of bearing collapse. The radical solution is changing the maintenance strategy from time-based replacement to condition-based maintenance (CBM).',
      }
    ]
  },
  {
    scenario: 'أجرت شركة تعدين كبرى تحليلاً لسجلات أعطال أسطولها المكون من 400 معدة ثقيلة ومحركات ومحولات، واكتشف فريق العمل أن الغالبية العظمى من الأجهزة لا تظهر أي ارتباط إحصائي بين عمر المعدة ومعدل تعطلها.',
    scenarioEn: 'A major mining company analyzed the failure records of its fleet of 400 heavy machines, motors, and transformers, and the team discovered that the vast majority of assets show no statistical correlation between asset age and failure rate.',
    question: 'ما هي النسبة المئوية التقريبية التي أكدتها أبحاث الاعتمادية (Nowlan & Heap ثم الدراسات اللاحقة مثل US Navy) للأعطال غير المرتبطة بالعمر الزمني (Non-Age Related)؟',
    questionEn: 'What is the approximate percentage confirmed by reliability research (Nowlan & Heap, then later studies such as the US Navy) for failures that are not related to chronological age (non-age-related)?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'حوالي 89% (المنحنيات D, E, F مجتمعة).',
        textEn: 'About 89% (curves D, E, and F combined).',
        isCorrect: true,
        explanation: 'أثبتت دراسات نولان وهيب أن المنحنيات D (7%) و E (14%) و F (68%) تشكل معاً 89% من أعطال المعدات المعقدة الحديثة، وكلها لا ترتبط بعمر زمني محدد.',
        explanationEn: 'Nowlan & Heap studies proved that curves D (7%), E (14%), and F (68%) together form 89% of modern complex equipment failures, all of which are not linked to a specific chronological age.',
      },
      {
        text: 'حوالي 50% بالتساوي بين الأعطال الزمنية والأعطال العشوائية.',
        textEn: 'About 50%, split evenly between age-related and random failures.',
        isCorrect: false,
        explanation: 'هذا افتراض غير صحيح تاريخياً؛ الاعتقاد القديم كان يظن أن 100% من المعدات تبلى بالزمن، لكن الدراسات أثبتت أن 11% فقط مرتبطة بالعمر.',
        explanationEn: 'This is historically incorrect; the old belief assumed 100% of equipment wears out with age, but studies proved only 11% is age-related.',
      },
      {
        text: 'حوالي 11% فقط، بينما 89% ترتبط بالعمر الزمني وساعات التشغيل.',
        textEn: 'Only about 11%, while 89% are linked to chronological age and operating hours.',
        isCorrect: false,
        explanation: 'هذا عكس الواقع تماماً؛ 11% فقط هي المرتبطة بالعمر (المنحنيات A: 4%, B: 2%, C: 5%).',
        explanationEn: 'This is exactly the opposite of reality; only 11% is age-related (curves A: 4%, B: 2%, C: 5%).',
      },
      {
        text: 'تختلف تماماً بين الطيران والصناعة العامة ولا يمكن تطبيق نتائج دراسات الطيران على المصانع.',
        textEn: 'It differs completely between aviation and general industry, and aviation study results cannot be applied to factories.',
        isCorrect: false,
        explanation: 'كررت البحرية الأمريكية (US Navy) ومصانع الورق والصلب نفس الدراسات ووجدت نتائج متطابقة تقريباً (ما بين 89% إلى 92% عشوائية).',
        explanationEn: 'The US Navy and paper and steel plants repeated the same studies and found almost identical results (between 89% and 92% random).',
      }
    ]
  },
  {
    scenario: 'أحد مكونات محطة معالجة مياه يتعرض لاحتكاك ميكانيكي مباشر مع مياه محملة بالرمال والحصى (Abrasive Wear)، مثل بطانة قادوس الرمال وحواف شفرات التحريك.',
    scenarioEn: 'A component of a water treatment plant is subject to direct mechanical friction with water loaded with sand and gravel (abrasive wear), such as the lining of a sand hopper and the edges of agitator blades.',
    question: 'أي من منحنيات الأعطال الستة يُعبر بشكل مثالي عن هذا النوع من المكونات البسيطة، وما هي استراتيجية الصيانة الأنسب له؟',
    questionEn: 'Which of the six failure curves best represents this type of simple component, and what is the most suitable maintenance strategy for it?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'النمط B (التآكل التقليدي مع تقدم العمر Wear-out)، والاستراتيجية المناسبة هي الاستبدال الوقائي الدوري المبني على ساعات العمل أو سمك التآكل.',
        textEn: 'Pattern B (classic wear-out with age), and the suitable strategy is periodic preventive replacement based on operating hours or wear thickness.',
        isCorrect: true,
        explanation: 'الأجزاء الميكانيكية البسيطة المعرضة لبري واحتكاك مباشر تتصرف وفق النمط B (احتمالية فشل منخفضة في البداية ثم ارتفاع سريع وحاد عند استهلاك المادة)، وهنا تنجح الصيانة الوقائية بالزمن أو قياس السمك.',
        explanationEn: 'Simple mechanical parts subject to abrasion and direct friction behave according to pattern B (low failure probability at the start, then a rapid sharp rise when material is consumed), where time-based preventive maintenance or thickness measurement succeeds.',
      },
      {
        text: 'النمط E (العشوائي تماماً)، والحل هو تركه يعمل حتى ينهار (Run to Failure).',
        textEn: 'Pattern E (completely random), and the solution is to run it to failure.',
        isCorrect: false,
        explanation: 'التآكل الاحتكاكي ليس عشوائياً بل عملية فيزيائية حتمية تزداد بمرور ساعات الاحتكاك.',
        explanationEn: 'Abrasive wear is not random but an inevitable physical process that increases with friction hours.',
      },
      {
        text: 'النمط F (وفيات الرضع)، ويجب عدم لمس المعدة نهائياً.',
        textEn: 'Pattern F (infant mortality), and the asset should never be touched at all.',
        isCorrect: false,
        explanation: 'النمط F خاص بالمعدات التي تحتوي تجميعات دقيقة أو إلكترونيات، وليس أسطح التآكل البسيطة.',
        explanationEn: 'Pattern F is specific to equipment with precision assemblies or electronics, not simple wear surfaces.',
      },
      {
        text: 'النمط D (استقرار أولي ثم ثبات)، والصيانة الوقائية عديمة الفائدة معه.',
        textEn: 'Pattern D (initial stability then constancy), and preventive maintenance is useless with it.',
        isCorrect: false,
        explanation: 'النمط D لا يظهر منطقة تآكل واضحة، بينما بطانات الرمال لها عمر افتراضي محسوب.',
        explanationEn: 'Pattern D shows no clear wear-out zone, whereas sand linings have a calculated service life.',
      }
    ]
  },
  {
    scenario: 'خلال اجتماع مراجعة استراتيجية الصيانة، اقترح مشرف الورشة إرسال جميع المحركات الكهربائية بقدرة 100 كيلووات لعمل "عمرة كاملة وشاملة (Overhaul)" كل سنتين بغض النظر عن حالتها التشغيلية، لتصفير احتمالية الأعطال.',
    scenarioEn: 'During a maintenance strategy review meeting, the workshop supervisor proposed sending all 100 kW electric motors for a "full comprehensive overhaul" every two years regardless of their operating condition, to reset the failure probability to zero.',
    question: 'بصفتك مهندس موثوقية معتمد (CMRP)، كيف تقيم هذا الاقتراح استناداً لأفضل ممارسات الاعتمادية؟',
    questionEn: 'As a Certified Maintenance and Reliability Professional (CMRP), how do you evaluate this proposal based on reliability best practices?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'اقتراح خاطئ؛ لأن المحركات الكهربائية تتبع النمط E أو F (عشوائي / وفيات الرضع)، والفك وإعادة اللف الدوري يرفع احتمالية إتلاف العزل وضعف التركيب (Infant Mortality) دون تحقيق أي موثوقية إضافية.',
        textEn: 'A wrong proposal; electric motors follow pattern E or F (random / infant mortality), and periodic disassembly and rewinding raise the probability of insulation damage and weak assembly (infant mortality) without achieving any additional reliability.',
        isCorrect: true,
        explanation: 'العمرات الدورية غير المبررة بالأعطال تسبب اضطراباً في العزل الحراري، وتلفاً في كراسي التحميل أثناء التجميع، وهو ما حذرت منه SMRP وسمّته "Maintenance-Induced Failures".',
        explanationEn: 'Periodic overhauls not justified by failures disturb the thermal insulation and damage bearing housings during assembly, which SMRP warned about and named "maintenance-induced failures".',
      },
      {
        text: 'اقتراح ممتاز يضمن بقاء المحركات في حالة المصنع بشكل دائم.',
        textEn: 'An excellent proposal that keeps the motors in as-new condition permanently.',
        isCorrect: false,
        explanation: 'العمرة لا تضمن عودة المحرك لحالة المصنع، بل إن الإحصائيات تؤكد أن المحركات تفشل أكثر بعد العمرات غير الضرورية.',
        explanationEn: 'An overhaul does not guarantee the motor returns to as-new condition; statistics confirm motors fail more after unnecessary overhauls.',
      },
      {
        text: 'الاقتراح سليم بشرط زيادة فترة العمرة إلى 4 سنوات بدلاً من سنتين.',
        textEn: 'The proposal is sound provided the overhaul interval is increased to 4 years instead of two.',
        isCorrect: false,
        explanation: 'المشكلة ليست في مدة السنتين أو الأربع، بل في المبدأ نفسه: ربط صيانة المحرك الكهربائي بالزمن بدلاً من حالته الفعلية (الحرارة، الاهتزاز، فحص العزل).',
        explanationEn: 'The problem is not the two-year or four-year duration but the principle itself: linking electric motor maintenance to time instead of its actual condition (temperature, vibration, insulation testing).',
      },
      {
        text: 'يجب استبدال المحركات بمحركات جديدة بدلاً من عمل عمرة لها كل سنتين.',
        textEn: 'The motors should be replaced with new motors instead of overhauling them every two years.',
        isCorrect: false,
        explanation: 'تكلفة باهظة وغير مبررة هندسياً وتخالف مبادئ إدارة الأصول.',
        explanationEn: 'An excessive cost that is not engineering-justified and contradicts asset management principles.',
      }
    ]
  },
  {
    scenario: 'طلب منك مدير المصنع تقديم مؤشر يوضح للمدير العام الفرق بين "المعدات التي تستفيد حقاً من الصيانة الوقائية المعتمدة على الزمن (Time-based PM)" وتلك التي تحتاج إلى "صيانة مشروطة بالحالة (CBM)".',
    scenarioEn: 'The plant manager asks you to present an indicator that clarifies to the general manager the difference between "equipment that truly benefits from time-based preventive maintenance (PM)" and equipment needing "condition-based maintenance (CBM)".',
    question: 'ما هو المعيار العلمي الهندسي الفاصل بين الاثنين؟',
    questionEn: 'What is the scientific engineering criterion separating the two?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'وجود "عمر تقادم محدد ومؤكد إحصائياً (Identifiable Wear-Out Age)" ومعدل تسارع تآكل واضح، وهو ما يتوفر فقط في أنماط الأعطال A, B, C.',
        textEn: 'The existence of an "identifiable, statistically confirmed wear-out age" with a clear wear acceleration rate, available only in failure patterns A, B, and C.',
        isCorrect: true,
        explanation: 'لكي تنجح الصيانة الوقائية الزمنية (PM)، يجب أن يكون للمعدة نقطة اهتراء متوقعة إحصائياً (Wear-out Characteristic). بدون هذه النقطة، تصبح الصيانة الوقائية مجرد تخمين عشوائي غير مجدٍ.',
        explanationEn: 'For time-based preventive maintenance (PM) to succeed, the asset must have a statistically expected wear-out characteristic. Without that point, preventive maintenance becomes a useless random guess.',
      },
      {
        text: 'سعر المعدة؛ فالمعدات باهظة الثمن تطبق عليها الصيانة الوقائية والمعدات الرخيصة صيانة مشروطة.',
        textEn: 'The asset price; expensive equipment gets preventive maintenance and cheap equipment gets condition-based maintenance.',
        isCorrect: false,
        explanation: 'التكلفة تحدد الحرجية والأثر المالي، لكن نوع الصيانة يحدده السلوك الفيزيائي ونمط الفشل.',
        explanationEn: 'Cost determines criticality and financial impact, but the physical behavior and failure pattern determine the maintenance type.',
      },
      {
        text: 'حجم المعدة وسرعة دورانها الميكانيكية.',
        textEn: 'The asset size and its mechanical rotational speed.',
        isCorrect: false,
        explanation: 'الحجم والسرعة لا يحددان هل العطل عشوائي أم مرتبط بالعمر.',
        explanationEn: 'Size and speed do not determine whether the failure is random or age-related.',
      },
      {
        text: 'توصيات كتالوج الشركة الصانعة (OEM Manuals) بغض النظر عن ظروف التشغيل الفعلية.',
        textEn: 'OEM manual recommendations regardless of actual operating conditions.',
        isCorrect: false,
        explanation: 'كتالوجات الصانع غالباً ما تبالغ في طلب الاستبدال الزمني لحماية نفسها وبيع قطع الغيار، وهو ما يصححه منهج RCM.',
        explanationEn: 'Manufacturer catalogs often exaggerate the requirement for time-based replacement to protect themselves and sell spare parts, which the RCM methodology corrects.',
      }
    ]
  }

  ],
};