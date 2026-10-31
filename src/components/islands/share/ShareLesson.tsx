import { useState, useEffect, useId, useCallback } from 'react';
import useLang from '../../../lib/useLang';
import { translate } from '../../../i18n/translations';
import { buildShareMessage } from '../../../lib/lessonSummary';

interface Props {
  course: string;
  courseTitle: string;
  courseTitleEn: string;
  stationId: string;
  stationTitle: string;
  stationTitleEn: string;
  lessonId: string;
  lessonNumber: string;
  lessonTitle: string;
  lessonTitleEn: string;
  summaryPointsAr: string[];
  summaryPointsEn: string[];
  variant?: 'button' | 'card';
}

export default function ShareLesson({
  courseTitle,
  courseTitleEn,
  stationTitle,
  stationTitleEn,
  lessonNumber,
  lessonTitle,
  lessonTitleEn,
  summaryPointsAr,
  summaryPointsEn,
  variant = 'button',
}: Props) {
  const lang = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [copiedType, setCopiedType] = useState<'none' | 'full' | 'url'>('none');
  const [showQr, setShowQr] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const dialogId = useId();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const activeCourseTitle = lang === 'ar' ? courseTitle : courseTitleEn;
  const activeStationTitle = lang === 'ar' ? stationTitle : stationTitleEn;
  const activeLessonTitle = lang === 'ar' ? lessonTitle : lessonTitleEn;
  const activePoints = lang === 'ar' ? summaryPointsAr : summaryPointsEn;

  // Build the formatted knowledge message
  const fullShareText = buildShareMessage({
    lang,
    courseTitle: activeCourseTitle,
    stationTitle: activeStationTitle,
    lessonNumber,
    lessonTitle: activeLessonTitle,
    points: activePoints,
    url: currentUrl,
  });

  // Short snippet for Twitter / X character limit
  const firstPoint = activePoints.length > 0 ? activePoints[0] : activeLessonTitle;
  const tweetText =
    lang === 'ar'
      ? `💡 معلومة في ${activeCourseTitle}:\n• ${firstPoint}\n\n📖 درس: ${lessonNumber} ${activeLessonTitle}\n🔗 ${currentUrl}`
      : `💡 Insight in ${activeCourseTitle}:\n• ${firstPoint}\n\n📖 Lesson: ${lessonNumber} ${activeLessonTitle}\n🔗 ${currentUrl}`;

  const copyToClipboard = useCallback(async (text: string, type: 'full' | 'url') => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedType(type);
      setTimeout(() => setCopiedType('none'), 2200);
    } catch {
      // Fallback
    }
  }, []);

  const handleNativeShare = useCallback(async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${lessonNumber} ${activeLessonTitle}`,
          text: fullShareText,
          url: currentUrl,
        });
        return;
      } catch (err: unknown) {
        if ((err as Error)?.name === 'AbortError') return;
      }
    }
    setIsOpen(true);
  }, [lessonNumber, activeLessonTitle, fullShareText, currentUrl]);

  // Social URLs
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullShareText)}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(fullShareText)}`;

  // Close modal on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const qrImageUrl = currentUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(currentUrl)}`
    : '';

  // Render Card Variant (shown after lesson content)
  if (variant === 'card') {
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
            onClick={handleNativeShare}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-brand-500 cursor-pointer"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
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
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700 cursor-pointer shadow-2xs"
          >
            <span>💬</span>
            <span>{translate(lang, 'share.whatsapp')}</span>
          </a>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0077b5] px-3 py-1.5 text-xs font-semibold text-white transition hover:brightness-110 cursor-pointer shadow-2xs"
          >
            <span>💼</span>
            <span>{translate(lang, 'share.linkedin')}</span>
          </a>

          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-black cursor-pointer shadow-2xs dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            <span>🐦</span>
            <span>{translate(lang, 'share.x')}</span>
          </a>

          <a
            href={telegramUrl}
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
            onClick={() => copyToClipboard(fullShareText, 'full')}
            className="ms-auto inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-ink-900 transition hover:bg-slate-50 cursor-pointer dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <span>{copiedType === 'full' ? '✓' : '📋'}</span>
            <span>
              {copiedType === 'full' ? translate(lang, 'share.copied') : translate(lang, 'share.copyText')}
            </span>
          </button>
        </div>

        {/* Modal when user needs advanced sharing */}
        {isOpen && renderModal()}
      </div>
    );
  }

  // Render Button Variant (shown in lesson header)
  return (
    <>
      <button
        type="button"
        onClick={handleNativeShare}
        className="inline-flex items-center gap-1.5 rounded-xl border border-brand-200/90 bg-white/90 px-3 py-1.5 text-xs font-bold text-brand-700 shadow-2xs backdrop-blur-xs transition hover:bg-brand-50 hover:border-brand-300 focus-visible:outline-2 focus-visible:outline-brand-500 cursor-pointer dark:border-slate-700 dark:bg-slate-800/90 dark:text-brand-300 dark:hover:bg-slate-700"
        title={translate(lang, 'share.button')}
      >
        <svg className="h-3.5 w-3.5 text-brand-500 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        <span>{translate(lang, 'share.button')}</span>
      </button>

      {isOpen && renderModal()}
    </>
  );

  function renderModal() {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby={dialogId}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
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
              onClick={() => setIsOpen(false)}
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
                onClick={() => copyToClipboard(fullShareText, 'full')}
                className="text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 flex items-center gap-1 cursor-pointer"
              >
                <span>{copiedType === 'full' ? '✓' : '📋'}</span>
                <span>{copiedType === 'full' ? translate(lang, 'share.copied') : translate(lang, 'share.copyText')}</span>
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
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 px-3 text-xs font-bold text-white transition hover:bg-emerald-700 cursor-pointer shadow-xs"
              >
                <span>💬</span>
                <span>{translate(lang, 'share.whatsapp')}</span>
              </a>

              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0077b5] py-2.5 px-3 text-xs font-bold text-white transition hover:brightness-110 cursor-pointer shadow-xs"
              >
                <span>💼</span>
                <span>{translate(lang, 'share.linkedin')}</span>
              </a>

              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 px-3 text-xs font-bold text-white transition hover:bg-black cursor-pointer shadow-xs dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                <span>🐦</span>
                <span>{translate(lang, 'share.x')}</span>
              </a>

              <a
                href={telegramUrl}
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
              onClick={() => copyToClipboard(currentUrl, 'url')}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white py-2 px-3 text-xs font-bold text-ink-900 transition hover:bg-slate-50 cursor-pointer dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <span>{copiedType === 'url' ? '✓' : '🔗'}</span>
              <span>{copiedType === 'url' ? translate(lang, 'share.copied') : translate(lang, 'share.copyLink')}</span>
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
          {showQr && qrImageUrl && (
            <div className="mt-4 flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 text-center dark:border-slate-700 dark:bg-slate-900 animate-fade-in">
              <img
                src={qrImageUrl}
                alt="QR Code"
                width={160}
                height={160}
                className="rounded-lg bg-white p-2 shadow-xs"
                loading="lazy"
              />
              <span className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                {lang === 'ar' ? 'امسح الرمز بكاميرا الجوال لفتح الدرس والمشاركة' : 'Scan code with camera to open lesson & share'}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
