---
type: C4 Component
title: Channel membership
status: stable
groma:
  id: channel-membership
  parent: macro
  code:
    - scanner: rust
      file: crates/entity_access/src/outbound/pg_access_repo/queries/channel_membership.rs
      symbol: check_user_channel_membership
  group: Entity access
---
