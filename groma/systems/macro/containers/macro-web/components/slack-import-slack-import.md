---
type: C4 Component
title: Slack import
status: stable
groma:
  id: slack-import-slack-import
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/slack-import/slack-import.tsx
      symbol: SlackImport
    - scanner: typescript
      file: apps/web/src/features/slack-import/components/import-progress.tsx
      symbol: ImportProgress
    - scanner: typescript
      file: apps/web/src/features/slack-import/views/import-dialog.tsx
    - scanner: typescript
      file: apps/web/src/features/slack-import/queries/import-source.ts
    - scanner: typescript
      file: apps/web/src/features/slack-import/context/contracts.ts
    - scanner: typescript
      file: apps/web/src/features/slack-import/components/conversation-picker.tsx
      symbol: ConversationPicker
    - scanner: typescript
      file: apps/web/src/features/slack-import/slack-import-sidebar.tsx
      symbol: SlackImportSidebar
    - scanner: typescript
      file: apps/web/src/features/slack-import/components/slack-import-card.tsx
      symbol: SlackImportCard
    - scanner: typescript
      file: apps/web/src/features/slack-import/components/import-ui.tsx
    - scanner: typescript
      file: apps/web/src/features/slack-import/components/slack-connect-card.tsx
      symbol: SlackConnectCard
    - scanner: typescript
      file: apps/web/src/features/slack-import/core/worker-protocol.ts
    - scanner: typescript
      file: apps/web/src/features/slack-import/primitives/import-controller.ts
    - scanner: typescript
      file: apps/web/src/features/slack-import/queries/archive-source.ts
    - scanner: typescript
      file: apps/web/src/features/slack-import/context/import-context.tsx
    - scanner: typescript
      file: apps/web/src/features/slack-import/core/export.ts
  technology: SolidJS
  group: Messages
description: Slack archive import job UI.
---

The file opened composes settings rows, a Pipedream Slack connect slug, channel list invalidation, and `uploadSlackImport` from the storage client. It also listens on the connection websocket. It hides the connector-import promotion when an import runs (`hideImportPromotion` import, line 1). This pass did not open the import dialog views.
