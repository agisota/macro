---
type: C4 Component
title: Posthog
status: stable
groma:
  id: outbound-posthog
  parent: macro
  code:
    - scanner: rust
      file: crates/feature_flags/src/outbound/posthog.rs
  group: Feature flags
---
