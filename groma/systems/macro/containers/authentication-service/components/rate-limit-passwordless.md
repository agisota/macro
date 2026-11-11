---
type: C4 Component
title: Passwordless
status: stable
groma:
  id: rate-limit-passwordless
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/middleware/rate_limit/passwordless.rs
      symbol: handler
---
