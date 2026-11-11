---
type: C4 Component
title: Жизненный цикл ACP-сессии
status: stable
groma:
  id: session
  parent: agent-harness-service
  code:
    - scanner: rust
      file: crates/agent_session/src/domain/session/session.rs
description: Обрабатывает initialize, new/load/resume и prompt
---

Sans-IO `SessionMachine` управляет последовательностью команд и восстановлением истории, но не выполняет I/O. `SessionActor` исполняет его effects и отправляет сообщения через `AgentConnector` из `agent_session`.
