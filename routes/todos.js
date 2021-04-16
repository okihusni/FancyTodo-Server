const TodosController = require('../controllers/TodosController')
const { todoAuthorization } = require('../middlewares/auth')
const router = require('express').Router()

router.post('/', TodosController.postTodos)
router.get('/', TodosController.getTodos)
router.get('/:id', todoAuthorization, TodosController.getTodosId)
router.put('/:id', todoAuthorization, TodosController.putTodosId)
router.patch('/:id', todoAuthorization, TodosController.patchTodosId)
router.delete('/:id', todoAuthorization, TodosController.deleteTodosId)

module.exports = router