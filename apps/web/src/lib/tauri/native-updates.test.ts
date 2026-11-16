import { describe, expect, it, vi } from 'vitest';
import {
  nativeUpdateDescription,
  type NativeUpdateStatus,
} from './native-updates';

vi.mock('@tauri-apps/api/core', () => ({ invoke: vi.fn() }));
vi.mock('@core/component/Toast/Toast', () => ({
  toast: { failure: vi.fn() },
}));

const DISABLED: NativeUpdateStatus = { status: 'Disabled' };
const IDLE: NativeUpdateStatus = { status: 'Idle' };
const READY: NativeUpdateStatus = {
  status: 'Ready',
  data: { version: '2.0.0' },
};
const CHECKING: NativeUpdateStatus = { status: 'Checking' };
const DOWNLOADING: NativeUpdateStatus = {
  status: 'Downloading',
  data: { version: '2.0.0' },
};
const INSTALLING: NativeUpdateStatus = { status: 'Installing' };
const FAILED: NativeUpdateStatus = {
  status: 'Error',
  data: { message: 'Could not reach the update server.' },
};

describe('native update descriptions', () => {
  it('names Rox when it explains how app updates arrive', () => {
    expect(nativeUpdateDescription(DISABLED)).toBe(
      'Download the latest Rox app to update.'
    );
    expect(nativeUpdateDescription(IDLE)).toBe(
      'Rox checks for app updates automatically.'
    );
    expect(nativeUpdateDescription(READY)).toBe(
      'An app update is ready. It will install when you quit Rox.'
    );
  });

  it('keeps progress and server messages as they are', () => {
    expect(nativeUpdateDescription(CHECKING)).toBe(
      'Checking for an app update…'
    );
    expect(nativeUpdateDescription(DOWNLOADING)).toBe(
      'Downloading an app update…'
    );
    expect(nativeUpdateDescription(INSTALLING)).toBe(
      'Installing the app update…'
    );
    expect(nativeUpdateDescription(FAILED)).toBe(
      'Could not reach the update server.'
    );
  });
});
