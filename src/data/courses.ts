export interface Course {
  id: string;
  code: string;
  title: string;
  titleEn: string;
  tagline: string;
  description: string;
  icon: string;
  credential: string;
  status: 'live' | 'planned';
}

export const courses: Course[] = [
  {
    id: 'cfm',
    code: 'CFM',
    title: 'إدارة المنشآت',
    titleEn: 'Certified Facility Manager',
    tagline: 'شهادة CFM من IFMA',
    description: 'مسار عملي عربي لشهادة CFM: محطات مبنية على مسار مدير المنشأة الحقيقي ووزن أركان امتحان IFMA.',
    icon: '🏗️',
    credential: 'CFM',
    status: 'live',
  },
  {
    id: 'cmrp',
    code: 'CMRP',
    title: 'صيانة وموثوقية المعدات',
    titleEn: 'Certified Maintenance & Reliability Professional',
    tagline: 'شهادة CMRP من SMRP',
    description: 'دورة شاملة في صيانة وموثوقية المعدات تغطي تحليل السبب الجذري، الصيانة التنبؤية، وإدارة دورة حياة الأصول.',
    icon: '⚙️',
    credential: 'CMRP',
    status: 'live',
  },
  {
    id: 'cama',
    code: 'CAMA',
    title: 'تقييم إدارة الأصول',
    titleEn: 'Certified Asset Management Assessor',
    tagline: 'شهادة CAMA في تقييم إدارة الأصول',
    description: 'دورة في تقييم وتخطيط إدارة الأصول: دورة حياة الأصول، الموثوقية، التحليل المالي، ومعايير ISO 55000.',
    icon: '📐',
    credential: 'CAMA',
    status: 'live',
  },
];

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getLiveCourses(): Course[] {
  return courses.filter((c) => c.status === 'live');
}

export function isValidCourse(id: string): boolean {
  return courses.some((c) => c.id === id);
}
