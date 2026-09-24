import type { QuizBank } from '../types';

export const quiz93: QuizBank = {
  id: 'quiz-9-3',
  questions: [
    {
      scenario: 'تُظهر بيانات عام كامل أن 80% من زمن توقف الإنتاج يتركّز في ثلاثة من أصل عشرين نظاماً.',
      scenarioEn: 'A full year of data shows that 80% of production downtime is concentrated in three of twenty systems.',
      question: 'ما التحليل الأصح لاستثمار هذا التوزيع؟',
      questionEn: 'What is the most correct analysis for capitalizing on this distribution?',
      difficulty: 'سهل',
      options: [
        {
          text: 'قاعدة باريتو: قسم صغير من الأصول يحمل حصة كبيرة من التوقف، فوجه الجهد للأنظمة الثلاثة أولاً',
          textEn: 'Pareto rule: a small share of assets carries a large share of downtime, so focus effort on the three systems first',
          isCorrect: true,
          explanation: 'تحليل 80/20 يركز الجهد حيث الأثر الأكبر؛ معالجة الثلاثة تنتج أكبر ربح بأقل موارد.',
          explanationEn: '80/20 analysis focuses effort where the impact is greatest; fixing the three produces the largest gain with the fewest resources.',
        },
        {
          text: 'توزيع الجهد بالتساوي على الأنظمة العشرين كلها',
          textEn: 'Distribute effort equally across all twenty systems',
          isCorrect: false,
          explanation: 'التوزيع المتساوي يضيع الموارد على مواطن الأثر الضعيف، ويبطئ التقدم عند الأهم.',
          explanationEn: 'Equal distribution wastes resources on low-impact areas and slows progress on what matters most.',
        },
        {
          text: 'التركيز على أقل أنظمة توقفاً لأنها الأسهل',
          textEn: 'Focus on the systems with the least downtime because they are the easiest',
          isCorrect: false,
          explanation: 'السهولة ليست أولوية؛ الأولوية حيث يتركز الأثر والأثر في الأنظمة الثلاثة المكلفة.',
          explanationEn: 'Ease is not a priority; priority lies where impact concentrates, and the impact is in the three costly systems.',
        },
        {
          text: 'طلب دراسة جديدة بلا سنوات كافية لقياس التوقف',
          textEn: 'Request a new study without enough years to measure downtime',
          isCorrect: false,
          explanation: 'لك منها البيانات؛ التردد في القرار المكتفي بالدليل يعطل تحقيق الربح المسجل أصلاً.',
          explanationEn: 'The data is already there; hesitation in a decision supported by evidence blocks realizing the gain already recorded.',
        },
      ],
    },
    {
      scenario: 'ارتفعت كلفة التبريد شهور الصيف ذاتياً مع الحرارة، فوضع البعض ارتباطاً استباقياً بأن قطر كلفة الهواء صدى لدرجة الحرارة.',
      scenarioEn: 'Cooling costs rose by themselves in the summer months with the heat, so some assumed a premature correlation that the scale of cooling cost mirrors the temperature.',
      question: 'ما القراءة العلمية الأدق لهذا الترابط؟',
      questionEn: 'What is the most accurate scientific reading of this correlation?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'ترابط متوقع مع مؤشرات الطقس؛ الحرارة تغذي الحمل الحراري، لكن الترابط لا يقرر السببية تلقائياً دون فحص المتغيرات',
          textEn: 'An expected correlation with weather indicators; heat drives the cooling load, but correlation does not automatically establish causality without examining variables',
          isCorrect: true,
          explanation: 'التحليل يفحص الفرضية ثم العوامل (عدد الشاغلين، الإشغال، ساعات العمل) قبل نسب الكلفة لسبب واحد.',
          explanationEn: 'Analysis tests the hypothesis, then the factors (occupant count, occupancy, working hours) before attributing cost to a single cause.',
        },
        {
          text: 'اعتقاد كامل: أي ترابط قوي يعني السببية أكيدة، فلا حاجة لفحص عوامل أخرى',
          textEn: 'Full conviction: any strong correlation means proven causality, so there is no need to examine other factors',
          isCorrect: false,
          explanation: 'الترابط لا يثبت السببية وحدها; متغير خفي آخر قد يحمل شحنة الارتباط في واقع مغاير.',
          explanationEn: 'Correlation alone does not prove causality; another hidden variable may carry the correlation in a different reality.',
        },
        {
          text: 'تجاهل كل المؤشرات الموسمية لأنها مؤثرة مزعجة دائماً',
          textEn: 'Ignore all seasonal indicators because they are always a nuisance',
          isCorrect: false,
          explanation: 'الموسمية جزء واقعي من القراءة؛ فصلها لا يعني تجاهلها، بل حسابها كمتغير مشروع.',
          explanationEn: 'Seasonality is a real part of reading; isolating it does not mean ignoring it, but accounting for it as a legitimate variable.',
        },
        {
          text: 'استبدال الكلفة بمعطيات ساعات العمل فقط للتحليل الأرشيفي',
          textEn: 'Replace cost with working-hours data only for archival analysis',
          isCorrect: false,
          explanation: 'الاختيار يجب أن يشمل المتغيرات ذوات المعنى؛ ساعات العمل وحدها لا تمثل الحمل الحراري.',
          explanationEn: 'The choice must include meaningful variables; working hours alone do not represent the cooling load.',
        },
      ],
    },
    {
      scenario: 'تقرير شهري يقرر «خفض أوامر الصيانة الوقائية إلى النصف الثلث بعد الشهرين القادمين» بناءً على قراءة واحدة للمؤشر.',
      scenarioEn: 'A monthly report decides to "halve preventive maintenance orders in the two coming months" based on a single indicator reading.',
      question: 'ما المعالجة المطلوبة قبل اتخاذ هذا القرار الحاسم؟',
      questionEn: 'What analysis is required before making this decisive decision?',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحليل السبب الجذري والتأكد من اتساق القراءة عبر الفترات والمتغيرات التشغيلية قبل تغيير أي برنامج',
          textEn: 'Root-cause analysis and confirming the reading\'s consistency across periods and operational variables before changing any program',
          isCorrect: true,
          explanation: 'القرار المبني على عينة واحدة يحمل هامش خطأ عالياً؛ ثبات الاتجاه وتحري السبب شرطان قبل أي تعديل جوهري.',
          explanationEn: 'A decision based on a single sample carries a high margin of error; trend stability and cause investigation are prerequisites for any substantial change.',
        },
        {
          text: 'التنفيذ فوراً لأن الأرقام لا تنتظر، والتراجع متاح لاحقاً',
          textEn: 'Execute immediately because numbers do not wait, and reversal is available later',
          isCorrect: false,
          explanation: 'التراجع عن برنامج وقاية لاحقاً يكلّف أعطالاً قبل أن يظهر الخطأ؛ تكلفة القرار المتسرع أعلى من الانتظار المحسوب.',
          explanationEn: 'Reversing a prevention program later costs failures before the error appears; the cost of a hasty decision is higher than calculated waiting.',
        },
        {
          text: 'توزيع التخفيض بالتساوي دون تمييز بين الأنظمة الحرجة وغيرها',
          textEn: 'Distribute the reduction equally without distinguishing critical systems from others',
          isCorrect: false,
          explanation: 'الأنظمة الحرجة (التبريد، الكهرباء، السلامة) لا تحتمل التخفيض بلا تحليل؛ الأثر يتركز حيث المخاطرة.',
          explanationEn: 'Critical systems (cooling, electrical, safety) cannot tolerate reduction without analysis; the impact concentrates where risk lies.',
        },
        {
          text: 'الحكم على نجاح القرار بحرية أوامر الطوارئ في شهر واحد فقط',
          textEn: 'Judge the decision\'s success by the emergency order count in a single month only',
          isCorrect: false,
          explanation: 'أثر السياسة على السلامة يحتاج نوافذ أطول؛ شهر وحيد لا يكشف تدهوراً يتطلب فصل مراجعة.',
          explanationEn: 'The policy\'s impact on safety needs longer windows; a single month cannot reveal deterioration that requires a review period.',
        },
      ],
    },
  ],
};