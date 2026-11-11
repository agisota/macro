---
type: C4 Component
title: Recovery
status: stable
groma:
  id: agent-session-src-domain-recovery
  parent: macro
  code:
    - scanner: rust
      file: crates/agent_session/src/domain/recovery.rs
      symbol: recover_stale_sessions
  group: Agent session
---
