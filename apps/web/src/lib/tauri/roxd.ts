import { invoke } from '@tauri-apps/api/core';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';

/**
 * Bridge to the bundled roxd daemon (the local agent runtime) supervised by
 * the desktop app's main process. Desktop only: callers gate on
 * `isDesktopPlatform()` before touching anything here.
 */

export type RoxdPhase =
  | 'stopped'
  | 'starting'
  | 'installing-adapter'
  | 'pairing'
  | 'running'
  | 'error';

/** The daemon snapshot the main process folds service events into. */
export type RoxdStatus = {
  phase: RoxdPhase;
  agentId: string | null;
  agentName: string | null;
  workspace: string | null;
  /** Open pairing code awaiting approval, `XXXX-XXXX`. */
  pairingCode: string | null;
  pairingExpiresAt: string | null;
  harnessId: string | null;
  lastError: string | null;
};

export type RoxdSupport = {
  /** Whether this build bundles the daemon on this platform. */
  supported: boolean;
  /** Suggested workspace directory for a first-time setup. */
  defaultWorkspace: string | null;
};

/** One installed agent, as reported by `roxd detect-agents`. */
export type RoxdDetectedAgent = {
  /** Stable preset id accepted by {@link roxdStart}, e.g. `claude-code`. */
  id: string;
  name: string;
  note: string | null;
  /** Whether selecting this agent downloads an ACP adapter first. */
  needs_install: boolean;
};

/** The service config's state, as reported by `roxd inspect`. */
export type RoxdInspection = {
  config_path: string;
  exists: boolean;
  paired: boolean;
  error?: string;
  harness_id?: string;
  agent_id?: string;
  agent_name?: string;
  workspace?: string;
  web_url?: string;
};

export type RoxdStartOptions = {
  agent?: string;
  workspace?: string;
};

export function roxdSupport(): Promise<RoxdSupport> {
  return invoke<RoxdSupport>('roxd_support');
}

export async function roxdDetectAgents(): Promise<RoxdDetectedAgent[]> {
  const result = await invoke<{ agents: RoxdDetectedAgent[] }>(
    'roxd_detect_agents'
  );
  return result.agents;
}

export function roxdInspect(): Promise<RoxdInspection> {
  return invoke<RoxdInspection>('roxd_inspect');
}

export function roxdStart(
  options: RoxdStartOptions
): Promise<RoxdStatus> {
  return invoke<RoxdStatus>('roxd_start', { options });
}

export function roxdStop(): Promise<RoxdStatus> {
  return invoke<RoxdStatus>('roxd_stop');
}

export function roxdStatus(): Promise<RoxdStatus> {
  return invoke<RoxdStatus>('roxd_status');
}

/** Subscribe to daemon snapshot changes; resolves to the unlisten function. */
export function onRoxdStatus(
  callback: (status: RoxdStatus) => void
): Promise<UnlistenFn> {
  return listen<RoxdStatus>('roxd-status', (event) =>
    callback(event.payload)
  );
}
