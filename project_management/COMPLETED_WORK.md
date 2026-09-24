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
