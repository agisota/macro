---
type: C4 Component
title: Sync client
status: stable
groma:
  id: versionindicator
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/versionIndicator.ts
      symbol: VersionIndicator
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/blameRowUserId.ts
      symbol: BlameRowUserId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/source/guarded-source.ts
      symbol: guardDocumentSyncSource
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/index.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/blameRow.ts
      symbol: BlameRow
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/blameRowActor.ts
      symbol: BlameRowActor
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/getSnapshotRequest.ts
      symbol: GetSnapshotRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/peerResponse.ts
      symbol: PeerResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/peerWithUserId.ts
      symbol: PeerWithUserId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/copyDocumentRequestVersionId.ts
      symbol: CopyDocumentRequestVersionId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/documentStateParams.ts
      symbol: DocumentStateParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/source/helpers.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/updateRequest.ts
      symbol: UpdateRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/binaryBody.ts
      symbol: BinaryBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/source/authorization.ts
      symbol: DocumentSyncAuthorization
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/peerWithUserIdActor.ts
      symbol: PeerWithUserIdActor
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/documentActivePeersParams.ts
      symbol: DocumentActivePeersParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/source/index.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/copyDocumentRequest.ts
      symbol: CopyDocumentRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/snapshotResponse.ts
      symbol: SnapshotResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/websocket-url.ts
      symbol: resolveSyncRouterWsUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/getSnapshotRequestVersionId.ts
      symbol: GetSnapshotRequestVersionId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/updateResponse.ts
      symbol: UpdateResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/generated/http/schemas/documentMetadata.ts
      symbol: DocumentMetadata
  technology: WebSocket
  group: Service clients
description: Browser client for document sync rooms
---

Uses the collaboration package's Bebop schema to talk to the sync-service worker host. The caller supplies the URL and token.
