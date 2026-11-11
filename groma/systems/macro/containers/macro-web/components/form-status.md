---
type: C4 Component
title: Core form status
status: stable
groma:
  id: form-status
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-form/core/form-status.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/views/booking-step-view.tsx
      symbol: BookingStepView
    - scanner: typescript
      file: apps/web/src/features/block-form/core/poll-options.ts
      symbol: duplicatePollOptions
    - scanner: typescript
      file: apps/web/src/features/block-form/core/answers.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/form-composer-actions.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/components/share/audience-panel.tsx
      symbol: AudiencePanel
    - scanner: typescript
      file: apps/web/src/features/block-form/core/respond-link.ts
      symbol: respondLink
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/form-entity.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/publish-poll.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/form-detail.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/column-writes.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/core/gate-evaluation.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/components/respond/respond-screens.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/table-columns.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/load-form.ts
      symbol: loadForm
    - scanner: typescript
      file: apps/web/src/features/block-form/components/poll/poll-composer.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/form-sources.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/form-link-sharing.tsx
      symbol: FormLinkSharing
    - scanner: typescript
      file: apps/web/src/features/block-form/primitives/create-respond.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/context/form-context.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/form-publication.ts
      symbol: publicationMessage
    - scanner: typescript
      file: apps/web/src/features/block-form/database-forms-entry.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/core/date-answers.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/form-block.tsx
      symbol: FormBlock
    - scanner: typescript
      file: apps/web/src/features/block-form/core/branding.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/core/question-types.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/core/form-presence.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/core/form-layout.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/core/audience.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/views/respond-view.tsx
      symbol: RespondView
    - scanner: typescript
      file: apps/web/src/features/block-form/composer-actions.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/components/respond/question-field.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/core/collaboration-layout.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/core/form-model.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/form-preview-tab.ts
      symbol: reservePreviewTab
    - scanner: typescript
      file: apps/web/src/features/block-form/core/response-stats.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/form-global-sharing.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/primitives/create-audience-change.ts
      symbol: createAudienceChange
    - scanner: typescript
      file: apps/web/src/features/block-form/definition.ts
      symbol: definition
    - scanner: typescript
      file: apps/web/src/features/block-form/core/poll-card-layout.ts
      symbol: pollBodyHeight
  technology: SolidJS
  group: Files
description: Form editor, sharing, and respond page host.
---

The comment says the block access level is the form's own, from `queries/load-form.ts`, so the header badge and share dialog agree with the service. `GlobalShareModal` special-cases `entity.type === 'form'` and imports `openFormShareModal` from this feature (`sharing/global-share-modal/GlobalShareModal.tsx:16-20`). The public respond route is `form/:formId/respond` (`routes/routes.ts:86-91`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-form/primitives/create-audience-change.ts](../../../../../../apps/web/src/features/block-form/primitives/create-audience-change.ts) | [apps/web/src/features/block-form/views/share-tab-view.tsx](../../../../../../apps/web/src/features/block-form/views/share-tab-view.tsx) | Invokes supplied callback: detail | typescript |
