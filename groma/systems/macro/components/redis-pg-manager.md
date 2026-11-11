---
type: C4 Component
title: Manager
status: stable
groma:
  id: redis-pg-manager
  parent: macro
  code:
    - scanner: rust
      file: crates/stream/src/outbound/redis_pg/manager.rs
  group: Stream
---
