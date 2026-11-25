# ADR-001: Adoption of Engineering Governance & Architectural Baseline

## Context & Problem Statement

GridFix Academy provides critical professional training in Facility Management and CFM certification. As content and features expand (calculators, quizzes, audio/video assets), the project requires a strict governance framework to prevent code drift, machine-translated linguistic artifacts, unverified formulas, and fragmented planning.

## Decision

We adopt the **Vibe Coding Engineering Governance Framework** ([INDEX.md](../VibeCodeingFramwork/INDEX.md)) tailored to GridFix Academy:

1. **Tier-0 Micro-Kernel:** Establish `AGENTS.md` (strictly $\le 90$ lines) as the primary instruction kernel, with pointer in `GEMINI.md`.
2. **Persistent Domain Memory:** Isolate project-specific pedagogical and Arabic linguistic rules in `docs/memory/` to maintain a lean active context.
3. **Living Documentation:** Maintain `SRS.md`, `docs/ARCHITECTURE.md`, and `docs/ANTI_PATTERNS.md` atomically with code.
4. **Deterministic Tooling Gate:** Require all modifications to pass a unified verification gate (`npm run verify` combining Astro diagnostics, Arabic QA, unit tests, and formatting checks) before merging.
5. **Decoupled Architecture:** Maintain static site generation (SSG) for public content while isolating interactive islands and client storage behind typed abstractions.

## Consequences & Trade-offs

- **Positive:**
  - Zero tolerance for corrupted Arabic or synthetic machine artifacts.
  - Guaranteed mathematical correctness for all engineering and financial calculators.
  - Predictable, fast build and deployment pipeline with zero server maintenance overhead.
- **Negative / Constraints:**
  - Every content modification requires both automated script execution (`npm run qa:ar`) and direct human/agent proof-reading.
  - Every formula and storage modification requires corresponding automated test coverage in `tests/`.
