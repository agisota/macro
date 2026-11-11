---
type: C4 Component
title: Create channel
status: stable
groma:
  id: create-channel
  parent: macro
  code:
    - scanner: rust
      file: crates/comms_db_client/src/channels/create_channel.rs
      symbol: create_channel
  group: Comms db client
---
