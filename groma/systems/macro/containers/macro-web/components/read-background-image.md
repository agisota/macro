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
  group: Workspace core
description: Bound custom images before storing the same background preference as calls
---

Bound custom images before storing the same background preference as calls.
