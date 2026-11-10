---
type: C4 Component
title: Sharing
status: stable
groma:
  id: globalsharemodal
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/sharing/global-share-modal/GlobalShareModal.tsx
      symbol: openGlobalShareModal
    - scanner: typescript
      file: apps/web/src/features/sharing/global-share-modal/shareable-entity.ts
  technology: SolidJS
description: Global share modal and native share sheet.
---

Forms are delegated to `block-form/form-global-sharing`. `AppChrome` mounts `NativeShareSheet` for an authenticated member (`Layout.tsx:30`, `Layout.tsx:314`). The native sheet file imports channel input helpers; its header comment was not in the opened range.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/sharing/global-share-modal/GlobalShareModal.tsx](../../../../../../apps/web/src/features/sharing/global-share-modal/GlobalShareModal.tsx) | [apps/web/src/features/block-form/form-global-sharing.tsx](../../../../../../apps/web/src/features/block-form/form-global-sharing.tsx) | opens form share modal | dynamic import |
