const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/hatchit';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
});

module.exports = db;