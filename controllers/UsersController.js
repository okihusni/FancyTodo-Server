const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {
  static register(req, res, next) {
    const { email, password } = req.body;

    User.create({ email, password })
    .then(() => {
      res.status(201).json({ message: "Success registering" });
    })
    .catch(err => { next(err) });
  };

  static login(req, res, next) {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ access_token });
      }
      throw { name: "LOGIN_FAIL" };
    })
    .catch(err => { next(err) });
  };
};

module.exports = UserController