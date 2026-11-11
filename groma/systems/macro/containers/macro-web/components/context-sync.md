---
type: C4 Component
title: Context sync
status: stable
groma:
  id: context-sync
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/context-sync.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/backfill.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/reconcile.ts
      symbol: reconcileContactPage
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/use-directory.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/contact-user-id.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/recipient-window.ts
      symbol: createContactRecipientSource
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/refresh.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/context-source.ts
      symbol: createContactContextSource
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/directory.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/lookup-query.ts
      symbol: createContactResolution
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/use-references.ts
      symbol: useContactReferences
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/recipient-source.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/exclusions.ts
      symbol: createContactExclusions
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/filter-source.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/references.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/contact-key.ts
      symbol: contactRecordKey
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/reference-reader.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/alias-window.ts
      symbol: createContactAliasWindow
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/keys.ts
      symbol: contactsKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/reference-query.ts
      symbol: createContactReferenceSource
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/query-epoch.ts
      symbol: createContactQueryEpoch
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/cache-scope.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/directory-query.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/lookup.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/context-facts.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/use-context-publisher.ts
      symbol: useContactContextPublisher
    - scanner: typescript
      file: apps/web/src/lib/queries/contacts/context-publisher.ts
  technology: SolidJS
  group: Data queries
description: Context sync in Data queries.
---

File apps/web/src/lib/queries/contacts/context-sync.ts. It belongs to Data queries, not a separate application.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/contacts/alias-window.ts](../../../../../../apps/web/src/lib/queries/contacts/alias-window.ts) | [apps/web/src/features/crm/record-adapter.ts](../../../../../../apps/web/src/features/crm/record-adapter.ts) | Invokes supplied callbacks: hasMore, loadMore, search | typescript |
| [apps/web/src/lib/queries/contacts/directory-query.ts](../../../../../../apps/web/src/lib/queries/contacts/directory-query.ts) | [apps/web/src/lib/core/context/quickAccess/QuickAccessSource.tsx](../../../../../../apps/web/src/lib/core/context/quickAccess/QuickAccessSource.tsx) | Invokes supplied callback: policy | typescript |
| [apps/web/src/lib/queries/contacts/recipient-window.ts](../../../../../../apps/web/src/lib/queries/contacts/recipient-window.ts) | [apps/web/src/features/email-view/queries/use-email-participant-suggestions.ts](../../../../../../apps/web/src/features/email-view/queries/use-email-participant-suggestions.ts) | Invokes supplied callbacks: includeSelf, search, selfId, senderDomain | typescript |
