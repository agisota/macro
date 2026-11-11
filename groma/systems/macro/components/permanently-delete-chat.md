---
type: C4 Component
title: Permanently delete chat
status: stable
groma:
  id: permanently-delete-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/permanently_delete_chat.rs
      symbol: permanently_delete_chat
  group: Chat
---
