---
type: C4 Component
title: FloatRegion
status: stable
groma:
  id: floatregion
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/mobile/float-regions/FloatRegion.tsx
    - scanner: typescript
      file: apps/web/src/components/app/mobile/MobileDockIsland.tsx
      symbol: MobileDockIsland
    - scanner: typescript
      file: apps/web/src/components/app/mobile/pillTabsLayout.ts
      symbol: computeVisiblePillValues
    - scanner: typescript
      file: apps/web/src/components/app/mobile/MobileDockButton.tsx
    - scanner: typescript
      file: apps/web/src/components/app/mobile/ConfirmDrawer.tsx
      symbol: ConfirmDrawer
    - scanner: typescript
      file: apps/web/src/components/app/mobile/PickerSheet.tsx
      symbol: PickerSheet
    - scanner: typescript
      file: apps/web/src/components/app/mobile/MobileViewsRow.tsx
      symbol: MobileViewsRow
    - scanner: typescript
      file: apps/web/src/components/app/mobile/SwipableRow.tsx
    - scanner: typescript
      file: apps/web/src/components/app/mobile/float-regions/float-region-state.ts
    - scanner: typescript
      file: apps/web/src/components/app/mobile/MobileEdgeFade.tsx
    - scanner: typescript
      file: apps/web/src/components/app/mobile/PillTabs.tsx
    - scanner: typescript
      file: apps/web/src/components/app/mobile/float-regions/FloatRegionHost.tsx
      symbol: FloatRegionHost
    - scanner: typescript
      file: apps/web/src/components/app/mobile/PullToRefresh.tsx
      symbol: PullToRefresh
    - scanner: typescript
      file: apps/web/src/components/app/mobile/MobileDrawer.tsx
    - scanner: typescript
      file: apps/web/src/components/app/mobile/MobileCreateButton.tsx
      symbol: MobileCreateButton
  technology: SolidJS
description: FloatRegion inside the signed-in client.
---

Higher wins; ties go to the most recently mounted contributor. Default 0. Pass an accessor to change priority reactively without remounting.
