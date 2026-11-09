import type { Language } from '../../../i18n/ui';
import type { Theme } from '../../../lib/useTheme';
import { translate } from '../../../i18n/translations';
import { COURSES } from './headerUtils';

interface HeaderControlsProps {
  lang: Language;
  theme: Theme;
  course: string;
  isMenuOpen: boolean;
  onToggleTheme: () => void;
  onToggleLang: () => void;
  onToggleMenu: () => void;
  onOpenAudioModal: () => void;
  onOpenSearch: () => void;
}

export default function HeaderControls({
  lang,
  theme,
  course,
  isMenuOpen,
  onToggleTheme,
  onToggleLang,
  onToggleMenu,
  onOpenAudioModal,
  onOpenSearch,
}: HeaderControlsProps) {
  const currentCourse = COURSES.find((c) => c.id === course);

  return (
    <div className="flex items-center gap-2">
      {/* Drive & Learn Audio CTA */}
      <button
        type="button"
        onClick={onOpenAudioModal}
        className="group inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50/90 px-2.5 py-1 text-xs font-bold text-emerald-800 shadow-2xs transition-all hover:scale-105 hover:border-emerald-400 hover:bg-emerald-100 hover:shadow-xs dark:border-emerald-700/60 dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900/60 cursor-pointer"
        title={
          lang === 'ar'
            ? 'ادرس أثناء القيادة — اختر الكورس والدرس للاستماع'
            : 'Drive & Learn — Choose course and lesson to listen'
        }
        aria-label={lang === 'ar' ? 'ادرس أثناء القيادة' : 'Drive & Learn'}
      >
        <span className="text-sm transition-transform group-hover:scale-110">🚗</span>
        <span className="hidden sm:inline">
          {lang === 'ar' ? 'ادرس أثناء القيادة' : 'Drive & Learn'}
        </span>
        <span className="sm:hidden">{lang === 'ar' ? 'استمع' : 'Audio'}</span>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
      </button>

      {/* Switch Course Chip */}
      {course && currentCourse && (
        <a
          href="/"
          className="chip hidden cursor-pointer bg-ink-900 text-brand-100 transition hover:bg-ink-800 sm:inline-flex dark:bg-slate-700 dark:hover:bg-slate-600"
          aria-label={translate(lang, 'header.chooseCourse')}
        >
          {currentCourse.icon} {currentCourse.label} {translate(lang, 'header.switchCourse')}
        </a>
      )}

      {/* GridFix Sponsor Link */}
      <a
        href="https://gridfix.net"
        target="_blank"
        rel="noopener"
        className="group hidden items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-3 py-1.5 text-xs font-semibold text-[#0f6fc0] shadow-2xs transition-all hover:border-blue-400 hover:bg-blue-100 hover:shadow-xs sm:inline-flex dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-900/40"
        title={
          lang === 'ar'
            ? 'استكشف نظام إدارة الصيانة والمرافق الذكي GridFix CMMS'
            : 'Explore GridFix Smart CMMS Platform'
        }
      >
        <span className="flex h-2 w-2 rounded-full bg-[#1482db] animate-pulse"></span>
        <span>{translate(lang, 'header.poweredBy')}</span>
        <span className="text-[11px] text-blue-400 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
          ↗
        </span>
      </a>

      {/* Search trigger */}
      <button
        type="button"
        onClick={onOpenSearch}
        className="chip cursor-pointer bg-slate-100 text-ink-600 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        aria-label={lang === 'ar' ? 'بحث (Ctrl+K)' : 'Search (Ctrl+K)'}
        title={lang === 'ar' ? 'بحث (Ctrl+K)' : 'Search (Ctrl+K)'}
      >
        <span>🔍</span>
        <span className="hidden text-xs text-ink-400 sm:inline">Ctrl+K</span>
      </button>

      {/* Theme toggle */}
      <button
        type="button"
        onClick={onToggleTheme}
        className="chip cursor-pointer bg-slate-100 text-ink-600 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        aria-label={theme === 'dark' ? translate(lang, 'header.themeLight') : translate(lang, 'header.themeDark')}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      {/* Language toggle */}
      <button
        type="button"
        onClick={onToggleLang}
        className="chip cursor-pointer bg-slate-100 text-ink-600 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        aria-label={translate(lang, 'header.changeLang')}
      >
        {lang === 'ar' ? 'English' : 'العربية'}
      </button>

      {/* Mobile menu hamburger toggle */}
      <button
        type="button"
        className="rounded-lg p-2 text-ink-600 md:hidden dark:text-slate-300 cursor-pointer"
        onClick={onToggleMenu}
        aria-label="Menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </div>
  );
}
