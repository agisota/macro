---
type: C4 Component
title: Sidebar promotion sidebar promotion
status: stable
groma:
  id: sidebar-promotion
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/sidebar-promotion.tsx
      symbol: SidebarPromotion
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/primitives/promotion-visibility.ts
      symbol: createPromotionVisibility
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/components/logo-stack.tsx
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/primitives/promotion.ts
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/core/verdict.ts
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/core/promotions.ts
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/components/promo-card.tsx
    - scanner: typescript
      file: apps/web/src/features/sidebar-promotion/primitives/last-known.ts
      symbol: createLastKnown
  technology: SolidJS
  group: Shell
description: Shared promo card for view sidebars.
---

Dismissal is stored under an id so it holds on every device. While flags or the server load, the card keeps what this browser last decided. `connector-import` imports `SidebarPromotion` (`connector-import/connector-import.tsx:6`). `routine-suggestions` imports `createPromotionVisibility` from this feature (`routine-suggestions/routine-suggestions.tsx:2`).
