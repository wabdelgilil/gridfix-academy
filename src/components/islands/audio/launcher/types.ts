export type DriveTheme = 'day' | 'night';

export interface LastPlayedAudio {
  courseId: string;
  lessonId: string;
  lessonTitle: string;
}

export interface AudioLauncherModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
  lang?: 'ar' | 'en';
}
