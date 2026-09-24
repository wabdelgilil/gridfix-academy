import type { QuizBank } from '../types';

export const quizCmrp22: QuizBank = {
  id: 'quiz-cmrp-2-2',
  questions: [
  {
    scenario: 'خلال تحليل FMEA لمضخة ضغط عالي في مصنع أسمدة، ظهر نمطان للفشل: النمط (1) حصل على RPN = 160 ناتج عن (الشدة S=4، الحدوث O=8، الكشف D=5)، بينما النمط (2) حصل على RPN = 90 ناتج عن (الشدة S=10، الحدوث O=1، الكشف D=9) وله أثر انفجار كيميائي يهدد الأرواح.',
    scenarioEn: 'During an FMEA of a high-pressure pump in a fertilizer plant, two failure modes appeared: mode (1) scored RPN = 160 from (severity S=4, occurrence O=8, detection D=5), while mode (2) scored RPN = 90 from (severity S=10, occurrence O=1, detection D=9) with a chemical explosion effect threatening lives.',
    question: 'وفقاً لمعايير SMRP والاعتمادية المهنية، ما هو القرار الهندسي الصحيح لتحديد أولوية المعالجة بين النمطين؟',
    questionEn: 'According to SMRP and professional reliability standards, what is the correct engineering decision for prioritizing treatment between the two modes?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'إعطاء الأولوية المطلقة للنمط (2) رغم انخفاض قيمة RPN الإجمالية، لأن درجة الشدة فيه (S=10) تمثل خطراً كارثياً على الأرواح والسلامة لا يمكن التهاون معه.',
        textEn: 'Give absolute priority to mode (2) despite its lower total RPN, because its severity score (S=10) represents a catastrophic life and safety risk that cannot be tolerated.',
        isCorrect: true,
        explanation: 'هذا هو أحد أشهر الأسئلة في امتحان CMRP حول "فخ الـ RPN". معايير SMRP تنص بوضوح على أن أي نمط عطل يحصل على درجة شدة قصوى (Severity = 9 أو 10) يجب معالجته ووضع خطة وقاية فورية له أولاً، بغض النظر عن حاصل ضرب RPN الإجمالي.',
        explanationEn: 'This is one of the most famous CMRP exam questions about the "RPN trap". SMRP standards clearly state that any failure mode with a maximum severity score (Severity = 9 or 10) must be treated, with an immediate prevention plan first, regardless of the total RPN product.',
      },
      {
        text: 'معالجة النمط (1) أولاً لأن رقم 160 أكبر رياضياً من 90، ويجب اتباع الترتيب الرقمي للـ RPN بصرامة.',
        textEn: 'Treat mode (1) first because 160 is mathematically larger than 90, and the numerical RPN order must be followed strictly.',
        isCorrect: false,
        explanation: 'الاتباع الأعمى للرقم الإجمالي للـ RPN هو خطأ فادح يتجاهل معايير السلامة المهنية وقد يؤدي لكوارث بشرية.',
        explanationEn: 'Blindly following the total RPN number is a fatal error that ignores occupational safety standards and may lead to human catastrophes.',
      },
      {
        text: 'تجاهل كلا النمطين والتركيز فقط على الأنماط التي يتجاوز فيها الـ RPN حاجز 200.',
        textEn: 'Ignore both modes and focus only on modes whose RPN exceeds a threshold of 200.',
        isCorrect: false,
        explanation: 'تحديد حدود اعتباطية (Cut-off thresholds) للـ RPN دون مراجعة الشدة هو ممارسة محرمة في معايير SMRP و AIAG.',
        explanationEn: 'Setting arbitrary cut-off thresholds for RPN without reviewing severity is a practice forbidden in SMRP and AIAG standards.',
      },
      {
        text: 'إلغاء تحليل FMEA واستبداله بفحص بصري عشوائي للمضخة.',
        textEn: 'Cancel the FMEA and replace it with a random visual inspection of the pump.',
        isCorrect: false,
        explanation: 'FMEA أداة هندسية محورية ويجب استخدامها بشكل واعي وليس إلغاؤها.',
        explanationEn: 'FMEA is a pivotal engineering tool that must be used consciously, not cancelled.',
      }
    ]
  },
  {
    scenario: 'فريق صيانة يجتمع لإجراء FMEA لضاغط غاز هيدروجين، وكتب أحد الفنيين في خانة نمط الفشل (Failure Mode): "المحرك لا يعمل بسبب إهمال المشغل".',
    scenarioEn: 'A maintenance team meets to conduct an FMEA on a hydrogen gas compressor, and one technician writes in the failure mode column: "The motor does not work because of operator negligence".',
    question: 'بصفتك مهندس الموثوقية المعتمد، كيف تصحح صياغة هذا البند ليتوافق مع أصول منهجية FMEA القياسية؟',
    questionEn: 'As the certified reliability engineer, how do you correct the wording of this item to comply with the principles of the standard FMEA methodology?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'توضيح أن نمط الفشل (Failure Mode) يجب أن يصف الكيفية الفيزيائية للعطل (مثل: احتراق ملفات العضو الثابت)، بينما "إهمال المشغل" هو سبب الفشل المحتمل (Failure Cause)، و"المحرك لا يعمل" هو أثر الفشل (Failure Effect).',
        textEn: 'Clarify that the failure mode must describe the physical manner of the failure (e.g., stator winding burnout), while "operator negligence" is the possible failure cause, and "the motor does not work" is the failure effect.',
        isCorrect: true,
        explanation: 'الخلط بين نمط الفشل (كيف يظهر العطل فيزيائياً) وسبب الفشل (لماذا حدث) وأثر الفشل (ماذا ترتب عليه) من أكثر أخطاء تطبيق FMEA شيوعاً. الدقة في تفكيك هذه العناصر هي أساس نجاح التحليل.',
        explanationEn: 'Confusing the failure mode (how the failure appears physically), the failure cause (why it happened), and the failure effect (what resulted) is one of the most common FMEA application errors. Precision in separating these elements is the foundation of a successful analysis.',
      },
      {
        text: 'الموافقة على الصياغة لأنها تلخص المشكلة في عبارة واحدة قصيرة.',
        textEn: 'Approve the wording because it summarizes the problem in one short phrase.',
        isCorrect: false,
        explanation: 'هذا الدمج العشوائي يمنع الفريق من تحديد الإجراءات التصحيحية الموجهة للسبب الجذري.',
        explanationEn: 'This random merging prevents the team from identifying corrective actions aimed at the root cause.',
      },
      {
        text: 'حذف البند بالكامل لأن المحركات الكهربائية لا تدخل في تحليل FMEA.',
        textEn: 'Delete the item entirely because electric motors are not included in FMEA.',
        isCorrect: false,
        explanation: 'المحركات جزء أساسي من منظومة الضاغط وتخضع للتحليل بالكامل.',
        explanationEn: 'Electric motors are an essential part of the compressor system and are fully subject to the analysis.',
      },
      {
        text: 'تغيير نمط الفشل إلى "استبدال المحرك" فوراً.',
        textEn: 'Change the failure mode to "replace the motor" immediately.',
        isCorrect: false,
        explanation: 'الاستبدال هو إجراء وقائي وليس نمط فشل فيزيائي.',
        explanationEn: 'Replacement is a preventive action, not a physical failure mode.',
      }
    ]
  },
  {
    scenario: 'يرغب مصنع أسمنت في تقليل رقم RPN لأحد أنماط الفشل الخطيرة في فرن الكلنكر، حيث بلغت الشدة (S=8) ومعدل الحدوث (O=7) وصعوبة الكشف (D=8).',
    scenarioEn: 'A cement plant wants to reduce the RPN of a critical failure mode in the clinker kiln, where severity reached (S=8), occurrence (O=7), and detection difficulty (D=8).',
    question: 'وفقاً للتسلسل الهرمي الهندسي للتحكم في المخاطر (Hierarchy of Controls)، ما هو الترتيب الأفضل والأنسب للإجراءات لخفض RPN؟',
    questionEn: 'According to the engineering hierarchy of risk controls, what is the best and most suitable order of actions to lower the RPN?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الأولوية الأولى هي محاولة خفض الشدة عبر إعادة التصميم الهندسي (Redesign)، ثم خفض الحدوث (O) عبر تحسين التزييت والمواد، وأخيراً خفض درجة الكشف (D) بتركيب مجسات تنبؤية CBM.',
        textEn: 'The first priority is to reduce severity through engineering redesign, then reduce occurrence (O) by improving lubrication and materials, and finally reduce detection (D) by installing predictive CBM sensors.',
        isCorrect: true,
        explanation: 'خفض الشدة (Severity) يغير طبيعة العطل ولا يمكن تحقيقه إلا بتعديل التصميم أو إضافة وسائل حماية. خفض الحدوث (Occurrence) يتحقق بالصيانة الوقائية والدقة الميكانيكية. بينما تحسين الكشف (Detection) بالمجسات لا يمنع العطل بل ينذر به مبكراً.',
        explanationEn: 'Reducing severity changes the nature of the failure and can only be achieved by design modification or adding protective means. Reducing occurrence is achieved through preventive maintenance and mechanical precision. Improving detection with sensors does not prevent the failure but warns of it early.',
      },
      {
        text: 'التركيز فقط على شراء أجهزة كشف اهتزاز غالية لخفض معامل الكشف D إلى 1 دون تعديل أي شيء في المعدة.',
        textEn: 'Focus only on buying expensive vibration detection instruments to lower detection D to 1 without modifying anything in the asset.',
        isCorrect: false,
        explanation: 'تحسين الكشف وحده يبقي المعدة معرضة لنفس معدل الفشل ونفس الشدة الخطيرة.',
        explanationEn: 'Improving detection alone leaves the asset exposed to the same failure rate and the same dangerous severity.',
      },
      {
        text: 'خفض أرقام التقييم يدوياً على الورق لخفض الـ RPN شكلياً لإرضاء الإدارة.',
        textEn: 'Manually lower the assessment scores on paper to reduce the RPN formally to please management.',
        isCorrect: false,
        explanation: 'ممارسة غير مهنية ومضللة تعرض المنشأة لكوارث حقيقية.',
        explanationEn: 'An unprofessional, misleading practice that exposes the facility to real catastrophes.',
      },
      {
        text: 'زيادة سرعة دوران الفرن لتقليل زمن التعرض للعطل.',
        textEn: 'Increase the kiln rotation speed to reduce the exposure time to the failure.',
        isCorrect: false,
        explanation: 'زيادة السرعة تضاعف من معدل التآكل وتفاقم خطر الانهيار.',
        explanationEn: 'Increasing speed multiplies the wear rate and worsens the collapse risk.',
      }
    ]
  },
  {
    scenario: 'ما هو الفارق الجوهري الرئيسي بين تحليل FMEA التقليدي وتحليل FMECA المتقدم في معايير إدارة الأصول العسكرية والصناعية؟',
    scenarioEn: 'What is the main essential difference between traditional FMEA and advanced FMECA in military and industrial asset management standards?',
    question: 'كيف تتميز دراسة FMECA عن دراسة FMEA القياسية؟',
    questionEn: 'How is an FMECA study distinguished from a standard FMEA study?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تحليل FMECA يضيف عنصراً كمياً دقيقاً هو تحليل الحرجية (Criticality Analysis - حرف C)، والذي يربط احتمالية الفشل الفعلية بالخسائر المالية ومعدلات التوقف الإحصائية، بينما FMEA يعتمد أكثر على التقييم النوعي التقديري (Qualitative).',
        textEn: 'FMECA adds a precise quantitative element: criticality analysis (the letter C), which links the actual failure probability to financial losses and statistical downtime rates, while FMEA relies more on qualitative estimating assessment.',
        isCorrect: true,
        explanation: 'حرف C في FMECA يرمز لـ Criticality Analysis. يتميز برسم مصفوفات حرجية كمية تعتمد على بيانات معدل الأعطال الفعلي (Failure Rate Lambda) ونسبة مساهمة كل نمط فشل في توقف النظام بالكامل.',
        explanationEn: 'The letter C in FMECA stands for criticality analysis. It is distinguished by drawing quantitative criticality matrices based on actual failure rate data (failure rate lambda) and each failure mode\u2019s contribution share to the total system downtime.',
      },
      {
        text: 'FMECA تطبق فقط على البرمجيات بينما FMEA تطبق على الآلات الميكانيكية.',
        textEn: 'FMECA only applies to software while FMEA applies to mechanical machines.',
        isCorrect: false,
        explanation: 'كلا المنهجين يطبقان على الأنظمة الميكانيكية والكهربائية والبرمجية.',
        explanationEn: 'Both methodologies apply to mechanical, electrical, and software systems.',
      },
      {
        text: 'FMEA تتطلب مشاركة فريق عمل متعدد التخصصات بينما FMECA يقوم بها شخص واحد.',
        textEn: 'FMEA requires a cross-functional team while FMECA is done by one person.',
        isCorrect: false,
        explanation: 'كلا المنهجين يتطلبان فريقاً متعدد التخصصات (Cross-Functional Team).',
        explanationEn: 'Both methodologies require a cross-functional team.',
      },
      {
        text: 'لا يوجد أي فرق على الإطلاق والاسمان مترادفان تماماً.',
        textEn: 'There is no difference at all and the two names are completely synonymous.',
        isCorrect: false,
        explanation: 'FMECA هي امتداد كمي لحساب الحرجية الإحصائية لأجزاء النظام.',
        explanationEn: 'FMECA is a quantitative extension for calculating the statistical criticality of system components.',
      }
    ]
  },
  {
    scenario: 'عند تكوين فريق عمل لتنفيذ تحليل FMEA لخط إنتاج جديد، اقترح مدير الصيانة أن يقوم مهندس الموثوقية بكتابة جدول FMEA بمفرده في مكتبه لتوفير وقت المهندسين الآخرين.',
    scenarioEn: 'When forming a team to perform an FMEA on a new production line, the maintenance manager proposed that the reliability engineer write the FMEA table alone in his office to save the other engineers\u2019 time.',
    question: 'وفقاً لمبادئ SMRP لإدارة وتطوير المنظومات، ما هو تقييمك الهندسي لهذا المقترح؟',
    questionEn: 'According to SMRP principles for systems management and development, what is your engineering assessment of this proposal?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'اقتراح خاطئ ومرفوض تماماً؛ لأن نجاح FMEA يشترط تشكيل فريق متعدد التخصصات (Cross-Functional Team) يضم المشغلين وفنيي الصيانة ومهندسي السلامة والجودة والعمليات لضمان حصر كل زوايا الأعطال الواقعية.',
        textEn: 'A wrong and completely rejected proposal; a successful FMEA requires forming a cross-functional team including operators, maintenance technicians, and safety, quality, and operations engineers to ensure all real failure angles are covered.',
        isCorrect: true,
        explanation: 'لا يمكن لشخص واحد - مهما بلغت خبرته - معرفة جميع أنماط الفشل وأسبابها وظروف تشغيلها الميدانية. المشغلون يعرفون الأعراض اللحظية، وفنيو الصيانة يعرفون أسباب التآكل، ومهندسو العمليات يعرفون أثر التوقف. هذا التنوع هو روح الـ FMEA.',
        explanationEn: 'No single person — no matter how experienced — can know all failure modes, their causes, and their field operating conditions. Operators know the momentary symptoms, maintenance technicians know the wear causes, and operations engineers know the downtime impact. This diversity is the spirit of FMEA.',
      },
      {
        text: 'اقتراح ممتاز ومثالي لتسريع إنجاز العمل وتجنب الاجتماعات المطولة.',
        textEn: 'An excellent, ideal proposal to speed up completion and avoid long meetings.',
        isCorrect: false,
        explanation: 'كتابة FMEA بشكل فردي ينتج تحليلاً نظرياً ناقصاً وغير واقعي يفتقر للمصداقية الميدانية.',
        explanationEn: 'Writing FMEA individually produces an incomplete, unrealistic theoretical analysis lacking field credibility.',
      },
      {
        text: 'يجب أن يقوم مدير المشتريات بكتابة FMEA بمفرده لمعرفته بأسعار قطع الغيار.',
        textEn: 'The purchasing manager should write the FMEA alone because of his knowledge of spare part prices.',
        isCorrect: false,
        explanation: 'المشتريات لا تملك الخبرة التشغيلية أو الفنية لتحديد أنماط الفشل الميكانيكية.',
        explanationEn: 'Purchasing does not have the operational or technical expertise to identify mechanical failure modes.',
      },
      {
        text: 'FMEA لا تتطلب أي اجتماعات بل يتم توليدها تلقائياً بالكامل بواسطة نظام الـ CMMS.',
        textEn: 'FMEA requires no meetings at all; it is fully generated automatically by the CMMS.',
        isCorrect: false,
        explanation: 'أنظمة الـ CMMS تسجل البيانات التاريخية لكنها لا تفكر ولا تحلل الأنماط الاستباقية كفريق العمل.',
        explanationEn: 'CMMS systems record historical data but do not think or analyze proactive patterns the way a work team does.',
      }
    ]
  }

  ],
};