const jwt = require('jsonwebtoken');
const { User, Todo } = require('../models');

const authentication = (req, res, next) => {
  if(!req.headers.access_token) next(err);

  try {
    const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET);
    User.findByPk(decoded.id)
    .then(user => {
      req.userId = decoded.id;
      next();
    })
  } catch (err) {
    next(err);
  };
};

const todoAuthorization = (req, res, next) => {
  const { id } = req.params;

  Todo.findOne({where: {id, userId: req.userId } })
  .then(todo => {
    if(!todo) next(err);
    
    req.todo = todo;
    next();
  })
  .catch(err => {
    next(err);
  });
};

module.exports = { authentication, todoAuthorization };