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
description: Favorites inside the signed-in client.
---

Maps a frontend entity to the backend favorites entity type, or undefined for entity kinds that cannot be favorited.
