export interface Course {
  id: string;
  code: string;
  title: string;
  titleEn: string;
  tagline: string;
  description: string;
  descriptionEn: string;
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
    descriptionEn: 'A practical Arabic path to the CFM credential: stations built on the real facility manager journey and weighted by the IFMA exam domains.',
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
    descriptionEn: 'A comprehensive course in equipment maintenance and reliability covering root cause analysis, predictive maintenance, and asset lifecycle management.',
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
    descriptionEn: 'A course in asset management assessment and planning: asset lifecycle, reliability, financial analysis, and ISO 55000 standards.',
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
