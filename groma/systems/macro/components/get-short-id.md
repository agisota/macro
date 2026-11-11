---
type: C4 Component
title: Get short id
status: stable
groma:
  id: get-short-id
  parent: macro
  code:
    - scanner: rust
      file: crates/documents/src/inbound/axum_router/get_short_id.rs
      symbol: get_short_id_handler
  group: Documents
---
