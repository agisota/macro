---
type: C4 Component
title: lexical-service
status: stable
groma:
  id: lexical-service-src-types
  parent: test
  code:
    - scanner: typescript
      file: services/lexical-service/src/types.ts
    - scanner: typescript
      file: services/lexical-service/src/lib/editor.ts
      symbol: createEditor
    - scanner: typescript
      file: services/lexical-service/src/lib/search-text.ts
      symbol: $extractSearchText
    - scanner: typescript
      file: services/lexical-service/test/tests.ts
    - scanner: typescript
      file: services/lexical-service/src/lib/convsersions.ts
    - scanner: typescript
      file: services/lexical-service/src/lib/markdown.ts
      symbol: $elementNodeToMarkdown
  technology: TypeScript
description: Scanned helper for lexical-service
---

Plain text search content
