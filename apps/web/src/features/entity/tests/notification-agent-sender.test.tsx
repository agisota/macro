import type { NotificationStack } from '@notifications';
import {
  getNotificationAgentSender,
  getUniqueAgentSenders,
} from '@notifications/notification-sender';
import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { NotificationDescription } from '../extractors-notification/notification-description';
import { NotificationSenderIcon } from '../extractors-notification/notification-sender-icon';
import type { Notification } from '../types/notification';

vi.mock('@core/user', () => ({
  getDisplayNameParts: (id: string) => ({
    firstName: id === 'macro|peter@rox.one' ? 'Peter' : 'Ana',
    fullName: '',
  }),
  tryMacroId: (id: string) => id,
}));
vi.mock('@core/component/UserIcon', () => ({
  UserIcon: (props: { id: string }) => (
    <span data-testid="user-icon">{props.id}</span>
  ),
}));
vi.mock('@channel/Message/BotIcon', () => ({
  BotIcon: (props: { name?: string; avatarUrl?: string }) => (
    <span data-testid="bot-icon" data-avatar={props.avatarUrl ?? ''}>
      {props.name}
    </span>
  ),
}));

afterEach(cleanup);

const commentNotification = (
  overrides: {
    senderId?: string | null;
    senderDisplayName?: string | null;
    senderProfilePictureUrl?: string | null;
    tag?: string;
  } = {}
): Notification =>
  ({
    id: crypto.randomUUID(),
    sender_id: overrides.senderId ?? null,
    notification_metadata: {
      tag: overrides.tag ?? 'replied_to_document_comment_thread',
      content: {
        commentId: 'comment-1',
        documentName: 'Plan',
        senderDisplayName: overrides.senderDisplayName ?? null,
        senderProfilePictureUrl: overrides.senderProfilePictureUrl ?? null,
      },
    },
  }) as unknown as Notification;

const stackOf = (notifications: Notification[]) =>
  ({
    type: 'replied_to_document_comment_thread',
    notifications,
  }) as unknown as NotificationStack;

describe('getNotificationAgentSender', () => {
  it('reads the agent name and avatar from comment metadata', () => {
    expect(
      getNotificationAgentSender(
        commentNotification({
          senderDisplayName: 'Rox',
          senderProfilePictureUrl: 'https://cdn/macro.png',
        })
      )
    ).toEqual({ name: 'Rox', avatarUrl: 'https://cdn/macro.png' });
  });

  it('ignores human senders and notifications without an agent name', () => {
    expect(
      getNotificationAgentSender(
        commentNotification({
          senderId: 'macro|peter@rox.one',
          senderDisplayName: 'Rox',
        })
      )
    ).toBeUndefined();
    expect(getNotificationAgentSender(commentNotification())).toBeUndefined();
  });

  it('only treats comment notifications as agent-authored', () => {
    expect(
      getNotificationAgentSender(
        commentNotification({
          tag: 'channel_mention',
          senderDisplayName: 'Rox',
        })
      )
    ).toBeUndefined();
  });

  it('deduplicates agents across a stack by name', () => {
    expect(
      getUniqueAgentSenders([
        commentNotification({ senderDisplayName: 'Rox' }),
        commentNotification({ senderDisplayName: 'Rox' }),
        commentNotification({ senderDisplayName: 'Helper' }),
      ]).map((agent) => agent.name)
    ).toEqual(['Rox', 'Helper']);
  });
});

describe('agent-authored comment notifications', () => {
  it('names the agent before the action', () => {
    const { container } = render(() => (
      <NotificationDescription
        notification={commentNotification({ senderDisplayName: 'Rox' })}
      />
    ));
    expect(container.textContent).toBe('Rox replied to a comment');
  });

  it('shows the agent icon in the sender slot', () => {
    const { getByTestId } = render(() => (
      <NotificationSenderIcon
        notification={commentNotification({
          senderDisplayName: 'Rox',
          senderProfilePictureUrl: 'https://cdn/macro.png',
        })}
      />
    ));
    const icon = getByTestId('bot-icon');
    expect(icon.textContent).toBe('Rox');
    expect(icon.dataset.avatar).toBe('https://cdn/macro.png');
  });

  it('counts the agent as a sender in a stack', () => {
    const stack = stackOf([
      commentNotification({ senderId: 'macro|peter@rox.one' }),
      commentNotification({ senderDisplayName: 'Rox' }),
      commentNotification({ senderDisplayName: 'Rox' }),
    ]);
    const { container, getAllByTestId } = render(() => (
      <>
        <NotificationDescription stack={stack} />
        <NotificationSenderIcon stack={stack} />
      </>
    ));
    expect(container.textContent).toContain('3 replies from Peter and Rox');
    expect(getAllByTestId('user-icon')).toHaveLength(1);
    expect(getAllByTestId('bot-icon')).toHaveLength(1);
  });

  it('names a stack from a single agent', () => {
    const { container } = render(() => (
      <NotificationDescription
        stack={stackOf([
          commentNotification({ senderDisplayName: 'Rox' }),
          commentNotification({ senderDisplayName: 'Rox' }),
        ])}
      />
    ));
    expect(container.textContent).toBe('Rox: 2 replies');
  });
});
