---
type: C4 Component
title: Ввод команд исполняемому агенту
status: stable
groma:
  id: agentcomposer
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-agent/component/AgentComposer.tsx
      symbol: AgentComposer
description: Создаёт prompt и control-действия для сессии
---

Передаёт действие в AgentSession через provider; не является обычным AI-чатом или каналом человеческих сообщений.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/block-agent/component/AgentComposer.tsx](../../../../../../apps/web/src/features/block-agent/component/AgentComposer.tsx) | [apps/web/src/lib/core/agent-session/AgentSession.ts](../../../../../../apps/web/src/lib/core/agent-session/AgentSession.ts) | Вызывает issue(action) | Function call |
