---
type: C4 Component
title: Home
status: stable
groma:
  id: home-unread
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/home/queries/home-unread.ts
      symbol: hasHomeUnreadWitness
    - scanner: typescript
      file: apps/web/src/features/home/queries/use-home-unread-query.ts
      symbol: useHomeUnreadQuery
    - scanner: typescript
      file: apps/web/src/features/home/components/HomeEntityDetailRouteView.tsx
      symbol: HomeEntityDetailRouteView
  technology: SolidJS
description: Landing list, chat start, and inline previews.
---

This is the pane a signed-in member is sent to (`DEFAULT_ROUTE` is `/home`). `HomeView` composes `HomeList`, `HomeChatStart`, `HomeTabs`, and a preview panel. The calendar grid is lazy and loads only when Home's calendar route opens (`home-view.tsx:35-38`). `HomeRouteView` is imported directly, not via `lazy-route-views.ts` (`app-router-view.tsx:16`). Home is also the default pane when the last split would otherwise close (`app-router-view.tsx:249-251`).
