---
type: C4 Component
title: Session writes
status: stable
groma:
  id: session-writes
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/session-writes.ts
  technology: SolidJS
  group: GraphQL cache
description: REST responses can arrive after logout or native account replacement
---

REST responses can arrive after logout or native account replacement. Track their durable cache mutations so a wipe cannot overtake an admitted write.
