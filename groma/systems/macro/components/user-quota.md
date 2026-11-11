---
type: C4 Component
title: User quota
status: stable
groma:
  id: user-quota
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/user_quota.rs
      symbol: get_user_quota
  group: Macro db client
---
