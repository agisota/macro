---
type: C4 Component
title: Docx engine client
status: stable
groma:
  id: docx-engine-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/docx-engine/client.ts
    - scanner: typescript
      file: apps/web/src/lib/core/docx-engine/wasm-module.ts
    - scanner: typescript
      file: apps/web/src/lib/core/docx-engine/protocol.ts
    - scanner: typescript
      file: apps/web/src/lib/core/docx-engine/docx.worker.ts
    - scanner: typescript
      file: apps/web/src/lib/core/docx-engine/types.ts
  technology: SolidJS
  group: Workspace core
description: 'The DOCX engine as the app calls it: async functions, worker behind them'
---

The DOCX engine as the app calls it: async functions, worker behind them.  One worker per tab, started on first use and kept, so the wasm module is compiled once however many documents are open. Each open document is addressed by a caller-chosen `docKey`.
