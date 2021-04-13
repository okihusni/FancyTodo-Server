const router = require('express').Router()
const todosRouter = require('./todos')

router.get('/', (req, res) => {
  res.send('Todos home')
})
router.use('/todos', todosRouter)

module.exports = router