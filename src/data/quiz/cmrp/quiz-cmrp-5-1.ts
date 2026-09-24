import type { QuizBank } from '../types';

export const quizCmrp51: QuizBank = {
  id: 'quiz-cmrp-5-1',
  questions: [
  {
    scenario: 'في إعداد مصفوفة RACI لعملية "اعتماد الجدول الأسبوعي للصيانة"، اقترحت لجنة الإدارة وضع صفة (Accountable - A) لكل من: مدير الإنتاج، ومدير الصيانة، ومدير الجودة، ومدير المشتريات معاً "لضمان التضامن المشترك".',
    scenarioEn: 'While building the RACI matrix for the "weekly maintenance schedule approval" process, the management committee proposed assigning (Accountable - A) to each of: the production manager, the maintenance manager, the quality manager, and the procurement manager together, "to ensure shared solidarity".',
    question: 'وفقاً لقواعد مصفوفة RACI المعتمدة في معايير SMRP للقيادة، ما هو الخطأ الإداري القاتل في هذا القرار؟',
    questionEn: 'Per the RACI rules adopted in the SMRP leadership standards, what is the fatal governance error in this decision?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'انتهاك قاعدة "الـ A الواحدة" (Single Accountable Rule)؛ حيث يؤدي تعدد المساءلين إلى ضياع المسؤولية وتبادل اللوم عند تعطل خط الإنتاج، والأصل أن يكون المساءل الوحيد عن اعتماد الجدول هو مدير الإنتاج (صاحب الأصل والتشغيل).',
        textEn: 'Violating the "Single Accountable Rule"; multiple Accountables mean lost accountability and finger-pointing when the production line stops, and the sole Accountable for schedule approval should be the production manager (owner of the asset and its operation).',
        isCorrect: true,
        explanation: 'في مصفوفة RACI، القاعدة الصارمة هي: "There must be only ONE Accountable per task". وجود أكثر من A يعني ألا أحد مسؤول فعلياً عند حدوث كارثة. مدير الإنتاج هو صاحب الأصل (Asset Owner) الذي يملك صلاحية تسليم المعدات للصيانة.',
        explanationEn: 'In the RACI matrix, the strict rule is: "There must be only ONE Accountable per task". More than one A means no one is actually responsible when a disaster occurs. The production manager is the Asset Owner who holds the authority to hand equipment over to maintenance.',
      },
      {
        text: 'كان يجب وضع جميع مهندسي وفنيي المصنع في خانة الـ Accountable.',
        textEn: 'All plant engineers and technicians should have been placed in the Accountable cell.',
        isCorrect: false,
        explanation: 'هذا يفاقم الفوضى الإدارية وينسف مبادئ الحوكمة تماماً.',
        explanationEn: 'This worsens administrative chaos and completely destroys governance principles.',
      },
      {
        text: 'الخطأ هو عدم إشراك المدير المالي كمساءل خامس معهم.',
        textEn: 'The error is not including the finance manager as a fifth Accountable alongside them.',
        isCorrect: false,
        explanation: 'إضافة المزيد من المساءلين يزيد الفوضى.',
        explanationEn: 'Adding more Accountables only increases the chaos.',
      },
      {
        text: 'لا حاجة لمصفوفة RACI لأن جداول الصيانة تعتمد تلقائياً بدون تدخل بشري.',
        textEn: 'There is no need for a RACI matrix because maintenance schedules are approved automatically without human intervention.',
        isCorrect: false,
        explanation: 'الجدول الأسبوعي يتطلب حوكمة بشرية وتنسيقاً بين العمليات والصيانة.',
        explanationEn: 'The weekly schedule requires human governance and coordination between operations and maintenance.',
      }
    ]
  },
  {
    scenario: 'تشتكي إدارة مصنع للبتروكيماويات من ضعف التنسيق بين الصيانة والعمليات، حيث يرفض المشغلون تنظيف المعدات أو تزييتها قائلين: "الصيانة ليست من عملنا"، بينما ترفض الصيانة التدخل السريع قائلة: "المشغلون يسيئون استخدام الآلات".',
    scenarioEn: 'The management of a petrochemical plant complains of poor coordination between maintenance and operations: operators refuse to clean or lubricate equipment saying "maintenance is not our job", while maintenance refuses quick intervention saying "operators misuse the machines".',
    question: 'ما هو التحول الاستراتيجي الأهم الذي توصي به SMRP لنقل العلاقة من الصراع إلى الشراكة المثمرة؟',
    questionEn: 'What is the most important strategic shift SMRP recommends to move the relationship from conflict to productive partnership?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'ترسيخ مفهوم "ملكية الأصل المشتركة (Shared Asset Ownership)" وتطبيق برامج الموثوقية بقيادة المشغل (ODR) وتوحيد مؤشرات الأداء (مثل OEE والسلامة) بين الإدارتين.',
        textEn: 'Establishing "Shared Asset Ownership" and applying Operator Driven Reliability (ODR) programs and unifying performance indicators (such as OEE and safety) between the two departments.',
        isCorrect: true,
        explanation: 'تفكيك ثقافة الجزر المنعزلة (Silo Mentality) يتطلب توحيد الأهداف عبر مؤشر الفاعلية الشاملة OEE وبرامج ODR التي تجعل المشغل خط الدفاع الأول عن الآلة وفني الصيانة شريكاً استشارياً لحمايتها.',
        explanationEn: 'Breaking the Silo Mentality requires unifying goals through the OEE metric and ODR programs that make the operator the first line of defense for the machine, with the maintenance technician as a consulting partner in protecting it.',
      },
      {
        text: 'فصل المشغلين وتعيين مهندسي صيانة لتشغيل المضخات بدلاً منهم.',
        textEn: 'Fire the operators and assign maintenance engineers to run the pumps instead of them.',
        isCorrect: false,
        explanation: 'اقتراح غير واقعي ومدمر للمؤسسة وتكاليفها.',
        explanationEn: 'An unrealistic proposal that is destructive to the organization and its costs.',
      },
      {
        text: 'فرض غرامات مالية على أي فني يتحدث مع مشغل الإنتاج في الميدان.',
        textEn: 'Impose financial fines on any technician who talks to a production operator in the field.',
        isCorrect: false,
        explanation: 'منع التواصل يعمق العداء ويزيد الأعطال.',
        explanationEn: 'Banning communication deepens hostility and increases failures.',
      },
      {
        text: 'إلغاء قسم الصيانة بالكامل ونقل جميع المعدات إلى الورش الخارجية.',
        textEn: 'Abolish the maintenance department entirely and move all equipment to external workshops.',
        isCorrect: false,
        explanation: 'هذا يؤدي إلى توقف الإنتاج تماماً وانهيار المصنع.',
        explanationEn: 'This leads to full production stoppage and plant collapse.',
      }
    ]
  },
  {
    scenario: 'في مصنع تعدين ضخم، يشرف مشرف صيانة ميكانيكية واحد على 32 فنياً يعملون في مناطق متباعدة جداً داخل المنشأة، ويعاني المصنع من تأخر إغلاق أوامر العمل وتدني معدل الـ Wrench Time إلى 18%.',
    scenarioEn: 'In a huge mining plant, a single mechanical maintenance supervisor oversees 32 technicians working in very distant areas inside the facility, and the plant suffers from delayed work order closure and a Wrench Time rate as low as 18%.',
    question: 'وفقاً لإرشادات SMRP لمعدل الإشراف الميداني (Span of Control)، كيف يُقيَّم هذا الوضع التنظيمي؟',
    questionEn: 'Per SMRP guidance on the field Span of Control, how is this organizational situation assessed?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'معدل إشراف متضخم جداً وغير صحي؛ حيث توصي أفضل الممارسات بأن يكون معدل الإشراف المباشر في الصيانة الميدانية من 6 إلى 8 فنيين (وبحد أقصى 10) لكل مشرف، لضمان المتابعة الميدانية للسلامة والجودة.',
        textEn: 'A very inflated, unhealthy span of control; best practices recommend a direct supervision ratio in field maintenance of 6 to 8 technicians (and at most 10) per supervisor, to ensure field follow-up of safety and quality.',
        isCorrect: true,
        explanation: 'طبيعة أعمال الصيانة الحرجة تتطلب تواجداً ميدانياً ومتابعة للسلامة ومراجعة جودة التركيب. إشراف شخص واحد على 32 فنياً متباعدين يجعله عاجزاً عن الإشراف الفعلي ويحول الإشراف إلى مجرد توقيع أوراق شكلية، مما يؤدي إلى تدهور السلامة و Wrench Time.',
        explanationEn: 'The critical nature of maintenance work demands field presence, safety follow-up, and installation quality review. One person supervising 32 spread-out technicians cannot supervise effectively and turns supervision into mere paper-signing, driving down safety and Wrench Time.',
      },
      {
        text: 'معدل مثالي يثبت كفاءة المشرف الخارقة في الإدارة.',
        textEn: 'An ideal ratio that proves the supervisor\'s extraordinary managerial competence.',
        isCorrect: false,
        explanation: 'القدرات البشرية لها حدود فيزيائية وتنظيمية تحكم الرقابة الفعالة.',
        explanationEn: 'Human capabilities have physical and organizational limits that govern effective control.',
      },
      {
        text: 'المعدل العالمي هو 100 فني لكل مشرف واحد.',
        textEn: 'The world-class ratio is 100 technicians per one supervisor.',
        isCorrect: false,
        explanation: 'رقم مستحيل ينسف الرقابة الميدانية.',
        explanationEn: 'An impossible number that destroys field control.',
      },
      {
        text: 'لا داعي لوجود أي مشرفين على الإطلاق في الصيانة.',
        textEn: 'There is no need for any supervisors in maintenance at all.',
        isCorrect: false,
        explanation: 'المشرف الميداني هو قائد التنفيذ وصمام أمان السلامة والجودة.',
        explanationEn: 'The field supervisor is the execution leader and the safety and quality safety valve.',
      }
    ]
  },
  {
    scenario: 'في مصفوفة RACI الخاصة بمهمة "تخطيط أمر الشغل وإعداد حزمة العمل (Job Package Planning)"، ما هو الدور الدقيق لمشرف الصيانة الميداني (Maintenance Supervisor)؟',
    scenarioEn: 'In the RACI matrix for the task of "work order planning and job package preparation", what is the precise role of the field Maintenance Supervisor?',
    question: 'أي حرف في RACI يناسب مشرف الصيانة الميداني في عملية التخطيط التي يقوم بها المخطط؟',
    questionEn: 'Which RACI letter fits the field maintenance supervisor in the planning process carried out by the planner?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'مستشار ومراجع (Consulted - C)؛ حيث يقدم للمخطط المشورة حول مهارات الفنيين المتاحين والأدوات الخاصة ويراجع جدوى الخطة قبل تسليمها للجدولة.',
        textEn: 'Consulted (C); he advises the planner on the available technicians\' skills and special tools and reviews the plan\'s feasibility before it is handed to scheduling.',
        isCorrect: true,
        explanation: 'المخطط هو الـ (Responsible - R) عن إعداد الخطة، ولكن مشرف الميدان يُستشار (Consulted - C) لأنه الأقرب لواقع فنييه وورشته، وملاحظاته تغني حزمة العمل بالواقعية العملية.',
        explanationEn: 'The planner is the (Responsible - R) for preparing the plan, but the field supervisor is Consulted (C) because he is closest to his technicians\' reality and workshop, and his notes enrich the job package with practical realism.',
      },
      {
        text: 'هو المساءل الوحيد والمنفذ الوحيد ويكتب الخطة بالكامل بيده.',
        textEn: 'He is the sole Accountable and sole Responsible and writes the entire plan himself.',
        isCorrect: false,
        explanation: 'المخطط هو من يكتب الخطة وليس المشرف الميداني.',
        explanationEn: 'The planner writes the plan, not the field supervisor.',
      },
      {
        text: 'لا علاقة له بالأمر ويتم إخفاء الخطة عنه تماماً.',
        textEn: 'He has no link to it and the plan is completely hidden from him.',
        isCorrect: false,
        explanation: 'إخفاء الخطة عن المشرف يضمن فشل تنفيذها في الميدان.',
        explanationEn: 'Hiding the plan from the supervisor guarantees its execution will fail in the field.',
      },
      {
        text: 'دوره يقتصر على شراء المأكولات والمشروبات للمخطط.',
        textEn: 'His role is limited to buying meals and drinks for the planner.',
        isCorrect: false,
        explanation: 'خيار غير لائق بمهام المشرف الفني.',
        explanationEn: 'An option unbefitting the technical supervisor\'s duties.',
      }
    ]
  },
  {
    scenario: 'ترغب إدارة شركة متعددة المصانع في إعادة هيكلة الصيانة. ما هي الميزة الجوهرية لتطبيق "الهيكل الهجين (Hybrid Maintenance Structure)" الذي يجمع بين المركزية واللامركزية؟',
    scenarioEn: 'The management of a multi-plant company wants to restructure maintenance. What is the essential advantage of applying the "Hybrid Maintenance Structure" that combines centralization and decentralization?',
    question: 'كيف يحقق الهيكل الهجين أفضل نتائج للموثوقية وفقاً لأدبيات SMRP؟',
    questionEn: 'How does the hybrid structure achieve the best reliability outcomes per SMRP literature?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'يحقق الاستجابة السريعة اليومية للأعطال عبر فرق مناطق تشغيلية لامركزية (Area Teams)، مع تحقيق أعلى كفاءة وتوحيد للمعايير عبر أقسام تخطيط وهندسة موثوقية وورش تخصصية مركزية (Centralized Planning & Engineering).',
        textEn: 'It achieves fast daily response to failures through decentralized area teams, while delivering top efficiency and standardization through centralized planning, reliability engineering, and specialized workshop departments (Centralized Planning & Engineering).',
        isCorrect: true,
        explanation: 'الهيكل الهجين (Hybrid Model) يدمج مزايا النموذجين: يمنح المشغلين فرق صيانة قريبة وسريعة الاستجابة لخط الإنتاج، وفي نفس الوقت يمنع تشتت الموارد بتوحيد وظائف التخطيط الاحترافي، هندسة الموثوقية، وعمرات الورش المركزية تحت قيادة استراتيجية موحدة.',
        explanationEn: 'The Hybrid Model merges the advantages of both: it gives operators maintenance teams close and responsive to the production line, while preventing resource dispersion by unifying professional planning, reliability engineering, and central workshop overhauls under one strategic leadership.',
      },
      {
        text: 'إلغاء جميع إدارات الصيانة والاعتماد على مقاولين خارجيين بنسبة 100% لكل شيء.',
        textEn: 'Abolish all maintenance departments and rely 100% on external contractors for everything.',
        isCorrect: false,
        explanation: 'الاعتماد الكامل على المقاولين يفقد الشركة المعرفة الفنية ويزيد التكاليف على المدى الطويل.',
        explanationEn: 'Full contractor reliance costs the company technical knowledge and raises costs in the long term.',
      },
      {
        text: 'نقل جميع الورش إلى دولة أخرى لتوفير تكلفة الكهرباء.',
        textEn: 'Move all workshops to another country to save on electricity costs.',
        isCorrect: false,
        explanation: 'اقتراح غير عملي يوقف عمليات المصنع.',
        explanationEn: 'An impractical proposal that halts plant operations.',
      },
      {
        text: 'جعل جميع الموظفين في المصنع مديري عموم بالتساوي.',
        textEn: 'Make all employees in the plant general managers equally.',
        isCorrect: false,
        explanation: 'هيكل فوضوي بدون تسلسل إداري واضح.',
        explanationEn: 'A chaotic structure with no clear management hierarchy.',
      }
    ]
  }

  ],
};