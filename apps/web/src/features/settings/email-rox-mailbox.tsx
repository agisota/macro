import { toast } from '@core/component/Toast/Toast';
import { SERVER_HOSTS } from '@core/constant/servers';
import { useChannelsContext } from '@core/context/channels';
import { useEmail, useUserId } from '@core/context/user';
import {
  ROX_MAILBOX_FOLDERS,
  isAllowedHandle,
  mailboxAddress,
  mailboxNameError,
  readRoxMailboxPreferences,
  writeRoxMailboxPreferences,
  type RoxMailboxPreferences,
} from '@core/email/rox-mailbox';
import { useEmailLinks } from '@core/email-link';
import { fireAndForget } from '@core/util/fireAndForget';
import { platformFetch } from '@core/util/platformFetch';
import { Button, ToggleSwitch } from '@ui';
import { createEffect, createSignal, For, Show } from 'solid-js';
import {
  SettingsCard,
  SettingsRow,
  SettingsSection,
} from './primitives';

// Russian captions for the two addresses live only in
// lib/i18n/locales/ru-pending/mail.json. This screen does not load that file.

const inputClass = 'settings-input w-full min-w-0';

/**
 * Claims a mailbox name through the auth handle route, then opens the ROX
 * link. Does not call the mail host or `RoxMailboxProvisioner::production`.
 */
async function claimMailboxName(handle: string): Promise<void> {
  const response = await platformFetch(
    `${SERVER_HOSTS['auth-service']}/user/handle`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ handle }),
    }
  );
  if (response.status === 409) {
    throw new Error('taken');
  }
  if (!response.ok) {
    throw new Error('rejected');
  }
  const body = (await response.json()) as { address?: unknown };
  if (typeof body.address !== 'string' || body.address.length === 0) {
    throw new Error('rejected');
  }
}

export function RoxMailboxSettings() {
  const email = useEmail();
  const userId = useUserId();
  const channelContext = useChannelsContext();
  const { query, initEmailLink } = useEmailLinks();
  const [name, setName] = createSignal('');
  const [claiming, setClaiming] = createSignal(false);
  const [prefs, setPrefs] = createSignal(readRoxMailboxPreferences('pending'));
  const [tagDraft, setTagDraft] = createSignal('');
  const [ruleFrom, setRuleFrom] = createSignal('');
  const [ruleTag, setRuleTag] = createSignal('');
  const [loadedFor, setLoadedFor] = createSignal('');

  const links = () => (query.isSuccess ? query.data.links : []);
  const roxLink = () =>
    links().find(
      (link) => link.provider === 'ROX' && link.macro_id === userId()
    );
  const mailboxId = () => roxLink()?.id ?? 'pending';
  const roxAddress = () => {
    const linked = roxLink()?.email_address;
    if (linked) return linked;
    const typed = name().trim();
    return isAllowedHandle(typed) ? mailboxAddress(typed) : undefined;
  };
  const nameError = () => mailboxNameError(name().trim());
  const channelOptions = () =>
    channelContext
      .channels()
      .filter((channel) => channel.name)
      .map((channel) => ({
        id: channel.id,
        name: channel.name ?? channel.id,
      }));

  createEffect(() => {
    const id = mailboxId();
    if (loadedFor() === id) return;
    setLoadedFor(id);
    setPrefs(readRoxMailboxPreferences(id));
  });

  const save = (next: RoxMailboxPreferences) => {
    setPrefs(next);
    writeRoxMailboxPreferences(mailboxId(), next);
  };

  const claim = async () => {
    const handle = name().trim();
    if (claiming() || !isAllowedHandle(handle) || roxLink()) return;
    setClaiming(true);
    try {
      await claimMailboxName(handle);
      const opened = await initEmailLink();
      if (opened.isErr()) {
        toast.failure(
          'The name was saved, but the Rox mailbox could not be opened.'
        );
        return;
      }
      toast.success('Rox mailbox is now the default address.');
      setName('');
    } catch (cause) {
      toast.failure(
        cause instanceof Error && cause.message === 'taken'
          ? 'That name is taken, or this account already chose one.'
          : 'That name could not be claimed.'
      );
    } finally {
      setClaiming(false);
    }
  };

  const addTag = () => {
    const tag = tagDraft().trim();
    if (!tag || prefs().tags.some((existing) => existing === tag)) return;
    save({ ...prefs(), tags: [...prefs().tags, tag] });
    setTagDraft('');
  };

  const addRule = () => {
    const from = ruleFrom().trim();
    const tag = ruleTag().trim();
    if (!from || !tag) return;
    save({ ...prefs(), rules: [...prefs().rules, { from, tag }] });
    setRuleFrom('');
    setRuleTag('');
  };

  return (
    <SettingsSection
      title="Rox mailbox"
      description="Your default address, separate from the email you signed in with. Google Workspace and Outlook stay connected above."
    >
      <SettingsCard>
        <SettingsRow
          label="Sign-in"
          description="The address you used to enter. It is not the Rox mailbox."
        >
          <span class="ph-no-capture text-sm text-ink">
            {email() || 'No sign-in address'}
          </span>
        </SettingsRow>
        <SettingsRow
          label="Rox mailbox"
          description="Default address. Incoming mail stays in this inbox."
        >
          <span class="ph-no-capture flex items-center gap-2 text-sm text-ink">
            <span>{roxAddress() ?? 'Choose a name'}</span>
            <Show when={roxAddress()}>
              <span class="rounded bg-edge-muted px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ink-muted">
                Default
              </span>
            </Show>
          </span>
        </SettingsRow>
        <Show when={!roxLink() && !query.isPending}>
          <SettingsRow
            stackOnNarrow
            align="start"
            label="Mailbox name"
            description="3–32 lowercase letters, numbers, dots, underscores, or hyphens. Reserved and taken names are refused."
          >
            <form
              class="flex min-w-0 flex-col gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                fireAndForget(claim(), 'email-settings');
              }}
            >
              <input
                class={inputClass}
                type="text"
                autocomplete="username"
                minLength={3}
                maxLength={32}
                pattern="[a-z0-9._-]+"
                aria-label="Mailbox name"
                value={name()}
                disabled={claiming()}
                onInput={(event) => setName(event.currentTarget.value)}
              />
              <Show when={nameError()}>
                <p role="alert" class="text-sm text-ink-muted">
                  {nameError()}
                </p>
              </Show>
              <Button
                type="submit"
                variant="secondary"
                size="sm"
                disabled={claiming() || !isAllowedHandle(name().trim())}
              >
                {claiming() ? 'Saving name…' : 'Use this mailbox'}
              </Button>
            </form>
          </SettingsRow>
        </Show>
      </SettingsCard>

      <SettingsCard>
        <SettingsRow label="Folders" description="The Rox mailbox folders." />
        <For each={ROX_MAILBOX_FOLDERS}>
          {(folder) => (
            <SettingsRow label={folder.name} description={folder.detail}>
              <Show when={folder.id === 'inbox'}>
                <span class="text-xs text-ink-muted">Default</span>
              </Show>
            </SettingsRow>
          )}
        </For>
      </SettingsCard>

      <SettingsCard>
        <SettingsRow
          stackOnNarrow
          label="Automatic tags"
          description="Tags applied by the rules below. They stay on this mailbox."
        >
          <form
            class="flex min-w-0 items-center gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              addTag();
            }}
          >
            <input
              class={inputClass}
              type="text"
              aria-label="Automatic tag"
              value={tagDraft()}
              onInput={(event) => setTagDraft(event.currentTarget.value)}
            />
            <Button type="submit" variant="secondary" size="sm">
              Add tag
            </Button>
          </form>
        </SettingsRow>
        <For each={prefs().tags}>
          {(tag) => (
            <SettingsRow label={tag}>
              <Button
                variant="ghost"
                size="sm"
                aria-label={`Remove tag ${tag}`}
                onClick={() =>
                  save({
                    ...prefs(),
                    tags: prefs().tags.filter((existing) => existing !== tag),
                  })
                }
              >
                Remove
              </Button>
            </SettingsRow>
          )}
        </For>
      </SettingsCard>

      <SettingsCard>
        <SettingsRow
          stackOnNarrow
          align="start"
          label="Processing rules"
          description="When mail arrives from a sender, apply a tag. The message stays in the inbox."
        >
          <form
            class="flex min-w-0 flex-col gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              addRule();
            }}
          >
            <input
              class={inputClass}
              type="text"
              aria-label="Rule sender"
              placeholder="Sender"
              value={ruleFrom()}
              onInput={(event) => setRuleFrom(event.currentTarget.value)}
            />
            <input
              class={inputClass}
              type="text"
              aria-label="Rule tag"
              placeholder="Tag"
              value={ruleTag()}
              onInput={(event) => setRuleTag(event.currentTarget.value)}
            />
            <Button type="submit" variant="secondary" size="sm">
              Add rule
            </Button>
          </form>
        </SettingsRow>
        <For each={prefs().rules}>
          {(rule) => (
            <SettingsRow
              label={rule.from}
              description={`Apply tag “${rule.tag}”.`}
            >
              <Button
                variant="ghost"
                size="sm"
                aria-label={`Remove rule for ${rule.from}`}
                onClick={() =>
                  save({
                    ...prefs(),
                    rules: prefs().rules.filter((existing) => existing !== rule),
                  })
                }
              >
                Remove
              </Button>
            </SettingsRow>
          )}
        </For>
      </SettingsCard>

      <SettingsCard>
        <SettingsRow
          stackOnNarrow
          label="Forwarding"
          description="Keeps a forwarding address for this mailbox. This screen does not send mail."
        >
          <ToggleSwitch
            size="md"
            label="Forward from the Rox mailbox"
            labelClass="sr-only"
            checked={prefs().forwardEnabled}
            onChange={(checked) =>
              save({ ...prefs(), forwardEnabled: checked })
            }
          />
        </SettingsRow>
        <SettingsRow label="Forward to">
          <input
            class={inputClass}
            type="text"
            autocomplete="off"
            aria-label="Forwarding address"
            value={prefs().forwardTo}
            onInput={(event) =>
              save({ ...prefs(), forwardTo: event.currentTarget.value })
            }
          />
        </SettingsRow>
      </SettingsCard>

      <SettingsCard>
        <SettingsRow
          stackOnNarrow
          label="Channel copy"
          description="A copy can go to a channel. The message itself stays in the inbox."
        >
          <ToggleSwitch
            size="md"
            label="Copy incoming mail to a channel"
            labelClass="sr-only"
            checked={prefs().copyEnabled}
            onChange={(checked) => save({ ...prefs(), copyEnabled: checked })}
          />
        </SettingsRow>
        <SettingsRow
          stackOnNarrow
          label="Channel"
          description="Where the copy is posted. The inbox copy is not removed."
        >
          <select
            class={inputClass}
            aria-label="Channel for the inbox copy"
            value={prefs().channelId ?? ''}
            onChange={(event) =>
              save({
                ...prefs(),
                channelId: event.currentTarget.value || null,
              })
            }
          >
            <option value="">Choose a channel</option>
            <For each={channelOptions()}>
              {(channel) => <option value={channel.id}>{channel.name}</option>}
            </For>
          </select>
        </SettingsRow>
      </SettingsCard>
    </SettingsSection>
  );
}
