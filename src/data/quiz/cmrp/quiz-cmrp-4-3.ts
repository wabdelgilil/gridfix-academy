import type { QuizBank } from '../types';

export const quizCmrp43: QuizBank = {
  id: 'quiz-cmrp-4-3',
  questions: [
  {
    scenario: 'في نظام المعلومات، ظهرت مضخة معينة ضمن قائمة الخمسين معدة الأكثر تكراراً للفشل لمدة ربع سنة على التوالي رغم تنفيذ جميع الصيانة الوقائية المقررة.',
    scenarioEn: 'In the information system, a specific pump appeared among the top fifty most frequently failing assets for a consecutive quarter despite all scheduled preventive maintenance being executed.',
    question: 'ما هي الخطوة الأكثر مهنية لتحليل حالات الفشل المتكرر هذه وفق منهجية SMRP؟',
    questionEn: 'What is the most professional step to analyze these recurring failure cases per SMRP methodology?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تحليل تخصصي للأسباب الجذرية (RCA) لاستكشاف أنماط وخصائص الفشل وتحديد تحسينات التصميم أو تجهيزات المراقبة التي ستؤدي إلى واقع أفضل.',
        textEn: 'A specialized root-cause analysis (RCA) to explore the failure patterns and characteristics and identify the design improvements or monitoring provisions that will lead to a better reality.',
        isCorrect: true,
        explanation: 'الصيانة الوقائية تعالج الأعطال المدرجة، بينما الفشل المتكرر يعطي مؤشراً أن التفكير بالتحسين الاستباقي هو السبيل، عبر RCA ودراسة نمط العطل لاستبدال المكونات الأضعف أو تزويدها بأنظمة مراقبة حالة (Condition Monitoring).',
        explanationEn: 'Preventive maintenance addresses listed failures, while recurring failure signals that proactive improvement thinking is the way, through RCA and failure-pattern study to replace the weakest components or equip them with condition-monitoring systems.',
      },
      {
        text: 'تطويل المدة الزمنية للصيانة الوقائية إلى 20 ضعفاً على أمل من الدورة التالية أن المشكلة اختفت.',
        textEn: 'Lengthening the preventive maintenance frequency twenty times, hoping the problem disappears by the next cycle.',
        isCorrect: false,
        explanation: 'زيادة تكرار نفس المهمة دون تحليل حقيقي لن يزيل سبب الفشل الجذري أبداً.',
        explanationEn: 'Increasing the frequency of the same task without real analysis will never eliminate the root failure cause.',
      },
      {
        text: 'تغيير اسم المضخة في النظام واستبدالها بمضخة أخرى افتراضياً.',
        textEn: 'Changing the pump\'s name in the system and virtually replacing it with another pump.',
        isCorrect: false,
        explanation: 'التلاعب بالبيانات لا يزيل الفشل الجذري بل يلغي فقط شفافية الأثر المالي.',
        explanationEn: 'Manipulating data does not eliminate the root failure; it only removes the transparency of financial impact.',
      },
      {
        text: 'تجاهل الأمر لأنه وظيفة تشغيلية مؤجلة.',
        textEn: 'Ignoring the matter as a deferred operational function.',
        isCorrect: false,
        explanation: 'التجاهل سيضاعف الفشل والإخفاق في تركيب نظام مراقبة وتكاليف أعلى.',
        explanationEn: 'Ignoring it will double the failures and the failure to install a monitoring system, raising costs.',
      }
    ]
  },
  {
    scenario: 'أنت الآن تدرك من تحليل الأعطال أن سبب تعطل مضخة المياه الرئيسية هو الدخول المتكرر للشوائب من جهة السحب، مع وجود حماية مفرطة محتملة للمضخة من ارتفاع درجة الحرارة.',
    scenarioEn: 'You now realize from failure analysis that the cause of the main water pump failure is the repeated entry of debris from the suction side, with possible excessive protection of the pump from overheating.',
    question: 'ما الإجراءات الاستباقية للموثوقية التي يجب اعتمادها سوياً عند التخطيط للصيانة؟',
    questionEn: 'What proactive reliability actions must be adopted together when planning maintenance?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تثبيت شاشة فصل الشوائب على جهة السحب وتفعيل خطة تنظيف دورية لذلك الموضع، مع استبدال مستشعرات الحرارة بمواصفات مستقلة لضمان مراقبة دقيقة.',
        textEn: 'Installing a debris screen on the suction side with an active periodic cleaning plan for that location, and replacing the temperature sensors with independent specifications to ensure accurate monitoring.',
        isCorrect: true,
        explanation: 'الحماية المفرطة لا تقيس الحالة الحقيقية، وفلتر السحب يمنع السبب الجذري نفسه قبل دخوله المضخة. هذه حلول تصميمية استباقية معاً توفر تكاليف تشغيلية.',
        explanationEn: 'Excessive protection does not measure the real condition, and the suction filter prevents the root cause itself before entering the pump. These together are proactive design solutions that save operational costs.',
      },
      {
        text: 'إعادة طلاء المضخة بلون أزرق لتشجيع المشغلين.',
        textEn: 'Repainting the pump blue to encourage the operators.',
        isCorrect: false,
        explanation: 'طلاء اللون لا يمنع دخول الشوائب ولا يعالج أي جذر للفشل.',
        explanationEn: 'Painting the color does not prevent debris entry and treats no failure root.',
      },
      {
        text: 'إيقاف التشغيل الليلي وتشغيله نهاراً فقط.',
        textEn: 'Stopping the night operation and running it only during the day.',
        isCorrect: false,
        explanation: 'المواصفة التشغيلية لا علاقة لها بالشوائب المستمرة لنفس الجهاز.',
        explanationEn: 'The operating specification is unrelated to the continuous debris of the same asset.',
      },
      {
        text: 'تحميل مضخة أكبر حجماً وتركيبها بالأمس فقط.',
        textEn: 'Installing a larger pump and only mounting it yesterday.',
        isCorrect: false,
        explanation: 'حجم المضخة أكبر لا يمنع نفس المشكلة الجذرية للشوائب.',
        explanationEn: 'A larger pump size does not prevent the same debris root problem.',
      }
    ]
  },
  {
    scenario: 'كنت تصنف أهم 100 معدة في مصنع الأدوية من حيث الأهمية؛ بعض المعادن الخمسين الهامة لديها أوضاع فشل خطيرة على امتداد سنوات، وبعضها الآخر لا يعاني أي مخاطرة إطلاقاً.',
    scenarioEn: 'You were classifying the most important 100 assets in the pharmaceutical plant by criticality; some of the 50 important items have had serious failure modes over the years, while others face no risk at all.',
    question: 'كيف تحدد أولويات الموثوقية والاهتمام وفقاً لمعايير تقييم الأثر في SMRP؟',
    questionEn: 'How do you determine reliability and attention priorities per the impact-assessment criteria in SMRP?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'ترتيب الجهّة الحرجة وفق تأثيرها المحتمل (السلامة، البيئة، الإنتاج، جودة المنتج) وتوجيه كل الاهتمام الوثيق للأصول الأقصر مدة والأعلى أثراً، دون تكافؤ مع الأصول الأقل خطورة.',
        textEn: 'Ranking the critical side per its potential impact (safety, environment, production, product quality) and directing all close attention to the shortest-lived, highest-impact assets, without equalizing with less risky assets.',
        isCorrect: true,
        explanation: 'الأهمية (Criticality) ليست سؤالاً عن كمية السنوات، بل عن أثر الفشل المحتمل. المعدات قليلة المخاطر تتم إدارتها بجدول وقائي عادي، بينما تنفق العناية المكثفة على الأصول ذات الأثر المالي والسلامة المرتفعة.',
        explanationEn: 'Criticality is not a question of the number of years but of the potential failure impact. Low-risk equipment is managed on an ordinary preventive schedule, while intensive care is spent on assets with high financial and safety impact.',
      },
      {
        text: 'إهمال كل الأصول الأيول للخطر وعكس التركيز للمكاتب فقط.',
        textEn: 'Ignoring all at-risk assets and moving the focus to the offices only.',
        isCorrect: false,
        explanation: 'هذه ردة فعل عديمة القيمة تجرد الموثوقية من أصول خطرة حقيقية.',
        explanationEn: 'This is a useless reaction stripping reliability of real dangerous assets.',
      },
      {
        text: 'فرض نفس مستوى العناية بالتساوي على جميع الأصول 100 دون استثناء.',
        textEn: 'Imposing the same level of care equally on all 100 assets without exception.',
        isCorrect: false,
        explanation: 'الموارد محدودة؛ التساوي اللامتناهي لا يعالج الأهمية التفاضلية الاقتصادية.',
        explanationEn: 'Resources are limited; infinite equality does not address the differential economic criticality.',
      },
      {
        text: 'إلغاء المؤشرات وتحويل التبني الهادف إلى عشوائية.',
        textEn: 'Canceling the indicators and turning purposeful adoption into randomness.',
        isCorrect: false,
        explanation: 'العشوائية تناقض المحرك التحليلي لـ SMRP في تخصيص الاهتمام والموارد.',
        explanationEn: 'Randomness contradicts the SMRP analytical engine for allocating attention and resources.',
      }
    ]
  },
  {
    scenario: 'لاحظ رئيس مهندسي الصيانة أن مجموع تكاليف الصيانة والأعطال يتصدر بشكل منفرد إلى العميل الداخلي عن مضخات الفراغ، بينما باقي المعدات الغازية مكلفة أيضاً لكن عند تجميعها فقط.',
    scenarioEn: 'The chief maintenance engineer noticed that the total maintenance and failure costs are single-handedly topped for the internal customer by the vacuum pumps, while the rest of the gas equipment is also costly but only when bundled together.',
    question: 'ما الرسم البياني الأنسب لتحليل وتوجيه وتوزيع هذه التكاليف لاتخاذ قرارات التحسين الأكثر تأثيراً؟',
    questionEn: 'What is the most suitable chart for analyzing, guiding, and distributing these costs to make the most impactful improvement decisions?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'مخطط باريتو (Pareto Chart) لترتيب أصناف المعدات تنازلياً حسب التكلفة، وتحديد الفئة التي تلتهم النسبة الأكبر من الميزانية (قاعدة 80/20) لتوجيه تحليل RCA وفرق التحسين إليها.',
        textEn: 'A Pareto chart to rank the asset categories descending by cost and identify the class devouring the largest budget share (the 80/20 rule) to direct RCA and improvement teams to it.',
        isCorrect: true,
        explanation: 'باريتو يعرض الترتيب التراكمي للمخاطر والتكاليف ويبرز بوضوح أن 20% من الأصول تستهلك 80% من التكلفة، ليوجه مثيلات التحسين إلى مضخات الفراغ التي تتصدر وحدها.',
        explanationEn: 'Pareto displays the cumulative sorting of risks and costs, clearly showing that 20% of assets consume 80% of the cost, directing improvement efforts to the vacuum pumps that top the chart alone.',
      },
      {
        text: 'مخطط دائري مسطح لتبدو جميع النسب متساوية.',
        textEn: 'A flat pie chart to make all ratios look equal.',
        isCorrect: false,
        explanation: 'المخطط الدائري يخفي الترتيب ولا يكشف أولوية مضخات الفراغ المتركزة.',
        explanationEn: 'A pie chart hides the ranking and does not reveal the focused vacuum-pump priority.',
      },
      {
        text: 'مخطط خطي لإظهار الفرق بين أعوام زمنية فقط.',
        textEn: 'A line chart to show differences between time years only.',
        isCorrect: false,
        explanation: 'المخطط الخطي يصور التطور الزمني ولا يوزع التكلفة على أصناف المعدات.',
        explanationEn: 'A line chart depicts time evolution and does not distribute cost across asset categories.',
      },
      {
        text: 'إلغاء أي تحليل وإرسال كل شيء للمحاسبية.',
        textEn: 'Canceling any analysis and sending everything to the accountants.',
        isCorrect: false,
        explanation: 'المحاسبية تلتقط الفاتورة ويبقى التحليل الهندسي المصدر الفعلي لأثر التحسين.',
        explanationEn: 'Accounting captures the invoice, while the engineering analysis remains the real source of improvement impact.',
      }
    ]
  },
  {
    scenario: 'تنوي إدارة الصيانة استبدال نظام CMMS القديم بنظام جديد مكلف، مستشهدة بتكرار الشكاوى من المستخدمين حول بطء إدخال البيانات وقلة تقارير الأعطال.',
    scenarioEn: 'The maintenance department intends to replace the old CMMS with an expensive new system, citing repeated user complaints about slow data entry and few failure reports.',
    question: 'أي من هذه هي الخطوة التدقيقية الأساسية قبل استبدال النظام البرمجي المعلوماتي؟',
    questionEn: 'Which of these is the fundamental diligence step before replacing the information software system?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'التحقق من جودة البيانات نفسها: سلامة تسمية الأصول، دقة الأسباب والفشل، ومدى اكتمال تسجيل الأعطال؛ فأنظمة المعلومات لا تعالج مشاكل المدخلات الفاسدة ببساطة.',
        textEn: 'Verifying the quality of the data itself: the integrity of asset naming, the accuracy of causes and failures, and how complete the failure recording is; information systems do not simply fix dirty-input problems.',
        isCorrect: true,
        explanation: 'المنهجية الصحيحة: جودة البيانات أولاً ثم النظام. إذا كانت الأسماء والأسباب مدخلة بشكل فاسد في النظام القديم، فسيولد النظام الجديد المكلف نفس البيانات الملوثة. لذا يعالج مصدر البيانات النوعية (Data Governance) قبل تحويل الاستثمار البرمجي.',
        explanationEn: 'The right methodology: data quality first, then the system. If the names and causes were entered dirtily into the old system, the expensive new system will regenerate the same polluted data. Thus the qualitative data source (data governance) is treated before converting the software investment.',
      },
      {
        text: 'استبدال النظام فوراً لأنه برمي أول مشكلة صغيرة في الواجهات.',
        textEn: 'Replacing the system immediately at the first minor interface issue.',
        isCorrect: false,
        explanation: 'التنقل المبني على شائعات سريرية لا يعالج جذر بيانات الطرف الآخر.',
        explanationEn: 'A migration based on shallow complaints does not treat the data root on the other side.',
      },
      {
        text: 'تدريب المستخدمين على النظام القديم فقط دون لمس البيانات.',
        textEn: 'Training users on the old system only without touching the data.',
        isCorrect: false,
        explanation: 'التدريب الجيد لا يصلح البيانات المدخلة خطأ مع الأسماء المكررة.',
        explanationEn: 'Good training does not fix wrongly entered data with duplicate names.',
      },
      {
        text: 'حذف التقارير القديمة من النظام نهائياً لاستلام نظام نظيف.',
        textEn: 'Deleting the old reports from the system entirely to receive a clean system.',
        isCorrect: false,
        explanation: 'حذف السجل التاريخي كاملاً يفقد الذاكرة الفنية المرتكزة على التحليل المستقبلي.',
        explanationEn: 'Deleting the entire historical record loses the technical memory on which future analysis is based.',
      }
    ]
  }

  ],
};