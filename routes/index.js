const router = require('express').Router()
const todosRouter = require('./todos')
const usersRouter = require('./users')

router.get('/', (req, res) => {
  res.send('Todos landing page')
})
router.use('/todos', todosRouter)
router.use('/users', usersRouter)

module.exports = router