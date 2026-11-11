---
type: C4 Component
title: Модуль Cursor Cloud Agents
status: stable
groma:
  id: cursor-cloud-agents-src-lib
  parent: agent-harness-service
  code:
    - scanner: rust
      file: crates/cursor_cloud_agents/src/lib.rs
description: Экспортирует домен и адаптеры Cursor
---

Предоставляет ACP-совместимую реализацию внешнего agent runtime для использования через общий порт.
