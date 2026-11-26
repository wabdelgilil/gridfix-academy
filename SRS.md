# System Requirements Specification (SRS) — GridFix Academy

> **Project:** GridFix Academy (`academy.gridfix.net`)  
> **Version:** 1.0.0  
> **Status:** Living Document  
> **Governance:** Tier-0 Governance Framework ([AGENTS.md](AGENTS.md))

---

## 1. Project Scope & Executive Objectives

### 1.1 Purpose & Domain

GridFix Academy is a specialized, open-access, Arabic-first digital learning platform dedicated to advancing professional Facility Management (FM) and project management across the MENA region. It provides structured learning pathways aligned with the 11 core competencies of the IFMA Certified Facility Manager (CFM) credential and the July 2026 PMP Examination Content Outline (ECO) with PMBOK Guide, 8th Edition.

### 1.2 Target Stakeholders

- **Facility Engineers & Managers:** Professionals seeking practical tools and CFM preparation.
- **Project Managers:** Arabic-speaking practitioners preparing for the PMP credential through scenario-based, ECO-aligned study.
- **Operations & Maintenance Supervisors:** Technicians transitioning into managerial roles.
- **GridFix Technical Leadership:** Platform maintainers and content curators ensuring technical accuracy and pedagogical excellence.

### 1.3 Course Portfolio

| Course | Credential | Status | Scope                                                |
| ------ | ---------- | ------ | ---------------------------------------------------- |
| `cfm`  | CFM        | live   | 13 stations, 38 lessons, IFMA 11 competencies.       |
| `cmrp` | CMRP/SMRP  | live   | 7 stations, 21 lessons, reliability and maintenance. |
| `cama` | CAMA       | live   | 6 stations, 17 lessons, asset management.            |
| `pmp`  | PMP        | live   | 12 stations, 55 lessons, July 2026 ECO + PMBOK 8.    |

---

## 2. Functional Requirements

### 2.1 Curriculum & Lesson Delivery

- **FR-01 (MDX Content):** Lessons must be authored in structured MDX with strictly typed frontmatter (title, courseId, competency, duration, order).
- **FR-02 (Bilingual Terminology):** Key technical concepts must introduce the Arabic translation immediately followed by the standard English term in parentheses (e.g., `تكلفة دورة الحياة (Life Cycle Cost - LCC)`).
- **FR-03 (Educational Figures):** Complex concepts must employ standardized UI figures from `src/components/ui/figures/` (`FlowChart`, `Timeline`, `Infographic`, `Hierarchy`, `Comparison`, `StatGrid`).

### 2.2 Interactive Calculators & Simulation Islands

- **FR-04 (Formula Precision):** Interactive widgets must implement validated FM mathematical models (PV, LCC, MTBF, MTTR, Availability, OEE, EUI) with zero precision degradation.
- **FR-05 (Client-Side Isolation):** Calculators operate as isolated React islands with zero server dependencies during execution.

### 2.3 Assessment & Progress Tracking

- **FR-06 (Quiz Engine):** Lessons must link to topic-specific quiz banks (`src/data/quiz/`) providing immediate feedback, explanation of correct/incorrect options, and exam tips for the active course.
- **FR-07 (State Storage Abstraction):** Learner progress, lesson completion, and quiz scores must be managed through an isolated storage abstraction with namespaced keys.

### 2.4 PMP Course Requirements

- **FR-08 (ECO Alignment):** The `pmp` course must expose the July 2026 weighting — People 33%, Process 41%, Business Environment 26% — across 26 ECO tasks, with 180 questions in 240 minutes and an approximately 40% predictive / 60% agile-hybrid approach mix.
- **FR-09 (Lesson Pedagogy):** Each of the 55 PMP lessons must follow Concept Explanation → Real-World Scenario → Interactive Island Tool → Scenario Quiz, with at least four fully explained Arabic scenario questions.
- **FR-10 (Contemporary Topics):** PMP content must cover generative AI, sustainability/ESG, benefits realization, and case-based scenario questions.
- **FR-11 (Mock Exam):** The course must provide a 180-question PMP simulator with domain breakdown, pacing guidance, and diagnostic reporting through the shared exam runner.
- **FR-12 (Readiness Contract):** FR-08…FR-11 are pinned by `tests/pmp-coverage.test.mjs` (ECO weights in curriculum and station files, all 26 task mappings, 80-second pacing, worked bilingual lessons, 880 unique substantial explanations, generative-AI coverage and case sets). Residual limitations — no PMP audio assets, limited case/graphic formats, no independent psychometric validation — are recorded in `project_management/EXAM_COVERAGE_PMP.md` and must not be described as exam readiness guarantees.

---

## 3. Non-Functional Requirements

### 3.1 Performance & Scalability

- **NFR-01 (Static Generation):** 100% of curriculum content pages must be pre-rendered at build time (`output: 'static'`) for zero-latency edge delivery via CDN.
- **NFR-02 (Core Web Vitals):** LCP $\le$ 1.5s, CLS $\le$ 0.05, INP $\le$ 100ms on desktop and standard mobile networks.
- **NFR-03 (Zero Runtime Bloat):** Scripts loaded client-side must be restricted strictly to active interactive islands (`client:visible` or `client:idle`).

### 3.2 Linguistic Integrity & Quality Gate

- **NFR-04 (Arabic Quality):** Zero machine-generated non-words or corrupted translation artifacts. Every content change must pass `npm run qa:ar` and manual review.
- **NFR-05 (RTL Symmetry):** Complete visual and typographical hierarchy optimized for Arabic typography via `@fontsource/ibm-plex-sans-arabic`.

### 3.3 Security & Hygiene

- **NFR-06 (Zero Secrets):** The codebase must never contain hardcoded tokens, internal credentials, or private keys.
- **NFR-07 (Input Validation):** All interactive tool inputs must be validated against physical bounds (e.g. non-negative areas, valid discount rates).

---

## 4. System Architecture & Component Model

```text
[ Browser / Edge CDN ]
        │
        ├── Static HTML / CSS (Astro 5 SSG + Tailwind 4)
        │       ├── Lessons (/courses/:courseId/:lessonSlug)
        │       ├── Curriculum Catalog (/courses)
        │       └── Standard Visual Figures (src/components/ui/figures/*)
        │
        └── Hydrated React 19 Islands
                ├── Interactive Calculators (src/components/islands/tools/*)
                ├── Assessment Quizzes (src/components/islands/QuizWidget.tsx)
                └── Progress State Engine (StorageAdapter -> LocalStorage)
```
