---
type: C4 Component
title: Recovery
status: stable
groma:
  id: postgres-recovery
  parent: macro
  code:
    - scanner: rust
      file: crates/agent_session/src/outbound/postgres/recovery.rs
  group: Agent session
---
