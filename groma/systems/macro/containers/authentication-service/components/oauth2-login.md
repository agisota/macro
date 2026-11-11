---
type: C4 Component
title: Login
status: stable
groma:
  id: oauth2-login
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/oauth2/login.rs
      symbol: handler
---
