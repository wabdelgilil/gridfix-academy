import type { Language } from '../../../i18n/ui';
import { translate } from '../../../i18n/translations';
import type { NavItem } from './headerUtils';

interface MobileMenuProps {
  navKeys: NavItem[];
  course: string;
  lang: Language;
  onClose: () => void;
  onOpenAudioModal: () => void;
  onOpenSearch: () => void;
}

export default function MobileMenu({
  navKeys,
  course,
  lang,
  onClose,
  onOpenAudioModal,
  onOpenSearch,
}: MobileMenuProps) {
  return (
    <nav className="border-t border-slate-200 px-4 py-2 md:hidden dark:border-slate-700">
      {/* Audio Drive Button */}
      <button
        type="button"
        onClick={() => {
          onClose();
          onOpenAudioModal();
        }}
        className="mb-2 flex w-full items-center justify-between rounded-xl border border-emerald-300 bg-emerald-50/90 px-3 py-2.5 text-xs font-bold text-emerald-900 transition-colors hover:bg-emerald-100 dark:border-emerald-700/60 dark:bg-emerald-950/50 dark:text-emerald-300 cursor-pointer"
      >
        <span className="flex items-center gap-2">
          <span className="text-base">🚗</span>
          <span>
            {lang === 'ar'
              ? 'ادرس أثناء القيادة (اختيار الكورس والدرس)'
              : 'Drive & Learn (Choose Course & Lesson)'}
          </span>
        </span>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
      </button>

      {/* Search Bar Trigger */}
      <button
        type="button"
        onClick={() => {
          onClose();
          onOpenSearch();
        }}
        className="mb-2 flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-ink-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer"
      >
        <span className="flex items-center gap-2">
          <span>🔍</span>
          <span>{lang === 'ar' ? 'بحث في المنصة...' : 'Search academy...'}</span>
        </span>
        <span className="text-xs text-ink-400">Ctrl+K</span>
      </button>

      {/* Choose/Switch Course */}
      {course && (
        <a
          href="/"
          onClick={onClose}
          className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {translate(lang, 'nav.courses')}
        </a>
      )}

      {/* Course Navigation Links */}
      {navKeys.map((item) => (
        <a
          key={item.key}
          href={item.href}
          onClick={onClose}
          className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {translate(lang, item.key)}
        </a>
      ))}

      {/* Sponsor Link */}
      <div className="mt-2 border-t border-slate-100 pt-2 dark:border-slate-800">
        <a
          href="https://gridfix.net"
          target="_blank"
          rel="noopener"
          onClick={onClose}
          className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50/90 px-3 py-2.5 text-xs font-bold text-[#0f6fc0] transition-colors hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300"
        >
          <span className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#1482db] animate-pulse"></span>
            <span>{translate(lang, 'header.poweredBy')}</span>
          </span>
          <span>↗</span>
        </a>
      </div>
    </nav>
  );
}
