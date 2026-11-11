---
type: C4 Component
title: Config
status: stable
groma:
  id: anthropic-src-config
  parent: macro
  code:
    - scanner: rust
      file: crates/anthropic/src/config.rs
      symbol: dangrously_try_from_env
  group: Anthropic
---
