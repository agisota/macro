---
type: C4 Component
title: Google access token
status: stable
groma:
  id: src-google-access-token
  parent: macro
  code:
    - scanner: rust
      file: crates/authentication_service_client/src/google_access_token.rs
      symbol: get_google_access_token
  group: Authentication service client
---
