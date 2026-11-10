---
type: C4 Component
title: service calendar
status: stable
groma:
  id: invitecalendareventguestsrequest
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/inviteCalendarEventGuestsRequest.ts
      symbol: InviteCalendarEventGuestsRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestScope.ts
      symbol: UpdateCalendarEventRequestScope
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/receiptResponse.ts
      symbol: ReceiptResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventTimeOneOfTimeZone.ts
      symbol: EventTimeOneOfTimeZone
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/availabilityCalendarsResponse.ts
      symbol: AvailabilityCalendarsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventLocation.ts
      symbol: CalendarEventLocation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestTitle.ts
      symbol: UpdateCalendarEventRequestTitle
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/outOfOfficeAutoDeclineMode.ts
      symbol: OutOfOfficeAutoDeclineMode
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarMutationApiError.ts
      symbol: CalendarMutationApiError
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/profileResponse.ts
      symbol: ProfileResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestEmailLinkId.ts
      symbol: CreateCalendarEventRequestEmailLinkId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventTransparency.ts
      symbol: EventTransparency
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/inviteCalendarEventGuestsRequestCalendarId.ts
      symbol: InviteCalendarEventGuestsRequestCalendarId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingRescheduledAt.ts
      symbol: BookingRescheduledAt
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/refreshCalendarEventOneOfThree.ts
      symbol: RefreshCalendarEventOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/visibleCalendar.ts
      symbol: VisibleCalendar
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/booking.ts
      symbol: Booking
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/guestPolicy.ts
      symbol: GuestPolicy
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/rsvpCalendarEventRequestScope.ts
      symbol: RsvpCalendarEventRequestScope
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventDescription.ts
      symbol: CalendarEventDescription
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingChangeOneOfFive.ts
      symbol: BookingChangeOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventSourceContent.ts
      symbol: CalendarEventSourceContent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingLinkEventDailyLimit.ts
      symbol: BookingLinkEventDailyLimit
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarReplacementViewProviderUrl.ts
      symbol: CalendarReplacementViewProviderUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarJoinRequestDecision.ts
      symbol: CalendarJoinRequestDecision
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestTransparency.ts
      symbol: UpdateCalendarEventRequestTransparency
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestDescription.ts
      symbol: UpdateCalendarEventRequestDescription
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestVisibility.ts
      symbol: CreateCalendarEventRequestVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/copyCalendarEventRequest.ts
      symbol: CopyCalendarEventRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventCalendarId.ts
      symbol: CalendarEventCalendarId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingProfileDefaultScheduleId.ts
      symbol: BookingProfileDefaultScheduleId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarAttendee.ts
      symbol: CalendarAttendee
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/refreshCalendarEventOneOfEvent.ts
      symbol: RefreshCalendarEventOneOfEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestRecurrenceLines.ts
      symbol: UpdateCalendarEventRequestRecurrenceLines
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/rsvpCalendarEventRequestCalendarId.ts
      symbol: RsvpCalendarEventRequestCalendarId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestGuestPolicy.ts
      symbol: CreateCalendarEventRequestGuestPolicy
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEvent.ts
      symbol: CalendarEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/respondToJoinRequestRequest.ts
      symbol: RespondToJoinRequestRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/viewerCapabilities.ts
      symbol: ViewerCapabilities
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/editBookingLinkParams.ts
      symbol: EditBookingLinkParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/listBookingsParams.ts
      symbol: ListBookingsParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/conferenceChange.ts
      symbol: ConferenceChange
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestReminders.ts
      symbol: UpdateCalendarEventRequestReminders
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/insightQueryHostId.ts
      symbol: InsightQueryHostId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/availabilityCalendar.ts
      symbol: AvailabilityCalendar
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarDeletionScopeParam.ts
      symbol: CalendarDeletionScopeParam
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestAttendees.ts
      symbol: UpdateCalendarEventRequestAttendees
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingAnswers.ts
      symbol: BookingAnswers
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/insightQueryEventTypeId.ts
      symbol: InsightQueryEventTypeId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingQuestion.ts
      symbol: BookingQuestion
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingChangeOneOfAction.ts
      symbol: BookingChangeOneOfAction
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingChangeOneOfSeven.ts
      symbol: BookingChangeOneOfSeven
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/refreshCalendarEventOneOfThreeEvent.ts
      symbol: RefreshCalendarEventOneOfThreeEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/inviteCalendarEventGuestsRequestRecurrenceId.ts
      symbol: InviteCalendarEventGuestsRequestRecurrenceId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestLocation.ts
      symbol: UpdateCalendarEventRequestLocation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestInbox.ts
      symbol: UpdateCalendarEventRequestInbox
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventSourceContentLocation.ts
      symbol: CalendarEventSourceContentLocation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingLinkDraft.ts
      symbol: BookingLinkDraft
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingResponse.ts
      symbol: BookingResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/getBookingSettingsParams.ts
      symbol: GetBookingSettingsParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventOrganizerName.ts
      symbol: CalendarEventOrganizerName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/schedulingMode.ts
      symbol: SchedulingMode
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/refreshCalendarEventOneOfFive.ts
      symbol: RefreshCalendarEventOneOfFive
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/saveBookingSettingsParams.ts
      symbol: SaveBookingSettingsParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/visibleCalendarSyncError.ts
      symbol: VisibleCalendarSyncError
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventCreatorEmail.ts
      symbol: CalendarEventCreatorEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventCreatorName.ts
      symbol: CalendarEventCreatorName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestConference.ts
      symbol: CreateCalendarEventRequestConference
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestRecurrenceId.ts
      symbol: UpdateCalendarEventRequestRecurrenceId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarGuestInputBody.ts
      symbol: CalendarGuestInputBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingTimeWindow.ts
      symbol: BookingTimeWindow
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/refreshCalendarEvent.ts
      symbol: RefreshCalendarEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/refreshCalendarEventOneOfFiveEvent.ts
      symbol: RefreshCalendarEventOneOfFiveEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarJoinRequestStatus.ts
      symbol: CalendarJoinRequestStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestOutOfOffice.ts
      symbol: CreateCalendarEventRequestOutOfOffice
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/attendeeResponseStatus.ts
      symbol: AttendeeResponseStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingLinkSchedule.ts
      symbol: BookingLinkSchedule
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/conferenceProvider.ts
      symbol: ConferenceProvider
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarRsvpScopeParam.ts
      symbol: CalendarRsvpScopeParam
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestCalendarId.ts
      symbol: UpdateCalendarEventRequestCalendarId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/listBookingLinksParams.ts
      symbol: ListBookingLinksParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestLocation.ts
      symbol: CreateCalendarEventRequestLocation
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingEventType.ts
      symbol: BookingEventType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/teamCalendarSharingBody.ts
      symbol: TeamCalendarSharingBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventVisibility.ts
      symbol: EventVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequest.ts
      symbol: CreateCalendarEventRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestCalendarId.ts
      symbol: CreateCalendarEventRequestCalendarId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingChangeOneOf.ts
      symbol: BookingChangeOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarJoinRequest.ts
      symbol: CalendarJoinRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/insightPeriodDays.ts
      symbol: InsightPeriodDays
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarReplacementViewReplacementUrl.ts
      symbol: CalendarReplacementViewReplacementUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventTimeOneOfKind.ts
      symbol: EventTimeOneOfKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingProfile.ts
      symbol: BookingProfile
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarUpdateScopeParam.ts
      symbol: CalendarUpdateScopeParam
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingChangeOneOfThreeAction.ts
      symbol: BookingChangeOneOfThreeAction
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/index.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/refreshCalendarEventOneOf.ts
      symbol: RefreshCalendarEventOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingsResponse.ts
      symbol: BookingsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventProviderUrlParams.ts
      symbol: CalendarEventProviderUrlParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingChangeOneOfFiveAction.ts
      symbol: BookingChangeOneOfFiveAction
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingAttendance.ts
      symbol: BookingAttendance
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestConference.ts
      symbol: UpdateCalendarEventRequestConference
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/inviteCalendarEventGuestsRequestInbox.ts
      symbol: InviteCalendarEventGuestsRequestInbox
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingChangeOneOfSevenAction.ts
      symbol: BookingChangeOneOfSevenAction
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/insightPeriod.ts
      symbol: InsightPeriod
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/client.ts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/rsvpCalendarEventRequestRespondingEmail.ts
      symbol: RsvpCalendarEventRequestRespondingEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarCapabilities.ts
      symbol: CalendarCapabilities
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestIdempotencyKey.ts
      symbol: CreateCalendarEventRequestIdempotencyKey
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventProviderUrl.ts
      symbol: CalendarEventProviderUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/editBookingLinkRequest.ts
      symbol: EditBookingLinkRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestReminders.ts
      symbol: CreateCalendarEventRequestReminders
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/visibleCalendarColor.ts
      symbol: VisibleCalendarColor
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingSlot.ts
      symbol: BookingSlot
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/outOfOfficeProperties.ts
      symbol: OutOfOfficeProperties
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarMutationErrorCode.ts
      symbol: CalendarMutationErrorCode
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestTransparency.ts
      symbol: CreateCalendarEventRequestTransparency
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/availabilityCalendarBody.ts
      symbol: AvailabilityCalendarBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingEventTypeDailyLimit.ts
      symbol: BookingEventTypeDailyLimit
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventTimeOneOf.ts
      symbol: EventTimeOneOf
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarProvider.ts
      symbol: CalendarProvider
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventOrganizerEmail.ts
      symbol: CalendarEventOrganizerEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingLinkEvent.ts
      symbol: BookingLinkEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/rsvpCalendarEventRequest.ts
      symbol: RsvpCalendarEventRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventType.ts
      symbol: EventType
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/teamCalendarSharing.ts
      symbol: TeamCalendarSharing
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/rsvpCalendarEventRequestRecurrenceId.ts
      symbol: RsvpCalendarEventRequestRecurrenceId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarAttendeeInputBody.ts
      symbol: CalendarAttendeeInputBody
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/insightPeriodHostCounts.ts
      symbol: InsightPeriodHostCounts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventConferenceUrl.ts
      symbol: CalendarEventConferenceUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestOutOfOffice.ts
      symbol: UpdateCalendarEventRequestOutOfOffice
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarReplacementView.ts
      symbol: CalendarReplacementView
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/insightQuery.ts
      symbol: InsightQuery
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/listBookingRescheduleSlotsParams.ts
      symbol: ListBookingRescheduleSlotsParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventSourceContentCreatorEmail.ts
      symbol: CalendarEventSourceContentCreatorEmail
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/listCalendarsResponse.ts
      symbol: ListCalendarsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventSourceContentCreatorName.ts
      symbol: CalendarEventSourceContentCreatorName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingDateOverride.ts
      symbol: BookingDateOverride
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingStatus.ts
      symbol: BookingStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarAttendeeComment.ts
      symbol: CalendarAttendeeComment
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/prepareCalendarReplacementRequestRecurrenceId.ts
      symbol: PrepareCalendarReplacementRequestRecurrenceId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventConferenceProvider.ts
      symbol: CalendarEventConferenceProvider
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestVisibility.ts
      symbol: UpdateCalendarEventRequestVisibility
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingLink.ts
      symbol: BookingLink
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/inviteCalendarEventGuestsRequestScope.ts
      symbol: InviteCalendarEventGuestsRequestScope
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/prepareCalendarReplacementRequest.ts
      symbol: PrepareCalendarReplacementRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventTimeOneOfFourKind.ts
      symbol: EventTimeOneOfFourKind
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/insightPeriodEventCounts.ts
      symbol: InsightPeriodEventCounts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createBookingLinkParams.ts
      symbol: CreateBookingLinkParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingQuestionLabels.ts
      symbol: BookingQuestionLabels
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventStatus.ts
      symbol: EventStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventTime.ts
      symbol: EventTime
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventProviderUrlUrl.ts
      symbol: CalendarEventProviderUrlUrl
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingChangeOneOfThree.ts
      symbol: BookingChangeOneOfThree
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingChange.ts
      symbol: BookingChange
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/getBookingInsightsParams.ts
      symbol: GetBookingInsightsParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventTimeOneOfFour.ts
      symbol: EventTimeOneOfFour
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarReplacementViewEvent.ts
      symbol: CalendarReplacementViewEvent
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createBookingLinkRequest.ts
      symbol: CreateBookingLinkRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarAttendeeDisplayName.ts
      symbol: CalendarAttendeeDisplayName
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/slotsResponse.ts
      symbol: SlotsResponse
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/insightCounts.ts
      symbol: InsightCounts
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/copyCalendarEventRequestCalendarId.ts
      symbol: CopyCalendarEventRequestCalendarId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingInsights.ts
      symbol: BookingInsights
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/outOfOfficePropertiesDeclineMessage.ts
      symbol: OutOfOfficePropertiesDeclineMessage
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventReminders.ts
      symbol: EventReminders
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/eventReminderOverride.ts
      symbol: EventReminderOverride
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/createCalendarEventRequestDescription.ts
      symbol: CreateCalendarEventRequestDescription
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarEventSourceContentDescription.ts
      symbol: CalendarEventSourceContentDescription
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingSchedule.ts
      symbol: BookingSchedule
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingLinkListing.ts
      symbol: BookingLinkListing
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/calendarCapabilitiesConferenceProvider.ts
      symbol: CalendarCapabilitiesConferenceProvider
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/deleteCalendarEventParams.ts
      symbol: DeleteCalendarEventParams
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequest.ts
      symbol: UpdateCalendarEventRequest
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestGuestPolicy.ts
      symbol: UpdateCalendarEventRequestGuestPolicy
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/replacementStatus.ts
      symbol: ReplacementStatus
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/prepareCalendarReplacementRequestCalendarId.ts
      symbol: PrepareCalendarReplacementRequestCalendarId
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/bookingWeeklyDay.ts
      symbol: BookingWeeklyDay
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-calendar/generated/schemas/updateCalendarEventRequestTime.ts
      symbol: UpdateCalendarEventRequestTime
  technology: TypeScript
description: Client for the service calendar host
---

Generated by orval v7.21.0 🍺 Do not edit manually. calendar_service OpenAPI spec version: 0.1.0
