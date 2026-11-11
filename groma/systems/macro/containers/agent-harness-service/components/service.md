---
type: C4 Component
title: Сессии Cursor Cloud
status: stable
groma:
  id: service
  parent: agent-harness-service
  code:
    - scanner: rust
      file: crates/cursor_cloud_agents/src/domain/service.rs
description: Выполняет prompt и восстановление внешнего агента
---

Преобразует вызовы ACP в операции Cursor API и события провайдера в обновления сессии.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [crates/cursor_cloud_agents/src/domain/service.rs](../../../../../../crates/cursor_cloud_agents/src/domain/service.rs) | [cursor-cloud-agents](../../../../../externals/cursor-cloud-agents.md) | Создаёт и восстанавливает агентов | HTTPS/SSE |
