---
type: C4 Component
title: Sharing
status: stable
groma:
  id: nativesharesheet
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/sharing/native-share-sheet/NativeShareSheet.tsx
      symbol: NativeShareSheet
    - scanner: typescript
      file: apps/web/src/features/sharing/native-share-sheet/uploadPendingShareAttachment.ts
    - scanner: typescript
      file: apps/web/src/features/sharing/native-share-sheet/createNativeShareSend.ts
      symbol: createNativeShareSend
  technology: SolidJS
description: Global share modal and native share sheet.
---

Forms are delegated to `block-form/form-global-sharing`. `AppChrome` mounts `NativeShareSheet` for an authenticated member (`Layout.tsx:30`, `Layout.tsx:314`). The native sheet file imports channel input helpers; its header comment was not in the opened range.
