---
type: C4 Component
title: Block initiative
status: stable
groma:
  id: initiativeblock
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-initiative/component/InitiativeBlock.tsx
    - scanner: typescript
      file: apps/web/src/features/block-initiative/definition.ts
  technology: SolidJS
  group: Tasks
description: '`initiative` block, description "View a task project".'
---

Load accepts a DSS id. The component is a lazy `InitiativeBlock`. The comment distinguishes this from `block-project`, whose block name `project` means a folder. Task routes claim `initiative:<projectId>` (`routes/routes.ts:617-620`).
