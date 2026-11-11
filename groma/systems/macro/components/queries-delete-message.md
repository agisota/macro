---
type: C4 Component
title: Delete message
status: stable
groma:
  id: queries-delete-message
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/delete_message.rs
      symbol: delete_message
  group: Chat
---
