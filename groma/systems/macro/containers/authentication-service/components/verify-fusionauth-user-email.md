---
type: C4 Component
title: Verify fusionauth user email
status: stable
groma:
  id: verify-fusionauth-user-email
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/email/verify_fusionauth_user_email.rs
      symbol: handler
---
