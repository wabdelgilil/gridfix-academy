import { useState, useEffect, useCallback } from 'react';

export type Theme = 'light' | 'dark';

export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = localStorage.getItem('cfm-theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {}

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function setSiteTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('cfm-theme', theme);
  } catch {}

  document.documentElement.classList.toggle('dark', theme === 'dark');

  const event = new CustomEvent('cfm-theme-changed', { detail: { theme } });
  window.dispatchEvent(event);
  document.dispatchEvent(event);
}

export function useTheme(): [Theme, () => void, (theme: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    setThemeState(getStoredTheme());

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ theme?: Theme }>).detail;
      if (detail?.theme === 'dark' || detail?.theme === 'light') {
        setThemeState(detail.theme);
      }
    };

    window.addEventListener('cfm-theme-changed', onChange);
    document.addEventListener('cfm-theme-changed', onChange);
    return () => {
      window.removeEventListener('cfm-theme-changed', onChange);
      document.removeEventListener('cfm-theme-changed', onChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light';
    setThemeState(next);
    setSiteTheme(next);
  }, [theme]);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    setSiteTheme(nextTheme);
  }, []);

  return [theme, toggleTheme, setTheme];
}
