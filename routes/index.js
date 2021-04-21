const router = require('express').Router();
const { authentication } = require('../middlewares/auth');
const todosRouter = require('./todos');
const usersRouter = require('./users');
const axios = require('axios');

router.get('/', (req, res) => res.send('home'));
router.use('/users', usersRouter);
router.get('/quotes', (req, res) => {
  axios.get('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
  .then(({data}) => {
    res.status(200).json({ quote: data.quoteText, author: data.quoteAuthor })
  })
  .catch(err => {
    res.status(500).json(err)
  });
});

router.use(authentication);
router.use('/todos', todosRouter);

module.exports = router;