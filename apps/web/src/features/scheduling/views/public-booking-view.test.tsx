import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, expect, it } from 'vitest';
import type { PublicProfile } from '../core/types';
import type { BookingSource } from '../primitives/booking-flow';
import { PublicBookingView } from './public-booking-view';

const profile: PublicProfile = {
  id: 'team',
  name: 'Macro',
  description: 'Meet the team.',
  eventTypes: [],
};

function renderPage(embedded?: boolean) {
  render(() => (
    <PublicBookingView
      profile={profile}
      source={{} as BookingSource}
      onEvent={() => {}}
      onReceipt={() => {}}
      embedded={embedded}
    />
  ));
}

afterEach(cleanup);

it('carries the Rox name when it is the whole page', () => {
  renderPage();

  expect(screen.getByRole('link', { name: 'Rox Scheduling' })).toBeTruthy();
  expect(screen.getByText('Scheduling by Rox')).toBeTruthy();
});

it('leaves the Rox name to the page that embeds it', () => {
  renderPage(true);

  expect(screen.getByRole('heading', { name: 'Macro' })).toBeTruthy();
  expect(screen.queryByRole('link')).toBeNull();
  expect(screen.queryByText('Scheduling by Rox')).toBeNull();
});
