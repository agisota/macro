---
type: C4 Component
title: Export pipeline csv
status: stable
groma:
  id: export-pipeline-csv
  parent: macro
  code:
    - scanner: rust
      file: crates/crm/src/inbound/toolset/transfer/export_pipeline_csv.rs
      symbol: call
  group: Crm
---
