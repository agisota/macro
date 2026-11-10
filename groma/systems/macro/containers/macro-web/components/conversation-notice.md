---
type: C4 Component
title: Agent dms
status: stable
groma:
  id: conversation-notice
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/agent-dms/components/conversation-notice.tsx
      symbol: ConversationNotice
    - scanner: typescript
      file: apps/web/src/features/agent-dms/agent-dm-composer.tsx
      symbol: AgentDmComposer
    - scanner: typescript
      file: apps/web/src/features/agent-dms/open-agent-dm.ts
      symbol: useOpenAgentDm
    - scanner: typescript
      file: apps/web/src/features/agent-dms/agent-dm-recipients.ts
      symbol: useAgentDmRecipients
    - scanner: typescript
      file: apps/web/src/features/agent-dms/core/personas.ts
    - scanner: typescript
      file: apps/web/src/features/agent-dms/components/persona-avatar.tsx
      symbol: PersonaAvatar
  technology: SolidJS
  group: Agents
description: Agent DM composer and recipient helpers.
---

`AgentDmComposer` takes a channel id and optional bot id. It loads conversations from `agent-conversations` only when a bot id is present, and keeps an input that is already on screen until the conversation says the agent is not available. The controls component is imported from `agent-conversations` (`agent-dm-composer.tsx:1`).
