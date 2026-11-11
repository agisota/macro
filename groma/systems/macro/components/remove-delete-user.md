---
type: C4 Component
title: Delete user
status: stable
groma:
  id: remove-delete-user
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/user/remove/delete_user.rs
      symbol: delete_user
  group: Macro db client
---
