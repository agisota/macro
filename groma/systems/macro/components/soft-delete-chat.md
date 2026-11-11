---
type: C4 Component
title: Soft delete chat
status: stable
groma:
  id: soft-delete-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/soft_delete_chat.rs
      symbol: soft_delete_chat
  group: Chat
---
