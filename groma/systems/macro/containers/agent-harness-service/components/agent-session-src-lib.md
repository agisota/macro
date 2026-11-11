---
type: C4 Component
title: Модель сессии агента
status: stable
groma:
  id: agent-session-src-lib
  parent: agent-harness-service
  code:
    - scanner: rust
      file: crates/agent_session/src/lib.rs
description: Определяет состояние, действия и журнал сессии
---

Содержит общую предметную модель prompt, stop, recovery и ordered log, не зависящую от HTTP-адаптера.
