import type { QuizBank } from '../types';

export const quizCmrp23: QuizBank = {
  id: 'quiz-cmrp-2-3',
  questions: [
  {
    scenario: 'استعانت شركة تعدين بشركة استشارية لتطبيق صيانة الاعتمادية RCM، وقام الاستشاري بتقديم خطة صيانة بدون تحديد "الوظائف المعيارية للأصل (Asset Functions)" أو "الأعطال الوظيفية (Functional Failures)"، وبدأ مباشرة من تحديد مهام التزييت وتغيير القطع.',
    scenarioEn: 'A mining company hired a consulting firm to implement reliability-centered maintenance (RCM), and the consultant delivered a maintenance plan without defining the "asset standard functions" or "functional failures", starting directly with lubrication and part-replacement tasks.',
    question: 'وفقاً لمعيار SAE JA1011 المعتمد لـ SMRP، هل تُعد هذه العملية مؤهلة لتكون دراسة RCM حقيقية؟',
    questionEn: 'According to the SAE JA1011 standard adopted by SMRP, does this process qualify as a genuine RCM study?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'لا، إطلاقاً؛ لأن معيار SAE JA1011 يشترط الإجابة المتسلسلة عن الأسئلة السبعة بالكامل، والبدء حتماً بالسؤال الأول: ما هي وظائف الأصل ومعايير أدائه في سياق تشغيله الحالي؟',
        textEn: 'No, not at all; SAE JA1011 requires answering all seven questions sequentially, necessarily starting with the first question: what are the asset functions and its performance standards in its current operating context?',
        isCorrect: true,
        explanation: 'معيار SAE JA1011 هو المعيار المرجعي الصارم لـ SMRP. ينص صراحة على أنه لا يمكن تسمية أي دراسة بـ RCM إلا إذا بدأت بتعريف وظائف الأصل (Functions) ومعايير الأداء المقبولة. القفز مباشرة إلى المهام دون فهم الوظيفة والفشل الوظيفي يلغي صفة RCM تماماً.',
        explanationEn: 'SAE JA1011 is the strict reference standard for SMRP. It explicitly states that no study can be called RCM unless it starts by defining the asset functions and the accepted performance standards. Jumping directly to tasks without understanding the function and functional failure completely removes the RCM designation.',
      },
      {
        text: 'نعم، تعتبر RCM مختصرة ومعتمدة لأن المهم في النهاية هو قائمة مهام الصيانة.',
        textEn: 'Yes, it counts as a condensed, valid RCM because what matters in the end is the maintenance task list.',
        isCorrect: false,
        explanation: 'هذا يسمى صيانة وقائية تقليدية (PM) وليس صيانة اعتمادية RCM مبنية على الوظيفة.',
        explanationEn: 'This is called traditional preventive maintenance (PM), not function-based reliability-centered maintenance (RCM).',
      },
      {
        text: 'نعم، بشرط أن تكون الشركة الاستشارية حاصلة على شهادة ISO 9001.',
        textEn: 'Yes, provided the consulting company holds an ISO 9001 certificate.',
        isCorrect: false,
        explanation: 'شهادة الآيزو لا تلغي متطلبات المعيار الهندسي الصارم SAE JA1011.',
        explanationEn: 'The ISO certificate does not waive the requirements of the strict engineering standard SAE JA1011.',
      },
      {
        text: 'تعتبر RCM فقط إذا تم تطبيقها على المعدات الكهربائية دون الميكانيكية.',
        textEn: 'It counts as RCM only if applied to electrical rather than mechanical equipment.',
        isCorrect: false,
        explanation: 'RCM تطبق على كافة أنواع الأصول بغض النظر عن طبيعتها الهندسية.',
        explanationEn: 'RCM applies to all asset types regardless of their engineering nature.',
      }
    ]
  },
  {
    scenario: 'في محطة توليد طاقة، يوجد مولد ديزل احتياطي للطوارئ (Emergency Standby Generator) مخصص لتشغيل أجهزة التحكم في حال انقطاع الشبكة العمومية. المولد يقف ساكناً 99% من وقته.',
    scenarioEn: 'In a power generation station, there is an emergency standby diesel generator dedicated to powering control devices in case of a public grid outage. The generator sits idle 99% of its time.',
    question: 'استناداً لشجرة قرارات RCM، ما هو التوصيف الهندسي لعطل هذا المولد وما هي المهمة الوقائية المناسبة له؟',
    questionEn: 'Based on the RCM decision tree, what is the engineering characterization of this generator\u2019s failure and what is the appropriate preventive task for it?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'عطل المولد هو "وظيفة مخفية (Hidden Function)"؛ لأن تعطله أثناء وقوفه لن يشعر به المشغلون، والمهمة الإلزامية المناسبة له هي "مهمة اكتشاف العطل (Failure-Finding Task)" بتشغيله وتجربته دورياً.',
        textEn: 'The generator failure is a "hidden function" because its failure while idle will not be noticed by operators; the appropriate mandatory task for it is a "failure-finding task" by running and testing it periodically.',
        isCorrect: true,
        explanation: 'الأجهزة الاحتياطية وأنظمة السلامة (كصمامات الأمان، حساسات الحريق، ومولدات الطوارئ) ذات وظائف مخفية. لا يمكن معرفة أنها معطلة أثناء التشغيل الطبيعي إلا إذا قمت بعمل اختبار فحص متعمد (Failure-Finding Task) للتأكد من جاهزيتها قبل وقوع الكارثة.',
        explanationEn: 'Standby devices and safety systems (safety valves, fire sensors, and emergency generators) have hidden functions. You cannot know they are failed during normal operation unless you perform a deliberate inspection test (failure-finding task) to confirm their readiness before the catastrophe occurs.',
      },
      {
        text: 'وظيفة ظاهرة وواضحة (Evident Function)، وتكفي مراقبة حرارة المحرك أثناء وقوفه.',
        textEn: 'An evident, obvious function, and monitoring the engine temperature while idle is enough.',
        isCorrect: false,
        explanation: 'المولد متوقف في الأيام العادية وبالتالي لا تظهر حرارته للمشغلين.',
        explanationEn: 'The generator is stopped on normal days, so its temperature does not appear to operators.',
      },
      {
        text: 'مرشح لصيانة التشغيل حتى العطل (Run to Failure) لأنه لا يعمل إلا نادراً.',
        textEn: 'A candidate for run-to-failure maintenance because it rarely operates.',
        isCorrect: false,
        explanation: 'ترك مولد الطوارئ ليعمل حتى العطل هو جريمة سلامة مهنية تؤدي لكارثة عند انقطاع الكهرباء.',
        explanationEn: 'Leaving the emergency generator to run to failure is a professional safety crime leading to a catastrophe at a power outage.',
      },
      {
        text: 'يجب تفكيك وعمل عمرة شاملة للمولد كل 3 أشهر.',
        textEn: 'The generator must be disassembled for a comprehensive overhaul every 3 months.',
        isCorrect: false,
        explanation: 'العمرة المتكررة تسبب وفيات الرضع (Infant Mortality) وتكلفة هائلة دون مبرر.',
        explanationEn: 'Frequent overhauls cause infant mortality and enormous unjustified cost.',
      }
    ]
  },
  {
    scenario: 'سأل مدير مصنع: "لماذا تختلف خطة صيانة مضخة مياه في محطة تبريد نووية عن خطة صيانة نفس المضخة ونفس الموديل تماماً إذا رُكبت في حديقة المصنع لري الأشجار؟"',
    scenarioEn: 'A plant manager asks: "Why does the maintenance plan of a water pump in a nuclear cooling station differ from that of the exact same pump and model installed in the plant garden to water the trees?"',
    question: 'وفقاً لفلسفة جون موبراي ومعايير RCM، ما هو التفسير العلمي الصحيح لهذا الاختلاف؟',
    questionEn: 'According to John Moubray\u2019s philosophy and RCM standards, what is the correct scientific explanation of this difference?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'بسبب اختلاف "سياق التشغيل (Operating Context)" وعواقب الفشل (Consequences)؛ فالأولى عطلها يمس السلامة النووية وتكلفة توقفها بالملايين، بينما الثانية عطلها غير مؤثر (فئة C) وتسمح باستراتيجية تشغيل حتى العطل.',
        textEn: 'Due to the different operating context and failure consequences; the first pump\u2019s failure affects nuclear safety and costs millions in downtime, while the second\u2019s failure is non-critical (tier C) and allows a run-to-failure strategy.',
        isCorrect: true,
        explanation: 'سياق التشغيل (Operating Context) هو جوهر الـ RCM. الصيانة لا تحمي المعدة كقطعة حديد بل تحمي "الوظيفة المطلوبة منها في بيئتها". اختلاف البيئة وعواقب الفشل يغير خطة الصيانة 180 درجة لمعدتين متطابقتين ميكانيكياً.',
        explanationEn: 'Operating context is the essence of RCM. Maintenance does not protect the asset as a piece of iron but protects "the function required from it in its environment". The different environment and failure consequences flip the maintenance plan 180 degrees for two mechanically identical assets.',
      },
      {
        text: 'لأن الشركة المصنعة تطبع كتيبين مختلفين للمضخة بناءً على لون الطلاء.',
        textEn: 'Because the manufacturer prints two different pump manuals based on the paint color.',
        isCorrect: false,
        explanation: 'كتيب الصانع واحد، وسياق التشغيل الحقيقي هو الذي يحدد الخطة في المصنع.',
        explanationEn: 'The manufacturer manual is one; the real operating context is what determines the plan in the plant.',
      },
      {
        text: 'لأن مهندسي المحطة النووية يتقاضون رواتب أعلى من عمال الحديقة.',
        textEn: 'Because nuclear station engineers earn higher salaries than garden workers.',
        isCorrect: false,
        explanation: 'لا علاقة لرواتب الموظفين باختيار استراتيجية الاعتمادية الهندسية.',
        explanationEn: 'Employee salaries have no relation to choosing the engineering reliability strategy.',
      },
      {
        text: 'هذا خطأ هندسي، ويجب توحيد خطة الصيانة للمضختين بنفس التردد وقطع الغيار.',
        textEn: 'This is an engineering error; the maintenance plan for both pumps must be unified with the same frequency and spare parts.',
        isCorrect: false,
        explanation: 'توحيد الخطة يهدر المال على مضخة الحديقة أو يعرض المحطة النووية للخطر.',
        explanationEn: 'Unifying the plan wastes money on the garden pump or exposes the nuclear station to risk.',
      }
    ]
  },
  {
    scenario: 'في شجرة قرارات RCM، إذا وصل الفريق إلى نمط فشل يمس السلامة البشرية أو البيئة بشكل مباشر، ولم تكن هناك أي مهمة صيانة تنبؤية (CBM) أو وقائية مجدية تقنياً واقتصادياً لخفض هذا الخطر إلى مستوى مقبول.',
    scenarioEn: 'In the RCM decision tree, if the team reaches a failure pattern directly affecting human safety or the environment, and no predictive (CBM) or preventive maintenance task is technically and economically feasible to reduce this risk to an acceptable level.',
    question: 'ما هو الإجراء الإلزامي الحتمي الذي تفرضه شجرة قرارات RCM في هذه الحالة؟',
    questionEn: 'What is the mandatory, inevitable action that the RCM decision tree requires in this case?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'إعادة التصميم الهندسي الإلزامية (Mandatory Redesign) للمعدة أو المنظومة لإلغاء هذا الخطر نهائياً أو تركيب حواجز أمان ميكانيكية.',
        textEn: 'Mandatory redesign of the asset or system to eliminate this risk completely or install mechanical safety barriers.',
        isCorrect: true,
        explanation: 'في RCM، عندما يتعلق الأمر بالسلامة أو البيئة ولا توجد صيانة وقائية فعالة ومجدية، فإن "إعادة التصميم" تكون حتمية وإلزامية (Mandatory Redesign). لا يمكن قبول المخاطرة بأرواح البشر بحجة عدم وجود صيانة مناسبة.',
        explanationEn: 'In RCM, when it comes to safety or the environment and no effective, feasible preventive maintenance exists, "redesign" becomes mandatory. Risking human lives under the excuse of lacking suitable maintenance cannot be accepted.',
      },
      {
        text: 'قبول الخطر وتشغيل المعدة حتى العطل مع تحذير الفنيين شفهياً بالابتعاد عنها.',
        textEn: 'Accept the risk and run the equipment to failure while verbally warning technicians to stay away from it.',
        isCorrect: false,
        explanation: 'مخالفة جسيمة لمعايير السلامة المهنية لا تقبلها أي منظمة موثوقية.',
        explanationEn: 'A gross violation of occupational safety standards that no reliability organization accepts.',
      },
      {
        text: 'مضاعفة كمية الزيت في المعدة لتجنب حدوث الاحتكاك.',
        textEn: 'Double the oil quantity in the asset to avoid friction.',
        isCorrect: false,
        explanation: 'إجراء عشوائي يضر بالمعدة ولا يعالج الخطر التصميمي.',
        explanationEn: 'A random action that harms the asset and does not address the design risk.',
      },
      {
        text: 'تغيير جدول عمل الفنيين ليكون في الفترة المسائية فقط.',
        textEn: 'Change the technicians\u2019 work schedule to the evening shift only.',
        isCorrect: false,
        explanation: 'تغيير ورديات العمل لا يغير من الخطر الكارثي للسلامة.',
        explanationEn: 'Changing work shifts does not change the catastrophic safety risk.',
      }
    ]
  },
  {
    scenario: 'ما هو الهدف النهائي الأسمى لتطبيق صيانة الاعتمادية (RCM) على أصول المنشأة الصناعية؟',
    scenarioEn: 'What is the ultimate goal of applying reliability-centered maintenance (RCM) to the assets of an industrial facility?',
    question: 'كيف تصيغ الغاية الأساسية لـ RCM وفقاً لدليل SMRP Body of Knowledge؟',
    questionEn: 'How do you formulate the fundamental purpose of RCM according to the SMRP Body of Knowledge guide?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تحديد مهام الصيانة الفعالة والملائمة تقنياً لكل نمط عطل، وتحقيق التوازن الأمثل بين الموثوقية وتكلفة دورة الحياة دون المساس بالسلامة والبيئة.',
        textEn: 'Identify technically feasible and effective maintenance tasks for each failure pattern and achieve the optimal balance between reliability and lifecycle cost without compromising safety and the environment.',
        isCorrect: true,
        explanation: 'RCM ليست مصممة لزيادة الصيانة، بل لتطبيق "الصيانة الصحيحة فقط (Applicable & Effective)". الهدف هو حماية وظائف النظام وتحقيق أعلى اعتمادية بأقل تكلفة ممكنة مع الحفاظ التام على الأرواح والبيئة.',
        explanationEn: 'RCM is not designed to increase maintenance but to apply "only the right maintenance (applicable and effective)". The goal is protecting system functions and achieving the highest reliability at the lowest possible cost while fully preserving lives and the environment.',
      },
      {
        text: 'القضاء على 100% من جميع الأعطال الميكانيكية وجعل المصنع يعمل بلا أي توقف للأبد.',
        textEn: 'Eliminate 100% of all mechanical failures and make the plant run without any stoppage forever.',
        isCorrect: false,
        explanation: 'القضاء على كل الأعطال مستحيل فيزيائياً ومكلف بشكل لا نهائي وغير مجدٍ اقتصادياً.',
        explanationEn: 'Eliminating all failures is physically impossible, infinitely costly, and economically not worthwhile.',
      },
      {
        text: 'استبدال جميع الفنيين بنظام ذكاء اصطناعي آلي بالكامل.',
        textEn: 'Replace all technicians with a fully automated artificial intelligence system.',
        isCorrect: false,
        explanation: 'RCM تعتمد على كفاءة وخبرة الفنيين والمشغلين في فرق العمل المتعددة.',
        explanationEn: 'RCM relies on the competence and expertise of technicians and operators in multifunctional teams.',
      },
      {
        text: 'تقليل ميزانية الصيانة إلى الصفر وإلغاء عقود قطع الغيار.',
        textEn: 'Reduce the maintenance budget to zero and cancel spare part contracts.',
        isCorrect: false,
        explanation: 'تصفير ميزانية الصيانة يؤدي إلى انهيار الأصول وتدمير المنشأة.',
        explanationEn: 'Zeroing the maintenance budget leads to asset collapse and facility destruction.',
      }
    ]
  }

  ],
};