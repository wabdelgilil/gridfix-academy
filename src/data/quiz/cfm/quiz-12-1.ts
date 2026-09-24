import type { QuizBank } from '../types';

export const quiz121: QuizBank = {
  id: 'quiz-12-1',
  questions: [
    {
      scenario: 'مشروع تجديد مكاتب بدأ دون وثيقة نطاق مكتوبة، وخلال التنفيذ استمر العملاء يطلبون إضافات شفهياً.',
      scenarioEn: 'An office renovation project started without a written scope document, and during execution the clients kept requesting additions verbally.',
      question: 'ما أول ما يفشل في مثل هذا المشروع؟',
      questionEn: 'What fails first in such a project?',
      difficulty: 'سهل',
      options: [
        {
          text: 'سيطرتك على النطاق: بلا وثيقة نطاق معتمدة يصبح كل طلب جديد «نطاقاً» فينفجر الجدول والميزانية',
          textEn: 'Your control of scope: without an approved scope document every new request becomes "scope", so the schedule and budget blow up',
          isCorrect: true,
          explanation: 'وثيقة النطاق حد المشروع: ما يدخل وما لا يدخل؛ بلاها يكون التوسع الجامع غير قابل للتوقف.',
          explanationEn: 'The scope document is the project boundary: what enters and what does not; without it, runaway expansion cannot be stopped.',
        },
        {
          text: 'الغرض التقني الصغير في المعدات فقط',
          textEn: 'Only a small technical failure in the equipment',
          isCorrect: false,
          explanation: 'فشل نطاق يضرب الجدول والتكلفة والجودة معاً؛ المعدات وحدها لا تفسر انهيار المشروع.',
          explanationEn: 'A scope failure hits schedule, cost, and quality together; equipment alone does not explain a project collapse.',
        },
        {
          text: 'النقص في عدد العمال لا في النطاق',
          textEn: 'The shortfall is in the number of workers, not in the scope',
          isCorrect: false,
          explanation: 'قد تضيف العمالة لكنها تخدم أوامر متوسعة؛ الجذر هو غياب الحد المعتمد لا حجم الفريق.',
          explanationEn: 'You may add labor, but it serves expanding orders; the root is the absence of an approved boundary, not the team size.',
        },
        {
          text: 'لا خطر؛ الطلبات الشفهية تُحفظ عن ظهر',
          textEn: 'No risk; verbal requests are memorized by heart',
          isCorrect: false,
          explanation: 'الذاكرة عرضة للنسيان والنزاع؛ التوثيق المكتوب هو الحكم الفاصل عند أي خلاف.',
          explanationEn: 'Memory is prone to forgetting and disputes; written documentation is the decisive arbiter in any disagreement.',
        },
      ],
    },
    {
      scenario: 'أثناء تنفيذ مشروع ترقية أنظمة، طلب العميل إضافة طابق للسرد الجديد دون ذكر ميزانية أو توقيت.',
      scenarioEn: 'During a systems upgrade project, the client requested adding a floor to the new layout without mentioning a budget or timing.',
      question: 'ما المعالجة الاحترافية لهذا الطلب؟',
      questionEn: 'What is the professional way to handle this request?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'طلب أمر تغيير (Change Order): تقدير التكلفة والأثر على الجدول، واعتماد كتابي قبل أي تنفيذ له',
          textEn: 'Requesting a change order: estimate the cost and the schedule impact, with written approval before any execution',
          isCorrect: true,
          explanation: 'التغيير يُدار بعملية: يُقدَّر أولاً فيكشف أثره على الميزانية والجدول، ثم يعتمد كتابياً قبل أي تنفيذ.',
          explanationEn: 'Change is managed as a process: it is estimated first, revealing its impact on the budget and schedule, then approved in writing before execution.',
        },
        {
          text: 'تنفيذ الإضافة فوراً لأن رغبات العميل أولوية مطلقة',
          textEn: 'Executing the addition immediately because client wishes are an absolute priority',
          isCorrect: false,
          explanation: 'الاستجابة الفورية بلا تقدير تخرب ميزانية؛ الاعتماد المكتوب مسبقاً يحمي الطرفين معاً.',
          explanationEn: 'An immediate response without an estimate ruins the budget; prior written approval protects both parties.',
        },
        {
          text: 'رفض الطلب نهائياً لأن النطاق مُعلن',
          textEn: 'Rejecting the request outright because the scope is declared',
          isCorrect: false,
          explanation: 'الرفض التام يعطل شراكة؛ الإجراء الصحيح استقبل التغيير بعملية تقدير واعتماد لا بنعم أو لا الحادة.',
          explanationEn: 'Total refusal disrupts partnership; the right procedure receives the change through an estimate-and-approval process, not a blunt yes or no.',
        },
        {
          text: 'تحويل التكلفة لاحقاً على فئتي المواد دون إعلام',
          textEn: 'Later shifting the cost onto the material categories without notifying anyone',
          isCorrect: false,
          explanation: 'من العيوب المهنية تحميل كلفة بلا موافقة؛ الشفافية في العرض والاعتماد هما شرف التعاقد.',
          explanationEn: 'Bearing a cost without consent is a professional flaw; transparency in presentation and approval is the honor of contracting.',
        },
      ],
    },
    {
      scenario: 'ثلاث مراحل متتابعة لمشروع مركّب: كل مرحلة تعتمد على إنجاز سابقتها (التصميم ثم التجهيز ثم التركيب).',
      scenarioEn: 'Three sequential phases of a compound project: each phase depends on completing the previous one (design, then setup, then installation).',
      question: 'ما طريقة الجدولة التي توضح هذه النوافذ الزمنية والعلاقات؟',
      questionEn: 'Which scheduling method makes these time windows and dependencies clear?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مخطط جانت بعلاقات تتابع ومسارات حرجة يبيّن تأخر أي مرحلة وأثرها على موعد التسليم',
          textEn: 'A Gantt chart with sequential dependencies and critical paths showing any phase delay and its impact on the delivery date',
          isCorrect: true,
          explanation: 'مخطط جانت يربط المهام بالتتابع والمواعيد، والمسار الحرج يحدد السلسلة الأطول التي تحكم نهاية المشروع.',
          explanationEn: 'A Gantt chart ties tasks to sequence and dates, and the critical path identifies the longest chain that governs the project end.',
        },
        {
          text: 'قائمة مهام أفقية بلا تواريخ تفصّل الأعمال',
          textEn: 'A horizontal task list without dates detailing the work',
          isCorrect: false,
          explanation: 'القائمة تعرض ماذا، لا متى والعلاقات؛ الجدولة تحتاج الوقت والتبعية والفترات في شكل مرئي قابل للمتابعة.',
          explanationEn: 'A list shows what, not when and the dependencies; scheduling needs time, sequence, and durations in a trackable visual form.',
        },
        {
          text: 'حفظ الجدول في الذاكرة والاعتماد على بديهيات الفريق',
          textEn: 'Keeping the schedule in memory and relying on the team\u2019s instincts',
          isCorrect: false,
          explanation: 'الذاكرة جماعية لا تملك وثيقة مواعيد؛ الاعتماد على البديهة يجعل أي تأخير مفاجأة غير قابلة للتوقع.',
          explanationEn: 'Collective memory holds no schedule document; relying on instinct turns any delay into an unpredictable surprise.',
        },
        {
          text: 'جدولة موحدة تشغل كل المهام متوازية بلا تبعية',
          textEn: 'A uniform schedule running all tasks in parallel without dependencies',
          isCorrect: false,
          explanation: 'التبعية حقيقة (لا تركيب قبل تجهيز)؛ التوازي الأعمى يكرر العمل ويؤخر ما كان يمكن إنجازه بالتسلسل المدروس.',
          explanationEn: 'Dependency is real (no installation before setup); blind parallelism repeats work and delays what a considered sequence could deliver.',
        },
      ],
    },
  ],
};