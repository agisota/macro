---
type: C4 Component
title: Remove trailing br tags
status: stable
groma:
  id: remove-trailing-br-tags
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/util/process_pre_insert/clean_message/remove_trailing_br_tags.rs
---
