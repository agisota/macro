---
type: C4 Component
title: Sweep worker
status: stable
groma:
  id: sweep-worker
  parent: macro
  code:
    - scanner: rust
      file: crates/ai_billing/src/inbound/sweep_worker.rs
      symbol: run_settlement_sweep
  group: Ai billing
---
