# سجل الأعمال المكتملة (Completed Work Log)

> يُسجّل كل إنجاز كبرى بالتاريخ والملفات المتأثرة. يُقرأ في بداية كل جلسة لفهم ما تم بالفعل.

---

## [2026-09-17] إعادة الهيكلة: معمارية الكورسات المتعددة

**الملفات الرئيسية المتأثرة**: `src/data/courses.ts`، `src/pages/[course]/`، `src/pages/index.astro`

1. إنشاء `src/data/courses.ts`: سجل الكورسات (cfm live + cmrp planned + cama planned).
2. نقل 13 محطة و38 درساً MDX و38 كويزاً و24 أداة إلى مجلدات `cfm/`.
3. إنشاء صفحات `[course]` الديناميكية: index, stations, lessons, map, exam, glossary.
4. صفحة Landing لاختيار الكورس (`src/pages/index.astro`).
5. SiteHeader وLessonNav وLessonLayout وBaseLayout أصبحت course-aware.
6. تحديث الاسم إلى GridFix Academy (الهيدر، الفوتر، الترجمات).

---

## [2026-09-17] تخزين التقدم المُänglert

**الملفات الرئيسية**: `src/lib/storage.ts`، `CompleteLessonButton.tsx`، `StationProgress.tsx`، `ScenarioQuiz.tsx`

1. مفتاح تخزين مستقل لكل كورس: `storageKeyFor(course)` → `{course}-course-progress@v1`.
2. `loadProgress(course)` / `saveProgress(state, course)` أصبحا يقبلان الكورس.
3. `CompleteLessonButton` و `StationProgress` تستقبلان `course` prop.
4. `ScenarioQuiz` يستنتج الكورس من بادئة المعرّف.

---

## [2026-09-17] مراجعة وصيانة — إصلاحات حرجة بعد الترحيل

**الملفات**: `src/components/islands/SiteHeader.tsx`، `src/layouts/BaseLayout.astro`

1. **SiteHeader station-0**: الهيدر كان يربط "المحطات" بـ `station-0` ثابتاً — CMRP لا يملك محطة 0 → كان يُظهر 404. أُصلح بدالة `firstStationId(course)` تستخرج أول محطة حية من `curriculum.ts`. تحقق: CMRP يوجه الآن لـ `station-cmrp-1`.
2. **الفوتر**: نص "CMRP للصيانة والموثوقية (قريباً)" — CMRP أصبح live → أُزيل "(قريباً)".
3. **og:locale**: كان `ar_AR` (غير معياري) → أُصلح إلى `ar` (المعيار Open Graph).
4. البوابات: `qa:ar` ✔، `check` 0/0/0 (140 ملفاً)، `build` 93 صفحة ✔.

---

## [2026-09-17] صور OG لكل كورس + صفحة 404

1. `public/og-cfm.png` و`public/og-cmrp.png` (1200×630، هوية GridFix) مولّدة عبر System.Drawing — عُولج فيض النص في صورة CMRP بتقصير السطر الإنجليزي بعد معاينة بصرية.
2. `image` prop يُمرَّر من `[course]/index.astro` و`LessonLayout.astro` — تحقق: `og:image` = `.../og-cfm.png` و`.../og-cmrp.png` في dist.
3. `src/pages/404.astro`: صفحة عربية (🧭 خرجت عن المسار) بروابط CFM/CMRP/الرئيسية + `noindex`.
4. البوابات: `qa:ar` ✔، `check` 0/0/0 (140 ملفاً)، `build` 93 صفحة ✔.

---

## [2026-09-17] ترحيل كورس CMRP كاملاً — الكورس live الآن ✅

**النطاق**: 7 محطات + 21 درساً + 20 بنك كويز (98 سؤال سيناريو) + 119 مصطلح قاموس + 34 مصدراً + 20 أداة تفاعلية + محاكي امتحان 110 أسئلة بتوزيع الركائز الرسمي (22/16/33/14/25).

**المنهجية**: تحويل آلي بالنص الحرفي للكويزات والقاموس (سكربت بايثون مع معالجة الهروب والترميز) + كتابة الدروس والأدوات بأسلوب المنصة (6 وكلاء متوازيين للمحطات 1-6 + المحاكي يدوياً).

**إصلاحات حرجة أثناء الترحيل**:
1. `ScenarioQuiz.tsx`: كشف الكورس كان `startsWith('cmrp-')` والمعرفات `quiz-cmrp-…` → أُصلح إلى `startsWith('quiz-cmrp')`.
2. `[course]/index.astro`: `station0!.id` ينهار لكورس بلا محطة 0 → fallback لأول محطة مع نص زر متكيف.
3. `[course]/index.astro`: فلتر المحطات كان بلا `courseId` (تسرب عبر الكورسات) → أُصلح + `totalMinutes` لكل كورس.
4. `[course]/exam.astro`: كان يعرض محاكي CFM لكل الكورسات → `CmrpMockExam` لكورس cmrp + وصف متكيف.
5. قاموس `cmrp-5-3-t5`: كلمة «الحماس» (في GARBLED_WORDS) → أُعيدت صياغتها «الزخم المعنوي» (مطابق لـ momentum الإنجليزية).
6. `glossary.astro`: يعرض كل المصطلحات → فلترة `getGlossaryForCourse(course)`.

**البوابات**: `qa:ar` ✔ سليم، `check` 0/0/0 (139 ملفاً)، `build` 92 صفحة (32 صفحة CMRP جديدة). السايت ماب: 88 رابطاً (55 CFM + 32 CMRP + 0 CAMA).

---

## [2026-09-17] بنية SEO الأساسية

**الملفات الرئيسية**: `astro.config.mjs`، `public/robots.txt`، `public/og-default.png`، `src/components/ui/Breadcrumb.astro`، `src/layouts/BaseLayout.astro`

1. `site` = `https://academy.gridfix.net` في `astro.config.mjs`.
2. `public/robots.txt` يُشير للسايت ماب.
3. سايت ماب filter: استبعاد صفحات الكورسات planned (`/cmrp/*`, `/cama/*`) من `sitemap-0.xml`.
4. `Breadcrumb` component مع JSON-LD BreadcrumbList — مدمج في 6 صفحات.
5. `BaseLayout`: OG كامل (og:image/og:url/og:site_name/og:locale) + Twitter Card + noindex prop.
6. صورة `og-default.png` (1200×630) مولّدة بعلامة GridFix Academy.
7. JSON-LD: `Course` في صفحات الكورسات live + `EducationalOrganization` في الصفحة الرئيسية.

---

## [2026-09-17] إصلاح حرج: معاملات المسارات الديناميكية `[course]`

**الملفات**: `src/pages/[course]/index.astro`، `map.astro`، `exam.astro`، `glossary.astro`

- **العلة**: الصفحات كانت تقرأ `Astro.props.course` وهو غير مُمرَّر في `[course]` routes → `undefined` → كل الكورسات (حتى CFM) كانت تُعرض كـ "قريباً".
- **الإصلاح**: التحويل إلى `Astro.params.course` في الصفحات الأربع.
- **التحقق**: CFM يعرض المحتوى الحي + قابل للفهرسة، CMRP يعرض "قريباً" + `noindex`، وكلاهما يبنى بنجاح.

---

## [2026-09-17] التأكد من صحة البناء

- `npm run qa:ar`: سليم — لا كلمات آلة.
- `npm run check`: 0 أخطاء، 0 تحذيرات، 0 تلميحات.
- `npm run build`: 64 صفحة مبنية بنجاح.
- التحقق اليدوي من `dist/`: robots.txt، sitemap، OG tags، JSON-LD، noindex.

---

## [2026-09-22] ترحيل كورس CAMA كاملاً — الكورس live الآن ✅

**النطاق**: 6 محطات + 17 درساً + 16 بنك كويز (48 سؤال سيناريو) + محاكي امتحان 24 سؤالاً بتوزيع مجلدات GFMAM v3 (8/1/4/8/3) + قاموس + 11 مصدراً + 17 أداة تفاعلية (`CamaMockExam.tsx`، `NpvIrrCalculator.tsx`، `LccCalculator.tsx`، `KpiDashboard.tsx` + 13 موجودة).

**بنية المنهج** — 6 محطات على مجلدات GFMAM AM Landscape v3:
1. مبادئ إدارة الأصول ومعيارا ISO 55000/55001 والحوكمة
2. الإستراتيجية: السياق (SWOT، أصحاب المصلحة، النطاق)، الطلب، الخطط (سياسة، أهداف، KPI)
3. معلومات الأصول: البنية، جودة البيانات، النظم (CMMS/CAFM/EAM)
4. القرار: التأسيس، استراتيجيات الصيانة، سلسلة التوريد، نهاية العمر
5. تحقيق القيمة: الأدوات المالية (NPV/IRR)، LCC، المؤشرات (BSC، النضج، المقارنة المرجعية)
6. الامتحان: خريطة + محاكي

**خطوات الإنجاز**:
1. كتابة 17 درساً MDX + 16 بنك كويز + 13 قاعدة أدوات + 4 أدوات جديدة (المحاكي، NPV/IRR، LCC، KPI).
2. `lesson-cama-5-3.mdx` كان ناقصاً → أُلّف بـ `KpiDashboard.tsx` ومصطلحات `cama-5-3-t1..t4`.
3. **إصلاح حرج**: `Callout.astro` كان يدعم `myth|tip|warn` فقط → أُضيف `type="example"` (فئة CAMA تعتمدها في سيناريوهاتها) — كان سيكسر كل درس CAMA وقت البناء.
4. بنوك كويز CAMA: 1-1/1-2/1-3 كانت موجودة بلا تضمين → أُلّف 13 بنكاً (2-1..5-3) وضمّن `ScenarioQuiz` في الدروس الـ16 بنيوك محلية (نمط CMRP). درس 6-1 (المحاكي) بلا ScenarioQuiz كـ CMRP-7-1.
5. **التكامل**: `courses.ts` → `live`؛ `curriculum.ts` تحويل دروس 2/3/5/6 إلى `live`؛ `exam.astro` فرع CAMA بوصف GFMAM؛ `og-cama.png` (1200×630) مولّدة عبر System.Drawing + تمرير `image`.
6. **مراجعة يدوية للعربية**: اكتُشفت أثناء مراجعة سيناريوهات الكويزات كلمات آلة لم يلتقطها السكربت (`Easement`, `ytopi توا`, `نادرة حولت`, `التشريح البيئي`, `الحرارق`, `بأوزن`, `بالتمنيف`, `زداعية`...) → أُصححت جميعها.

**البوابات**: `qa:ar` ✔ سليم، `check` ✔ 0/0/0 (188 ملفاً)، `build` ✔ 116 صفحة (17 درس CAMA + 6 محطات + exam/glossary/map). السايت ماب يشمل `/cama/*` بعد دوران المُصدِّر.

**ملاحظة مُتبقية**: `mock-cama.ts` 24 سؤالاً (8/1/4/8/3) بينما يعلن وصف المحاكي «110 أسئلة» كطموح التوزيع الرسمي لـ GFMAM (22/22/17/27/22) — لوحة المحاكي تختار من البنك الحالي، ويمكن توسيع البنك مستقبلاً دون تغيير المكوّن.

## [2026-09-23] إغلاق بنود CAMA المتبقية

- **وصف صفحة المحاكي** (`src/pages/[course]/exam.astro`): أُزيلت عبارة «المحاكاة الكاملة 110 أسئلة في 150 دقيقة» التي توحي ببنك بهذا الحجم؛ أصبح الوصف يذكر 110 أسئلة كمواصفة الامتحان الحقيقي ثم يعرض البنك المتاح — صراحة تامة مع الواقع.
- **البوابة 2**: أُضيف قسم «تغطية امتحان CAMA» إلى `project_management/EXAM_COVERAGE.md` بمصفوفة المجلدات الخمسة GFMAM مقابل المحطات + تغطية المحاكي.
- **التحقق من og-cama.png**: فحص برمجي (توقيع PNG صالح، 1200×630، 147,812 B) موافق لأخواته og-cfm/og-cmrp/og-default الذي أجري بصورتها الرسمية بشرياً غير ممكن للنموذج (بلا إدخال صوري) — يستلزم نظرة بشرية أخيرة قبل الإطلاق.
- **البوابات**: `qa:ar` ✔ سليم، `check` ✔ 0/0/0 (188 ملفاً)، `build` ✔ 116 صفحة.

---

## [2026-09-30] تحديث شعار الأكاديمية (GridFix Academy Brand Identity)

**الملفات المتأثرة**: `public/favicon.svg`، `public/logo-academic.svg`، `public/logo-icon-*.png`، `src/components/islands/SiteHeader.tsx`، `src/layouts/BaseLayout.astro`

1. **اعتماد وتطبيق الخيار الثاني**: الشعار الأكاديمي المدمج (Academic Accent) الذي يجمع بين رمز GridFix الرسمي (المفتاح المائل وإطار الحرف G بدرجتي الأزرق الكهربائي `#1482db` والرمادي الإردوازي `#65808b`) مع قبعة التخرج الأكاديمية (Mortarboard) والشريطة الذهبية لتمييز الأكاديمية كذراع تعليمي.
2. **إنتاج الأصول المتجهية (SVG)**:
   - `public/favicon.svg`: فيكتور SVG نقي عالي الدقة وخفيف الوزن (2 KB) يعمل على كافة المقاسات والشاشات.
   - `public/logo-academic.svg`: نسخة فيكتور للشعار الأكاديمي المعتمد.
   - أيقونات متعددة المقاسات PWA و Apple Touch (`logo-icon-512.png`, `192.png`, `64.png`, `32.png`).
3. **تحديث الهيدر والفوتر**:
   - `SiteHeader.tsx`: تحديث وسم الشعار مع تمييز اسم GridFix بلون العلامة الأزرق (`#1482db`) وكلمة Academy.
   - `BaseLayout.astro`: تحديث أيقونة الفوتر وإضافة رابط `apple-touch-icon`.
4. **البوابات**: `qa:ar` ✔ سليم.

---

## [2026-09-30] ترقية هوية الألوان وإبراز الحضور المؤسسي لـ GridFix

**الملفات المتأثرة**: `src/styles/global.css`، `src/components/islands/SiteHeader.tsx`، `src/pages/index.astro`، `src/layouts/BaseLayout.astro`

1. **توحيد هوية الألوان (Color Palette Upgrade)**:
   - تحويل تدرج `--color-brand-*` في `global.css` بالكامل من الفيروزي (Teal) القديم إلى **الأزرق الكهربائي الرسمي لـ GridFix (`#1482db` وتدرجاته من 50 إلى 900)**، مما وحّد ما يقارب 300 عنصر في الموقع ليتطابق مع الشعار و`gridfix.net`.
   - تعديل رسوم الحركة (Pulse glow) لتتناغم مع درجات الأزرق.
2. **إبراز حضور GridFix وإعطاء الداعم حقه المؤسسي**:
   - **الهيدر العلوي**: تحويل شارة «⚡ مدعوم من GridFix» من زر رمادي باهت إلى شارة تفاعلية بارزة ومضيئة بـ Pulse ومؤشر رابط خارجي `↗`، مع إضافتها لأول مرة لقائمة الموبايل المنسدلة.
   - **الصفحة الرئيسية (Hero & Showcase)**: إضافة قسم مخصص وفخم بعنوان «مبادرة المسؤولية المعرفية والمجتمعية • برعاية ودعم GridFix»، يشرح نظام CMMS الميداني، ورسالة إتاحة الكورسات والامتحانات مجاناً، مع أزرار دعوة مباشرة (CTA) لزيارة المنصة وتجربة الديمو الحي.
   - **تذييل الموقع (Footer)**: تحويل عمود الداعم إلى بطاقة راعية متكاملة (Sponsor & Developer Card) بحدود زرقاء وروابط تفاعلية واضحة.
3. **البوابات**: `qa:ar` ✔ سليم. 

---

## [2026-09-30] المراجعة الشاملة للمنصة الحية (Multi-Persona Audit)

**الملف المولد**: `project_management/PLATFORM_AUDIT_NOTES.md`

- إجراء مراجعة شاملة متزامنة للموقع الحي (`https://academy.gridfix.net/`) والكود المصدري من 3 زوايا:
  1. **طالب علم ومتعلم**: تدفق الانتقال بين المحطات، ترتيب محطة امتحان CFM، اكتشاف لوحة البحث، وتجربة زر الهيرو.
  2. **خبير صيانة ومرافق وإدارة أصول**: دقة حساب مؤشر EUI ومساحة GFA، قيمة البداية لحاسبة RIME، تكلفة الاستبدال في LCC، ومنظمة WPiAM لشهادة CAMA.
  3. **مطور برمجيات**: كشف خطأ ترجمة «صالة GridFix» في 3 صفحات، ازدواجية رابط الجوال، خطأ وسم الميتا في المحطات، وغياب كورس CAMA من صفحة 404 والفوتر.
- توثيق كامل الملاحظات وخطة العمل ذات الأولويات في `PLATFORM_AUDIT_NOTES.md`.

---

## [2026-10-01] تطبيق وإصلاح كافة ملاحظات المراجعة الشاملة (14 بنداً)

**الملفات المتأثرة**:
- الصفحات: `src/pages/[course]/index.astro`، `src/pages/[course]/map.astro`، `src/pages/[course]/glossary.astro`، `src/pages/[course]/stations/[station].astro`، `src/pages/index.astro`، `src/pages/404.astro`
- التخطيط والواجهة: `src/layouts/BaseLayout.astro`، `src/components/islands/SiteHeader.tsx`، `src/components/islands/SearchPalette.tsx`، `src/components/ui/LessonNav.astro`
- الأدوات والمحاكيات: `src/components/islands/tools/cmrp/RIMECalculator.tsx`، `src/components/islands/tools/cfm/EnergyUseCalculator.tsx`، `src/components/islands/tools/cfm/LifeCycleCostTool.tsx`، `src/components/islands/tools/cfm/SpaceDensityTool.tsx`، `src/components/islands/tools/cfm/MockExam.tsx`، `src/components/islands/tools/cfm/PillarsExplorer.tsx`
- المنهج والمحتوى: `src/data/curriculum.ts`، `src/content/stations/cfm/station-11.md`، `src/content/stations/cfm/station-12.md`، `src/content/lessons/cfm/lesson-11-1..3.mdx`، `src/content/lessons/cfm/lesson-12-1.mdx`، `src/data/quiz/cfm/quiz-11-1..3.ts`، `src/data/quiz/cfm/quiz-12-1.ts`، `project_management/EXAM_COVERAGE.md`
- ملفات الويب والأصول: `public/manifest.webmanifest`

**الإصلاحات المنفذة بالتفصيل**:
1. **تصحيح خطأ الترجمة «صالة GridFix» (SEO & Copy)**:
   - تم استبدال «صالة GridFix» في وسم الـ title بـ «أكاديمية GridFix» في صفحات `[course]/index.astro` و `map.astro` و `glossary.astro`.
2. **تصحيح وسم الميتا لمحطات الكورسات (SEO & Meta Description)**:
   - تمرير الوصف العربي `data.description` بدلاً من النص الإنجليزي في `src/pages/[course]/stations/[station].astro` لضمان ظهور مقتطف عربي جذاب في محركات البحث.
3. **تصحيح القيمة الافتراضية لحاسبة RIME (حاسبة CMRP)**:
   - تعديل حالة البداية لـ `ecr` في `RIMECalculator.tsx` من القيمة غير المعرفة `9` إلى القيمة القياسية `8` (معدات مساعدة حرجة)، مما أنهى فراغ الاختيار الأول فور فتح الأداة.
4. **تدقيق مؤشر كثافة استهلاك الطاقة EUI (حاسبة CFM)**:
   - تصحيح مسمى المساحة في `EnergyUseCalculator.tsx` من "صافي المساحة" إلى "إجمالي المساحة المبنية GFA (م²)" طبقاً لمعايير ASHRAE 100 و ENERGY STAR، مع إضافة حاشية علمية توضيحية.
5. **معالجة شرط الحدود في تكلفة دورة الحياة LCC**:
   - منع احتساب تكلفة شراء استبدال جديد كامل في السنة الأخيرة من أفق الدراسة `y === HORIZON` في `LifeCycleCostTool.tsx`.
6. **ضبط مؤشر استخدام المساحة في أداة الكثافة المكانية**:
   - حصر نسبة الاستغلال الفعلي بين 0% و 100% وإضافة ملاحظة توجيهية عند تجاوز الطاقة الاستيعابية في `SpaceDensityTool.tsx`.
7. **تحديث الروابط القانونية وتذييل الموقع (Footer & Disclaimer)**:
   - إضافة مسار CAMA لقائمة الكورسات في الفوتر، وإدراج المنظمة الدولية لإدارة الأصول (WPiAM) في نص إخلاء المسؤولية الرسمي إلى جانب IFMA و SMRP.
8. **تكامل صفحة الخطأ 404 مع مسار CAMA**:
   - إضافة بطاقة مسار CAMA إلى شبكة الكورسات في `src/pages/404.astro` وتعديل التوزيع الشبكي ليتسع للأربعة مسارات بسلاسة.
9. **إزالة الازدواجية في قائمة الجوال (Mobile Menu)**:
   - منع تكرار زر "اختيار الكورس" في قائمة الجوال المنسدلة عند التواجد في الصفحة الرئيسية.
10. **تعزيز اكتشاف لوحة البحث السريع (Search Palette)**:
    - إضافة أيقونة بحث واضحة (🔍) في شريط الهيدر بجانب زر اختصار الكيبورد على الديسكتوب، وزر بحث مباشر في قائمة الموبايل.
11. **تحسين تدفق زر الحث على الفعل (Hero CTA)**:
    - توجيه زر "ابدأ مسارك التعليمي مجاناً" إلى قسم الكورسات `#courses` بدلاً من فرض كورس CFM مباشرة.
12. **الربط التلقائي بين المحطات المتتالية (Inter-Station Navigation)**:
    - ترقية مكون `LessonNav.astro` لربط آخر درس في المحطة بأول درس في المحطة التالية والعكس تلقائياً دون انقطاع لتجربة دراسة متصلة.
13. **إضافة ملف بيان تطبيق الويب التقدمي (PWA Web Manifest)**:
    - إنشاء `public/manifest.webmanifest` متضمناً هوية GridFix Academy وألوان العلامة وتوجيهه بالهيد في `BaseLayout.astro`.
14. **إعادة ترتيب محطات CFM لتتوافق مع المنطق الأكاديمي**:
    - جعل المحطة 11 مخصصة لركن "إدارة المشاريع (Domain J)" (3 دروس + 3 بنوك كويز).
    - جعل المحطة 12 هي محطة الختام المخصصة لمحاكي امتحان CFM النهائي (Domain L).
    - تحديث `curriculum.ts` ومكونات `MockExam.tsx` و `PillarsExplorer.tsx` وتحديث `EXAM_COVERAGE.md`.

**نتائج بوابات الجودة (Verification Gates)**:
- `npm run qa:ar`: نجاح 100% (خلو تام من كلمات الآلة والتشوهات).
- `npm run check`: نجاح تام (0 أخطاء، 0 تحذيرات عبر 194 ملفاً).
- `npm run build`: نجاح تام وبناء 116 صفحة بالكامل دون أي عائق.

