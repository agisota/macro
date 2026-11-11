---
type: C4 Component
title: Realtime
status: stable
groma:
  id: sync-realtime
  parent: macro
  code:
    - scanner: rust
      file: crates/github/src/domain/service/sync/realtime.rs
      symbol: publish_pull_request
  group: Github
---
