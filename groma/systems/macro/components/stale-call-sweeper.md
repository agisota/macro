---
type: C4 Component
title: Stale call sweeper
status: stable
groma:
  id: stale-call-sweeper
  parent: macro
  code:
    - scanner: rust
      file: crates/call/src/inbound/stale_call_sweeper.rs
      symbol: run_stale_call_sweeper
  group: Call
---
