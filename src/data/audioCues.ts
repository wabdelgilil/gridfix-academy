/**
 * نظام البطاقات المرئية المتزامنة مع الصوت (Smart Audio Visual Cues)
 * يدعم المعادلات الرياضية، رسوم المنحنيات التوضيحية، ومخططات تدفق القرار.
 * مصمم ليكون شريحة عرض مرئية تفاعلية وقابلة للتحويل إلى فيديوهات يوتيوب لاحقاً.
 */

export type AudioCueType =
  | 'intro'
  | 'concept'
  | 'stat'
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
};

/**
 * جلب الشرائح المرئية للدرس الصوتي المحدد
 */
export function getLessonAudioCues(lessonId: string): AudioCue[] {
  return lessonAudioCues[lessonId] ?? [];
}
