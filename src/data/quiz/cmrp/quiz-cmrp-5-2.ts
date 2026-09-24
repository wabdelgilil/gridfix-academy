import type { QuizBank } from '../types';

export const quizCmrp52: QuizBank = {
  id: 'quiz-cmrp-5-2',
  questions: [
  {
    scenario: 'أنفقت شركة بترول 100 ألف دولار على دورة تدريبية خارجية لفنيي الصيانة حول أجهزة المحاذاة بالليزر. في نهاية الدورة، وزع المدرب استبيان تقييم أبدى فيه جميع المتدربين سعادتهم البالغة بجودة القاعة والضيافة والمدرب.',
    scenarioEn: 'An oil company spent $100,000 on an external training course for its maintenance technicians on laser alignment devices. At the end of the course, the trainer distributed an evaluation survey in which all trainees expressed great satisfaction with the quality of the room, hospitality, and trainer.',
    question: 'وفقاً لنموذج كيركباتريك (Kirkpatrick) المعتمد في SMRP، في أي مستوى من مستويات التقييم الأربعة يقع هذا الاستبيان وما هو قصوره؟',
    questionEn: 'Per the Kirkpatrick model adopted in SMRP, in which of the four evaluation levels does this survey fall, and what is its shortcoming?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'يقع في "المستوى 1: رد الفعل (Reaction)" فقط؛ وهو مؤشر سطحي لا يضمن إطلاقاً أن الفنيين اكتسبوا المهارة فعلياً (Level 2) أو أنهم سيطبقونها ميدانياً على المضخات (Level 3) أو أنها ستقلل الأعطال (Level 4).',
        textEn: 'It falls only in "Level 1: Reaction"; it is a superficial indicator that in no way guarantees the technicians actually acquired the skill (Level 2), will apply it in the field on the pumps (Level 3), or that it will reduce failures (Level 4).',
        isCorrect: true,
        explanation: 'نموذج كيركباتريك هو حجر الزاوية في تدريب SMRP:\nالمستوى 1: رد الفعل (هل أعجبهم الكورس؟ - Smile Sheet).\nالمستوى 2: التعلم (هل اجتازوا الاختبار المعرفي؟).\nالمستوى 3: السلوك (هل يطبقون الليزر فعلياً في الورشة؟).\nالمستوى 4: النتائج (هل انخفضت أعطال عدم المحاذاة بنسبة ملحوظة؟).\nالاكتفاء بالمستوى الأول هو خداع تدريبي شائع لا يضمن أي عائد استثماري.',
        explanationEn: 'The Kirkpatrick model is the cornerstone of SMRP training:\nLevel 1: Reaction (did they like the course? — Smile Sheet).\nLevel 2: Learning (did they pass the knowledge test?).\nLevel 3: Behavior (do they actually apply the laser in the workshop?).\nLevel 4: Results (did misalignment failures drop significantly?).\nStopping at level 1 is a common training deception that guarantees no return on investment.',
      },
      {
        text: 'يقع في المستوى الرابع النهائي ويثبت أن الدورة حققت أهداف المصنع بنسبة 100%.',
        textEn: 'It falls in the final fourth level and proves the course achieved the plant\'s goals 100%.',
        isCorrect: false,
        explanation: 'المستوى الرابع يقاس بانخفاض معدل الأعطال والعائد المالي وليس باستبيان الرضا.',
        explanationEn: 'Level 4 is measured by the failure rate drop and financial return, not by a satisfaction survey.',
      },
      {
        text: 'استبيان باطل ويجب إلغاؤه فوراً.',
        textEn: 'The survey is invalid and must be cancelled immediately.',
        isCorrect: false,
        explanation: 'الاستبيان خطوة أولى مقبولة، لكنه غير كافٍ وحده لقياس الأثر.',
        explanationEn: 'The survey is an acceptable first step, but it alone is not enough to measure impact.',
      },
      {
        text: 'نموذج كيركباتريك يستخدم فقط في تعليم أطفال المدارس.',
        textEn: 'The Kirkpatrick model is only used in school children education.',
        isCorrect: false,
        explanation: 'هو النموذج المعتمد دولياً لتقييم التدريب المؤسسي والصناعي.',
        explanationEn: 'It is the internationally adopted model for evaluating corporate and industrial training.',
      }
    ]
  },
  {
    scenario: 'في مراجعة لسجلات الأعطال بعد عمرات المصنع السنوية، اكتشف مهندس الموثوقية أن 40% من المحركات الكهربائية التي تم استبدال محاملها احترقت أو تلفت محاملها خلال الأسبوع الأول من التشغيل (Infant Mortality). كشفت المقابلات أن الفنيين يستخدمون المطرقة في تركيب المحامل بدلاً من جهاز التسخين الحثي (Induction Heater).',
    scenarioEn: 'In a review of failure records after the plant\'s annual overhauls, the reliability engineer discovered that 40% of the electric motors whose bearings were replaced burned out or had their bearings damaged within the first week of operation (Infant Mortality). Interviews revealed that technicians use a hammer to install bearings instead of an induction heater.',
    question: 'ما هي الأداة الإدارية التي يجب إنشاؤها فوراً لتشخيص وسد هذا النقص وتحديد الفنيين المؤهلين للتركيب؟',
    questionEn: 'What management tool should be created immediately to diagnose and close this gap and identify the technicians qualified for installation?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'إنشاء "مصفوفة الجدارات والكفاءات (Competency Matrix)" وتحديد مهارة تركيب المحامل بالحرارة كمتطلب إلزامي، وحظر تكليف أي فني دون المستوى (3: متمكن ومستقل)، مع إطلاق برنامج تدريب على رأس العمل (OJT).',
        textEn: 'Creating a "Competency Matrix" and defining heat-bearing installation as a mandatory requirement, prohibiting assignment of any technician below level (3: competent and independent), while launching an On-the-Job Training (OJT) program.',
        isCorrect: true,
        explanation: 'مصفوفة الجدارات (Competency Matrix) تحدد بوضوح من يمتلك المهارة المعتمدة المستقلة (Level 3) ومن لا يزال تحت التدريب (Level 1 أو 2). تكليف فني غير مؤهل بتركيب المحامل هو سبب مباشر لظاهرة وفيات الرضع. المصفوفة توجه التدريب الدقيق وتمنع التكليف العشوائي للأعمال الحرجة.',
        explanationEn: 'The Competency Matrix clearly identifies who holds the approved independent skill (Level 3) and who is still under training (Level 1 or 2). Assigning an unqualified technician to install bearings is a direct cause of Infant Mortality. The matrix targets precise training and prevents random assignment to critical work.',
      },
      {
        text: 'شراء مطارق أكبر حجماً وأثقل وزناً للفنيين.',
        textEn: 'Buy bigger, heavier hammers for the technicians.',
        isCorrect: false,
        explanation: 'استخدام المطرقة في تركيب المحامل خطأ ميكانيكي مدمر للمجاري والكرات.',
        explanationEn: 'Using a hammer to install bearings is a mechanical error that destroys the races and balls.',
      },
      {
        text: 'خصم أسبوعين من رواتب جميع الفنيين دون استثناء.',
        textEn: 'Deduct two weeks from all technicians\' salaries without exception.',
        isCorrect: false,
        explanation: 'العقاب الجماعي يدمر معنويات الفريق ولا يحل فجوة غياب الأدوات والتدريب.',
        explanationEn: 'Collective punishment destroys team morale and does not solve the gap of missing tools and training.',
      },
      {
        text: 'إلغاء استخدام المحركات الكهربائية في المصنع.',
        textEn: 'Abolish the use of electric motors in the plant.',
        isCorrect: false,
        explanation: 'حل مستحيل تشغيلياً.',
        explanationEn: 'An operationally impossible solution.',
      }
    ]
  },
  {
    scenario: 'ما هي المستويات الأربعة الكلاسيكية المعتمدة لتصنيف كفاءة الفني في "مصفوفة الجدارات المهارية (Competency Matrix)"؟',
    scenarioEn: 'What are the four classic levels adopted for classifying a technician\'s competency in the "Competency Matrix"?',
    question: 'كيف تصنف مهارات الأفراد في سلم التطوير المهني لـ SMRP؟',
    questionEn: 'How are individual skills classified in the SMRP professional development ladder?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'المستوى 1: مبتدئ / معرفة نظرية عامة (Novice)، المستوى 2: يمارس تحت الإشراف المباشر (Supervised)، المستوى 3: مستقل ومتمكن تماماً (Autonomous Competent)، والمستوى 4: خبير ومدرب معتمد للآخرين (Expert & Coach).',
        textEn: 'Level 1: Novice / general theoretical knowledge, Level 2: practices under direct supervision (Supervised), Level 3: fully independent and competent (Autonomous Competent), and Level 4: expert and certified trainer for others (Expert & Coach).',
        isCorrect: true,
        explanation: 'هذا السلم الرباعي المعياري (1 إلى 4) هو الأساس المعتمد عالمياً في مصفوفات الكفاءة: المستوى 1 لا يكلف بالعمل بمفرده، المستوى 2 يعمل بمساعدة فني أقدم، المستوى 3 يعتمد عليه لتنفيذ المهمة باستقلالية، والمستوى 4 هو المرجع الفني الذي يدرب الأجيال الجديدة.',
        explanationEn: 'This standard four-level ladder (1 to 4) is the globally accepted basis in competency matrices: level 1 is not assigned to work alone, level 2 works with a senior technician\'s help, level 3 is relied upon to execute the task independently, and level 4 is the technical reference who trains new generations.',
      },
      {
        text: 'المستوى (أ): وزير، المستوى (ب): سفير، المستوى (ج): محافظ، المستوى (د): مستشار.',
        textEn: 'Level (A): Minister, Level (B): Ambassador, Level (C): Governor, Level (D): Advisor.',
        isCorrect: false,
        explanation: 'رتب ومناصب سياسية لا علاقة لها بالمهارات الميدانية الصناعية.',
        explanationEn: 'Political ranks and positions with no relation to industrial field skills.',
      },
      {
        text: 'المستوى الأول: يحضر للعمل، المستوى الثاني: يغيب عن العمل فقط.',
        textEn: 'Level one: attends work, level two: is absent from work only.',
        isCorrect: false,
        explanation: 'تصنيف للحضور والغياب وليس للمهارات الفنية.',
        explanationEn: 'An attendance classification, not technical skills.',
      },
      {
        text: 'جميع الفنيين يصنفون دائماً في المستوى 4 تلقائياً بمجرد التعيين.',
        textEn: 'All technicians are always classified at level 4 automatically upon hiring.',
        isCorrect: false,
        explanation: 'افتراض مضلل يتجاهل التباين الطبيعي في الخبرات والتدريب.',
        explanationEn: 'A misleading assumption that ignores the natural variation in experience and training.',
      }
    ]
  },
  {
    scenario: 'في برنامج لتطوير الصيانة، تبين أن الفنيين الميكانيكيين يقفون عاجزين وينتظرون لأكثر من ساعتين وصول فني كهربائي لمجرد فصل سلكين لمحرك صغير قبل فكه.',
    scenarioEn: 'In a maintenance development program, it was found that mechanical technicians stand idle waiting more than two hours for an electrician to arrive just to disconnect two wires from a small motor before disassembling it.',
    question: 'ما هي الممارسة التدريبية المتقدمة لـ SMRP التي تقضي على هذا الفاقد وترفع Wrench Time؟',
    questionEn: 'What advanced SMRP training practice eliminates this loss and raises Wrench Time?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تطبيق برنامج "تعدد وتكامل المهارات (Cross-Skilling / Multi-Skilling)"، حيث يتم تدريب واعتماد الفني الميكانيكي على إجراءات فصل وعزل الكهرباء منخفضة الجهد وتطبيق LOTO للمحركات الصغيرة بأمان.',
        textEn: 'Applying a "Cross-Skilling / Multi-Skilling" program, in which the mechanical technician is trained and certified on low-voltage disconnection and isolation procedures and safely applying LOTO for small motors.',
        isCorrect: true,
        explanation: 'برنامج تعدد المهارات (Cross-Skilling / Multi-Crafting) يزيل حواجز التخصص الضيقة التي تعطل العمل. تدريب فني الميكانيكا على فك التوصيلات الكهربائية البسيطة وتدريب فني الكهرباء على فك المسامير الميكانيكية يقضي على أوقات الانتظار المهدورة ويضاعف وقت العمل الفعلي (Wrench Time).',
        explanationEn: 'The Cross-Skilling / Multi-Crafting program removes the narrow trade barriers that stall work. Training the mechanical technician to disconnect simple electrical connections and training the electrician to remove mechanical bolts eliminates wasted waiting time and multiplies the actual work time (Wrench Time).',
      },
      {
        text: 'إجبار الفني الميكانيكي على لمس الأسلاك الكهربائية الحية بيده دون عزل.',
        textEn: 'Forcing the mechanical technician to touch live electrical wires with his bare hands without isolation.',
        isCorrect: false,
        explanation: 'مخاطرة كارثية بالسلامة تعرض حياة العاملين للموت بالصعق الكهربائي.',
        explanationEn: 'A catastrophic safety risk exposing workers to death by electrocution.',
      },
      {
        text: 'فصل قسم الكهرباء بالكامل عن المصنع.',
        textEn: 'Completely separate the electrical department from the plant.',
        isCorrect: false,
        explanation: 'اقتراح مستحيل يوقف المنشأة.',
        explanationEn: 'An impossible proposal that stops the facility.',
      },
      {
        text: 'انتظار 5 أيام إضافية حتى يأتي الفني الكهربائي بمزاجه.',
        textEn: 'Wait 5 extra days until the electrician comes at his own convenience.',
        isCorrect: false,
        explanation: 'هدر غير مقبول في الإنتاجية.',
        explanationEn: 'Unacceptable waste of productivity.',
      }
    ]
  },
  {
    scenario: 'سأل المدير التنفيذي مدير الموثوقية: "لماذا ننفق 50 ألف دولار سنوياً على تدريب الفنيين والمهندسين؟ ماذا لو دربناهم ثم استقالوا وتركوا الشركة؟"',
    scenarioEn: 'The CEO asked the reliability manager: "Why do we spend $50,000 a year on training technicians and engineers? What if we train them and then they resign and leave the company?"',
    question: 'ما هو الرد الاستراتيجي الحاسم الذي يمثل جوهر فلسفة الركن الرابع في SMRP والقيادة الصناعية؟',
    questionEn: 'What is the decisive strategic reply that captures the essence of SMRP\'s fourth pillar philosophy and industrial leadership?',
    difficulty: 'متوسط',
    options: [
      {
        text: '"السؤال الأخطر يا سيدي ليس: ماذا لو دربناهم ثم رحلوا؟ بل: ماذا لو لم ندربهم وظلوا يعملون في مصنعنا يدمرون المعدات الحساسة ويتسببون في حوادث كارثية؟"',
        textEn: '"The more serious question, sir, is not: what if we train them and they leave? But rather: what if we do not train them and they keep working in our plant destroying sensitive equipment and causing catastrophic accidents?"',
        isCorrect: true,
        explanation: 'هذه المقولة القيادية الشهيرة المنسوبة لهنري فورد والتي تتبناها SMRP تلخص الحقيقة: تكلفة الكادر غير المدرب (أخطاء التشغيل، وفيات الرضع، الحوادث القاتلة، وتلف الآلات) تفوق بمئات الأضعاف ميزانية التدريب السنوية. الاستثمار في الكادر البشري هو استثمار مباشر في حماية أصول الشركة.',
        explanationEn: 'This famous leadership saying attributed to Henry Ford and adopted by SMRP sums up the truth: the cost of untrained staff (operating errors, infant mortality, fatal accidents, and machine damage) exceeds the annual training budget by hundreds of times. Investing in human capital is a direct investment in protecting the company\'s assets.',
      },
      {
        text: '"معك حق تماماً، دعنا نلغي التدريب ونشغل المصنع بالعمالة غير المؤهلة."',
        textEn: '"You are absolutely right, let us cancel training and run the plant with unqualified labor."',
        isCorrect: false,
        explanation: 'موقف انهزامي يؤدي لتدهور المصنع وإفلاسه.',
        explanationEn: 'A defeatist stance leading to plant deterioration and bankruptcy.',
      },
      {
        text: '"دعنا نحبس الفنيين داخل غرف مغلقة بالمصنع لمنعهم من الاستقالة."',
        textEn: '"Let us lock the technicians inside closed rooms in the plant to prevent them from resigning."',
        isCorrect: false,
        explanation: 'تصرف غير قانوني يخالف حقوق الإنسان وقوانين العمل.',
        explanationEn: 'An illegal act violating human rights and labor laws.',
      },
      {
        text: '"التدريب لا فائدة منه ويجب استبداله بشراء الهدايا التذكارية."',
        textEn: '"Training is useless and must be replaced by buying souvenirs."',
        isCorrect: false,
        explanation: 'التدريب هو محرك تطوير الجدارات وحماية المعدات.',
        explanationEn: 'Training is the engine of competency development and equipment protection.',
      }
    ]
  }

  ],
};