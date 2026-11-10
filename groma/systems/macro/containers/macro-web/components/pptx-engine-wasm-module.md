---
type: C4 Component
title: Web module
status: stable
groma:
  id: pptx-engine-wasm-module
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/pptx-engine/wasm-module.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pptx-engine/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pptx-engine/changes.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pptx-engine/pptx.worker.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pptx-engine/client.ts
    - scanner: typescript
      file: apps/web/src/lib/core/pptx-engine/protocol.ts
  technology: SolidJS
description: Part of the signed-in client
---

Typed surface of the generated wasm package (`pptx_engine`), loaded dynamically so the repo type-checks without the generated artifacts.  Build the package with: just build-pptx-engine-wasm which runs wasm-pack over crates/pptx_engine into src/lib/core/pptx-engine/wasm/ (gitignor
