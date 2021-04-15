require('dotenv').config()
const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000

//json raw parser
app.use(express.json())
//url encoded parser
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(port, () => { 
  console.log(`app run on port: ${port}`)
})