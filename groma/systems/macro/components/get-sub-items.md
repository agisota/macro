---
type: C4 Component
title: Get sub items
status: stable
groma:
  id: get-sub-items
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/projects/get_project/get_sub_items.rs
      symbol: bulk_get_all_sub_project_ids
  group: Macro db client
---
