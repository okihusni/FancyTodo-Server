class TodosController {

  static postTodos(req, res) {
    res.send('create new todo')
  }

  static getTodos(req, res) {
    res.send('display todos')    
  }

  static getTodosId(req, res) {
    res.send('display todo by id')
  }

  static putTodosId(req, res) {
    res.send('edit all element in todo by id')
  }

  static patchTodosId(req, res) {
    res.send('edit some element in todo by id')
  }

  static deleteTodosId(req, res) {
    res.send('delete todo by id')
  }

}

module.exports = TodosController