---
type: C4 Component
title: GlassPress
status: stable
groma:
  id: glasspress
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/mobile/glassPress.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/mobile-dock-views.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/MobileDockRow.tsx
      symbol: MobileDockRow
    - scanner: typescript
      file: apps/web/src/components/app/mobile/CustomizeDock.tsx
      symbol: CustomizeDock
    - scanner: typescript
      file: apps/web/src/components/app/mobile/create-dock-touch-sensor.ts
      symbol: createDockTouchSensor
    - scanner: typescript
      file: apps/web/src/components/app/mobile/MobileCreateMenu.tsx
    - scanner: typescript
      file: apps/web/src/components/app/mobile/mobile-page-create-action.ts
      symbol: mobilePageCreateBlock
    - scanner: typescript
      file: apps/web/src/components/app/mobile/mobile-dock-order.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/MobilePageActionRow.tsx
      symbol: MobilePageActionRow
    - scanner: typescript
      file: apps/web/src/components/app/mobile/SwipeDownDismissKeyboard.tsx
      symbol: SwipeDownDismissKeyboard
    - scanner: typescript
      file: apps/web/src/components/app/mobile/mobile-nav-views.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/use-mobile-nav.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/MobilePageCreateButton.tsx
      symbol: MobilePageCreateButton
  technology: SolidJS
description: GlassPress inside the signed-in client.
---

Round controls grow 28%; wide surfaces expand their paint by up to 6px per edge.
