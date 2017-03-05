'use strict'
const testHandler = require('../handlers/testHandler.js')

module.exports = (app) => {

  app.route('/')
    .get((req, res) => {
      res.send("hello, world!")
    })

  app.route('/api/v1/test')
    .get(testHandler)
}
