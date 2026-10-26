import jwt from 'jsonwebtoken';

// Test-only secret: never used outside the test run.
process.env.JWT_SECRET ||= 'taskmere-test-only-secret';

export const TEAM_A = '66f0c0ffee0000000000000a';

export function tokenFor({ team, sub = 'user-tavish' }) {
  return jwt.sign({ sub, team }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '5m' });
}
