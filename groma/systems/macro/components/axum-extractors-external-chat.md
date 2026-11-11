---
type: C4 Component
title: External chat
status: stable
groma:
  id: axum-extractors-external-chat
  parent: macro
  code:
    - scanner: rust
      file: crates/entity_access/src/inbound/axum_extractors/external_chat.rs
      symbol: from_request_parts
  group: Entity access
---
