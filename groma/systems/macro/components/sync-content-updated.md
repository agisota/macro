---
type: C4 Component
title: Sync content updated
status: stable
groma:
  id: sync-content-updated
  parent: macro
  code:
    - scanner: rust
      file: crates/documents/src/inbound/axum_router/sync_content_updated.rs
      symbol: sync_content_updated_handler
  group: Documents
---
