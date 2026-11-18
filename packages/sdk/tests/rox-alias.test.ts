import { describe, expect, test } from 'bun:test';
import { Macro, Rox } from '../src/macro';

describe('Rox client class', () => {
  test('is exported under the new name with Macro kept as an alias', () => {
    expect(Rox.name).toBe('Rox');
    expect(Macro).toBe(Rox);
  });

  test('constructs under the new name', () => {
    expect(new Rox({ token: 'fixture' })).toBeInstanceOf(Rox);
  });
});
