---
type: C4 Component
title: Component TopBar
status: stable
groma:
  id: block-email-component-topbar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-email/component/TopBar.tsx
      symbol: TopBar
    - scanner: typescript
      file: apps/web/src/features/block-email/use-email-list-navigation.ts
      symbol: useEmailListNavigation
    - scanner: typescript
      file: apps/web/src/features/block-email/component/Block.tsx
      symbol: BlockEmail
  technology: SolidJS
  group: Email
description: '`email` block; thread fetch stays in the component.'
---

`defineBlock` name is `email`. Load accepts a DSS id and returns it; the comment says the thread itself is fetched by the block component via `useThreadQuery`, which owns loading, offline fallback, and error states. Live tracking is on; sync service is off. The default filename is `[No subject]`.
