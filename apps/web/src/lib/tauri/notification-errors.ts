// Keep the existing class name for callers; both desktop senders use this error.
export class MacOSNotificationUpdateRequiredError extends Error {
  constructor(cause: unknown) {
    super('Update Rox to receive desktop notifications.', { cause });
    this.name = 'MacOSNotificationUpdateRequiredError';
  }
}
