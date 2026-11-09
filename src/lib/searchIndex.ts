import { courses } from '../data/courses';
import { curriculum } from '../data/curriculum';

export interface SearchItem {
  kind: 'course' | 'station' | 'lesson';
  title: string;
  titleEn: string;
  subtitle?: string;
  subtitleEn?: string;
  href: string;
  category: string;
  categoryEn?: string;
}

export const KINDS = {
  course: { icon: '🎓', label: 'كورس', labelEn: 'Course' },
  station: { icon: '🗺', label: 'محطة', labelEn: 'Station' },
  lesson: { icon: '📖', label: 'درس', labelEn: 'Lesson' },
} as const;

/**
 * تسوية وتوحيد النصوص العربية للبحث المرن (إزالة التشكيل وتوحيد الهمزات والتاء المربوطة)
 */
export function normalizeArabic(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    // إزالة التشكيل والتنوين
    .replace(/[\u064B-\u065F\u0670]/g, '')
    // توحيد الألف بكافة أشكالها
    .replace(/[أإآ]/g, 'ا')
    // توحيد التاء المربوطة والهاء
    .replace(/ة/g, 'ه')
    // توحيد الألف المقصورة والياء
    .replace(/ى/g, 'ي')
    .trim();
}

/**
 * بناء فهرس البحث الكامل للمنصة من الكورسات والمحطات والدروس الحية
 */
export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // إضافة الكورسات
  for (const c of courses) {
    items.push({
      kind: 'course',
      title: c.title,
      titleEn: c.titleEn,
      subtitle: c.code,
      subtitleEn: c.code,
      href: `/${c.id}/`,
      category: c.code,
      categoryEn: c.code,
    });
  }

  // إضافة المحطات والدروس الحية
  for (const s of curriculum) {
    const courseId = s.courseId ?? 'cfm';
    if (s.status !== 'live') continue;

    items.push({
      kind: 'station',
      title: s.title,
      titleEn: s.titleEn,
      subtitle: s.title,
      subtitleEn: s.titleEn,
      href: `/${courseId}/stations/${s.id}/`,
      category: 'المحطات',
      categoryEn: 'Stations',
    });

    for (const l of s.lessons) {
      if (l.status !== 'live') continue;
      items.push({
        kind: 'lesson',
        title: l.title,
        titleEn: l.titleEn,
        subtitle: `${s.title} • ${l.number} • ${l.minutes} دقيقة`,
        subtitleEn: `${s.titleEn} • ${l.number} • ${l.minutes} min`,
        href: `/${courseId}/lessons/${l.id}/`,
        category: s.title,
        categoryEn: s.titleEn,
      });
    }
  }

  return items;
}

/**
 * تصفية عناصر البحث بمطابقة ذكية تدعم اللغتين العربية والإنجليزية
 */
export function filterSearchItems(
  items: SearchItem[],
  query: string
): SearchItem[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const rawLower = trimmed.toLowerCase();
  const normalizedAr = normalizeArabic(trimmed);

  return items.filter((item) => {
    // فحص إنجليزي أو لاتيني مباشر
    const inEn =
      item.titleEn.toLowerCase().includes(rawLower) ||
      (item.subtitleEn?.toLowerCase().includes(rawLower) ?? false) ||
      (item.categoryEn?.toLowerCase().includes(rawLower) ?? false);

    if (inEn) return true;

    // فحص عربي مسوّى
    const normTitle = normalizeArabic(item.title);
    const normSubtitle = normalizeArabic(item.subtitle ?? '');
    const normCategory = normalizeArabic(item.category);

    return (
      normTitle.includes(normalizedAr) ||
      normSubtitle.includes(normalizedAr) ||
      normCategory.includes(normalizedAr)
    );
  });
}
