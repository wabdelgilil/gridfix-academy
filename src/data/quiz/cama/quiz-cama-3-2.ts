import type { QuizBank } from '../types';

export const quizCama32: QuizBank = {
  id: 'quiz-cama-3-2',
  questions: [
  {
    scenario: 'تعتمد شركة طاقة على قاعدة بيانات مركزية لحساب مؤشر الاعتمادية، لكن عند المراجعة وجدت أن بعض أصول معالجة الأعطال سُجلت في الوقت الخطأ وبعضها الآخر على أصل مجاور.',
    scenarioEn: 'An energy company relies on a central database to calculate its reliability indicator, but upon review it found that some failure-processing records were logged at the wrong time and others against a neighboring asset.',
    question: 'أي أبعاد جودة البيانات الخمسة نُقضت في هذا الموقف بوضوح؟',
    questionEn: 'Which of the five data quality dimensions is clearly violated in this situation?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الاكتمال والاتساق والتوقيت معاً: حقول ناقصة، وتسجيل متضارب للأصل نفسه، وأزمنة غير صحيحة للحدث.',
        textEn: 'Completeness, consistency, and timeliness together: missing fields, conflicting records for the same asset, and incorrect event times.',
        isCorrect: true,
        explanation: 'جودة البيانات تشمل الاكتمال والاتساق والتوقيت والدقة والصحة؛ وتسجيل العطل على أصل خاطئ وفي وقت زمني غير صحيح يخالف الدقة والتوقيت، فيجعل مؤشرات الاعتمادية غير موثوقة.',
        explanationEn: 'Data quality includes completeness, consistency, timeliness, accuracy, and validity; logging a failure against the wrong asset and at an incorrect time violates accuracy and timeliness, making the reliability indicators untrustworthy.',
      },
      {
        text: 'أمان البيانات فقط لأن التخزين مركزي تحسني.',
        textEn: 'Data security only, because the storage is centralized and improved.',
        isCorrect: false,
        explanation: 'التخزين المركزي لا يتكفل الجودة؛ المشكلة في دقة التسجيل وتوقيته لا الأمان.',
        explanationEn: 'Centralized storage does not guarantee quality; the problem is recording accuracy and timing, not security.',
      },
      {
        text: 'ازدواجية البيانات في التخزين دون علاقة بالتسجيل.',
        textEn: 'Data duplication in storage with no relation to recording.',
        isCorrect: false,
        explanation: 'المشكلة في خطأ التسجيل، ومفهوم جودة البيانات ينظر لكامل الدورة من التقاط للتحليل.',
        explanationEn: 'The problem lies in a recording error, and the concept of data quality looks at the entire cycle from capture to analysis.',
      },
      {
        text: 'لا مشكلة جودة لأن الأخطاء قليلة العدد.',
        textEn: 'There is no quality problem because the errors are few in number.',
        isCorrect: false,
        explanation: 'حتى نسبة صغيرة من أخطاء التسجيل تهدر موثوقية مؤشرات حرجة كالاعتمادية، فالجودة تُقاس بمقتضى الاستخدام.',
        explanationEn: 'Even a small share of recording errors wastes the reliability of critical indicators such as the reliability metric; quality is measured against the intended use.',
      }
    ]
  },
  {
    scenario: 'في شركة بترولية تتضارب بيانات الأعطال بين عدة فرق، فقررت تشكيل لجنة حوكمة بيانات للأصول تحدد ملاك البيانات ومسؤول الحوكمة وكيف يُوثق كل متغير عبر دورة حياته.',
    scenarioEn: 'In an oil company, failure data conflicts across several teams, so it decided to form an asset data governance committee that defines data owners, the governance officer, and how each variable is documented across its life cycle.',
    question: 'ما الهدف من حوكمة البيانات (Data Governance) في هذا السياق؟',
    questionEn: 'What is the purpose of data governance in this context?',
    difficulty: 'سهل',
    options: [
      {
        text: 'تحديد الجهات المالكة للبيانات والصلاحيات والقواعد الموثقة لإدارة فترة حياتها ومعالجة تعارضها وسلامتها.',
        textEn: 'Defining the data owning parties, permissions, and the documented rules for managing their life cycle, resolving their conflicts, and ensuring their integrity.',
        isCorrect: true,
        explanation: 'الحوكمة تسوّي تعارض الفرق بتحديد مالِك كل بيانات والقواعد والصلاحيات ودورة الحياة والتوثيق، فتتحول البيانات من اجتهادات متضاربة إلى إطار مؤسسي منضبط.',
        explanationEn: 'Governance resolves team conflicts by defining who owns each data set, the rules, permissions, life cycle, and documentation, turning the data from conflicting efforts into a disciplined institutional framework.',
      },
      {
        text: 'إتاحة البيانات مجاناً لكل موظف مهما كانت صلاحياته.',
        textEn: 'Making the data freely available to every employee regardless of their permissions.',
        isCorrect: false,
        explanation: 'الحوكمة تُنظم الصلاحيات لا تفتح الوصول بلا ضوابط؛ التسليم المفتوح يعمق تعارض الإصدارات.',
        explanationEn: 'Governance regulates permissions rather than opening unrestricted access; open access deepens version conflicts.',
      },
      {
        text: 'حذف كل البيانات التاريخية القديمة فوراً.',
        textEn: 'Immediately deleting all old historical data.',
        isCorrect: false,
        explanation: 'الحوكمة تحدد عمر البيانات والاحتفاظ الواجب، والحذف الاعتباطي يقتل إمكانية التحليل التاريخي.',
        explanationEn: 'Governance defines the life of the data and the required retention; arbitrary deletion destroys the possibility of historical analysis.',
      },
      {
        text: 'نقل كامل مسؤولية البيانات إلى مقاول خارجي.',
        textEn: 'Transferring the full data responsibility to an external contractor.',
        isCorrect: false,
        explanation: 'الحوكمة تقع في داخل المنشأة ويحدد ملاك البيانات والفرق، والاستعانة الخارجية لا تلغي مسؤولية المؤسسة.',
        explanationEn: 'Governance belongs inside the organization, which defines the data owners and teams; outsourcing does not remove the institution\u2019s responsibility.',
      }
    ]
  },
  {
    scenario: 'أرادت شركة تأمين سيارات، تشغّل أسطولاً، أن توحد تسمية سجلات أصولها (مميز التجاري، الرقم الهيكلي، رقم اللوحة) بنظام واحد يخدم الصيانة والمحاسبة والتشغيل معاً.',
    scenarioEn: 'A car insurance company that operates a fleet wanted to unify the naming of its asset records (commercial model, chassis number, plate number) under a single system serving maintenance, accounting, and operations together.',
    question: 'أي مفهوم يستخدم لتلك السجلات الموحدة؟',
    questionEn: 'Which concept applies to those unified records?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'البيانات الرئيسية للأصول (Master Data): معرّفات ثابتة ومصدر واحد يخدم كل عمليات الصيانة والمحاسبة والتشغيل.',
        textEn: 'Asset Master Data: stable identifiers and a single source serving all maintenance, accounting, and operations processes.',
        isCorrect: true,
        explanation: 'البيانات الرئيسية مجموعات المعرّفات الأساسية الثابتة التي تشترك بها كل الأنظمة القطاعية؛ توحيدها يضمن حديث جميع الفرق عن الأصل نفسه بصيغة واحدة.',
        explanationEn: 'Master data are the stable foundational identifier sets shared by all line-of-business systems; unifying them ensures all teams speak about the same asset in a single form.',
      },
      {
        text: 'بيانات المعاملات اليومية (Transactions) لعملية الإصلاح فقط.',
        textEn: 'Daily transactional data of the repair process only.',
        isCorrect: false,
        explanation: 'بيانات المعاملات متغيرة وتنتمي للعمليات الجارية، بينما الموصوف قاعدة ثابتة مشتركة وهي البيانات الرئيسية.',
        explanationEn: 'Transactional data are variable and belong to current operations, while what is described is a stable shared base, which is master data.',
      },
      {
        text: 'مستودع أرشيفي لملفات النسخ الاحتياطي.',
        textEn: 'An archival repository of backup files.',
        isCorrect: false,
        explanation: 'الأرشيف نسخ الثانوية؛ الهدف هو سجل مرجعي موحد للاستخدام اليومي لا تخزين استرجاع.',
        explanationEn: 'The archive is secondary copies; the goal is a unified reference register for daily use, not retrieval storage.',
      },
      {
        text: 'قاعدة بيانات القياس المالي للأسطول فقط.',
        textEn: 'A financial measurement database of the fleet only.',
        isCorrect: false,
        explanation: 'المعايير المالية جزء، والبيانات الرئيسية تخدم الصيانة والتشغيل والمحاسبة مجتمعة.',
        explanationEn: 'Financial measures are one part; master data serve maintenance, operations, and accounting combined.',
      }
    ]
  }
  ],
};