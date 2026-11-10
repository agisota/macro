---
type: C4 Component
title: Block email
status: stable
groma:
  id: emailthreadloadgate
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-email/component/EmailThreadLoadGate.tsx
    - scanner: typescript
      file: apps/web/src/features/block-email/component/EmailThreadHeaderActions.tsx
    - scanner: typescript
      file: apps/web/src/features/block-email/EmailThreadHostView.tsx
    - scanner: typescript
      file: apps/web/src/features/block-email/definition.ts
      symbol: definition
    - scanner: typescript
      file: apps/web/src/features/block-email/component/EmailTaskButton.tsx
      symbol: EmailTaskButton
    - scanner: typescript
      file: apps/web/src/features/block-email/EmailBlockAdapter.tsx
      symbol: EmailBlockAdapter
    - scanner: typescript
      file: apps/web/src/features/block-email/component/useEmailThreadTools.tsx
    - scanner: typescript
      file: apps/web/src/features/block-email/component/sidepanel/EmailSidePanelSections.tsx
      symbol: EmailSidePanelSections
    - scanner: typescript
      file: apps/web/src/features/block-email/component/EmailThreadControls.tsx
      symbol: EmailThreadControls
    - scanner: typescript
      file: apps/web/src/features/block-email/util/emailHotkeys.ts
      symbol: registerEmailHotkeys
  technology: SolidJS
  group: Email
description: '`email` block; thread fetch stays in the component.'
---

`defineBlock` name is `email`. Load accepts a DSS id and returns it; the comment says the thread itself is fetched by the block component via `useThreadQuery`, which owns loading, offline fallback, and error states. Live tracking is on; sync service is off. The default filename is `[No subject]`.
