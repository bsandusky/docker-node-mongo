'use strict'

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/index.js')
const app = express()
require('dotenv').load();

mongoose.connect(process.env.MONGO_URI)
mongoose.Promise = global.Promise;

routes(app)

app.listen(process.env.PORT, () => {
  console.log('Server listening on port ' + process.env.PORT);
})
