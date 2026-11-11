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
description: Shared package sdk
---

Library code in packages/sdk. Not a separately deployed service.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/sdk/src/calls/browser.ts](../../../../packages/sdk/src/calls/browser.ts) | [livekit](../../../externals/livekit.md) | Connects the call room | livekit-client |
