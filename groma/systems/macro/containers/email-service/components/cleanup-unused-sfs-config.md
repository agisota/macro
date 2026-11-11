---
type: C4 Component
title: Config
status: stable
groma:
  id: cleanup-unused-sfs-config
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/cleanup_unused_sfs/config.rs
---
