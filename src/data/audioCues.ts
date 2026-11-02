/**
 * نظام البطاقات المرئية المتزامنة مع الصوت (Smart Audio Visual Cues)
 * يربط التوقيت الزمني في التسجيل الصوتي بنقاط الشرح والرسوم والقواعد الامتحانية.
 */

export type AudioCueType = 'intro' | 'concept' | 'stat' | 'comparison' | 'rule' | 'summary';

export interface AudioCue {
  id: string;
  atSeconds: number; // ثانية بداية هذا المشهد
  badge: string;     // عنوان تصنيف الشريحة (مثال: مدخل تمهيدي، دراسة تاريخية)
  badgeIcon: string; // رمز تعبيري دال
  type: AudioCueType;
  title: string;     // العنوان الأبرز للمشهد
  keyTakeaway: string; // الفكرة الجوهرية بخط كبير وواضح للسائق
  detail?: string;    // تفصيل تكميلي موجز
  highlightStat?: {
    value: string;
    label: string;
    sub?: string;
    color?: 'emerald' | 'amber' | 'rose' | 'teal';
  };
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
      type: 'intro',
      badge: 'المدخل والهدف',
      badgeIcon: '🎯',
      title: 'صدمة نولان وهيب التاريخية',
      keyTakeaway: 'معظم أعطال المعدات الحديثة لا علاقة لها بعمر المعدة التشغيلي!',
      detail: 'دراسة أساطيل الطيران الأمريكي (1978) قلبت مفاهيم الصيانة التقليدية وأسست علم الاعتمادية الحديث (RCM).',
      highlightStat: {
        value: '1978',
        label: 'عام نشر دراسة الطيران',
        sub: 'ستانلي نولان وتوماس هيب',
        color: 'teal',
      },
    },
    {
      id: 'cue-1-1-2',
      atSeconds: 45,
      type: 'comparison',
      badge: 'المعضلة الهندسية',
      badgeIcon: '⚖️',
      title: 'الاعتقاد التقليدي مقابل الحقيقة العلمية',
      keyTakeaway: 'تفكيك المعدات السليمة بالتقويم الزمني يزيد احتمالية تعطلها المفاجئ!',
      detail: 'زيادة العمرات الوقائية الدورية تسببت في زيادة الأعطال ومعدلات التوقف غير المخطط.',
      comparison: {
        right: {
          label: 'الافتراض القديم الخاطئ',
          value: 'تآكل بالزمن',
          desc: 'كلما زاد عمر المعدة زاد احتمال فشلها حتماً',
        },
        left: {
          label: 'الحقيقة الإحصائية المثبتة',
          value: 'احتمال شرطي',
          desc: 'احتمالية الفشل لا تتبع نمطاً واحداً بل 6 أنماط',
        },
      },
    },
    {
      id: 'cue-1-1-3',
      atSeconds: 105,
      type: 'stat',
      badge: 'التقسيم الجوهري',
      badgeIcon: '📊',
      title: 'المجموعتان الكبريان للأعطال',
      keyTakeaway: '89% من أعطال المعدات عشوائية تماماً وتفشل معها الصيانة بالزمن!',
      detail: 'الصيانة الوقائية بالتقويم تصلح فقط مع 11% من الأصول الميكانيكية البسيطة المعرضة للاحتكاك المباشر.',
      highlightStat: {
        value: '89%',
        label: 'أعطال عشوائية (غير مرتبطة بالعمر)',
        sub: 'تتطلب الصيانة المشروطة بالحالة (CBM)',
        color: 'rose',
      },
    },
    {
      id: 'cue-1-1-4',
      atSeconds: 180,
      type: 'concept',
      badge: 'تحليل الأنماط الستة',
      badgeIcon: '📈',
      title: 'المنحنيات الستة واحتمالية الفشل',
      keyTakeaway: 'النمط F (وفيات الرضع) يمثل وحده 68% من كافة أعطال المعدات الصناعية!',
      detail: 'احتمالية الفشل تكون في أقصى ذروتها بعد الفك أو التجميع مباشرة، ثم تستقر عند مستوى منخفض.',
      comparison: {
        right: {
          label: 'النمط F (وفيات الرضع)',
          value: '68%',
          desc: 'أخطاء تركيب وتزييت وأتربة أثناء العمرة',
        },
        left: {
          label: 'النمط A (حوض الاستحمام)',
          value: '4% فقط',
          desc: 'أسطورة شائعة لا تنطبق إلا على 4% من الأصول',
        },
      },
    },
    {
      id: 'cue-1-1-5',
      atSeconds: 270,
      type: 'rule',
      badge: 'قاعدة امتحان CMRP الذهبية',
      badgeIcon: '⚠️',
      title: 'الأعطال المستحثة بالصيانة (Maintenance-Induced)',
      keyTakeaway: 'كل تفكيك غير ضروري لمعدة سليمة هو مقامرة تُدخل عيوباً جديدة!',
      detail: 'أخطاء المحاذاة، وزيادة تشحيم كراسي التحميل، ودخول الرطوبة، هي المسؤول الأول عن وفيات الرضع.',
      highlightStat: {
        value: 'CMRP',
        label: 'فخ امتحاني مؤكد',
        sub: 'العمرة الشاملة لا تصفر الأعطال بل قد ترفعها',
        color: 'amber',
      },
    },
    {
      id: 'cue-1-1-6',
      atSeconds: 330,
      type: 'summary',
      badge: 'الخلاصة الهندسية التنفيذية',
      badgeIcon: '🏁',
      title: 'معيار قرار استراتيجية الصيانة',
      keyTakeaway: 'المعيار الوحيد للصيانة بالزمن هو وجود عمر تقادم إحصائي مؤكد (A, B, C).',
      detail: 'إذا لم تكن هناك نقطة تآكل واضحة، فالبديل الوحيد الصحيح هو المراقبة المشروطة بالحالة (CBM).',
      highlightStat: {
        value: 'CBM',
        label: 'الصيانة المشروطة بالحالة',
        sub: 'التدخل عند ظهور مؤشرات تدهور مقاسة فقط',
        color: 'emerald',
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
