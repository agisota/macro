---
type: C4 Component
title: Get
status: stable
groma:
  id: channel-permission-get
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/share_permission/channel_permission/get.rs
      symbol: get_channel_share_permissions_by_channel_id
  group: Macro db client
---
