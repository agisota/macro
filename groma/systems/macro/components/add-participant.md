---
type: C4 Component
title: Add participant
status: stable
groma:
  id: add-participant
  parent: macro
  code:
    - scanner: rust
      file: crates/comms_db_client/src/participants/add_participant.rs
      symbol: add_participant
  group: Comms db client
---
