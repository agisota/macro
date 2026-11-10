---
type: C4 Component
title: Web module
status: stable
groma:
  id: collapsiblesection
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/view-shell/CollapsibleSection.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Content owns presence so exit motion finishes before it unmounts.
