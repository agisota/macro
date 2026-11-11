---
type: C4 Component
title: Imperative shell SessionActor
status: stable
groma:
  id: session-actor
  parent: agent-harness-service
  code:
    - scanner: rust
      file: crates/agent_session/src/domain/session/actors.rs
  technology: Rust, Tokio, ACP
description: Исполняет effects и доставляет ACP-сообщения
---

Владеет `SessionMachine`, transport halves и durable log. На `Effect::Send` записывает исходящий кадр и вызывает `outbound.send` через `AgentConnector`; ошибка доставки закрывает соединение.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [crates/agent_session/src/domain/session/actors.rs](../../../../../../crates/agent_session/src/domain/session/actors.rs) | [crates/agent_session/src/domain/ports.rs](../../../../../../crates/agent_session/src/domain/ports.rs) | Отправляет сообщения runtime | ACP |
