---
type: C4 Component
title: Set company name
status: stable
groma:
  id: set-company-name
  parent: macro
  code:
    - scanner: rust
      file: crates/crm/src/inbound/axum_router/set_company_name.rs
      symbol: handler
  group: Crm
---
