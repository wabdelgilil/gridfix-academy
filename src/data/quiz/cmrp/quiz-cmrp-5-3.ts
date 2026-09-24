import type { QuizBank } from '../types';

export const quizCmrp53: QuizBank = {
  id: 'quiz-cmrp-5-3',
  questions: [
  {
    scenario: 'عُيِّنت مديراً جديداً للاعتمادية في مصنع أسمدة يعاني من أعطال مزمنة وثقافة طوارئ وإطفاء حرائق متجذرة منذ 15 عاماً. الفنيون والمشرفون يعتبرون التدخلات الليلية وإصلاح المضخات المحترقة عملاً بطولياً يستحق المكافأة الإضافية، ويسخرون من جداول التفتيش والتخطيط.',
    scenarioEn: 'You were appointed as a new reliability manager in a fertilizer plant suffering from chronic failures and a firefighting-reactive culture rooted for 15 years. Technicians and supervisors consider night interventions and repairing burnt pumps heroic work deserving extra pay, and they mock inspection and planning schedules.',
    question: 'وفقاً لنموذج جون كوتر (John Kotter) المعتمد في SMRP، ما هي الخطوة الأولى الإلزامية التي يجب أن تبدأ بها لقيادة التغيير الثقافي قبل تطبيق أي أدوات أو إجراءات جديدة؟',
    questionEn: 'Per the John Kotter model adopted in SMRP, what is the mandatory first step you must start with to lead the cultural change before applying any new tools or procedures?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'شراء نظام CMMS حديث فوراً وإلزام الجميع بإدخال البيانات بالقوة تحت طائلة العقوبات والخصومات.',
        textEn: 'Immediately buy a modern CMMS and force everyone to enter data under threat of penalties and deductions.',
        isCorrect: false,
        explanation: 'الفرض الإجباري للأنظمة التكنولوجية في غياب التهيئة الثقافية هو السبب الأول لفشل مشاريع CMMS (تتحول لشاشات ميتة وبيانات مزيفة).',
        explanationEn: 'Forcibly imposing technological systems without cultural preparation is the number one cause of CMMS project failure (they become dead screens and fake data).',
      },
      {
        text: 'خلق إحساس حقيقي ومقنع بالإلحاح (Create a Sense of Urgency) عبر توضيح خسائر المصنع الفادحة ومقارنة وضع المنشأة مع المنافسين، وتبيان أن استمرار ثقافة رد الفعل يهدد أمان الوظائف ومستقبل المنشأة بالكامل.',
        textEn: 'Creating a real and convincing sense of urgency by highlighting the plant\'s heavy losses and comparing the facility\'s position with competitors, and showing that the persistence of the reactive culture threatens job security and the facility\'s entire future.',
        isCorrect: true,
        explanation: 'الخطوة الأولى في نموذج كوتر لإدارة التغيير هي دائماً: "Create a Sense of Urgency". طالما يعتقد الفريق أن الوضع الحالي مقبول وطبيعي ومريح (Complacency)، فإن أي محاولة لتطبيق التخطيط أو RCM ستواجه بمقاومة مستترة ورفض تام. يجب كسر منطقة الراحة الزائفة أولاً بالأرقام والحقائق الصادمة.',
        explanationEn: 'The first step in Kotter\'s change management model is always: "Create a Sense of Urgency". As long as the team believes the current situation is acceptable, normal, and comfortable (Complacency), any attempt to apply planning or RCM will face hidden resistance and outright refusal. The false comfort zone must be broken first with numbers and shocking facts.',
      },
      {
        text: 'البدء مباشرة بتطبيق مصفوفة RCM الشاملة على كافة معدات المصنع في وقت واحد.',
        textEn: 'Start immediately by applying a comprehensive RCM matrix to all plant equipment at once.',
        isCorrect: false,
        explanation: 'تطبيق RCM على المصنع بالكامل دفعة واحدة مستحيل ويهدر الموارد ويصيب الفريق بالإرهاق (RCM Fatigue).',
        explanationEn: 'Applying RCM to the entire plant in one sweep is impossible, wastes resources, and exhausts the team (RCM Fatigue).',
      },
      {
        text: 'فصل المشرفين القدامى واستبدالهم بمهندسين حديثي التخرج يؤمنون بالاعتمادية.',
        textEn: 'Firing veteran supervisors and replacing them with new graduates who believe in reliability.',
        isCorrect: false,
        explanation: 'طرد القيادات التاريخية يفقد المنشأة المعرفة الضمنية الثمينة (Tribal Knowledge) ويخلق ثورة وعداءً داخلياً يدمر بيئة العمل.',
        explanationEn: 'Firing historical leaders loses the facility\'s precious tribal knowledge and creates an internal revolt and hostility that destroys the work environment.',
      }
    ]
  },
  {
    scenario: 'قررت إدارة أحد المصانع التحول إلى برنامج "الموثوقية بقيادة المشغل" (Operator Driven Reliability - ODR). أثناء الاجتماع التنسيقي، ثار رئيس عمال التشغيل وقال: "نحن هنا لتشغيل خط الإنتاج وضخ الأطنان فقط؛ صيانة المعدات وتزييتها والتفتيش عليها وظيفة الورشة والميكانيكا وليس عملنا!".',
    scenarioEn: 'A plant\'s management decided to move to an "Operator Driven Reliability - ODR" program. During the coordination meeting, the operations team leader protested: "We are here only to run the production line and pump the tons; maintaining, lubricating, and inspecting equipment is the workshop\'s and mechanics\' job, not ours!"',
    question: 'ما هو الأسلوب الهندسي والقيادي الأنسب في فكر SMRP للتعامل مع هذا الاعتراض وبناء الشراكة الحقيقية؟',
    questionEn: 'What is the most appropriate engineering and leadership approach in SMRP thinking to handle this objection and build genuine partnership?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الرجوع فوراً عن الفكرة وإلغاء البرنامج تفادياً للمشاكل مع نقابة العمال وفريق الإنتاج.',
        textEn: 'Immediately retreat from the idea and cancel the program to avoid problems with the workers\' union and the production team.',
        isCorrect: false,
        explanation: 'الاستسلام يبقي المنشأة رهينة ثقافة الصوامع المعزولة (Silo Mentality) وتكرار الأعطال المبكرة.',
        explanationEn: 'Surrender keeps the facility hostage to the Silo Mentality culture and recurring early failures.',
      },
      {
        text: 'استخدام قياس قيادة السيارة الشخصية: تبيان أن المشغل لا يطلب منه تفكيك التوربينة، بل مثل سائق السيارة الذي يتفقد الزيت والإطارات ويستشعر أي صوت غريب مبكراً لحماية نفسه وسيارته؛ وتوفير تدريب ممتع مع قوائم تفتيش بصرية بسيطة (Visual Controls) وحوافز للمشغلين الذين يكتشفون بوادر الفشل.',
        textEn: 'Use the personal car driving analogy: show that the operator is not asked to disassemble the turbine, but rather like a car driver who checks the oil and tires and senses any strange noise early to protect himself and his car; and provide engaging training with simple visual controls (Visual Controls) and incentives for operators who detect early signs of failure.',
        isCorrect: true,
        explanation: 'فلسفة ODR (أحد أركان TPM) لا تهدف لتحويل المشغل إلى ميكانيكي، بل إلى حارس أمين على الأصل. التشبيه بقيادة السيارة (Car Owner Analogy) وتوضيح أن تفتيش الأصل يمنع الانفجارات وتوقف الخط المفاجئ الذي يرهق المشغلين أنفسهم، مدعوماً بالتدريب البصري المبسط (Visual Management)، يزيل الخوف ويبني الإحساس بملكية الأصل (Asset Ownership).',
        explanationEn: 'The ODR philosophy (a pillar of TPM) aims not to turn the operator into a mechanic, but into a faithful guardian of the asset. The Car Owner Analogy and clarifying that asset inspection prevents explosions and sudden line stoppages that exhaust the operators themselves, supported by simplified visual management training, removes fear and builds the sense of Asset Ownership.',
      },
      {
        text: 'إصدار قرار إداري بنقل جميع أعمال الورشة الميكانيكية رسمياً لتكون من مهام المشغلين لخفض عدد الفنيين.',
        textEn: 'Issue an administrative decision to officially transfer all mechanical workshop work to the operators\' tasks to cut the number of technicians.',
        isCorrect: false,
        explanation: 'هذا الفهم الخاطئ لـ ODR يؤدي إلى كارثة صناعية وإضرابات عامة لأنه يتجاوز مهارات وحدود مسؤوليات المشغلين.',
        explanationEn: 'This misreading of ODR leads to an industrial catastrophe and general strikes because it exceeds the operators\' skills and responsibility limits.',
      },
      {
        text: 'معاقبة رئيس عمال التشغيل وتعيين مراقبين من الصيانة للتجسس على المشغلين وتفتيشهم.',
        textEn: 'Punish the operations team leader and appoint maintenance monitors to spy on and inspect the operators.',
        isCorrect: false,
        explanation: 'هذا الأسلوب يقضي على الثقة ويخلق ثقافة الخوف والتستر على العيوب والأخطاء.',
        explanationEn: 'This approach destroys trust and creates a culture of fear and concealing defects and errors.',
      }
    ]
  },
  {
    scenario: 'عند تطبيق نظام إدارة الصيانة المحوسب (CMMS) الجديد، تلاحظ أن فني صيانة متميز وخبير يمتلك 25 عاماً من الخبرة يرفض استخدام التابلت أو إغلاق أوامر الشغل إلكترونياً، ويكتفي بكتابة ملاحظات مبهمة على ورق ثم يطلب من صغار الفنيين إدخالها عنه.',
    scenarioEn: 'While rolling out the new Computerized Maintenance Management System (CMMS), you notice that an excellent expert maintenance technician with 25 years of experience refuses to use the tablet or close work orders electronically, and only writes vague notes on paper then asks younger technicians to enter them for him.',
    question: 'باستخدام نموذج ADKAR لإدارة التغيير الفردي (Awareness, Desire, Knowledge, Ability, Reinforcement)، ما هو التشخيص الدقيق لحالة هذا الفني وما هو الإجراء التصحيحي الواجب اتباعه؟',
    questionEn: 'Using the ADKAR model of individual change management (Awareness, Desire, Knowledge, Ability, Reinforcement), what is the precise diagnosis of this technician\'s situation and what corrective action must be followed?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'المشكلة غالباً في "القدرة (Ability)" أو "المعرفة (Knowledge)" الناتجة عن الرهبة التكنولوجية (Tech Anxiety) والخوف من الإحراج أمام زملائه؛ ويجب تخصيص تدريب فردي صبور وتصميم واجهات عربية مبسطة للغاية لتمكينه.',
        textEn: 'The problem is usually in "Ability" or "Knowledge" resulting from tech anxiety and the fear of embarrassment in front of his colleagues; patient one-on-one training must be arranged and extremely simple Arabic interfaces designed to enable him.',
        isCorrect: true,
        explanation: 'في نموذج ADKAR، غالباً ما يخفي كبار الفنيين افتقارهم للمهارة الرقمية (نقص في Ability/Knowledge) خلف مظهر الرفض والتعالي على التكنولوجيا خوفاً على هيبتهم وكرامتهم المهنية. التعامل معهم يتطلب حفظ ماء الوجه، وتدريباً فردياً خاصاً (One-on-One Coaching)، وتطويع التكنولوجيا لتكون سلسة بدلاً من اتهامهم بالتمرد.',
        explanationEn: 'In the ADKAR model, senior technicians often hide their lack of digital skill (deficiency in Ability/Knowledge) behind an appearance of rejection and superiority over technology, fearing for their prestige and professional dignity. Dealing with them requires saving face, special one-on-one coaching, and adapting the technology to be smooth instead of accusing them of rebellion.',
      },
      {
        text: 'المشكلة في الوعي (Awareness) فقط ويجب إعادة إرساله لكافة المحاضرات النظرية حول أهمية السحابة الرقمية.',
        textEn: 'The problem is only in Awareness, and he should be re-sent to all the theoretical lectures about the importance of the digital cloud.',
        isCorrect: false,
        explanation: 'الفني يعي جيداً أهمية النظام لكنه غير قادر تقنياً على التعامل مع الشاشات اللمسية بسلاسة.',
        explanationEn: 'The technician is well aware of the system\'s importance but is technically unable to handle touch screens smoothly.',
      },
      {
        text: 'المشكلة في التعزيز (Reinforcement) ويجب خصم راتبه عند كل أمر شغل لا يدخله بنفسه.',
        textEn: 'The problem is in Reinforcement, and his salary should be deducted for every work order he does not enter himself.',
        isCorrect: false,
        explanation: 'العقاب يعمق المقاومة ويدفع الكفاءات النادرة إما للاستقالة أو إدخال بيانات كاذبة.',
        explanationEn: 'Punishment deepens resistance and pushes rare talents either to resign or enter false data.',
      },
      {
        text: 'إحالته فوراً للتقاعد المبكر لأن الجيل القديم لا يمكن تعليمه أي أدوات جديدة.',
        textEn: 'Immediately refer him to early retirement because the old generation cannot be taught any new tools.',
        isCorrect: false,
        explanation: 'افتراض عدم قدرة الكبار على التعلم مغالطة إدارية فادحة تفرط في أندر العقول الفنية بالمصنع.',
        explanationEn: 'Assuming seniors cannot learn is a grave management fallacy that squanders the plant\'s rarest technical minds.',
      }
    ]
  },
  {
    scenario: 'أطلقت شركة بتروكيماويات مبادرة تحول استراتيجي في الصيانة لتطبيق الصيانة القائمة على الاعتمادية (RCM). في الشهر الأول، طالب مدير المصنع بتقرير يوضح انخفاض ميزانية الصيانة الإجمالية بنسبة 20% كما وعد المستشارون، مهدداً بوقف البرنامج فوراً لعدم رؤيته أي وفر مالي حتى الآن.',
    scenarioEn: 'A petrochemical company launched a strategic maintenance transformation initiative to apply Reliability-Centered Maintenance (RCM). In the first month, the plant manager demanded a report showing a 20% drop in the total maintenance budget as the consultants promised, threatening to stop the program immediately for not seeing any financial savings yet.',
    question: 'بصفتك مهندس اعتمادية محترف معتمد (CMRP)، ما هو المبدأ القيادي الغائب عن مدير المصنع وكيف تقنعه بمواصلة الدعم؟',
    questionEn: 'As a certified professional reliability engineer (CMRP), what leadership principle is missing from the plant manager, and how do you convince him to continue support?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'المدير محق تماماً؛ برامج الاعتمادية الصحيحة يجب أن تخفض النفقات بنسبة 20% فوراً في أول 30 يوماً وإلا فهي فاشلة.',
        textEn: 'The manager is completely right; proper reliability programs must cut expenses by 20% immediately in the first 30 days or they are failures.',
        isCorrect: false,
        explanation: 'مغالطة شائعة؛ التحول للاعتمادية يتطلب في بدايته استثماراً وتطهيراً للـ Backlog وتدريباً (منحنى J-Curve).',
        explanationEn: 'A common fallacy; the reliability transformation requires investment, backlog cleanup, and training at its start (the J-Curve).',
      },
      {
        text: 'إيضاح "منحنى التحول المالي" (The J-Curve of Reliability): في البداية قد ترتفع التكاليف قليلاً لإصلاح العيوب الكامنة المتراكمة، ويجب التركيز في المرحلة الأولى على "المكاسب السريعة" (Quick Wins) مثل القضاء على عطل متكرر في مضخة معينة أو تحسين تزييت خط حرج، لإثبات الجدوى ريثما تنعكس الوفورات الضخمة في الميزانية السنوية.',
        textEn: 'Clarify "The J-Curve of Reliability": at the start, costs may rise slightly to fix accumulated latent defects, and the first phase must focus on "Quick Wins" such as eliminating a recurring failure in a specific pump or improving lubrication of a critical line, to prove viability until the huge savings appear in the annual budget.',
        isCorrect: true,
        explanation: 'في إدارة التغيير والقيادة (Kotter Step 6: Generate Short-Term Wins)، لا يمكن توقع وفر مالي كلي سريع في ميزانية المصنع (Macro-KPIs) خلال شهر. تحتاج مشاريع الصيانة إلى إظهار "Quick Wins" محددة وملموسة وقصيرة الأجل (مثل مضخة كانت تتعطل كل أسبوعين وأصبحت تعمل لشهرين دون توقف)، لشراء الوقت والصبر من الإدارة العليا ريثما تكتمل ثمار الاستراتيجية.',
        explanationEn: 'In change management and leadership (Kotter Step 6: Generate Short-Term Wins), a quick overall financial saving in the plant budget (Macro-KPIs) cannot be expected within a month. Maintenance projects need to show specific, tangible, short-term Quick Wins (such as a pump that used to fail every two weeks now running two months without stoppage), to buy time and patience from senior management until the strategy fruits fully.',
      },
      {
        text: 'تزوير تقرير مالي يظهر انخفاض التكاليف الوهمي لإرضاء المدير وتأجيل الأزمة.',
        textEn: 'Fake a financial report showing an illusory cost drop to satisfy the manager and postpone the crisis.',
        isCorrect: false,
        explanation: 'التزييف المالي انتهاك صارخ لميثاق الشرف الأخلاقي لـ SMRP وللقوانين والنزاهة المهنية.',
        explanationEn: 'Financial falsification is a grave violation of the SMRP code of ethics and of laws and professional integrity.',
      },
      {
        text: 'إيقاف كافة أعمال الصيانة الوقائية والتفتيش لخفض المصروفات فوراً لإثبات النجاح.',
        textEn: 'Stop all preventive maintenance and inspection work to cut expenses immediately and prove success.',
        isCorrect: false,
        explanation: 'هذا هو الانتحار الهندسي بعينه (Deferred Maintenance)، وستنفجر المعدات خلال أشهر قليلة بتكاليف مضاعفة أضعافاً.',
        explanationEn: 'This is engineering suicide itself (Deferred Maintenance), and equipment will blow up within a few months at multiplied costs.',
      }
    ]
  },
  {
    scenario: 'تشتكي إدارة الصيانة من أنه كلما حاولت تحسين موثوقية الأصول، يضغط مدير الإنتاج لإلغاء فترات الصيانة المجدولة قائلاً: "أنا مسؤول عن تحقيق مستهدفات الإنتاج اليومية (Tonnage)، وإذا توقفت الماكينة للصيانة فستنخفض مكافأتي!".',
    scenarioEn: 'The maintenance department complains that every time it tries to improve asset reliability, the production manager pushes to cancel scheduled maintenance windows saying: "I am responsible for meeting the daily production targets (Tonnage), and if the machine stops for maintenance my bonus will drop!"',
    question: 'ما هو السبب الجذري التنظيمي والثقافي لهذه الأزمة وفقاً لمفاهيم الحوكمة والقيادة في SMRP؟',
    questionEn: 'What is the organizational and cultural root cause of this crisis per governance and leadership concepts in SMRP?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تضارب مؤشرات الأداء والحوافز (Misaligned KPIs & Incentives): عندما يحاسب الإنتاج على الأطنان قصيرة الأجل فقط بينما تحاسب الصيانة على التكلفة والاعتمادية، تنشأ حرب مصالح؛ والحل في توحيد المؤشرات الاستراتيجية كـ OEE والتكلفة لكل طن سليم على المدى الطويل.',
        textEn: 'Misaligned KPIs & Incentives: when production is measured only on short-term tons while maintenance is measured on cost and reliability, a war of interests arises; the solution is unifying strategic indicators such as OEE and cost per good shipped ton in the long term.',
        isCorrect: true,
        explanation: 'جذور الصراع التقليدي بين العمليات والصيانة ليست شخصية، بل هي خطأ هيكلي في نظام المكافآت والمؤشرات (Incentive Conflict). حين تكافئ الإدارة مدير الإنتاج على حجم الإنتاج الفوري وتغض الطرف عن صحة الأصول وتكلفة استهلاكها، فإنه سيستهلك الماكينة حتى الانهيار. الربط بمؤشر موحد كـ OEE ومؤشر صحة الأصول (Asset Health Index) يوحد الرؤية ويجعل الاعتمادية مسؤولية مشتركة.',
        explanationEn: 'The roots of the traditional operations-maintenance conflict are not personal but a structural error in the reward and metric system (Incentive Conflict). When management rewards the production manager for immediate output volume while ignoring asset health and its consumption cost, he will run the machine until collapse. Linking to a unified indicator such as OEE and an Asset Health Index unifies the vision and makes reliability a shared responsibility.',
      },
      {
        text: 'مدير الصيانة شخصيته ضعيفة ويجب تغييره بمدير يتشاجر مع مدير الإنتاج ويفرض رأيه بالقوة.',
        textEn: 'The maintenance manager has a weak personality and must be replaced by a manager who argues with the production manager and imposes his view by force.',
        isCorrect: false,
        explanation: 'الخلافات الشخصية تفاقم الأزمة؛ المشكلة في بنية نظام المؤشرات والحوافز وليست في الصراخ.',
        explanationEn: 'Personal disputes worsen the crisis; the problem is in the structure of the metric and incentive system, not in shouting.',
      },
      {
        text: 'منع مهندسي الصيانة من دخول مناطق الإنتاج نهائياً.',
        textEn: 'Permanently prohibit maintenance engineers from entering production areas.',
        isCorrect: false,
        explanation: 'عزل الفريقين يدمر المصنع تماماً ويعيد العمل بنظام الجزر المنعزلة.',
        explanationEn: 'Isolating the two teams destroys the plant completely and returns it to the silo system.',
      },
      {
        text: 'إلغاء الصيانة كلياً والاعتماد على تشغيل المعدات حتى الانهيار الكامل (Run to Failure) لإرضاء الإنتاج.',
        textEn: 'Cancel maintenance entirely and rely on running equipment until complete collapse (Run to Failure) to please production.',
        isCorrect: false,
        explanation: 'تشغيل المعدات حتى الانهيار يضاعف تكاليف الصيانة من 3 إلى 10 أضعاف ويهدد سلامة الأرواح.',
        explanationEn: 'Running equipment until collapse multiplies maintenance costs 3 to 10 times and threatens lives.',
      }
    ]
  }

  ],
};