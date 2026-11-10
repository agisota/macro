---
type: C4 Component
title: Web module
status: stable
groma:
  id: createcontext
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/context/createContext.ts
      symbol: createAssertedContextProvider
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/context/user.ts
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/QuickAccessSource.tsx
      symbol: createQuickAccessValue
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/person-items.ts
      symbol: contactUserItem
    - scanner: typescript
      file: apps/web/src/lib/core/context/emailLinks.ts
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/context.ts
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/person-list.ts
      symbol: createPersonList
    - scanner: typescript
      file: apps/web/src/lib/core/context/team.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/entity-search.ts
    - scanner: typescript
      file: apps/web/src/lib/core/context/user-info-gate.ts
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/crm-contacts.ts
    - scanner: typescript
      file: apps/web/src/lib/core/context/channels.ts
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/QuickAccessProvider.tsx
      symbol: QuickAccessProvider
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/projected-list.ts
    - scanner: typescript
      file: apps/web/src/lib/core/context/quickAccess/debug/QuickAccessAll.tsx
      symbol: QuickAccessAll
  technology: SolidJS
description: Part of the signed-in client
---

Creates a context provider that throws if used outside of provider tree. Thin wrapper around solid-primitives createContextProvider.  @param name - Name of the context (used in error messages) @param factory - Factory function that creates the context value @returns Tuple of [Pro
