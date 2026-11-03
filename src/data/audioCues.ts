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
  letter: string;
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

import { lessonAudioCues as cmrpCues } from './audio-cues/cmrp';

export const lessonAudioCues: Record<string, AudioCue[]> = {
  ...cmrpCues,
};

/**
 * جلب الشرائح المرئية للدرس الصوتي المحدد
 */
export function getLessonAudioCues(lessonId: string): AudioCue[] {
  return lessonAudioCues[lessonId] ?? [];
}
