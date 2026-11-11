---
type: C4 Component
title: Backfill gmail attachments
status: stable
groma:
  id: backfill-gmail-attachments
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/backfill_gmail_attachments/backfill_gmail_attachments.rs
      symbol: main
---
