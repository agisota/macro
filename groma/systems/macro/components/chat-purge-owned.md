---
type: C4 Component
title: Purge owned
status: stable
groma:
  id: chat-purge-owned
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/domain/service/chat/purge_owned.rs
      symbol: purge_owned
  group: Chat
---
