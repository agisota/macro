---
type: C4 Component
title: Favorites favorites
status: stable
groma:
  id: favorites-favorites
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/favorites/favorites.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/favorites/keys.ts
      symbol: favoriteKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/favorites/graphql.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/favorites/mutation.ts
      symbol: FavoriteMutationCallbacks
  technology: SolidJS
  group: Data queries
description: Favorites in Data queries.
---

File apps/web/src/lib/queries/favorites/favorites.ts. It belongs to Data queries, not a separate application.
