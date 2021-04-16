const jwt = require('jsonwebtoken');
const { Todo } = require('../models');

const authentication = (req, res, next) => {
  if(!req.headers.access_token) return res.status(401).json({ error: "access_token not found" });

  try {
    const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid access_token" });
  };
};

const todoAuthorization = (req, res, next) => {
  const { id } = req.params;

  Todo.findOne({where: {id, userId: req.userId } })
  .then(todo => {
    if(!todo) return res.status(404).json({ error: "Not Found" });
    
    req.todo = todo;
    next();
  })
  .catch(err => {
    res.status(500).json({ error: "Internal Server Error" });
  });
};

module.exports = { authentication, todoAuthorization };