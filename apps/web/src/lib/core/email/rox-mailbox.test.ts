import { beforeEach, describe, expect, it } from 'vitest';
import {
  emptyRoxMailboxPreferences,
  readRoxMailboxPreferences,
  roxMailboxStorageKey,
  writeRoxMailboxPreferences,
} from './rox-mailbox';

beforeEach(() => {
  const store = new Map<string, string>();
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
      removeItem: (key: string) => {
        store.delete(key);
      },
      clear: () => store.clear(),
    },
  });
});

describe('Rox mailbox preferences', () => {
  it('stores tags, rules, forwarding, and the channel copy without a password field', () => {
    writeRoxMailboxPreferences('link-1', {
      ...emptyRoxMailboxPreferences(),
      tags: ['news'],
      rules: [{ from: 'news@example.com', tag: 'news' }],
      forwardEnabled: true,
      forwardTo: 'other@example.com',
      copyEnabled: true,
      channelId: 'channel-1',
    });

    const stored = readRoxMailboxPreferences('link-1');
    expect(stored.tags).toEqual(['news']);
    expect(stored.rules).toEqual([{ from: 'news@example.com', tag: 'news' }]);
    expect(stored.forwardEnabled).toBe(true);
    expect(stored.copyEnabled).toBe(true);
    expect(stored.channelId).toBe('channel-1');
    expect(roxMailboxStorageKey('link-1')).toBe(
      'rox-mailbox-preferences:link-1'
    );
    expect(localStorage.getItem(roxMailboxStorageKey('link-1'))).not.toMatch(
      /password|token/i
    );
  });

  it('drops a broken record instead of throwing', () => {
    localStorage.setItem(roxMailboxStorageKey('link-2'), '{');
    expect(readRoxMailboxPreferences('link-2')).toEqual(
      emptyRoxMailboxPreferences()
    );
  });
});
