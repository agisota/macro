---
type: C4 Component
title: Config
status: stable
groma:
  id: backfill-sfs-attachments-config
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/backfill_sfs_attachments/config.rs
      symbol: from_env
---
