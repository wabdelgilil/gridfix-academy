export interface Source {
  id: string;
  name: string;
  kind: string;
  kindEn: string;
  url: string;
  ar: string;
  en: string;
}

export const sources: Record<string, Source> = {
  ifma: {
    id: 'ifma',
    name: 'IFMA - CFM Credential',
    kind: 'رسمي',
    kindEn: 'Official',
    url: 'https://www.ifma.org/credentials/certified-facility-manager-cfm',
    ar: 'الصفحة الرسمية لشهادة CFM: الأهلية، خطوات التسجيل، والأسئلة الشائعة.',
    en: 'The official CFM credential page: eligibility, registration steps, and frequently asked questions.',
  },
  ifma_handbook: {
    id: 'ifma_handbook',
    name: 'CFM Candidate Handbook (2026)',
    kind: 'رسمي',
    kindEn: 'Official',
    url: 'https://www.ifma.org/credentials/certified-facility-manager-cfm',
    ar: 'كتيب المرشح الرسمي: يوضح هيكل الامتحان (120 سؤالاً من بينها 20 تجريبية) ومتطلبات الأخلاقيات.',
    en: 'The official candidate handbook: outlines the exam structure (120 questions, of which 20 are pretest items) and the ethics requirements.',
  },
  ifma_prospectus: {
    id: 'ifma_prospectus',
    name: 'IFMA Professional Development Prospectus',
    kind: 'رسمي',
    kindEn: 'Official',
    url: 'https://www.ifma.org/',
    ar: 'الكتيب التدريبي الرسمي: مدة الامتحان وسياسات إعادة الاعتماد كل 3 سنوات.',
    en: 'The official professional development prospectus: exam duration and reaccreditation policies every 3 years.',
  },
  iso_41001: {
    id: 'iso_41001',
    name: 'ISO 41001 - Facility Management',
    kind: 'معيار',
    kindEn: 'Standard',
    url: 'https://www.iso.org/standard/68089.html',
    ar: 'المعيار الدولي لنظم إدارة المنشآت: يحدد متطلبات نظام إدارة FM فعال.',
    en: 'The international standard for facility management systems: specifies the requirements for an effective FM system.',
  },
  iso_14001: {
    id: 'iso_14001',
    name: 'ISO 14001 - Environmental Management',
    kind: 'معيار',
    kindEn: 'Standard',
    url: 'https://www.iso.org/standard/60857.html',
    ar: 'المعيار الدولي لنظم الإدارة البيئية: متطلبات السياسة البيئية والأهداف والتدقيق.',
    en: 'The international standard for environmental management systems: requirements for environmental policy, objectives, and auditing.',
  },
  ashrae: {
    id: 'ashrae',
    name: 'ASHRAE',
    kind: 'مرجع فني',
    kindEn: 'Technical Reference',
    url: 'https://www.ashrae.org/',
    ar: 'المصدر العالمي لأنظمة الحرارة والتهوية والتكييف ومعايير IEQ.',
    en: 'The global source for heating, ventilation, and air conditioning systems and IEQ standards.',
  },
  osha: {
    id: 'osha',
    name: 'OSHA',
    kind: 'سلامة',
    kindEn: 'Safety',
    url: 'https://www.osha.gov/',
    ar: 'معايير السلامة والصحة المهنية وأدلة التفتيش المجانية.',
    en: 'Occupational safety and health standards and free inspection guides.',
  },
  readygov: {
    id: 'readygov',
    name: 'Ready.gov',
    kind: 'طوارئ',
    kindEn: 'Emergency',
    url: 'https://www.ready.gov/business',
    ar: 'أدلة مجانية للاستعداد للطوارئ واستمرارية الأعمال.',
    en: 'Free guides for emergency preparedness and business continuity.',
  },
  energystar: {
    id: 'energystar',
    name: 'ENERGY STAR',
    kind: 'طاقة',
    kindEn: 'Energy',
    url: 'https://www.energystar.gov/buildings',
    ar: 'برنامج كفاءة الطاقة للمباني وأدوات قياس الأداء (EUI).',
    en: 'The building energy efficiency program and performance measurement tools (EUI).',
  },
};
