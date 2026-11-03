export interface PlaylistItem {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  stationNumber: number;
  stationTitle: string;
  audioSrc?: string;
  hasAudio: boolean;
  lessonUrl: string;
}

export interface CourseOption {
  id: string;
  code: string;
  title: string;
  icon: string;
}

export type DriveTheme = 'day' | 'night';
