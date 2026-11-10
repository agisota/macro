---
type: C4 Component
title: Web module
status: stable
groma:
  id: collab-surface-types
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/collab-surface/types.ts
      symbol: CollabMarkdownSession
    - scanner: typescript
      file: apps/web/src/lib/core/collab-surface/CollabMdSurface.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/collab-surface/blockParent.ts
      symbol: useBlockCollabParent
    - scanner: typescript
      file: apps/web/src/lib/core/collab-surface/createCollabSurface.ts
    - scanner: typescript
      file: apps/web/src/lib/core/collab-surface/token.ts
      symbol: getCollabSurfaceToken
    - scanner: typescript
      file: apps/web/src/lib/core/collab-surface/debug/CollabSurfaceDemoPage.tsx
      symbol: CollabSurfaceDemoPage
    - scanner: typescript
      file: apps/web/src/lib/core/collab-surface/CollabMarkdownEditor.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Session ownership is independent of whether the host is a block or a native view.
