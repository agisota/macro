---
type: C4 Component
title: Invite user
status: stable
groma:
  id: create-invite-user
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/user/create/invite_user.rs
      symbol: invite_user
  group: Macro db client
---
