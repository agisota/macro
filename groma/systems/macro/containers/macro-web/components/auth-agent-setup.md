---
type: C4 Component
title: Auth agent setup
status: stable
groma:
  id: auth-agent-setup
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/agent-setup.ts
      symbol: useAgentSetupMutation
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/tutorial.ts
      symbol: useCompleteTutorialMutation
  technology: SolidJS
  group: Data queries
description: Mints an agent's SDK token, replacing any earlier one
---

Mints an agent's SDK token, replacing any earlier one. Never retried automatically: overlapping attempts could revoke each other's token.
