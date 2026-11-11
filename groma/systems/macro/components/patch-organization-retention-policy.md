---
type: C4 Component
title: Organization retention policy
status: stable
groma:
  id: patch-organization-retention-policy
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/organization/patch/organization_retention_policy.rs
      symbol: patch_organization_retention_policy
  group: Macro db client
---
