---
type: C4 Component
title: Block project
status: stable
groma:
  id: projectcreatemenu
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-project/component/ProjectCreateMenu.tsx
    - scanner: typescript
      file: apps/web/src/features/block-project/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-project/component/Block.tsx
      symbol: Block
    - scanner: typescript
      file: apps/web/src/features/block-project/signal/projectBlockData.ts
      symbol: projectBlockDataSignal
    - scanner: typescript
      file: apps/web/src/features/block-project/component/sidepanel/ProjectSidePanelSections.tsx
      symbol: ProjectSidePanelSections
    - scanner: typescript
      file: apps/web/src/features/block-project/component/project-scoped-panel.ts
      symbol: useProjectScopedPanel
    - scanner: typescript
      file: apps/web/src/features/block-project/component/TopBar.tsx
      symbol: TopBar
    - scanner: typescript
      file: apps/web/src/features/block-project/isSpecial.ts
      symbol: getIsSpecialProject
  technology: SolidJS
  group: Tasks
description: Folder block, not a task project.
---

The readme is a single sentence. Do not treat this directory as the Tasks project screen; that is `projects` plus `block-initiative`. Folder list routes are lazy-loaded from `next-soup`, not from this block (`lazy-route-views.ts:90-92`).
