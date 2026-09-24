import type { QuizBank } from '../types';

export const quiz53: QuizBank = {
  id: 'quiz-5-3',
  questions: [
    {
      scenario: 'اكتشف مدير المنشأة أن عامل النظافة يفرّغ بقايا دهانات ورصاص ومذيبات في نفس حاوية النفايات العامة.',
      scenarioEn: 'The facility manager discovers that a cleaner is emptying paint residues, lead, and solvents into the same general waste container.',
      question: 'ما التصرف الصحيح؟',
      questionEn: 'What is the correct action?',
      difficulty: 'سهل',
      options: [
        {
          text: 'فصل النفايات الخطرة في أوعية مخصصة موسومة، وتوثيق تعاملها، ونقلها عبر ناقل مرخص',
          textEn: 'Separate the hazardous waste into dedicated labeled containers, document its handling, and transport it via a licensed carrier',
          isCorrect: true,
          explanation: 'مزج النفايات الخطرة بالعامة انتهاك صريح؛ التدخل الصحيح يبدأ بالفصل والتوثيق من لحظة التوليد.',
          explanationEn: 'Mixing hazardous waste with general waste is an explicit violation; the correct intervention starts with separation and documentation from the moment of generation.',
        },
        {
          text: 'إغلاق الحاوية وإرسالها كما هي إلى مكب النفايات العام',
          textEn: 'Seal the container and send it as is to the general landfill',
          isCorrect: false,
          explanation: 'التخلص السريع لا يحل المشكلة؛ النفايات الخطرة تحتاج مساراً موثقاً يصل إلى جهة معالجة مرخصة.',
          explanationEn: 'Quick disposal does not solve the problem; hazardous waste needs a documented path that reaches a licensed treatment facility.',
        },
        {
          text: 'تجاهل الأمر لأن الكميات صغيرة',
          textEn: 'Ignore the matter because the quantities are small',
          isCorrect: false,
          explanation: 'الالتزام لا يتناسب عكسياً مع الكمية؛ حتى الكميات الصغيرة تخضع لأحكام التصنيف والتوثيق.',
          explanationEn: 'Compliance does not scale inversely with quantity; even small amounts are subject to classification and documentation rules.',
        },
        {
          text: 'إخفاء الموقف وتخزين المواد في المخزن حتى تنتهي الزيارة الرقابية',
          textEn: 'Hide the situation and store the materials in the warehouse until the regulatory visit ends',
          isCorrect: false,
          explanation: 'الإخفاء مخالفة إضافية، وتخزينها بلا إجراء يعمق الخطر، والاكتشاف الحتمي أسوأ من المعالجة المسبقة.',
          explanationEn: 'Concealment is an additional violation, storing them without action deepens the hazard, and inevitable discovery is worse than prior treatment.',
        },
      ],
    },
    {
      scenario: 'تلقّت المنشأة إشعاراً بزيارة تفتيشية من جهة البيئة خلال أيام.',
      scenarioEn: 'The facility receives notice of an inspection visit from the environmental authority within days.',
      question: 'ما أفضل استعداد عملي لها؟',
      questionEn: 'What is the best practical preparation for it?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تدقيق ذاتي سريع يستعرض السجلات ويتحقق من تصحيح ملاحظات قديمة قبل الزيارة',
          textEn: 'A quick self-audit that reviews the records and verifies that old findings were corrected before the visit',
          isCorrect: true,
          explanation: 'التدقيق الداخلي قبيل الزيارة يكتشف الثغرات التي تكتشفها الجهة بثمن أرخص، ويسمح بإغلاقها أو التعامل بصدق معها.',
          explanationEn: 'An internal audit before the visit finds the gaps the authority would find, at a cheaper price, and lets you close them or deal with them honestly.',
        },
        {
          text: 'قفل مخزن النفايات الخطرة ووضع لافتة «ممنوع الدخول» قبل مجيء الفريق',
          textEn: 'Lock the hazardous waste store and put up a "no entry" sign before the team arrives',
          isCorrect: false,
          explanation: 'إخفاء الأشياء يثير الشك ويمنعك من عرض جاهزيتك، والجهة لها حق الاطلاع على كل ما يخص الالتزام.',
          explanationEn: 'Hiding things breeds suspicion and prevents you from showing your readiness; the authority has the right to review everything related to compliance.',
        },
        {
          text: 'الاحتفاظ بكل الأوراق في مكتب المدير بعيداً عن متناول أيدي الفريق',
          textEn: 'Keep all the papers in the manager\u2019s office away from the team\u2019s reach',
          isCorrect: false,
          explanation: 'الوثائق يجب أن تكون جاهزة وقابلة للعرض عند الطلب؛ إخفاؤها يعد انطباعاً سلبياً وربما مخالفة.',
          explanationEn: 'Documents must be ready and presentable on demand; hiding them creates a negative impression and possibly a violation.',
        },
        {
          text: 'تأجيل الزيارة وتحديد موعد آخر استعداداً «أفضل»',
          textEn: 'Postpone the visit and set another date for "better" preparation',
          isCorrect: false,
          explanation: 'لا يجوز التحكم في مواعيد الجهة الرقابية، ومن تصرف هكذا يُحاسَب على التعنت فضلاً عن جوهر الامتثال.',
          explanationEn: 'You cannot control the regulator\u2019s schedule, and acting this way incurs liability for obstinacy on top of the substance of compliance.',
        },
      ],
    },
    {
      scenario: 'أثناء عملية نقل وقود، تسربت كمية قليلة في ساحة الخدمة.',
      scenarioEn: 'During a fuel transfer operation, a small quantity leaks into the service yard.',
      question: 'ما أول إجراء يلي ذلك مباشرة؟',
      questionEn: 'What is the first action immediately after this?',
      difficulty: 'صعب',
      options: [
        {
          text: 'احتواء التسرب فوراً ثم الإبلاغ الرسمي ضمن المهلة المقررة',
          textEn: 'Contain the spill immediately, then make the official report within the required deadline',
          isCorrect: true,
          explanation: 'الاحتواء يوقف تنفيذ الضرر، والإبلاغ ضمن المهلة القانونية يمنع تحوّل الحادثة البيئي إلى مخالفة بلاغ متأخر.',
          explanationEn: 'Containment stops the harm, and reporting within the legal deadline prevents the environmental incident from turning into a late-report violation.',
        },
        {
          text: 'الانتظار حتى تبدو الساحة جافة ثم نسيان الموقف',
          textEn: 'Wait until the yard looks dry, then forget the matter',
          isCorrect: false,
          explanation: 'التسرب قد يتغلغل في التربة أو المصارف، والتأخير يجعل الآثار أصعب والبلاغ المتأخر مخالفة إضافية.',
          explanationEn: 'The spill may seep into the soil or drains; delay makes the effects harder and a late report is an additional violation.',
        },
        {
          text: 'مناقشة الخطوة مع الإدارة العليا لأسابيع قبل أي إجراء',
          textEn: 'Discuss the step with senior management for weeks before any action',
          isCorrect: false,
          explanation: 'سلسلة الطوارئ تُصرَّف ضمن مهلة زمنية، وترتيب الأولويات يبدأ بالاحتواء الفوري لا باجتماعات التروي.',
          explanationEn: 'The emergency chain is handled within a time limit, and prioritization starts with immediate containment, not deliberation meetings.',
        },
        {
          text: 'تجاهل الكمية لصغرها واعتبارها غير مشمولة بالبلاغ',
          textEn: 'Ignore the quantity because of its smallness and consider it not subject to reporting',
          isCorrect: false,
          explanation: 'البلاغ القانوني يُقيَّم بالحادثة لا بحجم التسرب وحده، وإهمال التسجيل يمنع إثبات المعالجة لاحقاً.',
          explanationEn: 'Legal reporting is assessed by the incident, not by the spill size alone; neglecting to record it prevents later proof of treatment.',
        },
      ],
    },
  ],
};