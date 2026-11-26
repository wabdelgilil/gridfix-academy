# Active Operational Context & Radar

> **Current Sprint / Focus:** Arabic PMP Course Completed & Verified  
> **Last Reconciled:** 2026-11-26 (via `npm run verify` + `npm run build` + `git status`)  
> **Status:** PMP live; Stages A, B, and C 100% Complete — Ready for Next Initiative

---

## 1. Active Radar & Next Priorities

1. **Completed Initiative:** كورس محترف إدارة المشاريع (PMP) — 12 محطة و55 درساً وفق مخطط يوليو 2026 ودليل PMBOK الإصدار 8.
   - الأوزان المعتمدة: الأفراد 33%، العمليات 41%، بيئة الأعمال 26%، مع 26 مهمة و180 سؤالاً في 240 دقيقة.
   - كل درس يشمل شرحاً وسيناريو واقعياً وأداة تفاعلية وكويزاً من 4 أسئلة مع شروحات كاملة (220 سؤالاً إجمالاً).
   - محاكي 180 سؤالاً (59 أفراد / 74 عمليات / 47 بيئة أعمال) مع تشخيص وتقرير حسب المجال.
   - تغطية الذكاء الاصطناعي والاستدامة/ESG وتحقيق الفوائد وأسئلة دراسات الحالة؛ المصطلحات عربية أولاً مع الإنجليزية بين قوسين.
2. **Next Initiative:** خط إنتاج وتسييل فيديوهات YouTube لأكاديمية GridFix ومحرك العرض المتدرج التفاعلي (76 درساً).
   - تم تثبيت واعتماد دستور إنتاج الفيديوهات الشامل (`docs/VIDEO_PRODUCTION_CONSTITUTION.md`).
   - تم تثبيت المبدأ الحاكم الأسمى: حظر البخل أو الاختصار في الشرح والتأنيس الكامل (Deep Mastery & Full Humanization).
   - الخطوة التالية: إنتاج الماستر كلاس المتكامل للدرس الأول CMRP 1.1 بجودة 1080p وكافة المنحنيات تفصيلياً.
3. **Deterministic Gate Status:**
   - `astro check`: PASS (317 files, 0 errors, 0 warnings, 0 hints)
   - `npm run qa:ar`: PASS (Zero machine-translated non-words)
   - `npm run test`: PASS (24 tests pass, 0 fail)
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
