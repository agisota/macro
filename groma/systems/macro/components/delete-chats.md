---
type: C4 Component
title: Delete chats
status: stable
groma:
  id: delete-chats
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/user/delete_user_dss_items/delete_chats.rs
      symbol: delete_user_chats
  group: Macro db client
---
