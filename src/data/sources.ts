export interface Source {
  id: string;
  name: string;
  kind: string;
  url: string;
  ar: string;
}

export const sources: Record<string, Source> = {
  ifma: {
    id: 'ifma',
    name: 'IFMA - CFM Credential',
    kind: 'رسمي',
    url: 'https://www.ifma.org/credentials/certified-facility-manager-cfm',
    ar: 'الصفحة الرسمية لشهادة CFM: الأهلية، خطوات التسجيل، والأسئلة الشائعة.',
  },
  ifma_handbook: {
    id: 'ifma_handbook',
    name: 'CFM Candidate Handbook (2026)',
    kind: 'رسمي',
    url: 'https://www.ifma.org/credentials/certified-facility-manager-cfm',
    ar: 'كتيب المرشح الرسمي: يوضح هيكل الامتحان (120 سؤالاً من بينها 20 تجريبية) ومتطلبات الأخلاقيات.',
  },
  ifma_prospectus: {
    id: 'ifma_prospectus',
    name: 'IFMA Professional Development Prospectus',
    kind: 'رسمي',
    url: 'https://www.ifma.org/',
    ar: 'الكتيب التدريبي الرسمي: مدة الامتحان وسياسات إعادة الاعتماد كل 3 سنوات.',
  },
  iso_41001: {
    id: 'iso_41001',
    name: 'ISO 41001 - Facility Management',
    kind: 'معيار',
    url: 'https://www.iso.org/standard/68089.html',
    ar: 'المعيار الدولي لنظم إدارة المنشآت: يحدد متطلبات نظام إدارة FM فعال.',
  },
  iso_14001: {
    id: 'iso_14001',
    name: 'ISO 14001 - Environmental Management',
    kind: 'معيار',
    url: 'https://www.iso.org/standard/60857.html',
    ar: 'المعيار الدولي لنظم الإدارة البيئية: متطلبات السياسة البيئية والأهداف والتدقيق.',
  },
  ashrae: {
    id: 'ashrae',
    name: 'ASHRAE',
    kind: 'مرجع فني',
    url: 'https://www.ashrae.org/',
    ar: 'المصدر العالمي لأنظمة الحرارة والتهوية والتكييف ومعايير IEQ.',
  },
  osha: {
    id: 'osha',
    name: 'OSHA',
    kind: 'سلامة',
    url: 'https://www.osha.gov/',
    ar: 'معايير السلامة والصحة المهنية وأدلة التفتيش المجانية.',
  },
  readygov: {
    id: 'readygov',
    name: 'Ready.gov',
    kind: 'طوارئ',
    url: 'https://www.ready.gov/business',
    ar: 'أدلة مجانية للاستعداد للطوارئ واستمرارية الأعمال.',
  },
  energystar: {
    id: 'energystar',
    name: 'ENERGY STAR',
    kind: 'طاقة',
    url: 'https://www.energystar.gov/buildings',
    ar: 'برنامج كفاءة الطاقة للمباني وأدوات قياس الأداء (EUI).',
  },
};