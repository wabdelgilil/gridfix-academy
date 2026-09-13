import { useState, useEffect } from 'react';
import { translate, type TranslationKey } from '../../i18n/translations';
import { dirs, type Language } from '../../i18n/ui';

const navKeys: { key: TranslationKey; href: string }[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.stations', href: '/stations/station-0' },
  { key: 'nav.glossary', href: '/glossary' },
  { key: 'nav.exam', href: '/exam' },
  { key: 'nav.map', href: '/map' },
];

export default function SiteHeader() {
  const [lang, setLang] = useState<Language>('ar');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cfm-lang');
    if (stored === 'en' || stored === 'ar') setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dirs[lang];
    localStorage.setItem('cfm-lang', lang);
  }, [lang]);

  const t = (key: TranslationKey) => translate(lang, key);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2.5">
          <img src="/favicon.svg" alt="logo" width="34" height="34" />
          <span className="text-lg font-bold text-ink-900">{t('site.name')}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navKeys.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://gridfix.net"
            target="_blank"
            rel="noopener"
            className="chip hidden cursor-pointer bg-ink-900 text-teal-100 transition hover:bg-ink-800 sm:inline-flex"
            aria-label="GridFix"
          >
            ⚡ مدعوم من GridFix
          </a>
          <button
            type="button"
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="chip cursor-pointer bg-slate-100 text-ink-600 transition hover:bg-slate-200"
            aria-label="Change language"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-ink-600 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 px-4 py-2 md:hidden">
          {navKeys.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-700"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}