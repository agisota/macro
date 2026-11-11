---
type: C4 Component
title: Клиент Cognition API
status: stable
groma:
  id: service-cognition-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-cognition/client.ts
description: Выполняет операции AI-чатов и генерации
---

Отправляет запросы на создание и продолжение AI-диалога и получает идентификаторы для последующего realtime.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/service-cognition/client.ts](../../../../../../apps/web/src/lib/service-clients/service-cognition/client.ts) | [services/agent_harness_service/src/api.rs](../../../../../../services/agent_harness_service/src/api.rs) | Вызывает AI chat API | HTTPS |
