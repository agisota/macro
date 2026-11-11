---
type: C4 Component
title: Working branch
status: stable
groma:
  id: postgres-working-branch
  parent: macro
  code:
    - scanner: rust
      file: crates/agent_session/src/outbound/postgres/working_branch.rs
      symbol: record_working_branch
  group: Agent session
---
