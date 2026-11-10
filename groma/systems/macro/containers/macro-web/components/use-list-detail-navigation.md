---
type: C4 Component
title: Use list detail navigation
status: stable
groma:
  id: use-list-detail-navigation
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/list/use-list-detail-navigation.ts
  technology: SolidJS
description: Where the open entity sat when it was opened. Next and previous step from there even after it moves (a reply draft lifts a thread to the top of Signal) or leave
---

Where the open entity sat when it was opened. Next and previous step from there even after it moves (a reply draft lifts a thread to the top of Signal) or leaves the list (a reply marks it done, another device archives it).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/list/use-list-detail-navigation.ts](../../../../../../apps/web/src/components/list/use-list-detail-navigation.ts) | [apps/web/src/features/email-view/components/EmailDetailView.tsx](../../../../../../apps/web/src/features/email-view/components/EmailDetailView.tsx) | Invokes supplied callback: currentId | typescript |
| [apps/web/src/components/list/use-list-detail-navigation.ts](../../../../../../apps/web/src/components/list/use-list-detail-navigation.ts) | [apps/web/src/features/email-view/use-email-detail-list-navigation.ts](../../../../../../apps/web/src/features/email-view/use-email-detail-list-navigation.ts) | Invokes supplied callbacks: getContinuation, getEntity, onError, open | typescript |
| [apps/web/src/components/list/use-list-detail-navigation.ts](../../../../../../apps/web/src/components/list/use-list-detail-navigation.ts) | [apps/web/src/features/tasks-view/components/TasksDetailView.tsx](../../../../../../apps/web/src/features/tasks-view/components/TasksDetailView.tsx) | Invokes supplied callbacks: currentId, getContinuation, getEntity, onError, open | typescript |
