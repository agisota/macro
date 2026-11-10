---
type: C4 Component
title: Web module
status: stable
groma:
  id: tile-pixels
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/ai-engine/tile-pixels.ts
      symbol: overColor
    - scanner: typescript
      file: apps/web/src/lib/core/ai-engine/ai.worker.ts
    - scanner: typescript
      file: apps/web/src/lib/core/ai-engine/protocol.ts
    - scanner: typescript
      file: apps/web/src/lib/core/ai-engine/wasm-module.ts
    - scanner: typescript
      file: apps/web/src/lib/core/ai-engine/client.ts
    - scanner: typescript
      file: apps/web/src/lib/core/ai-engine/types.ts
  technology: SolidJS
description: Part of the signed-in client
---

Tiles are drawn on the pasteboard color, so they are opaque: coarse stand-ins under a sharper tile never show through its empty parts, and the canvas can composite without alpha.
