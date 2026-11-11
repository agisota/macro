---
type: C4 Component
title: Backfill sfs attachments
status: stable
groma:
  id: backfill-sfs-attachments
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/backfill_sfs_attachments/backfill_sfs_attachments.rs
      symbol: main
---
