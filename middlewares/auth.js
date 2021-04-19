const jwt = require('jsonwebtoken');
const { User, Todo } = require('../models');

const authentication = (req, res, next) => {
  if(!req.headers.access_token) return next({ name: 'MISSING_ACCESS_TOKEN' });
  
  try {
    const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET);
    req.userId = decoded.id;
  } catch (err) {
    return next({ name: 'INVALID_ACCESS_TOKEN' });
  };
  
  User.findByPk(req.userId)
  .then(user => {
    if(!user) throw ({ name: 'LOGIN_FAIL' })
    next();
  })
  .catch(err => next(err));
};

const todoAuthorization = (req, res, next) => {
  const { id } = req.params;

  Todo.findOne({where: {id, userId: req.userId } })
  .then(todo => {
    if(!todo) throw ({ name: 'TODO_NOT_FOUND' });
    
    req.todo = todo;
    next();
  })
  .catch(err => {
    next(err);
  });
};

module.exports = { authentication, todoAuthorization };