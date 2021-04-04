const mongoose = require('mongoose');
const db = require('./index.js');
const { Schema, model } = mongoose;

const petSchema = new Schema({
  name: String,
  species: String,
  evolution: Number,
  happiness: Number,
});

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  pet: {
    type: petSchema,
    default: {},
  }
});

const todoSchema = new Schema({
  task: String,
  duration: Number,
  complete: Boolean,
});

const Pets = model('Pets', petSchema);
const Users = model('Users', userSchema);
const Todos = model('Todos', todoSchema);

module.exports = {
  Pets, Users, Todos,
};