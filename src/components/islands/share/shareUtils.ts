import type { Language } from '../../../i18n/ui';

export interface SocialShareUrls {
  whatsapp: string;
  linkedIn: string;
  x: string;
  telegram: string;
  qrImage: string;
}

export function buildTweetText(
  courseTitle: string,
  lessonNumber: string,
  lessonTitle: string,
  firstPoint: string,
  url: string,
  lang: Language
): string {
  if (lang === 'ar') {
    return `💡 معلومة في ${courseTitle}:\n• ${firstPoint}\n\n📖 درس: ${lessonNumber} ${lessonTitle}\n🔗 ${url}`;
  }
  return `💡 Insight in ${courseTitle}:\n• ${firstPoint}\n\n📖 Lesson: ${lessonNumber} ${lessonTitle}\n🔗 ${url}`;
}

export function generateSocialShareUrls(
  fullShareText: string,
  tweetText: string,
  url: string
): SocialShareUrls {
  return {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(fullShareText)}`,
    x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`,
    linkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(fullShareText)}`,
    qrImage: url
      ? `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}`
      : '',
  };
}
