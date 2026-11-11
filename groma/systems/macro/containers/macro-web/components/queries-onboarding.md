---
type: C4 Component
title: Queries onboarding
status: stable
groma:
  id: queries-onboarding
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/onboarding.ts
  technology: SolidJS
  group: Data queries
description: Queries and mutations for the onboarding flow row
---

Queries and mutations for the onboarding flow row.  The server observes connections itself: reading the state starts any due import gather runs, and connector OAuth completions reconcile instantly via a server hook. All import state lives in `@queries/import`.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/onboarding.ts](../../../../../../apps/web/src/lib/queries/onboarding.ts) | [apps/web/src/features/onboarding/create-app-onboarding-context.ts](../../../../../../apps/web/src/features/onboarding/create-app-onboarding-context.ts) | Invokes supplied callback: enabled | typescript |
