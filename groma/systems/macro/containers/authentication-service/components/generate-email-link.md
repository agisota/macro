---
type: C4 Component
title: Generate email link
status: stable
groma:
  id: generate-email-link
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/email/generate_email_link.rs
      symbol: handler
---
