const { Todo } = require('../models')

class TodosController {

  static postTodos(req, res) {
    const { title, description, status, due_date } = req.body

    Todo.create({ title, description, status, due_date })
    .then(todo => {
        const { title, description, status, due_date } = todo
        res.status(201).json({ title, description, status, due_date })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static getTodos(req, res) {
    Todo.findAll({ attributes: { exclude: [ 'createdAt', 'updatedAt' ] } })
    .then(todos => {
        res.status(200).json(todos)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static getTodosId(req, res) {
    const { id } = req.params

    Todo.findAll({ where: { id: +id }, attributes: { exclude: ['createdAt', 'updatedAt'] } })
    .then(todo => {
      res.status(200).json(todo)
    })
    .catch(err => {
      res.status (500).json(err)
    })
  }

  static putTodosId(req, res) {
    const { id } = req.params
    const { title, description, status, due_date } = req.body

    Todo.update({ where: {id: +id}, title, description, status, due_date})
    .then(todo => {
      console.log(todo);
    })
  }

  static patchTodosId(req, res) {
    res.send('edit some element in todo by id')
  }

  static deleteTodosId(req, res) {
    res.send('delete todo by id')
  }

}

module.exports = TodosController