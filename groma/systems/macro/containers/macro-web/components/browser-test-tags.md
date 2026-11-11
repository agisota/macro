---
type: C4 Component
title: Browser test tags
status: stable
groma:
  id: browser-test-tags
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/property/tags/browser-test/tags.tsx
  technology: SolidJS
  group: Development tooling
description: Property icon, text, chips, and empty glyphs.
---

The readme says it mirrors `entity`: small extractors compose under `Property.Root`. A pick shows from save until the source emits a newer property. Debug page is `/props-debug` and is `LOCAL_ONLY`. Task and project lists request muted empty glyphs. `email-thread` imports `InlineFetchedEntityTagsPill` from `@property/tags` (`email-thread/email-thread.tsx:6`).
