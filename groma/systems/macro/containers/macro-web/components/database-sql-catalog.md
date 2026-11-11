---
type: C4 Component
title: Catalog
status: stable
groma:
  id: database-sql-catalog
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/database-sql/catalog.ts
      symbol: databaseSqlSchema
    - scanner: typescript
      file: apps/web/src/lib/core/database-sql/driver.ts
    - scanner: typescript
      file: apps/web/src/lib/core/database-sql/answer.ts
    - scanner: typescript
      file: apps/web/src/lib/core/database-sql/generated/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/database-sql/trace.ts
    - scanner: typescript
      file: apps/web/src/lib/core/database-sql/wasm-module.ts
    - scanner: typescript
      file: apps/web/src/lib/core/database-sql/profile.ts
  technology: SolidJS
description: Catalog inside the signed-in client.
---

Open databases as the schema the engine's `buildCatalog` reads, as the server maps its own.
