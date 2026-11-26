import type { Source } from './cfm';

export const pmpSources: Record<string, Source> = {
  pmi_eco_2026: {
    id: 'pmi_eco_2026',
    name: 'PMP Examination Content Outline (ECO) — July 2026',
    kind: 'دليل امتحان',
    kindEn: 'Exam Outline',
    url: 'https://www.pmi.org/certifications/project-management-pmp/new-exam',
    ar: 'مخطط محتوى امتحان PMP (ECO) إصدار يوليو 2026: 3 مجالات (Domains)، 26 مهمة (Tasks)، أوزان 33/41/26، 180 سؤال، 240 دقيقة.',
    en: 'PMP Examination Content Outline (ECO) July 2026: 3 domains, 26 tasks, weights 33/41/26, 180 questions, 240 minutes.',
  },
  pmbok_8: {
    id: 'pmbok_8',
    name: 'PMBOK Guide — 8th Edition (PMI, 2025)',
    kind: 'مرجع',
    kindEn: 'Reference',
    url: 'https://www.pmi.org/pmbok-guide-standards',
    ar: 'دليل PMBOK الإصدار 8: مبادئ إدارة المشاريع ونظام الأداء (Project Management Principles & Performance Domains).',
    en: 'PMBOK Guide 8th Edition: project management principles and performance domains.',
  },
  agile_practice_guide: {
    id: 'agile_practice_guide',
    name: 'Agile Practice Guide (PMI)',
    kind: 'مرجع',
    kindEn: 'Reference',
    url: 'https://www.pmi.org/pmbok-guide-standards/practice-guides/agile',
    ar: 'دليل الممارسة الرشيقة: النهج الرشيق والهجين، Scrum، Kanban، ومقاييس التدفق.',
    en: 'Agile Practice Guide: agile and hybrid approaches, Scrum, Kanban, and flow metrics.',
  },
};
