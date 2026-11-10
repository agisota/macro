---
type: C4 Component
title: Web module
status: stable
groma:
  id: signals
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/ui/signals/signals.ts
  technology: SolidJS
description: Part of the signed-in client
---

Globally enables or disables the appearance of tooltips across the app. Persisted to localStorage so the preference survives reloads.
