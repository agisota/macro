---
type: C4 Component
title: Login code
status: stable
groma:
  id: login-code
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/middleware/rate_limit/login_code.rs
      symbol: handler
---
