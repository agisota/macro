---
type: C4 Component
title: Copy messages
status: stable
groma:
  id: queries-copy-messages
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/copy_messages.rs
      symbol: copy_messages
  group: Chat
---
