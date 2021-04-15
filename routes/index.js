const router = require('express').Router()
const UserController = require('../controllers/UsersController')
const todosRouter = require('./todos')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use('/todos', todosRouter)

module.exports = router