---
type: C4 Component
title: Chat access
status: stable
groma:
  id: chat-access
  parent: macro
  code:
    - scanner: rust
      file: crates/entity_access/src/outbound/pg_access_repo/queries/chat_access.rs
      symbol: get_chat_access
  group: Entity access
---
