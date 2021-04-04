const models = require('../database/model.js');

const createUser = (user, callback) => {
  models.Users.create(user)
  .then((response) => {
    callback(null, response);
  })
  .catch((err) => {
    callback(err);
  })
};

module.exports = {
  createUser,
}