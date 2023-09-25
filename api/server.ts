require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

import express from 'express';
import stylesRoutes from './src/routes/styles.routes';
import categoriesRoutes from './src/routes/categories.routes';

const app = express();
const port = 3000;

// Importing associations
import './src/models/associations';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Importing routes
app.use('/api/', stylesRoutes);
app.use('/api/', categoriesRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
