---
type: C4 Component
title: Passwordless
status: stable
groma:
  id: login-passwordless
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/login/passwordless.rs
      symbol: handler
---
