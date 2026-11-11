---
type: C4 Component
title: Import
status: stable
groma:
  id: service-import
  parent: macro
  code:
    - scanner: rust
      file: crates/channels/src/domain/service/import.rs
      symbol: create_reserved_team_channel
  group: Channels
---
