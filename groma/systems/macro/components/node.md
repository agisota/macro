---
type: C4 Component
title: Node
status: stable
groma:
  id: node
  parent: macro
  code:
    - scanner: typescript
      file: packages/sdk/src/calls/node.ts
    - scanner: typescript
      file: packages/sdk/src/calls/common.ts
    - scanner: typescript
      file: packages/sdk/src/calls/browser.ts
    - scanner: typescript
      file: packages/sdk/src/calls/telemetry.ts
  technology: TypeScript
  group: Macro SDK pieces
description: Node in Macro SDK pieces.
---

File packages/sdk/src/calls/node.ts. It belongs to Macro SDK pieces, not a separate application.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/sdk/src/calls/browser.ts](../../../../packages/sdk/src/calls/browser.ts) | [livekit](../../../externals/livekit.md) | Connects the call room | livekit-client |
