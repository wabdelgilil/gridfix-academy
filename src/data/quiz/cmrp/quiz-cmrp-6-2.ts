import type { QuizBank } from '../types';

export const quizCmrp62: QuizBank = {
  id: 'quiz-cmrp-6-2',
  questions: [
  {
    scenario: 'في الاجتماع الشهري لإدارة العمليات، اشتكى مدير الإنتاج من زيادة معدل التوقفات غير المخططة في خط التعبئة للشهر الثالث على التوالي، واقترح مجلس الإدارة اعتماد مؤشر "ساعات التوقف غير المخططة (Unplanned Downtime)" كمؤشر الأداء الوحيد لتقييم مدير الصيانة ومكافآته.',
    scenarioEn: 'In the monthly operations management meeting, the production manager complained about rising unplanned downtime on the packaging line for the third consecutive month, and the board proposed adopting "Unplanned Downtime Hours" as the sole performance indicator to evaluate the maintenance manager and his bonuses.',
    question: 'بصفتك مهندس موثوقية معتمد (CMRP)، ما هو النقد العلمي السليم لهذا القرار وفقاً لمبادئ بطاقة الأداء المتوازن (BSC) ومنهجية SMRP؟',
    questionEn: 'As a certified reliability engineer (CMRP), what is the sound scientific criticism of this decision per Balanced Scorecard (BSC) principles and SMRP methodology?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'القرار صائب تماماً لأن ساعات التوقف هي النتيجة التي تهم الإنتاج فقط ويجب أن يتحمل مسؤوليتها فريق الصيانة وحده.',
        textEn: 'The decision is perfectly correct because downtime hours are the only result that matters to production, and the maintenance team alone must bear responsibility for them.',
        isCorrect: false,
        explanation: 'الاعتماد على مؤشر واحد تأخيري يتجاهل العوامل المشتركة كأخطاء التشغيل وجودة المواد الخام.',
        explanationEn: 'Relying on a single lagging indicator ignores shared factors such as operating errors and raw material quality.',
      },
      {
        text: 'ساعات التوقف هي مؤشر تأخيري (Lagging Indicator) يعكس نتيجة ما حدث في الماضي ولا يقدم أي توجيه استباقي لمنع التوقفات؛ والاعتماد عليه بمفرده يدفع الفريق لإخفاء التوقفات أو تأجيل الصيانات الضرورية. يجب موازنة المؤشر بمؤشرات قيادية (Leading Indicators) مثل نسبة إنجاز التفتيش المبكر وجودة التخطيط.',
        textEn: 'Downtime hours are a lagging indicator reflecting a past outcome and offering no proactive direction to prevent stoppages; relying on it alone pushes the team to hide downtime or postpone necessary maintenance. The indicator must be balanced with leading indicators such as early inspection completion rate and planning quality.',
        isCorrect: true,
        explanation: 'الركيزة الأولى لـ SMRP تؤكد أن المؤشرات التأخيرية (Lagging) تقيس ما حدث ولا يمكن إدارتها مباشرة. لإدارة المستقبل يجب تتبع المؤشرات القيادية (Leading) كالتزام الـ PM والتفتيش بالموجات فوق الصوتية وتحليل الاهتزازات، لأن تحسين المؤشر القيادي هو ما يحسن المؤشر التأخيري حتمياً.',
        explanationEn: 'The first SMRP pillar confirms that lagging indicators measure what happened and cannot be managed directly. To manage the future, leading indicators such as PM compliance, ultrasonic inspection, and vibration analysis must be tracked, because improving the leading indicator is what inevitably improves the lagging one.',
      },
      {
        text: 'يجب استبدال ساعات التوقف بمؤشر تكلفة قطع الغيار فقط لتسهيل الحسابات المحاسبية.',
        textEn: 'Downtime hours should be replaced by a spare parts cost indicator alone to simplify accounting calculations.',
        isCorrect: false,
        explanation: 'تكلفة قطع الغيار بمفردها أيضاً مؤشر تأخيري لا يحل مشكلة توقف الخطوط.',
        explanationEn: 'Spare parts cost alone is also a lagging indicator and does not solve the line stoppage problem.',
      },
      {
        text: 'الرفض لأن مدير الصيانة لا يجب أن يحاسب على أي مؤشرات أداء مرتبطة بالإنتاج.',
        textEn: 'Reject it because the maintenance manager should not be held accountable for any production-related performance indicators.',
        isCorrect: false,
        explanation: 'الصيانة والإنتاج شركاء في تحقيق إتاحة الخط ورعاية الأصول.',
        explanationEn: 'Maintenance and production are partners in achieving line availability and asset care.',
      }
    ]
  },
  {
    scenario: 'محرك ضاغط رئيسي في محطة بتروكيماويات يعمل على مدار الساعة. خلال فترة تشغيلية مدتها 1000 ساعة عمل، تعرض الضاغط لـ 4 أعطال طارئة، واستغرقت عمليات الإصلاح وإعادة التشغيل أزمنة: 5 ساعات، 3 ساعات، 8 ساعات، و 4 ساعات على التوالي.',
    scenarioEn: 'A main compressor motor in a petrochemical station runs around the clock. Over an operating period of 1000 working hours, the compressor suffered 4 emergency failures, and the repair and restart operations took: 5 hours, 3 hours, 8 hours, and 4 hours respectively.',
    question: 'ما هي قيم (MTBF) و (MTTR) والإتاحة التشغيلية التقريبية لهذا الضاغط؟',
    questionEn: 'What are the (MTBF), (MTTR), and approximate operational availability values for this compressor?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'MTBF = 245 ساعة | MTTR = 5 ساعات | الإتاحة = 98.0%',
        textEn: 'MTBF = 245 hours | MTTR = 5 hours | Availability = 98.0%',
        isCorrect: true,
        explanation: 'الحساب الهندسي الدقيق:\n1. إجمالي زمن التوقف = 5 + 3 + 8 + 4 = 20 ساعة.\n2. ساعات التشغيل الفعلية = 1000 - 20 = 980 ساعة (طبقاً لمعادلة SMRP: Operating Hours / Failures = 980 / 4 = 245 ساعة).\n3. متوسط وقت الإصلاح MTTR = 20 / 4 = 5 ساعات.\n4. الإتاحة = MTBF / (MTBF + MTTR) = 245 / (245 + 5) = 98.0%.',
        explanationEn: 'The precise engineering calculation:\n1. Total downtime = 5 + 3 + 8 + 4 = 20 hours.\n2. Actual operating hours = 1000 - 20 = 980 hours (per the SMRP formula: Operating Hours / Failures = 980 / 4 = 245 hours).\n3. MTTR = 20 / 4 = 5 hours.\n4. Availability = MTBF / (MTBF + MTTR) = 245 / (245 + 5) = 98.0%.',
      },
      {
        text: 'MTBF = 500 ساعة | MTTR = 20 ساعة | الإتاحة = 96.1%',
        textEn: 'MTBF = 500 hours | MTTR = 20 hours | Availability = 96.1%',
        isCorrect: false,
        explanation: 'قسمة غير صحيحة لساعات العمل أو عدد الأعطال.',
        explanationEn: 'Incorrect division of operating hours or failure count.',
      },
      {
        text: 'MTBF = 1000 ساعة | MTTR = 4 ساعات | الإتاحة = 99.6%',
        textEn: 'MTBF = 1000 hours | MTTR = 4 hours | Availability = 99.6%',
        isCorrect: false,
        explanation: 'إهمال عدد التوقفات وتوزيع ساعات الإصلاح.',
        explanationEn: 'Ignoring the number of stoppages and the distribution of repair hours.',
      },
      {
        text: 'MTBF = 40 ساعة | MTTR = 10 ساعات | الإتاحة = 80.0%',
        textEn: 'MTBF = 40 hours | MTTR = 10 hours | Availability = 80.0%',
        isCorrect: false,
        explanation: 'أرقام بعيدة تماماً عن بيانات التشغيل المعطاة.',
        explanationEn: 'Figures completely far from the given operating data.',
      }
    ]
  },
  {
    scenario: 'ترغب شركة تعدين في تصميم "بطاقة أداء متوازن (BSC)" لإدارة الصيانة والموثوقية لتتوافق مع استراتيجية الشركة العامة، وتطلب تصنيف الأهداف والمؤشرات في أبعادها الأربعة الصحيحة.',
    scenarioEn: 'A mining company wants to design a "Balanced Scorecard (BSC)" for its maintenance and reliability management aligned with the overall company strategy, and asks to classify goals and indicators into their correct four perspectives.',
    question: 'أي من التوزيعات التالية يمثل التطبيق المتوازن والمطابق لمعايير كابلان ونورتون و SMRP؟',
    questionEn: 'Which of the following allocations represents the balanced application matching Kaplan and Norton and SMRP standards?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'المالي: تكلفة الصيانة كنسبة من ERV | العمليات الداخلية: نسبة الالتزام بالجدول الأسبوعي ونسبة العمل الاستباقي | العملاء: معدل تلبية طلبيات الإنتاج والإتاحة | التعلم والنمو: ساعات تدريب الفنيين ونسبة تغطية مصفوفة الجدارات.',
        textEn: 'Financial: maintenance cost as a % of ERV | Internal processes: weekly schedule compliance rate and proactive work ratio | Customer: production order fulfillment rate and availability | Learning and growth: technician training hours and competency matrix coverage rate.',
        isCorrect: true,
        explanation: 'هذا هو التوزيع القياسي المتكامل لـ BSC:\n1. المالي (Financial): ضبط النفقات كنسبة من ERV وعائد الأصول.\n2. العمليات الداخلية (Internal): جودة التخطيط وجدولة 100% ورعاية الأصول.\n3. العملاء (Customer): الإنتاج هو عميل الصيانة، والإتاحة والجودة تعكس رضاهم.\n4. التعلم والنمو (Learning & Growth): الاستثمار في كفاءة وتدريب الكوادر البشرية.',
        explanationEn: 'This is the standard integrated BSC allocation:\n1. Financial: controlling expenses as a % of ERV and asset return.\n2. Internal processes: planning quality, 100% scheduling, and asset care.\n3. Customer: production is maintenance\'s customer, and availability and quality reflect their satisfaction.\n4. Learning & Growth: investing in the competence and training of the workforce.',
      },
      {
        text: 'وضع جميع المؤشرات المالية في بعد العمليات الداخلية وترك البعد المالي فارغاً للتبسيط.',
        textEn: 'Place all financial indicators in the internal processes perspective and leave the financial perspective empty for simplicity.',
        isCorrect: false,
        explanation: 'يخل بمبدأ التوازن بين أبعاد المؤسسة الأربعة.',
        explanationEn: 'This violates the balance principle among the four organizational perspectives.',
      },
      {
        text: 'اعتبار بعد العملاء يخص فقط زبائن السوبرماركت ولا علاقة للصيانة به.',
        textEn: 'Considering the customer perspective concerns only supermarket shoppers and has no relation to maintenance.',
        isCorrect: false,
        explanation: 'في بيئة الصيانة، قسم العمليات/الإنتاج والمبيعات هم العملاء الداخليون المستفيدون من إتاحة الأصول.',
        explanationEn: 'In the maintenance context, the operations/production and sales departments are the internal customers who benefit from asset availability.',
      },
      {
        text: 'إلغاء بعد التعلم والنمو لعدم وجود عائد مالي مباشر للتدريب في المدى القصير.',
        textEn: 'Cancel the learning and growth perspective because training has no direct financial return in the short term.',
        isCorrect: false,
        explanation: 'إلغاء التعلم والنمو يؤدي إلى تقادم المهارات وتكرار الأخطاء وانهيار المنظومة مستقبلاً.',
        explanationEn: 'Cancelling learning and growth leads to skills obsolescence, repeated errors, and the future collapse of the system.',
      }
    ]
  },
  {
    scenario: 'سجلت إحدى الشركات مؤشر التزام بجدول الصيانة الوقائية (PM Schedule Compliance) بنسبة 98% (مؤشر قيادي ممتاز)، ولكن في المقابل ارتفع معدل التوقفات الطارئة للماكينات بشكل غير مسبوق في نفس الشهر (مؤشر تأخيري سيئ).',
    scenarioEn: 'A company recorded a PM Schedule Compliance of 98% (an excellent leading indicator), but conversely the machine emergency stoppage rate rose unprecedentedly in the same month (a bad lagging indicator).',
    question: 'بصفتك مستشار CMRP، ما هو التشخيص الهندسي الأكثر احتمالاً لهذا التناقض الصارخ؟',
    questionEn: 'As a CMRP consultant, what is the most probable engineering diagnosis of this striking contradiction?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'المؤشر التأخيري خاطئ ولا ينبغي النظر إليه طالما أن الفريق ملتزم بنسبة 98%.',
        textEn: 'The lagging indicator is wrong and should not be looked at as long as the team is 98% compliant.',
        isCorrect: false,
        explanation: 'المؤشر التأخيري هو الواقع الملموس على أرض المصنع ولا يمكن تكذيبه.',
        explanationEn: 'The lagging indicator is the tangible reality on the plant floor and cannot be disproven.',
      },
      {
        text: 'الفنيون يمارسون ظاهرة "التأشير السريع الشكلي (Pencil Whipping)" أو أن مهام الصيانة الوقائية الحالية غير ملائمة لأنماط الفشل الفعلية (Non-value added PMs)؛ حيث يتم إغلاق أوامر الشغل ورقياً دون فحص فني دقيق أو استبدال قطع لا علاقة لها بأسباب الانهيار.',
        textEn: 'Technicians practice "Pencil Whipping" or the current PM tasks are not suited to the actual failure modes (Non-value added PMs); work orders are closed on paper without precise technical inspection or replace parts unrelated to the breakdown causes.',
        isCorrect: true,
        explanation: 'هذا سيناريو كلاسيكي شهير في امتحان CMRP. عندما يكون المؤشر القيادي (Leading) ممتازاً والمؤشر التأخيري (Lagging) سيئاً، فهذا يدل على: 1. غياب جودة التنفيذ (Pencil Whipping)، أو 2. أن خطة الـ PM تفتقد لتحليل RCM/FMEA وبالتالي تنفذ مهام وقائية لا تمنع أسباب الفشل الحقيقية وتسبب أعطال الرضع المبكرة.',
        explanationEn: 'This is a famous classic scenario in the CMRP exam. When the leading indicator is excellent and the lagging one is bad, it indicates: 1. a lack of execution quality (Pencil Whipping), or 2. the PM plan lacks RCM/FMEA analysis and therefore performs preventive tasks that do not prevent the real failure causes and cause early infant failures.',
      },
      {
        text: 'السبب هو استخدام زيوت تشحيم أصلية ومطابقة للمواصفات.',
        textEn: 'The cause is using genuine lubricants matching the specifications.',
        isCorrect: false,
        explanation: 'الزيوت المطابقة تحمي الأصول ولا تسبب أعطالاً مفاجئة.',
        explanationEn: 'Matching lubricants protect assets and do not cause sudden failures.',
      },
      {
        text: 'الحل الفوري هو مضاعفة تكرار الصيانة الوقائية إلى مرتين أسبوعياً لزيادة الالتزام.',
        textEn: 'The immediate solution is doubling preventive maintenance frequency to twice a week to raise compliance.',
        isCorrect: false,
        explanation: 'مضاعفة مهام خاطئة تزيد التدخل البشري وتضاعف الأعطال (Infant Mortality).',
        explanationEn: 'Multiplying wrong tasks increases human intervention and doubles failures (Infant Mortality).',
      }
    ]
  },
  {
    scenario: 'في مراجعة سنوية لمصنع أسمنت، تبيّن أن متوسط وقت الإصلاح (MTTR) للكسارة الرئيسية ارتفع من ساعتين إلى 8.5 ساعات، بينما ظل معدل تكرار الأعطال (MTBF) ثابتاً.',
    scenarioEn: 'In an annual review of a cement plant, it was found that the Mean Time to Repair (MTTR) of the main crusher rose from 2 hours to 8.5 hours, while the failure frequency rate (MTBF) remained constant.',
    question: 'ما هي مجالات التحسين ذات الأولوية القصوى لمعالجة هذا الارتفاع الحاد في MTTR؟',
    questionEn: 'What are the highest-priority improvement areas to address this sharp MTTR rise?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تغيير تصميم الكسارة وشراء ماكينة جديدة كلياً بالمليارات.',
        textEn: 'Change the crusher design and buy a completely new machine for billions.',
        isCorrect: false,
        explanation: 'حل مفرط وغير مبرر طالما أن المشكلة تكمن في زمن الإصلاح وليس في متانة الأصل.',
        explanationEn: 'An excessive and unjustified solution as long as the problem lies in repair time, not asset robustness.',
      },
      {
        text: 'تحسين حزم العمل المخططة (Job Packages)، وتوفير وتجهيز قطع الغيار في المستودع (Kitting)، ومراجعة سهولة الوصول للمعدة (Maintainability)، وتدريب الفنيين على أدوات الفك والتركيب السريع لتسريع عملية الإصلاح.',
        textEn: 'Improve planned job packages, provide and pre-stage spare parts in the warehouse (Kitting), review equipment accessibility (Maintainability), and train technicians on quick disassembly and assembly tools to speed up the repair process.',
        isCorrect: true,
        explanation: 'مؤشر MTTR يقيس "قابلية الصيانة وسرعة الاستجابة". أسباب ارتفاع MTTR دائماً ترجع إلى: 1. انتظار قطع الغيار غير المتوفرة، 2. غياب إجراءات العمل القياسية (SOPs) وحزم العمل المجهزة، 3. نقص أدوات الرفع والتفكيك، 4. نقص تدريب الكادر الفني. معالجة هذه العناصر تضغط زمن الإصلاح إلى الحد الأدنى.',
        explanationEn: 'MTTR measures "maintainability and response speed". The causes of a rising MTTR always trace back to: 1. waiting for unavailable spare parts, 2. the absence of Standard Operating Procedures (SOPs) and prepared job packages, 3. a lack of lifting and disassembly tools, 4. a lack of technical staff training. Addressing these elements compresses repair time to a minimum.',
      },
      {
        text: 'إلغاء إجراءات السلامة وعزل الطاقة (LOTO) لتقليل زمن الإصلاح بمقدار ساعة.',
        textEn: 'Cancel safety procedures and energy isolation (LOTO) to reduce repair time by one hour.',
        isCorrect: false,
        explanation: 'مخالفة قاتلة ومحظورة تعرض حياة الفنيين للخطر وتدمر بيئة العمل.',
        explanationEn: 'A fatal prohibited violation that endangers technicians\' lives and destroys the work environment.',
      },
      {
        text: 'معاقبة طاقم الوردية الليلية وخصم رواتبهم لإجبارهم على الإسراع.',
        textEn: 'Punish the night shift crew and deduct their salaries to force them to hurry.',
        isCorrect: false,
        explanation: 'العقاب لا يحل المشكلات الهيكلية في توفر القطع والتخطيط السليم.',
        explanationEn: 'Punishment does not solve the structural problems of parts availability and proper planning.',
      }
    ]
  }

  ],
};