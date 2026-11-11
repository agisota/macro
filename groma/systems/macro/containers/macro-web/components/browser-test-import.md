---
type: C4 Component
title: Browser test import
status: stable
groma:
  id: browser-test-import
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/connector-import/browser-test/import.tsx
  technology: SolidJS
description: Pipedream-backed import promotions.
---

The prompt applies only after connector import is rolled out and the Pipedream stack is on. It lazy-loads `ConnectorImportDialogHost`. Categories come from `./core/catalog`. `slack-import` can hide this promotion (`slack-import/slack-import.tsx:1`).
