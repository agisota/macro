---
type: C4 Component
title: Shared
status: stable
groma:
  id: history-shared
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/split-router/history/shared.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/history/solid-router.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/history/browser.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/history/memory.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/history/types.ts
  technology: SolidJS
  group: Split layout
description: Where the adapters keep their slice of `history
---

Where the adapters keep their slice of `history.state`.
