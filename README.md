# GridFix Academy

> **Official Portal:** [academy.gridfix.net](https://academy.gridfix.net)  
> **Parent Organization:** GridFix (`gridfix.net`)  
> **Mission:** Free Arabic educational platform for Facility Management (FM) and preparation for the Certified Facility Manager (CFM) credential.

---

## Architecture & Technology Stack

- **Framework:** Astro 5 (Static Site Generation / SSG)
- **Interactive Islands:** React 19 (`@astrojs/react`)
- **Styling:** Tailwind CSS 4 with Vite integration
- **Content:** MDX content collections (`@astrojs/mdx`)
- **Type Safety:** TypeScript in strict mode (`astro/tsconfigs/strict`)
- **Testing & Quality:** Node Native Test Runner (`node --test`), Astro Diagnostics (`astro check`), and Custom Arabic QA (`qa:ar`)

---

## Directory Layout

```text
gridfix-academy/
├── docs/                   # Architecture, ADRs, memory, and anti-patterns
│   ├── adrs/               # Architectural Decision Records
│   ├── memory/             # Domain rules (Arabic quality, pedagogy, videos)
│   └── ARCHITECTURE.md     # System design & component contracts
├── project_management/     # Active radar, completed work, and execution plans
│   ├── ACTIVE_CONTEXT.md   # Current operational radar & immediate next steps
│   ├── MASTER_PLAN.md      # Active-only high-level roadmap
│   ├── COMPLETED_WORK.md   # Archived milestones index
│   └── TECH_DEBT_REGISTER.md# Prioritized technical debt register
├── public/                 # Static assets and fonts
├── scripts/                # QA automation and build helper utilities
├── src/
│   ├── components/         # Astro components and React islands
│   │   ├── islands/        # Interactive calculators, quiz widgets, and tools
│   │   └── ui/figures/     # Standardized educational diagram components
│   ├── content/            # MDX lessons and curriculum collections
│   ├── data/               # Courses, quizzes, formulas, and progress models
│   ├── layouts/            # Page layouts
│   └── pages/              # Astro routing tree
├── tests/                  # Unit and integration test suites
├── AGENTS.md               # Tier-0 Micro-Kernel & AI governance routing
├── SRS.md                  # System Requirements Specification
└── package.json            # Manifest & deterministic build scripts
```

---

## Deterministic Tooling & Verification

All changes must pass the unified verification gate before being merged:

```bash
# Run full verification gate (types, Arabic QA, tests, formatting)
npm run verify

# Run individual checks
npm run check       # Astro & TypeScript diagnostic check
npm run qa:ar       # Strict Arabic linguistic quality gate
npm run test        # Unit and integration test suite
npm run format:check# Code formatting validation
```

---

## Governance & Standards

This project adheres to the [Vibe Coding Engineering Governance Framework](docs/ARCHITECTURE.md). For detailed operational rules, refer to [AGENTS.md](AGENTS.md) and [docs/memory/INDEX.md](docs/memory/INDEX.md).
