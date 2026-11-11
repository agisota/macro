---
type: C4 Component
title: HTTP API сессий агентов
status: stable
groma:
  id: agent-harness-service-src-api
  parent: agent-harness-service
  code:
    - scanner: rust
      file: services/agent_harness_service/src/api.rs
description: Принимает запросы на сессии и control-действия
---

Монтирует REST/MCP-маршруты Agent Harness и передаёт авторизованные команды доменной службе.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [services/agent_harness_service/src/api.rs](../../../../../../services/agent_harness_service/src/api.rs) | [crates/agent_session/src/domain/session/session.rs](../../../../../../crates/agent_session/src/domain/session/session.rs) | Делегирует действие сессии | Rust |
