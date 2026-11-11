---
type: C4 Component
title: Primitives local runtime setup
status: stable
groma:
  id: primitives-local-runtime-setup
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/local-runtime/primitives/local-runtime-setup.ts
      symbol: createLocalRuntimeSetup
    - scanner: typescript
      file: apps/web/src/features/local-runtime/core/setup.ts
    - scanner: typescript
      file: apps/web/src/features/local-runtime/queries/setup-capabilities.ts
      symbol: useSetupCapabilities
    - scanner: typescript
      file: apps/web/src/features/local-runtime/views/local-runtime-setup-dialog.tsx
      symbol: LocalRuntimeSetupDialog
    - scanner: typescript
      file: apps/web/src/features/local-runtime/views/local-runtime-setup-panel.tsx
      symbol: LocalRuntimeSetupPanel
    - scanner: typescript
      file: apps/web/src/features/local-runtime/local-runtime-setup.tsx
      symbol: LocalRuntimeSetup
    - scanner: typescript
      file: apps/web/src/features/local-runtime/components/setup-checklist.tsx
  technology: SolidJS
description: Desktop macrod pairing and first-run setup prompt.
---

`LocalRuntimeHost` is meant to mount once, on desktop, inside the authenticated shell. It probes `macrodSupport` and `macrodInspect` from `@macro/tauri`. `AppChrome` mounts `<LocalRuntimeHost />` when `isDesktopPlatform()` (`Layout.tsx:311-312`). The import line in `Layout.tsx` was not in the ranges opened, so the callee file is evidenced by the component name matching this export, not by an import line read in `Layout.tsx`.
