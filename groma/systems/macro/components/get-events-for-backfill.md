---
type: C4 Component
title: Get events for backfill
status: stable
groma:
  id: get-events-for-backfill
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/calendar_event/get_events_for_backfill.rs
      symbol: get_calendar_events_for_search_backfill
  group: Macro db client
---
