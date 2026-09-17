# سجل مهام أكاديمية GridFix — للمتابعة بين الجلسات

> **أولوية عالية**: هذا الملف هو المرجع الرسمي لكل المهام والقرارات. أي جلسة جديدة تبدأ بقراءته قبل أي عمل.

## 1. رؤية المنصة

- المنصة اسمها **GridFix Academy** (`gridfix.net`) — منصة تعليمية عربية مجانية لكل كورسات الصيانة وإدارة الأصول.
- كود النطاق في `astro.config.mjs` حالياً `https://cfm-course.example.com` — يجب تحديثه إلى النطاق الحقيقي عند الإطلاق.
- القاعدة الذهبية: **كل كورس له مجلده المستقل** (content / data / tool / pages) والتقنية Astro 5 + React islands + Tailwind 4 + MDX.

### الكورسات (من `src/data/courses.ts`)
| id | code | الحالة | المحتوى |
|----|------|--------|---------|
| `cfm` | CFM | ✅ live | اكتمل بالكامل (13 محطة، 38 درساً، 24 أداة، 38 كويزاً، قاموس، مصادر) |
| `cmrp` | CMRP | 🚧 planned | **قيد النقل من D:\programming\CMRP** (7 محطات، 20 درساً، 20 أداة، 110 سؤال امتحان) |
| `cama` | CAMA | 🚧 planned | Certified Asset Management Assessor — تقييم إدارة الأصول (لم يبدأ بعد) |

## 2. البنية الحالية (تم تنفيذها ✓)

- `src/data/courses.ts` — سجل الكورسات (courses, getCourse, getLiveCourses).
- مجلدات لكل كورس:
  - `src/content/stations/cfm/` و `src/content/lessons/cfm/` (الدروس 38 والـ MDX تستورد أدواتها من `tools/cfm/`)
  - `src/data/quiz/cfm/` و `src/data/glossary/cfm.ts` و `src/data/sources/cfm.ts`
  - `src/components/islands/tools/cfm/`
- صفحات ديناميكية:
  - `src/pages/index.astro` → **صفحة الـ Landing لاختيار الكورس** (يعرض كل الكورسات، planned تظهر "قريباً").
  - `src/pages/[course]/index.astro` → صفحة الكورس الرئيسية.
  - `src/pages/[course]/stations/[station].astro` → صفحة محطة.
  - `src/pages/[course]/lessons/[lesson].astro` → صفحة درس.
  - `src/pages/[course]/map.astro` / `exam.astro` / `glossary.astro`.
- SiteHeader يعتمد course-aware عن طريق استخراج أول قطاع من `window.location.pathname`.
- LessonLayout وLessonNav: `course` prop يُمرَّر في كل المسارات.
- بوابات الجودة تشتغل: `npm run check` (0 أخطاء) و `npm run build` (64 صفحة) و `qa:ar`.

### ملاحظات مهمة للبناء
- عمق imports يختلف حسب مكان الصفحة:
  - `pages/[course]/X.astro` → `../../`
  - `pages/[course]/stations/[station].astro` و `pages/[course]/lessons/[lesson].astro` → `../../../`
- CMRP سيكون له معرفات `lesson-1-1` متطابقة مع CFM! يجب **بادئة المعرفات** (مثل `cmrp-1-1` أو درس أمامي `lesson-cmrp-1-1` وأسط forms موحدة) — لم يُقرر بعد تحديداً، يُناقش قبل إنشاء محتوى CMRP.

## 3. المهمة الجارية: بناء كورس CMRP (أولوية)

**مصدر المادة**: `D:\programming\CMRP` (قراءة فقط — ممنوع التعديل فيه، فقط نسخ المادة العلمية).

### خطوات النقل (بالترتيب)
1. إنشاء `src/content/stations/cmrp/` (7 محطات من CMRP STATIONS) — ببادئات معرفات فريدة.
2. إنشاء `src/content/lessons/cmrp/` (20 درساً MDX بنمط منصة CFM) — من `Lesson*View.tsx` (النص العلمي) + `lesson*_*.ts` (TERMS + QUESTIONS).
3. إنشاء `src/data/quiz/cmrp/` (20 بنكاً بأسلوب QuizBank بتعريف صعوبة عربي) — ترجمة صعوبة easy/medium/hard → سهل/متوسط/صعب وذيل fields بالإنجليزية.
4. بناء 20 أداة في `src/components/islands/tools/cmrp/` **بأسلوب أدواتنا البسيطة** (قياساً على RiskMatrix/BudgetSimulator) — لا تُنسخ كما هي، تُعاد صياغتها.
5. إنشاء بنك الامتحان الشامل `mockExamQuestions` (110 أسئلة، أعمدته الخمسة PILLARS_METADATA) وما يُوافق صفحة `[course]/exam.astro` الجديدة.
6. إضافة مصطلحات CMRP إلى `src/data/glossary/cmrp.ts` (يُصدِّر index.ts) ومصادر CMRP إلى `src/data/sources/cmrp.ts`.
7. تحديث `src/data/curriculum.ts` بإضافة محطات CMRP (مع courseId) لن تتعارض.
8. تشغيل `npm run qa:ar` + مراجعة يدوية + `npm run check` + `npm run build`.

### بنود بدون قرار بعد (ناقشها مع المستخدم)
- بادئة معرفات دروس CMRP (اقتراح: `cmrp-1-1`).
- ربط وسائل التقدم (progress storage) بالكورس — حالياً localStorage مشترك `cfm-course-progress@v1`.
- صفحة glossary تُظهر كل المصطلحات لكل الكورسات — هل نضيف فلتر `course`؟

## 4. المهام المستقبلية
- كورس CAMA (تقييم إدارة الأصول) — مجهّز في courses.ts كـ planned، يلزم تفصيل المحتوى.
- صفحة `/path` عامة (خريطة ترابط الدروس لكل كورس) — كانت planned في الترجمة.
- Multi-language: `i18n` يدعم الانجليزية لكن سر المحتوى عربي (بأسلوب المصطلحات الإنجليزية في أقواس).

## 5. قواعد الجودة الإلزامية (من AGENTS.md)
```bash
npm run qa:ar   # بوابة جودة العربية (مع أي تعديل نصوص)
npm run check   # TS + Astro
npm run build   # يجب أن ينجح
```
- مراجعة يدوية لا سكربت بديلاً. أي كلمة آلة جديدة تُضاف إلى `GARBLED_WORDS` في `scripts/qa-arabic.mjs`.
- المصطلحات بالإنجليزية بين قوسين في أول ورود (مثل «شبه الحوادث (Near Miss)»).