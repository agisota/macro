---
type: C4 Component
title: Web module
status: stable
groma:
  id: imagepreview
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/ImagePreview.tsx
      symbol: ImagePreview
  technology: SolidJS
description: Part of the signed-in client
---

@deprecated Prefer the composable media primitives in `@channel/Media`. Keep this only for legacy callers until they are migrated.
