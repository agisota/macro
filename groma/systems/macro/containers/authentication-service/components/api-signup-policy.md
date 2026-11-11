---
type: C4 Component
title: Signup policy
status: stable
groma:
  id: api-signup-policy
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/signup_policy.rs
      symbol: signup_forbidden_response
---
