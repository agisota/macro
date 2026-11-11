---
type: C4 Component
title: Get sha count
status: stable
groma:
  id: get-sha-count
  parent: macro
  code:
    - scanner: rust
      file: services/sha_cleanup_worker/src/service/db/get_sha_count.rs
      symbol: get_sha_count
  group: Sha cleanup worker
---
