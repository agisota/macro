---
type: C4 Component
title: Порты orchestration и контейнеров
status: stable
groma:
  id: ports
  parent: agent-harness-service
  code:
    - scanner: rust
      file: crates/agent_harness/src/domain/ports.rs
description: Контракты ContainerManager и runtime-подключений
---

Объявляет `ContainerManager`, `RuntimeConnections` и другие порты Harness. `AgentConnector` здесь только импортируется из `agent_session`; направление зависимости: `agent_harness → agent_session`.
