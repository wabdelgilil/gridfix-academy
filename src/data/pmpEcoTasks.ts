/**
 * July 2026 PMP Examination Content Outline (ECO): all 26 tasks,
 * explicitly mapped to lessons and quiz banks that exist in this repo.
 */
export type PmpEcoDomain = 'People' | 'Process' | 'Business Environment';

export interface PmpEcoTask {
  id: string;
  domain: PmpEcoDomain;
  titleAr: string;
  titleEn: string;
  lessonIds: string[];
  quizIds: string[];
}

export const pmpEcoTasks: PmpEcoTask[] = [
  // People — 8 tasks
  {
    id: 'P1',
    domain: 'People',
    titleAr: 'إدارة الصراع (Manage conflict)',
    titleEn: 'Manage conflict',
    lessonIds: ['lesson-pmp-2-3'],
    quizIds: ['quiz-pmp-2-3'],
  },
  {
    id: 'P2',
    domain: 'People',
    titleAr: 'قيادة الفريق (Lead a team)',
    titleEn: 'Lead a team',
    lessonIds: ['lesson-pmp-2-1', 'lesson-pmp-2-2'],
    quizIds: ['quiz-pmp-2-1', 'quiz-pmp-2-2'],
  },
  {
    id: 'P3',
    domain: 'People',
    titleAr: 'دعم أداء الفريق (Support team performance)',
    titleEn: 'Support team performance',
    lessonIds: ['lesson-pmp-2-2'],
    quizIds: ['quiz-pmp-2-2'],
  },
  {
    id: 'P4',
    domain: 'People',
    titleAr:
      'تلبية توقعات أصحاب المصلحة (Address and meet stakeholder expectations)',
    titleEn: 'Address and meet stakeholder expectations',
    lessonIds: ['lesson-pmp-2-5'],
    quizIds: ['quiz-pmp-2-5'],
  },
  {
    id: 'P5',
    domain: 'People',
    titleAr: 'التعاون مع أصحاب المصلحة (Collaborate with stakeholders)',
    titleEn: 'Collaborate with stakeholders',
    lessonIds: ['lesson-pmp-2-4'],
    quizIds: ['quiz-pmp-2-4'],
  },
  {
    id: 'P6',
    domain: 'People',
    titleAr: 'إشراك الفرق الافتراضية ودعمها (Engage and support virtual teams)',
    titleEn: 'Engage and support virtual teams',
    lessonIds: ['lesson-pmp-2-6', 'lesson-pmp-10-3'],
    quizIds: ['quiz-pmp-2-6', 'quiz-pmp-10-3'],
  },
  {
    id: 'P7',
    domain: 'People',
    titleAr: 'تحديد قواعد الفريق (Define team ground rules)',
    titleEn: 'Define team ground rules',
    lessonIds: ['lesson-pmp-2-2', 'lesson-pmp-10-1'],
    quizIds: ['quiz-pmp-2-2', 'quiz-pmp-10-1'],
  },
  {
    id: 'P8',
    domain: 'People',
    titleAr:
      'التفاوض على الاتفاقيات وإدارتها (Negotiate and manage agreements)',
    titleEn: 'Negotiate and manage agreements',
    lessonIds: ['lesson-pmp-5-2', 'lesson-pmp-2-3'],
    quizIds: ['quiz-pmp-5-2', 'quiz-pmp-2-3'],
  },

  // Process — 10 tasks (C1–C10 in the July 2026 ECO)
  {
    id: 'C1',
    domain: 'Process',
    titleAr: 'إدارة النطاق (Manage scope)',
    titleEn: 'Manage scope',
    lessonIds: ['lesson-pmp-3-1', 'lesson-pmp-3-2', 'lesson-pmp-3-4'],
    quizIds: ['quiz-pmp-3-1', 'quiz-pmp-3-2', 'quiz-pmp-3-4'],
  },
  {
    id: 'C2',
    domain: 'Process',
    titleAr: 'إدارة الجدول (Manage schedule)',
    titleEn: 'Manage schedule',
    lessonIds: ['lesson-pmp-4-1'],
    quizIds: ['quiz-pmp-4-1'],
  },
  {
    id: 'C3',
    domain: 'Process',
    titleAr: 'إدارة الميزانية (Manage budget)',
    titleEn: 'Manage budget',
    lessonIds: ['lesson-pmp-4-2', 'lesson-pmp-4-3'],
    quizIds: ['quiz-pmp-4-2', 'quiz-pmp-4-3'],
  },
  {
    id: 'C4',
    domain: 'Process',
    titleAr: 'إدارة الموارد (Manage resources)',
    titleEn: 'Manage resources',
    lessonIds: ['lesson-pmp-5-1'],
    quizIds: ['quiz-pmp-5-1'],
  },
  {
    id: 'C5',
    domain: 'Process',
    titleAr: 'إدارة المخاطر (Manage risk)',
    titleEn: 'Manage risk',
    lessonIds: ['lesson-pmp-6-1', 'lesson-pmp-6-2', 'lesson-pmp-6-3'],
    quizIds: ['quiz-pmp-6-1', 'quiz-pmp-6-2', 'quiz-pmp-6-3'],
  },
  {
    id: 'C6',
    domain: 'Process',
    titleAr: 'إدارة الجودة (Manage quality)',
    titleEn: 'Manage quality',
    lessonIds: ['lesson-pmp-5-3', 'lesson-pmp-5-4'],
    quizIds: ['quiz-pmp-5-3', 'quiz-pmp-5-4'],
  },
  {
    id: 'C7',
    domain: 'Process',
    titleAr: 'إدارة التغييرات (Manage changes)',
    titleEn: 'Manage changes',
    lessonIds: ['lesson-pmp-7-3', 'lesson-pmp-7-5'],
    quizIds: ['quiz-pmp-7-3', 'quiz-pmp-7-5'],
  },
  {
    id: 'C8',
    domain: 'Process',
    titleAr: 'إدارة المشتريات (Manage procurement)',
    titleEn: 'Manage procurement',
    lessonIds: ['lesson-pmp-5-2'],
    quizIds: ['quiz-pmp-5-2'],
  },
  {
    id: 'C9',
    domain: 'Process',
    titleAr: 'إدارة التكامل (Manage integration)',
    titleEn: 'Manage integration',
    lessonIds: ['lesson-pmp-5-5', 'lesson-pmp-1-5'],
    quizIds: ['quiz-pmp-5-5', 'quiz-pmp-1-5'],
  },
  {
    id: 'C10',
    domain: 'Process',
    titleAr:
      'إدارة التسليم والإغلاق بنهج رشيق/هجين (Manage delivery and closure, agile/hybrid-aware)',
    titleEn: 'Manage delivery and closure in an agile/hybrid-aware way',
    lessonIds: ['lesson-pmp-8-1', 'lesson-pmp-10-4', 'lesson-pmp-10-5'],
    quizIds: ['quiz-pmp-8-1', 'quiz-pmp-10-4', 'quiz-pmp-10-5'],
  },

  // Business Environment — 8 tasks
  {
    id: 'BE1',
    domain: 'Business Environment',
    titleAr: 'الامتثال والحوكمة (Compliance and governance)',
    titleEn: 'Compliance and governance',
    lessonIds: ['lesson-pmp-9-1', 'lesson-pmp-9-2'],
    quizIds: ['quiz-pmp-9-1', 'quiz-pmp-9-2'],
  },
  {
    id: 'BE2',
    domain: 'Business Environment',
    titleAr: 'التغيير المؤسسي (Organizational change)',
    titleEn: 'Organizational change',
    lessonIds: ['lesson-pmp-9-3'],
    quizIds: ['quiz-pmp-9-3'],
  },
  {
    id: 'BE3',
    domain: 'Business Environment',
    titleAr: 'تحقيق الفوائد (Benefits realization)',
    titleEn: 'Benefits realization',
    lessonIds: ['lesson-pmp-8-4'],
    quizIds: ['quiz-pmp-8-4'],
  },
  {
    id: 'BE4',
    domain: 'Business Environment',
    titleAr:
      'الاستدامة والمعايير البيئية والاجتماعية والحوكمية (Sustainability / ESG)',
    titleEn: 'Sustainability and ESG',
    lessonIds: ['lesson-pmp-9-6', 'lesson-pmp-9-5'],
    quizIds: ['quiz-pmp-9-6', 'quiz-pmp-9-5'],
  },
  {
    id: 'BE5',
    domain: 'Business Environment',
    titleAr:
      'الذكاء الاصطناعي التوليدي (Generative AI) والتقنيات الناشئة (Emerging technology)',
    titleEn: 'Generative AI and emerging technology',
    lessonIds: ['lesson-pmp-9-6'],
    quizIds: ['quiz-pmp-9-6'],
  },
  {
    id: 'BE6',
    domain: 'Business Environment',
    titleAr: 'الأخلاقيات والكفاءة الثقافية (Ethics and cultural competence)',
    titleEn: 'Ethics and cultural competence',
    lessonIds: ['lesson-pmp-9-2', 'lesson-pmp-2-1'],
    quizIds: ['quiz-pmp-9-2', 'quiz-pmp-2-1'],
  },
  {
    id: 'BE7',
    domain: 'Business Environment',
    titleAr:
      'الوعي بأصحاب المصلحة والقوة والسياسة (Stakeholder and power-political awareness)',
    titleEn: 'Stakeholder and power-political awareness',
    lessonIds: ['lesson-pmp-9-5', 'lesson-pmp-2-4'],
    quizIds: ['quiz-pmp-9-5', 'quiz-pmp-2-4'],
  },
  {
    id: 'BE8',
    domain: 'Business Environment',
    titleAr: 'الهيكل التنظيمي والثقافة (Organizational structure and culture)',
    titleEn: 'Organizational structure and culture',
    lessonIds: ['lesson-pmp-9-3', 'lesson-pmp-9-5'],
    quizIds: ['quiz-pmp-9-3', 'quiz-pmp-9-5'],
  },
];

export const pmpEcoTasksByDomain: Record<PmpEcoDomain, PmpEcoTask[]> = {
  People: pmpEcoTasks.filter((task) => task.domain === 'People'),
  Process: pmpEcoTasks.filter((task) => task.domain === 'Process'),
  'Business Environment': pmpEcoTasks.filter(
    (task) => task.domain === 'Business Environment'
  ),
};
