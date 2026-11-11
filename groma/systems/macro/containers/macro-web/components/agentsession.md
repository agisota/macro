---
type: C4 Component
title: Состояние сессии агента
status: stable
groma:
  id: agentsession
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/agent-session/AgentSession.ts
description: Согласует сохранённый журнал и realtime-события
---

Загружает session/log, применяет fold, буферизует live inputs и выполняет recovery при reconnect.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/core/agent-session/AgentSession.ts](../../../../../../apps/web/src/lib/core/agent-session/AgentSession.ts) | [apps/web/src/lib/service-clients/service-agent-harness/client.ts](../../../../../../apps/web/src/lib/service-clients/service-agent-harness/client.ts) | Отправляет control action | Function call |
