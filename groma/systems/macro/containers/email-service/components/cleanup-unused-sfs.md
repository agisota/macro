---
type: C4 Component
title: Cleanup unused sfs
status: stable
groma:
  id: cleanup-unused-sfs
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/cleanup_unused_sfs/cleanup_unused_sfs.rs
---
