---
type: C4 Component
title: Get branch name
status: stable
groma:
  id: get-branch-name
  parent: macro
  code:
    - scanner: rust
      file: crates/documents/src/inbound/axum_router/get_branch_name.rs
      symbol: get_branch_name_handler
  group: Documents
---
