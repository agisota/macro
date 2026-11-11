---
type: C4 Component
title: Agent conversation
status: stable
groma:
  id: postgres-agent-conversation
  parent: macro
  code:
    - scanner: rust
      file: crates/agent_session/src/outbound/postgres/agent_conversation.rs
  group: Agent session
---
