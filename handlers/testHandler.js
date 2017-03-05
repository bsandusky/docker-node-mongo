'use strict'

module.exports = (req, res) => {

  const Test = require('../models/test.js')

  let newTest = {};
  newTest['item'] = "Something added to database"
  newTest['created_at'] = Date.now()

  let test = new Test(newTest)
  test.save()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.json(err)
    })

}
