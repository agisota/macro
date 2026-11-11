---
type: C4 Component
title: Call
status: stable
groma:
  id: hydrate-call
  parent: webhook
  code:
    - scanner: typescript
      file: packages/sdk/src/events/hydrate/call.ts
    - scanner: typescript
      file: packages/sdk/src/events/verify.ts
      symbol: verifySignature
    - scanner: typescript
      file: packages/sdk/src/events/hydrate/agentSession.ts
    - scanner: typescript
      file: packages/sdk/src/events/hydrate/channel.ts
    - scanner: typescript
      file: packages/sdk/src/events/hydrate/message.ts
    - scanner: typescript
      file: packages/sdk/src/events/receiver.ts
    - scanner: typescript
      file: packages/sdk/src/events/hydrate/document.ts
    - scanner: typescript
      file: packages/sdk/src/events/types.ts
  technology: TypeScript
description: Shared package sdk
---

Attach call, channel, meeting, and actor handles to call notifications.
