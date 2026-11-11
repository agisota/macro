---
type: C4 Component
title: List visibility
status: stable
groma:
  id: postgres-list-visibility
  parent: macro
  code:
    - scanner: rust
      file: crates/agent_session/src/outbound/postgres/list_visibility.rs
      symbol: hide_dm_sessions
  group: Agent session
---
