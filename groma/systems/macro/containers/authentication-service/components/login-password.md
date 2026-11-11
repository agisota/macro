---
type: C4 Component
title: Password
status: stable
groma:
  id: login-password
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/login/password.rs
      symbol: handler
---
