const router = require('express').Router();
const { authentication } = require('../middlewares/auth');
const todosRouter = require('./todos');
const usersRouter = require('./users');
const axios = require('axios');

router.get('/', (req, res) => res.send('home'));
router.use('/users', usersRouter);
router.get('/trivia', (req, res) => {
  axios({
    method: 'get',
    url: 'https://api.spoonacular.com/food/trivia/random',
    params: {
      apiKey: process.env.SPOONACULAR_API_KEY
    }
  })
  .then(({data}) => {
    res.status(200).json({ trivia: data })
  })
  .catch(err => {
    res.status(500).json(err)
  });
});

router.use(authentication);
router.use('/todos', todosRouter);

module.exports = router;