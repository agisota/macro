---
type: C4 Component
title: Домен Agent Harness
status: stable
groma:
  id: agent-harness-src-lib
  parent: agent-harness-service
  code:
    - scanner: rust
      file: crates/agent_harness/src/lib.rs
description: Содержит порты и use cases исполнения агентов
---

Отделяет жизненный цикл сессий от конкретных sandbox, локальных и облачных адаптеров.
