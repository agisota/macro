---
type: C4 Container
title: Служба исполнения агентов
status: stable
groma:
  id: agent-harness-service
  parent: macro
  technology: Rust, ECS, ACP, Postgres
description: Сессии coding-агентов, runtimes и MCP
---

Управляет созданием и восстановлением сессий, ACP-транспортами, control-действиями, журналами и доступом к workspace MCP.
