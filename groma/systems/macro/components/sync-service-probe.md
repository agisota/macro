---
type: C4 Component
title: Sync service probe
status: stable
groma:
  id: sync-service-probe
  parent: macro
  code:
    - scanner: rust
      file: crates/documents/src/outbound/sync_service_probe.rs
      symbol: exists
  group: Documents
---
