---
type: C4 Component
title: Web module
status: stable
groma:
  id: view-shell-tour
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/view-shell/tour.ts
      symbol: VIEW_SHELL_TOUR
  technology: SolidJS
description: Part of the signed-in client
---

Parts every view shell registers for tours. They resolve per split, so a step can point at "this view's sidebar" without the view tagging it. `sidebarToggle` is the expand control shown while the sidebar is collapsed, the natural entry for a step whose target lives in the sidebar
