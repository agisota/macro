---
type: C4 Component
title: Web module
status: stable
groma:
  id: agentofflinebadge
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/AgentOfflineBadge.tsx
      symbol: AgentOfflineBadge
  technology: SolidJS
description: Part of the signed-in client
---

Marks an agent whose paired runtime is not connected. One component so the composer picker, the mobile picker, and the `@` menu all say the same word for the same state.
