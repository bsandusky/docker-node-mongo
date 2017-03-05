'use strict'
const testHandler = require('../handlers/testHandler.js')
const indexHandler = require('../handlers/indexHandler.js')

module.exports = (app) => {

  app.route('/')
    .get(indexHandler)

  app.route('/api/v1/test')
    .get(testHandler)
}
