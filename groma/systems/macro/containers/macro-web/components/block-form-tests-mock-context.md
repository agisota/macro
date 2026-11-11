---
type: C4 Component
title: Tests mock context
status: stable
groma:
  id: block-form-tests-mock-context
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-form/tests/mock-context.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/browser-test/poll-card.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/tests/fake-collaboration.ts
  technology: SolidJS
  group: Development tooling
description: Form editor, sharing, and respond page host.
---

The comment says the block access level is the form's own, from `queries/load-form.ts`, so the header badge and share dialog agree with the service. `GlobalShareModal` special-cases `entity.type === 'form'` and imports `openFormShareModal` from this feature (`sharing/global-share-modal/GlobalShareModal.tsx:16-20`). The public respond route is `form/:formId/respond` (`routes/routes.ts:86-91`).
