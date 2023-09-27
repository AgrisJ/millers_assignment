require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

import express from 'express';
import { getRoutes } from './src/startup/routes';
import { getAssociations } from './src/models/associations';
import cors from 'cors';

const app = express();
const port = 3000;

// Importing associations
getAssociations();

// Middlewares
app.use(cors());

// Importing routes
getRoutes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
