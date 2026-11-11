---
type: C4 Component
title: Browser test artifact.fixture
status: stable
groma:
  id: artifact-fixture
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-canvas/browser-test/artifact.fixture.tsx
  technology: SolidJS
description: Canvas Next scene editor and legacy JSON migration.
---

The readme says no rollout flag is required. Drive detail and block hosts use `queries/document.ts` to authorize shared content before a legacy file seed. Native canvases do not need a presigned blob URL. Ask Macro attaches the canvas to an agent conversation; `ReadCanvas` inspects the live scene and `EditCanvas` runs bounded SDK commands in the same Loro room. Unversioned JSON converts to version 2 on load; viewing does not save a migration.
