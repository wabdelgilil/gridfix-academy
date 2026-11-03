/**
 * وظائف مساعدة مشتركة لمنظومة الصوتيات والمشغلات
 */

/**
 * تحويل الثواني إلى صيغة دقيقة:ثانية (mm:ss)
 */
export function formatAudioTime(seconds: number): string {
  if (isNaN(seconds) || seconds <= 0) return '00:00';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

/**
 * حساب نسبة التقدم من 0 إلى 100
 */
export function calculateProgressPercent(currentTime: number, duration: number): number {
  if (!duration || isNaN(duration) || duration <= 0) return 0;
  return Math.min(100, Math.max(0, (currentTime / duration) * 100));
}

/**
 * سرعات التشغيل المتاحة في المشغلات
 */
export const PLAYBACK_SPEEDS = [1, 1.25, 1.5, 1.75, 2] as const;
export type PlaybackSpeed = (typeof PLAYBACK_SPEEDS)[number];

export function getNextPlaybackSpeed(current: number): PlaybackSpeed {
  const currentIndex = PLAYBACK_SPEEDS.indexOf(current as PlaybackSpeed);
  if (currentIndex === -1 || currentIndex === PLAYBACK_SPEEDS.length - 1) {
    return PLAYBACK_SPEEDS[0];
  }
  return PLAYBACK_SPEEDS[currentIndex + 1];
}
