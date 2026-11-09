import { useEffect, useState, useCallback } from 'react';
import type { Language } from '../i18n/ui';
import { getLangFromStorage, dirs, defaultLang } from '../i18n/ui';

function getInitialLang(): Language {
  try {
    return getLangFromStorage();
  } catch {
    return defaultLang;
  }
}

/**
 * ضبط لغة المنصة على مستوى المستند والتخزين المحلي وإشعار جميع الجزر النشطة
 */
export function setSiteLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('cfm-lang', lang);
  } catch {}

  document.documentElement.lang = lang;
  document.documentElement.dir = dirs[lang];

  const event = new CustomEvent('cfm-lang-changed', { detail: { lang } });
  window.dispatchEvent(event);
  document.dispatchEvent(event);
}

/**
 * Hook لمتابعة اللغة الحالية وتحديث الواجهة عند تغييرها
 */
export default function useLang(): Language {
  const [lang, setLang] = useState<Language>(getInitialLang);

  useEffect(() => {
    setLang(getInitialLang());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ lang?: string }>).detail;
      if (detail?.lang === 'en' || detail?.lang === 'ar') {
        setLang(detail.lang);
      }
    };

    window.addEventListener('cfm-lang-changed', onChange);
    document.addEventListener('cfm-lang-changed', onChange);
    return () => {
      window.removeEventListener('cfm-lang-changed', onChange);
      document.removeEventListener('cfm-lang-changed', onChange);
    };
  }, []);

  return lang;
}

/**
 * Hook متكامل لقراءة وتعديل لغة المنصة
 */
export function useLanguage(): [Language, (lang: Language) => void] {
  const lang = useLang();
  const updateLang = useCallback((nextLang: Language) => {
    setSiteLanguage(nextLang);
  }, []);

  return [lang, updateLang];
}