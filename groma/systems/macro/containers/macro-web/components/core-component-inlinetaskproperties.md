---
type: C4 Component
title: Web module
status: stable
groma:
  id: core-component-inlinetaskproperties
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/InlineTaskProperties.tsx
      symbol: InlineTaskProperties
  technology: SolidJS
description: Part of the signed-in client
---

Inline task badges use their preview's edges; only REST previews fetch separately. Status is omitted: the mention's leading `TaskStatusIcon` already shows it.
