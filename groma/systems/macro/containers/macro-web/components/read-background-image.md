---
type: C4 Component
title: Read background image
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
description: Read background image inside the signed-in client.
---

Bound custom images before storing the same background preference as calls.
