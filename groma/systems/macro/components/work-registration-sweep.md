---
type: C4 Component
title: Work registration sweep
status: stable
groma:
  id: work-registration-sweep
  parent: macro
  code:
    - scanner: rust
      file: crates/agent_session/src/inbound/work_registration_sweep.rs
      symbol: run_work_registration_sweep
  group: Agent session
---
