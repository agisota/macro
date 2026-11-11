---
type: C4 Component
title: Browser test grid
status: stable
groma:
  id: grid
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/database/browser-test/grid.tsx
  technology: SolidJS
  group: Development tooling
description: Host-agnostic database grid.
---

A host supplies `DatabaseApi` with schema reads, paginated row reads, and atomic operation batches. `DatabaseRecords` supplies column controls and layouts. The readme says to mount under `QueryClientProvider` and remount when the API identity or table changes. The CRM browser fixture is cited as `../crm/browser-test/editor.tsx`; that test file was not opened.
