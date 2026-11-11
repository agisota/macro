---
type: C4 Component
title: Posthog
status: stable
groma:
  id: posthog
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/analytics/posthog.tsx
  technology: SolidJS
  group: Product analytics
description: PostHog only reports flags once `/flags` answers, but it already serves the flags it cached on the previous visit
---

PostHog only reports flags once `/flags` answers, but it already serves the flags it cached on the previous visit. Starting from that cache means returning users paint flagged UI once, not flags-off first and then again when the answer lands (e.g. soup lists reloading on a transport swap).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/analytics/posthog.tsx](../../../../../../apps/web/src/lib/analytics/posthog.tsx) | [posthog-analytics](../../../../../externals/posthog-analytics.md) | Identifies the member | PostHog |
