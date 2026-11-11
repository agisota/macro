---
type: C4 Component
title: Import companies csv
status: stable
groma:
  id: import-companies-csv
  parent: macro
  code:
    - scanner: rust
      file: crates/crm/src/inbound/toolset/transfer/import_companies_csv.rs
      symbol: call
  group: Crm
---
