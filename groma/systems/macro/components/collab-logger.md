---
type: C4 Component
title: Logger
status: stable
groma:
  id: collab-logger
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/src/collab/logger.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/ai-peer.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/test-utils/test-server.ts
      symbol: TestServer
    - scanner: typescript
      file: packages/collaboration/src/collab/manager-error.ts
      symbol: LoroManagerError
    - scanner: typescript
      file: packages/collaboration/src/collab/engine.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/awareness.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/manager.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/utils.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/testing.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/chatter.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/snapshot-store.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/source.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/telemetry.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/recoverable-database.ts
      symbol: RecoverableDatabase
    - scanner: typescript
      file: packages/collaboration/src/collab/wal.ts
    - scanner: typescript
      file: packages/collaboration/src/collab/shared.ts
  technology: TypeScript, Loro
description: Loro sync, awareness, and the sync-service socket
---

Shared by the web app and workers. Callers pass the URL and token. It does not authenticate and does not call Gmail, GitHub, or model APIs.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [apps/web/src/features/block-ai/queries/ai-collab.ts](../../../../apps/web/src/features/block-ai/queries/ai-collab.ts) | Invokes supplied callbacks: decode, encode | typescript |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [apps/web/src/features/block-canvas/core/presence.ts](../../../../apps/web/src/features/block-canvas/core/presence.ts) | Invokes supplied callback: decode | typescript |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [apps/web/src/features/block-canvas/queries/canvas-session.ts](../../../../apps/web/src/features/block-canvas/queries/canvas-session.ts) | Invokes supplied callback: encode | typescript |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [apps/web/src/features/block-fig/queries/fig-collab.ts](../../../../apps/web/src/features/block-fig/queries/fig-collab.ts) | Invokes supplied callbacks: decode, encode | typescript |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [apps/web/src/features/block-form/queries/form-collaboration.ts](../../../../apps/web/src/features/block-form/queries/form-collaboration.ts) | Invokes supplied callbacks: decode, encode | typescript |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [apps/web/src/features/block-pptx/queries/presentation-collab.ts](../../../../apps/web/src/features/block-pptx/queries/presentation-collab.ts) | Invokes supplied callbacks: decode, encode | typescript |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [apps/web/src/features/block-psd/queries/psd-collab.ts](../../../../apps/web/src/features/block-psd/queries/psd-collab.ts) | Invokes supplied callbacks: decode, encode | typescript |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [apps/web/src/features/block-spreadsheet/queries/spreadsheet-session.ts](../../../../apps/web/src/features/block-spreadsheet/queries/spreadsheet-session.ts) | Invokes supplied callbacks: decode, encode | typescript |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [apps/web/src/features/block-write/queries/docx-session.ts](../../../../apps/web/src/features/block-write/queries/docx-session.ts) | Invokes supplied callbacks: decode, encode | typescript |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [apps/web/src/lib/core/component/LexicalMarkdown/collaboration/LexicalAwareness.ts](../../../../apps/web/src/lib/core/component/LexicalMarkdown/collaboration/LexicalAwareness.ts) | Invokes supplied callbacks: decode, encode | typescript |
| [packages/collaboration/src/collab/awareness.ts](../../../../packages/collaboration/src/collab/awareness.ts) | [services/ai-editing-worker/src/canvas/session.ts](../../../../services/ai-editing-worker/src/canvas/session.ts) | Invokes supplied callback: decode | typescript |
| [packages/collaboration/src/collab/snapshot-store.ts](../../../../packages/collaboration/src/collab/snapshot-store.ts) | [apps/web/src/features/block-canvas/queries/canvas-session.ts](../../../../apps/web/src/features/block-canvas/queries/canvas-session.ts) | Invokes supplied callbacks: delete, load | typescript |
| [packages/collaboration/src/collab/snapshot-store.ts](../../../../packages/collaboration/src/collab/snapshot-store.ts) | [apps/web/src/features/block-form/queries/form-collaboration.ts](../../../../apps/web/src/features/block-form/queries/form-collaboration.ts) | Invokes supplied callbacks: delete, load | typescript |
| [packages/collaboration/src/collab/snapshot-store.ts](../../../../packages/collaboration/src/collab/snapshot-store.ts) | [apps/web/src/features/block-spreadsheet/queries/spreadsheet-session.ts](../../../../apps/web/src/features/block-spreadsheet/queries/spreadsheet-session.ts) | Invokes supplied callbacks: delete, load | typescript |
