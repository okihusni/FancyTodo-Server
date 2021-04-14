const UserController = require('../controllers/usersController')
const router = require('express').Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router