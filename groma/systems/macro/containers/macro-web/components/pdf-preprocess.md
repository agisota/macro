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
description: Preprocess inside the signed-in client.
---

There are 2 types of Preprocess events. PreprocessInit - used to initialize the upload job prior to creating a new pdf file PreprocessInvoke - invokes preprocess and retrieves the preprocess results. PreprocessInvoke takes a document id and document version id and runs the pdf se
