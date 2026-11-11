---
type: C4 Component
title: Remove participant
status: stable
groma:
  id: remove-participant
  parent: macro
  code:
    - scanner: rust
      file: crates/comms_db_client/src/participants/remove_participant.rs
      symbol: remove_participant
  group: Comms db client
---
