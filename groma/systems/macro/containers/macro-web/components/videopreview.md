---
type: C4 Component
title: VideoPreview
status: stable
groma:
  id: videopreview
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/VideoPreview.tsx
      symbol: VideoPreview
  technology: SolidJS
  group: Workspace core
description: '@deprecated Prefer the composable media primitives in `@channel/Media`'
---

@deprecated Prefer the composable media primitives in `@channel/Media`. Keep this only for legacy callers until they are migrated.
