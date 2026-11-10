---
type: C4 Component
title: Web module
status: stable
groma:
  id: consent
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/email-link/consent.ts
    - scanner: typescript
      file: apps/web/src/lib/core/email-link/share-conflict.ts
    - scanner: typescript
      file: apps/web/src/lib/core/email-link/link-outcome.ts
    - scanner: typescript
      file: apps/web/src/lib/core/email-link/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/email-link/ProviderDialog.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/email-link/return-layout.ts
    - scanner: typescript
      file: apps/web/src/lib/core/email-link/OutlookBetaBadge.tsx
      symbol: OutlookBetaBadge
  technology: SolidJS
description: Part of the signed-in client
---

Repair the capabilities an inbox used before its Google grant expired.
