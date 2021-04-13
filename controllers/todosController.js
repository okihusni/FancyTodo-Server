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

    Todo.findByPk(+id, { attributes: { exclude: ['createdAt', 'updatedAt'] } })
    .then(todo => {
      if(todo) {
        res.status(200).json(todo)
      }
      else res.status(404).json({err: "not found"})
    })
    .catch(err => {
      res.status (500).json(err)
    })
  }

  static putTodosId(req, res) {
    const { id } = req.params
    const { title, description, status, due_date } = req.body

    Todo.findByPk(+id)
    .then(todo => {
      if(todo) {
        todo.title = title
        todo.description = description
        todo.status = status
        todo.due_date = due_date

        return todo.save()
      }
      else {
        res.status(404).json({error: "not found"})
      }
    })
    .then(todo => {
      res.status(200).json({ title: todo.title, description: todo.description, status: todo.status, due_date: todo.due_date })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static patchTodosId(req, res) {
    const { id } = req.params
    const { status } = req.body

    Todo.findByPk(+id)
    .then(todo => {
      if(todo) {
        todo.status = status

        return todo.save()
      }
      else res.status(404).json({error: "not found"})
    })
    .then(todo => {
      res.status(200).json({ title: todo.title, description: todo.description, status: todo.status, due_date: todo.due_date })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static deleteTodosId(req, res) {
    const { id } = req.params

    Todo.findByPk(+id)
    .then(result => {
      if(result) return result.destroy()
      else res.status(404).json({ error: "not found" })
    })
    .then(result => {
      res.status(200).json({message: "todo success to delete"})
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

}

module.exports = TodosController