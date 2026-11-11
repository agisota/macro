---
type: C4 Component
title: Config
status: stable
groma:
  id: backfill-contacts-config
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/backfill_contacts/config.rs
      symbol: from_env
---
