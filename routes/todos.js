const todosController = require('../controllers/todosController')
const router = require('express').Router()

router.post('/', todosController.postTodos)
router.get('/', todosController.getTodos)
router.get('/:id', todosController.getTodosId)
router.put('/:id', todosController.putTodosId)
router.patch('/:id', todosController.patchTodosId)
router.delete('/:id', todosController.deleteTodosId)

module.exports = router