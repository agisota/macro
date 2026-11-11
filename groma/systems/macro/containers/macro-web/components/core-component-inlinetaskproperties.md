---
type: C4 Component
title: InlineTaskProperties
status: stable
groma:
  id: core-component-inlinetaskproperties
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/InlineTaskProperties.tsx
      symbol: InlineTaskProperties
  technology: SolidJS
  group: Workspace core
description: Inline task badges use their preview's edges; only REST previews fetch separately
---

Inline task badges use their preview's edges; only REST previews fetch separately. Status is omitted: the mention's leading `TaskStatusIcon` already shows it.
