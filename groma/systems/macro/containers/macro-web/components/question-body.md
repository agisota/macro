---
type: C4 Component
title: Builder question body
status: stable
groma:
  id: question-body
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/question-body.tsx
      symbol: QuestionPreview
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/choice-marker.tsx
      symbol: ChoiceMarker
    - scanner: typescript
      file: apps/web/src/features/block-form/components/share/branding-panel.tsx
      symbol: BrandingPanel
    - scanner: typescript
      file: apps/web/src/features/block-form/core/text-change.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/components/responses/stat-tiles.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/primitives/create-builder.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/form-editors.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/form-respond-page.tsx
      symbol: FormRespondPage
    - scanner: typescript
      file: apps/web/src/features/block-form/primitives/create-builder-drag.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/views/form-page-view.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/booking-link-dialog.tsx
      symbol: BookingLinkDialog
    - scanner: typescript
      file: apps/web/src/features/block-form/form-responses-grid.tsx
      symbol: FormResponsesGrid
    - scanner: typescript
      file: apps/web/src/features/block-form/form-condition-editor.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/form-collaboration.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/core/drop-target.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/core/layout-messages.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/builder-chrome.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/form-context-production.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/sign-in-to-respond.tsx
      symbol: SignInToRespond
    - scanner: typescript
      file: apps/web/src/features/block-form/core/rule-sentence.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/type-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/booking-card.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/booking-sources.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/primitives/create-preview.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/components/question-type-icon.tsx
      symbol: QuestionTypeIcon
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/insertion-point.tsx
      symbol: InsertionPoint
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/option-list-editor.tsx
      symbol: OptionListEditor
    - scanner: typescript
      file: apps/web/src/features/block-form/views/builder-view.tsx
      symbol: BuilderView
    - scanner: typescript
      file: apps/web/src/features/block-form/views/share-tab-view.tsx
      symbol: ShareTabView
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/draft-input.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/form-layout-collaboration.ts
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/question-footer.tsx
      symbol: QuestionFooter
    - scanner: typescript
      file: apps/web/src/features/block-form/views/responses-view.tsx
      symbol: ResponsesView
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/section-card.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/components/form-tabs.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/form-pickers.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/question-row.tsx
      symbol: QuestionRow
    - scanner: typescript
      file: apps/web/src/features/block-form/queries/direct-message.ts
      symbol: directMessageWith
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/drag-handle.tsx
    - scanner: typescript
      file: apps/web/src/features/block-form/components/builder/live-text-input.tsx
  technology: SolidJS
  group: Files
description: Form editor, sharing, and respond page host.
---

The comment says the block access level is the form's own, from `queries/load-form.ts`, so the header badge and share dialog agree with the service. `GlobalShareModal` special-cases `entity.type === 'form'` and imports `openFormShareModal` from this feature (`sharing/global-share-modal/GlobalShareModal.tsx:16-20`). The public respond route is `form/:formId/respond` (`routes/routes.ts:86-91`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-form/primitives/create-preview.ts](../../../../../../apps/web/src/features/block-form/primitives/create-preview.ts) | [apps/web/src/features/block-form/form-block.tsx](../../../../../../apps/web/src/features/block-form/form-block.tsx) | Invokes supplied callback: url | typescript |
| [apps/web/src/features/block-form/primitives/create-preview.ts](../../../../../../apps/web/src/features/block-form/primitives/create-preview.ts) | [apps/web/src/features/block-form/form-preview-tab.ts](../../../../../../apps/web/src/features/block-form/form-preview-tab.ts) | Invokes supplied callback: reserveTab | typescript |
