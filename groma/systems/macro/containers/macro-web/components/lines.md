---
type: C4 Component
title: Lines
status: stable
groma:
  id: lines
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/diff-view/model/lines.ts
    - scanner: typescript
      file: apps/web/src/components/diff-view/model/diff-file.ts
    - scanner: typescript
      file: apps/web/src/components/diff-view/model/collapse.ts
    - scanner: typescript
      file: apps/web/src/components/diff-view/model/patch.ts
  technology: SolidJS
  group: Diffs
description: Lines of a file's diff that a host picks, or hangs its own content under (review notes, comments)
---

Lines of a file's diff that a host picks, or hangs its own content under (review notes, comments). The view places the content; the host decides what it says.
