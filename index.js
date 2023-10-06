require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const express = require('express')
const path = require('path');
const { getRoutes } = require('./dist/startup/routes.js');
const { getAssociations } = require('./dist/models/associations.js');
const cors = require('cors');

const app = express();
const port = 3000;

// Importing associations
getAssociations();

// Middlewares
app.use(cors());

// Importing routes
getRoutes(app);


// Serving frontend application
app.use('/', express.static(path.join(__dirname, './app/dist')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
