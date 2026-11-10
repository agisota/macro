---
type: C4 Component
title: Block code
status: stable
groma:
  id: filemode
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-code/util/fileMode.ts
      symbol: isHtmlFileType
    - scanner: typescript
      file: apps/web/src/features/block-code/component/TopBar.tsx
      symbol: TopBar
    - scanner: typescript
      file: apps/web/src/features/block-code/component/CodeMarkdown.tsx
      symbol: CodeMarkdown
    - scanner: typescript
      file: apps/web/src/features/block-code/component/CodeSearchPanel.tsx
    - scanner: typescript
      file: apps/web/src/features/block-code/queries/code-document.ts
      symbol: saveCodeDocument
    - scanner: typescript
      file: apps/web/src/features/block-code/component/CodeContent.tsx
    - scanner: typescript
      file: apps/web/src/features/block-code/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-code/component/cmTheme.ts
      symbol: macroThemeExtension
    - scanner: typescript
      file: apps/web/src/features/block-code/util/languageSupport.ts
    - scanner: typescript
      file: apps/web/src/features/block-code/component/CodeModeControl.tsx
      symbol: CodeModeControl
    - scanner: typescript
      file: apps/web/src/features/block-code/component/CodeMirror.tsx
    - scanner: typescript
      file: apps/web/src/features/block-code/component/Block.tsx
      symbol: BlockCode
    - scanner: typescript
      file: apps/web/src/features/block-code/component/CodeFileTypeChip.tsx
      symbol: CodeFileTypeChip
    - scanner: typescript
      file: apps/web/src/features/block-code/component/HtmlPreview.tsx
      symbol: HtmlPreview
  technology: SolidJS
  group: Files
description: CodeMirror code block.
---

The readme lists CodeMirror editing, automatic save, a find bar, and replace only when the document is editable. Read-only viewers keep a caret and can copy, via `EditorState.readOnly` rather than `EditorView.editable`. The editor component was not opened.
