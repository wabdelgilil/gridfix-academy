# Active Operational Context & Radar

> **Current Sprint / Focus:** Arabic PMP Course — Exam-Readiness Rebuild Completed & Verified  
> **Last Reconciled:** 2026-11-26 (via `npm run verify` + `npm run build` + `git status`)  
> **Status:** PMP live; rebuild closed after independent audit — structurally complete, residual limitations documented honestly

---

## 1. Active Radar & Next Priorities

1. **Completed Initiative:** كورس محترف إدارة المشاريع (PMP) — 12 محطة و55 درساً وفق مخطط يوليو 2026 ودليل PMBOK الإصدار 8، بعد إعادة بناء عالجت ثغرات التدقيق المستقل.
   - الأوزان المعتمدة: الأفراد 33%، العمليات 41%، بيئة الأعمال 26% في `curriculum.ts` **و** ملفات المحطات؛ 26 مهمة موثّقة في `src/data/pmpEcoTasks.ts` وخريطة `project_management/EXAM_COVERAGE_PMP.md`.
   - 180 سؤالاً في 240 دقيقة (80 ثانية/سؤال)، بنمط محاكي واحد كامل وتوزيع 59/74/47 حسب المجال.
   - 55 درساً بمتوسط ~1,200 كلمة، ولكل درس مفهوم وسيناريو بأرقام محسوبة وأداة تعليمية وكويز 4 أسئلة (220 سؤالاً).
   - 880 شرحاً للإجابات بلا تكرار وبحد أدنى 20 حرفاً؛ إظهار شرح الإجابة الصحيحة بعد الخطأ، محاولة مدعومة بالتلميح، ومجموعتا حالة مشتركتان.
   - الذكاء الاصطناعي التوليدي والاستدامة/ESG وتحقيق الفوائد تُدرَّس كأدوات قرار لا ككلمات مفتاحية؛ القيود المتبقية موثّقة في `EXAM_COVERAGE_PMP.md` (لا صوت PMP، تغطية محدودة للحالات، بلا تحقق سيكومتري مستقل).
2. **Next Initiative:** خط إنتاج وتسييل فيديوهات YouTube لأكاديمية GridFix ومحرك العرض المتدرج التفاعلي (76 درساً).
   - تم تثبيت واعتماد دستور إنتاج الفيديوهات الشامل (`docs/VIDEO_PRODUCTION_CONSTITUTION.md`).
   - تم تثبيت المبدأ الحاكم الأسمى: حظر البخل أو الاختصار في الشرح والتأنيس الكامل (Deep Mastery & Full Humanization).
   - الخطوة التالية: إنتاج الماستر كلاس المتكامل للدرس الأول CMRP 1.1 بجودة 1080p وكافة المنحنيات تفصيلياً.
3. **Deterministic Gate Status:**
   - `astro check`: PASS (319 files, 0 errors, 0 warnings, 0 hints)
   - `npm run qa:ar`: PASS (Zero machine-translated non-words)
   - `npm run test`: PASS (37 tests pass, 0 fail — including 13 PMP coverage assertions)
   - `npm run format:check`: PASS (All files formatted cleanly)
   - `npm run build`: PASS (192 static pages generated)

---

## 2. Governance Artifacts in Place

- **Tier-0 Micro-Kernel:** [AGENTS.md](../AGENTS.md) (50 lines $\le$ 90 limit)
- **Tool Pointer:** [GEMINI.md](../GEMINI.md)
- **Living Specifications:** [SRS.md](../SRS.md), [README.md](../README.md), [CHANGELOG.md](../CHANGELOG.md)
- **Architecture & ADRs:** [docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md), [docs/ANTI_PATTERNS.md](../docs/ANTI_PATTERNS.md), [docs/adrs/ADR-001](../docs/adrs/ADR-001-engineering-governance-and-architecture.md)
- **Domain Memory:** [docs/memory/INDEX.md](../docs/memory/INDEX.md) (`arabic_quality.md`, `pedagogy_and_figures.md`, `video_constitution.md`)
- **Technical Debt:** [TECH_DEBT_REGISTER.md](TECH_DEBT_REGISTER.md)
