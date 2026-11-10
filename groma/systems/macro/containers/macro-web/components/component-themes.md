---
type: C4 Component
title: Web module
status: stable
groma:
  id: component-themes
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/Themes.tsx
  technology: SolidJS
description: Part of the signed-in client
---

SCUFFED THEMING: accent theme would work significantly better if we had multiple accent lightness values, instead of relying on calculations e.g. this would fail if accent color was too light it would be better if we also defined --accent-l-surface, --accent-l-contrast
