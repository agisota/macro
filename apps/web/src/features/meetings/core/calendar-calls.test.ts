import { expect, it } from 'vitest';
import { calendarCallNavigation } from './calendar-calls';

it('preserves a different environment host when joining a calendar invitation', () => {
  expect(
    calendarCallNavigation(
      'https://rox.one/app/meet/secret',
      'https://dev.rox.one'
    )
  ).toEqual({ kind: 'external', url: 'https://rox.one/app/meet/secret' });
  expect(
    calendarCallNavigation(
      'https://dev.rox.one/app/meet/secret?join=true',
      'https://dev.rox.one'
    )
  ).toEqual({ kind: 'internal', path: '/meet/secret?join=true' });
  expect(
    calendarCallNavigation('/meet/secret', 'http://localhost:3005')
  ).toEqual({ kind: 'internal', path: '/meet/secret' });
});
