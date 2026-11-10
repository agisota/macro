---
type: C4 Component
title: Access requests
status: stable
groma:
  id: access-requests-access-requests
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/access-requests/access-requests.tsx
    - scanner: typescript
      file: apps/web/src/features/access-requests/primitives/direct-access-invite.ts
      symbol: createDirectAccessInvite
    - scanner: typescript
      file: apps/web/src/features/access-requests/queries/source.ts
      symbol: createSharingSource
    - scanner: typescript
      file: apps/web/src/features/access-requests/queries/live.ts
      symbol: useAccessRequestInvalidations
    - scanner: typescript
      file: apps/web/src/features/access-requests/views/PermissionRequestsView.tsx
      symbol: PermissionRequestsView
    - scanner: typescript
      file: apps/web/src/features/access-requests/primitives/request-composer.ts
      symbol: createRequestComposer
    - scanner: typescript
      file: apps/web/src/features/access-requests/views/DirectAccessView.tsx
      symbol: DirectAccessView
    - scanner: typescript
      file: apps/web/src/features/access-requests/queries/access-updates.ts
      symbol: useSharedAccessUpdates
    - scanner: typescript
      file: apps/web/src/features/access-requests/views/DirectAccessInvite.tsx
      symbol: DirectAccessInvite
    - scanner: typescript
      file: apps/web/src/features/access-requests/views/RequestAccessView.tsx
      symbol: RequestAccessView
    - scanner: typescript
      file: apps/web/src/features/access-requests/share-request-trigger.tsx
    - scanner: typescript
      file: apps/web/src/features/access-requests/use-access-request-invalidations.ts
    - scanner: typescript
      file: apps/web/src/features/access-requests/core/types.ts
    - scanner: typescript
      file: apps/web/src/features/access-requests/context/visit.tsx
    - scanner: typescript
      file: apps/web/src/features/access-requests/context/contracts.ts
      symbol: SharingSource
    - scanner: typescript
      file: apps/web/src/features/access-requests/components/AccessLevelSelect.tsx
      symbol: AccessLevelSelect
    - scanner: typescript
      file: apps/web/src/features/access-requests/core/visit.ts
      symbol: createVisitReview
  technology: SolidJS
description: Share requests, direct access, and denied-route access requests.
---

`useShareRequests` builds a sharing source when the viewer is authenticated and the dialog is open. The same file exports access-denied and request-access views. `runtime-sharing`'s share dialog imports `createSharingSource` from this feature (`runtime-sharing/views/RuntimeShareDialog.tsx:2-6`). Notification invalidation for access changes was not opened.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/access-requests/share-request-trigger.tsx](../../../../../../apps/web/src/features/access-requests/share-request-trigger.tsx) | [apps/web/src/lib/core/component/TopBar/ShareButton.tsx](../../../../../../apps/web/src/lib/core/component/TopBar/ShareButton.tsx) | Invokes supplied callbacks: active, entity, open | typescript |
