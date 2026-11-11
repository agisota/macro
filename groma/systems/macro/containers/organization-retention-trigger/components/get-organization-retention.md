---
type: C4 Component
title: Get organization retention
status: stable
groma:
  id: get-organization-retention
  parent: organization-retention-trigger
  code:
    - scanner: rust
      file: services/organization_retention_trigger/src/service/db/get_organization_retention.rs
      symbol: get_organization_retention
---
