---
type: C4 Component
title: Exists
status: stable
groma:
  id: user-exists
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/user/exists.rs
      symbol: get_users_that_do_not_exist
  group: Macro db client
---
