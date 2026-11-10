---
type: C4 Component
title: Coding-agent worker
status: stable
groma:
  id: src-session
  parent: macro-start
  code:
    - scanner: typescript
      file: services/coding-agent-worker/src/session.ts
      symbol: startSession
    - scanner: typescript
      file: services/coding-agent-worker/src/upstream.ts
      symbol: UpstreamLink
    - scanner: typescript
      file: services/coding-agent-worker/src/provision.ts
    - scanner: typescript
      file: services/coding-agent-worker/src/protocol/generated.ts
    - scanner: typescript
      file: services/coding-agent-worker/src/webhook.ts
      symbol: ensureWebhook
    - scanner: typescript
      file: services/coding-agent-worker/src/socket.ts
    - scanner: typescript
      file: services/coding-agent-worker/src/providers/daytona.ts
      symbol: DaytonaProvider
    - scanner: typescript
      file: services/coding-agent-worker/src/env.ts
      symbol: env
    - scanner: typescript
      file: services/coding-agent-worker/src/macro.ts
      symbol: macro
    - scanner: typescript
      file: services/coding-agent-worker/index.ts
    - scanner: typescript
      file: services/coding-agent-worker/src/interfaces.ts
  technology: Bun, Hono
description: Starts a sandboxed coding agent from a channel message
---

On message.posted, creates a Macro agent and a Daytona sandbox, then relays ACP frames to agent_proxy.
