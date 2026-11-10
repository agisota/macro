---
type: C4 Component
title: BlockElement
status: stable
groma:
  id: blockelement
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/signal/blockElement.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/signal/unfurl.ts
      symbol: useUnfurl
    - scanner: typescript
      file: apps/web/src/lib/core/signal/token.ts
    - scanner: typescript
      file: apps/web/src/lib/core/signal/layout/index.ts
      symbol: TOP_BAR_HEIGHT
    - scanner: typescript
      file: apps/web/src/lib/core/signal/tabFocus.ts
    - scanner: typescript
      file: apps/web/src/lib/core/signal/profilePicture.ts
    - scanner: typescript
      file: apps/web/src/lib/core/signal/permissions.ts
    - scanner: typescript
      file: apps/web/src/lib/core/signal/settingsTab.ts
    - scanner: typescript
      file: apps/web/src/lib/core/signal/mention.ts
    - scanner: typescript
      file: apps/web/src/lib/core/signal/load.ts
  technology: SolidJS
description: Whether the tab is on screen, focused or not (e.g. beside a focused window) Whether the tab is currently focused
---

Whether the tab is on screen, focused or not (e.g. beside a focused window) Whether the tab is currently focused
