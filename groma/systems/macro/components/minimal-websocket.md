---
type: C4 Component
title: Collaboration runtime
status: stable
groma:
  id: minimal-websocket
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/src/websocket/platform/minimal-websocket.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/solid/socket-effect.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/backoff/exponential-backoff.ts
      symbol: ExponentialBackoff
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/websocket-serializer.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/websocket-heartbeat-options.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/websocket-builder.ts
      symbol: WebsocketBuilder
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/backoff/constant-backoff.ts
      symbol: ConstantBackoff
    - scanner: typescript
      file: packages/collaboration/src/websocket/platform/framing/frames.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/websocket-connection-state.ts
      symbol: WebsocketConnectionState
    - scanner: typescript
      file: packages/collaboration/src/websocket/solid/state-signal.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/websocket-retry-options.ts
      symbol: WebsocketConnectionRetryOptions
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/websocket-buffer.ts
      symbol: WebsocketBuffer
    - scanner: typescript
      file: packages/collaboration/src/websocket/platform/tauri-websocket.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/platform/framing/framed-websocket.ts
      symbol: framedWebSocketFactory
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/serializers/json-serializer.ts
      symbol: JsonSerializer
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/backoff/linear-backoff.ts
      symbol: LinearBackoff
    - scanner: typescript
      file: packages/collaboration/src/websocket/index.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/queue/array-queue.ts
      symbol: ArrayQueue
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/websocket-url-resolver.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/queue/queue.ts
      symbol: Queue
    - scanner: typescript
      file: packages/collaboration/src/websocket/utils/until-message.ts
      symbol: untilMessage
    - scanner: typescript
      file: packages/collaboration/src/websocket/utils/until-event.ts
      symbol: untilEvent
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/websocket-options.ts
      symbol: WebsocketOptions
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/websocket-event.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/serializers/bebop-serializer.ts
      symbol: BebopSerializer
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/backoff/backoff.ts
      symbol: Backoff
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/websocket.ts
      symbol: Websocket
    - scanner: typescript
      file: packages/collaboration/src/websocket/platform/factory.ts
      symbol: platformWebSocketFactory
    - scanner: typescript
      file: packages/collaboration/src/websocket/platform/framing/index.ts
    - scanner: typescript
      file: packages/collaboration/src/websocket/core/queue/ring-queue.ts
      symbol: RingQueue
  technology: TypeScript, Loro
description: Loro sync, awareness, and the sync-service socket
---

Shared by the web app and workers. Callers pass the URL and token. It does not authenticate and does not call Gmail, GitHub, or model APIs.
