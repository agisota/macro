---
type: C4 Component
title: Add user role
status: stable
groma:
  id: add-user-role
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/user/patch/add_user_role.rs
      symbol: add_user_role
  group: Macro db client
---
