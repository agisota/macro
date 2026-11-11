---
type: C4 Component
title: Revert delete chat
status: stable
groma:
  id: revert-delete-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/revert_delete_chat.rs
      symbol: revert_delete_chat
  group: Chat
---
