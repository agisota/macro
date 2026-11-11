---
type: C4 Component
title: InboxIcon
status: stable
groma:
  id: inboxicon
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/inboxIcon.ts
      symbol: inboxIconProps
  technology: SolidJS
  group: Workspace core
description: 'Resolve an inbox''s identity from its own address, not the link''s macro_id: an own secondary inbox shares the parent account''s macro_id, so k'
---

Resolve an inbox's identity from its own address, not the link's macro_id: an own secondary inbox shares the parent account's macro_id, so keying on the address gives each inbox its own name and icon.
