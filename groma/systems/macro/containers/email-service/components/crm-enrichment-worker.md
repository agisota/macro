---
type: C4 Component
title: Crm enrichment worker
status: stable
groma:
  id: crm-enrichment-worker
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/crm_enrichment_worker.rs
      symbol: run
---
