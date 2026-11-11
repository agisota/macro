---
type: C4 Component
title: Service cognition onboarding
status: stable
groma:
  id: service-cognition-onboarding
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-cognition/onboarding.ts
  technology: TypeScript
  group: Service clients
description: Agent and import client for the cognition host
---

Posts chat completions, structured completions, and Notion, Linear, Jira, and Slack import runs to Macro cognition. Model vendors are named, not called.
