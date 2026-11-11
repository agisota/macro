---
type: C4 Component
title: Revert delete project
status: stable
groma:
  id: revert-delete-project
  parent: macro
  code:
    - scanner: rust
      file: crates/projects/src/inbound/axum_router/revert_delete_project.rs
      symbol: revert_delete_project_handler
  group: Projects
---
