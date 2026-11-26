# 🗺️ PMP Exam Coverage — EXAM_COVERAGE_PMP.md

Status: **live content contract**, not a claim of guaranteed exam success. This map is derived from `src/data/pmpEcoTasks.ts`, the generated PMP lessons under `src/content/lessons/pmp/`, and the quiz banks under `src/data/quiz/pmp/`. It describes what the repository actually contains for the July 2026 ECO reference.

## Exam contract used by this rebuild

| Item | Value | Source of truth in the repo |
|---|---|---|
| ECO domains | People **33%**, Process **41%**, Business Environment **26%** (total 100%) | `src/data/curriculum.ts`, asserted by `tests/pmp-coverage.test.mjs` |
| ECO tasks | **26** = People 8 + Process 10 + Business Environment 8 | `src/data/pmpEcoTasks.ts` |
| Exam format | **180 questions / 240 minutes** → **80 seconds per question** | `PmpMockExam.tsx`, asserted by the coverage test |
| Approximate question split | People ≈ **59**, Process ≈ **74**, Business Environment ≈ **47** | 33/41/26 applied to 180 questions |
| Delivery mix design target | ≈ **40% predictive / 60% agile-hybrid** | Rebuild plan; used as a teaching balance, not a per-question label |
| Lessons generated | **55** MDX lessons across 12 stations | `node scripts/gen_pmp_lessons.mjs` |
| Inline glossary bullets | **all** bullets carry an English term in parentheses | `tests/pmp-coverage.test.mjs` |
| PMP glossary entries | **49** stable IDs in `src/data/glossary/pmp.ts` | `GlossaryCard` resolves these IDs |

## 26 ECO tasks → lessons → quizzes

The IDs below are the stable IDs in `pmpEcoTasks.ts`. Lesson and quiz suffixes map to `lesson-pmp-<suffix>.mdx` and `quiz-pmp-<suffix>.ts`. Arabic task titles are kept in the TypeScript contract; English titles are shown here for scanability. Every row has at least one live lesson and one live quiz bank.

| Task | Domain | ECO task (EN) | Lessons | Quizzes | Status |
|---|---|---|---|---|---|
| P1 | People | Manage conflict | lesson-2-3 | quiz-2-3 | ✅ live |
| P2 | People | Lead a team | lesson-2-1<br>lesson-2-2 | quiz-2-1<br>quiz-2-2 | ✅ live |
| P3 | People | Support team performance | lesson-2-2 | quiz-2-2 | ✅ live |
| P4 | People | Address and meet stakeholder expectations | lesson-2-5 | quiz-2-5 | ✅ live |
| P5 | People | Collaborate with stakeholders | lesson-2-4 | quiz-2-4 | ✅ live |
| P6 | People | Engage and support virtual teams | lesson-2-6<br>lesson-10-3 | quiz-2-6<br>quiz-10-3 | ✅ live |
| P7 | People | Define team ground rules | lesson-2-2<br>lesson-10-1 | quiz-2-2<br>quiz-10-1 | ✅ live |
| P8 | People | Negotiate and manage agreements | lesson-5-2<br>lesson-2-3 | quiz-5-2<br>quiz-2-3 | ✅ live |
| C1 | Process | Manage scope | lesson-3-1<br>lesson-3-2<br>lesson-3-4 | quiz-3-1<br>quiz-3-2<br>quiz-3-4 | ✅ live |
| C2 | Process | Manage schedule | lesson-4-1 | quiz-4-1 | ✅ live |
| C3 | Process | Manage budget | lesson-4-2<br>lesson-4-3 | quiz-4-2<br>quiz-4-3 | ✅ live |
| C4 | Process | Manage resources | lesson-5-1 | quiz-5-1 | ✅ live |
| C5 | Process | Manage risk | lesson-6-1<br>lesson-6-2<br>lesson-6-3 | quiz-6-1<br>quiz-6-2<br>quiz-6-3 | ✅ live |
| C6 | Process | Manage quality | lesson-5-3<br>lesson-5-4 | quiz-5-3<br>quiz-5-4 | ✅ live |
| C7 | Process | Manage changes | lesson-7-3<br>lesson-7-5 | quiz-7-3<br>quiz-7-5 | ✅ live |
| C8 | Process | Manage procurement | lesson-5-2 | quiz-5-2 | ✅ live |
| C9 | Process | Manage integration | lesson-5-5<br>lesson-1-5 | quiz-5-5<br>quiz-1-5 | ✅ live |
| C10 | Process | Manage delivery and closure in an agile/hybrid-aware way | lesson-8-1<br>lesson-10-4<br>lesson-10-5 | quiz-8-1<br>quiz-10-4<br>quiz-10-5 | ✅ live |
| BE1 | Business Environment | Compliance and governance | lesson-9-1<br>lesson-9-2 | quiz-9-1<br>quiz-9-2 | ✅ live |
| BE2 | Business Environment | Organizational change | lesson-9-3 | quiz-9-3 | ✅ live |
| BE3 | Business Environment | Benefits realization | lesson-8-4 | quiz-8-4 | ✅ live |
| BE4 | Business Environment | Sustainability and ESG | lesson-9-6<br>lesson-9-5 | quiz-9-6<br>quiz-9-5 | ✅ live |
| BE5 | Business Environment | Generative AI and emerging technology | lesson-9-6 | quiz-9-6 | ✅ live |
| BE6 | Business Environment | Ethics and cultural competence | lesson-9-2<br>lesson-2-1 | quiz-9-2<br>quiz-2-1 | ✅ live |
| BE7 | Business Environment | Stakeholder and power-political awareness | lesson-9-5<br>lesson-2-4 | quiz-9-5<br>quiz-2-4 | ✅ live |
| BE8 | Business Environment | Organizational structure and culture | lesson-9-3<br>lesson-9-5 | quiz-9-3<br>quiz-9-5 | ✅ live |

## Delivery-model coverage

| Delivery lens | Where it is taught | What the learner practices |
|---|---|---|
| Predictive (~40% design target) | 1-3 phase gate, 3-1/3-2 scope baseline and change, 4-1 critical path, 4-2/4-3/4-4 earned value, 6-1/6-2/6-3 risk | WBS, baselines, float, CV/SV/CPI/SPI/EAC/VAC, EMV, residual and secondary risk |
| Agile-hybrid (~60% design target) | 0-5 first-use agile primer, 1-4 approach selection, 2-4 sprint with users, 2-6 stand-up, 10-1/10-2/10-3 agile and Scrum/Kanban, 10-4 hybrid boundary, 10-5 velocity and Burnup | Sprint purpose, stand-up timebox, WIP limits, Definition of Done, hybrid gate boundary, scope-creep detection |
| Business environment | 8-4 benefit-management plan, 9-1/9-2 governance and compliance, 9-3 change, 9-5 PESTLE/ESG, 9-6 GenAI governance | Benefit owner, baseline, target, measurement date, disbenefits, provenance, human-in-the-loop thresholds, bias audit |

## Platform-parity notes

- Every generated lesson is rebuilt by `scripts/gen_pmp_lessons.mjs` from one authoritative content map; generated MDX is not hand-edited.
- Every lesson includes `LangSection` (Arabic and English), `GlossaryCard` with IDs that exist in `src/data/glossary/pmp.ts`, and a bilingual `Callout` exam trap.
- Station files now state concrete prerequisites instead of a repeated slogan. Station 0 is a prerequisite-safe primer: it defines Output/Outcome and the charter, and later lessons define Scrum, sprint, stand-up and Kanban at first use.
- `9-6` teaches generative-AI governance through data provenance, three human-in-the-loop thresholds, a bias audit and explicit risk/governance decisions. ESG metrics are tied to procurement and lifecycle choices in `9-5` and `9-6`.
- `8-4` is a benefit-management plan artifact: owner, metric, baseline, target, measurement date and disbenefits with mitigation.

## Audio limitation

No PMP audio entries are registered in `src/data/audioManifest.ts`. This is an explicit scope decision, not an oversight:

1. The repository has no recorded PMP MP3 assets under `public/audio`; the only existing MP3 files are CMRP and generic test samples.
2. Pointing PMP lesson IDs at those files would mislead learners and break the bilingual design, because no Arabic or English PMP narration exists.
3. Real entries must wait for published assets such as `pmp/<station>/lesson-pmp-x-y.ar.mp3` and `pmp/<station>/lesson-pmp-x-y.en.mp3`, plus measured durations in `lessonAudioDurations`.

The rationale is also recorded as a comment in `audioManifest.ts` so the omission is discoverable where the manifest is maintained.

## Residual limitations — honest verdict

- **Task coverage is real but not exhaustive.** All 26 tasks map to at least one lesson and quiz, but the map does not guarantee an equal number of questions per task, nor that every micro-skill inside a task has its own item.
- **Delivery mix is a design target.** The 40/60 predictive/agile-hybrid balance is derived from the rebuild plan; it has not been independently audited question-by-question against the live mock bank.
- **Mock exam is fixed-form.** It is 180 questions in 240 minutes with one 80-second pace; it is not adaptive, does not randomize by ECO weight in real time, and does not simulate PMI proctoring.
- **Question quality is mechanically checked, not psychometrically validated.** The scoped test confirms 880 substantial, non-duplicated explanations and correct-option feedback, but there has been no external PMI-style review or candidate study.
- **Case-set and chart coverage is limited.** At least two shared multi-question case sets with table/chart stems exist, but they do not represent every item format seen in the live exam.
- **Bilingual audio is absent.** See the Audio limitation section above.
- **Global gates passed after the rebuild.** `npm run format`, `npm run verify` (319 files, 0 errors, 0 warnings, 0 hints; 36 tests) and `npm run build` (192 pages) were run and passed by the coordinator; the 12 coverage assertions are part of the permanent test suite.
- **ECO version risk.** The map follows the July 2026 ECO reference used by the rebuild. Any later PMI revision requires a fresh task-by-task audit.

This document is a coverage map and an honesty statement. It does not replace the official PMI Examination Content Outline or certify readiness.
