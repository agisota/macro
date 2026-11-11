---
type: C4 Component
title: Prototype types
status: stable
groma:
  id: prototype-types
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/prototype-types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/fig.worker.ts
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/wasm-module.ts
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/design-types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/thumbnail.ts
      symbol: figThumbnail
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/library-types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/protocol.ts
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/handoff-types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/compiled-module.ts
      symbol: compiledFigModule
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/fig-engine/client.ts
  technology: SolidJS
  group: Workspace core
description: A page's prototype as the engine reads it (`inspect/prototype
---

A page's prototype as the engine reads it (`inspect/prototype.rs`): flows, the frames that are screens, and every layer with interactions. Enum values are Figma's names.
