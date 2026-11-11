---
type: C4 Component
title: Plaintext parser
status: stable
groma:
  id: plaintext-parser
  parent: macro
  code:
    - scanner: rust
      file: crates/email_utils/src/body_replyless/plaintext_parser.rs
      symbol: extract_reply_plaintext
  group: Email utils
---
