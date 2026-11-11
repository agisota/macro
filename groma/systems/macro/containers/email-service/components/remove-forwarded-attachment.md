---
type: C4 Component
title: Remove forwarded attachment
status: stable
groma:
  id: remove-forwarded-attachment
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/drafts/remove_forwarded_attachment.rs
      symbol: handler
---
