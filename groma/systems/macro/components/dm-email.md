---
type: C4 Component
title: Dm email
status: stable
groma:
  id: dm-email
  parent: macro
  code:
    - scanner: rust
      file: crates/channels/src/domain/side_effects/dm_email.rs
      symbol: send_unregistered_dm_email
  group: Channels
---
