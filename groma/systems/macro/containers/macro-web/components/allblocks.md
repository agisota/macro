---
type: C4 Component
title: AllBlocks
status: stable
groma:
  id: allblocks
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/constant/allBlocks.ts
    - scanner: typescript
      file: apps/web/src/lib/core/constant/macroCoder.ts
    - scanner: typescript
      file: apps/web/src/lib/core/constant/PaywallState.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/constant/featureFlags.ts
    - scanner: typescript
      file: apps/web/src/lib/core/constant/filename.ts
      symbol: DefaultFilename
    - scanner: typescript
      file: apps/web/src/lib/core/constant/codexAgent.ts
    - scanner: typescript
      file: apps/web/src/lib/core/constant/pagination.ts
      symbol: DEFAULT_THREAD_MESSAGES_LIMIT
    - scanner: typescript
      file: apps/web/src/lib/core/constant/cursorAgent.ts
    - scanner: typescript
      file: apps/web/src/lib/core/constant/SettingsState.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/constant/AiUsageLimitState.tsx
      symbol: useAiUsageLimitState
    - scanner: typescript
      file: apps/web/src/lib/core/constant/developmentProxy.ts
    - scanner: typescript
      file: apps/web/src/lib/core/constant/settingsTabsConfig.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/constant/macroAgent.ts
    - scanner: typescript
      file: apps/web/src/lib/core/constant/servers.ts
    - scanner: typescript
      file: apps/web/src/lib/core/constant/isMac.ts
      symbol: IS_MAC
    - scanner: typescript
      file: apps/web/src/lib/core/constant/macroNew.ts
    - scanner: typescript
      file: apps/web/src/lib/core/constant/macroSystem.ts
    - scanner: typescript
      file: apps/web/src/lib/core/constant/permissions.ts
  technology: SolidJS
  group: Workspace core
description: AllBlocks in Workspace core.
---

File apps/web/src/lib/core/constant/allBlocks.ts. It belongs to Workspace core, not a separate application.
