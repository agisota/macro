---
type: C4 Component
title: Mobile welcome email
status: stable
groma:
  id: rate-limit-mobile-welcome-email
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/middleware/rate_limit/mobile_welcome_email.rs
      symbol: handler
---
