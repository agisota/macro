---
type: C4 Component
title: Run task
status: stable
groma:
  id: run-task
  parent: macro
  code:
    - scanner: rust
      file: services/worker_trigger/src/service/ecs/run_task.rs
      symbol: run_task
  group: Worker trigger
---
