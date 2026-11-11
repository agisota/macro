---
type: C4 Component
title: FindBar
status: stable
groma:
  id: findbar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/FindBar.tsx
      symbol: FindBar
  technology: SolidJS
description: FindBar inside the signed-in client.
---

Which physical key advances the cursor. `'asc'` — ArrowDown/Enter advance, ArrowUp/Shift+Enter retreat. `'desc'` — flipped, for surfaces where the natural reading direction is bottom-to-top (e.g. a chat channel).
