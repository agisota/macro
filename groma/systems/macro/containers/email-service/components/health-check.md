---
type: C4 Component
title: Health check
status: stable
groma:
  id: health-check
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/links/health_check.rs
---
