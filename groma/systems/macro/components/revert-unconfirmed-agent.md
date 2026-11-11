---
type: C4 Component
title: Revert unconfirmed agent
status: stable
groma:
  id: revert-unconfirmed-agent
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/user/revert_unconfirmed_agent.rs
      symbol: revert_unconfirmed_agent
  group: Macro db client
---
