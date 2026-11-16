import {
  isAllowedHandle,
  mailboxAddress,
  ROX_MAIL_DOMAIN,
} from '@core/constant/mailbox-handle';

export { ROX_MAIL_DOMAIN, isAllowedHandle, mailboxAddress };

/** Folders of the first-party mailbox. Inbox stays the default. */
export const ROX_MAILBOX_FOLDERS = [
  {
    id: 'inbox',
    name: 'Inbox',
    detail: 'Default folder. Incoming mail stays here.',
  },
  { id: 'sent', name: 'Sent', detail: 'Mail sent from this mailbox.' },
  { id: 'drafts', name: 'Drafts', detail: 'Messages that have not been sent.' },
  { id: 'archive', name: 'Archive', detail: 'Mail filed out of the inbox.' },
] as const;

export type RoxMailboxRule = { from: string; tag: string };

/** Screen settings for one Rox mailbox. Never holds a password or token. */
export type RoxMailboxPreferences = {
  tags: string[];
  rules: RoxMailboxRule[];
  forwardEnabled: boolean;
  forwardTo: string;
  copyEnabled: boolean;
  channelId: string | null;
};

const EMPTY: RoxMailboxPreferences = {
  tags: [],
  rules: [],
  forwardEnabled: false,
  forwardTo: '',
  copyEnabled: false,
  channelId: null,
};

const STORAGE_PREFIX = 'rox-mailbox-preferences:';
const MAX_TAGS = 50;
const MAX_RULES = 50;
const MAX_TEXT = 200;

export function emptyRoxMailboxPreferences(): RoxMailboxPreferences {
  return { ...EMPTY, tags: [], rules: [] };
}

export function roxMailboxStorageKey(mailboxId: string): string {
  return `${STORAGE_PREFIX}${mailboxId}`;
}

function storage(): Storage | undefined {
  try {
    return globalThis.localStorage;
  } catch {
    return undefined;
  }
}

function cleanText(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n]/g, '').trim().slice(0, MAX_TEXT);
}

function parsePreferences(raw: string | null): RoxMailboxPreferences {
  if (!raw) return emptyRoxMailboxPreferences();
  try {
    const parsed = JSON.parse(raw) as Partial<RoxMailboxPreferences>;
    const tags = Array.isArray(parsed.tags)
      ? parsed.tags
          .map((tag) => cleanText(tag))
          .filter((tag) => tag.length > 0)
          .slice(0, MAX_TAGS)
      : [];
    const rules = Array.isArray(parsed.rules)
      ? parsed.rules
          .map((rule) => ({
            from: cleanText(rule?.from),
            tag: cleanText(rule?.tag),
          }))
          .filter((rule) => rule.from.length > 0 && rule.tag.length > 0)
          .slice(0, MAX_RULES)
      : [];
    return {
      tags,
      rules,
      forwardEnabled: parsed.forwardEnabled === true,
      forwardTo: cleanText(parsed.forwardTo),
      copyEnabled: parsed.copyEnabled === true,
      channelId:
        typeof parsed.channelId === 'string' && parsed.channelId.length > 0
          ? parsed.channelId.slice(0, 80)
          : null,
    };
  } catch {
    return emptyRoxMailboxPreferences();
  }
}

export function readRoxMailboxPreferences(
  mailboxId: string
): RoxMailboxPreferences {
  return parsePreferences(
    storage()?.getItem(roxMailboxStorageKey(mailboxId)) ?? null
  );
}

export function writeRoxMailboxPreferences(
  mailboxId: string,
  preferences: RoxMailboxPreferences
): void {
  const stored = parsePreferences(JSON.stringify(preferences));
  storage()?.setItem(roxMailboxStorageKey(mailboxId), JSON.stringify(stored));
}

/** Why a typed mailbox name cannot be used, or undefined when it can. */
export function mailboxNameError(value: string): string | undefined {
  if (value.length === 0 || isAllowedHandle(value)) return undefined;
  return 'Use 3–32 lowercase letters, numbers, dots, underscores, or hyphens. Reserved names, leading or trailing dots, and repeated dots are not allowed.';
}
