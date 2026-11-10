---
type: C4 Component
title: Web module
status: stable
groma:
  id: browser-test-menus
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/i18n/browser-test/menus.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Menus rendered with the production primitives and content widths, in the language from `?lang=`, so long translations and CJK text can be checked for clipping without a signed-in app.
