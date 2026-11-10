---
type: C4 Component
title: Web module
status: stable
groma:
  id: render-telemetry
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/agent-session/render-telemetry.ts
      symbol: observeRenderedAnswer
    - scanner: typescript
      file: apps/web/src/lib/core/agent-session/long-frames.ts
    - scanner: typescript
      file: apps/web/src/lib/core/agent-session/recently-viewed.ts
    - scanner: typescript
      file: apps/web/src/lib/core/agent-session/session-turn.ts
    - scanner: typescript
      file: apps/web/src/lib/core/agent-session/use-session-turn.ts
      symbol: useSessionTurn
    - scanner: typescript
      file: apps/web/src/lib/core/agent-session/recently-created.ts
    - scanner: typescript
      file: apps/web/src/lib/core/agent-session/load-telemetry.ts
    - scanner: typescript
      file: apps/web/src/lib/core/agent-session/AgentSession.ts
    - scanner: typescript
      file: apps/web/src/lib/core/agent-session/prompt-telemetry.ts
  technology: SolidJS
description: Part of the signed-in client
---

Observe actual answer DOM; raw fold text may still be Markdown scaffolding.
