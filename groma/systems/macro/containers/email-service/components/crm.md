---
type: C4 Component
title: Crm
status: stable
groma:
  id: crm
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/backfill_outbox/crm.rs
      symbol: drain
---
