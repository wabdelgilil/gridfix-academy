import type { QuizBank } from '../types';

export const quizCmrp45: QuizBank = {
  id: 'quiz-cmrp-4-5',
  questions: [
  {
    scenario: 'أجرت إدارة مصنع دراسة عينات عمل (Work Sampling Study) لقياس وقت العمل الفعلي المباشر (Wrench Time) لفنيي الصيانة. أظهرت النتائج أن الفني يقضي ساعتين ونصف فقط (2.5 ساعة) في الوردية المكونة من 8 ساعات في العمل الميداني المباشر على المعدات (أي بنسبة 31%).',
    scenarioEn: 'Plant management conducted a Work Sampling Study to measure the actual direct hands-on time (Wrench Time) of maintenance technicians. Results showed that a technician spends only two and a half hours (2.5 hours) out of an 8-hour shift in direct hands-on field work on equipment (i.e., 31%).',
    question: 'وفقاً لمراجع SMRP والمعايير العالمية، كيف يُفسر هذا الرقم وما هو المستهدف العالمي لـ Wrench Time؟',
    questionEn: 'Per SMRP references and world standards, how is this figure interpreted and what is the world-class target for Wrench Time?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'نسبة 31% هي النسبة المعتادة في المصانع غير المخططة ذات البيئة التفاعلية (25% - 35%)؛ بينما يرتفع Wrench Time في المصانع ذات التخطيط والجدولة الاحترافية عالمياً (World-Class) إلى ما بين 55% و 65%.',
        textEn: '31% is the typical percentage in unplanned plants with a reactive environment (25% - 35%); meanwhile, Wrench Time in plants with professional planning and scheduling rises to a world-class 55% to 65%.',
        isCorrect: true,
        explanation: 'في المصانع العادية الغارقة في الطوارئ، يضيع ثلثا يوم الفني في الانتقال والبحث عن القطع وانتظار التصاريح، فيكون Wrench Time نحو 30%. تطبيق التخطيط الاحترافي وحزم العمل المجهزة (Kitting) يضاعف هذه الإنتاجية لتصل إلى 55% - 65% دون أن يبذل الفني مجهوداً بدنياً إضافياً، بل عبر إزالة المعوقات فقط.',
        explanationEn: 'In typical plants drowning in emergencies, two-thirds of a technician\'s day is lost to travel, hunting for parts, and waiting for permits, leaving Wrench Time around 30%. Applying professional planning and pre-kitted job packages doubles this productivity to 55% - 65% without the technician exerting extra physical effort — purely by removing obstacles.',
      },
      {
        text: 'المستهدف العالمي هو 100% ويجب منع الفنيين من الذهاب لدورات المياه.',
        textEn: 'The world-class target is 100% and technicians must be barred from going to restrooms.',
        isCorrect: false,
        explanation: 'تحقيق 100% مستحيل إنسانياً وتشغيلياً لوجود أوقات انتقال واجتماعات سلامة طبيعية.',
        explanationEn: 'Achieving 100% is humanly and operationally impossible because of natural travel time and safety meetings.',
      },
      {
        text: 'نسبة 31% ممتازة جداً وأعلى من المعدلات العالمية.',
        textEn: '31% is excellent and above world-class rates.',
        isCorrect: false,
        explanation: '31% تعكس هدراً كبيراً في استغلال ساعات العمل.',
        explanationEn: '31% reflects significant waste in how work hours are utilized.',
      },
      {
        text: 'مؤشر Wrench Time لا يقاس بالساعات بل بعدد المسامير المربوطة.',
        textEn: 'The Wrench Time metric is not measured in hours but by the number of bolts tightened.',
        isCorrect: false,
        explanation: 'المؤشر يقاس بنسبة ساعات العمل المباشرة من إجمالي ساعات الوردية.',
        explanationEn: 'The metric is measured as the ratio of direct hands-on work hours to total shift hours.',
      }
    ]
  },
  {
    scenario: 'معدة حرجة تتطلب فحص صيانة وقائية شهرياً كل 30 يوماً (PM Interval = 30 days). تم إنجاز الفحص في اليوم الـ 35 من موعد الاستحقاق.',
    scenarioEn: 'A critical asset requires a preventive maintenance inspection monthly, every 30 days (PM Interval = 30 days). The inspection was completed on day 35 from the due date.',
    question: 'وفقاً لـ "قاعدة الـ 10% للالتزام بالصيانة الوقائية (10% PM Rule)" المعتمدة في اختبار CMRP، هل يُعد هذا الفحص منجزاً في موعده (Compliant)؟',
    questionEn: 'Per the "10% Rule for PM Compliance" adopted in the CMRP exam, is this inspection considered completed on time (Compliant)?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'غير ملتزم (Non-Compliant)؛ لأن نافذة السماح القصوى لقاعدة 10% لمهمة الـ 30 يوماً هي ±3 أيام فقط (بين اليوم 27 واليوم 33)، وتنفيذها في اليوم 35 يخرجها من الالتزام ويعد تأخيراً مسجلاً.',
        textEn: 'Non-Compliant; because the maximum tolerance window under the 10% Rule for a 30-day task is only ±3 days (between day 27 and day 33), and completing it on day 35 falls outside compliance and is recorded as a delay.',
        isCorrect: true,
        explanation: 'قاعدة الـ 10% (The 10% Rule for PM Compliance): نافذة السماح = 10% × التردد الزمني للمهمة. لمهمة مدتها 30 يوماً، تكون نافذة السماح = 30 × 0.10 = ±3 أيام. يجب إنهاء المهمة بين اليوم 27 واليوم 33 كحد أقصى. إنجازها في اليوم 35 يسجلها الـ CMMS كـ "غير متوافقة Non-compliant".',
        explanationEn: 'The 10% Rule for PM Compliance: the tolerance window = 10% × the task\'s time frequency. For a 30-day task, the tolerance window = 30 × 0.10 = ±3 days. The task must be completed between day 27 and day 33 at the latest. Completing it on day 35 causes the CMMS to record it as "Non-compliant".',
      },
      {
        text: 'ملتزم بنسبة 100% لأن التأخير أقل من سنة كاملة.',
        textEn: '100% compliant because the delay is less than a full year.',
        isCorrect: false,
        explanation: 'المعايير الهندسية دقيقة ولا تسمح بتأخير أسابيع وأشهر في الصيانة الوقائية.',
        explanationEn: 'Engineering standards are precise and do not allow delays of weeks and months in preventive maintenance.',
      },
      {
        text: 'ملتزم طالما أن الماكينة لم تنفجر بعد.',
        textEn: 'Compliant as long as the machine has not exploded yet.',
        isCorrect: false,
        explanation: 'الالتزام يقاس بالنافذة الزمنية المجدولة وليس بالانتظار حتى وقوع الكارثة.',
        explanationEn: 'Compliance is measured against the scheduled time window, not by waiting until a disaster occurs.',
      },
      {
        text: 'قاعدة الـ 10% تطبق فقط على عمرات المحركات كل 5 سنوات.',
        textEn: 'The 10% Rule applies only to engine overhauls every 5 years.',
        isCorrect: false,
        explanation: 'القاعدة تطبق على كافة مهام الصيانة الوقائية والتنبؤية الدورية.',
        explanationEn: 'The rule applies to all periodic preventive and predictive maintenance tasks.',
      }
    ]
  },
  {
    scenario: 'في شركة أسمنت، بلغت نسبة العمل الإضافي (Overtime Percentage) لفريق الصيانة 38% من إجمالي الساعات الشهرية، ويشتكي الفنيون من الإرهاق الدائم وتتزايد الأخطاء والحوادث.',
    scenarioEn: 'In a cement company, the Overtime Percentage of the maintenance team reached 38% of total monthly hours; technicians complain of constant fatigue and errors and incidents are increasing.',
    question: 'ما هي الدلالة الإدارية لارتفاع نسبة العمل الإضافي فوق 20%، وما هو المعدل الصحي لـ SMRP؟',
    questionEn: 'What is the managerial significance of overtime exceeding 20%, and what is the healthy rate per SMRP?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'يدل على سيطرة بيئة الصيانة التفاعلية الطارئة وضعف التخطيط والجدولة؛ والمعدل الصحي العالمي للعمل الإضافي في منشآت SMRP يجب أن يتراوح بين 5% و 10% فقط.',
        textEn: 'It indicates a reactive, emergency-driven maintenance environment and weak planning and scheduling; the world-class healthy overtime rate in SMRP facilities should be only 5% to 10%.',
        isCorrect: true,
        explanation: 'العمل الإضافي المفرط (> 15% - 20%) هو عرض واضح لسيادة ثقافة الطوارئ وإطفاء الحرائق، ويؤدي لإرهاق العمال وزيادة إصابات العمل ومضاعفة تكاليف الأجور. في أفضل الممارسات، يحافظ المصنع على نسبة Overtime بين 5% إلى 10% لتغطية العمرات وحالات الطوارئ المحدودة فقط.',
        explanationEn: 'Excessive overtime (> 15% - 20%) is a clear symptom of a prevailing firefighting, emergency culture; it leads to worker fatigue, increased occupational injuries, and doubled wage costs. In best practices, the plant keeps Overtime at 5% to 10% to cover only overhauls and limited emergencies.',
      },
      {
        text: 'يدل على أن المصنع يحقق أرباحاً خيالية والفنيون سعداء بالعمل المستمر.',
        textEn: 'It indicates the plant is making fantastic profits and that the technicians are happy with continuous work.',
        isCorrect: false,
        explanation: 'الإرهاق وتكرار الطوارئ يستنزف أرباح الشركة ويدمر معنويات الفريق.',
        explanationEn: 'Fatigue and repeated emergencies drain company profits and destroy team morale.',
      },
      {
        text: 'المعدل الصحي العالمي للعمل الإضافي هو 80% من ساعات العمل.',
        textEn: 'The world-class healthy overtime rate is 80% of work hours.',
        isCorrect: false,
        explanation: 'نسبة 80% عمل إضافي تعني انهيار المنظومة الإدارية تماماً.',
        explanationEn: 'An 80% overtime rate means a total breakdown of the management system.',
      },
      {
        text: 'يجب حل المشكلة بإلغاء أيام العطلات الأسبوعية نهائياً.',
        textEn: 'The problem should be solved by permanently abolishing weekly holidays.',
        isCorrect: false,
        explanation: 'هذا يفاقم الإرهاق ويخالف قوانين العمل والسلامة المهنية.',
        explanationEn: 'This worsens fatigue and violates labor and occupational safety laws.',
      }
    ]
  },
  {
    scenario: 'عند حساب مؤشر انحراف التخطيط (Planning Variance)، وجد المشرف أن المخطط قدر إجمالي أوامر الشغل بـ 500 ساعة، بينما استغرقت الأعمال فعلياً 850 ساعة عمل.',
    scenarioEn: 'While calculating the Planning Variance metric, the supervisor found that the planner estimated total work orders at 500 hours, while the work actually took 850 man-hours.',
    question: 'ما هو الإجراء الإيجابي الصحيح الذي يجب أن يتخذه مدير الصيانة وفقاً لأفضل ممارسات إدارة الأعمال؟',
    questionEn: 'What is the correct, constructive action the maintenance manager should take per work management best practices?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'عقد جلسة مراجعة فنية مع المخطط والمشرفين لتحليل أسباب الفجوة (مثل: عدم وضوح نطاق العمل، تأخر القطع، أو نقص بيانات الـ SOPs) وتحديث كتالوج الساعات القياسية في الـ CMMS لتحسين دقة الخطط المستقبلية.',
        textEn: 'Hold a technical review session with the planner and supervisors to analyze the causes of the gap (e.g., unclear scope of work, delayed parts, or missing SOP data) and update the standard-hours catalog in the CMMS to improve the accuracy of future plans.',
        isCorrect: true,
        explanation: 'مؤشر انحراف التخطيط لا يهدف لمعاقبة المخطط، بل هو أداة تعلم مستمر (Continuous Learning). تحليل أسباب التباين بين المخطط والفعلي يساعد في تصحيح أوقات المهام المعيارية في نظام الـ CMMS لكي تصبح الجدولة القادمة أكثر دقة واقعية.',
        explanationEn: 'The Planning Variance metric is not meant to punish the planner; it is a Continuous Learning tool. Analyzing the causes of the variance between planned and actual helps correct the standard task durations in the CMMS so the next schedule becomes more accurate and realistic.',
      },
      {
        text: 'فصل المخطط من العمل فوراً وتعيين فني مبتدئ بدلاً منه.',
        textEn: 'Fire the planner immediately and replace him with a junior technician.',
        isCorrect: false,
        explanation: 'العقاب الفوري يدمر ثقافة الثقة ويخفي البيانات الحقيقية.',
        explanationEn: 'Immediate punishment destroys the culture of trust and conceals real data.',
      },
      {
        text: 'تعديل الساعات الفعلية في النظام سراً لتطابق ساعات المخطط.',
        textEn: 'Secretly modify the actual hours in the system to match the planner\'s hours.',
        isCorrect: false,
        explanation: 'تزوير البيانات جريمة مهنية تضلل إدارة المصنع.',
        explanationEn: 'Falsifying data is a professional crime that misleads plant management.',
      },
      {
        text: 'تجاهل انحراف الساعات لأن التقدير مجرد رقم شكلي.',
        textEn: 'Ignore the hours variance because the estimate is just a formality.',
        isCorrect: false,
        explanation: 'دقة تقدير الساعات هي ركيزة الجدولة والتخطيط الناجح.',
        explanationEn: 'Accurate hour estimation is the cornerstone of successful scheduling and planning.',
      }
    ]
  },
  {
    scenario: 'في تدقيق لنظام الـ CMMS، تبين وجود أكثر من 200 أمر شغل مفتوح في قائمة التراكم (Backlog) مر على إنشائها أكثر من 180 يوماً دون أي حركة أو جدولة.',
    scenarioEn: 'During an audit of the CMMS, more than 200 open work orders were found in the Backlog, more than 180 days old with no activity or scheduling.',
    question: 'ما هو الإجراء النظامي الموصى به لإدارة "تقادم أوامر الشغل (Work Order Aging)"؟',
    questionEn: 'What is the recommended systematic action to manage "Work Order Aging"?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'تنفيذ مراجعة وتنقية دورية للـ Backlog (Purging/Scrubbing)؛ حيث تراجع الأوامر المتجاوزة لـ 90 يوماً، ويتم إلغاء الأوامر التي لم تعد هناك حاجة لها، أو إعادة تقييم أولويتها وتخطيطها وفق مصفوفة RIME.',
        textEn: 'Perform periodic Backlog review and purging/scrubbing; orders exceeding 90 days are reviewed, orders no longer needed are canceled, or their priority is re-evaluated and they are planned per the RIME matrix.',
        isCorrect: true,
        explanation: 'تراكم أوامر الشغل القديمة لشهور طويلة يشوه مؤشر الـ Backlog الحقيقي ويعطي صورة مضللة عن حجم الأعمال المطلوبة. أفضل الممارسات تقتضي تنقية وتطهير الـ Backlog (Scrubbing) بشكل فصلي لإلغاء المهام المتقادمة والتأكد من أن كل أمر موجود هو عمل حقيقي مطلوب.',
        explanationEn: 'Old work orders piling up for months distorts the true Backlog metric and gives a misleading picture of the required workload. Best practices require quarterly Backlog scrubbing/purging to cancel obsolete tasks and ensure every remaining order is real, required work.',
      },
      {
        text: 'تركها في النظام إلى الأبد حتى تصل إلى 50 سنة.',
        textEn: 'Leave them in the system forever until they reach 50 years old.',
        isCorrect: false,
        explanation: 'تراكم الأوامر الوهمية يعطل النظام ويفقد البيانات موثوقيتها.',
        explanationEn: 'The accumulation of obsolete orders clogs the system and makes data unreliable.',
      },
      {
        text: 'حذف جميع أوامر الشغل الجديدة والقديمة بنقرة واحدة.',
        textEn: 'Delete all new and old work orders with one click.',
        isCorrect: false,
        explanation: 'حذف عشوائي يدمر سجلات الصيانة والأصول.',
        explanationEn: 'Random deletion destroys maintenance and asset records.',
      },
      {
        text: 'إجبار الفنيين على تنفيذ الـ 200 أمر في يوم الجمعة القادم.',
        textEn: 'Force the technicians to execute all 200 orders next Friday.',
        isCorrect: false,
        explanation: 'اقتراح مستحيل فيزيائياً وتشغيلياً.',
        explanationEn: 'A proposal that is physically and operationally impossible.',
      }
    ]
  }

  ],
};
