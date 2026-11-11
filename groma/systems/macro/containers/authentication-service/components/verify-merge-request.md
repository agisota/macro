---
type: C4 Component
title: Verify merge request
status: stable
groma:
  id: verify-merge-request
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/merge/verify_merge_request.rs
      symbol: handler
---
