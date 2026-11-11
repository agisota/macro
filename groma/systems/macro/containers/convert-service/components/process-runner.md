---
type: C4 Component
title: Runner
status: stable
groma:
  id: process-runner
  parent: convert-service
  code:
    - scanner: rust
      file: services/convert_service/src/process/runner.rs
      symbol: run_worker
---
