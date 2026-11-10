---
type: C4 Component
title: Agent conversations
status: stable
groma:
  id: agent-conversations-provider
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/agent-conversations/agent-conversations-provider.tsx
      symbol: AgentConversationsProvider
    - scanner: typescript
      file: apps/web/src/features/agent-conversations/components/conversation-activity.tsx
      symbol: ConversationActivity
    - scanner: typescript
      file: apps/web/src/features/agent-conversations/agent-conversation-message.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-conversations/queries/conversations.ts
    - scanner: typescript
      file: apps/web/src/features/agent-conversations/agent-conversation-controls.tsx
      symbol: AgentConversationControls
    - scanner: typescript
      file: apps/web/src/features/agent-conversations/queries/controls.ts
      symbol: useAgentConversationControl
    - scanner: typescript
      file: apps/web/src/features/agent-conversations/context.ts
  technology: SolidJS
  group: Agents
description: Channel-scoped agent conversation provider.
---

The provider stays mounted either way so a channel whose metadata names an agent after first render is not remounted. A failed poll keeps the last answer. `agent-dms` consumes `useAgentConversations` and the controls component from this feature.
