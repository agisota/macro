---
type: C4 Component
title: Insert
status: stable
groma:
  id: job-insert
  parent: macro
  code:
    - scanner: rust
      file: crates/email_db_client/src/backfill/job/insert.rs
      symbol: create_backfill_job
  group: Email db client
---
