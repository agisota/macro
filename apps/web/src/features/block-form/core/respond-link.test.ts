import { expect, it } from 'vitest';
import { respondLink } from './respond-link';

it('builds the respond address under the base it is given', () => {
  expect(respondLink('https://rox.one/app/', 'form 1')).toBe(
    'https://rox.one/app/form/form%201/respond'
  );
  expect(respondLink('/', 'form-1')).toBe('/form/form-1/respond');
});
