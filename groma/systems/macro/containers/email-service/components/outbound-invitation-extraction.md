---
type: C4 Component
title: Invitation extraction
status: stable
groma:
  id: outbound-invitation-extraction
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/outbound/invitation_extraction.rs
      symbol: download
---
