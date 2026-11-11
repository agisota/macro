---
type: C4 Component
title: Ui audit
status: stable
groma:
  id: ui-audit
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/scripts/ui-audit.ts
  technology: SolidJS
  group: Development tooling
description: Adoption audit for the `@ui` component library
---

Adoption audit for the `@ui` component library.  Answers three questions across `apps/web/src`: 1. How much is each component actually used? 2. How often is a usage reskinned with utility classes? Layout classes are expected; classes that repaint or resize a component mean its own API did not cover the need, and that is the signal worth chasing. 3. How many primitives are still hand-rolled (`<button>`) instead of tak
