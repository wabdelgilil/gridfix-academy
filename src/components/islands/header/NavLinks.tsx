import type { Language } from '../../../i18n/ui';
import { translate } from '../../../i18n/translations';
import type { NavItem } from './headerUtils';

interface NavLinksProps {
  navKeys: NavItem[];
  lang: Language;
}

export default function NavLinks({ navKeys, lang }: NavLinksProps) {
  return (
    <nav className="hidden items-center gap-1 md:flex">
      {navKeys.map((item) => (
        <a
          key={item.key}
          href={item.href}
          className="rounded-lg px-3 py-2 text-sm font-medium text-ink-600 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-brand-400"
        >
          {translate(lang, item.key)}
        </a>
      ))}
    </nav>
  );
}
