---
type: C4 Component
title: Web module
status: stable
groma:
  id: read-background-image
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/media/read-background-image.ts
      symbol: readBackgroundImage
    - scanner: typescript
      file: apps/web/src/lib/core/media/background-effect.ts
  technology: SolidJS
description: Part of the signed-in client
---

Bound custom images before storing the same background preference as calls.
