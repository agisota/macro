---
type: C4 Component
title: Calendar
status: stable
groma:
  id: calendarviewcontext
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/calendar/components/CalendarViewContext.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/primitives/create-event-replacement.ts
      symbol: createEventReplacement
    - scanner: typescript
      file: apps/web/src/features/calendar/components/CalendarGrid.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/calendar-description-sanitizer.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/macro-call-link.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/create-calendar-rsvp-controller.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/open-event-outside-press.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/RecurrenceBuilder.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-team-ooo.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/views/event-replacement.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/calendar-date.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/availability/use-availability-ranges.ts
      symbol: useAvailabilityRanges
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-calendar-occurrence-data.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/EventDetails.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/guest-options.ts
      symbol: eventGuestOptions
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/create-calendar-event-form-controller.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/EventContent.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-time-grid-opening-scroll.ts
      symbol: useTimeGridOpeningScroll
    - scanner: typescript
      file: apps/web/src/features/calendar/components/RangeUnavailableBanner.tsx
      symbol: RangeUnavailableBanner
    - scanner: typescript
      file: apps/web/src/features/calendar/components/CalendarPagerContext.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/calendar-label.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/availability/settings.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/fullcalendar-multi-day-selection.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/time-grid-scroller.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/EventTitleInput.tsx
      symbol: EventTitleInput
    - scanner: typescript
      file: apps/web/src/features/calendar/availability/CopyAvailabilityButton.tsx
      symbol: CopyAvailabilityButton
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/event-attribution.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/event-reminders.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-calendar-time-grid-hover-indicator.ts
      symbol: useCalendarTimeGridHoverIndicator
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-calendar-hotkeys.ts
      symbol: useCalendarHotkeys
    - scanner: typescript
      file: apps/web/src/features/calendar/components/CalendarEmbed.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/event-forward-summary.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/recurrence.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-synced-calendar-event.ts
      symbol: useSyncedCalendarEvent
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/MobileEventForm.tsx
      symbol: MobileEventForm
    - scanner: typescript
      file: apps/web/src/features/calendar/components/PeriodSelector.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/event-guest-editing.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/MonthDrawer.tsx
      symbol: MonthDrawer
    - scanner: typescript
      file: apps/web/src/features/calendar/calendar-settings.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/primitives/create-calendar-loading-transition.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-event-editor.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/EventReplacementDialog.tsx
      symbol: EventReplacementDialog
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/create-guest-invite-controller.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/EventRsvpScopeDialog.tsx
      symbol: EventRsvpScopeDialog
    - scanner: typescript
      file: apps/web/src/features/calendar/components/CalendarSettingsDropdown.tsx
      symbol: CalendarSettingsDropdown
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/event-form-parts.tsx
      symbol: EventFormParts
    - scanner: typescript
      file: apps/web/src/features/calendar/context/event-replacement-source.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/event-location.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/next-meeting-countdown-setting.tsx
      symbol: NextMeetingCountdownSetting
    - scanner: typescript
      file: apps/web/src/features/calendar/availability/zone-label.ts
      symbol: rangeTimeZoneLabel
    - scanner: typescript
      file: apps/web/src/features/calendar/components/SourceControls.tsx
      symbol: SourceControls
    - scanner: typescript
      file: apps/web/src/features/calendar/components/connected-calendars.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/conference-link.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/EventGuestPolicyRow.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/EventPropertyPills.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/calendar-description.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-calendar-sources.ts
      symbol: useCalendarSources
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/calendar-source-groups.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/calendar-supported-range.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/EventGuestsEditor.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/event-form-model.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/out-of-office.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/calendar-color-picker.tsx
      symbol: CalendarColorPicker
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/EventComposerPopoverPortal.tsx
      symbol: EventComposerPopoverPortal
    - scanner: typescript
      file: apps/web/src/features/calendar/core/calendar-color.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/event-form-state.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-calendar-ui-flag.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/preferences.ts
      symbol: useCalendarPreferences
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/guest-emails.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/core/event-replacement.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/working-location-events.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/event-schedule.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/queries/event-replacement-source.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/event-interaction.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/utils/time-format.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/types.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/EventForm.tsx
      symbol: EventForm
    - scanner: typescript
      file: apps/web/src/features/calendar/availability/availability.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-calendar-connected-inboxes.ts
      symbol: useCalendarConnectedInboxes
    - scanner: typescript
      file: apps/web/src/features/calendar/availability/CopyAvailabilityDialog.tsx
      symbol: CopyAvailabilityDialog
    - scanner: typescript
      file: apps/web/src/features/calendar/components/composer/EventDateField.tsx
      symbol: EventDateField
    - scanner: typescript
      file: apps/web/src/features/calendar/calendar-preferences.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/TurnOffCalendarDialog.tsx
    - scanner: typescript
      file: apps/web/src/features/calendar/hooks/use-calendar-accounts.ts
    - scanner: typescript
      file: apps/web/src/features/calendar/components/CalendarGridSkeleton.tsx
      symbol: CalendarGridSkeleton
  technology: SolidJS
  group: Calendar
description: Calendar account settings, sources, and preferences.
---

`calendar-settings.tsx` lists connected accounts, a next-meeting countdown, and a turn-off dialog. It imports `CalendarTeamSettings` from `calendar-team` and uses `useAddInboxFlow` when multi-inbox is on. `block-calendar` imports `CalendarViewContextProvider` and range helpers from this feature (`block-calendar/CalendarBlockAdapter.tsx:1-3`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/calendar/calendar-settings.tsx](../../../../../../apps/web/src/features/calendar/calendar-settings.tsx) | [apps/web/src/features/calendar-team/calendar-team.tsx](../../../../../../apps/web/src/features/calendar-team/calendar-team.tsx) | mounts team calendar settings | component import |

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/calendar/components/composer/create-calendar-event-form-controller.ts](../../../../../../apps/web/src/features/calendar/components/composer/create-calendar-event-form-controller.ts) | [apps/web/src/lib/core/component/AI/component/tool/calendar/DraftComposer.tsx](../../../../../../apps/web/src/lib/core/component/AI/component/tool/calendar/DraftComposer.tsx) | Invokes supplied callback: onChange | typescript |
| [apps/web/src/features/calendar/components/composer/event-form-model.ts](../../../../../../apps/web/src/features/calendar/components/composer/event-form-model.ts) | [apps/web/src/features/universal-input/views/calendar-draft.tsx](../../../../../../apps/web/src/features/universal-input/views/calendar-draft.tsx) | Invokes supplied callback: state | typescript |
| [apps/web/src/features/calendar/hooks/use-calendar-occurrence-data.ts](../../../../../../apps/web/src/features/calendar/hooks/use-calendar-occurrence-data.ts) | [apps/web/src/features/calendar-view/components/Page.tsx](../../../../../../apps/web/src/features/calendar-view/components/Page.tsx) | Invokes supplied callback: queryOptions | typescript |
| [apps/web/src/features/calendar/hooks/use-event-editor.ts](../../../../../../apps/web/src/features/calendar/hooks/use-event-editor.ts) | [apps/web/src/features/block-calendar/components/EventComposerSplit.tsx](../../../../../../apps/web/src/features/block-calendar/components/EventComposerSplit.tsx) | Invokes supplied callbacks: event, onCreated, onDetailsLocked, onSaved | typescript |
| [apps/web/src/features/calendar/hooks/use-team-ooo.ts](../../../../../../apps/web/src/features/calendar/hooks/use-team-ooo.ts) | [apps/web/src/features/calendar-view/components/Page.tsx](../../../../../../apps/web/src/features/calendar-view/components/Page.tsx) | Invokes supplied callbacks: isSourceVisible, refetchOnWindowFocus | typescript |
