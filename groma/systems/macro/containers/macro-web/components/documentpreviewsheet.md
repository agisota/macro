---
type: C4 Component
title: DocumentPreviewSheet
status: stable
groma:
  id: documentpreviewsheet
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/DocumentPreviewSheet.tsx
      symbol: DocumentPreviewSheet
  technology: SolidJS
  group: Workspace core
description: The preview card as a bottom sheet
---

The preview card as a bottom sheet. `HoverCard` renders nothing on touch devices, so a mention whose tap shows its preview instead of opening it presents the same card here. Opaque so page text cannot show through unavailable-item empty states.
