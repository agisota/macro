---
type: C4 Component
title: Web
status: stable
groma:
  id: web
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/web.ts
      symbol: createWebTracingProvider
  technology: TypeScript
description: Shared package observability
---

Creates the browser OpenTelemetry provider used by the web application.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/observability/src/web.ts](../../../../packages/observability/src/web.ts) | [apps/web/src/observability/browser.ts](../../../../apps/web/src/observability/browser.ts) | Invokes supplied callbacks: enabled, spanAttributes | typescript |
