---
type: C4 Component
title: service static files
status: stable
groma:
  id: service-static-files-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/client.ts
      symbol: staticFileClient
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/deleteResult.ts
      symbol: DeleteResult
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/deleteResultError.ts
      symbol: DeleteResultError
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/errorResponse.ts
      symbol: ErrorResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/index.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/putFileRequest.ts
      symbol: PutFileRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/putFileRequestContentType.ts
      symbol: PutFileRequestContentType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/fileMetadata.ts
      symbol: FileMetadata
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/bulkDeleteResponse.ts
      symbol: BulkDeleteResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/putFileRequestContentLength.ts
      symbol: PutFileRequestContentLength
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/bulkDeleteRequest.ts
      symbol: BulkDeleteRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-static-files/generated/schemas/putFileResponse.ts
      symbol: PutFileResponse
  technology: TypeScript
  group: Service clients
description: Client for the service static files host
---

TypeScript client under service-static-files. Calls a Macro host, not a vendor API, unless a rule above says otherwise.
