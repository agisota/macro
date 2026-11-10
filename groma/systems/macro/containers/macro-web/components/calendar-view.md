---
type: C4 Component
title: Calendar view
status: stable
groma:
  id: calendar-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/calendar-view/calendar-view.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar-view/copy-guest-emails.ts
      symbol: copyGuestEmails
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/use-forward-event-email.ts
      symbol: useForwardEventEmail
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/ConnectCalendarsPromotion.tsx
      symbol: ConnectCalendarsPromotion
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/Header.tsx
      symbol: Header
    - scanner: typescript
      file: apps/web/src/features/calendar-view/calendar-target.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/EventRsvpSection.tsx
      symbol: EventRsvpSection
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/use-open-event-composer.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/focus-new-composer.ts
      symbol: focusNewComposerTo
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/SyncStatus.tsx
      symbol: SyncStatus
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/EventGuests.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/Page.tsx
      symbol: Page
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/CalendarLoadingSkeleton.tsx
      symbol: CalendarLoadingSkeleton
    - scanner: typescript
      file: apps/web/src/features/calendar-view/calendar-navigation.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/use-open-event-email.ts
      symbol: useOpenEventEmail
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/CalendarSidebar.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/Workspace.tsx
      symbol: Workspace
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/SetupStatus.tsx
      symbol: SetupStatus
    - scanner: typescript
      file: apps/web/src/features/calendar-view/open-calendar-event.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/copy-event-mention.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/calendar-focus-target.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/tour.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/CalendarPeopleFilterSubmenu.tsx
      symbol: CalendarPeopleFilterSubmenu
    - scanner: typescript
      file: apps/web/src/features/calendar-view/calendar-target-request.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/AddToCalendarButton.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/SelectedEventDetails.tsx
      symbol: SelectedEventDetails
    - scanner: typescript
      file: apps/web/src/features/calendar-view/download-event-ics.ts
      symbol: downloadCalendarEventIcs
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/CalendarCreateMenu.tsx
      symbol: CalendarCreateMenu
    - scanner: typescript
      file: apps/web/src/features/calendar-view/route-views.tsx
      symbol: CalendarRouteView
    - scanner: typescript
      file: apps/web/src/features/calendar-view/mention-open-target.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/calendar-range.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/SharedEventActions.tsx
      symbol: SharedEventActions
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/CalendarSearch.tsx
      symbol: CalendarSearch
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/CalendarCreateItems.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar-view/calendar-view-skeleton.tsx
      symbol: CalendarViewSkeleton
    - scanner: typescript
      file: apps/web/src/features/calendar-view/calendar-url.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/EventJoinRequests.tsx
      symbol: EventJoinRequests
    - scanner: typescript
      file: apps/web/src/features/calendar-view/calendar-call-sidebar.tsx
      symbol: CalendarCallSidebar
    - scanner: typescript
      file: apps/web/src/features/calendar-view/types.ts
    - scanner: typescript
      file: apps/web/src/features/calendar-view/calendar-only-search-filters.ts
      symbol: CALENDAR_ONLY_SEARCH_FILTERS
    - scanner: typescript
      file: apps/web/src/features/calendar-view/components/CalendarSearchFilters.tsx
  technology: SolidJS
  group: Calendar
description: Calendar grid, period URL, and event focus.
---

`CalendarView` takes the route it is mounted under so period changes navigate inside it. It reads occurrences, marks entity notifications read, and redirects when the calendar UI flag is off. `CalendarRouteView` lazy-loads this feature (`lazy-route-views.ts:38-40`). Home lazy-loads `CalendarView` only when Home's calendar route opens (`home/home-view.tsx:35-38`).
