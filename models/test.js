'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Test = new Schema({
  item: String,
  created_at: Date
})

module.exports = mongoose.model('Test', Test)
