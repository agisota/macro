---
type: C4 Component
title: Github stars
status: stable
groma:
  id: github-stars
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/github-stars.ts
      symbol: useGithubStarsQuery
  technology: SolidJS
description: Github stars inside the signed-in client.
---

Shared across onboarding mounts; this public request needs no sign-in.
