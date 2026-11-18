import { describe, expect, it } from 'vitest';
import {
  PREFILL_CAP,
  prefillableTeammates,
  removeInviteSlot,
  validInviteEmails,
} from './teamInvites';

const contact = (email: string) => ({ email });

describe('prefillableTeammates', () => {
  it('picks same-domain contacts, skipping the user and duplicates', () => {
    expect(
      prefillableTeammates({
        contacts: [
          contact('ada@rox.one'),
          contact('grace@other.com'),
          contact('ada@rox.one'),
          contact('me@rox.one'),
          contact('alan@rox.one'),
        ],
        domain: 'rox.one',
        ownEmail: 'me@rox.one',
      })
    ).toEqual(['ada@rox.one', 'alan@rox.one']);
  });

  it('pre-adds nothing without a suggested domain', () => {
    expect(
      prefillableTeammates({
        contacts: [contact('ada@gmail.com')],
        domain: undefined,
        ownEmail: 'me@gmail.com',
      })
    ).toEqual([]);
  });

  it('caps how many teammates get pre-added', () => {
    const contacts = Array.from({ length: PREFILL_CAP + 3 }, (_, i) =>
      contact(`teammate${i}@rox.one`)
    );
    expect(
      prefillableTeammates({
        contacts,
        domain: 'rox.one',
        ownEmail: 'me@rox.one',
      })
    ).toHaveLength(PREFILL_CAP);
  });
});

describe('removeInviteSlot', () => {
  it('drops the row at the index, keeping one empty row when the last goes', () => {
    expect(removeInviteSlot(['a@rox.one', 'b@rox.one', ''], 1)).toEqual([
      'a@rox.one',
      '',
    ]);
    expect(removeInviteSlot(['a@rox.one'], 0)).toEqual(['']);
  });
});

describe('validInviteEmails', () => {
  it('normalizes case before deduplication and self exclusion', () => {
    expect(
      validInviteEmails(
        ['ADA@ROX.ONE', 'ada@rox.one', 'ME@ROX.ONE'],
        'me@rox.one'
      )
    ).toEqual(['ada@rox.one']);
  });
  it('trims, dedupes, and drops blanks, junk, and the user themselves', () => {
    expect(
      validInviteEmails(
        [' ada@rox.one ', 'ada@rox.one', '', 'nope', 'me@rox.one'],
        'me@rox.one'
      )
    ).toEqual(['ada@rox.one']);
  });
});
