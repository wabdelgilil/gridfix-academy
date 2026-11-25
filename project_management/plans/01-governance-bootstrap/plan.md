# Task Plan: 01-governance-bootstrap

> **Objective:** Bootstrap complete Tier-0 governance, living documentation, and deterministic tooling gates for GridFix Academy under the Vibe Coding Framework.

## Execution Checklist

- [x] **Stage A: Fast Turn-1 Alignment:**
  - [x] Objective architectural and security critique presented.
  - [x] Stack, hosting, auth, and non-functional constraints clarified.
  - [x] Dependency-ordered roadmap (P0 -> P1 -> P2) proposed and approved.
- [x] **Stage B: Tier-0 Rules & Living Governance Scaffolding:**
  - [x] Emit primary Tier-0 rules file `AGENTS.md` (strictly $\le 90$ lines).
  - [x] Emit tool pointer `GEMINI.md`.
  - [x] Migrate domain rules to `docs/memory/` (`arabic_quality.md`, `pedagogy_and_figures.md`, `video_constitution.md`).
  - [x] Scaffold root living docs: `README.md`, `SRS.md`, `CHANGELOG.md`.
  - [x] Scaffold architecture docs: `docs/ARCHITECTURE.md`, `docs/ANTI_PATTERNS.md`, `docs/adrs/ADR-001`.
  - [x] Scaffold project management: `ACTIVE_CONTEXT.md`, `TECH_DEBT_REGISTER.md`.
- [x] **Stage C: Deterministic Tooling & Verification:**
  - [x] Configure Prettier code formatting (`.prettierrc`, `.prettierignore`).
  - [x] Wire `npm run verify` unified command in `package.json`.
  - [x] Execute `npm run verify` and confirm 0 errors.
  - [x] Execute `npm run build` and confirm complete static build.
