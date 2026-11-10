---
type: C4 Component
title: Web module
status: stable
groma:
  id: psd-engine-wasm-module
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/psd-engine/wasm-module.ts
    - scanner: typescript
      file: apps/web/src/lib/core/psd-engine/psd.worker.ts
    - scanner: typescript
      file: apps/web/src/lib/core/psd-engine/protocol.ts
    - scanner: typescript
      file: apps/web/src/lib/core/psd-engine/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/psd-engine/client.ts
  technology: SolidJS
description: Part of the signed-in client
---

Typed surface of the generated wasm package (`psd_engine`), loaded dynamically so the repo type-checks without the generated artifacts.  Build the package with: just build-psd-engine-wasm which runs wasm-pack over crates/psd_engine into src/lib/core/psd-engine/wasm/ (gitignored).
