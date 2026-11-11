---
type: C4 Component
title: Get github pull request tasks
status: stable
groma:
  id: get-github-pull-request-tasks
  parent: macro
  code:
    - scanner: rust
      file: crates/documents/src/inbound/axum_router/get_github_pull_request_tasks.rs
      symbol: get_github_pull_request_tasks_handler
  group: Documents
---
