---
type: C4 Component
title: Channel users
status: stable
groma:
  id: channel-users
  parent: macro
  code:
    - scanner: rust
      file: crates/entity_access/src/outbound/pg_access_repo/queries/channel_users.rs
      symbol: get_channel_users
  group: Entity access
---
