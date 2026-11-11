---
type: C4 Component
title: Create checkout session v2
status: stable
groma:
  id: create-checkout-session-v2
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/user/stripe/create_checkout_session_v2.rs
      symbol: create_checkout_session
---
