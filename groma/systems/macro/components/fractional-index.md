---
type: C4 Component
title: Fractional index
status: stable
groma:
  id: fractional-index
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/src/docx/fractional-index.ts
    - scanner: typescript
      file: packages/collaboration/src/docx/styles.ts
    - scanner: typescript
      file: packages/collaboration/src/docx/paragraph.ts
    - scanner: typescript
      file: packages/collaboration/src/docx/xml.ts
    - scanner: typescript
      file: packages/collaboration/src/docx/fixtures/load.ts
    - scanner: typescript
      file: packages/collaboration/src/docx/word-agent.ts
    - scanner: typescript
      file: packages/collaboration/src/docx/word-comments.ts
    - scanner: typescript
      file: packages/collaboration/src/docx/schema.ts
    - scanner: typescript
      file: packages/collaboration/src/docx/agent.ts
    - scanner: typescript
      file: packages/collaboration/src/docx/agent-types.ts
    - scanner: typescript
      file: packages/collaboration/src/docx/revisions.ts
  technology: TypeScript, Loro
  group: Collaboration runtime
description: Loro sync, awareness, and the sync-service socket
---

Shared by the web app and workers. Callers pass the URL and token. It does not authenticate and does not call Gmail, GitHub, or model APIs.
