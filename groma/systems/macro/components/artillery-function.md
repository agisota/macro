---
type: C4 Component
title: convert_service
status: stable
groma:
  id: artillery-function
  parent: macro
  code:
    - scanner: javascript
      file: services/convert_service/load-test/artillery-function.js
      symbol: generateRandomData
    - scanner: typescript
      file: services/convert_service/helpers/backfill.ts
  technology: TypeScript
  group: Service helpers
description: Scanned helper for convert_service
---

Custom functions for Artillery load testing
