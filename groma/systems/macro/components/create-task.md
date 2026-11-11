---
type: C4 Component
title: Create task
status: stable
groma:
  id: create-task
  parent: macro
  code:
    - scanner: rust
      file: crates/documents/src/inbound/axum_router/create_task.rs
      symbol: create_task_handler
  group: Documents
---
