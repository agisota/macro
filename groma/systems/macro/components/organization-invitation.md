---
type: C4 Component
title: Organization invitation
status: stable
groma:
  id: organization-invitation
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/organization/remove/organization_invitation.rs
      symbol: revoke_organization_invitation_for_user
  group: Macro db client
---
