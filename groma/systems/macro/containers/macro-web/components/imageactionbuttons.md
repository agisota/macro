---
type: C4 Component
title: ImageActionButtons
status: stable
groma:
  id: imageactionbuttons
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/ImageActions/ImageActionButtons.tsx
      symbol: ImageActionButtons
    - scanner: typescript
      file: apps/web/src/lib/core/component/ImageActions/createImageActions.ts
      symbol: createImageActions
    - scanner: typescript
      file: apps/web/src/lib/core/component/ImageActions/index.ts
  technology: SolidJS
description: ImageActionButtons inside the signed-in client.
---

Copy + download buttons for a single image, driven by `createImageActions`.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/core/component/ImageActions/createImageActions.ts](../../../../../../apps/web/src/lib/core/component/ImageActions/createImageActions.ts) | [apps/web/src/features/block-canvas/views/canvas-view.tsx](../../../../../../apps/web/src/features/block-canvas/views/canvas-view.tsx) | Invokes supplied callback: imageId | typescript |
| [apps/web/src/lib/core/component/ImageActions/createImageActions.ts](../../../../../../apps/web/src/lib/core/component/ImageActions/createImageActions.ts) | [apps/web/src/features/channel/Media/MediaImageActions.tsx](../../../../../../apps/web/src/features/channel/Media/MediaImageActions.tsx) | Invokes supplied callbacks: imageId, src | typescript |
