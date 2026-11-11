---
type: C4 Component
title: Invite reminder worker
status: stable
groma:
  id: invite-reminder-worker
  parent: macro
  code:
    - scanner: rust
      file: crates/teams/src/inbound/invite_reminder_worker.rs
      symbol: run_invite_reminder_sweep
  group: Teams
---
