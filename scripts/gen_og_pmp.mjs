import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" direction="rtl">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1f3a"/>
      <stop offset="100%" stop-color="#123f63"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1050" cy="80" r="260" fill="#ffffff" opacity="0.04"/>
  <circle cx="120" cy="600" r="220" fill="#ffffff" opacity="0.035"/>
  <rect x="80" y="86" width="1040" height="458" rx="34" fill="#ffffff" opacity="0.05" stroke="#ffffff" stroke-opacity="0.12" stroke-width="2"/>
  <rect x="80" y="86" width="12" height="458" rx="6" fill="url(#accent)"/>
  <text x="1100" y="188" text-anchor="end" font-family="Tahoma, Arial, sans-serif" font-size="34" fill="#fbbf24" font-weight="700">GRIDFIX ACADEMY</text>
  <text x="1100" y="292" text-anchor="end" font-family="Tahoma, Arial, sans-serif" font-size="64" fill="#ffffff" font-weight="700">محترف إدارة المشاريع</text>
  <text x="1100" y="368" text-anchor="end" font-family="Tahoma, Arial, sans-serif" font-size="40" fill="#dbeafe" font-weight="600">PMP — إصدار يوليو 2026 وPMBOK 8</text>
  <text x="1100" y="438" text-anchor="end" font-family="Tahoma, Arial, sans-serif" font-size="28" fill="#bfdbfe">الأفراد 33% · العمليات 41% · بيئة الأعمال 26%</text>
  <text x="1100" y="494" text-anchor="end" font-family="Tahoma, Arial, sans-serif" font-size="26" fill="#93c5fd">55 درساً · 12 محطة · محاكي 180 سؤالاً</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-pmp.png');
console.log('created public/og-pmp.png');
