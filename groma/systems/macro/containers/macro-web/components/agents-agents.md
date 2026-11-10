---
type: C4 Component
title: Web module
status: stable
groma:
  id: agents-agents
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/agents/agents.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agents/mode-choice.ts
      symbol: chooseAgentMode
    - scanner: typescript
      file: apps/web/src/lib/queries/agents/coding-preferences.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agents/auto-archive-preferences.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agents/agent-api-key.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agents/offline-runtimes.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agents/capabilities.ts
      symbol: useAgentCapabilitiesQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/agents/models.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agents/avatar.ts
      symbol: useUploadAgentAvatarMutation
    - scanner: typescript
      file: apps/web/src/lib/queries/agents/keys.ts
      symbol: agentKeys
  technology: SolidJS
description: Part of the signed-in client
---

`Agent` plus the macrod harness binding the backend now returns; the field is not yet in the generated schema.
