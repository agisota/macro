---
type: C4 Component
title: Share keys
status: stable
groma:
  id: share-keys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/share/keys.ts
      symbol: sharePermissionKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/share/share-permissions.ts
  technology: SolidJS
  group: Data queries
description: Long enough that hovering Share and then clicking it fetches once; short enough that a reopened dialog revalidates grants made elsewhere.
---

Long enough that hovering Share and then clicking it fetches once; short enough that a reopened dialog revalidates grants made elsewhere.
