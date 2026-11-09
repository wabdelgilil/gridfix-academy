import type { Language } from '../../../i18n/ui';
import { translate } from '../../../i18n/translations';
import type { SocialShareUrls } from './shareUtils';

interface ShareCardProps {
  lang: Language;
  activePoints: string[];
  socialUrls: SocialShareUrls;
  fullShareText: string;
  copiedType: 'none' | 'full' | 'url';
  onCopy: (text: string, type: 'full' | 'url') => void;
  onNativeShare: () => void;
}

export default function ShareCard({
  lang,
  activePoints,
  socialUrls,
  fullShareText,
  copiedType,
  onCopy,
  onNativeShare,
}: ShareCardProps) {
  return (
    <div className="rounded-2xl border border-brand-200/80 bg-gradient-to-br from-brand-50/70 via-white to-amber-50/30 p-6 shadow-xs transition-all hover:shadow-md dark:border-slate-700 dark:from-slate-800/90 dark:via-slate-800/70 dark:to-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-xl text-brand-600 dark:bg-brand-400/20 dark:text-brand-300">
            💡
          </span>
          <div>
            <h3 className="text-base font-bold text-ink-900 dark:text-slate-100">
              {translate(lang, 'share.cardTitle')}
            </h3>
            <p className="text-xs text-ink-600 dark:text-slate-400">
              {translate(lang, 'share.cardSubtitle')}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onNativeShare}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-brand-500 cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span>{translate(lang, 'share.button')}</span>
        </button>
      </div>

      {/* The actual knowledge points displayed inside the card */}
      {activePoints.length > 0 && (
        <div className="rounded-xl border border-brand-100 bg-white/90 p-4 mb-4 dark:border-slate-700/60 dark:bg-slate-900/60">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2 flex items-center gap-1.5">
            <span>📌</span>
            <span>{lang === 'ar' ? 'فائدة مهنية مستخلصة من الدرس:' : 'Key professional insight:'}</span>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-ink-900 dark:text-slate-200">
            {activePoints.slice(0, 3).map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-brand-500 font-bold shrink-0 mt-0.5">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Quick Social & Copy Bar */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-brand-100 dark:border-slate-700/50">
        <a
          href={socialUrls.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700 cursor-pointer shadow-2xs"
        >
          <span>💬</span>
          <span>{translate(lang, 'share.whatsapp')}</span>
        </a>

        <a
          href={socialUrls.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#0077b5] px-3 py-1.5 text-xs font-semibold text-white transition hover:brightness-110 cursor-pointer shadow-2xs"
        >
          <span>💼</span>
          <span>{translate(lang, 'share.linkedin')}</span>
        </a>

        <a
          href={socialUrls.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-black cursor-pointer shadow-2xs dark:bg-slate-700 dark:hover:bg-slate-600"
        >
          <span>🐦</span>
          <span>{translate(lang, 'share.x')}</span>
        </a>

        <a
          href={socialUrls.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#229ed9] px-3 py-1.5 text-xs font-semibold text-white transition hover:brightness-110 cursor-pointer shadow-2xs"
        >
          <span>✈️</span>
          <span>{translate(lang, 'share.telegram')}</span>
        </a>

        <button
          type="button"
          onClick={() => onCopy(fullShareText, 'full')}
          className="ms-auto inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-ink-900 transition hover:bg-slate-50 cursor-pointer dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          <span>{copiedType === 'full' ? '✓' : '📋'}</span>
          <span>
            {copiedType === 'full' ? translate(lang, 'share.copied') : translate(lang, 'share.copyText')}
          </span>
        </button>
      </div>
    </div>
  );
}
