---
type: C4 Component
title: Config
status: stable
groma:
  id: backfill-gmail-attachments-config
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/backfill_gmail_attachments/config.rs
      symbol: from_env
---
