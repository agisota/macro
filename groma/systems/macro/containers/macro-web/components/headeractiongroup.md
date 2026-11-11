---
type: C4 Component
title: HeaderActionGroup
status: stable
groma:
  id: headeractiongroup
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/HeaderActionGroup.tsx
      symbol: HeaderActionGroup
  technology: SolidJS
  group: App shell
description: 'A desktop header island: related actions share the secondary raised frame'
---

A desktop header island: related actions share the secondary raised frame. Their segments stay flat. Touch renders actions without a frame, and a nested group reuses its parent's frame. An island with no actions renders nothing, so conditional children need no wrapper.  @do Group actions by meaning: filters, view options, sharing, navigation, detail toggles. @do Use `size="icon-sm"` for icon-only actions; labelled se
