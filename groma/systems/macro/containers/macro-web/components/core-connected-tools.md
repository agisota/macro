---
type: C4 Component
title: Tours
status: stable
groma:
  id: core-connected-tools
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/tours/core/connected-tools.ts
      symbol: isMcpToolConnected
    - scanner: typescript
      file: apps/web/src/features/tours/components/ViewTourVideo.tsx
      symbol: ViewTourVideo
    - scanner: typescript
      file: apps/web/src/features/tours/ViewTour.tsx
    - scanner: typescript
      file: apps/web/src/features/tours/core/view-tour.ts
  technology: SolidJS
description: View tour overlay and video steps.
---

Tours require the `enableInAppTours` flag, a 768px fine-pointer viewport, and optional connector checks against email links, MCP servers, and Pipedream connections. `email-view`, `home`, `tasks-view`, `drive-view`, and `channels-view` import `ViewTour` (seen in those files' import blocks).
