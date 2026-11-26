import { writeFileSync } from 'node:fs';

const q = (
  scenario,
  scenarioEn,
  question,
  questionEn,
  difficulty,
  options
) => ({
  scenario,
  scenarioEn,
  question,
  questionEn,
  difficulty,
  options: options.map(
    ([text, textEn, isCorrect, explanation, explanationEn]) => ({
      text,
      textEn,
      isCorrect,
      explanation,
      explanationEn,
    })
  ),
});

const banks = {
  '7-3': {
    name: 'quizPmp73',
    questions: [
      q(
        'خلال التنفيذ طلب أحد أصحاب المصلحة إضافة تقرير جديد لم يكن في بيان النطاق المعتمد، وأصرّ على تنفيذه فوراً لأنه يخدم جهة عليا.',
        'During execution a stakeholder requested a new report that was not in the approved scope statement and insisted on immediate delivery because it serves senior management.',
        'ما أول إجراء يجب أن يتخذه مدير المشروع؟',
        'What should the project manager do first?',
        'متوسط',
        [
          [
            'ينفّذ الطلب فوراً لتجنب إزعاج الجهة العليا.',
            'Implement it immediately to avoid upsetting senior management.',
            false,
            'التنفيذ المباشر يغير الخط الأساسي دون اعتماد ويُعد زحفاً في النطاق (Scope creep).',
            'Direct implementation changes the baseline without approval and is scope creep.',
          ],
          [
            'يسجّل الطلب في سجل التغييرات ويحلّل أثره على النطاق والجدول والتكلفة قبل عرضه على هيئة التحكم بالتغيير.',
            'Log the request in the change log and analyze its impact on scope, schedule, and cost before taking it to the change control board.',
            true,
            'التحكم بالتغيير يفرض توثيق الطلب وتحليل الأثر ثم القرار المعتمد قبل تعديل أي خط أساس.',
            'Change control requires logging the request, analyzing impact, and obtaining an approved decision before any baseline changes.',
          ],
          [
            'يرفض الطلب نهائياً دون نقاش.',
            'Reject the request outright without discussion.',
            false,
            'الرفض دون تحليل يتجاهل قيمة محتملة ويضر بالعلاقة مع صاحب المصلحة.',
            'Blanket rejection ignores potential value and harms the stakeholder relationship.',
          ],
          [
            'يؤجل الطلب إلى مرحلة الإغلاق دون تسجيل.',
            'Defer the request to closing without recording it.',
            false,
            'التأجيل غير الموثق يفقد الطلب ويفتح باب زحف النطاق لاحقاً.',
            'Unrecorded deferral loses the request and leaves the door open for later scope creep.',
          ],
        ]
      ),
      q(
        'اعتمدت لجنة التحكم بالتغيير إضافة ميزة تزيد التكلفة 20 ألف دولار وتبعد التسليم أسبوعاً.',
        'The change control board approved a feature that adds $20,000 and delays delivery by one week.',
        'ما التحديث المطلوب بعد القرار؟',
        'What must be updated after the decision?',
        'سهل',
        [
          [
            'خط الأساس للتكلفة والجدول فقط.',
            'Cost and schedule baselines only.',
            false,
            'حفظ السجلات يشمل أيضاً سجل التغييرات وخطة النطاق والوثائق المرتبطة.',
            'Records include the change log, scope plan, and related documents as well.',
          ],
          [
            'خط الأساس وخطة النطاق وسجل التغييرات والوثائق ذات الصلة.',
            'The baselines, scope plan, change log, and related documents.',
            true,
            'القرار المعتمد يُحدَّث في كل الأ artifacts المتأثرة لضمان الاتساق.',
            'An approved decision must be reflected in every affected artifact to keep consistency.',
          ],
          [
            'لا شيء؛ القرار كافٍ بحد ذاته.',
            'Nothing; the decision is enough by itself.',
            false,
            'بدون تحديث الوثائق يصبح التتبع والمحاسبة مستحيلين.',
            'Without documentation updates, traceability and accountability are lost.',
          ],
          [
            'فقط جدول المشروع في أداة التخطيط.',
            'Only the project schedule in the planning tool.',
            false,
            'التحديث الجزئي يخلق تعارضاً بين السجلات الرسمية والواقع.',
            'Partial updating creates conflict between official records and reality.',
          ],
        ]
      ),
      q(
        'طلب تغيير طارئ يوقف خسارة يومية كبيرة، لكن تحليل الأثر الكامل يحتاج ثلاثة أيام.',
        'An urgent change would stop a large daily loss, but full impact analysis needs three days.',
        'كيف يتعامل مدير المشروع مع هذا الموقف؟',
        'How should the project manager handle this situation?',
        'صعب',
        [
          [
            'ينفّذ التغيير فوراً ويوثّق لاحقاً دون قيود.',
            'Implement immediately and document later without constraints.',
            false,
            'حتى الطلب الطارئ يحتاج مساراً محدداً وسلطة تقرير وتوثيقاً لاحقاً ملزماً.',
            'Even an emergency change needs a defined path, authority, and mandatory retrospective documentation.',
          ],
          [
            'يتبع إجراء التغيير الطارئ المعتمد في خطة التحكم بالتغيير، ثم يكمل التحليل والتوثيق في الإطار الزمني المحدد.',
            'Follow the approved emergency change procedure in the change control plan, then complete analysis and documentation within the defined window.',
            true,
            'الاستثناء الطارئ يجب أن يكون مُعرَّفاً مسبقاً حتى لا يتحول إلى فوضى.',
            'An emergency exception must be predefined so it does not become chaos.',
          ],
          [
            'يرفض التغيير لأن التحليل غير مكتمل.',
            'Reject the change because analysis is incomplete.',
            false,
            'الرفض الآلي يتجاهل الأثر التجاري الواضح ويمكن أن يضر بالمشروع.',
            'Automatic rejection ignores a clear business impact and can harm the project.',
          ],
          [
            'يحيل الطلب إلى الفريق ليقرر في اجتماع غير رسمي.',
            'Refer the request to the team for an informal meeting decision.',
            false,
            'القرار غير الرسمي لا يحمي الخط الأساسي ولا يوفر سجلاً للتدقيق.',
            'An informal decision does not protect the baseline or provide an audit trail.',
          ],
        ]
      ),
      q(
        'بعد ستة أسابيع تبيّن أن طلباً صغيراً رُفض سابقاً أصبحضرورياً لنجاح التسليم.',
        'After six weeks, a small request that was previously rejected became essential for delivery success.',
        'ما الإجراء الصحيح؟',
        'What is the correct action?',
        'متوسط',
        [
          [
            'إعادة تقديم طلب تغيير جديد مع مبرر محدث وتحليل أثر.',
            'Submit a new change request with an updated rationale and impact analysis.',
            true,
            'القرار السابق كان مبنياً على سياق مختلف؛ السياق الجديد يستحق طلباً جديداً.',
            'The earlier decision was based on a different context; the new context justifies a fresh request.',
          ],
          [
            'تنفيذ الطلب دون طلب جديد لأنه كان معروفاً سابقاً.',
            'Implement it without a new request because it was known before.',
            false,
            'المعرفة السابقة لا تُغني عن اعتماد جديد عند تغير الظروف.',
            'Prior knowledge does not replace new approval when circumstances change.',
          ],
          [
            'اعتباره خطأً في التقدير وعدم تحمل المسؤولية.',
            'Treat it as an estimation error and avoid accountability.',
            false,
            'تجنب المسؤولية لا يحل مشكلة النطاق ويضر بالثقة.',
            'Avoiding accountability does not solve the scope problem and damages trust.',
          ],
          [
            'تعديل معايير القبول سراً.',
            'Silently change the acceptance criteria.',
            false,
            'التعديل السري يتجاوز الحوكمة ويفقد أصحاب المصلحة حق الاعتماد.',
            'A silent change bypasses governance and deprives stakeholders of approval rights.',
          ],
        ]
      ),
    ],
  },
  '7-4': {
    name: 'quizPmp74',
    questions: [
      q(
        'تقرير الحالة يقول "المشروع يسير جيداً" بينما مؤشر SPI يساوي 0.82.',
        'A status report says "the project is going well" while SPI is 0.82.',
        'ما المشكلة في هذا التقرير؟',
        'What is wrong with this report?',
        'سهل',
        [
          [
            'لا توجد مشكلة؛ الوصف كافٍ.',
            'No problem; the description is enough.',
            false,
            'الوصف العام لا يرقى إلى دليل قابل للقياس.',
            'A general description is not measurable evidence.',
          ],
          [
            'الادعاء يتعارض مع مؤشر الأداء؛ يجب تفسير الانحراف واقتراح إجراء تصحيحي.',
            'The claim contradicts the performance index; the variance must be explained with corrective action.',
            true,
            'SPI أقل من 1 يعني تأخراً في الجدول ويجب أن ينعكس في التقرير.',
            'SPI below 1 means schedule variance and must be reflected in the report.',
          ],
          [
            'يجوز تجاهل SPI لأنه قديم.',
            'SPI can be ignored because it is outdated.',
            false,
            'تجاهل مؤشر حديث بدون سبب يُضعف الشفافية.',
            'Ignoring a current index without reason weakens transparency.',
          ],
          [
            'ينبغي تغيير قيمة SPI لتناسب التقرير.',
            'The SPI value should be changed to fit the report.',
            false,
            'تعديل البيانات لتجميل التقرير مخالفة أخلاقية صريحة.',
            'Changing data to beautify a report is an ethical violation.',
          ],
        ]
      ),
      q(
        'فريق المشروع يقيس "عدد الاجتماعات" كمؤشر أداء رئيسي.',
        'The project team tracks "number of meetings" as a key performance indicator.',
        'لماذا هذا المؤشر ضعيف؟',
        'Why is this a weak KPI?',
        'متوسط',
        [
          [
            'لأن الاجتماعات مهمة دائماً.',
            'Because meetings are always important.',
            false,
            'العدد وحده لا يقيس نتيجة أو قيمة.',
            'Count alone measures neither outcome nor value.',
          ],
          [
            'لأنه مؤشر نشاط لا نتيجة؛ الأفضل قياس زمن دورة القرار أو نسبة إغلاق الإجراءات.',
            'Because it is an activity metric, not an outcome; better to measure decision cycle time or action closure rate.',
            true,
            'KPI الجيد يربط بالنتيجة ويحفز قراراً.',
            'A good KPI links to outcomes and triggers a decision.',
          ],
          [
            'لأن الاجتماعات يجب ألا تُعقد.',
            'Because meetings should not be held.',
            false,
            'المشكلة في القياس لا في الاجتماع ذاته.',
            'The problem is the measurement, not the meeting itself.',
          ],
          [
            'لأن المؤشرات لا تُستخدم في المشاريع.',
            'Because KPIs are not used in projects.',
            false,
            'المؤشرات أساسية للمراقبة والتحكم.',
            'KPIs are essential for monitoring and control.',
          ],
        ]
      ),
      q(
        'مؤشر رضا العملاء انخفض من 88% إلى 71% لمدة شهرين متتاليين.',
        'Customer satisfaction dropped from 88% to 71% for two consecutive months.',
        'ما القرار المناسب؟',
        'What is the appropriate decision?',
        'متوسط',
        [
          [
            'انتظار عودة المؤشر تلقائياً.',
            'Wait for the metric to recover automatically.',
            false,
            'الانخفاض المستمر يحتاج تحليل سبب جذري.',
            'A sustained drop needs root-cause analysis.',
          ],
          [
            'إطلاق تحليل سبب جذري وخطة تحسين مع مالك وموعد مراجعة.',
            'Launch root-cause analysis and an improvement plan with an owner and review date.',
            true,
            'المؤشر يحفز قراراً؛ بدون خطة يصبح مجرد رقم.',
            'A KPI triggers a decision; without a plan it is just a number.',
          ],
          [
            'تغيير طريقة حساب المؤشر.',
            'Change the calculation method.',
            false,
            'تغيير طريقة القياس لإخفاء الانخفاض تلاعب بالبيانات.',
            'Changing the measurement method to hide a drop is data manipulation.',
          ],
          [
            'إبلاغ العميل بأن المشروع يسير وفق الخطة.',
            'Tell the customer the project is on plan.',
            false,
            'تجاهل إشارات العميل يفاقم فقدان الثقة.',
            'Ignoring customer signals worsens the loss of trust.',
          ],
        ]
      ),
      q(
        'لوحة المؤشرات تعرض 12 مؤشراً، لكن مدير المشروع يراجع ثلاثة فقط في الاجتماع الأسبوعي.',
        'The dashboard shows 12 KPIs, but the project manager reviews only three in the weekly meeting.',
        'ما التوصية؟',
        'What is the recommendation?',
        'صعب',
        [
          [
            'زيادة عدد المؤشرات إلى 20.',
            'Increase the number of KPIs to 20.',
            false,
            'زيادة العدد تزيد التشتيت لا الوضوح.',
            'More metrics add noise, not clarity.',
          ],
          [
            'تقليل المؤشرات الحرجة إلى عدد قابل للمراجعة مع ربط كل مؤشر بقرار ومالك.',
            'Reduce critical KPIs to a reviewable set, linking each to a decision and owner.',
            true,
            'اللوحة الفعّالة تركّز على عدد قليل من المؤشرات عالية الأثر.',
            'An effective dashboard focuses on a few high-impact measures.',
          ],
          [
            'إلغاء الاجتماع الأسبوعي.',
            'Cancel the weekly meeting.',
            false,
            'إلغاء الاجتماع لا يعالج تصميم اللوحة.',
            'Canceling the meeting does not fix dashboard design.',
          ],
          [
            'عرض المؤشرات الاثني عشر بالتساوي في كل اجتماع.',
            'Give all twelve equal time in every meeting.',
            false,
            'المساواة في الوقت لا تعني المساواة في الأهمية.',
            'Equal time does not mean equal importance.',
          ],
        ]
      ),
    ],
  },
  '7-5': {
    name: 'quizPmp75',
    questions: [
      q(
        'بيانات المشروع: PV = 100، EV = 90، AC = 110 (بالآلاف).',
        'Project data: PV = 100, EV = 90, AC = 110 (thousands).',
        'ما الاستنتاج الصحيح؟',
        'What is the correct conclusion?',
        'متوسط',
        [
          [
            'المشروع متقدم وم sicher من التكلفة.',
            'The project is ahead and under budget.',
            false,
            'EV أقل من PV و AC أعلى من EV، أي تأخر وتجاوز تكلفة.',
            'EV is below PV and AC above EV: behind schedule and over budget.',
          ],
          [
            'CV = -20 و SV = -10؛ المشروع متأخر ومتجاوز التكلفة.',
            'CV = -20 and SV = -10; the project is behind schedule and over budget.',
            true,
            'CV = EV - AC = -20، SV = EV - PV = -10، وكلاهما سالب.',
            'CV = EV - AC = -20 and SV = EV - PV = -10; both are negative.',
          ],
          [
            'CV = +20 و SV = +10.',
            'CV = +20 and SV = +10.',
            false,
            'الإشارة معكوسة؛ السلب يعني تجاوز التكلفة.',
            'The sign is reversed; negative means over budget.',
          ],
          [
            'لا يمكن استنتاج شيء من هذه الأرقام.',
            'Nothing can be concluded from these numbers.',
            false,
            'هذه الأرقام تكفي لحساب CV و SV والمؤشرات.',
            'These values are sufficient for CV, SV, and indices.',
          ],
        ]
      ),
      q(
        'CPI = 0.80 و BAC = 200 ألف دولار.',
        'CPI = 0.80 and BAC = $200,000.',
        'ما التوقع النهائي التقريبي (EAC) بافتراض استمرار الأداء؟',
        'What is the approximate EAC assuming performance continues?',
        'متوسط',
        [
          [
            '160 ألف دولار.',
            '$160,000.',
            false,
            'هذا ضرب BAC في CPI بدلاً من القسمة عليه.',
            'This multiplies BAC by CPI instead of dividing.',
          ],
          [
            '200 ألف دولار.',
            '$200,000.',
            false,
            'يتجاهل تجاوز التكلفة الحالي.',
            'It ignores the current cost overrun.',
          ],
          [
            '250 ألف دولار.',
            '$250,000.',
            true,
            'EAC = BAC / CPI = 200 / 0.8 = 250 ألفاً.',
            'EAC = BAC / CPI = 200 / 0.8 = 250 thousand.',
          ],
          [
            '180 ألف دولار.',
            '$180,000.',
            false,
            'الحساب لا يستند إلى صيغة EVM معتمدة.',
            'The calculation does not follow an EVM formula.',
          ],
        ]
      ),
      q(
        'المشروع متأخر في الجدول لكنه تحت الميزانية، وصاحب المصلحة يطلب تسريعاً.',
        'The project is behind schedule but under budget, and a stakeholder requests acceleration.',
        'ما الخيار الأنسب أولاً؟',
        'What is the best first option?',
        'صعب',
        [
          [
            'زيادة النطاق لتبرير التأخير.',
            'Increase scope to justify the delay.',
            false,
            'زيادة النطاق تزيد التأخير ولا تحل المشكلة.',
            'Adding scope increases delay rather than solving it.',
          ],
          [
            'تحليل خيارات التسريع (Fast Tracking / Crashing) مقابل التكلفة والمخاطرة، ثم اختيار الأقل أثراً.',
            'Analyze fast tracking and crashing options against cost and risk, then choose the least damaging one.',
            true,
            'التسريع قرار تجاري يجب موازنته بالمخاطر والتكلفة الإضافية.',
            'Acceleration is a trade-off decision balancing risk and extra cost.',
          ],
          [
            'تجاهل طلب صاحب المصلحة.',
            'Ignore the stakeholder request.',
            false,
            'تجاهل طلب مشروع يتعلق بالجدول يضر بالثقة.',
            'Ignoring a legitimate schedule request damages trust.',
          ],
          [
            'تغيير معايير الجودة لتقليل الوقت.',
            'Reduce quality standards to save time.',
            false,
            'التضحية بالجودة ترفع تكاليف الفشل لاحقاً.',
            'Sacrificing quality raises failure costs later.',
          ],
        ]
      ),
      q(
        'بعد إجراء تصحيحي ارتفع SPI من 0.85 إلى 0.97 لكن CPI بقي 0.90.',
        'After corrective action, SPI rose from 0.85 to 0.97 while CPI stayed at 0.90.',
        'كيف تقرأ الحالة؟',
        'How should the status be read?',
        'متوسط',
        [
          [
            'تحسّن الجدول لم يصحح تجاوز التكلفة؛ يلزم إجراء منفصل للتكلفة.',
            'Schedule improved but cost overrun remains; a separate cost action is needed.',
            true,
            'المؤشرات تقيس أبعاداً مختلفة ولا يعني تحسن أحدهما تحسن الآخر.',
            'The indices measure different dimensions; improvement in one does not fix the other.',
          ],
          [
            'المشروع الآن ضمن الميزانية.',
            'The project is now within budget.',
            false,
            'CPI ما زال أقل من 1، أي تجاوز تكلفة مستمر.',
            'CPI is still below 1, meaning a continuing overrun.',
          ],
          [
            'لا حاجة لأي متابعة إضافية.',
            'No further follow-up is needed.',
            false,
            'مؤشر التكلفة ما زال يتطلب تحكماً.',
            'The cost index still requires control.',
          ],
          [
            'يجب إيقاف المشروع فوراً.',
            'The project should be stopped immediately.',
            false,
            'الانحراف قابل للإدارة وليس سبباً للإيقاف.',
            'The variance is manageable and not a reason to stop.',
          ],
        ]
      ),
    ],
  },
  '8-1': {
    name: 'quizPmp81',
    questions: [
      q(
        'اقترب المشروع من نهايته، وهناك عقد مورد لم يُغلق وفاتورة نهائية لم تُسدّد.',
        'The project is nearing its end, a vendor contract is still open, and a final invoice is unpaid.',
        'ما الذي يجب أن يشمله إغلاق المشروع؟',
        'What must project closing include?',
        'سهل',
        [
          [
            'تسليم المخرجات فقط.',
            'Deliverables only.',
            false,
            'الإغلاق يشمل العقود والمالية والوثائق والفوائد أيضاً.',
            'Closing includes contracts, finance, documents, and benefits too.',
          ],
          [
            'إغلاق العقود وتسوية المدفوعات وأرشفة الوثائق وتسجيل الدروس وتسليم الفوائد.',
            'Closing contracts, settling payments, archiving documents, recording lessons, and handing over benefits.',
            true,
            'إغلاق المشروع عملية متكاملة تشمل الإداري والمالي والمعرفي.',
            'Project closing is an integrated administrative, financial, and knowledge process.',
          ],
          [
            'إغلاق العقود فقط.',
            'Contracts only.',
            false,
            'إغلاق جزئي يترك التزامات مفتوحة.',
            'Partial closing leaves open obligations.',
          ],
          [
            'تسجيل الدروس المستفادة فقط.',
            'Lessons learned only.',
            false,
            'الدرس وحده لا يغلق الالتزامات التعاقدية والمالية.',
            'Lessons alone do not close contractual and financial obligations.',
          ],
        ]
      ),
      q(
        'مدير المشروع أعد التقرير النهائي لكنه لم يحصل على قبول رسمي من الراعي.',
        'The project manager prepared the final report but did not obtain formal sponsor acceptance.',
        'ما الحكم؟',
        'What is the judgment?',
        'متوسط',
        [
          [
            'الإغلاق مكتمل لأن التقرير جاهز.',
            'Closing is complete because the report is ready.',
            false,
            'الإغلاق الرسمي يتطلب قبولاً وتوقيعاً من السلطة المختصة.',
            'Formal closing requires acceptance and sign-off by the proper authority.',
          ],
          [
            'الإغلاق غير مكتمل؛ يلزم الحصول على القبول الرسمي وتوثيقه.',
            'Closing is incomplete; formal acceptance must be obtained and documented.',
            true,
            'بدون قبول رسمي يبقى المشروع مفتوحاً قانونياً وإدارياً.',
            'Without formal acceptance the project remains open administratively.',
          ],
          [
            'القبول غير ضروري للمشاريع الداخلية.',
            'Acceptance is unnecessary for internal projects.',
            false,
            'المشاريع الداخلية تحتاج قبولاً من مالك العمل أيضاً.',
            'Internal projects still need business owner acceptance.',
          ],
          [
            'يُرسل التقرير بالبريد ويُعتبر مقبولاً تلقائياً.',
            'Send the report by email and treat it as automatically accepted.',
            false,
            'الافتراض لا يُغني عن الدليل الصريح على القبول.',
            'Assumption is not explicit evidence of acceptance.',
          ],
        ]
      ),
      q(
        'أثناء الإغلاق تبيّن أن إحدى الفوائد المتوقعة لن تتحقق إلا بعد ستة أشهر من التسليم.',
        'During closing, one expected benefit will only materialize six months after handover.',
        'ما الإجراء الصحيح؟',
        'What is the correct action?',
        'صعب',
        [
          [
            'إغلاق المشروع دون ذكر الفائدة.',
            'Close the project without mentioning the benefit.',
            false,
            'إخفاء الفائدة يفصل المشروع عن هدفه التجاري.',
            'Hiding the benefit disconnects the project from its business purpose.',
          ],
          [
            'تسجيل الفائدة في خطة تحقيق الفوائد بمالك وموعد قياس بعد التسليم.',
            'Record the benefit in the benefits realization plan with an owner and post-handover measurement date.',
            true,
            'إغلاق المشروع لا يعني نهاية إدارة الفوائد.',
            'Project closing does not end benefits management.',
          ],
          [
            'اعتبار الفائدة فاشلة وإلغاءها.',
            'Declare the benefit failed and cancel it.',
            false,
            'تأخر التحقق لا يعني فشل الفائدة.',
            'Delayed realization does not mean the benefit failed.',
          ],
          [
            'تعديل تاريخ الإغلاق إلى ما بعد تحقق الفائدة.',
            'Move the closing date until after the benefit materializes.',
            false,
            'الخلط بين إغلاق المشروع وتحقيق الفوائد يربك الحوكمة.',
            'Mixing project closure with benefits realization confuses governance.',
          ],
        ]
      ),
      q(
        'فريق المشروع لم يسجّل الدروس المستفادة لأن الوقت كان ضيقاً.',
        'The team skipped lessons learned because time was tight.',
        'ما أثر هذا القرار؟',
        'What is the impact of this decision?',
        'متوسط',
        [
          [
            'لا أثر؛ الدروس وثائق شكلية.',
            'No impact; lessons are formal documents.',
            false,
            'الدروس تحمي المشاريع اللاحقة من تكرار الأخطاء.',
            'Lessons protect future projects from repeating mistakes.',
          ],
          [
            'يفقد المشروع معرفة قابلة للنقل ويزيد مخاطر تكرار الأخطاء.',
            'The project loses transferable knowledge and raises the risk of repeating mistakes.',
            true,
            'إغلاق المعرفة جزء من أصول المنظمة.',
            'Knowledge closure is part of organizational assets.',
          ],
          [
            'يُوفّر الوقت دون تكلفة حقيقية.',
            'It saves time at no real cost.',
            false,
            'الوفر المؤقت يقابله ثمن أعلى في مشاريع لاحقة.',
            'The temporary saving costs more in later projects.',
          ],
          [
            'يجب تأجيل الإغلاق سنة كاملة.',
            'Closing should be delayed a full year.',
            false,
            'الحل جلسة قصيرة وموثقة لا تأجيل طويل.',
            'The fix is a short documented session, not a long delay.',
          ],
        ]
      ),
    ],
  },
  '8-2': {
    name: 'quizPmp82',
    questions: [
      q(
        'تم تسليم النظام تقنياً، لكن المستخدمين لم يتلقوا تدريباً ولم يُعيَّن مالك للدعم.',
        'The system was delivered technically, but users received no training and no support owner was assigned.',
        'ما الذي ينقص عملية التسليم؟',
        'What is missing from the handover?',
        'سهل',
        [
          [
            'الوثائق التقنية فقط.',
            'Technical documentation only.',
            false,
            'الوثائق مهمة لكن التبني والدعم أهم لاستمرار القيمة.',
            'Documents matter, but adoption and support sustain value.',
          ],
          [
            'التدريب ومالك الدعم وقنوات التصعيد ومعايير الجاهزية.',
            'Training, a support owner, escalation channels, and readiness criteria.',
            true,
            'التسليم الناجح ينقل المسؤولية التشغيلية كاملة.',
            'A successful handover transfers full operational responsibility.',
          ],
          [
            'الإعلان عن اكتمال المشروع.',
            'Announcing project completion.',
            false,
            'الإعلان دون جاهزية يشعر المستخدمين بخدمة غير مكتملة.',
            'Announcement without readiness leaves users with an incomplete service.',
          ],
          [
            'زيادة ميزانية المشروع.',
            'Increasing the project budget.',
            false,
            'الميزانية لا تعالج غياب المالك والتدريب.',
            'Budget does not fix a missing owner and training.',
          ],
        ]
      ),
      q(
        'خطة التسليم تحدد موعداً بعد أسبوعين، لكن المالك التشغيلي يطلب تأجيلاً لظروف خاصة.',
        'The handover plan sets a date in two weeks, but the operations owner requests a delay.',
        'ما الإجراء المناسب؟',
        'What is the appropriate action?',
        'متوسط',
        [
          [
            'التأجيل غير المعلن حتى لا يُربك الفريق.',
            'Delay silently to avoid confusing the team.',
            false,
            'التأجيل غير المعلن يكسر الثقة ويخلق فجوة مسؤولية.',
            'A silent delay breaks trust and creates an accountability gap.',
          ],
          [
            'مناقشة أثر التأجيل وتسجيل قرار معتمد وتحديث خطة التسليم والطرف المسؤول.',
            'Discuss the impact, record an approved decision, and update the handover plan and responsible party.',
            true,
            'تغيير موعد التسليم تغيير في الالتزام يحتاج توثيقاً.',
            'Changing a handover date changes a commitment and needs documentation.',
          ],
          [
            'الاستمرار في الموعد رغم الظروف.',
            'Proceed on the original date despite the circumstances.',
            false,
            'التصلب يتجاهل جاهزية المستلم.',
            'Rigidity ignores the recipient’s readiness.',
          ],
          [
            'نقل المشكلة إلى الراعي دون توصية.',
            'Escalate to the sponsor without a recommendation.',
            false,
            'التصعيد بدون تحليل يزيد العبء على الراعي.',
            'Escalation without analysis just shifts the burden upward.',
          ],
        ]
      ),
      q(
        'بعد التسليم ظهرت مشكلة تشغيلية يومية لم تكن في قائمة الثغرات المعروفة.',
        'After handover, an operational issue appeared that was not in the known defect list.',
        'ما التصنيف الصحيح؟',
        'What is the correct classification?',
        'متوسط',
        [
          [
            'خطر (Risk) لأنه قد يحدث مستقبلاً.',
            'A risk because it may happen in the future.',
            false,
            'المشكلة حدثت فعلاً بعد التسليم، إذن هي issue.',
            'The problem has already occurred, so it is an issue.',
          ],
          [
            'مشكلة (Issue) تُسجَّل وتُعالَج عبر عملية إدارة المشكلات مع مالك.',
            'An issue to be logged and handled through issue management with an owner.',
            true,
            'الفرق بين الخطر والمشكلة هو زمن الحدوث لا شدته.',
            'The difference between risk and issue is timing, not severity.',
          ],
          [
            'طلب تغيير في النطاق.',
            'A scope change request.',
            false,
            'ليس كل خلل تشغيلي تغييراً في نطاق المشروع.',
            'Not every operational defect is a project scope change.',
          ],
          [
            'درس مستفاد فقط.',
            'Only a lessons-learned entry.',
            false,
            'الدرس يوثّق التعلم، لكن المشكلة تحتاج معالجة فعلية.',
            'A lesson records learning, but the issue needs active resolution.',
          ],
        ]
      ),
      q(
        'المستخدمون يستخدمون النظام يومياً لكن معدل استخدام الميزة الأساسية 30% فقط.',
        'Users log in daily, but adoption of the core feature is only 30%.',
        'ماذا يعني هذا للتسليم؟',
        'What does this mean for the handover?',
        'صعب',
        [
          [
            'التسليم ناجح لأن تسجيل الدخول يومي.',
            'Handover is successful because logins are daily.',
            false,
            'تسجيل الدخول لا يعني تحقيق القيمة المرجوة.',
            'Login activity does not prove intended value is realized.',
          ],
          [
            'التسليم تقنياً اكتمل، لكن تحقيق القيمة يحتاج خطة تبني وقياس بعد التسليم.',
            'Technical handover is complete, but value realization needs an adoption plan and post-handover measurement.',
            true,
            'الفوائد تُقاس باستخدام الميزة التي تحقق الهدف.',
            'Benefits are measured through use of the value-bearing feature.',
          ],
          [
            'يجب إعادة بناء النظام بالكامل.',
            'The entire system must be rebuilt.',
            false,
            'الانخفاض في التبني يستدعي تحليل سبب قبل أي إعادة بناء.',
            'Low adoption calls for root-cause analysis before any rebuild.',
          ],
          [
            'يجب إغلاق المشروع فوراً واعتباره ناجحاً.',
            'The project should be closed immediately as successful.',
            false,
            'الإغلاق دون فحص التبني يخفي فجوة القيمة.',
            'Closing without checking adoption hides a value gap.',
          ],
        ]
      ),
    ],
  },
  '8-3': {
    name: 'quizPmp83',
    questions: [
      q(
        'في جلسة الدروس المستفادة، قال أحد أعضاء الفريق: "الجميع يعرف أن التأخير كان بسبب المورد" دون بيانات.',
        'In a lessons-learned session, a team member said: "Everyone knows the delay was the vendor’s fault" without data.',
        'ما دور مدير المشروع؟',
        'What is the project manager’s role?',
        'متوسط',
        [
          [
            'تسجيل الرأي كدرس نهائي.',
            'Record the opinion as a final lesson.',
            false,
            'الدرس يجب أن يستند إلى حوادث وبيانات موثقة.',
            'A lesson must be grounded in documented events and data.',
          ],
          [
            'طلب أمثلة محددة وتواريخ وأثراً وتحويلها إلى درس قابل للتطبيق.',
            'Ask for specific examples, dates, and impact, then turn them into an applicable lesson.',
            true,
            'الدروس ذات القيمة تصف ماذا حدث ولماذا وكيف نتجنبه.',
            'Useful lessons describe what happened, why, and how to avoid it.',
          ],
          [
            'تجاهل الرأي لأنه غير رسمي.',
            'Ignore the opinion because it is informal.',
            false,
            'الملاحظة غير الرسمية قد تفتح تحليلاً مفيداً.',
            'An informal observation may open a useful analysis.',
          ],
          [
            'تحويل اللوم إلى توصية عقابية للمورد.',
            'Turn the blame into a punitive recommendation against the vendor.',
            false,
            'العقاب دون تحليل لا يمنع تكرار السبب.',
            'Punishment without analysis does not prevent recurrence.',
          ],
        ]
      ),
      q(
        'فريق يدير مشروعاً طويلاً يمتد لعامين ويتساءل متى يجمع الدروس المستفادة.',
        'A team runs a two-year project and wonders when to collect lessons learned.',
        'أفضل وقت لجمع الدروس المستفادة في مشروع طويل هو:',
        'The best time to collect lessons learned in a long project is:',
        'سهل',
        [
          [
            'في آخر يوم من المشروع فقط.',
            'Only on the last day of the project.',
            false,
            'الانتظار يفقد تفاصيل مهمة ويضعف الذاكرة.',
            'Waiting loses detail and weakens memory.',
          ],
          [
            'بشكل مستمر عند كل مرحلة أو سبرنت، مع جلسة ختامية.',
            'Continuously at each phase or sprint, plus a final session.',
            true,
            'الدروس تُجمع أثناء الحدوث وتُلخَّص في الإغلاق.',
            'Lessons are captured when events occur and summarized at closure.',
          ],
          [
            'عند بدء المشروع فقط.',
            'Only at project start.',
            false,
            'بداية المشروع لا تحتوي على تجربة تنفيذية بعد.',
            'Project start has no delivery experience yet.',
          ],
          [
            'عند تدقيق الجودة النهائي فقط.',
            'Only during final quality audit.',
            false,
            'التدقيق يغطي الجودة لا كل تجارب الفريق.',
            'An audit covers quality, not the full range of team experience.',
          ],
        ]
      ),
      q(
        'أرشيف الدروس يحتوي على عبارة واحدة متكررة: "تحسين التواصل".',
        'The lessons archive repeats one entry: "Improve communication."',
        'درس مكتوب كالتالي: "تحسين التواصل". ما المشكلة فيه؟',
        'A lesson is written as: "Improve communication." What is wrong with it?',
        'متوسط',
        [
          [
            'لا توجد مشكلة؛ العبارة واضحة.',
            'No problem; the statement is clear.',
            false,
            'العبارة عامة ولا تحدد إجراءً أو مقياساً.',
            'The statement is vague and lacks an action or measure.',
          ],
          [
            'غير قابل للتنفيذ؛ يحتاج موقفاً محدداً وإجراءً ومالكاً.',
            'It is not actionable; it needs a specific situation, action, and owner.',
            true,
            'الدرس الجيد يترجم إلى ممارسة يمكن تطبيقها في مشروع آخر.',
            'A good lesson translates into a practice usable in another project.',
          ],
          [
            'يجب حذفه لأن التواصل لا يؤثر على المشاريع.',
            'It should be deleted because communication does not affect projects.',
            false,
            'التواصل مؤثر، لكن صياغة الدرس هي المشكلة.',
            'Communication matters; the problem is the wording.',
          ],
          [
            'يجب تحويله إلى طلب تغيير.',
            'It should be converted into a change request.',
            false,
            'الدرس يُخزَّن في سجل الدروس لا في سجل التغييرات.',
            'A lesson belongs in the lessons register, not the change log.',
          ],
        ]
      ),
      q(
        'أرشيف الدروس يحتوي على 80 درساً لكن الفرق لا تقرأها.',
        'The lessons archive contains 80 lessons but teams do not read them.',
        'ما التحسين المناسب؟',
        'What is the right improvement?',
        'صعب',
        [
          [
            'زيادة عدد الدروس إلى 120.',
            'Increase the number of lessons to 120.',
            false,
            'الكمية لا تحل مشكلة الاستخدام.',
            'Quantity does not solve usability.',
          ],
          [
            'تلخيص أهم الدروس وربطها بمراحل المشاريع ونقاط الدخول في بوابات الحوكمة.',
            'Summarize the most useful lessons and link them to project phases and governance gates.',
            true,
            'المعرفة تُستخدم عندما تُدمج في سير العمل.',
            'Knowledge gets used when embedded in the workflow.',
          ],
          [
            'حذف الأرشيف بالكامل.',
            'Delete the archive entirely.',
            false,
            'الحذف يفقد ذاكرة المنظمة.',
            'Deleting it loses organizational memory.',
          ],
          [
            'إرسال ملف الدروس مرة واحدة سنوياً.',
            'Email the lessons file once a year.',
            false,
            'الإرسال السنوي لا يصل إلى لحظة الحاجة.',
            'An annual email does not reach the moment of need.',
          ],
        ]
      ),
    ],
  },
  '8-4': {
    name: 'quizPmp84',
    questions: [
      q(
        'اكتمل المشروع وسُلِّم النظام، لكن مالك العمل لم يحدد بعد كيف سيُقاس أثره بعد عام.',
        'The project completed and the system was handed over, but the business owner has not defined how impact will be measured in a year.',
        'ما الفجوة؟',
        'What is the gap?',
        'سهل',
        [
          [
            'الفجوة في تسليم المخرجات.',
            'A gap in deliverable handover.',
            false,
            'المخرجات سُلِّمت؛ الفجوة في قياس الفائدة.',
            'Deliverables were handed over; the gap is benefit measurement.',
          ],
          [
            'الفجوة في خطة تحقيق الفوائد: مالك ومؤشر وموعد قياس.',
            'A gap in the benefits realization plan: owner, metric, and measurement date.',
            true,
            'الفائدة غير المُقاسة لا يمكن إثباتها.',
            'An unmeasured benefit cannot be evidenced.',
          ],
          [
            'الفجوة في الجدول فقط.',
            'A gap in the schedule only.',
            false,
            'المشروع اكتمل، إذن المشكلة ليست في الجدول.',
            'The project is complete, so the issue is not the schedule.',
          ],
          [
            'لا توجد فجوة؛ الإغلاق كافٍ.',
            'No gap; closing is enough.',
            false,
            'الإغلاق يوقف العمل لكنه لا يُثبت القيمة.',
            'Closure stops the work but does not prove value.',
          ],
        ]
      ),
      q(
        'الفائدة المستهدفة: خفض زمن معالجة الطلبات من 10 أيام إلى 4 أيام.',
        'Target benefit: reduce request processing time from 10 days to 4 days.',
        'ما أفضل مؤشر تحقق؟',
        'What is the best realization metric?',
        'متوسط',
        [
          [
            'عدد اجتماعات الفريق.',
            'Number of team meetings.',
            false,
            'الاجتماعات نشاط لا أثر.',
            'Meetings are activity, not impact.',
          ],
          [
            'متوسط زمن المعالجة الفعلي بعد التسليم مقابل 4 أيام.',
            'Actual average processing time after handover versus 4 days.',
            true,
            'المؤشر يقيس الفائدة مباشرة وبخط أساس واضح.',
            'The metric measures the benefit directly against a clear baseline.',
          ],
          [
            'عدد المخرجات المسلّمة.',
            'Number of deliverables handed over.',
            false,
            'المخرجات لا تُثبت تحسن الأداء.',
            'Deliverables do not prove performance improvement.',
          ],
          [
            'رضا الفريق عن المشروع.',
            'Team satisfaction with the project.',
            false,
            'رضا الفريق مهم لكنه ليس مقياس هذه الفائدة.',
            'Team satisfaction matters but is not this benefit’s measure.',
          ],
        ]
      ),
      q(
        'بعد ستة أشهر تبيّن أن الفائدة تحققت جزئياً لأن المستخدمين لا يطبقون العملية الجديدة.',
        'After six months the benefit is only partially realized because users do not follow the new process.',
        'ما الإجراء المناسب؟',
        'What is the appropriate action?',
        'صعب',
        [
          [
            'اعتبار الفائدة فاشلة وإغلاق الملف.',
            'Declare the benefit failed and close the file.',
            false,
            'الفشل الجزئي يستدعي تحليل سبب التبني أولاً.',
            'Partial failure calls for adoption root-cause analysis first.',
          ],
          [
            'تحليل حواجز التبني وتحديث خطة التغيير المؤسسي وإعادة القياس.',
            'Analyze adoption barriers, update the organizational change plan, and re-measure.',
            true,
            'تحقيق الفوائد يعتمد على سلوك المستخدمين لا على اكتمال النظام.',
            'Benefits depend on user behavior, not just system completion.',
          ],
          [
            'زيادة نطاق المشروع الأصلي.',
            'Increase the original project scope.',
            false,
            'المشروع مغلق؛ الحل في التشغيل وإدارة التغيير.',
            'The project is closed; the fix lies in operations and change.',
          ],
          [
            'تغيير هدف الفائدة إلى مستوى منخفض دون مبرر.',
            'Lower the benefit target without justification.',
            false,
            'تخفيض الهدف لإخفاء الفجوة يضر بالمصداقية.',
            'Lowering the target to hide the gap damages credibility.',
          ],
        ]
      ),
      q(
        'الراعي يسأل: "كيف أثبت لمجلس الإدارة أن المشروع حقق قيمة؟"',
        'The sponsor asks: "How do I prove to the board that the project delivered value?"',
        'ما أفضل إجابة من مدير المشروع؟',
        'What is the best answer from the project manager?',
        'متوسط',
        [
          [
            'عرض قائمة المخرجات المسلّمة.',
            'Present the list of delivered outputs.',
            false,
            'المخرجات تثبت ما سُلِّم لا ما تغيّر.',
            'Outputs prove what was delivered, not what changed.',
          ],
          [
            'عرض تقرير يقارن الفوائد المستهدفة بالفعلي مع مؤشرات مالية وتشغيلية ومالك لكل فائدة.',
            'Present a report comparing target benefits with actuals, with financial and operational indicators and an owner per benefit.',
            true,
            'القيمة تُثبت بالأرقام المقارنة والملكية الواضحة.',
            'Value is evidenced by comparative numbers and clear ownership.',
          ],
          [
            'عرض شهادة إغلاق المشروع.',
            'Present the project closure certificate.',
            false,
            'شهادة الإغلاق تثبت انتهاء العمل لا تحقق القيمة.',
            'A closure certificate proves work ended, not value realized.',
          ],
          [
            'عرض تقييم رضا الفريق.',
            'Present team satisfaction results.',
            false,
            'رضا الفريق لا يجيب سؤال مجلس الإدارة عن القيمة.',
            'Team satisfaction does not answer the board’s value question.',
          ],
        ]
      ),
    ],
  },
};

for (const [key, bank] of Object.entries(banks)) {
  const body = `import type { QuizBank } from '../types';

export const ${bank.name}: QuizBank = {
  id: 'quiz-pmp-${key}',
  questions: ${JSON.stringify(bank.questions, null, 2)},
};

export default ${bank.name};
`;
  writeFileSync(`src/data/quiz/pmp/quiz-pmp-${key}.ts`, body, 'utf8');
  console.log(`wrote quiz-pmp-${key}.ts`);
}
