---
type: C4 Component
title: lexical-service
status: stable
groma:
  id: lib-html
  parent: macro
  code:
    - scanner: typescript
      file: services/lexical-service/src/lib/html.ts
    - scanner: typescript
      file: services/lexical-service/src/endpoints/image-markdown.ts
      symbol: ImageMarkdownEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/cognition-presigned.ts
      symbol: CognitionPresignedEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/html.ts
      symbol: HtmlEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/markdown-snapshot.ts
      symbol: MarkdownSnapshotEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/cognition-v2.ts
      symbol: CognitionV2Endpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/agent-announcement.ts
      symbol: AgentAnnouncementEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/extract-reply.ts
      symbol: ExtractReplyEndpoint
    - scanner: typescript
      file: services/lexical-service/src/lib/sync-service.ts
    - scanner: typescript
      file: services/lexical-service/src/endpoints/markdown.ts
      symbol: MarkdownEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/notion-snapshot.ts
      symbol: NotionSnapshotEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/agent-context.ts
    - scanner: typescript
      file: services/lexical-service/src/index.ts
      symbol: app
    - scanner: typescript
      file: services/lexical-service/src/endpoints/search-text.ts
      symbol: SearchTextEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/comment-only-change.ts
      symbol: CommentOnlyChangeEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/mentions.ts
      symbol: MentionsEndpoint
    - scanner: typescript
      file: services/lexical-service/src/lib/error-handler.ts
    - scanner: typescript
      file: services/lexical-service/src/endpoints/xml.ts
      symbol: XmlEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/comment-mark.ts
      symbol: CommentMarkEndpoint
    - scanner: typescript
      file: services/lexical-service/src/endpoints/cognition-text.ts
      symbol: CognitionTextEndpoint
    - scanner: typescript
      file: services/lexical-service/src/lib/comment-only-change.ts
      symbol: isCommentOnlyChange
    - scanner: typescript
      file: services/lexical-service/src/server.ts
    - scanner: typescript
      file: services/lexical-service/src/lib/schemas.ts
    - scanner: typescript
      file: services/lexical-service/src/polyfills/prism.ts
      symbol: Prism
    - scanner: typescript
      file: services/lexical-service/src/constants.ts
      symbol: NODE_ID_LENGTH
    - scanner: typescript
      file: services/lexical-service/src/endpoints/plaintext.ts
      symbol: PlaintextEndpoint
  technology: TypeScript
  group: Service helpers
description: Scanned helper for lexical-service
---

Markdown to the HTML an email body carries, rendered headless.  The composer produces its HTML by exporting a live Lexical editor, so a caller with no composer — the `SendEmail` AI tool, whose body the model writes as markdown — has to export the same way or the two paths drift.
