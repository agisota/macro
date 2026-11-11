---
type: C4 Component
title: CombinedRecipient
status: stable
groma:
  id: combinedrecipient
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/user/combinedRecipient.ts
    - scanner: typescript
      file: apps/web/src/lib/core/user/contact-filter-options.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/user/macroId.ts
    - scanner: typescript
      file: apps/web/src/lib/core/user/displayName.ts
    - scanner: typescript
      file: apps/web/src/lib/core/user/use-contact-filter-options.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/user/dmActivity.ts
      symbol: useAugmentUserWithDmActivity
    - scanner: typescript
      file: apps/web/src/lib/core/user/automated-address.ts
      symbol: isAutomatedAddress
    - scanner: typescript
      file: apps/web/src/lib/core/user/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/user/recipient-source.ts
    - scanner: typescript
      file: apps/web/src/lib/core/user/util.ts
    - scanner: typescript
      file: apps/web/src/lib/core/user/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/user/inboxOnly.ts
      symbol: useIsConnectedSecondaryInbox
  technology: SolidJS
  group: Workspace core
description: this type is extracted from the user's message info
---

this type is extracted from the user's message info
