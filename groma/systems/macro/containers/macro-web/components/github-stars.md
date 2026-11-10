---
type: C4 Component
title: Web module
status: stable
groma:
  id: github-stars
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/github-stars.ts
      symbol: useGithubStarsQuery
  technology: SolidJS
description: Part of the signed-in client
---

Shared across onboarding mounts; this public request needs no sign-in.
