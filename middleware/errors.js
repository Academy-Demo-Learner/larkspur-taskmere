export function errorHandler(err, req, res, next) {
  if (res.headersSent) return next(err);
  if (err.type === 'entity.parse.failed')
    return res.status(400).json({ error: 'Body is not valid JSON' });
  if (err.type === 'entity.too.large')
    return res.status(413).json({ error: 'Body is too large' });
  if (err.name === 'ZodError')
    return res.status(400).json({ issues: err.issues });
  if (err.name === 'CastError')
    return res.status(400).json({ error: `Bad value for ${err.path}` });
  console.error(err);
  res.status(500).json({ error: 'Something went wrong on our side' });
}
