const model = require('./model.js');

const createUser = (req, res) => {
  const { body } = req;
  const { email, name } = body;
  const user = { email, name }
  model.createUser(user, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(result);
    }
  })
};

module.exports = {
  createUser,
}