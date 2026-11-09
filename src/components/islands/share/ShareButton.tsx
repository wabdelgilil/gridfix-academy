import type { Language } from '../../../i18n/ui';
import { translate } from '../../../i18n/translations';

interface ShareButtonProps {
  lang: Language;
  onClick: () => void;
}

export default function ShareButton({ lang, onClick }: ShareButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-xl border border-brand-200/90 bg-white/90 px-3 py-1.5 text-xs font-bold text-brand-700 shadow-2xs backdrop-blur-xs transition hover:bg-brand-50 hover:border-brand-300 focus-visible:outline-2 focus-visible:outline-brand-500 cursor-pointer dark:border-slate-700 dark:bg-slate-800/90 dark:text-brand-300 dark:hover:bg-slate-700"
      title={translate(lang, 'share.button')}
    >
      <svg
        className="h-3.5 w-3.5 text-brand-500 dark:text-brand-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
      <span>{translate(lang, 'share.button')}</span>
    </button>
  );
}
