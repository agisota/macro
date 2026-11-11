---
type: C4 Component
title: Session task
status: stable
groma:
  id: postgres-session-task
  parent: macro
  code:
    - scanner: rust
      file: crates/agent_session/src/outbound/postgres/session_task.rs
  group: Agent session
---
