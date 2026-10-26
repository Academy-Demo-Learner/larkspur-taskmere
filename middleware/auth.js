import jwt from 'jsonwebtoken';

export function requireAuth(req, res, next) {
  const [scheme, token] = (req.get('authorization') ?? '').split(' ');
  if (scheme !== 'Bearer' || !token)
    return res.status(401).json({ error: 'Sign in first' });
  try {
    const claims = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });
    req.user = { id: claims.sub, team: claims.team };
    next();
  } catch {
    res.status(401).json({ error: 'Session expired or invalid' });
  }
}
