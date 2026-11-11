---
type: C4 Component
title: Upload job
status: stable
groma:
  id: upload-job
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/job/upload_job.rs
      symbol: update_upload_job
  group: Macro db client
---
