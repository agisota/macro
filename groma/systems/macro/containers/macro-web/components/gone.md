---
type: C4 Component
title: Gone
status: stable
groma:
  id: gone
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/AccessErrorViews/Gone.tsx
      symbol: Gone
    - scanner: typescript
      file: apps/web/src/lib/core/component/AccessErrorViews/Unauthorized.tsx
      symbol: Unauthorized
    - scanner: typescript
      file: apps/web/src/lib/core/component/AccessErrorViews/NotFound.tsx
      symbol: NotFound
  technology: SolidJS
description: Gone inside the signed-in client.
---

@description This is the view for when a user tries to access an item that returns a 410 indicating it was not successfully uploaded.
