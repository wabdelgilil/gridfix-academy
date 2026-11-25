# Technical Architecture & System Design — GridFix Academy

## 1. Architectural Overview

GridFix Academy is engineered as an ultra-fast, zero-maintenance static educational platform delivering Arabic facility management training.

```text
[ Content Authoring (MDX) ]
           │
           ▼
[ Astro 5 Static Engine ] ──(Build Time)──► [ Edge CDN Distribution ]
           │                                          │
   (Tailwind 4 + React 19)                            ▼
           │                               [ Client Web Browser ]
           ▼                                          │
[ Static HTML & Islands Bundle ]                      ├── Zero-JS Lesson Reading
                                                      └── Hydrated React Islands (Tools/Quizzes)
```

## 2. Core Subsystems

### 2.1 Content Subsystem (MDX Collections)

- **Directory:** `src/content/lessons/`
- **Typing:** Strict Astro content schema declaring course metadata, sequence, duration, and CFM competency tags.
- **Rendering:** Pre-compiled to clean semantic HTML at build time with Shiki code highlighting and zero client-side markdown parsing runtime.

### 2.2 Interactive Islands (React 19)

- **Directory:** `src/components/islands/`
- **Responsibility:** Self-contained calculation tools (e.g., LCC calculator, MTBF/OEE evaluators) and assessment quiz modules.
- **Hydration Strategy:** Lazy hydration via `client:visible` or `client:idle`. No JavaScript runs on initial page load for non-interactive content.

### 2.3 Educational Figures Framework

- **Directory:** `src/components/ui/figures/`
- **Components:** `FlowChart`, `Timeline`, `Infographic`, `Hierarchy`, `Comparison`, `StatGrid`.
- **Contract:** All figures are pure Astro/HTML/CSS components rendering SVG/CSS layout primitives directly to avoid heavy charting library dependencies.

### 2.4 State & Progress Engine

- **Directory:** `src/data/storage.ts`
- **Pattern:** Abstracted Storage Provider facade. Current implementation targets browser `localStorage` with isolated namespaced keys per course (`gridfix_academy_progress_<courseId>`).
- **Future Readiness:** Storage contract allows drop-in replacement with an API-backed remote sync adapter if authenticated learner accounts are introduced in the future.

## 3. Linguistic & Pedagogical Defense

- **Automated Linguistic Lint:** `scripts/qa-arabic.mjs` runs regex AST validation across all content to reject non-words, broken concatenations, and invalid symbols.
- **Dual Verification:** Automated execution is complemented by human/agent direct review of all modified text strings before merge.
