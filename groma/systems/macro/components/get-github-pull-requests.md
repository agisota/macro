---
type: C4 Component
title: Get github pull requests
status: stable
groma:
  id: get-github-pull-requests
  parent: macro
  code:
    - scanner: rust
      file: crates/documents/src/inbound/axum_router/get_github_pull_requests.rs
      symbol: get_github_pull_requests_handler
  group: Documents
---
