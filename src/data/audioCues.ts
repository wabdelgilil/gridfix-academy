/**
 * نظام البطاقات المرئية المتزامنة مع الصوت (Smart Audio Visual Cues)
 * يدعم المعادلات الرياضية، رسوم المنحنيات التوضيحية، ومخططات تدفق القرار.
 * مصمم ليكون شريحة عرض مرئية تفاعلية وقابلة للتحويل إلى فيديوهات يوتيوب لاحقاً.
 */

export type AudioCueType =
  | 'intro'
  | 'concept'
  | 'stat'
  | 'highlightStat'
  | 'comparison'
  | 'rule'
  | 'summary'
  | 'formula'
  | 'curve'
  | 'flowchart';

export interface CurveGraphicItem {
  letter: 'F' | 'E' | 'D' | 'C' | 'A' | 'B';
  label: string;
  percent: string;
  group: 'random' | 'age';
  highlight?: boolean;
}

export interface FlowchartStep {
  step: string;
  title: string;
  decision?: string;
  outcomeType?: 'success' | 'warning' | 'info';
}

export interface AudioCue {
  id: string;
  atSeconds: number; // ثانية بداية هذا المشهد
  badge: string;     // عنوان تصنيف الشريحة
  badgeIcon: string; // رمز تعبيري دال
  type: AudioCueType;
  title: string;     // العنوان الأبرز للمشهد
  keyTakeaway: string; // الفكرة الجوهرية بخط كبير وواضح
  detail?: string;    // تفصيل تكميلي موجز
  
  // 1. عنصر المعادلة الرياضية
  formula?: {
    expression: string;
    label: string;
    variables: Array<{ symbol: string; meaning: string }>;
  };

  // 2. عنصر الرسوم البيانية للمنحنيات (SVG Curves)
  curvesGraphic?: {
    title: string;
    items: CurveGraphicItem[];
  };

  // 3. عنصر مخطط تدفق القرار الهندسي (Flowchart)
  flowchart?: {
    title: string;
    steps: FlowchartStep[];
  };

  // 4. شريط النسبة التوزيعية التوضيحي (Proportion Bar)
  visualBar?: {
    title: string;
    left: { percent: number; label: string; desc: string; color: 'rose' | 'amber' };
    right: { percent: number; label: string; desc: string; color: 'emerald' | 'teal' };
  };

  // 5. إحصائية مميزة مفردة
  highlightStat?: {
    value: string;
    label: string;
    sub?: string;
    color?: 'emerald' | 'amber' | 'rose' | 'teal';
  };

  // 6. مقارنة ثنائية جانباً إلى جنب
  comparison?: {
    right: { label: string; value: string; desc: string };
    left: { label: string; value: string; desc: string };
  };
}

export const lessonAudioCues: Record<string, AudioCue[]> = {
  // كورس CMRP — المحطة 1: فهم الأصل وآليات الانهيار
  // درس 1.1: أنماط الأعطال ونظرية التقادم (المدة الإجمالية: 06:23 = 383 ثانية)
  'lesson-cmrp-1-1': [
    {
      id: 'cue-1-1-1',
      atSeconds: 0,
      type: 'formula',
      badge: 'المدخل والأساس العلمي',
      badgeIcon: '📐',
      title: 'صدمة نولان وهيب ومعادلة الاحتمال الشرطي',
      keyTakeaway: 'احتمالية الفشل لا تُقاس بعمر المعدة، بل بالاحتمال الشرطي لحدوث العطل!',
      detail: 'دراسة أساطيل الطيران الأمريكي (1978) أثبتت أن احتمالية الفشل تحكمها طبيعة الإجهادات والتركيب، لا سنوات التشغيل.',
      formula: {
        label: 'معادلة الاحتمالية الشرطية للفشل — Conditional Probability of Failure',
        expression: 'P(t < T ≤ t + Δt | T > t) = λ(t)',
        variables: [
          { symbol: 'T > t', meaning: 'المعدة عملت بنجاح حتى اللحظة الحالية (t)' },
          { symbol: 'Δt', meaning: 'احتمال حدوث العطل خلال الفترة الزمنية القادمة' },
          { symbol: 'λ(t)', meaning: 'معدل الخطر اللحظي (Hazard Rate)' },
        ],
      },
    },
    {
      id: 'cue-1-1-2',
      atSeconds: 45,
      type: 'comparison',
      badge: 'المعضلة الهندسية',
      badgeIcon: '⚖️',
      title: 'الاعتقاد التقليدي مقابل الحقيقة المثبتة',
      keyTakeaway: 'تفكيك المعدات السليمة في مواعيد زمنية ثابتة يرفع معدل التوقفات المفاجئة!',
      detail: 'زيادة العمرات الوقائية الدورية تسببت في زيادة الأعطال ومعدلات التوقف غير المخطط للمعدات.',
      comparison: {
        right: {
          label: 'الافتراض القديم الخاطئ',
          value: 'تآكل حتمي بالزمن',
          desc: 'كلما زاد عمر المعدة زاد احتمال فشلها حتماً (منحنى حوض الاستحمام)',
        },
        left: {
          label: 'الحقيقة الإحصائية المثبتة',
          value: 'احتمال شرطي بستة أنماط',
          desc: 'لا يوجد نمط واحد للأعطال بل 6 أنماط مختلفة تماماً في السلوك',
        },
      },
    },
    {
      id: 'cue-1-1-3',
      atSeconds: 105,
      type: 'stat',
      badge: 'المجموعتان الكبريان للأعطال',
      badgeIcon: '📊',
      title: 'توزيع الأعطال: العشوائية مقابل المرتبطة بالعمر',
      keyTakeaway: '89% من أعطال المعدات عشوائية تماماً وتفشل معها الصيانة بالتقويم الزمني!',
      detail: 'الصيانة الوقائية بالزمن تصلح فقط مع 11% من الأصول الميكانيكية البسيطة المعرضة للاحتكاك المباشر.',
      visualBar: {
        title: 'النسبة الإحصائية الحقيقية لأعطال المعدات الصناعية الحديثة',
        left: {
          percent: 89,
          label: '89% أعطال عشوائية (D, E, F)',
          desc: 'تتطلب الصيانة المشروطة بالحالة والمراقبة التنبؤية (CBM)',
          color: 'rose',
        },
        right: {
          percent: 11,
          label: '11% مرتبطة بالعمر (A, B, C)',
          desc: 'تصلح معها الصيانة الوقائية بالزمن (Time-Based PM)',
          color: 'teal',
        },
      },
    },
    {
      id: 'cue-1-1-4',
      atSeconds: 180,
      type: 'curve',
      badge: 'المنحنيات الستة بالتفصيل',
      badgeIcon: '📈',
      title: 'رسم المنحنيات الستة (The Six Failure Curves)',
      keyTakeaway: 'النمط F (وفيات الرضع) يمثل 68% بينما حوض الاستحمام A يمثل 4% فقط!',
      detail: 'شكل المنحنى يحدد استراتيجية الصيانة: المنحنيات المسطحة والمتناقصة لا يصلح معها استبدال زمني مطلقاً.',
      curvesGraphic: {
        title: 'الأنماط الثلاثة الأكثر أهمية في امتحان CMRP',
        items: [
          { letter: 'F', label: 'وفيات الرضع (Infant Mortality)', percent: '68%', group: 'random', highlight: true },
          { letter: 'E', label: 'عشوائي تام (Random)', percent: '14%', group: 'random' },
          { letter: 'A', label: 'حوض الاستحمام (Bathtub)', percent: '4%', group: 'age' },
        ],
      },
    },
    {
      id: 'cue-1-1-5',
      atSeconds: 270,
      type: 'rule',
      badge: 'قاعدة امتحان CMRP الذهبية',
      badgeIcon: '⚠️',
      title: 'الأعطال المستحثة بالصيانة (Maintenance-Induced Failures)',
      keyTakeaway: 'كل تفكيك غير ضروري لمعدة سليمة هو مقامرة تُدخل عيوباً قاتلة!',
      detail: 'أخطاء المحاذاة، وزيادة تشحيم كراسي التحميل، ودخول الرطوبة، هي المسؤول الأول عن وفيات الرضع بعد العمرات.',
      flowchart: {
        title: 'سلسلة حدوث أعطال وفيات الرضع (النمط F)',
        steps: [
          { step: '1', title: 'عمرة دورية غير مبررة لمعدة سليمة', decision: 'تفكيك وإعادة تجميع' },
          { step: '2', title: 'أخطاء بشرية أثناء التركيب والتزييت', decision: 'محاذاة خاطئة أو زيادة شحم' },
          { step: '3', title: 'فشل مبكر فوري بعد التشغيل (وفيات الرضع)', outcomeType: 'warning' },
        ],
      },
    },
    {
      id: 'cue-1-1-6',
      atSeconds: 330,
      type: 'flowchart',
      badge: 'الخلاصة الهندسية التنفيذية',
      badgeIcon: '🏁',
      title: 'شجرة قرار اختيار نوع الصيانة (RCM Logic)',
      keyTakeaway: 'المعيار الوحيد للصيانة بالزمن هو وجود عمر تقادم إحصائي مؤكد (Wear-out Zone).',
      detail: 'إذا لم تكن هناك نقطة اهتراء واضحة، فالبديل الوحيد الصحيح هو المراقبة المشروطة بالحالة (CBM).',
      flowchart: {
        title: 'شجرة القرار الهندسي لاستراتيجية الصيانة',
        steps: [
          { step: '1', title: 'فحص نمط عطل المكوّن', decision: 'هل للمعدة عمر تآكل إحصائي مؤكد (A, B, C)؟' },
          { step: 'نعم', title: 'صيانة وقائية بالتقويم الزمني (Time-Based PM)', outcomeType: 'info' },
          { step: 'لا', title: 'صيانة مشروطة بالحالة ومراقبة التدهور (CBM) — الحل لـ 89%', outcomeType: 'success' },
        ],
      },
    },
  ],

  // كورس CMRP — المحطة 1: فهم الأصل وآليات الانهيار
  // درس 1.2: منحنى P-F والفاصل الزمني وتقنيات CBM/PdM
  'lesson-cmrp-1-2': [
    {
      id: 'cue-1-2-1',
      atSeconds: 0,
      type: 'formula',
      badge: 'المفهوم التأسيسي',
      badgeIcon: '📉',
      title: 'منحنى P-F: هبوط الحالة من الإنذار إلى الانهيار',
      keyTakeaway: 'كل عطل يعلن عن نفسه بإنذار مبكر (P) قبل وقوع الانهيار الوظيفي الكامل (F).',
      detail: 'النقطة P هي أول لحظة يمكن فيها كشف العطل بأجهزة القياس مع استمرار عمل المعدة طبيعياً دون توقف.',
      formula: {
        label: 'الفاصل الزمني P-F — مهلة الفشل الصافية للتخطيط',
        expression: '\\text{P-F Interval} = T_F - T_P',
        variables: [
          { symbol: 'T_P', meaning: 'زمن أول رصد للعطل المحتمل (Potential Failure)' },
          { symbol: 'T_F', meaning: 'زمن الانهيار الوظيفي الفعلي (Functional Failure)' },
          { symbol: '\\Delta T', meaning: 'المهلة الآمنة لطلب قطع الغيار وجدولة الإصلاح' },
        ],
      },
    },
    {
      id: 'cue-1-2-2',
      atSeconds: 60,
      type: 'formula',
      badge: 'القاعدة الهندسية المعتمدة',
      badgeIcon: '⏱️',
      title: 'قاعدة نصف الفاصل الزمني لتردد التفتيش',
      keyTakeaway: 'تردد الفحص الدوري يجب أن يساوي نصف الفاصل الزمني أو أقل لضمان رصد العطل مرتين.',
      detail: 'إذا كان الفاصل 30 يوماً، وجب الفحص كل 15 يوماً أو أقل لترك نافذة 15 يوماً آمنة للمخطط.',
      formula: {
        label: 'معادلة تردد الفحص التنبؤي — Inspection Frequency Rule',
        expression: 'T_{\\text{inspect}} \\le \\frac{\\text{P-F Interval}}{2}',
        variables: [
          { symbol: 'T_{\\text{inspect}}', meaning: 'الفترة الفاصلة بين جولتي فحص متتاليتين' },
          { symbol: '\\text{P-F}', meaning: 'الفاصل الزمني الكلي من أول عارض حتى الانهيار' },
          { symbol: '1/2', meaning: 'معامل الأمان لضمان رصد العطل قبل وقوعه بنصف المهلة' },
        ],
      },
    },
    {
      id: 'cue-1-2-3',
      atSeconds: 150,
      type: 'curve',
      badge: 'التسلسل الهرمي للتقنيات',
      badgeIcon: '🎚️',
      title: 'مضاعف التكلفة مع تأخر الكشف على منحنى P-F',
      keyTakeaway: 'الموجات فوق الصوتية تكشف العطل بتكلفة 1x بينما الانتظار للحواس يضاعف الكلفة 40x!',
      detail: 'كلما تحركت يميناً نحو النقطة F قصرت المهلة المتبقية وتضاعفت خسائر التوقف والإصلاح الطارئ.',
      curvesGraphic: {
        title: 'مضاعف تكلفة الإصلاح بحسب توقيت وتقنية الكشف',
        items: [
          { letter: 'F', label: 'الموجات فوق الصوتية (Ultrasound)', percent: '1x', group: 'age', highlight: true },
          { letter: 'E', label: 'تحليل الاهتزازات (Vibration)', percent: '3x', group: 'age' },
          { letter: 'D', label: 'التصوير الحراري (Thermography)', percent: '10x', group: 'random' },
        ],
      },
    },
    {
      id: 'cue-1-2-4',
      atSeconds: 240,
      type: 'flowchart',
      badge: 'القرار الميداني للتنفيذ',
      badgeIcon: '🎯',
      title: 'تحويل العطل من طارئ إلى عمل مخطط هادئ',
      keyTakeaway: 'الفاصل الزمني لا يمنع التدهور الفيزيائي، بل يشتري الوقت الثمين لفريق التخطيط.',
      detail: 'الرصد المبكر عند P يتيح حجز الفنيين، وتوفير قطع الغيار، واختيار توقف الإنتاج الأقل تكلفة.',
      flowchart: {
        title: 'مسار الاستجابة الهندسية عند رصد النقطة P',
        steps: [
          { step: '1', title: 'رصد مبكر عبر فحص CBM', decision: 'تحديد النمط ومعدل التدهور' },
          { step: '2', title: 'إنشاء أمر شغل مخطط في CMMS', decision: 'طلب القطع وجدولة التوقف' },
          { step: '3', title: 'استبدال آمن بتكلفة 1x دون توقف مفاجئ', outcomeType: 'success' },
        ],
      },
    },
  ],

  // كورس CMRP — المحطة 2: الاستراتيجية الفنية وحماية الأصل
  // درس 2.1: تحليل الحرجية وتصنيف الأصول ومصفوفة الخطر
  'lesson-cmrp-2-1': [
    {
      id: 'cue-2-1-1',
      atSeconds: 0,
      type: 'formula',
      badge: 'المعادلة الأساسية للمخاطر',
      badgeIcon: '⚖️',
      title: 'معادلة الخطر: حاصل ضرب الاحتمالية في العواقب',
      keyTakeaway: 'الخطر الهندسي لا تحدده فرصة التعطل وحدها، بل حجم الخسارة الناتجة عنه عند وقوعه!',
      detail: 'معدة نادرة العطل ولكن عطلها يقتل أو يوقف المصنع هي أصل فئة A تلقائياً، والسلامة خط أحمر.',
      formula: {
        label: 'معادلة تقييم الخطر — Risk Assessment Formula',
        expression: '\\text{Risk} = \\text{Probability (P)} \\times \\text{Consequence (C)}',
        variables: [
          { symbol: 'P', meaning: 'احتمالية الفشل من 1 (نادر جداً) إلى 5 (مستمر ومتكرر)' },
          { symbol: 'C', meaning: 'شدة العواقب من 1 (ضئيل) إلى 5 (كارثي بشرياً أو بيئياً)' },
          { symbol: 'Risk', meaning: 'درجة الخطر الإجمالية من 1 إلى 25 على مصفوفة المخاطر' },
        ],
      },
    },
    {
      id: 'cue-2-1-2',
      atSeconds: 60,
      type: 'flowchart',
      badge: 'أبعاد العواقب الأربعة',
      badgeIcon: '🛡️',
      title: 'ترتيب أبعاد العواقب حسب الأولوية غير القابلة للتفاوض',
      keyTakeaway: 'السلامة والصحة والبيئة (EHS) في القمة دائماً ولا تخضع لحسابات التكلفة أو العائد المالي.',
      detail: 'إذا بلغت شدة عواقب السلامة الدرجة 5 صُنفت المعدة فئة A فوراً دون النظر إلى احتمالية وقوعها.',
      flowchart: {
        title: 'تدرج أولويات عواقب الفشل الأربعة',
        steps: [
          { step: '1', title: 'السلامة والصحة والبيئة (EHS)', decision: 'أولوية قصوى غير قابلة للتفاوض' },
          { step: '2', title: 'الأثر التشغيلي وتوقف خط الإنتاج', decision: 'نقاط الاختناق والمعدات بلا بديل' },
          { step: '3', title: 'تكلفة الإصلاح المباشرة والسمعة', outcomeType: 'info' },
        ],
      },
    },
    {
      id: 'cue-2-1-3',
      atSeconds: 150,
      type: 'curve',
      badge: 'قاعدة باريتو وتصنيف الأصول',
      badgeIcon: '📊',
      title: 'التوزيع الثلاثي للأصول (A / B / C)',
      keyTakeaway: 'فئة A تمثل 10% إلى 15% من المعدات ولكنها تحكم استقرار وسلامة المنشأة بالكامل.',
      detail: 'العدل الهندسي ليس معاملة كل مسمار ومضخة بالتساوي، بل تركيز الموارد على الأصول الحرجة.',
      curvesGraphic: {
        title: 'نسب تصنيف الأصول الثلاثة وسياسة صيانتها',
        items: [
          { letter: 'A', label: 'حرجة (Critical): مراقبة متقدمة CBM', percent: '15%', group: 'random', highlight: true },
          { letter: 'B', label: 'أساسية (Essential): وقائية دورية PM', percent: '35%', group: 'age' },
          { letter: 'C', label: 'غير حرجة: تشغيل حتى العطل RTF', percent: '50%', group: 'age' },
        ],
      },
    },
    {
      id: 'cue-2-1-4',
      atSeconds: 240,
      type: 'comparison',
      badge: 'فخ امتحاني متكرر',
      badgeIcon: '⚡',
      title: 'حرجية الأصل الثابتة مقابل أولوية أمر الشغل الديناميكية',
      keyTakeaway: 'حرجية الأصل ثابتة تصميمياً، بينما أولوية أمر العمل متغيرة حسب إلحاح الظرف اللحظي.',
      detail: 'أمر صيانة على معدة فئة C قد يصبح طارئاً وفورياً إذا كان يهدد بحدوث تسرب زيت في ممر المشاة.',
      comparison: {
        right: {
          label: 'حرجية الأصل (Asset Criticality)',
          value: 'خاصية تصميمية ثابتة',
          desc: 'تعبر عن موقع المعدة في العملية ولا تتغير إلا بتعديل خط الإنتاج أو تركيب بديل مركب.',
        },
        left: {
          label: 'أولوية أمر الشغل (WO Priority)',
          value: 'قيمة تشغيلية ديناميكية',
          desc: 'حاصل ضرب حرجية الأصل في درجة الإلحاح اللحظية للخلل لحماية السلامة والتدفق.',
        },
      },
    },
  ],

  // كورس CMRP — المحطة 2: الاستراتيجية الفنية وحماية الأصل
  // درس 2.2: تحليل أنماط وتأثيرات الأعطال FMEA ورقم RPN
  'lesson-cmrp-2-2': [
    {
      id: 'cue-2-2-1',
      atSeconds: 0,
      type: 'flowchart',
      badge: 'تشريح العطل الهندسي',
      badgeIcon: '🔬',
      title: 'التفريق الدقيق: النمط والسبب والأثر',
      keyTakeaway: 'نمط العطل يصف المظهر الفيزيائي، وسببه يحدد الجذر، وأثره يوضح الخسارة الناتجة.',
      detail: 'الخلط بين هذه المفاهيم يمنع الوصول إلى الجذر الحقيقي ويفشل دراسات الموثوقية الميدانية.',
      flowchart: {
        title: 'أركان تحليل أنماط الأعطال الثلاثة في FMEA',
        steps: [
          { step: '1', title: 'نمط الفشل (Failure Mode)', decision: 'كيف تعطلت القطعة فيزيائياً؟ كسر، انسداد، تسريب' },
          { step: '2', title: 'سبب الفشل (Failure Cause)', decision: 'لماذا حدث؟ عدم محاذاة، تلوث زيت، اهتزاز' },
          { step: '3', title: 'أثر الفشل (Failure Effect)', outcomeType: 'warning' },
        ],
      },
    },
    {
      id: 'cue-2-2-2',
      atSeconds: 60,
      type: 'formula',
      badge: 'معادلة التقييم الكمي',
      badgeIcon: '🔢',
      title: 'حساب رقم أولوية المخاطر (RPN)',
      keyTakeaway: 'رقم RPN هو حاصل ضرب الشدة في معدل الحدوث في صعوبة الكشف، ويتراوح من 1 إلى 1000.',
      detail: 'الشدة (Severity) تقيس خطورة الأثر، والحدوث (Occurrence) يقيس التكرار، والكشف (Detection) يقيس عجز الرصد.',
      formula: {
        label: 'معادلة رقم أولوية المخاطر — Risk Priority Number',
        expression: '\\text{RPN} = S \\times O \\times D',
        variables: [
          { symbol: 'S', meaning: 'الشدة (Severity) من 1 (لا أثر) إلى 10 (كارثة سلامة دون إنذار)' },
          { symbol: 'O', meaning: 'معدل الحدوث (Occurrence) من 1 (نادر جداً) إلى 10 (حتمي ومتكرر)' },
          { symbol: 'D', meaning: 'صعوبة الكشف (Detection) من 1 (مضمون فوراً) إلى 10 (مخفي تماماً)' },
        ],
      },
    },
    {
      id: 'cue-2-2-3',
      atSeconds: 150,
      type: 'comparison',
      badge: 'فخ امتحان CMRP الشهير',
      badgeIcon: '⚠️',
      title: 'فخ رقم RPN: لا تعتمد على الإجمالي الأعمى',
      keyTakeaway: 'الشدة العالية (9 أو 10) تفرض المعالجة الفورية حتماً مهما كان رقم RPN الإجمالي صغيراً!',
      detail: 'عطل بصمام أمان غلاية رقمه 60 يتطلب حلاً هندسياً فورياً قبل تسريب زيت رقمه الإجمالي 180.',
      comparison: {
        right: {
          label: 'تسريب زيت تزييت خفيف',
          value: 'RPN = 180 (3 × 10 × 6)',
          desc: 'رقم مرتفع نسبياً لكنه لا يهدد الأرواح ولا يوقف المصنع، وتكلفة احتماله مقبولة.',
        },
        left: {
          label: 'صمام أمان غلاية ملتصق',
          value: 'RPN = 60 (10 × 2 × 3)',
          desc: 'رقم منخفض خادع ولكنه انفجار قاتل يستلزم المعالجة الهندسية الفورية القصوى!',
        },
      },
    },
    {
      id: 'cue-2-2-4',
      atSeconds: 240,
      type: 'flowchart',
      badge: 'التدرج الهندسي للحل',
      badgeIcon: '🛠️',
      title: 'الترتيب الصحيح لخفض المخاطر في FMEA',
      keyTakeaway: 'ابدأ بخفض الشدة بإعادة التصميم، ثم خفض الحدوث بالجودة، وأخيراً تحسين وسائل الكشف.',
      detail: 'إعادة التصميم هي الإجراء الوحيد الذي يغير طبيعة العطل جذرياً، بينما الكشف ينذر فقط دون منع.',
      flowchart: {
        title: 'تسلسل الإجراءات التصحيحية لخفض الخطر',
        steps: [
          { step: '1', title: 'خفض الشدة (Severity)', decision: 'إعادة تصميم هندسي يلغي أثر العطل' },
          { step: '2', title: 'خفض الحدوث (Occurrence)', decision: 'تحسين التزييت ومواد الصنع ودقة التجميع' },
          { step: '3', title: 'تحسين الكشف (Detection)', outcomeType: 'success' },
        ],
      },
    },
  ],

  // كورس CMRP — المحطة 2: الاستراتيجية الفنية وحماية الأصل
  // درس 2.3: صيانة الاعتمادية RCM وشجرة القرار ومعيار SAE JA1011
  'lesson-cmrp-2-3': [
    {
      id: 'cue-2-3-1',
      atSeconds: 0,
      type: 'flowchart',
      badge: 'المعيار العالمي SAE JA1011',
      badgeIcon: '📜',
      title: 'الأسئلة السبعة الإلزامية لصيانة الاعتمادية (RCM)',
      keyTakeaway: 'لا يحق لأي دراسة أن تسمى RCM ما لم تجب عن الأسئلة السبعة بالترتيب الصارم للمعيار.',
      detail: 'تبدأ RCM بتحديد الوظائف ومعايير الأداء في بيئة التشغيل قبل كتابة أي تكتيك صيانة.',
      flowchart: {
        title: 'الأسئلة السبعة الإلزامية لمعيار RCM العالمي',
        steps: [
          { step: '1-2', title: 'الوظائف والأعطال الوظيفية', decision: 'ما المطلوب من الأصل وكيف يعجز عنه؟' },
          { step: '3-5', title: 'الأنماط والآثار والعواقب', decision: 'لماذا يحدث وما أثره على السلامة والإنتاج؟' },
          { step: '6-7', title: 'المهام الاستباقية والإجراء البديل', outcomeType: 'success' },
        ],
      },
    },
    {
      id: 'cue-2-3-2',
      atSeconds: 80,
      type: 'comparison',
      badge: 'جوهر فلسفة RCM',
      badgeIcon: '🏭',
      title: 'سياق التشغيل (Operating Context)',
      keyTakeaway: 'صيانة الاعتمادية لا تحمي الحديد بذاته، بل تحمي الوظيفة المطلوبة في بيئة تشغيلها.',
      detail: 'مضختان متطابقتان تختلف خطة صيانتهما جذرياً إذا كانت إحداهما في مفاعل نووي والأخرى لري حديقة.',
      comparison: {
        right: {
          label: 'مضخة تبريد مفاعل نووي',
          value: 'فئة A فائقة الحرجية',
          desc: 'عطلها كارثي ويستلزم مراقبة اهتزاز مستمرة (CBM) ومضخات احتياطية فورية وقطع تأمينية.',
        },
        left: {
          label: 'نفس المضخة لري حديقة المصنع',
          value: 'فئة C غير حرجة',
          desc: 'عطلها غير مؤثر ويترك ليعمل حتى العطل (RTF) دون إهدار أجهزة القياس وساعات الفنيين.',
        },
      },
    },
    {
      id: 'cue-2-3-3',
      atSeconds: 160,
      type: 'flowchart',
      badge: 'الخطر الصامت',
      badgeIcon: '🕵️',
      title: 'الوظائف المخفية ومهمة اكتشاف العطل',
      keyTakeaway: 'أنظمة الحماية الساكنة (صمامات الأمان ومولدات الطوارئ) تستلزم مهمة فحص دوري مجدولة.',
      detail: 'مهمة اكتشاف العطل (Failure-Finding Task) تختبر جهاز الأمان للتأكد من قدرته على الاستجابة عند الطلب.',
      flowchart: {
        title: 'مسار معالجة الوظائف المخفية في شجرة RCM',
        steps: [
          { step: '1', title: 'هل العطل ظاهر للمشغل؟', decision: 'لا — وظيفة مخفية كصمام أمان أو مولد طوارئ' },
          { step: '2', title: 'تطبيق مهمة اكتشاف الفشل (FFT)', decision: 'اختبار تجريبي دوري مشروط بالتشغيل' },
          { step: '3', title: 'إعادة تصميم هندسي عند تعذر المهمة', outcomeType: 'warning' },
        ],
      },
    },
  ],

  // كورس CMRP — المحطة 2: الاستراتيجية الفنية وحماية الأصل
  // درس 2.4: المزيج المثالي للتكتيكات وتحليل ويبول ومقاييس الجاهزية
  'lesson-cmrp-2-4': [
    {
      id: 'cue-2-4-1',
      atSeconds: 0,
      type: 'curve',
      badge: 'حجر أساس الموثوقية الإحصائية',
      badgeIcon: '📐',
      title: 'معامل الشكل بيتا (Weibull Beta) يحدد التكتيك',
      keyTakeaway: 'قيمة بيتا الواحدة تخبرك بطبيعة الفشل الفيزيائي وبالتكتيك الهندسي الناجح والمكلف.',
      detail: 'إذا كانت بيتا أقل من 1 فإن الصيانة بالتقويم الزمني ضارة لأنها تعيد المعدة لمنطقة الخطر.',
      curvesGraphic: {
        title: 'مناطق سلوك الأعطال الثلاث وفق معامل بيتا (β)',
        items: [
          { letter: 'F', label: 'β < 1: وفيات الرضع — جودة تركيب', percent: '68%', group: 'random', highlight: true },
          { letter: 'E', label: 'β = 1: عشوائي تام — توزيع أسي CBM', percent: '14%', group: 'random' },
          { letter: 'A', label: 'β > 1: تقادم وتآكل — صيانة بالزمن PM', percent: '18%', group: 'age' },
        ],
      },
    },
    {
      id: 'cue-2-4-2',
      atSeconds: 90,
      type: 'highlightStat',
      badge: 'معامل المقياس إيتا',
      badgeIcon: '🎯',
      title: 'العمر المميز (Characteristic Life — η)',
      keyTakeaway: 'إيتا هي النقطة الزمنية التي يُتوقع أن يفشل عندها 63.2% من مجتمع المعدات الإحصائي.',
      detail: 'العمر المميز هو المرجع الزمني لحساب موعد استبدال المكونات المعرضة للتآكل قبل جرف الانهيار.',
      highlightStat: {
        label: 'نسبة فشل مجتمع المعدات عند الوصول للعمر المميز (η)',
        value: '63.2%',
        sub: 'مقياس إحصائي ثابت في توزيع ويبول يحدد عمر الموثوقية المعياري',
        color: 'emerald',
      },
    },
    {
      id: 'cue-2-4-3',
      atSeconds: 160,
      type: 'formula',
      badge: 'مقاييس الأداء الذهبية',
      badgeIcon: '⏱️',
      title: 'معادلات الموثوقية وقابلية الصيانة (MTBF & MTTR)',
      keyTakeaway: 'MTBF يقيس الموثوقية، وMTTR يقيس سرعة الإصلاح، وهما جناحا إتاحة المنشأة الصناعية.',
      detail: 'رفع الإتاحة يتحقق إما بإطالة زمن التشغيل بين الأعطال (MTBF) أو بتسريع إجراءات الإصلاح (MTTR).',
      formula: {
        label: 'معادلتا متوسط الوقت بين الأعطال ومتوسط زمن الإصلاح',
        expression: '\\text{MTBF} = \\frac{\\text{Operating Hours}}{\\text{Failures}}, \\quad \\text{MTTR} = \\frac{\\text{Down Hours}}{\\text{Failures}}',
        variables: [
          { symbol: '\\text{MTBF}', meaning: 'متوسط الوقت بين الأعطال (مقياس الموثوقية Reliability)' },
          { symbol: '\\text{MTTR}', meaning: 'متوسط وقت الإصلاح (مقياس قابلية الصيانة Maintainability)' },
          { symbol: 'A_i', meaning: 'الإتاحة الذاتية = MTBF ÷ (MTBF + MTTR) × 100%' },
        ],
      },
    },
  ],

  // كورس CMRP — المحطة 3: الأصل في خط الإنتاج والعمليات
  // درس 3.1: تدفق العمليات ونظرية القيود ونقاط الاختناق (TOC)
  'lesson-cmrp-3-1': [
    {
      id: 'cue-3-1-1',
      atSeconds: 0,
      type: 'highlightStat',
      badge: 'القاعدة الذهبية لنظرية القيود',
      badgeIcon: '⏳',
      title: 'ساعة توقف الاختناق تساوي خسارة إنتاج المصنع كله',
      keyTakeaway: 'إنتاجية الخط يحكمها القيد الواحد الأضعف، وساعة التوقف فيه ضياع لا يمكن تعويضه أبداً!',
      detail: 'الاستثمار في تسريع المحطات غير الخانقة يكدس مخزوناً تحت التشغيل ولا يرفع المبيعات بزجاجة واحدة.',
      highlightStat: {
        label: 'ساعة توقف واحدة في ماكينة الاختناق',
        value: '100% ضائعة',
        sub: 'تخصم مباشرة من مبيعات المنشأة بالكامل ولا يمكن استردادها بتشغيل إضافي',
        color: 'rose',
      },
    },
    {
      id: 'cue-3-1-2',
      atSeconds: 70,
      type: 'flowchart',
      badge: 'منهجية التحسين المستمر',
      badgeIcon: '🔄',
      title: 'خطوات التركيز الخمس (Five Focusing Steps)',
      keyTakeaway: 'حدد القيد أولاً، ثم استغله، وأخضع كل العمليات لسرعته، قبل أن تضخ أي استثمار مالي جديد.',
      detail: 'كسر الاختناق الحالي ينقله إلى معدة أخرى فوراً، لتتجدد دورة التركيز دون توقف أو ركون للجمود.',
      flowchart: {
        title: 'دورة معالجة الاختناقات في نظرية القيود (TOC)',
        steps: [
          { step: '1', title: 'تحديد القيد (Identify)', decision: 'أبطأ ماكينة يتكدس أمامها المخزون' },
          { step: '2', title: 'استغلال القيد (Exploit)', decision: 'منع توقفها في الاستراحات وتبديل الورديات' },
          { step: '3', title: 'إخضاع الخط ورفع الطاقة (Elevate)', outcomeType: 'success' },
        ],
      },
    },
    {
      id: 'cue-3-1-3',
      atSeconds: 150,
      type: 'flowchart',
      badge: 'آلية ضبط الإيقاع',
      badgeIcon: '🥁',
      title: 'الطبلة والمخزن المؤقت والحبل (Drum-Buffer-Rope)',
      keyTakeaway: 'الطبلة تحدد السرعة، والمخزن يحمي من التوقف العابر، والحبل يمنع الإغراق بالمخزون الزائد.',
      detail: 'توجيه الصيانة التنبؤية ومخزون قطع الغيار ذي الأولوية إلى ماكينة الاختناق يحمي تدفق المصنع بأكمله.',
      flowchart: {
        title: 'عناصر منظومة DBR لضبط التدفق الصناعي',
        steps: [
          { step: '🥁', title: 'الطبلة (Drum)', decision: 'معدة الاختناق تضبط إيقاع سرعة الخط كله' },
          { step: '🛡️', title: 'المخزن المؤقت (Buffer)', decision: 'مخزون زمني يضمن استمرار الخانقة إذا تعطل ما قبلها' },
          { step: '🪢', title: 'الحبل (Rope)', outcomeType: 'info' },
        ],
      },
    },
  ],

  // كورس CMRP — المحطة 3: الأصل في خط الإنتاج والعمليات
  // درس 3.2: الكفاءة الكلية للمعدات OEE والخسائر الست الكبرى
  'lesson-cmrp-3-2': [
    {
      id: 'cue-3-2-1',
      atSeconds: 0,
      type: 'formula',
      badge: 'مقياس النخبة الصناعية',
      badgeIcon: '🏭',
      title: 'معادلة كفاءة المعدات الكلية (OEE)',
      keyTakeaway: 'كفاءة المعدات الكلية هي حاصل ضرب الإتاحة في الأداء في الجودة، وليست متوسطاً حسابياً!',
      detail: 'ضعف عامل واحد يخفض النتيجة الإجمالية بشدة؛ فالمعدل الإجمالي 58% يعكس غالباً انهيار عامل الأداء.',
      formula: {
        label: 'معادلة كفاءة المعدات الكلية — Overall Equipment Effectiveness',
        expression: '\\text{OEE} = \\text{Availability (A)} \\times \\text{Performance (P)} \\times \\text{Quality (Q)}',
        variables: [
          { symbol: 'A', meaning: 'الإتاحة (Availability) = وقت التشغيل الفعلي ÷ وقت الإنتاج المخطط' },
          { symbol: 'P', meaning: 'الأداء (Performance) = الإنتاج الفعلي ÷ الطاقة التصميمية القصوى' },
          { symbol: 'Q', meaning: 'الجودة (Quality) = القطع السليمة المطابقة ÷ إجمالي القطع المنتجة' },
        ],
      },
    },
    {
      id: 'cue-3-2-2',
      atSeconds: 80,
      type: 'highlightStat',
      badge: 'المعيار العالمي للنخبة',
      badgeIcon: '🏆',
      title: 'معيار النخبة العالمي (World-Class OEE)',
      keyTakeaway: 'المعيار العالمي المشهود لكفاءة المعدات هو 85% فأكثر (إتاحة 90%، أداء 95%، جودة 99%).',
      detail: 'أغلب المصانع التقليدية تعمل عند مستويات OEE تتراوح بين 50% إلى 60% مع فرص هائلة للتحسين.',
      highlightStat: {
        label: 'كفاءة المعدات الكلية للنخبة العالمية (World-Class OEE)',
        value: '≥ 85%',
        sub: 'حاصل ضرب إتاحة 90% × أداء 95% × جودة 99% وفق معايير TPM الدولية',
        color: 'emerald',
      },
    },
    {
      id: 'cue-3-2-3',
      atSeconds: 150,
      type: 'flowchart',
      badge: 'الخسائر الست الكبرى',
      badgeIcon: '📉',
      title: 'توزيع الخسائر الست الكبرى على عوامل OEE',
      keyTakeaway: 'الأعطال والتبديل تلتهم الإتاحة، والسرعة البطيئة تلتهم الأداء، والخردة تلتهم الجودة.',
      detail: 'تقنية SMED هي المعيار لتقليص أزمنة تغيير القوالب من ساعات طويلة إلى أقل من 10 دقائق.',
      flowchart: {
        title: 'أصناف الخسائر الست الكبرى في معايير TPM',
        steps: [
          { step: 'الإتاحة', title: 'الأعطال المفاجئة وأزمنة الضبط والتبديل', decision: 'علاجها الصيانة التنبؤية وتقنية SMED' },
          { step: 'الأداء', title: 'التوقفات الدقيقة العابرة والسرعة البطيئة', decision: 'انحشارات صغيرة أقل من 5 دقائق وخوف من التعطل' },
          { step: 'الجودة', title: 'خردة بدء التشغيل وعيوب التصنيع المستمرة', outcomeType: 'warning' },
        ],
      },
    },
  ],
};

/**
 * جلب الشرائح المرئية للدرس الصوتي المحدد
 */
export function getLessonAudioCues(lessonId: string): AudioCue[] {
  return lessonAudioCues[lessonId] ?? [];
}
