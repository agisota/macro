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
description: TabLayout inside the signed-in client.
---

The desktop tab manager, set while tabs are enabled (macOS desktop app). Published globally like `globalSplitManager`, because the title bar, global hotkeys, and the router middleware live outside the owning provider.
