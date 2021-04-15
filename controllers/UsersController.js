const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
  static register(req, res) {
    const { email, password } = req.body

    User.create({ email, password })
    .then(user => {
      res.status(201).json({ message: "Success registering" })
    })
    .catch(err => {
      if(err.name === "SequelizeValidationError") {
        res.status(400).json({ error: "SequelizeValidationError" })
      }
      else {
        res.status(500).json({ error: "Internal Server Error" })
      }
    })
  }

  static login(req, res) {
    const { email, password } = req.body

    User.findOne({ where: { email } })
    .then(user => {
      if(!user) {
        res.status(401).json({ error: "Invalid email/password" })
      }
      else if(bcrypt.compareSync(password, user.password)) {
        const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(200).json({ access_token })
      }
      else {
        res.status(401).json({ error: "Invalid email/password" })
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Internal Server Error " })
    })
  }
}

module.exports = UserController