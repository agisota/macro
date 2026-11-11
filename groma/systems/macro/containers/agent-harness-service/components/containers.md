---
type: C4 Component
title: Выбор runtime-контейнеров
status: stable
groma:
  id: containers
  parent: agent-harness-service
  code:
    - scanner: rust
      file: services/agent_harness_service/src/containers.rs
description: Собирает менеджеры сред исполнения агентов
---

Компонует sandbox, in-memory и внешние providers в единый ContainerManager вместо разветвления продуктового кода.
