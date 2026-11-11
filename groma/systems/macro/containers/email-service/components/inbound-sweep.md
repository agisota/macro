---
type: C4 Component
title: Sweep
status: stable
groma:
  id: inbound-sweep
  parent: email-service
  code:
    - scanner: rust
      file: services/email_focus_worker/src/inbound/sweep.rs
      symbol: run_sweeps
---
