import express from 'express';
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const app = express();
const port = 3000;

// Importing associations
import './src/models/associations';

// Importing routes
import routes from './src/routes';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use routes defined on router
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
