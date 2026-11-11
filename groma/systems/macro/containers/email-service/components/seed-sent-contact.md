---
type: C4 Component
title: Seed sent contact
status: stable
groma:
  id: seed-sent-contact
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/backfill/seed_sent_contact.rs
      symbol: seed_sent_contact
---
