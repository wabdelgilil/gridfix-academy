/**
 * سجل الدروس الصوتية المتوفرة ومساراتها الهرمية (يدعم لغات متعددة: العربية والإنجليزية).
 * عند توفر تسجيل صوتي جديد، يُضاف مساره للغة المعنية.
 */
export interface LessonAudioTrack {
  ar?: string;
  en?: string;
}

export const audioLessons: Record<string, LessonAudioTrack> = {
  // كورس CMRP — المحطة 1: فهم الأصل وآليات الانهيار
  'lesson-cmrp-1-1': { ar: 'cmrp/station-1/lesson-cmrp-1-1.mp3' },
  'lesson-cmrp-1-2': { ar: 'cmrp/station-1/lesson-cmrp-1-2.mp3' },

  // كورس CMRP — المحطة 2: الاستراتيجية الفنية وحماية الأصل
  'lesson-cmrp-2-1': { ar: 'cmrp/station-2/lesson-cmrp-2-1.mp3' },
  'lesson-cmrp-2-2': { ar: 'cmrp/station-2/lesson-cmrp-2-2.mp3' },
  'lesson-cmrp-2-3': { ar: 'cmrp/station-2/lesson-cmrp-2-3.mp3' },
  'lesson-cmrp-2-4': { ar: 'cmrp/station-2/lesson-cmrp-2-4.mp3' },

  // كورس CMRP — المحطة 3: الأصل في خط الإنتاج والعمليات
  'lesson-cmrp-3-1': { ar: 'cmrp/station-3/lesson-cmrp-3-1.mp3' },
  'lesson-cmrp-3-2': { ar: 'cmrp/station-3/lesson-cmrp-3-2.mp3' },
  'lesson-cmrp-3-3': { ar: 'cmrp/station-3/lesson-cmrp-3-3.mp3' },

  // كورس CMRP — المحطة 4: محرك التنفيذ اليومي وإدارة الأعمال
  'lesson-cmrp-4-1': { ar: 'cmrp/station-4/lesson-cmrp-4-1.mp3' },
  'lesson-cmrp-4-2': { ar: 'cmrp/station-4/lesson-cmrp-4-2.mp3' },
  'lesson-cmrp-4-3': { ar: 'cmrp/station-4/lesson-cmrp-4-3.mp3' },
  'lesson-cmrp-4-4': { ar: 'cmrp/station-4/lesson-cmrp-4-4.mp3' },
  'lesson-cmrp-4-5': { ar: 'cmrp/station-4/lesson-cmrp-4-5.mp3' },

  // كورس CMRP — المحطة 5: الكادر البشري والقيادة المؤسسية
  'lesson-cmrp-5-1': { ar: 'cmrp/station-5/lesson-cmrp-5-1.mp3' },
  'lesson-cmrp-5-2': { ar: 'cmrp/station-5/lesson-cmrp-5-2.mp3' },
  'lesson-cmrp-5-3': { ar: 'cmrp/station-5/lesson-cmrp-5-3.mp3' },

  // كورس CMRP — المحطة 6: لغة المال والإدارة العليا
  'lesson-cmrp-6-1': { ar: 'cmrp/station-6/lesson-cmrp-6-1.mp3' },
};

export interface LessonAudioResult {
  url: string | null;
  audioLang: 'ar' | 'en' | null;
  isFallback: boolean;
}

/**
 * الحصول على رابط الملف الصوتي لدرس معين بناءً على لغة الواجهة وموقع الملفات
 */
export function getLessonAudioUrl(
  lessonId: string,
  lang: 'ar' | 'en' = 'ar',
  customBaseUrl?: string
): LessonAudioResult {
  const track = audioLessons[lessonId];
  if (!track) {
    return { url: null, audioLang: null, isFallback: false };
  }

  const base = customBaseUrl ? customBaseUrl.replace(/\/$/, '') : '/audio';

  // 1. If audio is available in the requested language
  if (track[lang]) {
    return {
      url: `${base}/${track[lang]}`,
      audioLang: lang,
      isFallback: false,
    };
  }

  // 2. Fallback to Arabic audio if English is requested but not yet produced
  if (track.ar) {
    return {
      url: `${base}/${track.ar}`,
      audioLang: 'ar',
      isFallback: lang !== 'ar',
    };
  }

  return { url: null, audioLang: null, isFallback: false };
}
