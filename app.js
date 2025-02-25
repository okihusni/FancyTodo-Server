require('dotenv').config();
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(errorHandler)

app.listen(port, () => { 
  console.log(`app run on port: ${port}`)
})