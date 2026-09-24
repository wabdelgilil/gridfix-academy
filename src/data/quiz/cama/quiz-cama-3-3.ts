import type { QuizBank } from '../types';

export const quizCama33: QuizBank = {
  id: 'quiz-cama-3-3',
  questions: [
  {
    scenario: 'تمتلك شركة إسمنت نظاماً يدار به أعمال الصيانة الدورية وقرارات العمل وقطع الغيار، وتفكر في زيادة تتبع المواقع الجغرافية لأصولها ومساحاتها الأرضية والبحرية، فتسأل عن الفئة الأنظمة المناسبة لكل حاجة.',
    scenarioEn: 'A cement company owns a system that manages periodic maintenance work, work orders, and spare parts, and is considering adding geographic tracking of its assets and its land and marine areas, so it asks which system category fits each need.',
    question: 'ما الفارق الصحيح بين CMMS وCAFM في هذا السياق؟',
    questionEn: 'What is the correct difference between CMMS and CAFM in this context?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'CMMS يركز على إدارة أوامر الصيانة والوقاية وقطع الغيار، بينما CAFM يشمل إدارة المرافق والمساحات والمواقع، وقد يتكاملان في منشأة واحدة.',
        textEn: 'CMMS focuses on managing maintenance orders, prevention, and spare parts, while CAFM covers facility, space, and location management, and the two may integrate within a single facility.',
        isCorrect: true,
        explanation: 'CMMS نظام إدارة الصيانة محوسبة يركز على أوامر العمل والصيانة الوقائية والمخزون، بينما CAFM يوسع ليشمل إدارة المساحات والمواقع والمرافق؛ والفئتان متكاملتان لا بديلتان بالضرورة.',
        explanationEn: 'CMMS is a computerized maintenance management system focused on work orders, preventive maintenance, and inventory, while CAFM extends to space, location, and facility management; the two categories are complementary, not necessarily alternatives.',
      },
      {
        text: 'CAFM نظام صيانة وقائية بينما CMMS نظام محاسبة مالية بحت.',
        textEn: 'CAFM is a preventive maintenance system, while CMMS is a purely financial accounting system.',
        isCorrect: false,
        explanation: 'المحاسبة المالية ليست جوهر CMMS، وجوهر CAFM يتجاوز الصيانة إلى إدارة المرافق والمساحات.',
        explanationEn: 'Financial accounting is not the core of CMMS, and the core of CAFM goes beyond maintenance into facility and space management.',
      },
      {
        text: 'CMMS وCAFM مصطلحان متطابقان تماماً بلا أي فارق.',
        textEn: 'CMMS and CAFM are completely identical terms with no difference at all.',
        isCorrect: false,
        explanation: 'تتقاطع الاثنان في الصيانة لكن CAFM يتجاوزها للمساحات والمرافق، فالفارق موضوعي حقيقي.',
        explanationEn: 'The two overlap in maintenance, but CAFM goes beyond it to spaces and facilities, so the difference is real and substantive.',
      },
      {
        text: 'CAFM مخصص للشركات الكبرى بينما CMMS للأفراد فقط.',
        textEn: 'CAFM is reserved for large companies, while CMMS is only for individuals.',
        isCorrect: false,
        explanation: 'الحجم ليس معيار التصنيف؛ الفارق وظيفي شأن الهوية: الصيانة مقابل إدارة المرافق كاملة.',
        explanationEn: 'Size is not the classification criterion; the difference is functional, like identity: maintenance versus full facility management.',
      }
    ]
  },
  {
    scenario: 'قررت شركة خدمات مالية ربط نظام CMMS لديها بنظام الموارد البشرية والمالية ونظام العقارات، بحيث يتبادل النظامان بيانات قطع العمل والموظفين والتكاليف بشكل شبه لحظي.',
    scenarioEn: 'A financial services company decided to link its CMMS to its human resources, finance, and real estate systems, so that the systems exchange work order, employee, and cost data almost in real time.',
    question: 'ما المبدأ الناظم لتلك المتطلبات لتكامل ناجح بين الأنظمة؟',
    questionEn: 'What is the governing principle for those requirements to achieve successful integration between systems?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تحديد معرّفات موحدة لبيانات الأصول والموظفين والمواقع، وحدود مسؤولية واضحة لكل نظام، وقواعد تحقق من الصحة عند كل تبادل.',
        textEn: 'Defining unified identifiers for asset, employee, and location data, clear responsibility boundaries for each system, and validation rules on every exchange.',
        isCorrect: true,
        explanation: 'التكامل الناجح يتطلب توافقاً في المعرّفات واتفاقاً على النظام المسؤول عن كل معلومة وضوابط جودة التبادل، فيبلغ التعاون هدفه دون تناقض إصدارات.',
        explanationEn: 'Successful integration requires aligned identifiers, agreement on which system is responsible for each piece of information, and exchange quality controls, so the collaboration reaches its goal without version conflicts.',
      },
      {
        text: 'دمج كل الأنظمة في برنامج واحد يضم كل الوظائف.',
        textEn: 'Merging all systems into a single program that contains every function.',
        isCorrect: false,
        explanation: 'الدمج الكامل يركّب كلفة ومخاطرة كبيرة، والمطلوب ربط محدد برسائل واضحة بين أنظمة قائمة.',
        explanationEn: 'Full merging adds large cost and risk; what is required is a defined link with clear messages between existing systems.',
      },
      {
        text: 'تبادل كامل لبيانات غير منقحة دون حدود صحة.',
        textEn: 'A full exchange of unreviewed data without any boundaries of validity.',
        isCorrect: false,
        explanation: 'التبادل العشوائي بالبيانات غير المنقحة يفسد كل الأنظمة المترابطة، فالتكامل يرتبط بضوابط الصحة.',
        explanationEn: 'Random exchange of unreviewed data corrupts all the interconnected systems, so integration depends on validity controls.',
      },
      {
        text: 'نقل كل البيانات إلى ملفات إلكترونية فصلية تُرسل يدوياً.',
        textEn: 'Moving all the data into quarterly electronic files sent manually.',
        isCorrect: false,
        explanation: 'التبادل اليدوي أبطأ وأسهل خطأً، ولا يحقق ما يصفه منطق الربط شبه اللحظي.',
        explanationEn: 'Manual exchange is slower and more error-prone and does not achieve the near-real-time linkage described.',
      }
    ]
  },
  {
    scenario: 'تستعد شركة اتصالات لاختيار نظام جديد لإدارة أصولها الشبكية، وتقارن بين عروض ثلاثة موردين يتباينون في السعر والانتشار وقدرات التوسع وسهولة الاستخدام والدعم المحلي.',
    scenarioEn: 'A telecom company is preparing to choose a new system to manage its network assets, and is comparing offers from three vendors that differ in price, footprint, scalability, ease of use, and local support.',
    question: 'ما الإطار السليم لمعايير اختيار النظم (System Selection)؟',
    questionEn: 'What is the sound framework for system selection criteria?',
    difficulty: 'سهل',
    options: [
      {
        text: 'تقييم العروض وفق معايير مرجحة تشمل التكلفة الكلية للامتلاك والقدرات الوظيفية وخيارات التوسع ودعم المورد وسهولة التشغيل.',
        textEn: 'Evaluating the offers against weighted criteria that include the total cost of ownership, functional capabilities, expansion options, vendor support, and ease of operation.',
        isCorrect: true,
        explanation: 'الاختيار المنهجي يبني مصفوفة معايير مرجحة بأوزان تتلاءم مع سياق الشركة، فلا يكتفي بالسعر ولا بالوظائف وحدها بل يجمع الدعم والتوسع والكلفة الكلية.',
        explanationEn: 'Systematic selection builds a weighted criteria matrix with weights suited to the company\u2019s context; it is not satisfied with price or functions alone but combines support, expansion, and the total cost.',
      },
      {
        text: 'اختيار أرخص عرض مقدم بلا نظر للقدرات أو الدعم.',
        textEn: 'Choosing the cheapest offer presented without regard to capabilities or support.',
        isCorrect: false,
        explanation: 'السعر الأدنى يفتقر غالباً للدعم والتوسع المطلوبين، فينشئ تكلفة لاحقة تفوق التوفير.',
        explanationEn: 'The lowest price often lacks the required support and expansion, creating a later cost that exceeds the saving.',
      },
      {
        text: 'اعتماد قرار المورد الأعلى مبيعات دون مقارنة وظائف تخصّ الشركة.',
        textEn: 'Adopting the decision of the vendor with the highest sales without comparing company-specific functions.',
        isCorrect: false,
        explanation: 'الانتشار العام لا يعوّض مطابقة النظام لحاجة مؤسسة معينة.',
        explanationEn: 'General footprint does not compensate for matching the system to the need of a specific organization.',
      },
      {
        text: 'اختيار نظام يُثبت من رأي مهندس واحد بلا مراجعة فرق المستخدمين.',
        textEn: 'Choosing a system proven by the opinion of a single engineer without review by user teams.',
        isCorrect: false,
        explanation: 'القرار السليم يشرك فرق الصيانة والتشغيل والمحاسبة بمصفوفة معايير لتغطية كل المنظورات.',
        explanationEn: 'A sound decision involves the maintenance, operations, and accounting teams with a criteria matrix to cover all perspectives.',
      }
    ]
  }
  ],
};