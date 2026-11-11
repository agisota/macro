---
type: C4 Component
title: Depopulate crm contact
status: stable
groma:
  id: depopulate-crm-contact
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/backfill/depopulate_crm_contact.rs
      symbol: depopulate_crm_contact
---
