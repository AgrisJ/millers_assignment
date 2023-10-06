import * as express from 'express';

export function error(err: unknown, _req: express.Request, res: express.Response, next?: express.NextFunction): void {
  // winston.error(err.message); // TODO: add winston for logging
  console.error(err);
  res.status(500).json({ message: 'An error occurred' });
}
