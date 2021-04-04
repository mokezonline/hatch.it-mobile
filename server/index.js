const express = require('express');
const db = require('../database/index.js');
const controllers = require('./controllers.js');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/users', controllers.createUser);

app.listen(PORT, () => {
  console.log(`hatch.it listening on ${PORT}...`);
});

