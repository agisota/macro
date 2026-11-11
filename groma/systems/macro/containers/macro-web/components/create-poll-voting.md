---
type: C4 Component
title: Primitives create poll voting
status: stable
groma:
  id: create-poll-voting
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-form/primitives/create-poll-voting.ts
      symbol: createPollVoting
    - scanner: typescript
      file: apps/web/src/features/block-form/components/poll/poll-bars.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/views/form-card-view.tsx
      symbol: FormCardView
    - scanner: typescript
      file: apps/web/src/features/block-form/core/tally.ts
  technology: SolidJS
  group: Files
description: Form editor, sharing, and respond page host.
---

The comment says the block access level is the form's own, from `queries/load-form.ts`, so the header badge and share dialog agree with the service. `GlobalShareModal` special-cases `entity.type === 'form'` and imports `openFormShareModal` from this feature (`sharing/global-share-modal/GlobalShareModal.tsx:16-20`). The public respond route is `form/:formId/respond` (`routes/routes.ts:86-91`).
