---
type: C4 Component
title: Local runtime local runtime host
status: stable
groma:
  id: local-runtime-host
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/local-runtime/local-runtime-host.tsx
      symbol: LocalRuntimeHost
  technology: SolidJS
  group: Agents
description: Desktop macrod pairing and first-run setup prompt.
---

`LocalRuntimeHost` is meant to mount once, on desktop, inside the authenticated shell. It probes `macrodSupport` and `macrodInspect` from `@macro/tauri`. `AppChrome` mounts `<LocalRuntimeHost />` when `isDesktopPlatform()` (`Layout.tsx:311-312`). The import line in `Layout.tsx` was not in the ranges opened, so the callee file is evidenced by the component name matching this export, not by an import line read in `Layout.tsx`.
