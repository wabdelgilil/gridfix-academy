# Project Engineering Governance (Tier-0 Micro-Kernel)

> Framework Reference: `../VibeCodeingFramwork/INDEX.md` (or `https://github.com/wabdelgilil/vibe-coding-framework`)
> Navigation Law: Stop-on-Target. Read only the triggered micro-leaf before acting.

## 10 Non-Negotiable Laws

1. **Objectivity:** Never flatter blindly; push back with trade-offs when an idea carries risk.
2. **Pre-Code Plan Gate:** Never edit code before a verified plan proportional to change size.
3. **Dependency-First Order:** Prioritize `P0` security/data, then `P1` foundations, then `P2` features.
4. **Root Cause & Long-Term Impact:** Fix causes at authoritative layers; evaluate 6–12 month impact.
5. **Zero Shortcuts:** No stubs, empty `catch`, hardcoded fakes, or unverified client assertions.
6. **Zero AI Footprint:** Clean human-grade code, comments ("why" only), commits, and document metadata.
7. **Always Strict Security:** Zero hardcoded secrets; sanitize inputs; protect baseline assets.
8. **Dual Verification:** Run automated checks (`npm run verify`) AND directly inspect modified files.
9. **Living Docs Sync:** Update `SRS.md`, specs, and `CHANGELOG.md` atomically with code changes.
10. **Clean Workspace:** 100% relative links; keep `MASTER_PLAN.md` lean; physically archive closed plans.

## Action Boundaries (3-Zone Matrix)

- **Always:** Run `npm run verify` (`check` + `qa:ar` + `test`), use relative links, update `ACTIVE_CONTEXT.md`.
- **Ask First:** Add 3rd-party dependencies, change SSG/SSR modes, or modify curriculum scoring logic.
- **Never:** Commit garbled machine Arabic, bypass type/test gates, or hardcode secrets in `.env`.

## On-Demand Trigger Routing Table

| When you are about to...                 | Read ONLY this file first                                                                            |
| :--------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| Start a session or resume work           | `project_management/ACTIVE_CONTEXT.md` (+ run `git status`)                                          |
| Plan a feature or multi-file change      | `../VibeCodeingFramwork/07_project_management_and_context/planning_rigor_and_pre_code_gate.md`       |
| Prioritize tasks or roadmap items        | `../VibeCodeingFramwork/07_project_management_and_context/prioritization_and_dependency_ordering.md` |
| Write or review Arabic text/lessons      | `docs/memory/arabic_quality.md` (+ run `npm run qa:ar`)                                              |
| Structure lessons, terms, or figures     | `docs/memory/pedagogy_and_figures.md`                                                                |
| Generate YouTube video assets            | `docs/memory/video_constitution.md`                                                                  |
| Debug a failure or weigh a quick fix     | `../VibeCodeingFramwork/01_anti_shortcuts/root_cause_protocol.md`                                    |
| Design queries, caching, or async jobs   | `../VibeCodeingFramwork/03_scalability/README.md`                                                    |
| Add/change entities or cross-layer flows | `../VibeCodeingFramwork/04_maintainability/domain_and_impact_integrity.md`                           |
| Touch storage, auth, or input validation | `../VibeCodeingFramwork/06_security_and_reliability/README.md`                                       |
| Add/modify features (standard docs)      | `../VibeCodeingFramwork/05_documentation/standard_artifacts_per_feature.md`                          |
| Close any task or audit                  | `../VibeCodeingFramwork/01_anti_shortcuts/proof_of_work.md`                                          |
| Touch domain conventions or guidelines   | `docs/memory/INDEX.md`                                                                               |

## Standing User Preferences (Bucket A — Max 10 One-Liners)

- Platform identity: GridFix Academy (`gridfix.net`) — Free Arabic FM & CFM educational platform.
- Tech stack: Astro 5 static SSG + React 19 islands + Tailwind CSS 4 + TypeScript strict.
- Non-negotiable Arabic quality: Zero machine-translated words; strict dual verification (script + manual review).
- Pedagogy: Subject matter first (CFM exam scope), concise real-world examples, verified bilingual terms `(Term)`.
- UI figures: Use `src/components/ui/figures/` only (FlowChart, Timeline, Infographic, Hierarchy, Comparison, StatGrid).
- Deterministic gates: All changes must pass `npm run verify` (`check` + `qa:ar` + `test` + `format:check`).
