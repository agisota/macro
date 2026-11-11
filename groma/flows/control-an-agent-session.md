---
type: Groma Flow
title: Команда исполняемому агенту
groma:
  id: control-an-agent-session
---

Пользователь отправляет prompt или другое действие. AgentSession фиксирует его локально и передаёт в Agent Harness API. Sans-IO SessionMachine выдаёт effects, а SessionActor отправляет сообщения runtime через AgentConnector из agent_session.

## Steps

| From | To | Action |
| --- | --- | --- |
| [Участник](../actors/workspace-member.md) | [AgentComposer](../systems/macro/containers/macro-web/components/agentcomposer.md) | Отправить команду |
| [AgentComposer](../systems/macro/containers/macro-web/components/agentcomposer.md) | [AgentSession](../systems/macro/containers/macro-web/components/agentsession.md) | Вызвать issue(action) |
| [AgentSession](../systems/macro/containers/macro-web/components/agentsession.md) | [Harness client](../systems/macro/containers/macro-web/components/service-agent-harness-client.md) | Передать control action |
| [Harness client](../systems/macro/containers/macro-web/components/service-agent-harness-client.md) | [Harness API](../systems/macro/containers/agent-harness-service/components/agent-harness-service-src-api.md) | Вызвать `/agent-sessions/{id}/control` |
| [Harness API](../systems/macro/containers/agent-harness-service/components/agent-harness-service-src-api.md) | [ACP session](../systems/macro/containers/agent-harness-service/components/session.md) | Применить действие к сессии |
