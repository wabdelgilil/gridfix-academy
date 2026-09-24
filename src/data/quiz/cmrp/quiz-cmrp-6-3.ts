import type { QuizBank } from '../types';

export const quizCmrp63: QuizBank = {
  id: 'quiz-cmrp-6-3',
  questions: [
  {
    scenario: 'في مصنع كيماويات، اقترح فني صيانة متمرس استبدال صمام كروي (Ball Valve) تالف على خط أمونيا بصمام فراشة (Butterfly Valve) متوفر فوراً في المستودع بنفس القطر، لتجنب انتظار توريد الصمام الأصلي وتشغيل الخط دون تأخير.',
    scenarioEn: 'In a chemical plant, an experienced maintenance technician proposed replacing a failed ball valve on an ammonia line with a butterfly valve immediately available in the warehouse with the same diameter, to avoid waiting for the original valve delivery and to run the line without delay.',
    question: 'بصفتك مهندس اعتمادية معتمد (CMRP)، ما هو الإجراء الإلزامي الذي يفرضه نظام إدارة التغيير (MOC) قبل اتخاذ هذا القرار؟',
    questionEn: 'As a certified reliability engineer (CMRP), what mandatory procedure does the Management of Change (MOC) system require before making this decision?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الموافقة فوراً لتقليل زمن التوقف MTTR لأن الصمامين لهما نفس القطر الاسمي.',
        textEn: 'Approve immediately to reduce MTTR downtime because the two valves have the same nominal diameter.',
        isCorrect: false,
        explanation: 'تغيير نوع الصمام دون دراسة هندسية يغير خصائص التدفق ومقاومة الضغط والتسريب ويسبب كوارث تسريب غازات سامة.',
        explanationEn: 'Changing the valve type without engineering study changes the flow characteristics, pressure resistance, and leakage, and causes toxic gas leak disasters.',
      },
      {
        text: 'تطبيق إجراءات نظام إدارة التغيير (MOC) رسمياً: إخضاع المقترح لدراسة هندسية ومراجعة توافق المواد مع غاز الأمونيا، وتقييم مخاطر السلامة والضغط، والحصول على موافقة مهندس العمليات وإدارة السلامة، وتحديث وثائق P&ID قبل الشروع في التركيب.',
        textEn: 'Formally apply the Management of Change (MOC) procedures: subject the proposal to an engineering study and a materials compatibility review with ammonia, assess safety and pressure risks, obtain approval from the process engineer and safety department, and update the P&ID documents before starting installation.',
        isCorrect: true,
        explanation: 'الاستبدال ليس من فئة (Replacement in Kind) لأن نوع الصمام مختلف. وفقاً لـ OSHA PSM ومعايير CMRP، أي تعديل على التصميم أو المواد يستوجب فتح طلب MOC وتقييم مخاطر السلامة وتحديث الوثائق الهندسية وتدريب الفنيين والتشغيل.',
        explanationEn: 'The replacement is not a Replacement in Kind because the valve type differs. Per OSHA PSM and CMRP standards, any modification to design or materials requires opening an MOC request, assessing safety risks, updating engineering documents, and training technicians and operations.',
      },
      {
        text: 'رفض الصمام وطلب شراء صمام جديد من الصين دون أي فحص.',
        textEn: 'Reject the valve and request buying a new valve from China without any inspection.',
        isCorrect: false,
        explanation: 'لا يتعلق القرار بجهة الشراء بل باتباع معايير التصميم ونظام MOC.',
        explanationEn: 'The decision is not about the purchasing source but about following design standards and the MOC system.',
      },
      {
        text: 'تركيب الصمام تجريبياً ومراقبته بالعين المجردة لمدة أسبوع لمعرفة هل يسرب أم لا.',
        textEn: 'Install the valve experimentally and watch it with the naked eye for a week to see whether it leaks or not.',
        isCorrect: false,
        explanation: 'مخاطرة انتحارية في خطوط الغازات السامة والخطرة.',
        explanationEn: 'A suicidal risk on toxic and hazardous gas lines.',
      }
    ]
  },
  {
    scenario: 'يعاني فنيو الصيانة من استنشاق أبخرة مذيبات كيميائية خطرة أثناء تنظيف حوامل المحامل الميكانيكية في ورشة المصنع. طالبت إدارة السلامة بحل المشكلة، واقترح المشرف توزيع أقنعة تنفس (Respirators) كحل أول.',
    scenarioEn: 'Maintenance technicians suffer from inhaling hazardous chemical solvent vapors while cleaning mechanical bearing housings in the plant workshop. The safety department demanded a solution, and the supervisor proposed handing out respirators as a first solution.',
    question: 'وفقاً لـ "تسلسل السيطرة على المخاطر (Hierarchy of Controls)" المعتمد في SMRP و ISO 45001، ما هو الترتيب الهندسي الصحيح لمعالجة هذا الخطر؟',
    questionEn: 'Per the Hierarchy of Controls adopted in SMRP and ISO 45001, what is the correct engineering order to address this hazard?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'توزيع أقنعة التنفس (PPE) هو الحل الأكثر فاعلية دائماً لأنه الأرخص تكلفة.',
        textEn: 'Handing out respirators (PPE) is always the most effective solution because it is the cheapest.',
        isCorrect: false,
        explanation: 'مهمات الوقاية الشخصية (PPE) تقع في أدنى درجات سلم الفاعلية وهي خط الدفاع الأخير والأضعف.',
        explanationEn: 'Personal Protective Equipment (PPE) sits at the lowest rung of the effectiveness ladder and is the last, weakest line of defense.',
      },
      {
        text: 'البحث أولاً عن إمكانية استبدال المذيب الكيميائي السام بمنظف مائي حيوي غير سام (Substitution)، أو تركيب كابينة تهوية وشفط ميكانيكية مغلقة (Engineering Control)، ولا يُلجأ لمهمات الوقاية الشخصية (PPE) إلا كخط دفاع أخير أو مؤقت.',
        textEn: 'First seek replacing the toxic chemical solvent with a non-toxic bio water-based cleaner (Substitution), or installing an enclosed mechanical ventilation and extraction booth (Engineering Control), and resort to PPE only as a last or temporary line of defense.',
        isCorrect: true,
        explanation: 'تسلسل السيطرة على المخاطر (Hierarchy of Controls) يفرض البدء بالأكثر فاعلية: 1. الإزالة (Elimination)، 2. الاستبدال (Substitution)، 3. التحكم الهندسي (Engineering Controls مثل الشفاطات)، 4. التحكم الإداري (تقليل ساعات التعرض)، 5. معدات الوقاية الشخصية (PPE). في الصيانة، الحل الهندسي والاستبدال يحميان الكادر بشكل دائم.',
        explanationEn: 'The Hierarchy of Controls requires starting with the most effective: 1. Elimination, 2. Substitution, 3. Engineering Controls (such as exhaust hoods), 4. Administrative Controls (reducing exposure hours), 5. Personal Protective Equipment (PPE). In maintenance, engineering solutions and substitution protect the workforce permanently.',
      },
      {
        text: 'إلغاء عملية تنظيف المحامل تماماً وتركيبها بأوساخها لتفادي الخطر.',
        textEn: 'Cancel the bearing cleaning process entirely and install them with their dirt to avoid the hazard.',
        isCorrect: false,
        explanation: 'تدمير فوري للأصول وظاهرة وفيات الرضع.',
        explanationEn: 'Immediate asset destruction and the infant mortality phenomenon.',
      },
      {
        text: 'زيادة رواتب الفنيين كبدل مخاطر واستمرار الوضع كما هو.',
        textEn: 'Raise technicians\' salaries as a hazard allowance and keep the situation as is.',
        isCorrect: false,
        explanation: 'التعويض المالي لا يحمي صحة وأرواح العاملين.',
        explanationEn: 'Financial compensation does not protect workers\' health and lives.',
      }
    ]
  },
  {
    scenario: 'أثناء تحليل RCM لمضخة وقود غازية تغذي توربينة توليد كهرباء، وجد الفريق أن احتمال فشل مانع التسرب (Mechanical Seal) منخفض (يحدث مرة كل 5 سنوات)، ولكن في حال حدوثه سيتسرب الغاز مسبباً انفجاراً وحريقاً هائلاً (عواقب كارثية).',
    scenarioEn: 'During an RCM analysis of a gas fuel pump feeding a power generation turbine, the team found that the probability of mechanical seal failure is low (occurs once every 5 years), but if it occurs the gas will leak causing an explosion and a huge fire (catastrophic consequences).',
    question: 'كيف تصنف مصفوفة تقييم المخاطر (Risk Matrix) هذا الخطر، وما هو الإجراء الملزم لمهندس الموثوقية؟',
    questionEn: 'How does the Risk Matrix classify this hazard, and what is the mandatory action for the reliability engineer?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'خطر غير مقبول ذو عواقب كارثية؛ يستلزم تطبيق تحكم هندسي صارم مثل مانع تسرب مزدوج مع نظام سائل حاجز مراقب بالحساسات ومفتاح إيقاف طوارئ فوري وتفتيش دوري بالموجات فوق الصوتية وكاميرات الغاز البصرية (OGI).',
        textEn: 'An unacceptable risk with catastrophic consequences; it requires strict engineering control such as a double seal with a barrier fluid system monitored by sensors, an immediate emergency shutdown switch, periodic ultrasonic inspection, and optical gas imaging (OGI) cameras.',
        isCorrect: true,
        explanation: 'في مصفوفة المخاطر، حتى لو كانت الاحتمالية منخفضة، فإن العواقب الكارثية على الأرواح والسلامة والبيئة تضع الخطر في المنطقة الحمراء (High / Critical Risk). معايير SAE JA1011 و SMRP توجب ألا يتم قبول الخطر أبداً، وتلزم بإضافة وسائط أمان هندسية وصيانة تنبؤية كاشفة لتفادي الكارثة.',
        explanationEn: 'In the risk matrix, even if the likelihood is low, catastrophic consequences to lives, safety, and the environment place the risk in the red zone (High / Critical Risk). SAE JA1011 and SMRP standards require that the risk never be accepted, and mandate adding engineering safety means and detective predictive maintenance to avoid the catastrophe.',
      },
      {
        text: 'بما أن الاحتمال يحدث مرة كل 5 سنوات، يتم تجاهل العطل وتشغيل المعدة حتى الانهيار التام (Run-to-Failure).',
        textEn: 'Since the probability occurs once every 5 years, the failure is ignored and the equipment is run until complete collapse (Run-to-Failure).',
        isCorrect: false,
        explanation: 'استراتيجية كارثية محظورة عندما تمس عواقب الفشل السلامة والبيئة.',
        explanationEn: 'A catastrophic strategy prohibited when failure consequences touch safety and the environment.',
      },
      {
        text: 'شراء طفاية حريق يدوية ووضعها بجانب المضخة فقط.',
        textEn: 'Buy a manual fire extinguisher and place it next to the pump only.',
        isCorrect: false,
        explanation: 'إجراء غير كافٍ إطلاقاً لمنع الانفجار وتسريب الغاز.',
        explanationEn: 'Completely insufficient action to prevent the explosion and gas leak.',
      },
      {
        text: 'تكليف فني بالوقوف بجوار المضخة على مدار 24 ساعة يومياً.',
        textEn: 'Assign a technician to stand next to the pump 24 hours a day.',
        isCorrect: false,
        explanation: 'إجراء غير منطقي ويعرض حياة الفني للخطر المباشر.',
        explanationEn: 'An illogical action exposing the technician\'s life to direct danger.',
      }
    ]
  },
  {
    scenario: 'توفي فني صيانة كهربائية بصعقة تيار أثناء فحص لوحة توزيع جهد متوسط (11kV)، حيث تبين في التحقيق أن الفني اعتمد على كلام زميله شفهياً بأن القاطع مفصول، ولم يقم بتطبيق قفل عزل الطاقة (Lockout/Tagout - LOTO) بنفسه.',
    scenarioEn: 'An electrical maintenance technician died from electrocution while inspecting a medium-voltage (11kV) distribution panel; the investigation showed the technician relied on a colleague\'s verbal assurance that the breaker was disconnected and did not apply the Lockout/Tagout (LOTO) energy isolation lock himself.',
    question: 'بصفتك مدير الموثوقية والصيانة، ما هو الدرس النظامي الأساسي لمنع تكرار هذه المأساة وفقاً لقواعد SMRP للسلامة المؤسسية؟',
    questionEn: 'As the reliability and maintenance manager, what is the fundamental systemic lesson to prevent repeating this tragedy per SMRP institutional safety rules?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'منع العمل على لوحات الكهرباء نهائياً في المصنع مستقبلاً.',
        textEn: 'Permanently prohibit work on electrical panels in the plant in the future.',
        isCorrect: false,
        explanation: 'حل مستحيل تشغيلياً؛ المصانع تحتاج للصيانة الكهربائية الدورية.',
        explanationEn: 'An operationally impossible solution; plants need periodic electrical maintenance.',
      },
      {
        text: 'تطبيق سياسة "صفر تهاون" مع إجراءات عزل الطاقة (LOTO) وقاعدة "قفل لكل فرد (One Person, One Lock)" واختبار انعدام الجهد (Try Step / Zero Energy State) قبل لمس المعدة، مع ربط إغلاق أمر الشغل بتصريح العمل الساخن/الكهربائي المعتمد.',
        textEn: 'Apply a "zero tolerance" policy with LOTO energy isolation procedures and the "One Person, One Lock" rule and zero-voltage test (Try Step / Zero Energy State) before touching the equipment, tying work order closure to the approved hot/electrical work permit.',
        isCorrect: true,
        explanation: 'إجراءات عزل الطاقة LOTO ليست مجرد إرشادات بل هي شريعة هندسية ملزمة: 1. قفل شخصي لكل فني يعمل بيده، 2. تفريغ الطاقة المخزنة واختبار انعدام الجهد (Test before Touch)، 3. تصريح عمل إلكتروني/ورقي معتمد (PTW). التحول الثقافي الصارم يمنع الاعتماد على التواصل الشفهي غير الموثق.',
        explanationEn: 'LOTO energy isolation procedures are not mere guidelines but binding engineering law: 1. a personal lock for every technician who works by hand, 2. draining stored energy and the zero-voltage test (Test before Touch), 3. an approved electronic/paper work permit (PTW). A strict cultural shift prevents relying on undocumented verbal communication.',
      },
      {
        text: 'تزويد الفنيين بقفازات قماشية إضافية لتقليل الصدمة الكهربائية.',
        textEn: 'Provide technicians with extra cloth gloves to reduce the electric shock.',
        isCorrect: false,
        explanation: 'القفازات القماشية لا تعزل الجهد الكهربائي العالي (11kV).',
        explanationEn: 'Cloth gloves do not insulate high electrical voltage (11kV).',
      },
      {
        text: 'معاقبة الزميل الذي قال إنه مفصول وإغلاق ملف القضية.',
        textEn: 'Punish the colleague who said it was disconnected and close the case file.',
        isCorrect: false,
        explanation: 'العقاب الفردي دون معالجة الخلل النظامي في إجراءات LOTO يضمن تكرار الحادث مع شخص آخر.',
        explanationEn: 'Individual punishment without fixing the systemic defect in LOTO procedures guarantees the incident repeats with someone else.',
      }
    ]
  }

  ],
};