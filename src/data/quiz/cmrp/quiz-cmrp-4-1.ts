import type { QuizBank } from '../types';

export const quizCmrp41: QuizBank = {
  id: 'quiz-cmrp-4-1',
  questions: [
  {
    scenario: 'في مراجعة لإدارة الصيانة بمصنع كيميائي، لاحظ مدير الموثوقية أن الفنيين يقومون بإصلاح الأعطال الميكانيكية والكهربائية اليومية دون فتح أي أوامر شغل في نظام الـ CMMS، ويقومون بتسجيل أمر عمل واحد عام ومفتوح في نهاية الشهر باسم "صيانة عامة للورشة".',
    scenarioEn: 'In a maintenance management review at a chemical plant, the reliability manager noticed that technicians perform daily mechanical and electrical repairs without opening any work orders in the CMMS, and they record one general open work order at the end of the month under the name "general workshop maintenance".',
    question: 'وفقاً لمعايير إدارة الأعمال (Work Management) في SMRP، ما هي الخسارة الاستراتيجية الأخطر المترتبة على هذه الممارسة السيئة؟',
    questionEn: 'Per SMRP work management standards, what is the most serious strategic loss resulting from this bad practice?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'فقدان سجل التاريخ الفني للأصل (Asset History) واستحالة معرفة التكلفة الحقيقية لصيانة كل معدة أو حساب معدلات MTBF و MTTR وتحليل الأعطال المتكررة.',
        textEn: 'Losing the asset history record, making it impossible to know the true maintenance cost of each asset or calculate MTBF and MTTR rates and analyze recurring failures.',
        isCorrect: true,
        explanation: 'الـ CMMS ليس مجرد أداة لإثبات حضور العمال، بل هو "بنك ذاكرة المصنع". إذا نفذت الصيانة بدون أمر شغل مخصص للأصل، يفقد مهندس الموثوقية بيانات تكرار الأعطال، وتضيع تكاليف قطع الغيار وساعات العمل في حساب عام غامض، مما يجعل تحليل الأعطال (RCA) وحساب MTBF مستحيلاً.',
        explanationEn: 'The CMMS is not merely a tool to prove worker attendance; it is the plant\'s memory bank. If maintenance is executed without a work order dedicated to the asset, the reliability engineer loses failure-recurrence data, and spare parts and labor costs vanish into a vague general account, making RCA and MTBF calculation impossible.',
      },
      {
        text: 'انخفاض سرعة دوران محركات المصنع بنسبة 20% تلقائياً.',
        textEn: 'An automatic 20% drop in the rotation speed of the plant\'s motors.',
        isCorrect: false,
        explanation: 'الـ CMMS برنامج إداري ولا يؤثر بشكل فيزيائي مباشر على سرعة دوران المحركات.',
        explanationEn: 'The CMMS is an administrative program and has no direct physical effect on motor rotation speed.',
      },
      {
        text: 'توقف نظام التبريد المركزي للمكاتب الإدارية.',
        textEn: 'Shutdown of the central cooling system for the administrative offices.',
        isCorrect: false,
        explanation: 'تأثير إداري لا يرتبط بنظام أوامر الشغل الميدانية.',
        explanationEn: 'An administrative effect unrelated to the field work order system.',
      },
      {
        text: 'لا توجد أي خسارة، فهذه طريقة ممتازة لتوفير وقت الفنيين في استخدام الكمبيوتر.',
        textEn: 'There is no loss; this is an excellent way to save the technicians\' time using the computer.',
        isCorrect: false,
        explanation: 'هذه ممارسة سيئة جداً تهدم الركن الخامس في SMRP وتعتبر علامة صريحة على الصيانة الفوضوية.',
        explanationEn: 'This is a very bad practice that destroys SMRP Pillar 5 and is a clear sign of chaotic maintenance.',
      }
    ]
  },
  {
    scenario: 'يقوم مشغلو خط التعبئة بتقديم أكثر من 40 طلب عمل (Work Request) يومياً إلى نظام الـ CMMS، يتضمن الكثير منها طلبات مكررة أو رغبات غير ضرورية (مثل طلاء جدار أو تعديل مقبض باب). يقوم فريق الصيانة بمحاولة التخطيط لكل هذه الطلبات فور ورودها.',
    scenarioEn: 'Packaging line operators submit more than 40 work requests daily to the CMMS, many of them duplicates or unnecessary wishes (such as painting a wall or adjusting a door handle). The maintenance team tries to plan all these requests as soon as they arrive.',
    question: 'ما هي المرحلة المفقودة في دورة حياة أمر الشغل التي يجب تفعيلها فوراً لضبط التدفق؟',
    questionEn: 'Which missing stage of the work order lifecycle must be activated immediately to control the flow?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'مرحلة التصفية والتدقيق وحراسة البوابة (Screening & Gatekeeping)؛ حيث يقوم مسؤول الصيانة والتشغيل بمراجعة واعتماد الطلبات الحقيقية فقط ورفض أو دمج الطلبات المكررة قبل دخولها لمرحلة التخطيط.',
        textEn: 'The Screening & Gatekeeping stage, where the maintenance and operations lead reviews and approves only the genuine requests and rejects or merges the duplicates before they enter the planning stage.',
        isCorrect: true,
        explanation: 'عملية الـ Gatekeeping أو Screening اليومية هي صمام الأمان لمنع اختناق قسم التخطيط بطلبات وهمية أو غير معتمدة. لا يدخل أي طلب عمل لمرحلة التخطيط والتسعير إلا بعد التحقق من صحته وجدواه واعتماده من مشرف التشغيل والصيانة.',
        explanationEn: 'Daily gatekeeping or screening is the safety valve that prevents the planning department from choking on fake or unapproved requests. No work request enters planning and estimating until its validity and value are verified and approved by the operations and maintenance supervisor.',
      },
      {
        text: 'مرحلة الإغلاق المالي لأوامر الشغل القديمة.',
        textEn: 'The financial closure stage for old work orders.',
        isCorrect: false,
        explanation: 'الإغلاق المالي يقع في نهاية الدورة بعد التنفيذ وليس في مرحلة دخول الطلبات.',
        explanationEn: 'Financial closure occurs at the end of the lifecycle after execution, not at the request intake stage.',
      },
      {
        text: 'إلغاء صلاحية المشغلين في كتابة أي طلبات عمل للأبد.',
        textEn: 'Canceling the operators\' authority to write any work requests forever.',
        isCorrect: false,
        explanation: 'المشغلون هم خط الدفاع الأول في رصد الأعطال ولا يجوز منعهم بل توجيههم وتصفية طلباتهم.',
        explanationEn: 'Operators are the first line of defense in spotting failures; they should not be banned but guided, and their requests screened.',
      },
      {
        text: 'تحويل جميع الطلبات إلى أوامر عمل طارئة وتوزيعها عشوائياً على الفنيين.',
        textEn: 'Converting all requests into emergency work orders and distributing them randomly to technicians.',
        isCorrect: false,
        explanation: 'تدمير كامل للنظام التشغيلي وتحويل المصنع لبيئة إطفاء حرائق تفاعلية.',
        explanationEn: 'Complete destruction of the operating system, turning the plant into a reactive firefighting environment.',
      }
    ]
  },
  {
    scenario: 'انتهى فني الصيانة من استبدال مانع تسرب ميكانيكي لمضخة مياه، وقام بإغلاق أمر الشغل في النظام وكتب في خانة الملاحظات: "تم الإصلاح والعملية تمت بنجاح" دون أي تفاصيل أخرى.',
    scenarioEn: 'A maintenance technician finished replacing a mechanical seal on a water pump, closed the work order in the system, and wrote in the notes field: "the repair was completed successfully" without any further details.',
    question: 'بصفتك مهندس الموثوقية (CMRP)، لماذا تُعد هذه التغذية الراجعة (Feedback) غير مقبولة في معايير إدارة الأعمال؟',
    questionEn: 'As a reliability engineer (CMRP), why is this feedback unacceptable in work management standards?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'لأنها تفتقر للبيانات الفنية الحيوية المطلوبة لتحسين التخطيط والموثوقية، مثل: ساعات العمل الفعلية، نوع وحالة القطع القديمة المستبدلة، والسبب الظاهري للعطل، وهل تطلب العمل وقتاً أطول من المخطط ولماذا.',
        textEn: 'Because it lacks the vital technical data required to improve planning and reliability, such as: the actual labor hours, the type and condition of the old replaced parts, the apparent cause of the failure, and whether the job took longer than planned and why.',
        isCorrect: true,
        explanation: 'تغذية الفني (Craft Feedback) هي الكنز الحقيقي لإغلاق دائرة التحسين المستمر. بدون تسجيل الساعات الفعلية والقطع التي استخدمت وأسباب التأخير، لن يستطيع المخطط تحسين دقة خططه القادمة، ولن يستطيع مهندس الموثوقية معرفة لماذا تآكل مانع التسرب.',
        explanationEn: 'Craft feedback is the real treasure for closing the continuous-improvement loop. Without recording the actual hours, the parts used, and the reasons for delay, the planner cannot improve the accuracy of his future plans, and the reliability engineer cannot know why the seal wore out.',
      },
      {
        text: 'لأن الفني كتب باللغة العربية وكان يجب أن يكتب باللغة الصينية.',
        textEn: 'Because the technician wrote in Arabic and should have written in Chinese.',
        isCorrect: false,
        explanation: 'اللغة ليست هي المعيار، بل اكتمال البيانات الفنية المسجلة.',
        explanationEn: 'Language is not the criterion; the completeness of the recorded technical data is.',
      },
      {
        text: 'مقبولة جداً ولا داعي لإضاعة وقت الفني في كتابة أي تفاصيل إضافية.',
        textEn: 'It is perfectly acceptable, and there is no need to waste the technician\'s time writing any additional details.',
        isCorrect: false,
        explanation: 'إهمال التغذية الراجعة يجعل التخطيط المستقبلي أعمى ومبنياً على التخمين.',
        explanationEn: 'Neglecting feedback makes future planning blind and based on guesswork.',
      },
      {
        text: 'لأنه كان يجب أن يرفق صورة شخصية له بجوار المضخة.',
        textEn: 'Because he should have attached a personal photo of himself next to the pump.',
        isCorrect: false,
        explanation: 'المطلوب بيانات هندسية تشغيلية تخص الأصل والعمل المنفذ.',
        explanationEn: 'What is required is operational engineering data about the asset and the work performed.',
      }
    ]
  },
  {
    scenario: 'ما هو الفارق الجوهري بين وظيفة "مخطط الصيانة (Maintenance Planner)" ووظيفة "منسق الجدولة (Scheduler)" في دورة حياة أمر الشغل؟',
    scenarioEn: 'What is the essential difference between the maintenance planner role and the scheduler role in the work order lifecycle?',
    question: 'كيف تقسم الأدوار بوضوح وفقاً لدليل SMRP Body of Knowledge؟',
    questionEn: 'How are the roles clearly divided per the SMRP Body of Knowledge?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'المخطط يجيب عن سؤالي (ماذا وكيف؟ - What & How) بتحديد المهارات وقطع الغيار والتصاريح، بينما المجدول يجيب عن سؤالي (متى ومن؟ - When & Who) بالتنسيق مع الإنتاج لحجز المعدة وتخصيص الفنيين بالاسم في الجدول الأسبوعي.',
        textEn: 'The planner answers "what and how" by defining the skills, spare parts, and permits, while the scheduler answers "when and who" by coordinating with production to reserve the asset and assigning the technicians by name on the weekly schedule.',
        isCorrect: true,
        explanation: 'هذا السؤال كلاسيكي جداً في امتحان CMRP. المخطط (Planner) يركز على المحتوى الفني المستقبلي (الخطوات، القطع، الأدوات، الوقت المقدر)، بينما المجدول (Scheduler) يركز على التوقيت والتنسيق (حجز نافذة التوقف مع الإنتاج وتخصيص أسماء الفنيين وفق الجدول الأسبوعي القادم).',
        explanationEn: 'This is a very classic CMRP exam question. The planner focuses on the future technical content (steps, parts, tools, estimated time), while the scheduler focuses on timing and coordination (reserving the downtime window with production and assigning the technician names on the upcoming weekly schedule).',
      },
      {
        text: 'المخطط مسؤول عن صيانة المعدات الكهربائية والمجدول مسؤول عن الميكانيكية.',
        textEn: 'The planner is responsible for electrical equipment maintenance and the scheduler for mechanical.',
        isCorrect: false,
        explanation: 'التقسيم وظيفي مرحلي (تخطيط ثم جدولة) وليس حسب التخصص الهندسي.',
        explanationEn: 'The division is functional and sequential (planning then scheduling), not by engineering discipline.',
      },
      {
        text: 'المخطط يشتري قطع الغيار والمجدول يقوم بتركيبها بيده في الورشة.',
        textEn: 'The planner buys the spare parts and the scheduler installs them by hand in the workshop.',
        isCorrect: false,
        explanation: 'المخطط والمجدول وظائف مكتبية تخطيطية لا تنفذ الأعمال اليدوية في الميدان.',
        explanationEn: 'The planner and the scheduler are office planning roles that do not perform manual field work.',
      },
      {
        text: 'لا يوجد أي فرق بينهما وهي مجرد مسميات وظيفية مترادفة لشخص واحد دائماً.',
        textEn: 'There is no difference between them; they are just synonymous job titles for one person always.',
        isCorrect: false,
        explanation: 'في المصانع الاحترافية، يُفضل فصل التخطيط عن الجدولة لضمان عدم إغراق المخطط في تفاصيل التنسيق اليومي.',
        explanationEn: 'In professional plants, separating planning from scheduling is preferred to ensure the planner is not overwhelmed by daily coordination details.',
      }
    ]
  },
  {
    scenario: 'بعد الانتهاء من تنفيذ أمر شغل لعمرة ضاغط هواء، تركت إدارة الصيانة أمر العمل في حالة "مفتوح (Open)" في نظام الـ CMMS لمدة 6 أشهر دون عمل إغلاق نهائي (Closure).',
    scenarioEn: 'After completing a work order for an air compressor overhaul, the maintenance department left the work order in "open" status in the CMMS for 6 months without performing a final closure.',
    question: 'ما هو الأثر المالي والإداري السلبي المترتب على تأخير إغلاق أوامر الشغل؟',
    questionEn: 'What is the negative financial and administrative impact resulting from delaying work order closure?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'عدم ترحيل التكاليف الفعلية لمركز تكلفة الأصل، تشويه مؤشرات الأعمال المتراكمة (Backlog)، وإمكانية صرف قطع غيار إضافية أو تسجيل ساعات عمل غير صحيحة على أمر الشغل المفتوح دون وجه حق.',
        textEn: 'Failure to post the actual costs to the asset cost center, distortion of the backlog indicators, and the possibility of issuing additional spare parts or recording incorrect labor hours on the open work order without justification.',
        isCorrect: true,
        explanation: 'أمر الشغل المفتوح يظل وعاءً مالياً مفتوحاً يمكن أن يسجل عليه أي شخص قطع غيار أو ساعات عمل بالخطأ. تأخير الإغلاق يمنع المحاسبين من إقفال ميزانية الصيانة الشهرية، ويجعل مؤشر الأعمال المتراكمة (Backlog) مشوهاً بأعمال انتهت فعلياً لكنها لا تزال تظهر كأعمال قيد الانتظار.',
        explanationEn: 'An open work order remains an open financial vessel on which anyone can erroneously record spare parts or labor hours. Delayed closure prevents the accountants from closing the monthly maintenance budget and distorts the backlog indicator with work that actually finished yet still appears as pending work.',
      },
      {
        text: 'توقف الضاغط عن العمل تلقائياً من خلال نظام التحكم الإلكتروني.',
        textEn: 'The compressor automatically stops through the electronic control system.',
        isCorrect: false,
        explanation: 'الضاغط سيعمل ميكانيكياً، لكن الخلل يكمن في الإدارة والمحاسبة والبيانات.',
        explanationEn: 'The compressor will keep working mechanically, but the defect lies in management, accounting, and data.',
      },
      {
        text: 'احتراق لوحة التحكم الكهربائية للضاغط.',
        textEn: 'Burning out the compressor\'s electrical control panel.',
        isCorrect: false,
        explanation: 'الأمر إداري محاسبي بحت ولا علاقة له باحتراق اللوحات الكهربائية.',
        explanationEn: 'The matter is purely administrative and accounting-related, unrelated to burning electrical panels.',
      },
      {
        text: 'انخفاض راتب مدير المشتريات بالشركة.',
        textEn: 'A decrease in the salary of the company\'s purchasing manager.',
        isCorrect: false,
        explanation: 'لا يؤثر تأخير الإغلاق على رواتب الموظفين بل على دقة التقارير المالية للأصول.',
        explanationEn: 'Delayed closure does not affect employee salaries but the accuracy of the asset financial reports.',
      }
    ]
  }

  ],
};