---
type: C4 Component
title: Github access token
status: stable
groma:
  id: src-github-access-token
  parent: macro
  code:
    - scanner: rust
      file: crates/authentication_service_client/src/github_access_token.rs
      symbol: get_github_access_token
  group: Authentication service client
---
