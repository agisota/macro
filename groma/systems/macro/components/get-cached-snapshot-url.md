---
type: C4 Component
title: Get cached snapshot url
status: stable
groma:
  id: get-cached-snapshot-url
  parent: macro
  code:
    - scanner: rust
      file: crates/documents/src/inbound/axum_router/get_cached_snapshot_url.rs
      symbol: get_cached_snapshot_url_handler
  group: Documents
---
