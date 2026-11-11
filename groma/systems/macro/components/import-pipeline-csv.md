---
type: C4 Component
title: Import pipeline csv
status: stable
groma:
  id: import-pipeline-csv
  parent: macro
  code:
    - scanner: rust
      file: crates/crm/src/inbound/toolset/transfer/import_pipeline_csv.rs
      symbol: call
  group: Crm
---
