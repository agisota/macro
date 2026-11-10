---
type: C4 Component
title: Integrations
status: stable
groma:
  id: assignees
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/integrations/import-linear/queries/assignees.ts
    - scanner: typescript
      file: apps/web/src/features/integrations/import-linear/assignee-picker.tsx
      symbol: ImportAssigneePicker
    - scanner: typescript
      file: apps/web/src/features/integrations/import-linear/queries/keys.ts
      symbol: importContactKeys
    - scanner: typescript
      file: apps/web/src/features/integrations/import-linear/ImportLinear.tsx
      symbol: ImportLinear
    - scanner: typescript
      file: apps/web/src/features/integrations/mcp-setup/MacroMcpSetupModal.tsx
  technology: SolidJS
description: Linear import and Macro MCP setup modal.
---

`ImportLinear.tsx` parses CSV, creates tasks with `createTaskForAccount`, and upserts history. `MacroMcpSetupModal` is a dialog opened by `openMacroMcpSetupModal`. `AppChrome` mounts that modal (`Layout.tsx:315`). Pipedream app picking lives under `settings/PipedreamAppPicker.tsx`, which was not opened.
