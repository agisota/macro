import { beforeEach, describe, expect, it } from 'vitest';
import {
  nativeUpdateRequired,
  requireNativeUpdate,
  resetNativeUpdateRequiredForTests,
} from './nativeUpdateRequired';

describe('requireNativeUpdate', () => {
  beforeEach(() => {
    resetNativeUpdateRequiredForTests();
  });

  it('keeps the first reason, so the request is shown once', () => {
    expect(nativeUpdateRequired()).toBeUndefined();

    requireNativeUpdate('Update Rox to use the local cache.');
    requireNativeUpdate('Update Rox to sync drafts.');

    expect(nativeUpdateRequired()).toBe('Update Rox to use the local cache.');
  });
});
