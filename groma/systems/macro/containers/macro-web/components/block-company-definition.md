---
type: C4 Component
title: Block company
status: stable
groma:
  id: block-company-definition
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-company/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-company/component/CompanyBlockAdapter.tsx
      symbol: CompanyBlockAdapter
  technology: SolidJS
  group: CRM
description: '`company` block adapter.'
---

Load accepts a DSS id and lazy-loads `CompanyBlockAdapter`. Live tracking is off. The Customers route, not this block alone, is what `companies` pane claims (`routes/routes.ts:717-724`).
