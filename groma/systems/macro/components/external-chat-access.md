---
type: C4 Component
title: External chat access
status: stable
groma:
  id: external-chat-access
  parent: macro
  code:
    - scanner: rust
      file: crates/entity_access/src/outbound/pg_access_repo/queries/external_chat_access.rs
      symbol: get_external_chat_access
  group: Entity access
---
