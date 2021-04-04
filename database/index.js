const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/hatchit';

mongoose.connect(mongoUri, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('connected!') });

module.exports = db;