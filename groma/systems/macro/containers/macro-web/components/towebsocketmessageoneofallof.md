---
type: C4 Component
title: Connection client
status: stable
groma:
  id: towebsocketmessageoneofallof
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/toWebsocketMessageOneOfAllOf.ts
      symbol: ToWebsocketMessageOneOfAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/streamId.ts
      symbol: StreamId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/streamEventOneOfAllOfType.ts
      symbol: StreamEventOneOfAllOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/sendMessageResponse.ts
      symbol: SendMessageResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/storedConnectionEntityLastPing.ts
      symbol: StoredConnectionEntityLastPing
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/stringIDResponse.ts
      symbol: StringIDResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/trackEntityMessage.ts
      symbol: TrackEntityMessage
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/uploadFolderStatusUpdateOneOfStatus.ts
      symbol: UploadFolderStatusUpdateOneOfStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/uploadFolderStatusUpdateOneOf.ts
      symbol: UploadFolderStatusUpdateOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/streamEventOneOfAllOf.ts
      symbol: StreamEventOneOfAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/websocket.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/websocket-payload.ts
      symbol: parseWebsocketPayload
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/entity.ts
      symbol: Entity
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/uploadFolderStatusUpdateOneOfFive.ts
      symbol: UploadFolderStatusUpdateOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/streamEventOneOfFourAllOfType.ts
      symbol: StreamEventOneOfFourAllOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/uploadFolderStatusUpdateOneOfThreeStatus.ts
      symbol: UploadFolderStatusUpdateOneOfThreeStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/index.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/stream-events.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/uploadFolderStatusUpdateOneOfThree.ts
      symbol: UploadFolderStatusUpdateOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/uploadFolderStatusUpdateOneOfSevenStatus.ts
      symbol: UploadFolderStatusUpdateOneOfSevenStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/uploadFolderStatusUpdateOneOfFiveStatus.ts
      symbol: UploadFolderStatusUpdateOneOfFiveStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/toWebsocketMessageOneOfFour.ts
      symbol: ToWebsocketMessageOneOfFour
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/trackEntityMessageAllOf.ts
      symbol: TrackEntityMessageAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/streamEventOneOfFourAllOf.ts
      symbol: StreamEventOneOfFourAllOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/streamEventOneOf.ts
      symbol: StreamEventOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/genericErrorResponse.ts
      symbol: GenericErrorResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/entityType.ts
      symbol: EntityType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/streamItem.ts
      symbol: StreamItem
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/batchSendMessageBody.ts
      symbol: BatchSendMessageBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/toWebsocketMessageOneOfAllOfType.ts
      symbol: ToWebsocketMessageOneOfAllOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/sendMessageBody.ts
      symbol: SendMessageBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/streamEvents.ts
      symbol: StreamEvents
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/storedConnectionEntity.ts
      symbol: StoredConnectionEntity
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/trackAction.ts
      symbol: TrackAction
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/streamEvent.ts
      symbol: StreamEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/toWebsocketMessageOneOf.ts
      symbol: ToWebsocketMessageOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/uploadFolderStatusUpdate.ts
      symbol: UploadFolderStatusUpdate
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/toWebsocketMessage.ts
      symbol: ToWebsocketMessage
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/uploadFolderStatusUpdateOneOfSeven.ts
      symbol: UploadFolderStatusUpdateOneOfSeven
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/stream.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/presence-telemetry.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/bulkUpload.ts
      symbol: waitBulkUploadStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/messageReceipt.ts
      symbol: MessageReceipt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/streamEventOneOfFour.ts
      symbol: StreamEventOneOfFour
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/websocket-url.ts
      symbol: resolveWsUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/toWebsocketMessageOneOfFourAllOfType.ts
      symbol: ToWebsocketMessageOneOfFourAllOfType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/generated/schemas/toWebsocketMessageOneOfFourAllOf.ts
      symbol: ToWebsocketMessageOneOfFourAllOf
  technology: WebSocket
  group: Service clients
description: Browser client for presence and fanout
---

Opens the connection gateway through the collaboration WebSocket helper.
