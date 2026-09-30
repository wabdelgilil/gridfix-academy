import { useState, useEffect } from 'react';
import { translate, type TranslationKey } from '../../i18n/translations';
import { dirs, type Language } from '../../i18n/ui';
import { courses } from '../../data/courses';
import { curriculum } from '../../data/curriculum';

const COURSES = courses.map((c) => ({ id: c.id, label: c.code, icon: c.icon }));

function firstStationId(courseId: string): string {
  const stations = curriculum
    .filter((s) => (s.courseId ?? 'cfm') === courseId && s.status === 'live')
    .sort((a, b) => a.number - b.number);
  return stations[0]?.id ?? 'station-0';
}

type Theme = 'light' | 'dark';

function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem('cfm-theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {}
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export default function SiteHeader() {
  const [lang, setLang] = useState<Language>('ar');
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState<string>('');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(getStoredTheme());
    const stored = localStorage.getItem('cfm-lang');
    if (stored === 'en' || stored === 'ar') setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('cfm-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dirs[lang];
    localStorage.setItem('cfm-lang', lang);
    window.dispatchEvent(new CustomEvent('cfm-lang-changed', { detail: { lang } }));
  }, [lang]);

  useEffect(() => {
    const first = window.location.pathname.split('/')[1];
    if (COURSES.some((c) => c.id === first)) setCourse(first);
    else setCourse('');
  }, []);

  const t = (key: TranslationKey) => translate(lang, key);

  const navKeys: { key: TranslationKey; href: string }[] = course
    ? [
        { key: 'nav.stations', href: `/${course}/stations/${firstStationId(course)}` },
        { key: 'nav.map', href: `/${course}/map` },
        { key: 'nav.exam', href: `/${course}/exam` },
        { key: 'nav.glossary', href: `/${course}/glossary` },
      ]
    : [
        { key: 'nav.courses', href: '/' },
      ];

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="group flex items-center gap-2.5">
          <img
            src="/favicon.svg"
            alt="GridFix Academy"
            width="34"
            height="34"
            className="transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-lg font-bold tracking-tight text-ink-900 dark:text-white">
            <span className="text-[#1482db]">GridFix</span> Academy
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navKeys.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-600 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-brand-400"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {course && (
            <a
              href="/"
              className="chip hidden cursor-pointer bg-ink-900 text-brand-100 transition hover:bg-ink-800 sm:inline-flex dark:bg-slate-700 dark:hover:bg-slate-600"
              aria-label={t('header.chooseCourse')}
            >
              {COURSES.find((c) => c.id === course)?.icon} {COURSES.find((c) => c.id === course)?.label} {t('header.switchCourse')}
            </a>
          )}
          <a
            href="https://gridfix.net"
            target="_blank"
            rel="noopener"
            className="group hidden items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-3 py-1.5 text-xs font-semibold text-[#0f6fc0] shadow-2xs transition-all hover:border-blue-400 hover:bg-blue-100 hover:shadow-xs sm:inline-flex dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-900/40"
            title={lang === 'ar' ? 'استكشف نظام إدارة الصيانة والمرافق الذكي GridFix CMMS' : 'Explore GridFix Smart CMMS Platform'}
          >
            <span className="flex h-2 w-2 rounded-full bg-[#1482db] animate-pulse"></span>
            <span>{t('header.poweredBy')}</span>
            <span className="text-[11px] text-blue-400 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">↗</span>
          </a>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-search'))}
            className="chip cursor-pointer bg-slate-100 text-ink-600 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            aria-label={lang === 'ar' ? 'بحث (Ctrl+K)' : 'Search (Ctrl+K)'}
            title={lang === 'ar' ? 'بحث (Ctrl+K)' : 'Search (Ctrl+K)'}
          >
            <span>🔍</span>
            <span className="hidden text-xs text-ink-400 sm:inline">Ctrl+K</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="chip cursor-pointer bg-slate-100 text-ink-600 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            aria-label={theme === 'dark' ? t('header.themeLight') : t('header.themeDark')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            type="button"
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="chip cursor-pointer bg-slate-100 text-ink-600 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            aria-label={t('header.changeLang')}
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-ink-600 md:hidden dark:text-slate-300"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 px-4 py-2 md:hidden dark:border-slate-700">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              window.dispatchEvent(new CustomEvent('open-search'));
            }}
            className="mb-2 flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-ink-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <span className="flex items-center gap-2">
              <span>🔍</span>
              <span>{lang === 'ar' ? 'بحث في المنصة...' : 'Search academy...'}</span>
            </span>
            <span className="text-xs text-ink-400">Ctrl+K</span>
          </button>
          {course && (
            <a href="/" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-slate-800">
              {t('nav.courses')}
            </a>
          )}
          {navKeys.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {t(item.key)}
            </a>
          ))}
          <div className="mt-2 border-t border-slate-100 pt-2 dark:border-slate-800">
            <a
              href="https://gridfix.net"
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50/90 px-3 py-2.5 text-xs font-bold text-[#0f6fc0] transition-colors hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#1482db] animate-pulse"></span>
                <span>{t('header.poweredBy')}</span>
              </span>
              <span>↗</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
