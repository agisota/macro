---
type: C4 Component
title: System status
status: stable
groma:
  id: statusbanner
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/system-status/components/StatusBanner.tsx
      symbol: StatusBanner
    - scanner: typescript
      file: apps/web/src/features/system-status/core/status.ts
    - scanner: typescript
      file: apps/web/src/features/system-status/views/SystemStatusDashboard.tsx
      symbol: SystemStatusDashboard
    - scanner: typescript
      file: apps/web/src/features/system-status/primitives/use-banner-status.ts
      symbol: useBannerStatus
  technology: SolidJS
description: Status banner and staff status dashboard.
---

Levels are operational, degraded, and major outage. `bannerStatus` returns nothing while operational. `AppChrome` mounts `StatusBanner` from `useBannerStatus` (`Layout.tsx:31-32`, `Layout.tsx:337-339`). Staff edit the banner at `internal/status`, which lazy-loads `SystemStatusDashboard` (`app-router-view.tsx:215-217`, `app-router-view.tsx:314-316`).
