---
type: C4 Component
title: Create indices
status: stable
groma:
  id: create-indices
  parent: macro-verify-mappings
  code:
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/create_indices.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/verify_mappings.ts
    - scanner: typescript
      file: infra/stacks/opensearch/helpers/scripts/add_imported_author.ts
description: Not a product runtime
---

Test, script, or generator. Excluded from future scans. Kept only because a scan had already stored it.
