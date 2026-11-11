---
type: C4 Component
title: Experiment log
status: stable
groma:
  id: experiment-log
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/experiment_log.rs
      symbol: bulk_create_experiment_logs
  group: Macro db client
---
