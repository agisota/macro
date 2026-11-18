import { describe, expect, it } from 'vitest';
import { canBypassOnboarding, isMacroStaffEmail } from './staff';

describe('canBypassOnboarding', () => {
  it('shows Bypass for @rox.one accounts', () => {
    expect(canBypassOnboarding('wolf@rox.one')).toBe(true);
    expect(canBypassOnboarding('Wolf@rox.one')).toBe(true);
    expect(canBypassOnboarding('  wolf@rox.one  ')).toBe(true);
  });

  it('hides Bypass from everyone else', () => {
    expect(canBypassOnboarding('ada@gmail.com')).toBe(false);
    expect(canBypassOnboarding('ada@notrox.one')).toBe(false);
    expect(canBypassOnboarding(undefined)).toBe(false);
    expect(canBypassOnboarding('not-an-email')).toBe(false);
  });
});

describe('isMacroStaffEmail', () => {
  it('matches only the rox.one domain', () => {
    expect(isMacroStaffEmail('ada@rox.one')).toBe(true);
    expect(isMacroStaffEmail('ada@MACRO.com')).toBe(true);
    expect(isMacroStaffEmail('ada@sub.rox.one')).toBe(false);
    expect(isMacroStaffEmail('ada@gmail.com')).toBe(false);
  });
});
