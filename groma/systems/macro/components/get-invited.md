---
type: C4 Component
title: Get invited
status: stable
groma:
  id: get-invited
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/user/get_invited.rs
      symbol: get_invited_users_by_organization
  group: Macro db client
---
