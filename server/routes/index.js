var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  var knex = req.app.get('db')
  res.json(['Hello', 'Hi', "G'day"])

  //example of a db call from a route:

  // db.dbFunction(knex)
  //   .then(response => {
  //     res.json(response)
  //   })
  //   .catch(err => {
  //     res.sendStatus(500).send(err + ' SERVER ERROR')
  //   })
})

module.exports = router
