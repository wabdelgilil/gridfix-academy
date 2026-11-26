# Changelog

All notable changes to the GridFix Academy platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Greenfield Engineering Governance bootstrap under the Vibe Coding Framework.
- System Requirements Specification ([SRS.md](SRS.md)).
- Tier-0 Micro-Kernel ([AGENTS.md](AGENTS.md)) and Gemini pointer ([GEMINI.md](GEMINI.md)).
- Architecture overview ([docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)) and Anti-Patterns catalog ([docs/ANTI_PATTERNS.md](docs/ANTI_PATTERNS.md)).
- Persistent project memory in `docs/memory/` (Arabic quality, pedagogy, video production).
- Operational radar ([project_management/ACTIVE_CONTEXT.md](project_management/ACTIVE_CONTEXT.md)) and technical debt tracking ([project_management/TECH_DEBT_REGISTER.md](project_management/TECH_DEBT_REGISTER.md)).
- Architectural Decision Record ([docs/adrs/ADR-001-engineering-governance-and-architecture.md](docs/adrs/ADR-001-engineering-governance-and-architecture.md)).
- Code formatting and unified verification gate script (`npm run verify`).
- Arabic PMP course aligned to the July 2026 ECO and PMBOK Guide, 8th Edition: 12 stations, 55 lessons, 220 explained scenario quiz questions, and a 180-question mock exam (59 People / 74 Process / 47 Business Environment).
- PMP-specific island tools, glossary, references, exam route branch, OG image, storage-key support, and search indexing.
- Exam-readiness rebuild after an independent audit found shortcut-heavy content: ECO weights corrected to 33/41/26 in both curriculum and station files, all 26 ECO tasks mapped to live lessons and quizzes, and mock pacing corrected to 80 seconds per question (240 minutes).
- Lesson depth rebuilt to 1,110–1,540 words per lesson with bilingual `LangSection`, `GlossaryCard`, `Callout`, worked numeric examples and prerequisite-safe first-use definitions; PMP glossary expanded to 49 terms.
- Quiz feedback now teaches: all 880 explanations are at least 20 characters and unique, the correct option's explanation is shown after an answer, one hinted retry is available, and skipped mock questions appear in review. Two shared multi-question case sets with data-table stems were added.
- Generative-AI governance, ESG metrics and a benefit-management plan artifact are taught in content, quizzes and island tools; `tests/pmp-coverage.test.mjs` pins these contracts.
- Honest residual limitations are documented in `project_management/EXAM_COVERAGE_PMP.md`: no PMP audio assets exist, case-set coverage is limited, and no independent psychometric or candidate study has validated readiness.
- Living documentation updates: SRS, ACTIVE_CONTEXT, MASTER_PLAN, and the PMP task plan completion record.

## [0.1.0] - 2026-10-19

### Added

- Core Astro 5 platform with React 19 islands and Tailwind CSS 4.
- CFM curriculum modules and MDX lesson content collection.
- Arabic linguistic QA gate (`scripts/qa-arabic.mjs`).
- Unit test suite for financial/engineering formulas and storage engine.
