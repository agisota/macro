---
type: C4 Component
title: Scheduling scheduling
status: stable
groma:
  id: scheduling-scheduling
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/scheduling/scheduling.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/availability-calendar.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/booking-rule-timeline.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/insight-chart-options.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-field-info.tsx
      symbol: BookingFieldInfo
    - scanner: typescript
      file: apps/web/src/features/scheduling/primitives/insights-state.ts
      symbol: createInsightsState
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-picker.tsx
      symbol: BookingPicker
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/insight-host-options.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/scheduling-mobile-header.tsx
      symbol: SchedulingMobileHeader
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/scheduling-filters.tsx
      symbol: SchedulingFilters
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/event-review.tsx
      symbol: EventReview
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-details-dialog.tsx
      symbol: BookingDetailsDialog
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/event-details-view.tsx
      symbol: EventDetailsDialog
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/fields.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/insights-panel.tsx
      symbol: InsightsPanel
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/insight-plot.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/public-booking-view.tsx
      symbol: PublicBookingView
    - scanner: typescript
      file: apps/web/src/features/scheduling/queries/keys.ts
      symbol: schedulingKeys
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/schedule-fields-view.tsx
      symbol: ScheduleFields
    - scanner: typescript
      file: apps/web/src/features/scheduling/queries/agent-sync.ts
      symbol: refreshBookingLinkResult
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/availability-bars.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/availability-hours-summary.tsx
      symbol: AvailabilityHoursSummary
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/bookings-panel.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/availability-hours-editor.tsx
      symbol: AvailabilityHoursEditor
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/availability-type-picker.tsx
      symbol: AvailabilityTypePicker
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/event-editor-view.tsx
      symbol: EventEditor
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/availability-general-details.tsx
      symbol: AvailabilityScheduleTitle
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/public-booking-layout.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/booking-notice.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/availability-summary.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/scheduling-filter-section.tsx
      symbol: SchedulingFilterSection
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/slider-pointer-intent.ts
      symbol: createSliderPointerIntent
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/bookings-view.tsx
      symbol: BookingsView
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-rule-sliders.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/booking-agent.ts
      symbol: bookingLinkAgentSeed
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/booking-workspace-view.tsx
      symbol: BookingWorkspaceView
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-card.tsx
      symbol: BookingCard
    - scanner: typescript
      file: apps/web/src/features/scheduling/queries/source.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/insights-view.tsx
      symbol: InsightsView
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/insights.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/owner-settings-section.tsx
      symbol: OwnerSettingsSection
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/booking-receipt-view.tsx
      symbol: BookingReceiptView
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/event-types-panel.tsx
      symbol: EventTypesPanel
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/insights-host-avatar.tsx
      symbol: InsightsHostAvatar
    - scanner: typescript
      file: apps/web/src/features/scheduling/context/scheduling-context.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/availability-month.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-page-editor.tsx
      symbol: BookingPageEditor
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/availability-month-picker.tsx
      symbol: AvailabilityMonthPicker
    - scanner: typescript
      file: apps/web/src/features/scheduling/primitives/create-availability-rules.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/route-views.tsx
      symbol: BookingLinksRouteView
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-page-leave-dialog.tsx
      symbol: BookingPageLeaveDialog
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-value-input.tsx
      symbol: BookingValueInput
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-value-slider.tsx
      symbol: BookingValueSlider
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/types.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/TimezoneSelect.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/availability.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-range.tsx
      symbol: BookingRange
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/owner-badge.tsx
      symbol: OwnerBadge
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/availability-selection.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/availability-exception-dialog.tsx
      symbol: AvailabilityExceptionDialog
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-rules.tsx
      symbol: BookingRules
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/availability-panel.tsx
      symbol: AvailabilityPanel
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/event-editor-progress.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-host-selector.tsx
      symbol: BookingHostSelector
    - scanner: typescript
      file: apps/web/src/features/scheduling/primitives/create-scheduling-owner.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/booking-links-search.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/availability-field-row.tsx
      symbol: AvailabilityFieldRow
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/booking-list.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/vitest.config.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/insights-host-filter.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-rule-timeline.tsx
      symbol: BookingRuleTimeline
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/event-editor.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/primitives/create-event-editor.ts
      symbol: createEventEditor
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/availability-topbar.tsx
      symbol: AvailabilityTopBar
    - scanner: typescript
      file: apps/web/src/features/scheduling/primitives/create-booking-page-leave.ts
      symbol: createBookingPageLeave
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/public-booking-profile.tsx
      symbol: PublicBookingProfile
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/insight-outcomes.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/event-editor.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/reschedule-form.tsx
      symbol: RescheduleForm
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-duration-input.tsx
      symbol: BookingDurationInput
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/event-outcomes-chart.tsx
      symbol: EventOutcomesChart
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-time-input.tsx
      symbol: BookingTimeInput
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/booking-error.ts
      symbol: BookingRejectedError
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/insights-range-selector.tsx
      symbol: InsightsRangeSelector
    - scanner: typescript
      file: apps/web/src/features/scheduling/calendar-actions.tsx
      symbol: CalendarSchedulingActions
    - scanner: typescript
      file: apps/web/src/features/scheduling/core/booking-units.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/scheduling-drawer-header.tsx
      symbol: SchedulingDrawerHeader
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/bookings-date-range.tsx
      symbol: BookingsDateRange
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/schedule-editor.tsx
      symbol: ScheduleEditorForm
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-status.tsx
      symbol: BookingStatus
    - scanner: typescript
      file: apps/web/src/features/scheduling/views/schedule-editor-view.tsx
      symbol: ScheduleEditor
    - scanner: typescript
      file: apps/web/src/features/scheduling/primitives/booking-flow.ts
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/booking-rule-value.tsx
    - scanner: typescript
      file: apps/web/src/features/scheduling/components/weekly-hours-summary.tsx
      symbol: WeeklyHoursSummary
    - scanner: typescript
      file: apps/web/src/features/scheduling/primitives/create-bookings-view.ts
      symbol: createBookingsView
  technology: SolidJS
  group: Calendar
description: Scheduling links and public booking host data.
---

`scheduling.tsx` builds a public link from a profile id and optional slug, and can open an agent chat via `openChatWithInput`. `BookingLinksRouteView` lazy-loads from this feature (`app-router-view.tsx:207-209`). Public booking and receipt routes use `FocusedShell`, not `AppShell` (`app-router-view.tsx:259-267`). The public page component itself is imported from `routes/pages`, which was not opened.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/scheduling/scheduling.tsx](../../../../../../apps/web/src/features/scheduling/scheduling.tsx) | [apps/web/src/features/chat/ChatWithAgentButton.tsx](../../../../../../apps/web/src/features/chat/ChatWithAgentButton.tsx) | opens chat with input | function import |
