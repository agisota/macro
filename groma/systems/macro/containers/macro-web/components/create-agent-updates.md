---
type: C4 Component
title: Agent updates
status: stable
groma:
  id: create-agent-updates
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/agent-updates/primitives/create-agent-updates.ts
      symbol: createAgentUpdates
    - scanner: typescript
      file: apps/web/src/features/agent-updates/core/agent-update.ts
    - scanner: typescript
      file: apps/web/src/features/agent-updates/views/AgentUpdatesStack.tsx
      symbol: AgentUpdatesStack
    - scanner: typescript
      file: apps/web/src/features/agent-updates/components/AgentUpdateCard.tsx
  technology: SolidJS
  group: Agents
description: Agent update cards for blocked or stalled sessions.
---

An update has a session id, name, summary, and either a stalled kind or an interaction request. `create-agent-updates.ts` imports the interaction controller from `agent-interactions` and session actions from `block-agent` (`create-agent-updates.ts:1-3`). The stack view was not opened.
