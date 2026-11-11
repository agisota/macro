---
type: C4 Component
title: Контракт AgentConnector
status: stable
groma:
  id: agent-session-ports
  parent: agent-harness-service
  code:
    - scanner: rust
      file: crates/agent_session/src/domain/ports.rs
  technology: Rust, ACP, Transport
description: Двунаправленный транспорт с runtime агента
---

Объявляет `AgentConnector` как `Transport<ToRuntimeMessage, ToServerMessage>`. Контракт принадлежит `agent_session`; Harness и SessionActor используют его, а не наоборот.
