export interface LessonSummaryTakeaways {
  arPoints: string[];
  enPoints: string[];
}

export function cleanMarkdown(text: string): string {
  return text
    .replace(/^-\s*/, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .trim();
}

export function extractLessonSummary(
  body?: string,
  fallbackAr?: string[],
  fallbackEn?: string[]
): LessonSummaryTakeaways {
  let arPoints: string[] = [];
  let enPoints: string[] = [];

  if (body) {
    const arMatch = body.match(/## (?:خلاصة|الخلاصة)([\s\S]*?)(?:<\/LangSection>|##|$)/);
    const enMatch = body.match(/## Summary([\s\S]*?)(?:<\/LangSection>|##|$)/);

    if (arMatch) {
      arPoints = arMatch[1]
        .trim()
        .split('\n')
        .filter((l) => l.trim().startsWith('-'))
        .map(cleanMarkdown)
        .filter((l) => l.length > 0);
    }

    if (enMatch) {
      enPoints = enMatch[1]
        .trim()
        .split('\n')
        .filter((l) => l.trim().startsWith('-'))
        .map(cleanMarkdown)
        .filter((l) => l.length > 0);
    }
  }

  if (arPoints.length === 0 && fallbackAr && fallbackAr.length > 0) {
    arPoints = fallbackAr.map(cleanMarkdown);
  }

  if (enPoints.length === 0 && fallbackEn && fallbackEn.length > 0) {
    enPoints = fallbackEn.map(cleanMarkdown);
  }

  return { arPoints, enPoints };
}

export function buildShareMessage(options: {
  lang: 'ar' | 'en';
  courseTitle: string;
  stationTitle: string;
  lessonNumber: string;
  lessonTitle: string;
  points: string[];
  url: string;
}): string {
  const { lang, courseTitle, stationTitle, lessonNumber, lessonTitle, points, url } = options;

  // Take top 2-3 points to keep it readable and impactful
  const selectedPoints = points.slice(0, 3);
  const bulletSymbol = '•';

  if (lang === 'ar') {
    const pointsText = selectedPoints.map((p) => `${bulletSymbol} ${p}`).join('\n');
    return `💡 معلومة مهنية في ${courseTitle}:
${pointsText}

📖 المصدر: درس ${lessonNumber} (${lessonTitle}) — ${stationTitle}
🔗 للمزيد والمصدر: ${url}`;
  }

  const pointsText = selectedPoints.map((p) => `${bulletSymbol} ${p}`).join('\n');
  return `💡 Professional insight in ${courseTitle}:
${pointsText}

📖 Source: Lesson ${lessonNumber} (${lessonTitle}) — ${stationTitle}
🔗 Full lesson: ${url}`;
}
