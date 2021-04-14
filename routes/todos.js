const TodosController = require('../controllers/TodosController')
const router = require('express').Router()

router.post('/', TodosController.postTodos)
router.get('/', TodosController.getTodos)
router.get('/:id', TodosController.getTodosId)
router.put('/:id', TodosController.putTodosId)
router.patch('/:id', TodosController.patchTodosId)
router.delete('/:id', TodosController.deleteTodosId)

module.exports = router