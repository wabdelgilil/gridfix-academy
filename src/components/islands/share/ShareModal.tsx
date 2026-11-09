import { useState, useEffect } from 'react';
import type { Language } from '../../../i18n/ui';
import { translate } from '../../../i18n/translations';
import type { SocialShareUrls } from './shareUtils';

interface ShareModalProps {
  dialogId: string;
  lang: Language;
  fullShareText: string;
  currentUrl: string;
  socialUrls: SocialShareUrls;
  copiedType: 'none' | 'full' | 'url';
  onCopy: (text: string, type: 'full' | 'url') => void;
  onClose: () => void;
}

export default function ShareModal({
  dialogId,
  lang,
  fullShareText,
  currentUrl,
  socialUrls,
  copiedType,
  onCopy,
  onClose,
}: ShareModalProps) {
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby={dialogId}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-800 animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-xl">💡</span>
            <h2 id={dialogId} className="text-base font-bold text-ink-900 dark:text-slate-100">
              {translate(lang, 'share.title')}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200 cursor-pointer transition"
            aria-label={translate(lang, 'share.close')}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Live Preview Box */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {translate(lang, 'share.preview')}
            </label>
            <button
              type="button"
              onClick={() => onCopy(fullShareText, 'full')}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 flex items-center gap-1 cursor-pointer"
            >
              <span>{copiedType === 'full' ? '✓' : '📋'}</span>
              <span>
                {copiedType === 'full' ? translate(lang, 'share.copied') : translate(lang, 'share.copyText')}
              </span>
            </button>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs font-mono leading-relaxed text-ink-900 whitespace-pre-wrap dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 select-all">
            {fullShareText}
          </div>
        </div>

        {/* Social Platforms Grid */}
        <div className="mt-5">
          <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
            {lang === 'ar' ? 'مشاركة مباشرة عبر المنصات:' : 'Direct platform share:'}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <a
              href={socialUrls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 px-3 text-xs font-bold text-white transition hover:bg-emerald-700 cursor-pointer shadow-xs"
            >
              <span>💬</span>
              <span>{translate(lang, 'share.whatsapp')}</span>
            </a>

            <a
              href={socialUrls.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#0077b5] py-2.5 px-3 text-xs font-bold text-white transition hover:brightness-110 cursor-pointer shadow-xs"
            >
              <span>💼</span>
              <span>{translate(lang, 'share.linkedin')}</span>
            </a>

            <a
              href={socialUrls.x}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 px-3 text-xs font-bold text-white transition hover:bg-black cursor-pointer shadow-xs dark:bg-slate-700 dark:hover:bg-slate-600"
            >
              <span>🐦</span>
              <span>{translate(lang, 'share.x')}</span>
            </a>

            <a
              href={socialUrls.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#229ed9] py-2.5 px-3 text-xs font-bold text-white transition hover:brightness-110 cursor-pointer shadow-xs"
            >
              <span>✈️</span>
              <span>{translate(lang, 'share.telegram')}</span>
            </a>
          </div>
        </div>

        {/* Secondary Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-700">
          <button
            type="button"
            onClick={() => onCopy(currentUrl, 'url')}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white py-2 px-3 text-xs font-bold text-ink-900 transition hover:bg-slate-50 cursor-pointer dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <span>{copiedType === 'url' ? '✓' : '🔗'}</span>
            <span>
              {copiedType === 'url' ? translate(lang, 'share.copied') : translate(lang, 'share.copyLink')}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setShowQr((prev) => !prev)}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white py-2 px-3 text-xs font-bold text-ink-900 transition hover:bg-slate-50 cursor-pointer dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <span>📱</span>
            <span>{translate(lang, 'share.qrCode')}</span>
          </button>
        </div>

        {/* QR Code preview when toggled */}
        {showQr && socialUrls.qrImage && (
          <div className="mt-4 flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 text-center dark:border-slate-700 dark:bg-slate-900 animate-fade-in">
            <img
              src={socialUrls.qrImage}
              alt="QR Code"
              width={160}
              height={160}
              className="rounded-lg bg-white p-2 shadow-xs"
              loading="lazy"
            />
            <span className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {lang === 'ar'
                ? 'امسح الرمز بكاميرا الجوال لفتح الدرس والمشاركة'
                : 'Scan code with camera to open lesson & share'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
