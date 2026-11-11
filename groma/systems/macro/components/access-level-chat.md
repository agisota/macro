---
type: C4 Component
title: Chat
status: stable
groma:
  id: access-level-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/share_permission/access_level/chat.rs
      symbol: get_highest_access_level_for_chats
  group: Macro db client
---
