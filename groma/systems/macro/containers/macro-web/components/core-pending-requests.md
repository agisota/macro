---
type: C4 Component
title: Runtime sharing
status: stable
groma:
  id: core-pending-requests
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/core/pending-requests.ts
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/queries/pending-requests.ts
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/views/SessionAgentRuntime.tsx
      symbol: SessionAgentRuntime
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/views/AgentRuntime.tsx
      symbol: AgentRuntime
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/core/agent-stop.ts
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/core/residents.ts
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/core/request-access.ts
      symbol: requestRuntimeAccess
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/components/RuntimeAccessAction.tsx
      symbol: RuntimeAccessAction
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/views/AgentDmRuntimeStatus.tsx
      symbol: AgentDmRuntimeStatus
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/views/AgentStoppedStatus.tsx
      symbol: AgentStoppedStatus
    - scanner: typescript
      file: apps/web/src/features/runtime-sharing/views/RuntimeShareDialog.tsx
      symbol: RuntimeShareDialog
  technology: SolidJS
  group: Agents
description: Harness runtime access and share dialog.
---

`AgentRuntime` looks up the agent's harness in the harness directory and renders nothing when no runtime is registered. It uses `RuntimeAccessAction`. `RuntimeShareDialog.tsx` imports the sharing source from `access-requests` and harness resident queries. The dialog body was not read past the imports.
