---
type: C4 Component
title: Сборка Agent Harness service
status: stable
groma:
  id: agent-harness-service-src-lib
  parent: agent-harness-service
  code:
    - scanner: rust
      file: services/agent_harness_service/src/lib.rs
description: Связывает HTTP, composition root и фоновые задачи
---

Библиотечный target используется binary и OpenAPI generator, чтобы не дублировать состав сервиса.
