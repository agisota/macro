---
type: C4 Component
title: OnElementConnect
status: stable
groma:
  id: onelementconnect
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/util/onElementConnect.ts
      symbol: onElementConnect
    - scanner: typescript
      file: apps/web/src/lib/core/util/getItemBlockName.ts
      symbol: getItemBlockName
    - scanner: typescript
      file: apps/web/src/lib/core/util/handlePaymentError.ts
      symbol: isPaymentError
    - scanner: typescript
      file: apps/web/src/lib/core/util/useSplitNavigationHandler.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/imageActions.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/delayedQueue.ts
      symbol: delayedQueue
    - scanner: typescript
      file: apps/web/src/lib/core/util/createControlledOpenSignal.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/sleep.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/dateSearch/dateParser.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/open-direct-message.ts
      symbol: useOpenDirectMessage
    - scanner: typescript
      file: apps/web/src/lib/core/util/dataTransfer.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/withRequired.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/evictOldest.ts
      symbol: evictOldest
    - scanner: typescript
      file: apps/web/src/lib/core/util/createScrollTopFade.ts
      symbol: createScrollTopFade
    - scanner: typescript
      file: apps/web/src/lib/core/util/dateParser.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/date.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/isEditableInput.ts
      symbol: isEditableInput
    - scanner: typescript
      file: apps/web/src/lib/core/util/scrollAnchor.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/attributeToSelector.ts
      symbol: attributesToSelector
    - scanner: typescript
      file: apps/web/src/lib/core/util/fireAndForget.ts
      symbol: fireAndForget
    - scanner: typescript
      file: apps/web/src/lib/core/util/abort-signal.ts
      symbol: anyAbortSignal
    - scanner: typescript
      file: apps/web/src/lib/core/util/freshSort.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/branchName.ts
      symbol: copyBranchNameToClipboard
    - scanner: typescript
      file: apps/web/src/lib/core/util/linearImport.ts
      symbol: linearCsvRecordToMacroTaskDraft
    - scanner: typescript
      file: apps/web/src/lib/core/util/useIsKeyPressActive.ts
      symbol: useIsKeyPressActive
    - scanner: typescript
      file: apps/web/src/lib/core/util/useListKeyBindings.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/message-timeline.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/documentMentions.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/safeFetch.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/dateSearch/useDateSearch.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/uploadContentType.ts
      symbol: resolveUploadContentType
    - scanner: typescript
      file: apps/web/src/lib/core/util/local-date.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/match.ts
      symbol: matches
    - scanner: typescript
      file: apps/web/src/lib/core/util/webOrigin.ts
      symbol: getWebOrigin
    - scanner: typescript
      file: apps/web/src/lib/core/util/uploadFile.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/platformFetch.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/math.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/name-match-score.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/recipient-match-rank.ts
      symbol: recipientMatchRank
    - scanner: typescript
      file: apps/web/src/lib/core/util/dialog.ts
      symbol: showMessageBoxSync
    - scanner: typescript
      file: apps/web/src/lib/core/util/scrollParent.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/debounce.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/dateSearch/parseTime.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/create.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/createFileDownload.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/destination.ts
      symbol: getDestinationFromOptions
    - scanner: typescript
      file: apps/web/src/lib/core/util/searchHighlight.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/util/flatten.ts
      symbol: FlattenObject
    - scanner: typescript
      file: apps/web/src/lib/core/util/string.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/ordered-window.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/base64.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/oklchToRgb.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/media.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/compareUtils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/useKeyPressed.ts
      symbol: useKeyPressed
    - scanner: typescript
      file: apps/web/src/lib/core/util/scrollToKeepGap.ts
      symbol: scrollToKeepGap
    - scanner: typescript
      file: apps/web/src/lib/core/util/domain.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/lazyNamed.ts
      symbol: lazyNamed
    - scanner: typescript
      file: apps/web/src/lib/core/util/userScopedStorage.ts
      symbol: createUserScopedStorage
    - scanner: typescript
      file: apps/web/src/lib/core/util/taskExtraction.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/telemetryUrl.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/time.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/postLoginRedirect.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/create-replaceable-reader.ts
      symbol: createReplaceableReader
    - scanner: typescript
      file: apps/web/src/lib/core/util/fetchWithToken.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/cookies.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/reloadForNewerBuild.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/interceptMailtoLinks.ts
      symbol: interceptMailtoLinks
    - scanner: typescript
      file: apps/web/src/lib/core/util/platform.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/languageQuery.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/connectivity.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/waitForSignal.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/fuzzy.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/request-error.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/hash.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/result.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/macroAppUrl.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/taskCreation.ts
      symbol: createTaskFromData
    - scanner: typescript
      file: apps/web/src/lib/core/util/rect.ts
      symbol: isInDOMRect
    - scanner: typescript
      file: apps/web/src/lib/core/util/url.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/useSelectedFirst.ts
      symbol: useSelectedFirst
    - scanner: typescript
      file: apps/web/src/lib/core/util/openInNewSplit.ts
      symbol: openInNewSplitForMention
    - scanner: typescript
      file: apps/web/src/lib/core/util/mockClient.ts
      symbol: registerClient
    - scanner: typescript
      file: apps/web/src/lib/core/util/cron.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/useCopyLink.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/channels.ts
      symbol: useSendMessageToPeople
    - scanner: typescript
      file: apps/web/src/lib/core/util/dateSearch/presets.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/imageProxy.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/list.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/duration.ts
      symbol: formatVideoTimestamp
    - scanner: typescript
      file: apps/web/src/lib/core/util/ignorableErrors.ts
      symbol: isIgnorableError
    - scanner: typescript
      file: apps/web/src/lib/core/util/cache.ts
      symbol: cache
    - scanner: typescript
      file: apps/web/src/lib/core/util/message-send-motion.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/upload.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/filePicker.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/currentBlockDocumentName.ts
    - scanner: typescript
      file: apps/web/src/lib/core/util/csv.ts
      symbol: parseCsv
    - scanner: typescript
      file: apps/web/src/lib/core/util/scroll-intent.ts
  technology: SolidJS
  group: Workspace core
description: Calls `callback` once `element` is in the document, under the caller's Solid owner
---

Calls `callback` once `element` is in the document, under the caller's Solid owner. A ref runs before its element is attached, so the solid-primitives version almost always calls back from a ResizeObserver with no owner: `onCleanup` there never runs, and computations created there (including reads of `cond && value` props) are never disposed.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/core/util/dateSearch/useDateSearch.ts](../../../../../../apps/web/src/lib/core/util/dateSearch/useDateSearch.ts) | [apps/web/src/features/routines/components/routine-schedule-settings.tsx](../../../../../../apps/web/src/features/routines/components/routine-schedule-settings.tsx) | Invokes supplied callback: query | typescript |
| [apps/web/src/lib/core/util/useSelectedFirst.ts](../../../../../../apps/web/src/lib/core/util/useSelectedFirst.ts) | [apps/web/src/features/next-soup/soup-view/filters-bar/mobile-filter-drawer.tsx](../../../../../../apps/web/src/features/next-soup/soup-view/filters-bar/mobile-filter-drawer.tsx) | Invokes supplied callback: getId | typescript |
| [apps/web/src/lib/core/util/useSelectedFirst.ts](../../../../../../apps/web/src/lib/core/util/useSelectedFirst.ts) | [apps/web/src/features/next-soup/soup-view/filters-bar/searchable-multi-select.tsx](../../../../../../apps/web/src/features/next-soup/soup-view/filters-bar/searchable-multi-select.tsx) | Invokes supplied callbacks: getId, items | typescript |
| [apps/web/src/lib/core/util/useSelectedFirst.ts](../../../../../../apps/web/src/lib/core/util/useSelectedFirst.ts) | [apps/web/src/features/property/editors/selectors/PropertyEntitySelector.tsx](../../../../../../apps/web/src/features/property/editors/selectors/PropertyEntitySelector.tsx) | Invokes supplied callbacks: getId, searchQuery, selectedIds | typescript |
| [apps/web/src/lib/core/util/useSelectedFirst.ts](../../../../../../apps/web/src/lib/core/util/useSelectedFirst.ts) | [apps/web/src/features/scheduling/components/booking-host-selector.tsx](../../../../../../apps/web/src/features/scheduling/components/booking-host-selector.tsx) | Invokes supplied callbacks: getId, selectedIds | typescript |
| [apps/web/src/lib/core/util/useSelectedFirst.ts](../../../../../../apps/web/src/lib/core/util/useSelectedFirst.ts) | [apps/web/src/features/scheduling/components/insights-host-filter.tsx](../../../../../../apps/web/src/features/scheduling/components/insights-host-filter.tsx) | Invokes supplied callbacks: getId, items, selectedIds | typescript |
| [apps/web/src/lib/core/util/useSelectedFirst.ts](../../../../../../apps/web/src/lib/core/util/useSelectedFirst.ts) | [apps/web/src/features/tasks-view/components/TasksFilterDrawer.tsx](../../../../../../apps/web/src/features/tasks-view/components/TasksFilterDrawer.tsx) | Invokes supplied callbacks: getId, items | typescript |
