---
type: C4 Component
title: Web module
status: stable
groma:
  id: ui-audit
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/scripts/ui-audit.ts
  technology: SolidJS
description: Part of the signed-in client
---

!/usr/bin/env bun  Adoption audit for the `@ui` component library.  Answers three questions across `apps/web/src`: 1. How much is each component actually used? 2. How often is a usage reskinned with utility classes? Layout classes are expected; classes that repaint or resize a co
