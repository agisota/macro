---
type: C4 Component
title: Revert delete
status: stable
groma:
  id: chat-revert-delete
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/chat/revert_delete.rs
      symbol: revert_delete_chat
  group: Macro db client
---
