export const languages = {
  ar: 'العربية',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'ar';

export const dirs: Record<Language, 'rtl' | 'ltr'> = {
  ar: 'rtl',
  en: 'ltr',
};

export function getLangFromStorage(): Language {
  if (typeof window === 'undefined') return defaultLang;
  const stored = window.localStorage.getItem('cfm-lang');
  return stored === 'en' ? 'en' : 'ar';
}