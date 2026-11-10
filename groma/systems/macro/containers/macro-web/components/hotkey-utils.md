---
type: C4 Component
title: Web module
status: stable
groma:
  id: hotkey-utils
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/hotkey/utils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/hotkey/constants.ts
    - scanner: typescript
      file: apps/web/src/lib/core/hotkey/hotkeys.ts
    - scanner: typescript
      file: apps/web/src/lib/core/hotkey/state.ts
    - scanner: typescript
      file: apps/web/src/lib/core/hotkey/tokens.ts
    - scanner: typescript
      file: apps/web/src/lib/core/hotkey/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/hotkey/getCommands.ts
  technology: SolidJS
description: Part of the signed-in client
---

Removes hotkey commands from the global token map when their scope is destroyed.
