---
type: C4 Component
title: AgentSessionStatusPill
status: stable
groma:
  id: agentsessionstatuspill
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/AgentSessionStatusPill.tsx
  technology: SolidJS
description: AgentSessionStatusPill inside the signed-in client.
---

The session's status as a quiet dot + label pill. Pure: the status shape mirrors the wire's `SessionStatusDto`.
