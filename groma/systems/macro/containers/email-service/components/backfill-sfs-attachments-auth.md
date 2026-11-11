---
type: C4 Component
title: Auth
status: stable
groma:
  id: backfill-sfs-attachments-auth
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/backfill_sfs_attachments/auth.rs
      symbol: get_gmail_access_token
---
