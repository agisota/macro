---
type: C4 Component
title: Create merge request
status: stable
groma:
  id: create-merge-request
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/merge/create_merge_request.rs
      symbol: handler
---
