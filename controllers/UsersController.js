const { User } = require('../models')
const bcrypt = require('bcryptjs')

class UserController {
  static register(req, res) {
    const { email, password } = req.body

    User.create({ email, password })
    .then(user => {
      res.status(201).json({ email, password })
    })
  }

  static login(req, res) {
    
  }
}

module.exports = UserController