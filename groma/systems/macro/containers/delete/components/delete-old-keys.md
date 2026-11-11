---
type: C4 Component
title: Delete old keys
status: stable
groma:
  id: delete-old-keys
  parent: delete
  code:
    - scanner: typescript
      file: tooling/scripts/migrate-s3-keys-extensionless/delete-old-keys.ts
description: Not a product runtime
---

Test, script, or generator. Excluded from future scans. Kept only because a scan had already stored it.
