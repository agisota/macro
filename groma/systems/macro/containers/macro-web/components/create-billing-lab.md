---
type: C4 Component
title: Billing lab
status: stable
groma:
  id: create-billing-lab
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/billing-lab/create-billing-lab.ts
    - scanner: typescript
      file: apps/web/src/features/billing-lab/entry.tsx
    - scanner: typescript
      file: apps/web/src/features/billing-lab/views/billing-lab.tsx
      symbol: BillingLabView
    - scanner: typescript
      file: apps/web/src/features/billing-lab/queries/fixture-snapshot.ts
      symbol: fixtureSnapshot
    - scanner: typescript
      file: apps/web/src/features/billing-lab/core/billing-simulation.ts
  technology: SolidJS
description: Dev-only billing preview, no Stripe credentials.
---

The readme says it runs without signing in or a local backend, via `bun run dev:billing`, at `/billing-lab.html`. It is also linked from Settings → Usage → Developer tools. It is not a production route in the opened `app-router-view.tsx`.
