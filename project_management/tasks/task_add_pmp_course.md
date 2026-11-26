# خطة إضافة كورس PMP (Project Management Professional)
# PMP Course Addition Plan — Aligned to July 2026 ECO + PMBOK 8

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking.
> **Status:** COMPLETE — delivered live on 2026-11-26; exam-readiness rebuild completed after an independent audit; all acceptance gates passed and changes pushed to `origin/master`. Residual limitations are documented in [EXAM_COVERAGE_PMP.md](../EXAM_COVERAGE_PMP.md).

**Goal:** إضافة كورس PMP as a first-class course in GridFix Academy, driven by the **July 2026 PMP Examination Content Outline (ECO)** and **PMBOK Guide, 8th Edition**, with the same multi-course architecture used by CFM/CMRP/CAMA (content collections, curriculum registry, glossary, sources, quizzes, mock exam, audio/video hooks).

**Official baseline (verified 2026-11-26):**
- Domains & weights: **People 33% (8 tasks)**, **Process 41% (10 tasks)**, **Business Environment 26% (8 tasks)**.
- 26 tasks total; 180 questions (170 scored + 10 pretest), 240 minutes, 2 × 10-min breaks.
- Approach mix: ~40% predictive, ~60% agile/hybrid, woven across all domains.
- New emphasis: AI, sustainability, stakeholder engagement, value-based delivery, outcomes/business impact.
- Exam item types include case/scenario sets and graphic-based questions.

---

## 1. Codebase-First Discovery (already performed)

Affected authoritative layers (no code changed yet):
- Course registry: `src/data/courses.ts`
- Curriculum registry: `src/data/curriculum.ts` (uses `courseId ?? 'cfm'`)
- Content collections: `src/content/stations/**`, `src/content/lessons/**` (schema in `src/content.config.ts`, course defaults to `cfm`)
- Glossary: `src/data/glossary/{index,cama,cmrp,cfm}.ts`
- Sources: `src/data/sources/{index,cama,cmrp,cfm}.ts`
- Quizzes: `src/data/quiz/{cfm,cmrp,cama}/*`
- Mock exams: `src/components/islands/tools/{cfm,cmrp,cama}/*MockExam.tsx` + `src/pages/[course]/exam.astro`
- Course landing/OG images: `src/pages/[course]/index.astro`, `src/layouts/LessonLayout.astro`
- Audio: `src/data/audioManifest.ts`, `src/data/audioCues.ts`, `src/data/audio-cues/*`
- Progress storage: `src/lib/storage.ts` (generic by course id; no PMP-specific code needed)
- Search index: `src/lib/searchIndex.ts` (driven by `courses` + `curriculum`; no PMP-specific code)
- Tests: `tests/storage.test.mjs` (asserts `storageKeyFor` for known courses)

Key architectural facts:
- Routes are dynamic by `courses` (`getStaticPaths`), so adding a course entry auto-generates `/pmp/*`.
- Stations/lessons are filtered by `courseId ?? 'cfm'` and `status: 'live' | 'planned'`.
- A `planned` course renders a "coming soon" landing page and is `noindex`ed.
- Tools are React islands imported explicitly per course in `exam.astro` and referenced by `toolName` strings in curriculum.

---

## 2. Ambiguity & Assumption Resolution (resolved with user)

| # | Ambiguity | Resolution |
|---|-----------|------------|
| 1 | Scope | Full architectural plan (8–10 stations, lessons, tools, quizzes, mock exam). |
| 2 | Official source | July 2026 ECO + PMBOK 8 (not legacy 2021). |
| 3 | Station 0 | Yes — fundamentals, eligibility, ECO overview, exam method. |
| 4 | Initial status | `planned` (coming soon), content added incrementally. |
| 5 | Language | Arabic primary with English official terms in parentheses; bilingual UI already supported. |
| 6 | Mock exam size | Target 180 questions for parity, but ship in phases (60 → 120 → 180) to avoid blocking launch. |
| 7 | Audio/video | Follow existing pipeline conventions; audio cues optional in Phase 1. |

Assumptions to confirm at sign-off:
- Course id = `pmp`, code = `PMP`, credential = `PMP`, icon = `📋` (or user preference).
- Station ids follow `station-pmp-N`, lesson ids `lesson-pmp-N-M`.
- No new third-party dependencies (reuse React/Tailwind/Astro).
- OG image `public/og-pmp.png` to be added (can reuse default initially).

---

## 2.5 مبدأ التسلسل (ترتيب الفهم قبل ترتيب الدروس)

> **توجيه المستخدم (غير قابل للتنازل):** المحتوى يجب أن يكون مفصّلاً وشاملاً لكل جوانب المنهج، **ومنظّماً بترتيب الفهم** (من المفاهيم إلى التطبيق) لا بترتيب الدروس التقليدي (عناوين ECO كما هي). التغطية (coverage) إلزامية، لكن **الترتيب** تربوي.

**القاعدة (مُستمدة من فلسفة المنصة: "مسار الرحلة الواقعي"):**
1. **المفاهيم أولاً:** ما هو المشروع، ما هي القيمة، ما هي النُهج (تنبؤي/رشيق/هجين) — قبل أي أداة أو صيغة.
2. **الناس قبل العمليات:** القيادة، الفرق، أصحاب المصلحة، التواصل — لأن المشاريع تُنفَّذ بالبشر.
3. **التخطيط قبل التنفيذ:** النطاق → الجدول → التكلفة → الموارد → المشتريات → الجودة → المخاطر.
4. **التنفيذ والرقابة قبل الإغلاق:** تسليم، متابعة، تغييرات، EVM، إغلاق.
5. **بيئة الأعمال والقيمة أخيراً:** حوكمة، امتثال، تغيير مؤسسي، بيئة خارجية، AI، استدامة — بعد أن يفهم الدارس "كيف" يُدار المشروع.
6. **كل محطة** تربط دروسها بـ ECO tasks (domain + task) في حقل `domain`/metadata، لضمان **تغطية 100%** من ECO دون التضحية بترتيب الفهم.
7. **ضمن كل درس**: شرح مفهوم → مثال واقعي → أداة → كويز (وليس العكس).

**النتيجة:** 12 محطات (0–11) مرتبة بـ "ترتيب الفهم"، مع **~48–52 درساً** (أكبر من CFM's 38)، تغطي 26 ECO task (8 People + 10 Process + 8 Business Environment) بالكامل، إضافة إلى PMBOK 8 + Agile Practice Guide. العدد قابل للضبط (±20%) حسب عمق كل درس.

---

## 3. Impact, Edge Cases & Rollback

### Affected layers
- Data layer: `courses.ts`, `curriculum.ts`, `glossary/index.ts` + new `glossary/pmp.ts`, `sources/index.ts` + new `sources/pmp.ts`.
- Content layer: new `src/content/stations/pmp/*`, `src/content/lessons/pmp/*`.
- Quiz layer: new `src/data/quiz/pmp/*` + registration (if any central index exists; verify during implementation).
- Tools layer: new `src/components/islands/tools/pmp/*` + `exam.astro` conditional.
- UI layer: OG image conditionals in `index.astro` and `LessonLayout.astro`.
- Tests: `tests/storage.test.mjs` assertion for `pmp`.
- Docs: `SRS.md`, `CHANGELOG.md`, `MASTER_PLAN.md`, `ACTIVE_CONTEXT.md`.

### Edge cases
- `courseId ?? 'cfm'` defaults mean PMP content must explicitly set `course: pmp` in frontmatter and `courseId: 'pmp'` in curriculum; otherwise it silently attaches to CFM.
- `exam.astro` and `index.astro` use hardcoded course conditionals for OG images and mock-exam components; missing PMP branch falls back to CFM styling/component.
- Station numbers must not collide with CFM's 0–12; PMP uses its own id prefix, so numeric `number` can restart at 0 safely (filtering is by `courseId`).
- `getStaticPaths` derives from `courses`, so a `planned` course still builds `/pmp/*` (coming soon) — acceptable.
- Arabic QA gate (`qa:ar`) must pass; PMP terms like `PMP`, `PMI`, `EVM`, `WBS`, `CPM`, `AI` must be added to `ALLOWED_TERMS` if used inline with Arabic.
- Astro check: all new `.mdx` frontmatter must match schema (objectives arrays, minutes, order, etc.).

### Rollback strategy
- Because status starts `planned`, no live lessons are exposed; safe to iterate.
- All changes are additive files + small edits; rollback = revert the commit(s) and remove `pmp` from `courses.ts`; no DB/migrations involved.
- Keep a single feature branch/commit per phase to make partial rollback easy.

---

## 4. File-Level & Contract Blueprint

### 4.1 Course metadata
**Modify** `src/data/courses.ts`: add entry:
```ts
{
  id: 'pmp',
  code: 'PMP',
  title: 'محترف إدارة المشاريع',
  titleEn: 'Project Management Professional',
  tagline: 'شهادة PMP من PMI',
  description: 'مسار عملي عربي لشهادة PMP وفق ECO 2026: قيادة الفرق، تسليم القيمة، وربط المشروع ببيئة الأعمال — مع 40% predictive و 60% agile/hybrid.',
  descriptionEn: 'A practical Arabic path to the PMP credential aligned to the July 2026 ECO: leading teams, value delivery, and business environment, across predictive/agile/hybrid approaches.',
  icon: '📋',
  credential: 'PMP',
  status: 'planned',
}
```

### 4.2 Curriculum (append to `src/data/curriculum.ts`)
Stations (all `courseId: 'pmp'`, `status: 'planned'` initially; flip to `live` per station as content ships). **Order follows "order of understanding" (§2.5), not ECO domain order.** ECO domain mapping is preserved via `domain`/`examWeight` metadata for exam coverage.

| Station id | # | Title (AR) | Title (EN) | ECO domain(s) | Weight | Lessons (≈) |
|---|---|---|---|---|---|---|
| `station-pmp-0` | 0 | الأساسيات ومتطلبات الشهادة | Fundamentals & Certification | — | 0 | 5 |
| `station-pmp-1` | 1 | فهم المشروع والقيمة | Understanding Projects & Value | Process | 8 | 5 |
| `station-pmp-2` | 2 | القيادة والفرق (People) | People & Leadership | People | 33 | 6 |
| `station-pmp-3` | 3 | النطاق والمتطلبات | Scope & Requirements | Process | 6 | 4 |
| `station-pmp-4` | 4 | الجدول والتكلفة | Schedule & Cost | Process | 8 | 4 |
| `station-pmp-5` | 5 | الموارد والمشتريات والجودة | Resources, Procurement & Quality | Process | 8 | 5 |
| `station-pmp-6` | 6 | المخاطر والمشكلات | Risk & Issues | Process / BE | 5 | 4 |
| `station-pmp-7` | 7 | التسليم والرقابة والتغيير | Delivery, Control & Change | Process / BE | 6 | 5 |
| `station-pmp-8` | 8 | الإغلاق وتحقيق القيمة | Closing & Value Realization | Process / BE | 3 | 4 |
| `station-pmp-9` | 9 | بيئة الأعمال والحوكمة | Business Environment & Governance | Business Environment | 26 | 6 |
| `station-pmp-10` | 10 | التسليم الرشيق والهجين | Agile & Hybrid Delivery | All (cross-cutting) | — | 5 |
| `station-pmp-11` | 11 | محاكي الامتحان | Mock Exam | All | 100 | 2 |

Lesson ids (prefix `lesson-pmp-`):
- Station 0: `0-1` … `0-5`
- Station 1: `1-1` … `1-5`
- Station 2: `2-1` … `2-6`
- Station 3: `3-1` … `3-4`
- Station 4: `4-1` … `4-4`
- Station 5: `5-1` … `5-5`
- Station 6: `6-1` … `6-4`
- Station 7: `7-1` … `7-5`
- Station 8: `8-1` … `8-4`
- Station 9: `9-1` … `9-6`
- Station 10: `10-1` … `10-5`
- Station 11: `11-1`, `11-2`

Station 0 — الأساسيات (Fundamentals) [5]:
- 0.1 ما هي إدارة المشاريع (Project vs operations, project life cycle) — أداة: خريطة دورة حياة
- 0.2 شهادة PMP: متطلبات التسجيل والأهلية — أداة: حاسبة الأهلية
- 0.3 خريطة ECO 2026 (Domains/Tasks/Approaches) — أداة: مستكشف ECO
- 0.4 إيقاع الامتحان وطريقة الدراسة (180q/240min) — أداة: حاسبة وقت الامتحان
- 0.5 PMBOK 8 + Agile Practice Guide: كيف تدرس — أداة: خطة دراسة

Station 1 — فهم المشروع والقيمة (Understanding Projects & Value) [5] [ECO: Process — integrated plan/value]:
- 1.1 ما هو المشروع ولماذا ينجح/يفشل
- 1.2 تسليم القيمة (Value-based delivery & outcomes) — أداة: باني خريطة القيمة
- 1.3 دورة حياة المشروع (predictive) — أداة: خريطة دورة حياة
- 1.4 النهج: تنبؤي / رشيق / هجين — أداة: مقارن النُهج
- 1.5 حوكمة المشروع (Project governance basics) — أداة: هيكل حوكمة

Station 2 — القيادة والفرق (People) [6] [ECO: People — 8 tasks]:
- 2.1 الرؤية commune والقيادة — أداة: لوحة التوجيه
- 2.2 بناء الفريق وإدارته — أداة: مصفوفة RACI (reuse)
- 2.3 إدارة الصراع — أداة: شجرة قرار الصراع
- 2.4 أصحاب المصلحة: engagement & alignment — أداة: مصفوفة stakeholders (reuse)
- 2.5 إدارة توقعات أصحاب المصلحة — أداة: سجل stakeholders
- 2.6 التواصل ونقل المعرفة — أداة: باني خطة التواصل

Station 3 — النطاق والمتطلبات (Scope & Requirements) [4] [ECO: Process — scope]:
- 3.1 جمع المتطلبات وWBS — أداة: باني WBS
- 3.2 تعريف النطاق وإدارته (scope creep) — أداة: مصفوفة scope
- 3.3 تسليم القيمة (Value-based delivery) — أداة: باني خريطة القيمة
- 3.4 التحقق والتحكم في النطاق — أداة: قائمة تحقق نطاق

Station 4 — الجدول والتكلفة (Schedule & Cost) [4] [ECO: Process — schedule, finance]:
- 4.1 تقدير المدة والجدولة (CPM, float) — أداة: حاسبة CPM
- 4.2 إدارة التكلفة والموازنة — أداة: محاكي ميزانية (reuse)
- 4.3 EVM (CPI/SPI/EAC/ETC/TCPI) — أداة: حاسبة EVM
- 4.4 التنبؤ والرقابة (forecasting) — أداة: لوحة حالة المشروع

Station 5 — الموارد والمشتريات والجودة [5] [ECO: Process — resources, procurement, quality]:
- 5.1 تخطيط الموارد والفريق (resource leveling) — أداة: مصفوفة موارد
- 5.2 المشتريات والعقود (procurement) — أداة: مصفوفة Make/Buy (reuse)
- 5.3 إدارة الجودة (quality management, CoQ) — أداة: حاسبة تكلفة الجودة
- 5.4 ضمان/مراقبة الجودة (QA/QC) — أداة: قائمة تحقق جودة
- 5.5 التكامل (integrated plan & delivery) — أداة: باني خطة المشروع

Station 6 — المخاطر والمشكلات [4] [ECO: Process/BE — risk, issues]:
- 6.1 تحديد وتحليل المخاطر — أداة: مصفوفة مخاطر (reuse)
- 6.2 الاستجابة للمخاطر (strategies) — أداة: باني خطة مخاطر
- 6.3 سجل المخاطر (risk register) — أداة: سجل مخاطر
- 6.4 إدارة المشاكل (issues & impediments) — أداة: سجل مشكلات

Station 7 — التسليم والرقابة والتغيير [5] [ECO: Process/BE — integrated delivery, status, change control]:
- 7.1 تنفيذ العمل (direct & manage project work) — أداة: لوحة تنفيذ
- 7.2 المتابعة والتقرير (status reporting) — أداة: لوحة حالة المشروع
- 7.3 تغيير النطاق (change control) — أداة: سجل تغييرات
- 7.4 KPIs ومراقبة الأداء — أداة: لوحة KPIs (reuse)
- 7.5 EVM للرقابة (control) — أداة: حاسبة EVM (reuse)

Station 8 — الإغلاق وتحقيق القيمة [4] [ECO: Process/BE — closure, value]:
- 8.1 إغلاق المشروع (closeout) — أداة: قائمة إغلاق
- 8.2 تسليم/handover — أداة: قائمة تسليم
- 8.3 الدروس المستفادة (lessons learned) — أداة: نموذج دروس مستفادة
- 8.4 تحقيق القيمة (benefits realization) — أداة: باني تقرير قيمة

Station 9 — بيئة الأعمال والحوكمة [6] [ECO: Business Environment — 8 tasks]:
- 9.1 الحوكمة (governance) — أداة: قائمة امتثال حوكمة
- 9.2 الامتثال (compliance) — أداة: قائمة امتثال
- 9.3 التغيير المؤسسي (organizational change) — أداة: خريطة تغيير
- 9.4 التحسين المستمر (continuous improvement) — أداة: خريطة PDCA (reuse)
- 9.5 البيئة الخارجية (external business environment) — أداة: تحليل PESTLE
- 9.6 AI والاستدامة في المشاريع — أداة: PESTLE + AI readiness

Station 10 — التسليم الرشيق والهجين [5] [ECO: cross-cutting agile/hybrid]:
- 10.1 مبادئ Agile (Agile Manifesto, mindset)
- 10.2 Scrum (roles, events, artifacts) — أداة: لوحة Scrum
- 10.3 Kanban & flow — أداة: لوحة Kanban
- 10.4 Hybrid & scaling (SAFe/LeSS basics) — أداة: مقارن النُهج (reuse)
- 10.5 مقاييس Agile (velocity, burndown, lead/cycle time) — أداة: لوحة مقاييس Agile

Station 11 — محاكي الامتحان [2]:
- 11.1 محاكي الامتحان (180 سؤال) — أداة: PmpMockExam
- 11.2 تقرير تشخيصي + خطة تحسين — أداة: تقرير تشخيصي

**ECO coverage check:** People 33 (Station 2) + Process 41 (Stations 1,3,4,5,6,7,8) + Business 26 (Station 9) = 100. Agile/hybrid cross-cutting (Station 10 + integrated in all). Mock exam 100.

### 4.3 Content files (new)
- `src/content/stations/pmp/station-pmp-0.md` … `station-pmp-4.md` (frontmatter: id, course: pmp, number, title, titleEn, description, descriptionEn, badge, badgeEn, icon, examWeight, domain, status)
- `src/content/lessons/pmp/lesson-pmp-X-Y.mdx` (frontmatter per schema; `course: pmp`, `station`, `number`, `title`, `titleEn`, `minutes`, `order`, `objectives`, `objectivesEn`, `hasTool`, `toolName`, `toolNameEn`, `quizId`, `sources`)

### 4.4 Glossary & sources
- **New** `src/data/glossary/pmp.ts` exporting `pmpGlossary: GlossaryTerm[]` (bilingual terms: scope, WBS, EVM, CPI, SPI, float, procurement, governance, compliance, change control, risk, etc.)
- **Modify** `src/data/glossary/index.ts` import + spread.
- **New** `src/data/sources/pmp.ts` exporting `pmpSources: Record<string, Source>` (PMI ECO, PMBOK 8, Agile Practice Guide, etc.)
- **Modify** `src/data/sources/index.ts` import + spread.

### 4.5 Quizzes
- **New** `src/data/quiz/pmp/quiz-pmp-X-Y.ts` for each lesson with `quizId` (follow existing quiz module shape).
- **New** `src/data/quiz/pmp/mock-pmp.ts` question bank (phased: 60 → 120 → 180).
- Verify if there is a central quiz index; if not, dynamic import pattern in pages/tools. Inspect during implementation.

### 4.6 Tools (React islands)
**New directory** `src/components/islands/tools/pmp/`:
- `EligibilityCalculator.tsx`
- `EcoExplorer.tsx`
- `ExamPacingCalculator.tsx`
- `LifecycleMap.tsx`
- `ValueMapBuilder.tsx`
- `ApproachComparator.tsx`
- `GovernanceBasics.tsx`
- `VisionLeadershipBoard.tsx`
- `ConflictDecisionTree.tsx`
- `StakeholderMatrix.tsx` (reuse Power/Interest)
- `CommunicationPlanBuilder.tsx`
- `WbsBuilder.tsx`
- `EvmCalculator.tsx` (CPI/SPI/EAC/ETC/TCPI/float)
- `ResourceProcurementMatrix.tsx` (reuse Make-vs-Buy)
- `QualityCostCalculator.tsx`
- `RiskRegister.tsx` (reuse RiskMatrix)
- `ProjectPlanBuilder.tsx`
- `StatusDashboard.tsx`
- `ChangeLogTool.tsx`
- `IssueLog.tsx`
- `ClosureChecklist.tsx`
- `GovernanceComplianceChecklist.tsx`
- `ChangeManagementMap.tsx`
- `PestleAiReadiness.tsx`
- `ValueRealizationReport.tsx`
- `PmpMockExam.tsx`

Reuse existing tools where semantically identical (RiskMatrix, Stakeholder/PowerInterest matrix, BudgetSimulator, Make-vs-Buy) via import; only create PMP wrappers if needed.

### 4.7 UI integration edits
- `src/pages/[course]/index.astro`: add `course === 'pmp' ? '/og-pmp.png'` branch.
- `src/layouts/LessonLayout.astro`: add PMP OG branch.
- `src/pages/[course]/exam.astro`: import `PmpMockExam` and add `course === 'pmp'` branch; add exam pacing text branch.
- `src/pages/[course]/index.astro` maybe add PMP-specific exam text (optional).
- Add `public/og-pmp.png` (or reuse `og-default.png` initially).

### 4.8 Audio/video (Phase 2+)
- `src/data/audioManifest.ts`: add `lesson-pmp-*` entries as recordings are produced.
- `src/data/audio-cues/pmp.ts` + merge in `audioCues.ts` when slides are authored.
- Video export scripts consume content automatically; no script changes needed.

### 4.9 Tests & gates
- `tests/storage.test.mjs`: add `assert.equal(storageKeyFor('pmp'), 'pmp-course-progress@v1');`.
- Add course to any hardcoded course lists if found during implementation (search `cfm`/`cmrp`/`cama` again before coding).

---

## 5. Phased Execution Plan

### Phase 0 — Scaffold (status stays `planned`)
- [x] Add `pmp` to `courses.ts`.
- [x] Append stations/lessons to `curriculum.ts` (all `planned`).
- [x] Create empty station/lesson content files with valid frontmatter (or minimal stubs) so Astro builds.
- [x] Create glossary/sources skeletons.
- [x] Update `exam.astro`/`index.astro`/`LessonLayout.astro` conditionals.
- [x] Add storage test assertion.
- [x] Run `npm run verify` in Phase 0 (passed while the course still showed "coming soon").

### Phase 1 — Stations 0 + 1 (Fundamentals + Understanding Projects) live
- [x] Write 5 + 5 lessons (Arabic-first, bilingual terms, concept → example → tool → quiz).
- [x] Implement Station 0 + Station 1 tools.
- [x] Create quizzes for 10 lessons.
- [x] Flip Station 0 and Station 1 to `live`; set course `status: 'live'` once Station 0 ships.
- [x] Audio recordings for Station 0/1 — explicitly deferred as optional; no PMP audio shipped in this release.
- [x] Run `npm run verify` + manual Arabic review.

### Phase 2 — Stations 2 + 3 + 4 (People + Scope + Schedule/Cost) live
- [x] Write 6 + 4 + 4 lessons + tools (RACI, WBS, CPM, EVM).
- [x] Quizzes (14).
- [x] Flip to `live`.

### Phase 3 — Stations 5 + 6 + 7 + 8 (Resources/Quality + Risk + Delivery + Closing) live
- [x] Write 5 + 4 + 5 + 4 lessons + tools.
- [x] Quizzes (18).
- [x] Flip to `live`.

### Phase 4 — Stations 9 + 10 + 11 (Business Environment + Agile + Mock Exam) + launch
- [x] Write 6 + 5 + 2 lessons + tools.
- [x] Quizzes (13).
- [x] Build `PmpMockExam` with 60 → 120 → 180 questions.
- [x] Add exam pacing text + domain breakdown (180 q / 240 min).
- [x] Set course `status: 'live'` (if not already).
- [x] OG image, sitemap check, analytics.
- [x] Final `npm run verify` + `npm run build`.

---

## 6. Testable Acceptance Criteria

Phase 0 (scaffold) is "done" when:
- [x] `npm run astro check` passes (0 errors).
- [x] `npm run qa:ar` passes.
- [x] `npm run test` passes (storage test includes `pmp`).
- [x] `npm run format:check` passes.
- [x] `/pmp/` renders the live course landing with complete course metadata.
- [x] No CFM/CMRP/CAMA regression (existing tests still green).

Full course is "done" when:
- [x] All 12 stations + 55 lessons live with valid frontmatter.
- [x] Each lesson has objectives, glossary terms, at least 4 scenario quiz questions, sources.
- [x] Each station's examWeight sums correctly (33/41/26).
- [x] Mock exam runs end-to-end with timer + diagnostic breakdown by domain.
- [x] `npm run verify` + `npm run build` pass; build page count increases by expected amount.
- [x] Manual Arabic review sign-off for every lesson (dual verification).

---

## 7. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Content volume (20 lessons) delays launch | Incremental `live` per station; course can be `planned` until Station 0 ships. |
| Arabic quality regressions | Run `qa:ar` per phase; manual review before flip to `live`. |
| Tool sprawl/bugs | Reuse existing tools; add PMP-specific tools only where domain-unique. |
| Mock exam question count (180) | Phase in (60/120/180); mock exam optional for `live` status of domains. |
| OG image missing | Reuse `og-default.png` until `og-pmp.png` is designed. |
| Approach mix (40/60) not reflected | Each lesson explicitly tags scenarios as predictive/agile/hybrid in quiz explanations. |

---

## 8. Sign-Off Gate

This plan is complete. **Production code was implemented, audited, rebuilt where the audit found shortcuts, verified, committed and pushed.**

Delivered scope:
- 12 live stations and 55 live lessons with bilingual Arabic-first terminology; each lesson 1,110–1,540 words with a worked numeric example and teaching island.
- 220 lesson quiz questions (4 per lesson); all 880 explanations are unique and at least 20 characters, with correct-option feedback and one hinted retry.
- 180-question mock exam: 59 People / 74 Process / 47 Business Environment at 80 seconds per question, with skipped questions included in review.
- July 2026 ECO weights (33/41/26) in both curriculum and station files, 26 tasks explicitly mapped in `src/data/pmpEcoTasks.ts`, and a ~40/60 predictive-agile-hybrid teaching balance.
- Generative-AI governance, sustainability/ESG metrics, a benefit-management plan artifact, and two shared multi-question case sets with data-table stems.
- Final gates: `npm run verify` PASS (319 files, 0 errors, 0 warnings, 0 hints, 36 tests) and `npm run build` PASS (192 pages).
- Honest limitations: no PMP audio assets exist, case-set/graphic coverage is not exhaustive, and no independent psychometric study has validated exam readiness.