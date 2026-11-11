---
type: C4 Component
title: Public GitHub client
status: stable
groma:
  id: service-github-public-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-github-public/client.ts
      symbol: getMacroGithubStars
  technology: HTTP
  group: Service clients
description: Reads the public star count
---

GETs https://api.github.com/repos/macro-inc/macro with credentials omitted. Macro credentials are never sent.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/service-github-public/client.ts](../../../../../../apps/web/src/lib/service-clients/service-github-public/client.ts) | [github](../../../../../externals/github.md) | Reads the star count | GitHub REST |
