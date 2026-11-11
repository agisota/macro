---
type: C4 Component
title: Auto archive
status: stable
groma:
  id: postgres-auto-archive
  parent: macro
  code:
    - scanner: rust
      file: crates/agent_session/src/outbound/postgres/auto_archive.rs
  group: Agent session
---
