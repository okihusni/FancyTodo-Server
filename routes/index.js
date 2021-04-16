const router = require('express').Router()
const { authentication } = require('../middlewares/auth')
const todosRouter = require('./todos')
const usersRouter = require('./users')

router.get('/', (req, res) => res.send('home'))
router.use('/users', usersRouter)
router.use(authentication)
router.use('/todos', todosRouter)

module.exports = router