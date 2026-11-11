---
type: C4 Component
title: Backfill contacts
status: stable
groma:
  id: backfill-contacts
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/backfill_contacts/backfill_contacts.rs
      symbol: main
---
