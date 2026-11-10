---
type: C4 Component
title: Web module
status: stable
groma:
  id: documentprocessing-documentkey
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/documentProcessing/documentKey.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/documentProcessing/response.ts
  technology: SolidJS
description: Part of the signed-in client
---

@param documentKey A string formatted to `${owner}/${documentId}/${documentVersionId}.${fileType}` where fileType is one of pdf or docx. NOTE: temp files are stored with a different key format @returns the parts that make up the document key
