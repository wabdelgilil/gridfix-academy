import { useState, useEffect, useId, useCallback } from 'react';
import useLang from '../../../lib/useLang';
import { copyTextToClipboard } from '../../../lib/clipboard';
import { buildShareMessage } from '../../../lib/lessonSummary';
import { buildTweetText, generateSocialShareUrls } from './shareUtils';
import ShareModal from './ShareModal';
import ShareCard from './ShareCard';
import ShareButton from './ShareButton';

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

  const firstPoint = activePoints.length > 0 ? activePoints[0] : activeLessonTitle;
  const tweetText = buildTweetText(
    activeCourseTitle,
    lessonNumber,
    activeLessonTitle,
    firstPoint,
    currentUrl,
    lang
  );

  const socialUrls = generateSocialShareUrls(fullShareText, tweetText, currentUrl);

  const handleCopy = useCallback(async (text: string, type: 'full' | 'url') => {
    const success = await copyTextToClipboard(text);
    if (success) {
      setCopiedType(type);
      setTimeout(() => setCopiedType('none'), 2200);
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

  return (
    <>
      {variant === 'card' ? (
        <ShareCard
          lang={lang}
          activePoints={activePoints}
          socialUrls={socialUrls}
          fullShareText={fullShareText}
          copiedType={copiedType}
          onCopy={handleCopy}
          onNativeShare={handleNativeShare}
        />
      ) : (
        <ShareButton lang={lang} onClick={handleNativeShare} />
      )}

      {isOpen && (
        <ShareModal
          dialogId={dialogId}
          lang={lang}
          fullShareText={fullShareText}
          currentUrl={currentUrl}
          socialUrls={socialUrls}
          copiedType={copiedType}
          onCopy={handleCopy}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
