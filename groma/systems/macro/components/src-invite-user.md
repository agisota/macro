---
type: C4 Component
title: Invite user
status: stable
groma:
  id: src-invite-user
  parent: macro
  code:
    - scanner: rust
      file: crates/ses_client/src/invite_user.rs
      symbol: build_user_invite_message
  group: Ses client
---
