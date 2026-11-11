---
type: C4 Component
title: Resend fusionauth verify user email
status: stable
groma:
  id: resend-fusionauth-verify-user-email
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/email/resend_fusionauth_verify_user_email.rs
      symbol: handler
---
