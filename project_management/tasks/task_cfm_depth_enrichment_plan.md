# CFM Course Depth Enrichment Implementation Plan (Zero-Omission & Full Mastery)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the 7 condensed CFM lessons (1.3, 3.1, 3.2, 3.3, 3.4, 4.1, 4.3) from compact summaries (~800–990 words) to full masterclass depth (1,600–2,000 words each), integrating detailed facility engineering calculations, ASHRAE/ISO frameworks, real-world case studies, approved vector figures (`FlowChart`, `StatGrid`, `Comparison`), and zero AI footprint.

**Architecture:** In-place enrichment of MDX content files located in `src/content/lessons/cfm/`. Maintain frontmatter properties (IDs, quizzes, tool references), preserve existing interactive tool mounts, enrich both `<LangSection lang="ar">` and `<LangSection lang="en">` blocks symmetrically, embed approved visual figures from `src/components/ui/figures/`, and verify via the automated quality gate.

**Tech Stack:** Astro 5 SSG, MDX, React 19 Islands, Tailwind CSS 4, TypeScript.

**Spec:**
- [pedagogy_and_figures.md](../../docs/memory/pedagogy_and_figures.md) (Subject matter first, bilingual terms `(Term)`, approved figures only).
- [arabic_quality.md](../../docs/memory/arabic_quality.md) (Zero machine-translated words, zero deformed tokens).
- [EXAM_COVERAGE.md](../EXAM_COVERAGE.md) (IFMA 11 Core Competencies).

---

## Global Constraints

- **Bilingual Symmetry:** Every added technical section in Arabic must have an exact equivalent in the English section.
- **Approved Visual Components Only:** Only import figures from `../../../components/ui/figures/` (`FlowChart`, `Hierarchy`, `Comparison`, `StatGrid`, `Timeline`, `Infographic`). No external raw SVGs or unverified imports.
- **Terminology Standard:** Introduce technical terms in verified bilingual format: `الاسم بالعربي (Official English Term)`.
- **Zero AI Footprint:** Strictly human expert tone, practical facility management engineering, zero superficial filler phrases.
- **Deterministic Quality Gates:** Every modified file must pass `npm run verify` (`astro check`, `qa:ar`, `tests`, `format:check`).

---

## Review Focus

1. **Frontmatter Integrity:** Ensuring frontmatter fields (`id`, `station`, `number`, `title`, `hasTool`, `quizId`, `sources`) remain valid and unchanged.
2. **Component Import Syntax:** Exact relative import paths (`../../../components/...`) preventing Astro compilation failure.
3. **Arabic Text Soundness:** Zero English letters glued inside Arabic words, zero un-Arabic tokens flagged by `scripts/qa-arabic.mjs`.
4. **Calculations Accuracy:** Math formulas (EUI, NPV, LCC, Variance) matching the verified implementations in `src/lib/formulas.ts` and unit tests.
5. **Layout & Styling:** Clean prose typography without broken Markdown tags or unclosed JSX elements.

---

## Tasks Breakdown

### Task 1: Enrich Lesson 1.3 (إدارة الطاقة — Energy Management)
- **Target File:** `src/content/lessons/cfm/lesson-1-3.mdx`
- **Current Length:** 923 words (No visual figure).
- **Target Length:** 1,700–1,900 words.
- **Key Enhancements to Add:**
  - Detailed breakdown of ASHRAE Energy Audit Levels (Level 1: Walk-through, Level 2: Energy Survey & Analysis, Level 3: Investment-Grade Audit).
  - Peak Demand vs Consumption charges (kW vs kWh), Load Factor, Peak Shaving, and Power Factor Correction (Capacitor banks).
  - Energy Star Portfolio Manager benchmarking and EUI calculation walkthrough with real numbers.
  - Embed `<FlowChart>` for the 3-tier ASHRAE Energy Audit roadmap.
  - Embed `<StatGrid>` for EUI regional benchmarks across facility types (Hospital, Commercial Office, Data Center, School).

- [ ] **Step 1: Inspect existing lesson structure & component imports**
- [ ] **Step 2: Draft enriched bilingual content (Arabic + English) with calculations and audit tiers**
- [ ] **Step 3: Insert `<FlowChart>` and `<StatGrid>` components**
- [ ] **Step 4: Verify via `node scripts/audit_content_coverage.mjs` (Confirm words >= 1,700)**
- [ ] **Step 5: Run deterministic checks (`astro check && node scripts/qa-arabic.mjs`)**

---

### Task 2: Enrich Lesson 3.1 (أنواع الميزانيات وإعدادها — Budget Types & Preparation)
- **Target File:** `src/content/lessons/cfm/lesson-3-1.mdx`
- **Current Length:** 994 words.
- **Target Length:** 1,750–2,000 words.
- **Key Enhancements to Add:**
  - Operational Expenditure (OpEx) vs Capital Expenditure (CapEx) taxonomy and capitalization thresholds.
  - Deep comparison between budgeting methodologies: Zero-Based Budgeting (ZBB), Incremental Budgeting, Activity-Based Budgeting (ABB).
  - The FM Annual Budgeting Cycle (Calendar roadmap: historical baseline, stakeholder needs assessment, executive submission, approvals, contingency planning).
  - Embed `<Comparison>` component comparing ZBB vs Incremental budgeting across 4 criteria (Effort, Justification, Cost Control, Innovation).
  - Embed `<Timeline>` component illustrating the 12-month Facility Budget Development cycle.

- [ ] **Step 1: Inspect existing lesson structure & component imports**
- [ ] **Step 2: Draft enriched bilingual content detailing OpEx/CapEx mechanics and ZBB decision packages**
- [ ] **Step 3: Insert `<Comparison>` and `<Timeline>` components**
- [ ] **Step 4: Verify via `node scripts/audit_content_coverage.mjs` (Confirm words >= 1,750)**
- [ ] **Step 5: Run deterministic checks (`astro check && node scripts/qa-arabic.mjs`)**

---

### Task 3: Enrich Lesson 3.2 (تحليل الانحرافات — Variance Analysis)
- **Target File:** `src/content/lessons/cfm/lesson-3-2.mdx`
- **Current Length:** 871 words.
- **Target Length:** 1,650–1,850 words.
- **Key Enhancements to Add:**
  - Decomposition of Total Budget Variance into Price Variance (Rate) and Volume Variance (Quantity/Usage).
  - Favorable vs Unfavorable variances in maintenance and utility lines.
  - Establishing Variance Thresholds (Percentage vs Absolute Dollar triggers, e.g., $\pm 5\%$ or $\$10,000$).
  - Step-by-step Facility Variance Audit workflow (identifying seasonal anomalies, unexpected equipment breakdowns, tariff hikes).
  - Embed `<FlowChart>` for the Monthly Variance Investigation & Corrective Action Protocol.
  - Embed `<Comparison>` for Price Variance vs Volume Variance breakdown.

- [ ] **Step 1: Inspect existing lesson structure & component imports**
- [ ] **Step 2: Draft enriched bilingual content with numerical breakdown examples**
- [ ] **Step 3: Insert `<FlowChart>` and `<Comparison>` components**
- [ ] **Step 4: Verify via `node scripts/audit_content_coverage.mjs` (Confirm words >= 1,650)**
- [ ] **Step 5: Run deterministic checks (`astro check && node scripts/qa-arabic.mjs`)**

---

### Task 4: Enrich Lesson 3.3 (تكلفة دورة الحياة LCC و ROI — Life Cycle Costing & ROI)
- **Target File:** `src/content/lessons/cfm/lesson-3-3.mdx`
- **Current Length:** 826 words (No visual figure).
- **Target Length:** 1,800–2,000 words.
- **Key Enhancements to Add:**
  - Standard framework: ISO 15686-5 (Buildings and constructed assets — Service life planning — Life-cycle costing).
  - Full breakdown of LCC components: Acquisition ($C_{acq}$), Operations ($C_{ops}$), Maintenance ($C_{maint}$), Disposal/Residual ($C_{disp}$).
  - Discounted Cash Flow (DCF), Net Present Value (NPV), Discount Rate ($r$), and Internal Rate of Return (IRR) applied to FM capital replacements.
  - Comprehensive real-world case study: Chiller replacement option A (low initial cost, low efficiency) vs option B (high initial cost VFD magnetic-bearing, ultra-high efficiency) over 20-year horizon.
  - Embed `<Comparison>` showing Option A vs Option B total life-cycle financial breakdown.
  - Embed `<Timeline>` for the 4 life-cycle costing phases from pre-construction to decommissioning.

- [ ] **Step 1: Inspect existing lesson structure & component imports**
- [ ] **Step 2: Draft enriched bilingual content with complete 20-year discounted cash flow case study**
- [ ] **Step 3: Insert `<Comparison>` and `<Timeline>` components**
- [ ] **Step 4: Verify via `node scripts/audit_content_coverage.mjs` (Confirm words >= 1,800)**
- [ ] **Step 5: Run deterministic checks (`astro check && node scripts/qa-arabic.mjs`)**

---

### Task 5: Enrich Lesson 3.4 (مراقبة التكاليف وضبط التشغيل — Cost Control & Chargebacks)
- **Target File:** `src/content/lessons/cfm/lesson-3-4.mdx`
- **Current Length:** 995 words.
- **Target Length:** 1,700–1,900 words.
- **Key Enhancements to Add:**
  - Chargeback Systems (Direct allocation, Square footage allocation, Metered consumption, Service tiers).
  - Cost Containment Strategies vs Value Destruction (Distinguishing strategic reduction from deferred maintenance risk).
  - Service Level Agreements (SLA) cost mechanics: penalty thresholds, performance incentives, and contractor retainage.
  - Facility Cost Benchmarking Metrics: Cost per Gross Square Meter ($/m²), Cost per Full-Time Employee ($/FTE).
  - Embed `<Hierarchy>` showing the Corporate Chargeback Allocation Architecture.
  - Embed `<StatGrid>` for FM Cost Containment KPIs.

- [ ] **Step 1: Inspect existing lesson structure & component imports**
- [ ] **Step 2: Draft enriched bilingual content with chargeback models and SLA formulas**
- [ ] **Step 3: Insert `<Hierarchy>` and `<StatGrid>` components**
- [ ] **Step 4: Verify via `node scripts/audit_content_coverage.mjs` (Confirm words >= 1,700)**
- [ ] **Step 5: Run deterministic checks (`astro check && node scripts/qa-arabic.mjs`)**

---

### Task 6: Enrich Lesson 4.1 (بيئة العمل و Ergonomics — Ergonomics & Work Environment)
- **Target File:** `src/content/lessons/cfm/lesson-4-1.mdx`
- **Current Length:** 966 words.
- **Target Length:** 1,700–1,900 words.
- **Key Enhancements to Add:**
  - Biomechanical principles and Musculoskeletal Disorders (MSDs) prevention in commercial facilities.
  - Anthropometric design data (5th to 95th percentile ergonomic reach, sightlines, seated and sit-stand geometries).
  - Ergonomic risk assessment methodologies: OSHA Computer Workstation Checklist, RULA (Rapid Upper Limb Assessment), REBA.
  - Facility ergonomic intervention programs: early symptom reporting, adaptive furniture deployment, employee training ROI.
  - Embed `<Hierarchy>` for the Hierarchy of Ergonomic Controls (Engineering, Administrative, PPE).
  - Embed `<StatGrid>` for Anthropometric Workstation Geometry specifications (Elbow height, eye-to-screen distance, lumbar angle).

- [ ] **Step 1: Inspect existing lesson structure & component imports**
- [ ] **Step 2: Draft enriched bilingual content with biomechanics, RULA/REBA, and anthropometrics**
- [ ] **Step 3: Insert `<Hierarchy>` and `<StatGrid>` components**
- [ ] **Step 4: Verify via `node scripts/audit_content_coverage.mjs` (Confirm words >= 1,700)**
- [ ] **Step 5: Run deterministic checks (`astro check && node scripts/qa-arabic.mjs`)**

---

### Task 7: Enrich Lesson 4.3 (جودة البيئة الداخلية IEQ — Indoor Environmental Quality)
- **Target File:** `src/content/lessons/cfm/lesson-4-3.mdx`
- **Current Length:** 960 words.
- **Target Length:** 1,750–2,000 words.
- **Key Enhancements to Add:**
  - The 4 pillars of IEQ: Thermal Comfort, Indoor Air Quality (IAQ), Acoustic Quality, Visual/Lighting Quality.
  - Technical standard deep-dive:
    * ASHRAE Standard 55: Predicted Mean Vote (PMV) and Predicted Percentage of Dissatisfied (PPD).
    * ASHRAE Standard 62.1: Ventilation Rate Procedure (Outdoor air rates CFM/person + CFM/sqft).
    * Acoustic metrics: Noise Criterion (NC 30–35 for offices), Sound Transmission Class (STC $\ge 45$), Reverberation Time ($RT_{60}$).
    * Lighting & Glare: Illuminance thresholds (300–500 lux for workstations), Unified Glare Rating (UGR $\le 19$), Color Rendering Index (CRI $\ge 80$).
  - Sick Building Syndrome (SBS) vs Building-Related Illness (BRI) diagnostic protocol.
  - Embed `<Comparison>` for ASHRAE 55 (Thermal) vs ASHRAE 62.1 (Air) vs Acoustic Standards.
  - Embed `<FlowChart>` for the SBS Investigation & IAQ Root Cause Protocol.

- [ ] **Step 1: Inspect existing lesson structure & component imports**
- [ ] **Step 2: Draft enriched bilingual content with PMV/PPD, ventilation rates, acoustic STC, and lux metrics**
- [ ] **Step 3: Insert `<Comparison>` and `<FlowChart>` components**
- [ ] **Step 4: Verify via `node scripts/audit_content_coverage.mjs` (Confirm words >= 1,750)**
- [ ] **Step 5: Run deterministic checks (`astro check && node scripts/qa-arabic.mjs`)**

---

### Task 8: Comprehensive Verification & Audit Closure Gate
- **Target Files:** All modified lessons across `src/content/lessons/cfm/`.
- [ ] **Step 1: Run `node scripts/audit_content_coverage.mjs` to verify all 7 lessons exceed 1,600 words and zero lessons under 1,000 words remain in CFM.**
- [ ] **Step 2: Run `npm run verify` (`astro check`, `node scripts/qa-arabic.mjs`, `npm run test`, `prettier --check .`).**
- [ ] **Step 3: Run `npm run build` to confirm 120+ static routes compile with zero warnings or errors.**
- [ ] **Step 4: Update `project_management/EXAM_COVERAGE.md` and archive task plan upon passing.**
