---
type: C4 Component
title: Verify email link
status: stable
groma:
  id: verify-email-link
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/email/verify_email_link.rs
      symbol: handler
---
