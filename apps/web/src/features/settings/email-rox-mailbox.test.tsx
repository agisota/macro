/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen } from '@solidjs/testing-library';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { RoxMailboxSettings } from './email-rox-mailbox';

const mocks = vi.hoisted(() => ({
  platformFetch: vi.fn(),
  initEmailLink: vi.fn(),
  failure: vi.fn(),
  success: vi.fn(),
}));

vi.mock('@core/context/channels', () => ({
  useChannelsContext: () => ({
    channels: () => [{ id: 'channel-1', name: 'General' }],
  }),
}));
vi.mock('@core/context/user', () => ({
  useEmail: () => () => 'person@example.com',
  useUserId: () => () => 'macro|person@example.com',
}));
vi.mock('@core/email-link', () => ({
  useEmailLinks: () => ({
    query: { isSuccess: true, isPending: false, data: { links: [] } },
    initEmailLink: mocks.initEmailLink,
  }),
}));
vi.mock('@core/util/platformFetch', () => ({
  platformFetch: mocks.platformFetch,
}));
vi.mock('@core/constant/servers', () => ({
  SERVER_HOSTS: { 'auth-service': 'https://auth.test' },
}));
vi.mock('@core/component/Toast/Toast', () => ({
  toast: { failure: mocks.failure, success: mocks.success },
}));

beforeEach(() => {
  localStorage.clear();
  mocks.platformFetch.mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => ({ handle: 'ada', address: ['ada', 'rox.one'].join('@') }),
  });
  mocks.initEmailLink.mockResolvedValue({ isErr: () => false });
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

it('shows the sign-in address apart from the Rox mailbox and keeps the copy on the inbox', () => {
  render(() => <RoxMailboxSettings />);
  expect(screen.getByText('person@example.com')).toBeTruthy();
  expect(screen.getByText('Sign-in')).toBeTruthy();
  expect(screen.getByText('Rox mailbox')).toBeTruthy();
  expect(
    screen.getByRole('switch', { name: 'Copy incoming mail to a channel' })
  ).toBeTruthy();
  expect(
    screen.getByRole('combobox', { name: 'Channel for the inbox copy' })
  ).toBeTruthy();
  expect(screen.getByText('Inbox')).toBeTruthy();
  expect(screen.getByText('Automatic tags')).toBeTruthy();
  expect(screen.getByText('Processing rules')).toBeTruthy();
  expect(screen.getByText('Forwarding')).toBeTruthy();
});

function typeMailboxName(value: string) {
  const input = screen.getByRole('textbox', {
    name: 'Mailbox name',
  }) as HTMLInputElement;
  input.value = value;
  fireEvent.input(input);
}

it('previews name@rox.one and claims the name without calling the mail host', async () => {
  render(() => <RoxMailboxSettings />);
  const mailbox = ['ada', 'rox.one'].join('@');
  typeMailboxName('Ada');
  expect(screen.queryByText(mailbox)).toBeNull();
  expect(screen.getByRole('alert')).toBeTruthy();

  typeMailboxName('ada');
  expect(screen.getByText(mailbox)).toBeTruthy();
  fireEvent.click(screen.getByRole('button', { name: 'Use this mailbox' }));
  await vi.waitFor(() => expect(mocks.platformFetch).toHaveBeenCalledOnce());
  const [url, init] = mocks.platformFetch.mock.calls[0] as [
    string,
    { method: string; body: string },
  ];
  expect(url).toBe('https://auth.test/user/handle');
  expect(url).not.toContain('mail.rox.one');
  expect(init.method).toBe('PUT');
  expect(JSON.parse(init.body)).toEqual({ handle: 'ada' });
  expect(mocks.initEmailLink).toHaveBeenCalledWith();
});
