import type { QuizBank } from '../types';

export const quizCmrp42: QuizBank = {
  id: 'quiz-cmrp-4-2',
  questions: [
  {
    scenario: 'تعطلت ماكينة تعبئة لصيدلية أدوية فجأة أثناء وردية الإنتاج الثانية، بينما يقوم أعلى المخططات بإنتاج دفعة تسليمية حرجة للغاية مطلوب تسليمها خلال 24 ساعة.',
    scenarioEn: 'A pharmaceutical packaging machine suddenly broke down during the second production shift, while the top of the schedule produces an extremely critical delivery batch required within 24 hours.',
    question: 'كيف يقوم نظام تصنيف الأعمال (Classification System) في الـ CMMS بمعالجة هذا الطلب بشكل صحيح وفقاً لمعايير إدارة الأعمال في SMRP؟',
    questionEn: 'How does the work classification system in the CMMS correctly handle this request per SMRP work management standards?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الطوارئ الفعلية الحقيقية (Emergency) في نظام الـ CMMS لأن خط الإنتاج متوقف عن الإنتاج الفعلي، وتصدر مباشرة خارج الجدولة العادية مع التزام الفني فوراً من أي موقع.',
        textEn: 'A real emergency in the CMMS because the production line is actually stopped, and it is issued immediately outside the normal schedule, with the technician committing immediately from any location.',
        isCorrect: true,
        explanation: 'الإغلاق الفعلي لخط الإنتاج عن المنتجات الحرجة يُصنف كحالة طوارئ حقيقية (Emergency) تُعالج فوراً: الفني يتحرك لحظياً بغض النظر عن موقعه، وتُفتح صلاحيات الصرف الطارئ للقطع، ويُعلم الإنتاج ويُعد مسار بديل للتشغيل.',
        explanationEn: 'The actual stoppage of a critical production line is classified as a real emergency handled immediately: the technician moves instantly regardless of his location, emergency parts-draw authorities are opened, production is notified, and an alternative operating route is prepared.',
      },
      {
        text: 'يصنف كأعمال روتينية متوقعة يتم إنجازها في الأسبوع القادم بكل راحة.',
        textEn: 'It is classified as routine expected work to be completed next week at ease.',
        isCorrect: false,
        explanation: 'التعطل الفعلي للإنتاج يعني وقتاً فعلياً للانتظار (Downtime)، فلا يجوز تجديده لأيام.',
        explanationEn: 'An actual production stoppage means real downtime that must not be postponed for days.',
      },
      {
        text: 'تُعاد الصياغة كمشروع داخلي مبرمج على مدى 6 سنوات قادمة.',
        textEn: 'It is reformulated as an internal project programmed over the next 6 years.',
        isCorrect: false,
        explanation: 'مشروع التحسين طويل المدى لا يعالج توقفاً إنتاجياً يحصد خسائر مالية ملايينية كل ساعة.',
        explanationEn: 'A long-term improvement project does not address a production stoppage incurring millions in financial losses every hour.',
      },
      {
        text: 'يصنف كطلب إنهاء خدمة ويتم نقل الماكينة لمزاد علني فوراً.',
        textEn: 'It is classified as a retirement request, and the machine is auctioned immediately.',
        isCorrect: false,
        explanation: 'العطل المفاجئ ليس قراراً لتقاعد الأصل بل حالة طوارئ تشغيلية.',
        explanationEn: 'A sudden failure is not a decision to retire the asset but an operational emergency.',
      }
    ]
  },
  {
    scenario: 'أثناء تطبيق إصلاح حالة طوارئ على مضخة رئيسية، بدأ مدير الإنتاج بمناقشة الفني حول تعديل بعض المتطلبات (إضافة ساعة إنتاجية إضافية لواجب آخر) بينما الفني غارق في إصلاح المضخة لضمان الالتزام بأوقات الطوارئ المتفق عليها.',
    scenarioEn: 'While executing an emergency repair on a main pump, the production manager started discussing with the technician some modifications to the requirements (adding an extra production hour to another duty) while the technician is submerged in repairing the pump to meet the agreed emergency response times.',
    question: 'وفقاً لمعايير تبني الطوارئ في أنظمة CMMS، ما هو الخطر الناتج على مؤشرات الأداء الرئيسية (KPIs)؟',
    questionEn: 'Per emergency adoption standards in CMMS systems, what is the risk posed to the key performance indicators (KPIs)?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'توسيع تعريف "الطوارئ" ليشمل التعديلات والمشاريع غير الحرجة التي جرى إدخالها إلى النظام، مما يرفع نسبة أيام الطوارئ الممطورة في مقياس (Emergency % Classification) ويزيد تكلفة القطع والوقت المحسوب.',
        textEn: 'Expanding the definition of "emergency" to include non-critical modifications and projects entered into the system, inflating the emergency percentage (Emergency % Classification) measured and increasing the parts cost and calculated time.',
        isCorrect: true,
        explanation: 'الخطر المذكور شائع جداً: منعطف خطير عندما تُفرض مهام إضافية على أوامر طوارئ النظام الحالية؛ فتزول الفروقات بين الطوارئ المالية والتشغيلية. لهذا السبب يصر SMRP على منع أي تعديل للمتطلبات بعد إغلاق أمر الطوارئ، والحفاظ على تصنيف مستقل لكل نوع عمل.',
        explanationEn: 'The mentioned risk is very common: a dangerous turn when additional tasks are imposed on existing emergency system orders; thus the differences between financial and operational emergencies vanish. That is why SMRP insists on preventing any modification of requirements after the emergency order is locked and maintaining an independent classification for each work type.',
      },
      {
        text: 'لا توجد أية خطر على أي مؤشرات إطلاقاً.',
        textEn: 'There is no risk to any indicators at all.',
        isCorrect: false,
        explanation: 'إذا كانت هناك تعديلات تُضاف إلى أوامر الطوارئ فإن مؤشر التصنيف الحقيقي ينكسر.',
        explanationEn: 'If modifications are added to emergency orders, the real classification indicator breaks.',
      },
      {
        text: 'يصبح المؤشر أفضل من قبل، لأن الطوارئ الممتدة تعني صيانة زائدة.',
        textEn: 'The KPI becomes better than before because long emergencies mean more maintenance.',
        isCorrect: false,
        explanation: 'امتداد الطوارئ لا يعكس صيانة جيدة بل إدارة وميزانية فوضوية.',
        explanationEn: 'Long emergencies do not reflect good maintenance but chaotic management and budgeting.',
      },
      {
        text: 'تختفي المؤشرات من النظام نهائياً بعد عشرة أيام.',
        textEn: 'The indicators disappear from the system forever after ten days.',
        isCorrect: false,
        explanation: 'المؤشرات لا تختفي تلقائياً؛ إنها تتعرض للتحريف والتشويش إن لم تُحفظ المعايير.',
        explanationEn: 'Indicators do not disappear automatically; they become distorted and misleading if standards are not maintained.',
      }
    ]
  },
  {
    scenario: 'قام فريق الصيانة بتقليص نسبة الأعمال الطارئة بالفعل من 35% إلى 8%. لكن في بداية الشهر، صدرت مئات الطلبات الصغيرة للإدارات الأخرى (مثل إصلاح مكيف مكتبي، وتركيب رف جديد).',
    scenarioEn: 'The maintenance team actually reduced the emergency work ratio from 35% to 8%. But at the beginning of the month, hundreds of small requests for other departments came out (like repairing an office air-conditioner, and installing a new shelf).',
    question: 'كيف يتم دمج هذه الأعمال الصغيرة والحسابية في نظام العمل الرئيسي وفق SMRP؟',
    questionEn: 'How are these small, minor works integrated into the main work system per SMRP?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'اعتماداً على تصنيف الأعمال الثانوية (Minor / Small Work Types)، وتجميعها لأوامر شغل مختارة ضمن برنامج منفصل للمتابعة، لتجنب ازدحام الفنيين بالتخطيط الكامل التكلفة لكل مكيف صغير.',
        textEn: 'Adopting the minor/small work type classification, and grouping them into selective work orders within a separate tracking program, to avoid burdening technicians with a full cost-planning per small air-conditioner.',
        isCorrect: true,
        explanation: 'الأعمال الصغيرة (Minor Works) هي خبز الصيانة اليومية. معيار SMRP يوصي بتجميع 5 إلى 10 طلبات صغيرة من نفس المنطقة في أمر شغل واحد، حيث يتم صرف قطع غيار عامة سابقة الإعداد، ليتم التعامل معها بكفاءة دون الحاجة للمرور عبر التخطيط الهندسي الكامل لكل طلب.',
        explanationEn: 'Minor works are the daily bread of maintenance. The SMRP standard recommends grouping 5 to 10 small requests from the same area into one work order, where pre-prepared generic spare parts are issued, so they are handled efficiently without passing through a full engineering plan for each request.',
      },
      {
        text: 'فتح أمر شغل مستقل شامل لكل طلب إصلاح مكيف صغير بدقة هندسية كاملة.',
        textEn: 'Opening an independent, comprehensive work order for each small air-conditioner repair with complete engineering precision.',
        isCorrect: false,
        explanation: 'هذا عبء برواقعي هائل يجعل التخطيط أكثر تكلفة من العمل نفسه.',
        explanationEn: 'This is a huge bureaucratic burden making the planning more costly than the work itself.',
      },
      {
        text: 'إهمال هذه الطلبات تماماً وعدم الاستجابة لها لأنه يتعين الرد على الأعطال فقط.',
        textEn: 'Completely ignoring these requests and not responding to them because only failures must be addressed.',
        isCorrect: false,
        explanation: 'هذه الخدمات غير الإنتاجية قائمة بذاتها ويجب معاملة طلباتها باحترام وإدارة.',
        explanationEn: 'These non-production services stand on their own; their requests must be respected and managed.',
      },
      {
        text: 'أمر الطواريء على نفس المكيف وحده.',
        textEn: 'Treating the air-conditioner alone as an emergency.',
        isCorrect: false,
        explanation: 'المكيف المكتبي لا يسبب توقفاً مباشراً للإنتاج، وبالتالي لا يستحق تصنيف طوارئ.',
        explanationEn: 'An office air-conditioner does not cause a direct production stoppage, so it does not deserve an emergency classification.',
      }
    ]
  },
  {
    scenario: 'طلبت إدارة الموارد البشرية إضافة مشكلة تنظيف عادم مستخدم داخل غرفة الخادم الإلكتروني (Server Room) إلى نظام الصيانة تحت التصنيف الخاطئ "الأعمال الروتينية غير الحرجة".',
    scenarioEn: 'The HR department asked to add cleaning of an exhaust fan inside the electronic server room to the maintenance system under the wrong classification "non-critical routine work".',
    question: 'هل هذا الطلب يُصنف عادةً ضمن الأعمال غير الحرجة بالنسبة لمبنى شامل؟',
    questionEn: 'Is this request usually classified as non-critical work for an entire building?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'لا، العادم داخل غرفة الخادم يعتبر نظاماً حرجاً (Critical System) لأن رفع الحرارة الزائدة هناك حيوي لبيئة غرفة الخوادم، وأي توقف عن التبريد يمكن أن يحطم الأجهزة والمعدات الحيوية.',
        textEn: 'No, the exhaust fan inside the server room is a critical system because removing excess heat there is vital to the server room environment, and any cooling stoppage can be devastating to critical devices and equipment.',
        isCorrect: true,
        explanation: 'تصنيف الأهمية (Criticality) يعتمد على الأثر المحتمل وليس على النوع أو الحجم البدني. إن وجود نظام عادم حراري داخل غرفة الخادم يعني أنه نظام حرج A لأن أي فشل فيه يوقف خدمة الشبكة كلها ويضرب البيانات والخدمات الحيوية.',
        explanationEn: 'Criticality classification depends on the possible impact, not the type or physical size. The presence of a thermal exhaust system inside the server room means it is a critical A system because any failure will stop the entire network service and strike the vital data and services.',
      },
      {
        text: 'نعم، اتباع عدد من الممارسات البسيطة فهو بالضرورة غير حرج.',
        textEn: 'Yes, it follows a number of simple practices and is therefore necessarily non-critical.',
        isCorrect: false,
        explanation: 'حجم العمل الصغير لا يعني أبداً أنها أعمال غير الحرجة للغاية.',
        explanationEn: 'Small work size never means it is necessarily low criticality.',
      },
      {
        text: 'نعم، لأن التبريد مهم فقط لراحة العاملين وليس لسلامة الأجهزة.',
        textEn: 'Yes, because cooling matters only for worker comfort, not for equipment safety.',
        isCorrect: false,
        explanation: 'عمليات غرف الخوادم تحتاج تبريداً قسرياً دائماً لحماية أجهزة الخادم ذاتها.',
        explanationEn: 'Server room operations always require forced cooling to protect the server devices themselves.',
      },
      {
        text: 'نعم، لأنه عادم ولا يستحق أكثر من فرشاة وأعمدة (تنظيف) روتينية.',
        textEn: 'Yes, because it is just an exhaust fan and does not deserve more than a routine broom and pole cleaning.',
        isCorrect: false,
        explanation: 'التقليل من قيمة نظام حرج (غرفة الخادم) يؤدي إلى فقر تحليلي قد يتسبب بهبوط خدمة كاملة.',
        explanationEn: 'Underestimating a critical system (the server room) leads to analytic poverty that can cause a full service failure.',
      }
    ]
  },
  {
    scenario: 'منعطف مثالي: في منتصف ليلة، وقع عطل حقيقي على المسمار الرئيسي في مصنع كيميائي تسبب في توقف 500 مليون من خط الإنتاج المرتبط به.',
    scenarioEn: 'Perfect turn: in the middle of the night, a real failure occurred on the main screw in a chemical plant, causing a stop on the 500 million production line connected to it.',
    question: 'ما هي أفضل ممارسة وفقاً لمنهجية SMRP لإعداد الأيام المخططة وتقليص الطوارئ المستقبلية؟',
    questionEn: 'What is the best practice per SMRP methodology for preparing planned days and reducing future emergencies?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'بناء فريقين متخصصين: فريق استجابة الطوارئ الفورية، وفريق آخر لتحليل الأسباب الجذرية (RCA) والمشاريع التحسينية الموجهة (Proactive Improvement Projects).',
        textEn: 'Building two specialized teams: an immediate emergency-response team, and another team for root-cause analysis (RCA) and proactive improvement projects.',
        isCorrect: true,
        explanation: 'حين تُسيطر الطوارئ على بيئة الصيانة، لا يُعاد إنتاج الفوضى فحسب؛ بل يُستنزف الوقت والمال على نار كل ليلة. الحل الذي تشدد عليه معايير SMRP هو الفصل: فريق عمليات تكتيكي يطفئ الحرائق الطارئة بشكل منظم، وفريق موثوقية وسطي التخطيط (Reliability & Planning) يقوم بدراسات الأحداث الجذرية (FMEA / RCA) ويصمم اكتراثاً لمثل تلك الأحداث من مستقبل.',
        explanationEn: 'When emergencies dominate the maintenance environment, chaos is not just reproduced but time and money are drained on the nightly fire. The solution emphasized by SMRP standards is separation: a tactical operations team that extinguishes emergencies in an organized manner, and a reliability and mid-range planning team that conducts root-cause studies (FMEA / RCA) and designs care to prevent such events in the future.',
      },
      {
        text: 'إيقاف الإنتاج كل ليلة للتحضير لإصلاح نفس المسمار.',
        textEn: 'Stopping production every night to prepare for repairing the same screw.',
        isCorrect: false,
        explanation: 'التوقف الليلي نفسه يوقف أعمال الصيانة والعمليات ولا يقدم حلاً استباقياً.',
        explanationEn: 'The nightly stop itself idle the maintenance and operations work and does not provide a proactive solution.',
      },
      {
        text: 'تعيين المسمار نفسه في قسم إعادة التدوير غداً.',
        textEn: 'Assigning the screw itself to the recycling department tomorrow.',
        isCorrect: false,
        explanation: 'هذا حل مضلل لا علاقة له بإدارة الطوارئ وتحسين الموثوقية.',
        explanationEn: 'This is a misleading solution unrelated to emergency management and reliability improvement.',
      },
      {
        text: 'إلغاء جميع أوامر الطوارئ وعدم تسجيلها للتوفير المالي.',
        textEn: 'Canceling all emergency orders and not recording them for financial saving.',
        isCorrect: false,
        explanation: 'التفكير بهذه الطريقة يدفع المؤشرات الحقيقية للاختفاء ويتناقض مع الشفافية المطلوبة في CMMS.',
        explanationEn: 'Thinking this way makes the real indicators vanish and contradicts the transparency required in the CMMS.',
      }
    ]
  }

  ],
};