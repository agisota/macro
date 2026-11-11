---
type: C4 Component
title: Store resolved message
status: stable
groma:
  id: store-resolved-message
  parent: macro
  code:
    - scanner: rust
      file: crates/chat/src/outbound/postgres/queries/store_resolved_message.rs
      symbol: store_resolved_message
  group: Chat
---
