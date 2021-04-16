const { Todo } = require('../models');

class TodosController {
  static postTodos(req, res) {
    const { title, description, status, due_date } = req.body;

    Todo.create({ title, description, status, due_date, userId: req.userId })
    .then(todo => {
        res.status(201).json({ data: todo});
    })
    .catch(err => {
      if(err.name === "SequelizeValidationError") {
        res.status(400).json({ error: "SequelizeValidationError" });
      }
      else {
        res.status(500).json({ error: "Internal Server Error "});
      };
    });
  };

  static getTodos(req, res) {
    Todo.findAll({where: { userId: req.userId } })
    .then(todos => {
        res.status(200).json({ data: todos });
    })
    .catch(err => {
      res.status(500).json({ error: "Internal Server Error" });
    });
  };

  static getTodosId(req, res) {
    res.status(200).json({ data: req.todo });
  };

  static putTodosId(req, res) {
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
    .catch(err => {
      res.status(500).json({ error: "Internal Server Error" });
    });
  };

  static patchTodosId(req, res) {
    const { status } = req.body;
    const { todo } = req;
    console.log(todo);

    todo.status = status;
    todo.save()
    .then(todo => {
      res.status(200).json({ data: todo });
    })
    .catch(err => {
      res.status(500).json({ error: "Internal Server Error" });
    });
  };

  static deleteTodosId(req, res) {
    const { todo } = req;

    todo.destroy()
    .then(_ => {
      res.status(200).json({ message: "todo success to delete" });
    })
    .catch(err => {
      res.status(500).json({ error: "Internal Server Error" });
    });
  };
  
}

module.exports = TodosController