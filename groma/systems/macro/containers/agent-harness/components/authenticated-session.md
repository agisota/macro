---
type: C4 Component
title: Authenticated session
status: stable
groma:
  id: authenticated-session
  parent: agent-harness
  code:
    - scanner: rust
      file: services/agent_harness_service/src/internal_mcp/authenticated_session.rs
      symbol: from_request_parts
---
