---
type: C4 Component
title: Запуск Agent Harness
status: stable
groma:
  id: agent-harness-service-src-main
  parent: agent-harness-service
  code:
    - scanner: rust
      file: services/agent_harness_service/src/main.rs
description: Создаёт конфигурацию и запускает процесс службы
---

Выполняет инициализацию и жизненный цикл deployable-процесса, а не продуктовую логику сессии.
