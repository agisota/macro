---
type: C4 Component
title: Event run worker
status: stable
groma:
  id: event-run-worker
  parent: macro
  code:
    - scanner: rust
      file: crates/scheduled_action/src/inbound/event_run_worker.rs
  group: Scheduled action
---
