---
type: C4 Component
title: Purge owned
status: stable
groma:
  id: service-purge-owned
  parent: macro
  code:
    - scanner: rust
      file: crates/projects/src/domain/service/purge_owned.rs
      symbol: purge_owned
  group: Projects
---
