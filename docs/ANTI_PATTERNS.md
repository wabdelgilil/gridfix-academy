# Project Anti-Patterns & Prohibited Practices

This document lists explicitly forbidden practices, architectural shortcuts, and code smells across GridFix Academy.

## 1. Linguistic & Content Anti-Patterns

| ID             | Anti-Pattern                      | Why It Is Forbidden                                                           | Approved Alternative                                                                                   |
| :------------- | :-------------------------------- | :---------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| **ANTI-AR-01** | **Machine Translation Non-Words** | Terms like "الحماس", "الغيباب", "التنرية" undermine professional credibility. | Use verified standard Arabic terminology followed by the English original in parentheses.              |
| **ANTI-AR-02** | **Concatenated Mixed Scripts**    | Words like `بمغritaje` break text rendering and screen readers.               | Separate Arabic text and Latin acronyms with spaces or parentheses (e.g. `نظام HVAC`).                 |
| **ANTI-AR-03** | **Narrative Filler & Personas**   | Lengthy stories and character dialogue distract from CFM exam competencies.   | Lead with concise scientific concepts; use practical facility scenarios purely as contextual examples. |

## 2. Architectural & Engineering Anti-Patterns

| ID              | Anti-Pattern                      | Why It Is Forbidden                                                                     | Approved Alternative                                                                                            |
| :-------------- | :-------------------------------- | :-------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **ANTI-ENG-01** | **Direct Untyped Client Storage** | Scattered `localStorage.getItem/setItem` calls cause key collisions and schema drift.   | All reads/writes must pass through `src/data/storage.ts` using strictly typed keys and schemas.                 |
| **ANTI-ENG-02** | **External Charting Bloat**       | Heavy client-side chart libraries (e.g. Chart.js, Recharts) bloat page weight.          | Use lightweight native SVG/CSS figures from `src/components/ui/figures/`.                                       |
| **ANTI-ENG-03** | **Hardcoded Secrets or URLs**     | Hardcoding domain paths or tokens breaks deployment flexibility and security.           | Use environment variables (`PUBLIC_SITE_URL`, `PUBLIC_AUDIO_BASE_URL`) with fallback defaults.                  |
| **ANTI-ENG-04** | **Unverified Floating Math**      | Unchecked division or floating-point rounding errors produce invalid financial figures. | Implement boundary checks (zero/negative division guards) and validate with tests in `tests/formulas.test.mjs`. |
