---
type: C4 Component
title: Side panel context
status: stable
groma:
  id: side-panel-context
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/side-panel/context.ts
    - scanner: typescript
      file: apps/web/src/components/app/side-panel/registry.ts
    - scanner: typescript
      file: apps/web/src/components/app/side-panel/index.ts
    - scanner: typescript
      file: apps/web/src/components/app/side-panel/SidePanel.tsx
    - scanner: typescript
      file: apps/web/src/components/app/side-panel/EntityMetadata.tsx
    - scanner: typescript
      file: apps/web/src/components/app/side-panel/FileSidePanelSections.tsx
  technology: SolidJS
  group: App shell
description: Render order — lower numbers appear first
---

Render order — lower numbers appear first. Sections without an explicit order render after ordered ones, in their registration order.
