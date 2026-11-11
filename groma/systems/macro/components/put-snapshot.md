---
type: C4 Component
title: Put snapshot
status: stable
groma:
  id: put-snapshot
  parent: macro
  code:
    - scanner: rust
      file: crates/documents/src/inbound/axum_router/put_snapshot.rs
      symbol: put_snapshot_handler
  group: Documents
---
