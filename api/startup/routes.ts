import * as express from 'express';
import { error } from '../middleware/error';
import styles from '../routes/styles.routes';
import categories from '../routes/categories.routes';

export function getRoutes(app: express.Application) {
  app.use(express.json());

  // CATEGORIES ROUTES
  app.use('/api/categories', categories);

  // STYLES ROUTES
  app.use('/api/styles', styles);

  app.use(error);
}
