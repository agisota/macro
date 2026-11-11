---
type: C4 Component
title: Клиент Agent Harness API
status: stable
groma:
  id: service-agent-harness-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-agent-harness/client.ts
      symbol: agentHarnessServiceClient
description: Создаёт сессии и отправляет control-действия
---

Вызывает endpoints сессий, журнала и очереди агента, включая prompt/stop/model/control.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/service-agent-harness/client.ts](../../../../../../apps/web/src/lib/service-clients/service-agent-harness/client.ts) | [services/agent_harness_service/src/api.rs](../../../../../../services/agent_harness_service/src/api.rs) | Вызывает session control | HTTPS |
