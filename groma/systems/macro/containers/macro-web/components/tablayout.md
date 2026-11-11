---
type: C4 Component
title: TabLayout
status: stable
groma:
  id: tablayout
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/signals/tabLayout.ts
  technology: SolidJS
  group: Workspace state
description: The desktop tab manager, set while tabs are enabled (macOS desktop app)
---

The desktop tab manager, set while tabs are enabled (macOS desktop app). Published globally like `globalSplitManager`, because the title bar, global hotkeys, and the router middleware live outside the owning provider.
