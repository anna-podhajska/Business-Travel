var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/approvers', (req, res) => {
  db.getApprovers(req.app.get('db'))
    .then(approvers => {
      res.json(approvers)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

router.get('/clients', (req, res) => {
  db.getClients(req.app.get('db'))
    .then(clients => {
      res.json(clients)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

router.get('/employees', (req, res) => {
  db.getEmployees(req.app.get('db'))
    .then(employees => {
      res.json(employees)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

router.get('/projects', (req, res) => {
  db.getProjects(req.app.get('db'))
    .then(projects => {
      res.json(projects)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})

router.get('/sites', (req, res) => {
  db.getSites(req.app.get('db'))
    .then(sites => {
      res.json(sites)
    })
    .catch(err => {
      res.status(500).send(err + ' SERVER ERROR')
    })
})


module.exports = router
