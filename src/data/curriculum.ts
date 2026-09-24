export interface PlanLesson {
  id: string;
  station: string;
  number: string;
  title: string;
  titleEn: string;
  minutes: number;
  order: number;
  status: 'live' | 'planned';
  toolName?: string;
  toolNameEn?: string;
}

export interface PlanStation {
  id: string;
  courseId?: string;
  number: number;
  title: string;
  titleEn: string;
  icon: string;
  badge: string;
  badgeEn: string;
  examWeight: number;
  status: 'live' | 'planned';
  description: string;
  descriptionEn: string;
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
    badge: 'التأسيس', badgeEn: 'Foundation',
    examWeight: 0,
    status: 'live',
    description: 'ما هي إدارة المنشآت، من هو مدير المنشأة، وشروط شهادة CFM.', descriptionEn: 'What facility management is, who the facility manager is, and how the CFM credential works.',
    lessons: [
      { id: 'lesson-0-1', station: 'station-0', number: '0.1', title: 'مقدمة في إدارة المنشآت', titleEn: 'Introduction to Facility Management', minutes: 20, order: 1, status: 'live', toolName: 'دليل مهام مدير المنشأة', toolNameEn: 'Facility Manager Duties Checklist' },
      { id: 'lesson-0-2', station: 'station-0', number: '0.2', title: 'شهادة CFM: الشروط والامتحان', titleEn: 'CFM Credential: Requirements & Exam', minutes: 25, order: 2, status: 'live', toolName: 'حاسبة الأهلية', toolNameEn: 'Eligibility Calculator' },
      { id: 'lesson-0-3', station: 'station-0', number: '0.3', title: 'أركان IFMA الإحدى عشر', titleEn: 'The Eleven IFMA Competencies', minutes: 15, order: 3, status: 'live', toolName: 'مستكشف الأركان', toolNameEn: 'Competencies Explorer' },
    ],
  },
  {
    id: 'station-1',
    number: 1,
    title: 'التشغيل والصيانة',
    titleEn: 'Operations & Maintenance',
    icon: '⚙️',
    badge: 'أثقل محطة', badgeEn: 'Heaviest Station',
    examWeight: 25,
    status: 'live',
    description: 'أنظمة المباني، استراتيجيات الصيانة، الطاقة، والمقاولون.', descriptionEn: 'The daily heart of the FM role: building systems, maintenance strategies, energy, and contractors.',
    lessons: [
      { id: 'lesson-1-1', station: 'station-1', number: '1.1', title: 'أنظمة المباني (HVAC/كهرباء/حريق)', titleEn: 'Building Systems: HVAC, Electrical & Fire', minutes: 30, order: 1, status: 'live', toolName: 'خريطة مبنى تفاعلية', toolNameEn: 'Interactive Building Map' },
      { id: 'lesson-1-2', station: 'station-1', number: '1.2', title: 'استراتيجيات الصيانة', titleEn: 'Maintenance Strategies', minutes: 25, order: 2, status: 'live', toolName: 'معالج اختيار الاستراتيجية', toolNameEn: 'Maintenance Strategy Selector' },
      { id: 'lesson-1-3', station: 'station-1', number: '1.3', title: 'إدارة الطاقة', titleEn: 'Energy Management', minutes: 25, order: 3, status: 'live', toolName: 'حاسبة EUI', toolNameEn: 'EUI Calculator' },
      { id: 'lesson-1-4', station: 'station-1', number: '1.4', title: 'الاستعانة بالخارج والعقود', titleEn: 'Outsourcing & Service Contracts', minutes: 25, order: 4, status: 'live', toolName: 'مصفوفة Make-vs-Buy', toolNameEn: 'Make-vs-Buy Matrix' },
    ],
  },
  {
    id: 'station-2',
    number: 2,
    title: 'العقارات',
    titleEn: 'Real Estate',
    icon: '🏢',
    badge: 'عقارات', badgeEn: 'Real Estate',
    examWeight: 14,
    status: 'live',
    description: 'عقود الإيجار، دورة حياة العقار، وتخطيط المساحات.', descriptionEn: 'Managing property assets: leases, asset lifecycle, and space planning.',
    lessons: [
      { id: 'lesson-2-1', station: 'station-2', number: '2.1', title: 'إدارة عقود الإيجار', titleEn: 'Leases & Property Management', minutes: 25, order: 1, status: 'live', toolName: 'حاسبة NPV', toolNameEn: 'NPV Calculator' },
      { id: 'lesson-2-2', station: 'station-2', number: '2.2', title: 'العقارات: أصل أم التزام؟', titleEn: 'Real Estate: Asset or Liability?', minutes: 20, order: 2, status: 'live' },
      { id: 'lesson-2-3', station: 'station-2', number: '2.3', title: 'استغلال المساحات وإدارة المكاتب', titleEn: 'Space Utilization & Workplace Management', minutes: 20, order: 3, status: 'live', toolName: 'حاسبة الكثافة', toolNameEn: 'Density Calculator' },
    ],
  },
  {
    id: 'station-3',
    number: 3,
    title: 'الماليات والميزانيات',
    titleEn: 'Finance & Budgeting',
    icon: '💰',
    badge: 'ماليات', badgeEn: 'Finance',
    examWeight: 18,
    status: 'live',
    description: 'أنواع الميزانيات، تحليل الانحرافات، LCC وROI.', descriptionEn: 'The language of numbers: budgets, variance analysis, life-cycle cost, and cost control.',
    lessons: [
      { id: 'lesson-3-1', station: 'station-3', number: '3.1', title: 'أنواع الميزانيات', titleEn: 'Budget Types & Preparation', minutes: 25, order: 1, status: 'live', toolName: 'محاكي ميزانية', toolNameEn: 'Budget Simulator' },
      { id: 'lesson-3-2', station: 'station-3', number: '3.2', title: 'تحليل الانحرافات', titleEn: 'Variance Analysis', minutes: 20, order: 2, status: 'live', toolName: 'حاسبة Variance', toolNameEn: 'Variance Calculator' },
      { id: 'lesson-3-3', station: 'station-3', number: '3.3', title: 'LCC وROI', titleEn: 'LCC & ROI', minutes: 25, order: 3, status: 'live', toolName: 'حاسبة دورة الحياة', toolNameEn: 'Life Cycle Calculator' },
      { id: 'lesson-3-4', station: 'station-3', number: '3.4', title: 'مراقبة التكاليف', titleEn: 'Cost Control & Operations Oversight', minutes: 20, order: 4, status: 'live' },
    ],
  },
  {
    id: 'station-4',
    number: 4,
    title: 'العوامل البشرية والبيئة',
    titleEn: 'Occupancy & Human Factors',
    icon: '🪑',
    badge: 'بشري', badgeEn: 'Human Factors',
    examWeight: 14,
    status: 'live',
    description: 'Ergonomics، رفاهية الموظفين، وجودة البيئة الداخلية.', descriptionEn: 'People first: ergonomics, wellbeing and productivity, and indoor environmental quality.',
    lessons: [
      { id: 'lesson-4-1', station: 'station-4', number: '4.1', title: 'Ergonomics وبيئة العمل', titleEn: 'Workplace Ergonomics', minutes: 20, order: 1, status: 'live', toolName: 'تقييم Ergonomics', toolNameEn: 'Ergonomics Assessment' },
      { id: 'lesson-4-2', station: 'station-4', number: '4.2', title: 'رفاهية وإنتاجية الموظفين', titleEn: 'Employee Wellbeing & Productivity', minutes: 20, order: 2, status: 'live' },
      { id: 'lesson-4-3', station: 'station-4', number: '4.3', title: 'جودة البيئة الداخلية IEQ', titleEn: 'Indoor Environmental Quality', minutes: 20, order: 3, status: 'live', toolName: 'ماسح IEQ', toolNameEn: 'IEQ Scanner' },
    ],
  },
  {
    id: 'station-5',
    number: 5,
    title: 'الصحة والسلامة والبيئة',
    titleEn: 'Health, Safety & Environment',
    icon: '🛡️',
    badge: 'HSE', badgeEn: 'HSE',
    examWeight: 10,
    status: 'live',
    description: 'معايير OSHA/ISO 45001 وتقييم المخاطر.', descriptionEn: 'People\'s safety first: OSHA & ISO 45001 standards, risk assessment and control, and environmental/legal compliance.',
    lessons: [
      { id: 'lesson-5-1', station: 'station-5', number: '5.1', title: 'السلامة والصحة المهنية', titleEn: 'Occupational Health & Safety', minutes: 25, order: 1, status: 'live', toolName: 'قائمة امتثال', toolNameEn: 'Compliance Checklist' },
      { id: 'lesson-5-2', station: 'station-5', number: '5.2', title: 'تقييم المخاطر والسيطرة', titleEn: 'Risk Assessment & Control', minutes: 25, order: 2, status: 'live', toolName: 'مصفوفة مخاطر 5×5', toolNameEn: '5×5 Risk Matrix' },
      { id: 'lesson-5-3', station: 'station-5', number: '5.3', title: 'الامتثال البيئي والقانوني', titleEn: 'Environmental & Legal Compliance', minutes: 20, order: 3, status: 'live' },
    ],
  },
  {
    id: 'station-6',
    number: 6,
    title: 'الطوارئ واستمرارية الأعمال',
    titleEn: 'Emergency Preparedness & Business Continuity',
    icon: '🚨',
    badge: 'طوارئ', badgeEn: 'Emergency',
    examWeight: 10,
    status: 'live',
    description: 'الاستجابة للطوارئ، الإخلاء، والتعافي من الكوارث.', descriptionEn: 'Protect people, then resume business: emergency planning, evacuation and fire safety, and BCP with measurable recovery targets.',
    lessons: [
      { id: 'lesson-6-1', station: 'station-6', number: '6.1', title: 'التخطيط للطوارئ', titleEn: 'Emergency Preparedness Planning', minutes: 25, order: 1, status: 'live', toolName: 'باني خطة طوارئ', toolNameEn: 'Emergency Plan Builder' },
      { id: 'lesson-6-2', station: 'station-6', number: '6.2', title: 'الإخلاء والسلامة من الحريق', titleEn: 'Evacuation & Fire Safety', minutes: 20, order: 2, status: 'live' },
      { id: 'lesson-6-3', station: 'station-6', number: '6.3', title: 'استمرارية الأعمال BCP', titleEn: 'Business Continuity Planning', minutes: 25, order: 3, status: 'live', toolName: 'حاسبة BIA', toolNameEn: 'BIA Calculator' },
    ],
  },
  {
    id: 'station-7',
    number: 7,
    title: 'الاستدامة والمباني الخضراء',
    titleEn: 'Environmental Stewardship & Sustainability',
    icon: '🌱',
    badge: 'استدامة', badgeEn: 'Sustainability',
    examWeight: 10,
    status: 'live',
    description: 'المباني الخضراء، النفايات، وجودة الهواء الداخلي.', descriptionEn: 'Build with lasting impact: LEED certification, the waste-management hierarchy, and Indoor Air Quality (IAQ) for healthy buildings.',
    lessons: [
      { id: 'lesson-7-1', station: 'station-7', number: '7.1', title: 'المباني الخضراء LEED', titleEn: 'Green Buildings & LEED', minutes: 25, order: 1, status: 'live', toolName: 'متتبع نقاط LEED', toolNameEn: 'LEED Points Tracker' },
      { id: 'lesson-7-2', station: 'station-7', number: '7.2', title: 'إدارة النفايات', titleEn: 'Waste Management', minutes: 20, order: 2, status: 'live' },
      { id: 'lesson-7-3', station: 'station-7', number: '7.3', title: 'جودة الهواء الداخلي IAQ', titleEn: 'Indoor Air Quality (IAQ)', minutes: 20, order: 3, status: 'live' },
    ],
  },
  {
    id: 'station-8',
    number: 8,
    title: 'القيادة والاستراتيجية',
    titleEn: 'Leadership & Strategy',
    icon: '🧭',
    badge: 'قيادة', badgeEn: 'Leadership',
    examWeight: 28,
    status: 'live',
    description: 'التخطيط الاستراتيجي، التواصل، وإدارة التغيير.', descriptionEn: 'The heaviest exam domain: strategic planning, stakeholder management and communication, and change management.',
    lessons: [
      { id: 'lesson-8-1', station: 'station-8', number: '8.1', title: 'التخطيط الاستراتيجي', titleEn: 'Strategic Planning', minutes: 25, order: 1, status: 'live', toolName: 'لوحة تخطيط', toolNameEn: 'Planning Board' },
      { id: 'lesson-8-2', station: 'station-8', number: '8.2', title: 'التواصل وأصحاب المصلحة', titleEn: 'Communication & Stakeholders', minutes: 20, order: 2, status: 'live', toolName: 'مصفوفة القوة/الاهتمام', toolNameEn: 'Power/Interest Matrix' },
      { id: 'lesson-8-3', station: 'station-8', number: '8.3', title: 'إدارة التغيير', titleEn: 'Change Management', minutes: 20, order: 3, status: 'live' },
    ],
  },
  {
    id: 'station-9',
    number: 9,
    title: 'البيانات والتقنية',
    titleEn: 'Data, Analytics & Technology',
    icon: '📊',
    badge: 'تقنية', badgeEn: 'Technology',
    examWeight: 9,
    status: 'live',
    description: 'KPIs، أنظمة CMMS/CAFM، وتحليل البيانات.', descriptionEn: 'KPIs, CMMS/CAFM and IoT systems, and turning data into decisions.',
    lessons: [
      { id: 'lesson-9-1', station: 'station-9', number: '9.1', title: 'مؤشرات الأداء KPIs', titleEn: 'Performance Indicators (KPIs)', minutes: 25, order: 1, status: 'live', toolName: 'لوحة KPIs', toolNameEn: 'KPIs Dashboard' },
      { id: 'lesson-9-2', station: 'station-9', number: '9.2', title: 'CMMS / CAFM / IoT', titleEn: 'CMMS / CAFM / IoT', minutes: 25, order: 2, status: 'live' },
      { id: 'lesson-9-3', station: 'station-9', number: '9.3', title: 'تحليل البيانات واتخاذ القرار', titleEn: 'Data Analytics & Decision-Making', minutes: 20, order: 3, status: 'live' },
    ],
  },
  {
    id: 'station-10',
    number: 10,
    title: 'الجودة',
    titleEn: 'Quality',
    icon: '✅',
    badge: 'جودة', badgeEn: 'Quality',
    examWeight: 8,
    status: 'live',
    description: 'التحسين المستمر، PDCA، والتدقيق.', descriptionEn: 'Continuous improvement via PDCA, quality culture, and auditing.',
    lessons: [
      { id: 'lesson-10-1', station: 'station-10', number: '10.1', title: 'التحسين المستمر', titleEn: 'Continuous Improvement', minutes: 20, order: 1, status: 'live', toolName: 'مستكشف PDCA', toolNameEn: 'PDCA Explorer' },
      { id: 'lesson-10-2', station: 'station-10', number: '10.2', title: 'الجودة والتدقيق', titleEn: 'Quality & Auditing', minutes: 20, order: 2, status: 'live' },
    ],
  },
  {
    id: 'station-11',
    number: 11,
    title: 'محاكي الامتحان النهائي',
    titleEn: 'CFM Mock Exam',
    icon: '📝',
    badge: 'الاختبار', badgeEn: 'Exam',
    examWeight: 100,
    status: 'live',
    description: 'بنك أسئلة كامل + مؤقت + تقرير تشخيصي.', descriptionEn: 'A realistic CFM mock experience: question bank, timer, and station-level diagnostic.',
    lessons: [
      { id: 'lesson-11-1', station: 'station-11', number: '11.1', title: 'محاكي الامتحان الكامل', titleEn: 'CFM Full Mock Exam', minutes: 240, order: 1, status: 'live', toolName: 'محاكي الامتحان', toolNameEn: 'Exam Simulator' },
    ],
  },
  {
    id: 'station-12',
    number: 12,
    title: 'إدارة المشاريع',
    titleEn: 'Project Management',
    icon: '🏗️',
    badge: 'مشاريع', badgeEn: 'Projects',
    examWeight: 10,
    status: 'live',
    description: 'دورة حياة المشروع، النطاق والجدول والميزانية، والتنفيذ والرقابة والإغلاق.', descriptionEn: 'Project life cycle, scope/schedule/budget, procurement, control, and closeout.',
    lessons: [
      { id: 'lesson-12-1', station: 'station-12', number: '12.1', title: 'دورة حياة المشروع والنطاق', titleEn: 'Project Life Cycle & Scope', minutes: 25, order: 1, status: 'live' },
      { id: 'lesson-12-2', station: 'station-12', number: '12.2', title: 'الجدولة والتكلفة والرقابة', titleEn: 'Scheduling, Cost & Control', minutes: 25, order: 2, status: 'live' },
      { id: 'lesson-12-3', station: 'station-12', number: '12.3', title: 'المقاولون والإغلاق', titleEn: 'Procurement & Closeout', minutes: 20, order: 3, status: 'live' },
    ],
  },
  {
    id: 'station-cmrp-1',
    courseId: 'cmrp',
    number: 1,
    title: 'فهم الأصل وآليات الانهيار',
    titleEn: 'Equipment Failure Mechanics',
    icon: '🔩',
    badge: 'الأساس الفني', badgeEn: 'Technical Foundation',
    examWeight: 12,
    status: 'live',
    description: 'أنماط الأعطال الستة، دراسة نولان وهيب، ومنحنى الفشل المحتمل P-F.', descriptionEn: 'The technical foundation of CMRP: the six failure patterns, the Nowlan & Heap study, and the P-F curve.',
    lessons: [
      { id: 'lesson-cmrp-1-1', station: 'station-cmrp-1', number: '1.1', title: 'أنماط الأعطال ونظرية التقادم', titleEn: 'Failure Patterns & The Six Curves', minutes: 30, order: 1, status: 'live', toolName: 'مستكشف المنحنيات الستة', toolNameEn: 'Six Curves Explorer' },
      { id: 'lesson-cmrp-1-2', station: 'station-cmrp-1', number: '1.2', title: 'منحنى P-F والفاصل الزمني', titleEn: 'The P-F Curve & Condition-Based Maintenance', minutes: 40, order: 2, status: 'live', toolName: 'محاكي منحنى P-F', toolNameEn: 'P-F Curve Simulator' },
    ],
  },
  {
    id: 'station-cmrp-2',
    courseId: 'cmrp',
    number: 2,
    title: 'الاستراتيجية الفنية وحماية الأصل',
    titleEn: 'Equipment Strategy & RCM',
    icon: '📋',
    badge: 'الاستراتيجية الفنية', badgeEn: 'Technical Strategy',
    examWeight: 18,
    status: 'live',
    description: 'تحليل الحرجية، FMEA وFMECA، صيانة الاعتمادية RCM، وتحليل ويبول.', descriptionEn: 'From criticality to RCM: criticality analysis, FMEA & FMECA, the RCM decision logic, and Weibull analysis.',
    lessons: [
      { id: 'lesson-cmrp-2-1', station: 'station-cmrp-2', number: '2.1', title: 'تحليل الحرجية وتصنيف الأصول', titleEn: 'Asset Criticality & Risk Matrix', minutes: 25, order: 1, status: 'live', toolName: 'مصفوفة الحرجية', toolNameEn: 'Criticality Matrix' },
      { id: 'lesson-cmrp-2-2', station: 'station-cmrp-2', number: '2.2', title: 'تحليل أنماط وتأثيرات الأعطال', titleEn: 'Failure Modes and Effects Analysis', minutes: 35, order: 2, status: 'live', toolName: 'جدول FMEA التفاعلي', toolNameEn: 'Interactive FMEA Table' },
      { id: 'lesson-cmrp-2-3', station: 'station-cmrp-2', number: '2.3', title: 'صيانة الاعتمادية وشجرة القرار', titleEn: 'Reliability-Centered Maintenance & Decision Logic', minutes: 45, order: 3, status: 'live', toolName: 'شجرة قرار RCM', toolNameEn: 'RCM Decision Tree' },
      { id: 'lesson-cmrp-2-4', station: 'station-cmrp-2', number: '2.4', title: 'المزيج المثالي وتحليل ويبول', titleEn: 'Maintenance Mix & Weibull Analysis', minutes: 35, order: 4, status: 'live', toolName: 'مستكشف ويبول', toolNameEn: 'Weibull Explorer' },
    ],
  },
  {
    id: 'station-cmrp-3',
    courseId: 'cmrp',
    number: 3,
    title: 'الأصل في خط الإنتاج والعمليات',
    titleEn: 'Manufacturing Process Reliability',
    icon: '🏭',
    badge: 'كفاءة الإنتاج', badgeEn: 'Production Efficiency',
    examWeight: 15,
    status: 'live',
    description: 'نظرية القيود، الكفاءة الكلية للمعدات OEE، والتحليل الجذري RCA.', descriptionEn: 'Process reliability: Theory of Constraints and bottlenecks, OEE, and root cause analysis.',
    lessons: [
      { id: 'lesson-cmrp-3-1', station: 'station-cmrp-3', number: '3.1', title: 'تدفق العمليات ونظرية القيود', titleEn: 'Process Flow & Theory of Constraints (TOC)', minutes: 25, order: 1, status: 'live', toolName: 'محاكي الاختناق', toolNameEn: 'Bottleneck Simulator' },
      { id: 'lesson-cmrp-3-2', station: 'station-cmrp-3', number: '3.2', title: 'الكفاءة الكلية والخسائر الست', titleEn: 'Overall Equipment Effectiveness (OEE) & Six Big Losses', minutes: 40, order: 2, status: 'live', toolName: 'حاسبة OEE', toolNameEn: 'OEE Calculator' },
      { id: 'lesson-cmrp-3-3', station: 'station-cmrp-3', number: '3.3', title: 'التحسين المستمر والتحليل الجذري', titleEn: 'Continuous Improvement & Root Cause Analysis', minutes: 30, order: 3, status: 'live', toolName: 'مستكشف عظمة السمكة', toolNameEn: 'Fishbone Explorer' },
    ],
  },
  {
    id: 'station-cmrp-4',
    courseId: 'cmrp',
    number: 4,
    title: 'محرك التنفيذ اليومي وإدارة الأعمال',
    titleEn: 'Work Management Engine',
    icon: '🧰',
    badge: 'إدارة العمليات', badgeEn: 'Operations Management',
    examWeight: 22,
    status: 'live',
    description: 'دورة أمر الشغل، مصفوفة RIME، التخطيط والجدولة، ومؤشرات الأداء.', descriptionEn: 'The beating heart of maintenance: the work order cycle, the RIME matrix, planning and scheduling, and KPIs.',
    lessons: [
      { id: 'lesson-cmrp-4-1', station: 'station-cmrp-4', number: '4.1', title: 'دورة حياة أمر الشغل في CMMS', titleEn: 'Complete Work Order Lifecycle', minutes: 35, order: 1, status: 'live', toolName: 'مخطط تدفق أمر الشغل', toolNameEn: 'Work Order Flowchart' },
      { id: 'lesson-cmrp-4-2', station: 'station-cmrp-4', number: '4.2', title: 'فرز الأعمال ومصفوفة RIME', titleEn: 'Work Screening & Prioritization (RIME Index)', minutes: 25, order: 2, status: 'live', toolName: 'حاسبة RIME', toolNameEn: 'RIME Calculator' },
      { id: 'lesson-cmrp-4-3', station: 'station-cmrp-4', number: '4.3', title: 'التخطيط وحزمة العمل', titleEn: 'Maintenance Planning & The Job Package', minutes: 35, order: 3, status: 'live', toolName: 'باني حزمة العمل', toolNameEn: 'Job Package Builder' },
      { id: 'lesson-cmrp-4-4', station: 'station-cmrp-4', number: '4.4', title: 'الجدولة والتنسيق الأسبوعي', titleEn: 'Maintenance Scheduling & Operations Coordination', minutes: 30, order: 4, status: 'live', toolName: 'محاكي الجدولة الأسبوعية', toolNameEn: 'Weekly Schedule Simulator' },
      { id: 'lesson-cmrp-4-5', station: 'station-cmrp-4', number: '4.5', title: 'مؤشرات إدارة الأعمال', titleEn: 'Work Management KPIs & Productivity', minutes: 35, order: 5, status: 'live', toolName: 'حاسبة زمن المفتاح', toolNameEn: 'Wrench Time Calculator' },
    ],
  },
  {
    id: 'station-cmrp-5',
    courseId: 'cmrp',
    number: 5,
    title: 'الكادر البشري والقيادة المؤسسية',
    titleEn: 'People, Organization & Leadership',
    icon: '👥',
    badge: 'القيادة والثقافة', badgeEn: 'Leadership & Culture',
    examWeight: 13,
    status: 'live',
    description: 'الهيكل التنظيمي، مصفوفة RACI، الفجوة المهارية، وإدارة التغيير.', descriptionEn: 'The human element: organizational structure, the RACI matrix, skills gaps, and cultural change.',
    lessons: [
      { id: 'lesson-cmrp-5-1', station: 'station-cmrp-5', number: '5.1', title: 'الهيكل التنظيمي ومصفوفة RACI', titleEn: 'Organizational Structure & RACI Matrix', minutes: 30, order: 1, status: 'live', toolName: 'أداة مصفوفة RACI', toolNameEn: 'RACI Matrix Tool' },
      { id: 'lesson-cmrp-5-2', station: 'station-cmrp-5', number: '5.2', title: 'الفجوة المهارية وتطوير الكفاءات', titleEn: 'Skills Gap Analysis & Technical Training', minutes: 25, order: 2, status: 'live', toolName: 'محلل الفجوة المهارية', toolNameEn: 'Skills Gap Analyzer' },
      { id: 'lesson-cmrp-5-3', station: 'station-cmrp-5', number: '5.3', title: 'القيادة وإدارة التغيير الثقافي', titleEn: 'Leadership & Change Management in Maintenance', minutes: 35, order: 3, status: 'live', toolName: 'مسار إدارة التغيير', toolNameEn: 'Change Management Path' },
    ],
  },
  {
    id: 'station-cmrp-6',
    courseId: 'cmrp',
    number: 6,
    title: 'لغة المال والإدارة العليا',
    titleEn: 'Business, Strategy & Governance',
    icon: '💼',
    badge: 'إدارة الأعمال', badgeEn: 'Business Management',
    examWeight: 20,
    status: 'live',
    description: 'إدارة الأصول ISO 55000، بطاقة الأداء المتوازن، وإدارة المخاطر وMOC.', descriptionEn: 'Boardroom language: ISO 55000 asset management, the balanced scorecard, risk and MOC.',
    lessons: [
      { id: 'lesson-cmrp-6-1', station: 'station-cmrp-6', number: '6.1', title: 'الخطة الاستراتيجية وISO 55000', titleEn: 'Strategic Asset Management & Value Creation', minutes: 30, order: 1, status: 'live', toolName: 'حاسبة تكلفة دورة الحياة', toolNameEn: 'Life Cycle Cost Calculator' },
      { id: 'lesson-cmrp-6-2', station: 'station-cmrp-6', number: '6.2', title: 'بطاقة الأداء المتوازن', titleEn: 'Balanced Scorecard & Reliability KPIs (MTBF, MTTR, Avail)', minutes: 40, order: 2, status: 'live', toolName: 'محاكي بطاقة الأداء', toolNameEn: 'Balanced Scorecard Simulator' },
      { id: 'lesson-cmrp-6-3', station: 'station-cmrp-6', number: '6.3', title: 'مخاطر السلامة ونظام MOC', titleEn: 'EHS Risk Management & Management of Change', minutes: 30, order: 3, status: 'live', toolName: 'أداة تقييم مخاطر MOC', toolNameEn: 'MOC Risk Assessment Tool' },
    ],
  },
  {
    id: 'station-cmrp-7',
    courseId: 'cmrp',
    number: 7,
    title: 'محاكي الامتحان الشامل',
    titleEn: 'Final CMRP Mock Exam Simulator',
    icon: '🏆',
    badge: 'الامتحان النهائي', badgeEn: 'Final Exam',
    examWeight: 100,
    status: 'live',
    description: 'محاكي الامتحان النهائي: 110 أسئلة بتوزيع الركائز الخمس مع تقرير تشخيصي.', descriptionEn: 'The real test before the real test: 110 questions across the five SMRP pillars with a diagnostic report.',
    lessons: [
      { id: 'lesson-cmrp-7-1', station: 'station-cmrp-7', number: '7.1', title: 'محاكي الامتحان النهائي لـ CMRP', titleEn: 'Final CMRP Mock Exam Simulator', minutes: 150, order: 1, status: 'live', toolName: 'محاكي الامتحان', toolNameEn: 'Exam Simulator' },
    ],
  },
  {
    id: 'station-cama-1',
    courseId: 'cama',
    number: 1,
    title: 'المبادئ والحوكمة',
    titleEn: 'Principles & Governance',
    icon: '🏛️',
    badge: 'الأساسيات', badgeEn: 'Fundamentals',
    examWeight: 20,
    status: 'live',
    description: 'مبادئ إدارة الأصول ISO 55000، السياسة، الهيكل التنظيمي، وأصحاب المصلحة.', descriptionEn: 'ISO 55000 asset management fundamentals, the PDCA model for ISO 55001 AMS, organizational structure, effective governance, and stakeholder management.',
    lessons: [
      { id: 'lesson-cama-1-1', station: 'station-cama-1', number: '1.1', title: 'مبادئ إدارة الأصول ISO 55000', titleEn: 'Asset Management Principles – ISO 55000', minutes: 30, order: 1, status: 'live', toolName: 'أداة تقييم النضج', toolNameEn: 'Maturity Assessment Tool' },
      { id: 'lesson-cama-1-2', station: 'station-cama-1', number: '1.2', title: 'نظام إدارة الأصول ISO 55001', titleEn: 'Asset Management System – ISO 55001', minutes: 35, order: 2, status: 'live', toolName: 'قائمة امتثال 55001', toolNameEn: 'ISO 55001 Compliance Checklist' },
      { id: 'lesson-cama-1-3', station: 'station-cama-1', number: '1.3', title: 'الحوكمة وإدارة أصحاب المصلحة', titleEn: 'Governance & Stakeholder Management', minutes: 25, order: 3, status: 'live', toolName: 'مصفوفة أصحاب المصلحة', toolNameEn: 'Stakeholder Matrix' },
    ],
  },
  {
    id: 'station-cama-2',
    courseId: 'cama',
    number: 2,
    title: 'التخطيط الاستراتيجي',
    titleEn: 'Strategic Planning',
    icon: '🗺️',
    badge: 'التخطيط', badgeEn: 'Planning',
    examWeight: 20,
    status: 'live',
    description: 'السياق المؤسسي، تحليل الطلب، الخطة الاستراتيجية، وربطها بأهداف المنظمة.', descriptionEn: 'Organizational context, demand analysis, strategic plan, and alignment with organizational objectives.',
    lessons: [
      { id: 'lesson-cama-2-1', station: 'station-cama-2', number: '2.1', title: 'السياق المؤسسي وأصحاب المصلحة', titleEn: 'Organizational Context & Stakeholders', minutes: 25, order: 1, status: 'live', toolName: 'باني السياق المؤسسي', toolNameEn: 'Organizational Context Builder' },
      { id: 'lesson-cama-2-2', station: 'station-cama-2', number: '2.2', title: 'تحليل الطلب والتخطيط الاستراتيجي', titleEn: 'Demand Analysis & Strategic Planning', minutes: 30, order: 2, status: 'live', toolName: 'محلل سيناريوهات الطلب', toolNameEn: 'Demand Scenario Analyzer' },
      { id: 'lesson-cama-2-3', station: 'station-cama-2', number: '2.3', title: 'خطة إدارة الأصول والأهداف', titleEn: 'Asset Management Plan & Objectives', minutes: 30, order: 3, status: 'live', toolName: 'باني الخطة الاستراتيجية', toolNameEn: 'Strategic Plan Builder' },
    ],
  },
  {
    id: 'station-cama-3',
    courseId: 'cama',
    number: 3,
    title: 'معلومات الأصول',
    titleEn: 'Asset Information',
    icon: '📊',
    badge: 'البيانات', badgeEn: 'Data',
    examWeight: 15,
    status: 'live',
    description: 'بنية بيانات الأصول، إدارة المعلومات، ونظم المعلومات المتكاملة.', descriptionEn: 'Asset information architecture, data management, and integrated information systems.',
    lessons: [
      { id: 'lesson-cama-3-1', station: 'station-cama-3', number: '3.1', title: 'استراتيجية معلومات الأصول', titleEn: 'Asset Information Strategy', minutes: 25, order: 1, status: 'live', toolName: 'باني بنية المعلومات', toolNameEn: 'Information Architecture Builder' },
      { id: 'lesson-cama-3-2', station: 'station-cama-3', number: '3.2', title: 'جودة البيانات وإدارتها', titleEn: 'Data Quality & Governance', minutes: 25, order: 2, status: 'live', toolName: 'ماسح جودة البيانات', toolNameEn: 'Data Quality Scanner' },
      { id: 'lesson-cama-3-3', station: 'station-cama-3', number: '3.3', title: 'نظم المعلومات المتكاملة CAFM/CMMS', titleEn: 'Integrated Information Systems CAFM/CMMS', minutes: 30, order: 3, status: 'live', toolName: 'مقيّم نظم المعلومات', toolNameEn: 'Information Systems Assessor' },
    ],
  },
  {
    id: 'station-cama-4',
    courseId: 'cama',
    number: 4,
    title: 'دورة حياة الأصول',
    titleEn: 'Lifecycle Delivery',
    icon: '🔄',
    badge: 'دورة الحياة', badgeEn: 'Lifecycle',
    examWeight: 25,
    status: 'live',
    description: 'اكتساب الأصول، الصيانة والتشغيل، سلسلة التوريد، وإعادة التدوير.', descriptionEn: 'Asset acquisition, operations, supply chain, and recycling.',
    lessons: [
      { id: 'lesson-cama-4-1', station: 'station-cama-4', number: '4.1', title: 'اكتساب الأصول وإنشائها', titleEn: 'Asset Acquisition & Creation', minutes: 25, order: 1, status: 'live', toolName: 'قائمة تسليم الأصول', toolNameEn: 'Asset Handover Checklist' },
      { id: 'lesson-cama-4-2', station: 'station-cama-4', number: '4.2', title: 'الصيانة والتشغيل اليومي', titleEn: 'Maintenance & Daily Operations', minutes: 30, order: 2, status: 'live', toolName: 'مصفوفة استراتيجيات الصيانة', toolNameEn: 'Maintenance Strategy Matrix' },
      { id: 'lesson-cama-4-3', station: 'station-cama-4', number: '4.3', title: 'سلسلة التوريد وإدارة المشتريات', titleEn: 'Supply Chain & Procurement', minutes: 25, order: 3, status: 'live', toolName: 'محلل الموردين', toolNameEn: 'Supplier Analyzer' },
      { id: 'lesson-cama-4-4', station: 'station-cama-4', number: '4.4', title: 'التخلص وإعادة التدوير', titleEn: 'Disposal & Recycling', minutes: 20, order: 4, status: 'live', toolName: 'قائمة قرار التخلص', toolNameEn: 'Disposal Decision Checklist' },
    ],
  },
  {
    id: 'station-cama-5',
    courseId: 'cama',
    number: 5,
    title: 'تحقيق القيمة',
    titleEn: 'Value Realization',
    icon: '💎',
    badge: 'القيمة', badgeEn: 'Value',
    examWeight: 20,
    status: 'live',
    description: 'اتخاذ القرارات الاستثمارية، تحليل تكلفة دورة الحياة، وتقييم الأداء.', descriptionEn: 'Capital investment decision-making, life cycle cost analysis, and performance evaluation.',
    lessons: [
      { id: 'lesson-cama-5-1', station: 'station-cama-5', number: '5.1', title: 'اتخاذ القرارات الاستثمارية', titleEn: 'Capital Investment Decision-Making', minutes: 30, order: 1, status: 'live', toolName: 'محاسبة NPV وIRR', toolNameEn: 'NPV & IRR Calculator' },
      { id: 'lesson-cama-5-2', station: 'station-cama-5', number: '5.2', title: 'تحليل تكلفة دورة الحياة LCC', titleEn: 'Life Cycle Costing (LCC)', minutes: 30, order: 2, status: 'live', toolName: 'حاسبة LCC', toolNameEn: 'LCC Calculator' },
      { id: 'lesson-cama-5-3', station: 'station-cama-5', number: '5.3', title: 'تقييم الأداء والتحسين المستمر', titleEn: 'Performance Evaluation and Continuous Improvement', minutes: 25, order: 3, status: 'live', toolName: 'لوحة مؤشرات KPI', toolNameEn: 'KPI Dashboard' },
    ],
  },
  {
    id: 'station-cama-6',
    courseId: 'cama',
    number: 6,
    title: 'محاكي الامتحان الشامل',
    titleEn: 'Final CAMA Mock Exam',
    icon: '🏆',
    badge: 'الامتحان النهائي', badgeEn: 'Final Exam',
    examWeight: 100,
    status: 'live',
    description: 'محاكي الامتحان النهائي: 110 أسئلة بتوزيع محتويات GFMAM مع تقرير تشخيصي.', descriptionEn: 'Final CAMA Mock Exam: 110 questions mapped to GFMAM domains with a diagnostic report.',
    lessons: [
      { id: 'lesson-cama-6-1', station: 'station-cama-6', number: '6.1', title: 'محاكي الامتحان النهائي لـ CAMA', titleEn: 'Final CAMA Mock Exam Simulator', minutes: 150, order: 1, status: 'live', toolName: 'محاكي الامتحان', toolNameEn: 'Exam Simulator' },
    ],
  },
];

export function getStation(id: string): PlanStation | undefined {
  return curriculum.find((s) => s.id === id);
}

export function getLessonPlan(id: string): PlanLesson | undefined {
  return curriculum.flatMap((s) => s.lessons).find((l) => l.id === id);
}

export function resolveLessonEnglish(courseId: string, lessonId: string): { lessonTitleEn?: string; stationTitleEn?: string } {
  const station = curriculum.find((s) => (s.courseId ?? 'cfm') === courseId && s.lessons.some((l) => l.id === lessonId));
  const lesson = station?.lessons.find((l) => l.id === lessonId);
  return { lessonTitleEn: lesson?.titleEn, stationTitleEn: station?.titleEn };
}