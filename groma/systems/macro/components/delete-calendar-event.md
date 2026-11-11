---
type: C4 Component
title: Calendar event
status: stable
groma:
  id: delete-calendar-event
  parent: macro
  code:
    - scanner: rust
      file: crates/opensearch_client/src/delete/calendar_event.rs
      symbol: delete_calendar_event_by_id
  group: Opensearch client
---
