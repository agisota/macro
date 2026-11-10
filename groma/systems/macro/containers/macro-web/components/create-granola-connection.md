---
type: C4 Component
title: Granola connect
status: stable
groma:
  id: create-granola-connection
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/granola-connect/primitives/create-granola-connection.ts
      symbol: createGranolaConnection
    - scanner: typescript
      file: apps/web/src/features/granola-connect/core/granola.ts
    - scanner: typescript
      file: apps/web/src/features/granola-connect/components/GranolaPromoChip.tsx
      symbol: GranolaPromoChip
  technology: SolidJS
  group: Calls
description: Granola connection status for call import.
---

Status is `connected` when any Granola connection is enabled, `disabled` when one exists but is off, otherwise `available`. The slug is `granola`. This is a connector status helper, not the meeting room.
