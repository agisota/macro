import { describe, expect, it } from 'vitest';
import { offlineAgentBotIds } from './offline-runtimes';

function agent(botId: string, harness: string, harnessId?: string) {
  return { bot: { id: botId }, harness, harness_id: harnessId ?? null };
}

describe('offlineAgentBotIds', () => {
  it('marks roxd agents whose runtime is disconnected', () => {
    const offline = offlineAgentBotIds(
      [agent('away', 'roxd', 'h1'), agent('here', 'roxd', 'h2')],
      [
        { id: 'h1', connected: false },
        { id: 'h2', connected: true },
      ]
    );

    expect(offline.has('away')).toBe(true);
    expect(offline.has('here')).toBe(false);
  });

  it('leaves built-in and cloud runtimes alone', () => {
    const offline = offlineAgentBotIds(
      [
        agent('macro', 'in-memory'),
        agent('cursor', 'cursor'),
        agent('codex', 'codex-cloud'),
      ],
      []
    );

    expect(offline.size).toBe(0);
  });

  it('counts an agent bound to a runtime it cannot see as offline', () => {
    const offline = offlineAgentBotIds(
      [agent('orphan', 'roxd', 'removed'), agent('unbound', 'roxd')],
      [{ id: 'h1', connected: true }]
    );

    expect(offline.has('orphan')).toBe(true);
    expect(offline.has('unbound')).toBe(true);
  });

  it('has no opinion without agents', () => {
    expect(offlineAgentBotIds([], [{ id: 'h1', connected: true }]).size).toBe(
      0
    );
  });
});
