---
type: C4 Component
title: Favorites FavoriteContextMenu
status: stable
groma:
  id: favoritecontextmenu
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/favorites/FavoriteContextMenu.tsx
      symbol: FavoriteContextMenu
    - scanner: typescript
      file: apps/web/src/features/favorites/FavoriteIcon.tsx
      symbol: FavoriteIcon
    - scanner: typescript
      file: apps/web/src/features/favorites/FavoriteUnreadIndicator.tsx
      symbol: FavoriteUnreadIndicator
  technology: SolidJS
  group: Shell
description: Favorite unread indicator.
---

The indicator compiles a soup filter, reads entity notifications, and renders `UnreadIndicator`. It is gated on authentication and can use the GraphQL soup flag. `CommandMenu`'s sibling `FavoritesCommands` is mounted by `AppChrome` (`Layout.tsx:303`); that file was not opened.
