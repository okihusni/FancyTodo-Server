const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

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
        const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        return res.status(200).json({ access_token });
      }
      throw { name: "LOGIN_FAIL" };
    })
    .catch(err => { next(err) });
  };

  static googleLogin(req, res, next) {
    const client = new OAuth2Client(process.env.CLIENT_ID);
    const token = req.body.token;
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      // const userid = payload['sub'];
      // If request specified a G Suite domain:
      // const domain = payload['hd'];
      User.findOne({ where: { email: payload.email } })
      .then(user => {
        if(!user) {
          return User.create({
            where: { 
              email: payload.email,
              password: process.env.DEFAULT_PASSWORD
            } 
          })
        }
        else {
          return user
        }
      })
      .then(user => {
        const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        return res.status(200).json({ access_token });
      })
      .catch(err => { next(err) });
    }
    verify().catch(console.error);
  };
};


module.exports = UserController