---
type: C4 Component
title: Add forwarded attachment
status: stable
groma:
  id: add-forwarded-attachment
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/drafts/add_forwarded_attachment.rs
      symbol: handler
---
