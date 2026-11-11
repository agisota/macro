---
type: C4 Component
title: Remove user role
status: stable
groma:
  id: remove-user-role
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/user/remove/remove_user_role.rs
      symbol: remove_user_role
  group: Macro db client
---
