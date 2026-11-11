---
type: C4 Component
title: Get shas
status: stable
groma:
  id: get-shas
  parent: macro
  code:
    - scanner: rust
      file: services/sha_cleanup_worker/src/service/redis/get_shas.rs
      symbol: get_set_members
  group: Sha cleanup worker
---
