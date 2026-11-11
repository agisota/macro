---
type: C4 Component
title: Split header fixture
status: stable
groma:
  id: split-header-fixture
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/tests/functional/whatsapp-linked/split-header-fixture.tsx
      symbol: ChatHeaderFixture
    - scanner: typescript
      file: apps/web/tests/functional/whatsapp-linked/fixture.tsx
  technology: SolidJS
description: Split header fixture inside the signed-in client.
---

Slot host for isolated conversation interactions; production owns the split frame.
