import { fireAndForget } from '@core/util/fireAndForget';
import { useApproveOwnHarnessPairingMutation } from '@queries/harnesses/harnesses';
import type { UnlistenFn } from '@tauri-apps/api/event';
import { onCleanup, onMount } from 'solid-js';
import { type RoxdStatus, roxdStatus, onRoxdStatus } from './roxd';

/**
 * Approves every pairing code the bundled roxd daemon opens, with the
 * signed-in session, wherever the user is in the app. The daemon re-pairs
 * on its own (an expired credential, a supervisor restart), and nobody types
 * a code on the desktop app, so approval cannot wait for Settings to be open.
 * Mounted by `LocalRuntimeHost`.
 */
export function RoxdPairingApprover() {
  const approve = useApproveOwnHarnessPairingMutation();
  // One attempt per code: a failed approval lets the pairing expire, and the
  // supervisor restarts the daemon with a fresh code.
  const attemptedCodes = new Set<string>();

  const handleStatus = (status: RoxdStatus) => {
    const code = status.pairingCode;
    if (status.phase !== 'pairing' || !code || attemptedCodes.has(code)) return;
    attemptedCodes.add(code);
    approve.mutate(code);
  };

  onMount(() => {
    let disposed = false;
    let unlisten: UnlistenFn | undefined;
    const subscribe = async () => {
      unlisten = await onRoxdStatus(handleStatus);
      if (disposed) {
        fireAndForget(unlisten(), 'roxd-pairing-approver');
        return;
      }
      // A pairing opened before this mounted (e.g. before sign-in) only
      // shows up in the snapshot.
      handleStatus(await roxdStatus());
    };
    fireAndForget(subscribe(), 'roxd-pairing-approver');
    onCleanup(() => {
      disposed = true;
      const dispose = unlisten;
      if (dispose) fireAndForget(dispose(), 'roxd-pairing-approver');
    });
  });

  return null;
}
