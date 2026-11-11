---
type: C4 Component
title: Schema json
status: stable
groma:
  id: json
  parent: macro
  code:
    - scanner: typescript
      file: packages/loro-mirror/src/schema/json.ts
      symbol: isJsonValue
    - scanner: typescript
      file: packages/loro-mirror/src/schema/index.ts
      symbol: schema
    - scanner: typescript
      file: packages/loro-mirror/src/schema/types.ts
    - scanner: typescript
      file: packages/loro-mirror/src/schema/validators.ts
  technology: TypeScript
  group: Loro mirror
description: Reject unsupported values before a batch can write any CRDT operations
---

Reject unsupported values before a batch can write any CRDT operations.
