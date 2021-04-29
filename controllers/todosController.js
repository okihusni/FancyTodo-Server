const { Todo } = require('../models');

class TodosController {
  static postTodos(req, res, next) {
    console.log(req);
    const { title, description, status, due_date } = req.body;

    Todo.create({ title, description, status, due_date, userId: req.userId })
    .then(todo => {
      res.status(201).json({ data: todo });
    })
    .catch(err => { next(err) });
  };

  static getTodos(req, res, next) {
    Todo.findAll({ where: { userId: req.userId }, order: [['due_date', 'ASC']] })
    .then(todos => {
      res.status(200).json({ data: todos });
    })
    .catch(err =>  next(err) );
  };

  static getTodosId(req, res) {
    res.status(200).json({ data: req.todo });
  };

  static putTodosId(req, res, next) {
    const { title, description, status, due_date } = req.body;
    const { todo } = req;

    todo.title = title;
    todo.description = description;
    todo.status = status;
    todo.due_date = due_date;
    todo.save()
    .then(todo => { 
      res.status(200).json({ data: todo }) 
    })
    .catch(err => next(err));
  };

  static patchTodosId(req, res, next) {
    const { status } = req.body;
    const { todo } = req;

    todo.status = status;
    todo.save()
    .then(todo => {
      res.status(200).json({ data: todo });
    })
    .catch(err => next(err));
  };

  static deleteTodosId(req, res, next) {
    const { todo } = req;

    todo.destroy()
    .then(_ => {
      res.status(200).json({ message: "todo success to delete" });
    })
    .catch(err => next(err));
  };
  
}

module.exports = TodosController