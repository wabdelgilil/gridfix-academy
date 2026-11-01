/**
 * سجل الدروس الصوتية المتوفرة ومساراتها الهرمية.
 * عند توفر درس صوتي جديد، يُضاف معرف الدرس مع مساره النسبي.
 */
export const audioLessons: Record<string, string> = {
  // كورس CMRP — المحطة 1
  'lesson-cmrp-1-1': 'cmrp/station-1/lesson-cmrp-1-1.mp3',

  // كورس CMRP — المحطة 2
  'lesson-cmrp-2-1': 'cmrp/station-2/lesson-cmrp-2-1.mp3',
  'lesson-cmrp-2-2': 'cmrp/station-2/lesson-cmrp-2-2.mp3',

  // كورس CMRP — المحطة 3
  'lesson-cmrp-3-1': 'cmrp/station-3/lesson-cmrp-3-1.mp3',
  'lesson-cmrp-3-2': 'cmrp/station-3/lesson-cmrp-3-2.mp3',
  'lesson-cmrp-3-3': 'cmrp/station-3/lesson-cmrp-3-3.mp3',

  // كورس CMRP — المحطة 4
  'lesson-cmrp-4-2': 'cmrp/station-4/lesson-cmrp-4-2.mp3',
  'lesson-cmrp-4-3': 'cmrp/station-4/lesson-cmrp-4-3.mp3',
};

/**
 * الحصول على رابط الملف الصوتي لدرس معين (سواء كان محلياً أو من Cloudflare R2)
 */
export function getLessonAudioUrl(lessonId: string, customBaseUrl?: string): string | null {
  const relativePath = audioLessons[lessonId];
  if (!relativePath) return null;

  const base = customBaseUrl ? customBaseUrl.replace(/\/$/, '') : '/audio';
  return `${base}/${relativePath}`;
}
