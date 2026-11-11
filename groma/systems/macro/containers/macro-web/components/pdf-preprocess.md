---
type: C4 Component
title: Preprocess
status: stable
groma:
  id: pdf-preprocess
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/pdf/preprocess.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/pdf/remove_metadata.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/jobStatus.ts
      symbol: JobStatus
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/docx/index.ts
      symbol: ComparisionUpload
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/baseResponse.ts
      symbol: BaseResponse
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/generic/create_temp_file.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/generic/ping.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/pdf/export.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/index.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/docx/docx_upload.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/documentMetadata.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/pdf/password.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/docx/consolidate.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/pdf/modify.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/docx/simple_compare.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/jobTypes.ts
    - scanner: typescript
      file: apps/web/src/lib/document-processing-types/jobTypes/pdf/convert.ts
  technology: SolidJS
  group: Documents
description: Preprocess in Documents.
---

File apps/web/src/lib/document-processing-types/jobTypes/pdf/preprocess.ts. It belongs to Documents, not a separate application.
