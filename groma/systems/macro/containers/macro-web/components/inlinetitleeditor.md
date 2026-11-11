---
type: C4 Component
title: InlineTitleEditor
status: stable
groma:
  id: inlinetitleeditor
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/InlineTitleEditor.tsx
      symbol: InlineTitleEditor
  technology: SolidJS
  group: Workspace core
description: 'Inline-editable entity title, mirroring the markdown-document title UX: the title is edited in place with no pencil affordance — put the car'
---

Inline-editable entity title, mirroring the markdown-document title UX: the title is edited in place with no pencil affordance — put the caret in it, type, and the rename commits on blur/Enter (Escape discards). Blank or unchanged edits are dropped rather than committed.
