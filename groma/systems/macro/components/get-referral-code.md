---
type: C4 Component
title: Get referral code
status: stable
groma:
  id: get-referral-code
  parent: macro
  code:
    - scanner: rust
      file: crates/referral/src/inbound/axum_router/get_referral_code.rs
      symbol: get_referral_code_handler
  group: Referral
---
