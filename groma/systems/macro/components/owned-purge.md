---
type: C4 Component
title: Owned purge
status: stable
groma:
  id: owned-purge
  parent: macro
  code:
    - scanner: rust
      file: crates/agent_session/src/inbound/axum_router/owned_purge.rs
      symbol: purge_owned_session_handler
  group: Agent session
---
