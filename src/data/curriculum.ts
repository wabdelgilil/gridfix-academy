export interface PlanLesson {
  id: string;
  station: string;
  number: string;
  title: string;
  minutes: number;
  order: number;
  status: 'live' | 'planned';
  toolName?: string;
}

export interface PlanStation {
  id: string;
  courseId?: string;
  number: number;
  title: string;
  titleEn: string;
  icon: string;
  badge: string;
  examWeight: number;
  status: 'live' | 'planned';
  description: string;
  lessons: PlanLesson[];
}

export const curriculum: PlanStation[] = [
  {
    id: 'station-0',
    courseId: 'cfm',
    number: 0,
    title: 'الأساسيات ومتطلبات الشهادة',
    titleEn: 'Fundamentals & Certification Requirements',
    icon: '🎯',
    badge: 'التأسيس',
    examWeight: 0,
    status: 'live',
    description: 'ما هي إدارة المنشآت، من هو مدير المنشأة، وشروط شهادة CFM.',
    lessons: [
      { id: 'lesson-0-1', station: 'station-0', number: '0.1', title: 'مقدمة في إدارة المنشآت', minutes: 20, order: 1, status: 'live', toolName: 'دليل مهام مدير المنشأة' },
      { id: 'lesson-0-2', station: 'station-0', number: '0.2', title: 'شهادة CFM: الشروط والامتحان', minutes: 25, order: 2, status: 'live', toolName: 'حاسبة الأهلية' },
      { id: 'lesson-0-3', station: 'station-0', number: '0.3', title: 'أركان IFMA الإحدى عشر', minutes: 15, order: 3, status: 'live', toolName: 'مستكشف الأركان' },
    ],
  },
  {
    id: 'station-1',
    number: 1,
    title: 'التشغيل والصيانة',
    titleEn: 'Operations & Maintenance',
    icon: '⚙️',
    badge: 'أثقل محطة',
    examWeight: 25,
    status: 'live',
    description: 'أنظمة المباني، استراتيجيات الصيانة، الطاقة، والمقاولون.',
    lessons: [
      { id: 'lesson-1-1', station: 'station-1', number: '1.1', title: 'أنظمة المباني (HVAC/كهرباء/حريق)', minutes: 30, order: 1, status: 'live', toolName: 'خريطة مبنى تفاعلية' },
      { id: 'lesson-1-2', station: 'station-1', number: '1.2', title: 'استراتيجيات الصيانة', minutes: 25, order: 2, status: 'live', toolName: 'معالج اختيار الاستراتيجية' },
      { id: 'lesson-1-3', station: 'station-1', number: '1.3', title: 'إدارة الطاقة', minutes: 25, order: 3, status: 'live', toolName: 'حاسبة EUI' },
      { id: 'lesson-1-4', station: 'station-1', number: '1.4', title: 'الاستعانة بالخارج والعقود', minutes: 25, order: 4, status: 'live', toolName: 'مصفوفة Make-vs-Buy' },
    ],
  },
  {
    id: 'station-2',
    number: 2,
    title: 'العقارات',
    titleEn: 'Real Estate',
    icon: '🏢',
    badge: 'عقارات',
    examWeight: 14,
    status: 'live',
    description: 'عقود الإيجار، دورة حياة العقار، وتخطيط المساحات.',
    lessons: [
      { id: 'lesson-2-1', station: 'station-2', number: '2.1', title: 'إدارة عقود الإيجار', minutes: 25, order: 1, status: 'live', toolName: 'حاسبة NPV' },
      { id: 'lesson-2-2', station: 'station-2', number: '2.2', title: 'العقارات: أصل أم التزام؟', minutes: 20, order: 2, status: 'live' },
      { id: 'lesson-2-3', station: 'station-2', number: '2.3', title: 'استغلال المساحات وإدارة المكاتب', minutes: 20, order: 3, status: 'live', toolName: 'حاسبة الكثافة' },
    ],
  },
  {
    id: 'station-3',
    number: 3,
    title: 'الماليات والميزانيات',
    titleEn: 'Finance & Budgeting',
    icon: '💰',
    badge: 'ماليات',
    examWeight: 18,
    status: 'live',
    description: 'أنواع الميزانيات، تحليل الانحرافات، LCC وROI.',
    lessons: [
      { id: 'lesson-3-1', station: 'station-3', number: '3.1', title: 'أنواع الميزانيات', minutes: 25, order: 1, status: 'live', toolName: 'محاكي ميزانية' },
      { id: 'lesson-3-2', station: 'station-3', number: '3.2', title: 'تحليل الانحرافات', minutes: 20, order: 2, status: 'live', toolName: 'حاسبة Variance' },
      { id: 'lesson-3-3', station: 'station-3', number: '3.3', title: 'LCC وROI', minutes: 25, order: 3, status: 'live', toolName: 'حاسبة دورة الحياة' },
      { id: 'lesson-3-4', station: 'station-3', number: '3.4', title: 'مراقبة التكاليف', minutes: 20, order: 4, status: 'live' },
    ],
  },
  {
    id: 'station-4',
    number: 4,
    title: 'العوامل البشرية والبيئة',
    titleEn: 'Occupancy & Human Factors',
    icon: '🪑',
    badge: 'بشري',
    examWeight: 14,
    status: 'live',
    description: 'Ergonomics، رفاهية الموظفين، وجودة البيئة الداخلية.',
    lessons: [
      { id: 'lesson-4-1', station: 'station-4', number: '4.1', title: 'Ergonomics وبيئة العمل', minutes: 20, order: 1, status: 'live', toolName: 'تقييم Ergonomics' },
      { id: 'lesson-4-2', station: 'station-4', number: '4.2', title: 'رفاهية وإنتاجية الموظفين', minutes: 20, order: 2, status: 'live' },
      { id: 'lesson-4-3', station: 'station-4', number: '4.3', title: 'جودة البيئة الداخلية IEQ', minutes: 20, order: 3, status: 'live', toolName: 'ماسح IEQ' },
    ],
  },
  {
    id: 'station-5',
    number: 5,
    title: 'الصحة والسلامة والبيئة',
    titleEn: 'Health, Safety & Environment',
    icon: '🛡️',
    badge: 'HSE',
    examWeight: 10,
    status: 'live',
    description: 'معايير OSHA/ISO 45001 وتقييم المخاطر.',
    lessons: [
      { id: 'lesson-5-1', station: 'station-5', number: '5.1', title: 'السلامة والصحة المهنية', minutes: 25, order: 1, status: 'live', toolName: 'قائمة امتثال' },
      { id: 'lesson-5-2', station: 'station-5', number: '5.2', title: 'تقييم المخاطر والسيطرة', minutes: 25, order: 2, status: 'live', toolName: 'مصفوفة مخاطر 5×5' },
      { id: 'lesson-5-3', station: 'station-5', number: '5.3', title: 'الامتثال البيئي والقانوني', minutes: 20, order: 3, status: 'live' },
    ],
  },
  {
    id: 'station-6',
    number: 6,
    title: 'الطوارئ واستمرارية الأعمال',
    titleEn: 'Emergency Preparedness & Business Continuity',
    icon: '🚨',
    badge: 'طوارئ',
    examWeight: 10,
    status: 'live',
    description: 'الاستجابة للطوارئ، الإخلاء، والتعافي من الكوارث.',
    lessons: [
      { id: 'lesson-6-1', station: 'station-6', number: '6.1', title: 'التخطيط للطوارئ', minutes: 25, order: 1, status: 'live', toolName: 'باني خطة طوارئ' },
      { id: 'lesson-6-2', station: 'station-6', number: '6.2', title: 'الإخلاء والسلامة من الحريق', minutes: 20, order: 2, status: 'live' },
      { id: 'lesson-6-3', station: 'station-6', number: '6.3', title: 'استمرارية الأعمال BCP', minutes: 25, order: 3, status: 'live', toolName: 'حاسبة BIA' },
    ],
  },
  {
    id: 'station-7',
    number: 7,
    title: 'الاستدامة والمباني الخضراء',
    titleEn: 'Environmental Stewardship & Sustainability',
    icon: '🌱',
    badge: 'استدامة',
    examWeight: 10,
    status: 'live',
    description: 'المباني الخضراء، النفايات، وجودة الهواء الداخلي.',
    lessons: [
      { id: 'lesson-7-1', station: 'station-7', number: '7.1', title: 'المباني الخضراء LEED', minutes: 25, order: 1, status: 'live', toolName: 'متتبع نقاط LEED' },
      { id: 'lesson-7-2', station: 'station-7', number: '7.2', title: 'إدارة النفايات', minutes: 20, order: 2, status: 'live' },
      { id: 'lesson-7-3', station: 'station-7', number: '7.3', title: 'جودة الهواء الداخلي IAQ', minutes: 20, order: 3, status: 'live' },
    ],
  },
  {
    id: 'station-8',
    number: 8,
    title: 'القيادة والاستراتيجية',
    titleEn: 'Leadership & Strategy',
    icon: '🧭',
    badge: 'قيادة',
    examWeight: 28,
    status: 'live',
    description: 'التخطيط الاستراتيجي، التواصل، وإدارة التغيير.',
    lessons: [
      { id: 'lesson-8-1', station: 'station-8', number: '8.1', title: 'التخطيط الاستراتيجي', minutes: 25, order: 1, status: 'live', toolName: 'لوحة تخطيط' },
      { id: 'lesson-8-2', station: 'station-8', number: '8.2', title: 'التواصل وأصحاب المصلحة', minutes: 20, order: 2, status: 'live', toolName: 'مصفوفة القوة/الاهتمام' },
      { id: 'lesson-8-3', station: 'station-8', number: '8.3', title: 'إدارة التغيير', minutes: 20, order: 3, status: 'live' },
    ],
  },
  {
    id: 'station-9',
    number: 9,
    title: 'البيانات والتقنية',
    titleEn: 'Data, Analytics & Technology',
    icon: '📊',
    badge: 'تقنية',
    examWeight: 9,
    status: 'live',
    description: 'KPIs، أنظمة CMMS/CAFM، وتحليل البيانات.',
    lessons: [
      { id: 'lesson-9-1', station: 'station-9', number: '9.1', title: 'مؤشرات الأداء KPIs', minutes: 25, order: 1, status: 'live', toolName: 'لوحة KPIs' },
      { id: 'lesson-9-2', station: 'station-9', number: '9.2', title: 'CMMS / CAFM / IoT', minutes: 25, order: 2, status: 'live' },
      { id: 'lesson-9-3', station: 'station-9', number: '9.3', title: 'تحليل البيانات واتخاذ القرار', minutes: 20, order: 3, status: 'live' },
    ],
  },
  {
    id: 'station-10',
    number: 10,
    title: 'الجودة',
    titleEn: 'Quality',
    icon: '✅',
    badge: 'جودة',
    examWeight: 8,
    status: 'live',
    description: 'التحسين المستمر، PDCA، والتدقيق.',
    lessons: [
      { id: 'lesson-10-1', station: 'station-10', number: '10.1', title: 'التحسين المستمر', minutes: 20, order: 1, status: 'live', toolName: 'مستكشف PDCA' },
      { id: 'lesson-10-2', station: 'station-10', number: '10.2', title: 'الجودة والتدقيق', minutes: 20, order: 2, status: 'live' },
    ],
  },
  {
    id: 'station-11',
    number: 11,
    title: 'محاكي الامتحان النهائي',
    titleEn: 'CFM Mock Exam',
    icon: '📝',
    badge: 'الاختبار',
    examWeight: 100,
    status: 'live',
    description: 'بنك أسئلة كامل + مؤقت + تقرير تشخيصي.',
    lessons: [
      { id: 'lesson-11-1', station: 'station-11', number: '11.1', title: 'محاكي الامتحان الكامل', minutes: 240, order: 1, status: 'live', toolName: 'محاكي الامتحان' },
    ],
  },
  {
    id: 'station-12',
    number: 12,
    title: 'إدارة المشاريع',
    titleEn: 'Project Management',
    icon: '🏗️',
    badge: 'مشاريع',
    examWeight: 10,
    status: 'live',
    description: 'دورة حياة المشروع، النطاق والجدول والميزانية، والتنفيذ والرقابة والإغلاق.',
    lessons: [
      { id: 'lesson-12-1', station: 'station-12', number: '12.1', title: 'دورة حياة المشروع والنطاق', minutes: 25, order: 1, status: 'live' },
      { id: 'lesson-12-2', station: 'station-12', number: '12.2', title: 'الجدولة والتكلفة والرقابة', minutes: 25, order: 2, status: 'live' },
      { id: 'lesson-12-3', station: 'station-12', number: '12.3', title: 'المقاولون والإغلاق', minutes: 20, order: 3, status: 'live' },
    ],
  },
];

export function getStation(id: string): PlanStation | undefined {
  return curriculum.find((s) => s.id === id);
}

export function getLessonPlan(id: string): PlanLesson | undefined {
  return curriculum.flatMap((s) => s.lessons).find((l) => l.id === id);
}