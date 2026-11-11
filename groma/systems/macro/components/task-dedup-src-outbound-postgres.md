---
type: C4 Component
title: Postgres
status: stable
groma:
  id: task-dedup-src-outbound-postgres
  parent: macro
  code:
    - scanner: rust
      file: crates/task_dedup/src/outbound/postgres.rs
  group: Task dedup
---
