import type { QuizBank } from '../types';

export const quizCama11: QuizBank = {
  id: 'quiz-cama-1-1',
  questions: [
  {
    scenario: 'قامت مؤسسة نفطية كبرى بشراء نظام إدارة أصول جديد (EAM) بتكلفة 2 مليون دولار، لكن بعد مرور سنة واحدة لم يستخدمه سوى 30% من المستخدمين المطلوبين، والبيانات المدخلة غير مكتملة وتحتوي أخطاء كثيرة.',
    scenarioEn: 'A major oil organization purchased a new enterprise asset management (EAM) system for $2 million, but after one year only 30% of the required users had used it, and the entered data is incomplete and contains many errors.',
    question: 'وفقاً لمعيار ISO 55001، ما هو العيب الجذري في هذه المؤسسة الذي أدى إلى فشل تطبيق النظام؟',
    questionEn: 'According to ISO 55001, what is the root defect in this organization that led to the failure of the system implementation?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'غياب خطة إدارة الأصول الاستراتيجية (SAMP) التي تربط النظام بالأهداف المؤسسية وتحدد متطلبات النجاح البشرية والتنظيمية.',
        textEn: 'The absence of a strategic asset management plan (SAMP) that links the system to organizational objectives and defines the human and organizational requirements for success.',
        isCorrect: true,
        explanation: 'معيار ISO 55001 يشترط وجود SAMP كوثيقة توجيهية علوية تربط نجاح نظام إدارة الأصول بالسياق المؤسسي. بدونها، يصبح شراء البرمجيات مجرد استثمار تقني منفصل عن الاستراتيجية.',
        explanationEn: 'ISO 55001 requires a SAMP as a top-level steering document linking the success of the asset management system to the organizational context. Without it, purchasing software becomes a mere technical investment disconnected from strategy.',
      },
      {
        text: 'اختيار النظام كان خاطئاً لأنه أغلى من اللازم.',
        textEn: 'The system selection was wrong because it was more expensive than necessary.',
        isCorrect: false,
        explanation: 'المشكلة ليست في السعر بل في غياب التخطيط المؤسسي والدعم القيادي المطلوب لنجاح أي نظام إدارة أصول.',
        explanationEn: 'The problem is not the price but the absence of the organizational planning and leadership support required for any asset management system to succeed.',
      },
      {
        text: 'كان يجب تعيين فني صيانة واحد كمسؤول عن إدخال البيانات.',
        textEn: 'A single maintenance technician should have been appointed to be responsible for entering the data.',
        isCorrect: false,
        explanation: 'إسناد المسؤولية لشخص واحد لن يحل مشكلة غياب الثقافة المؤسسية والتزام الإدارة.',
        explanationEn: 'Assigning the responsibility to a single person will not solve the problem of the missing organizational culture and management commitment.',
      },
      {
        text: 'النظام برمجياً معيب ولا يتوافق مع أنظمة الشركة.',
        textEn: 'The system is defective in software and incompatible with the company\u2019s systems.',
        isCorrect: false,
        explanation: 'نسبة 30% استخدام تدل على مشكلة تنظيمية وثقافية لا تقنية.',
        explanationEn: 'The 30% usage rate indicates an organizational and cultural problem, not a technical one.',
      }
    ]
  },
  {
    scenario: 'يؤدي فريق الصيانة في مصنع أدوية مهامه بكفاءة عالية من الناحية الفنية، لكن إدارة الشركة ترفض تزويد القسم بميزانية إضافية لتوسيع فريق الصيانة رغم نمو الإنتاج.',
    scenarioEn: 'The maintenance team in a pharmaceutical plant performs its tasks with high technical efficiency, but the company management refuses to give the department an additional budget to expand the maintenance team despite the growth in production.',
    question: 'وفقاً لمبادئ ISO 55000 لإدارة الأصول، كيف يجب على مدير الصيانة تبرير الطلب المالي بلغة الإدارة العليا؟',
    questionEn: 'According to the ISO 55000 asset management principles, how should the maintenance manager justify the financial request in the language of senior management?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'ربط الميزانية بالقيمة المالية: إثبات أن كل وحدة إنتاج إضافية تتطلب أصولاً مدعومة بصيانة كافية، وأن عدم التوسع سيخلق فجوة في الاعتمادية تهدد النمو المستهدف.',
        textEn: 'Link the budget to financial value: prove that every additional production unit requires assets supported by adequate maintenance, and that not expanding will create a reliability gap threatening the targeted growth.',
        isCorrect: true,
        explanation: 'مبادئ ISO 55000 تؤكد أن إدارة الأصول يجب أن تحقق قيمة للمؤسسة، وتترجم الأهداف التجارية إلى أهداف أصول قابلة للقياس. اللغة المالية هي لغة الإدارة العليا.',
        explanationEn: 'The ISO 55000 principles confirm that asset management must deliver value to the organization and translate business objectives into measurable asset objectives. Financial language is the language of senior management.',
      },
      {
        text: 'إرسال تقرير فني طويل يتضمن تفاصيل المعدات والأعطال.',
        textEn: 'Sending a long technical report that includes equipment and failure details.',
        isCorrect: false,
        explanation: 'التقارير الفنية الطويلة لا تصل إلى الإدارة العليا؛ المطلوب ملخص مالي يربط الميزانية بالعائد.',
        explanationEn: 'Long technical reports do not reach senior management; what is required is a financial summary linking the budget to the return.',
      },
      {
        text: 'التهديد بالاستقالة إن لم تُرفع الميزانية.',
        textEn: 'Threatening to resign if the budget is not increased.',
        isCorrect: false,
        explanation: 'التخويف أو التهديد أسلوب غير مهني لا يخدم المصلحة المؤسسية.',
        explanationEn: 'Intimidation or threats are unprofessional and do not serve the organizational interest.',
      },
      {
        text: 'لا يمكن تبرير أي طلب مالي إضافي لأن الصيانة وظيفة داعمة فقط.',
        textEn: 'No additional financial request can be justified because maintenance is only a supporting function.',
        isCorrect: false,
        explanation: 'هذا الاعتقاد القديم يتعامل مع الصيانة كمركز تكلفة لا كمحرك قيمة، وهو ما يكافحه معيار ISO 55000.',
        explanationEn: 'This outdated belief treats maintenance as a cost center rather than a value driver, which is what ISO 55000 fights against.',
      }
    ]
  },
  {
    scenario: 'أعدّ فريق الحوكمة في شركة كهربائية خارطة للم stakeholders (Stakeholders) تحدد طرق التواصل مع كل فريق مؤسسي، لكنهم اكتشفوا أن 40% من أصحاب المصلحة الداخليين لا يفهمون بعد ماذا يعني "إدارة الأصول" بالضبط.',
    scenarioEn: 'The governance team in an electricity company prepared a stakeholder map defining the communication approach with each organizational team, but they discovered that 40% of the internal stakeholders still do not understand what "asset management" exactly means.',
    question: 'ما هو الإجراء الأولي الذي يجب اتخاذه قبل التوسع في تواصل الحوكمة مع باقي الأطراف؟',
    questionEn: 'What is the initial action that must be taken before expanding governance communication with the rest of the parties?',
    difficulty: 'سهل',
    options: [
      {
        text: 'إجراء ورش عمل توعوية تشرح مفاهيم إدارة الأصول وأهميتها لكل فئة من أصحاب المصلحة بما يتناسب مع دورهم.',
        textEn: 'Conducting awareness workshops that explain asset management concepts and their importance to each stakeholder category in line with their role.',
        isCorrect: true,
        explanation: 'فهم أصحاب المصلحة لمفاهيم إدارة الأصول هو شرط أساسي لنجاح الحوكمة. بدون فهم مشترك، لن يتعاون أي طرف بفعالية.',
        explanationEn: 'Stakeholder understanding of asset management concepts is a fundamental condition for governance success. Without shared understanding, no party will cooperate effectively.',
      },
      {
        text: 'إلغاء خارطة الم stakeholders والتركيز فقط على الإدارة العليا.',
        textEn: 'Cancelling the stakeholder map and focusing only on senior management.',
        isCorrect: false,
        explanation: 'إهمال باقي أصحاب المصلحة يعرض المشروع لمقاومة كبيرة من الفرق التنفيذية.',
        explanationEn: 'Neglecting the rest of the stakeholders exposes the project to major resistance from the operating teams.',
      },
      {
        text: 'إرسال نسخة من معيار ISO 55000 لجميع الموظفين.',
        textEn: 'Sending a copy of ISO 55000 to all employees.',
        isCorrect: false,
        explanation: 'المعيار مكتوب بلغة تقنية معقدة؛ المطلوب محتوى مبسط ومخصص لكل فئة.',
        explanationEn: 'The standard is written in complex technical language; what is required is simplified content tailored to each category.',
      },
      {
        text: 'انتظار أن يفهم الموظفون المفاهيم تلقائياً مع مرور الوقت.',
        textEn: 'Waiting for employees to understand the concepts automatically over time.',
        isCorrect: false,
        explanation: 'الانتظار السلبي يضيع فرصاً ويطرح مقاومة للمتغيرات التنظيمية.',
        explanationEn: 'Passive waiting wastes opportunities and creates resistance to organizational changes.',
      }
    ]
  }
  ],
};

export default quizCama11;