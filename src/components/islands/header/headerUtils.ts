import { courses } from '../../../data/courses';
import { curriculum } from '../../../data/curriculum';
import type { TranslationKey } from '../../../i18n/translations';

export const COURSES = courses.map((c) => ({ id: c.id, label: c.code, icon: c.icon }));

export function firstStationId(courseId: string): string {
  const stations = curriculum
    .filter((s) => (s.courseId ?? 'cfm') === courseId && s.status === 'live')
    .sort((a, b) => a.number - b.number);
  return stations[0]?.id ?? 'station-0';
}

export interface NavItem {
  key: TranslationKey;
  href: string;
}

export function getNavItems(course: string): NavItem[] {
  if (course) {
    return [
      { key: 'nav.stations', href: `/${course}/stations/${firstStationId(course)}/` },
      { key: 'nav.map', href: `/${course}/map/` },
      { key: 'nav.exam', href: `/${course}/exam/` },
      { key: 'nav.glossary', href: `/${course}/glossary/` },
    ];
  }
  return [{ key: 'nav.courses', href: '/' }];
}
