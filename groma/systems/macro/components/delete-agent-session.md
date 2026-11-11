---
type: C4 Component
title: Agent session
status: stable
groma:
  id: delete-agent-session
  parent: macro
  code:
    - scanner: rust
      file: crates/opensearch_client/src/delete/agent_session.rs
      symbol: delete_agent_session
  group: Opensearch client
---
