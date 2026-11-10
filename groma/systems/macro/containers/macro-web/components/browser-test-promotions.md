---
type: C4 Component
title: Sidebar promotion
status: stable
groma:
  id: browser-test-promotions
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/browser-test/promotions.tsx
  technology: SolidJS
description: Shared promo card for view sidebars.
---

Dismissal is stored under an id so it holds on every device. While flags or the server load, the card keeps what this browser last decided. `connector-import` imports `SidebarPromotion` (`connector-import/connector-import.tsx:6`). `routine-suggestions` imports `createPromotionVisibility` from this feature (`routine-suggestions/routine-suggestions.tsx:2`).
