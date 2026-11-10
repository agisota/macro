---
type: C4 Component
title: Open
status: stable
groma:
  id: open
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/filesystem/open.ts
      symbol: openFromDisk
  technology: SolidJS
description: Returns a FileHandle referencing a file the user wishes to open handle should be used to lookup data from cache or "readFromHandle" e.g. ```typescript const han
---

Returns a FileHandle referencing a file the user wishes to open handle should be used to lookup data from cache or "readFromHandle" e.g. ```typescript const handle = await openFromDisk([{ ext: "pdf", mime: "application/pdf", name: "PDF File" }]) const file = await readFromHandle(handle) const cacheDb = await getDocumentCache() const cachedData = await cacheDb.getByHandle(handle) ```
