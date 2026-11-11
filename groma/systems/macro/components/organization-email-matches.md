---
type: C4 Component
title: Organization email matches
status: stable
groma:
  id: organization-email-matches
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/organization/get/organization_email_matches.rs
      symbol: get_organization_email_matches
  group: Macro db client
---
