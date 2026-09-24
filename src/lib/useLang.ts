import { useEffect, useState } from 'react';
import type { Language } from '../i18n/ui';
import { getLangFromStorage } from '../i18n/ui';

function getInitialLang(): Language {
  try {
    return getLangFromStorage();
  } catch {
    return 'ar';
  }
}

export default function useLang(): Language {
  const [lang, setLang] = useState<Language>('ar');
  useEffect(() => {
    setLang(getInitialLang());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ lang?: string }>).detail;
      if (detail?.lang === 'en' || detail?.lang === 'ar') setLang(detail.lang);
    };
    window.addEventListener('cfm-lang-changed', onChange);
    return () => window.removeEventListener('cfm-lang-changed', onChange);
  }, []);
  return lang;
}