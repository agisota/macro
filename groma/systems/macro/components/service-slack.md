---
type: C4 Component
title: Slack
status: stable
groma:
  id: service-slack
  parent: macro
  code:
    - scanner: rust
      file: crates/import/src/domain/service/slack.rs
      symbol: ensure_channel
  group: Import
---
