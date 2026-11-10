---
type: C4 Component
title: Block contact
status: stable
groma:
  id: contactblockadapter
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-contact/component/ContactBlockAdapter.tsx
      symbol: ContactBlockAdapter
    - scanner: typescript
      file: apps/web/src/features/block-contact/definition.ts
  technology: SolidJS
  group: CRM
description: '`contact` block adapter.'
---

Same shape as the company block: DSS id in, lazy `ContactBlockAdapter`, live tracking off. Record routes under `companies` use `crm-route` params rather than mounting this block definition directly in the router file that was opened.
