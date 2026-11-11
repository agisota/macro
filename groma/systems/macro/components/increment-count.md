---
type: C4 Component
title: Increment count
status: stable
groma:
  id: increment-count
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_sha_count_client/src/increment_count.rs
      symbol: increment_counts
  group: Macro sha count client
---
