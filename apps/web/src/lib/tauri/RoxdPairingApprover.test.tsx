import { render, waitFor } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { RoxdPairingApprover } from './RoxdPairingApprover';
import type { RoxdStatus } from './roxd';

const daemon = vi.hoisted(() => ({
  snapshot: undefined as RoxdStatus | undefined,
  emit: undefined as ((status: RoxdStatus) => void) | undefined,
  approve: vi.fn((_code: string) => {}),
}));

vi.mock('./roxd', () => ({
  roxdStatus: async () => daemon.snapshot,
  onRoxdStatus: async (callback: (status: RoxdStatus) => void) => {
    daemon.emit = callback;
    return () => {};
  },
}));
vi.mock('@queries/harnesses/harnesses', () => ({
  useApproveOwnHarnessPairingMutation: () => ({ mutate: daemon.approve }),
}));

function status(
  phase: RoxdStatus['phase'],
  pairingCode: string | null = null
): RoxdStatus {
  return {
    phase,
    agentId: null,
    agentName: null,
    workspace: null,
    pairingCode,
    pairingExpiresAt: null,
    harnessId: null,
    lastError: null,
  };
}

describe('RoxdPairingApprover', () => {
  beforeEach(() => {
    daemon.snapshot = status('stopped');
    daemon.emit = undefined;
    daemon.approve.mockClear();
  });

  it('approves a pairing that opened before it mounted', async () => {
    daemon.snapshot = status('pairing', 'ABCD-1234');
    render(() => <RoxdPairingApprover />);
    await waitFor(() =>
      expect(daemon.approve).toHaveBeenCalledWith('ABCD-1234')
    );
  });

  it('approves each new code from a re-pair once', async () => {
    render(() => <RoxdPairingApprover />);
    await waitFor(() => expect(daemon.emit).toBeDefined());

    daemon.emit?.(status('pairing', 'AAAA-1111'));
    daemon.emit?.(status('pairing', 'AAAA-1111'));
    daemon.emit?.(status('running'));
    daemon.emit?.(status('pairing', 'BBBB-2222'));

    expect(daemon.approve.mock.calls).toEqual([['AAAA-1111'], ['BBBB-2222']]);
  });
});
