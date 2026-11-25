# Technical Debt Register

This register tracks identified architectural compromises, temporary trade-offs, and refactoring items across GridFix Academy.

## Debt Catalog

| ID | Title | Severity | Impact | Remediation Plan |
| :--- | :--- | :--- | :--- | :--- |
| **DEBT-01** | **Client-Side Progress Storage Only** | Low | Learner progress in `localStorage` is not synced across devices or backed up. | Implement optional backend sync adapter (`StorageProvider` interface) when user accounts or CFM certificates are scheduled. |
| **DEBT-02** | **Audio Assets CDN Dependency** | Low | YouTube audio and lesson audio rely on external CDN paths (`cdn.gridfix.net`). | Add automated link health check script to CI to verify that all referenced audio assets exist. |
| **DEBT-03** | **Interactive Tools Test Coverage** | Medium | Math formulas are tested in `tests/formulas.test.mjs`, but React island DOM interactions lack automated component test runner. | Add React testing library / Vitest or Playwright for end-to-end interactive island verification. |
