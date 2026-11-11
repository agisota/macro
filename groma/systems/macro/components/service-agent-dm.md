---
type: C4 Component
title: Agent dm
status: stable
groma:
  id: service-agent-dm
  parent: macro
  code:
    - scanner: rust
      file: crates/bots/src/domain/service/agent_dm.rs
      symbol: authorize_agent_dm
  group: Bots
---
