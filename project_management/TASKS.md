# GridFix Academy — خطة العمل الشاملة

> **مرجع رسمي**: يُقرأ في بداية كل جلسة. لا يبدأ عمل دون قراءته.
> **آخر تحديث**: 2026-09-17

---

## 1. رؤية المنصة

- المنصة اسمها **GridFix Academy** — منصة تعليمية عربية مجانية لكل كورسات الصيانة وإدارة الأصول.
- النطاق: `https://academy.gridfix.net`
- التقنية: Astro 5 + React islands + Tailwind 4 + MDX + TypeScript
- القاعدة الذهبية: **كل كورس له مجلده المستقل** (content / data / tools / pages)

---

## 2. قواعد إدارة المشروع (من MASTER_PLAN.md + AGENTS.md)

### 2.1 قبل بدء العمل
- اقرأ هذا الملف كاملاً في بداية كل جلسة.
- اقرأ `MASTER_PLAN.md` والـ `COMPLETED_WORK.md` لفهم السياق الكامل.
- لا تبدأ مهمة جديدة دون التأكد من اكتمال المهام ذات الأولوية الأعلى.
- عند الشك في قرار تقني، سأل المستخدم مباشرةً بدلاً من التخمين.

### 2.2 أثناء العمل
- **إدارة التقدم**: بعد كل خطوة كبرى، حدّث `COMPLETED_WORK.md` بالإنجاز والتاريخ.
- **ال-commit**: لا يُ-commit إلا عند طلب المستخدم صراحةً.
- **المراجعة**: أي ملف منقّل أو مكتوب يجب مراجعته يدوياً قبل اعتباره مكتملاً.
- **لا تتوقف**: إذا اكتملت مهمة، انتقل للتالية في القائمة فوراً.
- **التوثيق**: أي قرار جديد يُسجّل في قسم "القرارات المُتخذة" في هذا الملف.

### 2.3 بوابات الجودة الثلاث (من MASTER_PLAN.md — إلزامية)
```bash
# البوابة 1: جودة العربية — مراجعة يدوية + npm run qa:ar
npm run qa:ar

# البوابة 2: تغطية الامتحان — فحص EXAM_COVERAGE.md لكل كورس
#   لا يُعتبر كورس مكتملاً ما دام أي بند من أركان الامتحان بلا تغطية

# البوابة 3: الفحص والبناء
npm run check     # TypeScript + Astro diagnostics
npm run build     # يجب أن ينجح دائماً
```
- **البوابة 1** (عربية): المراجعة اليدوية شرط أساسي لا يُغني عنه السكربت (AGENTS.md).
- **البوابة 2** (امتحان): `EXAM_COVERAGE.md` تُحدَّث مع كل محطة. CFM: 11 ركن IFMA — تحقق من التغطية.
- **البوابة 3** (فحص): لا مهمة مكتملة بدون `0 errors` ونجاح `build`.
- **تسلسل الإصدار**: محتوى مُنقَّح يدوياً → `qa:ar` → `check` → `build` → commit.

### 2.4 قواعد المحتوى (من AGENTS.md)
- **ممنوع كلمات الآلة**: أي كلمة غريبة تُضاف إلى `GARBLED_WORDS` في `scripts/qa-arabic.mjs`.
- **المصطلحات الإنجليزية**: بين قوسين في أول ورود: «شبه الحوادث (Near Miss)».
- **مراجعة يدوية**: прочت كل نص مولّد بحثاً عن أخطاء لا يلتقطها السكربت.
- **النمط**: `Callout` للتحذيرات، `GlossaryCard` للمصطلحات، `ScenarioQuiz` للكويزات.

### 2.5 معالجة الأخطاء
- إذا فشل `check` أو `build`، أصلح الأخطاء فوراً قبل المتابعة.
- إذا ظهرت كلمة آلة جديدة في `qa:ar`، أضفها إلى `GARBLED_WORDS`.
- إذا تعارض ملفان، راجع `MASTER_PLAN.md` و `TASKS.md` للقرار الصحيح ثم أصلح.

---

## 3. ملخص الحالة

```
CFM:  ✅ live    — 13 محطة، 38 درساً، 24 أداة، 38 كويزاً، قاموس، مصادر
CMRP: ✅ live    — 7 محطات، 21 درساً، 21 أداة، 20 كويزاً + محاكي 110 أسئلة (22/16/33/14/25)
CAMA: ✅ live    — 6 محطات، 17 درساً، 17 أداة، 16 كويزاً + محاكي GFMAM (بنك سيناريوهات بمجلداته الخمسة) + قاموس + مصادر
```

### المجلدات الافتراضية
```
src/content/stations/{course}/     — ملفات .md للمحطات
src/content/lessons/{course}/      — ملفات .mdx للدروس
src/data/quiz/{course}/           — ملفات QuizBank
src/data/glossary/{course}.ts     — مصطلحات كل كورس
src/data/sources/{course}.ts      — مصادر كل كورس
src/components/islands/tools/{course}/  — أدوات تفاعلية
```

---

## 4. القرارات المُتخذة (لا تُعاد مناقشتها)

| القرار | التفاصيل |
|--------|----------|
| **معرّفات CMRP** | بادئة لكل المعرّفات: `station-cmrp-1..7`، `lesson-cmrp-1-1..`، `quiz-cmrp-1-1..` |
| **تخزين التقدم** | مفتاح مستقل لكل كورس: `{course}-course-progress@v1` في `src/lib/storage.ts` |
| **ScenarioQuiz** | يستنتج الكورس من بادئة المعرّف (`quiz-cmrp`→cmrp، `quiz-cama`→cama، غيره→cfm) |
| **الاسم والمظهر** | GridFix Academy — فوتر عام، SiteHeader course-aware، breadcrumbs بـ JSON-LD |
| **النطاق** | `https://academy.gridfix.net` |
| **MockExam** | كل كورس له محاكيه: `tools/cfm/MockExam.tsx` و`tools/cmrp/CmrpMockExam.tsx` — و`exam.astro` يختار حسب الكورس |

---

## 5. المهام المكتملة ✓

- [x] بناء Landing page لاختيار الكورس (`src/pages/index.astro`)
- [x] بناء صفحات [course] الديناميكية (index, stations, lessons, map, exam, glossary)
- [x] SiteHeader course-aware مع تبديل الكورس
- [x] LessonLayout وLessonNav مع `course` prop
- [x] كود التقدم course-aware (`storageKeyFor(course)` في `src/lib/storage.ts`)
- [x] `site` = `https://academy.gridfix.net` في `astro.config.mjs`
- [x] `public/robots.txt` يُشير للسايت ماب
- [x] Breadcrumb component مع JSON-LD BreadcrumbList في 6 صفحات
- [x] canonical URL يستخدم النطاق الصحيح

---

## ★ أولوية 1: SEO (مهم — user طلبها)

> كل صفحة قابلة للفهرسة لها بيانات متكاملة. الصفحات planned تُستبعد.

### 🔴 لم يُنفَّذ بعد
- [ ] **اختبار robots.txt** بـ `curl https://academy.gridfix.net/robots.txt` بعد النشر الفعلي.
- [ ] **Google Search Console**: تسجيل النطاق وإرسال السايت ماب (بعد النشر).

### ✅ تم تنفيذه (2026-09-17 — صور OG + صفحة 404)
- [x] **og:image لكل كورس**: `og-cfm.png` و`og-cmrp.png` (1200×630) + تمرير `image` من `[course]/index.astro` و`LessonLayout`
- [x] **صفحة 404 مخصصة** (`src/pages/404.astro`) بروابط الكورسات + `noindex`

### ✅ تم تنفيذه
- [x] `site` = `https://academy.gridfix.net`
- [x] `public/robots.txt`
- [x] سايت ماب filter يستبعد مسارات الكورسات planned (يستورد `courses` حياً — حالياً يستبعد `/cama/*` فقط)
- [x] `Breadcrumb` + JSON-LD BreadcrumbList في 6 صفحات
- [x] noindex لصفحات planned (BaseLayout prop)
- [x] og:image + og:url + og:site_name + og:locale + Twitter Card
- [x] JSON-LD `Course` (صفحات live) + `EducationalOrganization` (الرئيسية)
- [x] تحسين عنوان الرئيسية
- [x] **إصلاح حرج**: `Astro.params.course` بدل `Astro.props.course`
- [x] فلتر محطات `[course]/index.astro` بـ `courseId` + fallback محطة البدء (بلا station-0)

---

## ★ أولوية 2: بناء كورس CMRP — ✅ مكتمل live (2026-09-17)

> **مصدر المادة**: `D:\programming\CMRP` — **قراءة فقط** (لا يُعدَّل، فقط نسخ العلم).
> **المنجز**: 7 محطات، 21 درساً، 20 أداة، 20 بنك كويز (98 سؤالاً)، 119 مصطلحاً، 34 مصدراً، محاكي 110 أسئلة.

### نسيج المحتوى لكل درس
1. امتحان الأهداف (Integration Sentence)
2. مثال افتتاحي (اختياري)
3. الشرح العلمي (عناوين فرعية بـ `##`)
4. صندوق المفاهيم الخاطئة (`<Callout type="myth">`)
5. Application Box (`<Callout type="example">`)
6. أداة الدرس (`<ToolName client:load />`)
7. Quiz (`<ScenarioQuiz>`)
8. GlossaryCard
9. المصادر
10. الخلاصة

### نسيج QuizBank
- `difficulty` بالعربي: `'سهل' | 'متوسط' | 'صعب'`
- QuizQuestion: `scenarioAr`, `questionAr`, `questionEn`, `explanationAr`, `explanationEn`

### خطوات التنفيذ بالترتيب — كلها ✅
1. ✅ **curriculum.ts**: إضافة محطات CMRP مع `courseId: 'cmrp'`
2. ✅ **7 محطات** في `src/content/stations/cmrp/`
3. ✅ **21 درساً MDX** في `src/content/lessons/cmrp/` (20 + درس المحاكي)
4. ✅ **20 بنك كويز** في `src/data/quiz/cmrp/` (+ ملف `mock-cmrp.ts` بـ 110 أسئلة)
5. ✅ **21 أداة** في `src/components/islands/tools/cmrp/` (20 + `CmrpMockExam.tsx`)
6. ✅ **مصطلحات CMRP** في `src/data/glossary/cmrp.ts` (119)
7. ✅ **مصادر CMRP** في `src/data/sources/cmrp.ts` (34)
8. ✅ **MockExam خاص بـ CMRP** (`tools/cmrp/CmrpMockExam.tsx` + `exam.astro` مشروط)
9. ✅ **qa:ar + مراجعة يدوية + check (0/0/0) + build (92 صفحة)**
10. ✅ **قلب `status: 'live'` في courses.ts** — السايت ماب: 88 رابطاً (55 CFM + 32 CMRP + 0 CAMA)

---

## ★ أولوية 3: الكورس الثالث CAMA — ✅ مكتمل live (2026-09-22)

> Certified Asset Management Assessor — تقييم إدارة الأصول — تتبع GFMAM AM Landscape v3 (مجلدات الإصدار/السياق/المعلومات/القرار/تحقيق القيمة) + ISO 55000/55001/55002.
> **المنجز**: 6 محطات، 17 درساً، 17 أداة، 16 بنك كويز (48 سؤالاً) + محاكي 24 سؤالاً بتوزيع المجلدات (8/1/4/8/3)، قاموس، مصادر.

### خطوات التنفيذ — كلها ✅
1. ✅ **curriculum.ts**: محطات CAMA الست (`station-cama-1..6`) + دروس 17 → `live`
2. ✅ **6 محطات** في `src/content/stations/cama/`
3. ✅ **17 درساً MDX** في `src/content/lessons/cama/` (16 + درس المحاكي 6-1)
4. ✅ **16 بنك كويز** في `src/data/quiz/cama/` (+ ملف `mock-cama.ts` بـ 24 سؤالاً بتوزيع المجلدات)
5. ✅ **17 أداة** في `src/components/islands/tools/cama/` (16 رقم + `CamaMockExam.tsx`)
6. ✅ **مصطلحات CAMA** في `src/data/glossary/cama.ts`
7. ✅ **مصادر CAMA** في `src/data/sources/cama.ts` (11 مصدراً — ISO 55000/1/2, GFMAM, IAM, ISO 14224, SMRP...)
8. ✅ **MockExam خاص بـ CAMA** (`tools/cama/CamaMockExam.tsx` + `exam.astro` مشروط)
9. ✅ **ScenarioQuiz مضمّن** في الدروس الـ16 (كويز بنيوك محلية لكل درس، كـ CMRP)
10. ✅ **صورة OG** `og-cama.png` + تمرير `image` في `[course]/index.astro` و`LessonLayout`
11. ✅ **qa:ar + مراجعة يدوية + check (0/0/0) + build (116 صفحة)**
12. ✅ **قلب `status: 'live'` في courses.ts**

---

## ★ أولوية 4: مهام تطويرية أخرى

- [x] صفحة `/path` عامة — **أُسقطت بقرار**: صفحات `/[course]/map` تغطيها (مسار زمني بالمحطات والدروس والأوزان)؛ صفحة عامة ستكون تكراراً.
- [x] فلتر قاموس حسب الكورس (`getGlossaryForCourse` — كان في أولوية 4 وأُنجز مع CMRP)
- [x] صفحة 404 مخصصة (`src/pages/404.astro` — عربية + روابط كورسات + noindex)
- [x] تحسين سرعة التحميل — **فُحصت (2026-09-17)**: الجزر مقسّمة تلقائياً (أدوات الدروس 5-10KB، محاكيات الامتحان تُحمَّل في صفحاتها فقط). لا إجراء لازم.

---

## ملاحظات تقنية مهمة

- **عمق imports حسب مكان الصفحة**:
  - `pages/[course]/X.astro` → `../../`
  - `pages/[course]/stations/[station].astro` و `lessons/[lesson].astro` → `../../../`
- **Astro frontmatter**: لا يمكن استخدام `return` مبكراً مع JSX — استخدم ternaries.
- **`getStaticPaths`**: يجب أن يفلتر بـ `getLiveCourses()` وليس hardcoded `['cfm']`.
- **MockExam**: كل كورس يستورد كويزاته الخاصة — نسخة CMRP منفصلة (`CmrpMockExam.tsx`).
- **curriculum.ts**: كل محطة تحمل `courseId` صريحاً (`cfm` للمحطة 0 فقط ضمنياً عبر `?? 'cfm'`).
