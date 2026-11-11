---
type: C4 Component
title: Boot shell
status: stable
groma:
  id: boot-shell
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/boot-shell.ts
      symbol: dismissBootShell
  technology: SolidJS
  group: App shell
description: Fades out the frame index
---

Fades out the frame index.html paints before any JS runs. The first route shell to mount calls it, so the screen goes straight from the boot shell to the real shell without a blank frame in between.
