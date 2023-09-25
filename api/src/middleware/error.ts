import express from 'express';

export function error(err: unknown, res: express.Response) {
  // winston.error(err.message); // TODO: add winston for logging
  console.error(err);
  res.status(500).json({ message: 'An error occurred' });
}
