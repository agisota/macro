---
type: C4 Component
title: Analytics proxy
status: stable
groma:
  id: analytics-proxy-src-index
  parent: macro
  code:
    - scanner: typescript
      file: services/analytics-proxy/src/index.ts
      symbol: app
  technology: Cloudflare Workers
  group: Service helpers
description: Forwards browser analytics without exposing server keys
---

Proxies PostHog traffic and OTLP traces to Datadog. The browser never holds the Datadog key.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [services/analytics-proxy/src/index.ts](../../../../services/analytics-proxy/src/index.ts) | [datadog](../../../externals/datadog.md) | Forwards traces and logs | OTLP |
| [services/analytics-proxy/src/index.ts](../../../../services/analytics-proxy/src/index.ts) | [posthog-analytics](../../../externals/posthog-analytics.md) | Forwards product analytics | HTTPS |
