# PMP Exam-Readiness Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the shipped Arabic PMP course from a scaffolded outline into a course that takes a zero-knowledge Arabic candidate to honest July-2026 PMP readiness, and align it with the existing CFM/CMRP/CAMA authoring standard.

**Architecture:** Keep the platform shell (courses registry, dynamic routes, `LessonLayout`, `ScenarioQuiz`, `GenericExamRunner`, storage). Replace the thin generated lesson template with prerequisite-safe, worked-example lessons; add an explicit ECO task contract; upgrade quiz feedback and case-set support; split the PMP tool monolith into teachable islands; then sync docs and gates.

**Tech Stack:** Astro 5, React 19 islands, TypeScript strict, Tailwind 4, MDX, Node test runner, Prettier.

**Spec / evidence:**

- `project_management/tasks/task_add_pmp_course.md`
- `SRS.md`
- Coverage audit: 44% Process weight, no 26-task map, 73s pacing, no generative AI, 72 short explanations, 62 glossary bullets without English.
- Platform-parity audit: PMP lessons ~258 words vs 1,300–1,900; no `LangSection`/`GlossaryCard`/`Callout`/figures; no PMP audio or coverage map.
- Beginner audit: **NOT READY** — objectives promise terms the bodies never teach; agile vocabulary appears before station 10; quizzes grade without teaching; no shared case sets.

## Global Constraints

- ECO domains: People **33%**, Process **41%**, Business Environment **26%**; 26 tasks = People 8 / Process 10 / Business Environment 8.
- Exam format: **180 questions / 240 minutes → 80 seconds per question**; ~40% predictive / ~60% agile-hybrid.
- Every lesson: Concept Explanation → Real-World Scenario → Interactive Island Tool → Scenario Quiz.
- Every quiz question: ≥4 options, exactly one correct, Arabic explanation ≥20 chars that teaches the discriminator, no duplicated explanation strings.
- Bilingual rule: Arabic term followed by English in parentheses at first use and in every local glossary bullet.
- No TODOs, placeholders, lazy stubs, empty functions, or `pass`.
- Gates: `npm run verify` = 0 errors/0 warnings/0 hints, `npm run build` PASS, `qa:ar` PASS, 24+ tests PASS, Prettier clean.
- Commit and push only after the final gate passes and the honest verdict is re-audited.

## Review Focus

| Failure mode                                            | Test that pins it                                                            | Owner task |
| ------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------- |
| Weights silently drift from 33/41/26                    | `tests/pmp-coverage.test.mjs` asserts per-domain sums and total 100          | Task 2     |
| An ECO task is claimed but unmapped                     | test asserts all 26 task IDs appear in curriculum data and in ≥1 lesson/quiz | Task 2     |
| Objectives promise terms the concept body never teaches | regression test for `1-3`, `6-1`, `6-3`, `10-5`, `4-3`, `0-1`                | Task 3     |
| A wrong answer teaches nothing                          | test asserts both chosen and correct explanations render in `ScenarioQuiz`   | Task 5     |
| Beginner hits case/chart items never seen in lessons    | test asserts ≥2 shared case sets with ≥4 questions and a table/chart stem    | Task 5     |

---

### Task 1: Coverage contract and failing tests

**Files:**

- Create: `tests/pmp-coverage.test.mjs`
- Modify: `package.json` (add `test:pmp` script if needed)

**Interfaces:**

- Consumes: `src/data/curriculum.ts`, `src/data/quiz/pmp/*.ts`, `src/components/islands/tools/pmp/PmpMockExam.tsx`.
- Produces: named assertions that fail on today's tree for weights, 26-task mapping, 80s pacing, explanations, bilingual bullets, case sets, AI/generative content.

- [ ] **Step 1: Write failing tests** in `tests/pmp-coverage.test.mjs` for every Global Constraint and Review Focus row, using real imports/parsing; assert current failures explicitly (44 ≠ 41, 73 ≠ 80, missing 26 IDs, etc.).
- [ ] **Step 2: Run `node --test tests/pmp-coverage.test.mjs`; confirm RED for the expected reasons, not syntax errors.**
- [ ] **Step 3: Commit the failing test only.**

```bash
git add tests/pmp-coverage.test.mjs package.json
git commit -m "test(pmp): pin ECO coverage and learner-readiness contract"
```

### Task 2: Rebalance weights and publish the 26-task map

**Files:**

- Modify: `src/data/curriculum.ts` (station weights around lines 1483, 1657, 1726, 1796, 1878, 1946, 2027, 2095, 2189).
- Create: `src/data/pmpEcoTasks.ts` — 26 entries `{ id, domain, titleAr, titleEn, lessonIds, quizIds }`.
- Modify: `src/components/islands/tools/pmp/PmpTool.tsx:314-383` — show all 26 tasks, not 12 themes.

**Interfaces:**

- Consumes: official task headings (People 1–8, Process 1–10, Business Environment 1–8).
- Produces: `pmpEcoTasks`, `pmpEcoTasksByDomain`, imported by curriculum UI and tests.

- [ ] **Step 1:** Run Task 1 test; confirm weight/task failures remain RED.
- [ ] **Step 2:** Set Process station weights to sum 41 (suggested 8/6/7/7/5/5/3) and give Agile/Hybrid station a non-zero share by reallocating inside Process, keeping People 33 and Business Environment 26.
- [ ] **Step 3:** Add all 26 task entries with explicit lesson/quiz IDs; every task must map to ≥1 lesson and ≥1 quiz.
- [ ] **Step 4:** Run Task 1 test; weights and task assertions GREEN.
- [ ] **Step 5:** Commit.

```bash
git add src/data/curriculum.ts src/data/pmpEcoTasks.ts src/components/islands/tools/pmp/PmpTool.tsx
git commit -m "fix(pmp): rebalance ECO weights and map all 26 tasks"
```

### Task 3: Repair prerequisite chain and contractual objectives

**Files:**

- Modify: `scripts/gen_pmp_lessons.mjs` (authoritative source), then regenerate with `node scripts/gen_pmp_lessons.mjs`.
- Modify: `src/data/glossary/pmp.ts`, `src/data/courses.ts` if a primer lesson is added.

**Interfaces:**

- Consumes: `pmpEcoTasks` from Task 2.
- Produces: prerequisite-safe lessons; every `objectives` entry has a matching explained bullet in `## 1. المفهوم`.

- [ ] **Step 1:** Run Task 1 regression tests for `0-1`, `1-3`, `6-1`, `6-3`, `10-5`, `4-3`; confirm RED.
- [ ] **Step 2:** Add a short Agile-vocabulary primer before station 1 (or define sprint/stand-up/Kanban at first use in `0-5`); remove first-use violations in `1-4`, `2-4`, `2-6`, `8-3`.
- [ ] **Step 3:** Add explicit explanations for Phase gate, Progressive elaboration, EMV, Residual/Secondary risk, VAC, Burnup; define Output/Outcome and charter at first use in `0-1`.
- [ ] **Step 4:** Fix `الدوء المؤقتة` → `المدة المؤقتة`, duplicated `(Temporary) (Temporary)`, `الأقتصادي`, and Greek `ομπρέρα`.
- [ ] **Step 5:** Add glossary entries for the 20 highest-value terms (charter, WBS, RACI, CPI/SPI, critical path, risk register, governance, benefits, sprint, ESG, …) with Arabic-first English parentheses.
- [ ] **Step 6:** Regenerate MDX; run Task 1 tests GREEN.
- [ ] **Step 7:** Commit.

```bash
git add scripts/gen_pmp_lessons.mjs src/data/glossary/pmp.ts src/content/lessons/pmp src/content/stations/pmp
git commit -m "fix(pmp): repair prerequisite order and unmet lesson objectives"
```

### Task 4: Lift lesson depth to platform standard

**Files:**

- Modify: `scripts/gen_pmp_lessons.mjs` template; regenerate all 55 MDX.
- Modify: `src/layouts/LessonLayout.astro` only if shared components need PMP branch.

**Interfaces:**

- Consumes: CFM/CMRP/CAMA lesson pattern (`LangSection`, `GlossaryCard`, `Callout`, figures).
- Produces: ≥1,000 words/lesson in Arabic + real English `LangSection` support; worked example with numbers/data in every `## 2. سيناريو واقعي`.

- [ ] **Step 1:** Add a test asserting PMP lesson body length ≥1,000 words and presence of `LangSection`/`GlossaryCard`/`Callout`; watch RED.
- [ ] **Step 2:** Extend generator template to include worked example, “why it matters / how it fails”, bilingual section, and glossary card; regenerate.
- [ ] **Step 3:** Confirm station 10 has real agile/hybrid depth (Scrum events, Kanban/WIP, scaling, metrics) and non-zero weight from Task 2.
- [ ] **Step 4:** Run `npm run verify`, `npm run qa:ar`; GREEN.
- [ ] **Step 5:** Commit.

```bash
git add scripts/gen_pmp_lessons.mjs src/content/lessons/pmp src/layouts/LessonLayout.astro
git commit -m "feat(pmp): bring lesson depth to platform standard"
```

### Task 5: Teach-through quiz feedback and real case sets

**Files:**

- Modify: `src/components/islands/quiz/ScenarioQuiz.tsx`, `src/data/quiz/types.ts`, `scripts/pmp_quiz_data_a.mjs`, `scripts/pmp_quiz_data_b.mjs`, `scripts/gen_pmp_quizzes_final.mjs`, `src/components/islands/tools/common/GenericExamRunner.tsx`.

**Interfaces:**

- Consumes: existing `QuizQuestion` shape; produces optional `caseSetId`, `sharedStem`, `chartData`.
- Produces: both chosen and correct explanations shown; skipped questions included in review; ≥2 multi-question case sets.

- [ ] **Step 1:** Add failing test for 72 short/duplicated explanations, missing correct-option explanation after wrong answer, and absent case sets; watch RED.
- [ ] **Step 2:** Replace every explanation <20 chars and all 12 duplicates with discriminator-teaching Arabic text in the source data scripts; regenerate TS banks.
- [ ] **Step 3:** Change `ScenarioQuiz` to render chosen + correct explanations and add one hinted retry; add lesson review link.
- [ ] **Step 4:** Extend question type with `caseSetId/sharedStem/chartData`; add ≥2 case sets (4–6 questions each) with a table/chart; include in mock bank and review.
- [ ] **Step 5:** Include skipped mock questions in the review screen.
- [ ] **Step 6:** Run Task 1 tests GREEN; commit.

```bash
git add src/components/islands/quiz/ScenarioQuiz.tsx src/data/quiz/types.ts scripts/pmp_quiz_data_a.mjs scripts/pmp_quiz_data_b.mjs scripts/gen_pmp_quizzes_final.mjs src/data/quiz/pmp src/components/islands/tools/common/GenericExamRunner.tsx
git commit -m "feat(pmp): teach through quiz feedback and add case sets"
```

### Task 6: Mock exam pacing and mode integrity

**Files:**

- Modify: `src/components/islands/tools/pmp/PmpMockExam.tsx:31-33`.

**Interfaces:**

- Consumes: `mockPmpQuestions` (180), `GenericExamRunner`.
- Produces: `secondsPerQuestion={80}`, `countOptions={[180]}` (short modes removed or explicitly labelled as non-mock drills).

- [ ] **Step 1:** Add failing test asserting 80 seconds and a single 180-question mode; watch RED.
- [ ] **Step 2:** Set `secondsPerQuestion={80}` and `countOptions={[mockPmpQuestions.length]}`.
- [ ] **Step 3:** Confirm domain breakdown still 59/74/47 and description says 240 minutes; GREEN.
- [ ] **Step 4:** Commit.

```bash
git add src/components/islands/tools/pmp/PmpMockExam.tsx tests/pmp-coverage.test.mjs
git commit -m "fix(pmp): correct mock exam pacing to 240 minutes"
```

### Task 7: Make island tools teach, not just compute

**Files:**

- Modify: `src/components/islands/tools/pmp/PmpTool.tsx` (EVM, WBS, risk register, Kanban, AI tool).

**Interfaces:**

- Consumes: lesson concepts from Task 3.
- Produces: inline formulas, validation, opportunity responses, conditional feedback, AI impact assessment.

- [ ] **Step 1:** Add failing tests for EVM formulas displayed, 100% rule validation, risk owner/trigger/status + opportunity responses, Kanban conditional feedback, AI assessment artifact; watch RED.
- [ ] **Step 2:** Implement the five tool behaviours.
- [ ] **Step 3:** Split `PmpTool.tsx` into per-tool modules only if a test requires it; otherwise keep registry with a `default` error case.
- [ ] **Step 4:** Run tests GREEN; commit.

```bash
git add src/components/islands/tools/pmp tests/pmp-coverage.test.mjs
git commit -m "fix(pmp): make interactive tools teach the concepts"
```

### Task 8: Deepen AI, ESG and benefits; add platform extras

**Files:**

- Modify: `scripts/gen_pmp_lessons.mjs` (`9-6`, `8-4`, `1-2`), quiz sources, `src/data/glossary/pmp.ts`, `src/data/audioManifest.ts`, `project_management/EXAM_COVERAGE.md` or new `EXAM_COVERAGE_PMP.md`.

**Interfaces:**

- Consumes: ECO task map from Task 2.
- Produces: generative-AI lifecycle and human-in-the-loop thresholds; ESG metrics in procurement/lifecycle; benefit plan artifact with owner/baseline/target/date/disbenefits; PMP audio entries; PMP coverage map.

- [ ] **Step 1:** Add failing test asserting `توليدي|GenAI|generative` in lesson/quiz/tool, benefit-plan fields, ESG metrics, PMP audio entries, PMP coverage map; watch RED.
- [ ] **Step 2:** Implement content and artifacts in generator sources; regenerate.
- [ ] **Step 3:** Add PMP coverage map linking all 26 tasks → lessons → quizzes.
- [ ] **Step 4:** Add PMP audio manifest entries or explicitly document why audio is out of scope; GREEN.
- [ ] **Step 5:** Commit.

```bash
git add scripts/gen_pmp_lessons.mjs src/data/quiz/pmp src/data/glossary/pmp.ts src/data/audioManifest.ts project_management
git commit -m "feat(pmp): deepen AI, ESG, benefits and platform extras"
```

### Task 9: Honest docs, final gates, push

**Files:**

- Modify: `SRS.md`, `CHANGELOG.md`, `project_management/ACTIVE_CONTEXT.md`, `project_management/MASTER_PLAN.md`, `project_management/tasks/task_add_pmp_course.md`.
- Create: `docs/superpowers/plans/2026-11-26-pmp-exam-readiness-rebuild.md` (this file).

**Interfaces:**

- Consumes: all GREEN tests from Tasks 1–8.
- Produces: truthful status; final push.

- [ ] **Step 1:** Replace “complete / ready” claims with evidence-based status and list residual limitations honestly.
- [ ] **Step 2:** Run `npm run format`, `npm run verify`, `npm run build`; all GREEN with 0 errors/warnings/hints.
- [ ] **Step 3:** Re-run the three audits (coverage, platform parity, beginner readiness); require beginner verdict ≥ “partially ready” with no critical gaps, or report honestly.
- [ ] **Step 4:** Commit docs and push `master` to origin.
- [ ] **Step 5:** Report final verdict to the user in Arabic with exact numbers.

```bash
git add -A
git commit -m "docs(pmp): sync honest readiness status after rebuild"
git push origin master
```

## Self-Review

- **Spec coverage:** all three audit gap sets mapped to Tasks 1–9; no spec requirement left without a task.
- **Step scan:** each step names one checkable action and its expected RED/GREEN result.
- **Type consistency:** `pmpEcoTasks` and `caseSetId/sharedStem/chartData` names reused verbatim in Tasks 2 and 5.
- **Review Focus:** five high-risk failures each pinned to a test in Task 1 and owned by a later task.
- **Proportion:** plan is shorter than the code it will replace; no full lesson bodies transcribed.
