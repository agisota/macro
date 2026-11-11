---
type: C4 Component
title: Enqueue organization retention
status: stable
groma:
  id: enqueue-organization-retention
  parent: macro
  code:
    - scanner: rust
      file: crates/sqs_client/src/organization_retention/enqueue_organization_retention.rs
  group: Sqs client
---
